import assert from "node:assert/strict";
import test from "node:test";
import { default as worker } from "../dist/server/index.js";

const origin = "https://48h.lv";
const routePairs = [
  ["/lv", "/en"],
  ["/lv/hakatonu-organizesana", "/en/corporate-hackathons"],
  ["/lv/24h-sprints", "/en/24h-sprint"],
  ["/lv/48h-hakatons", "/en/48h-hackathon"],
  ["/lv/par-mums", "/en/about"],
];
const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
const ctx = { waitUntil() {}, passThroughOnException() {} };

function request(path) {
  return worker.fetch(new Request(`${origin}${path}`, { headers: { accept: "text/html" } }), env, ctx);
}

test("root redirects permanently to the Latvian homepage", async () => {
  const response = await request("/");
  assert.equal(response.status, 308);
  assert.equal(new URL(response.headers.get("location")).pathname, "/lv");
});

test("all public pages render useful HTML and reciprocal language metadata", async () => {
  const titles = new Set();
  for (const [lv, en] of routePairs) {
    for (const path of [lv, en]) {
      const language = path.startsWith("/lv") ? "lv" : "en";
      const response = await request(path);
      assert.equal(response.status, 200, path);
      const html = await response.text();
      assert.match(html, new RegExp(`<html[^>]*lang="${language}"`), path);
      assert.match(html, /<h1[^>]*>[^<]+<\/h1>/, path);
      assert.ok(html.includes(`<link rel="canonical" href="${origin}${path}"`), path);
      for (const [locale, alternate] of [["lv", lv], ["en", en], ["x-default", lv]]) {
        assert.ok(html.includes(`<link rel="alternate" hrefLang="${locale}" href="${origin}${alternate}"`), `${path}: ${locale}`);
      }
      assert.ok(html.includes('href="https://cal.com/aleksejs-masaitis"'), path);
      assert.ok(!/<meta[^>]*name="robots"[^>]*content="[^"]*noindex/.test(html), path);
      const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
      assert.ok(title && !titles.has(title), `unique title: ${path}`);
      titles.add(title);

      const schemas = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map((match) => JSON.parse(match[1]));
      assert.ok(schemas.some((schema) => schema["@type"] === "Organization" && schema["@id"] === `${origin}/#organization`), path);
      if (path.split("/").length > 2) {
        const graph = schemas.find((schema) => schema["@graph"])?.["@graph"];
        assert.ok(graph?.some((schema) => schema["@type"] === "BreadcrumbList"), path);
        assert.ok(graph?.some((schema) => schema.url === `${origin}${path}`), path);
        if (path !== "/lv/par-mums" && path !== "/en/about") {
          assert.ok(graph.some((schema) => schema["@type"] === "Service" && schema.provider["@id"] === `${origin}/#organization`), path);
          assert.ok(html.includes('<section class="detail-section"'), `server-rendered service content: ${path}`);
        } else {
          const mainContent = html.slice(html.indexOf('<section class="detail-hero'));
          assert.ok(mainContent.includes("Aleksejs Masaitis") && mainContent.includes("Ralfs Roga"), path);
        }
      }
    }
  }
});

test("sitemap includes exactly the canonical pages with translated alternatives", async () => {
  const response = await request("/sitemap.xml");
  assert.equal(response.status, 200);
  const xml = await response.text();
  const locations = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  assert.deepEqual(locations.sort(), routePairs.flat().map((path) => `${origin}${path}`).sort());
  assert.ok(xml.includes('hreflang="x-default"'));
});

test("robots permits search crawlers and advertises the canonical sitemap", async () => {
  const response = await request("/robots.txt");
  assert.equal(response.status, 200);
  const robots = await response.text();
  assert.match(robots, /User-Agent: \*/i);
  assert.match(robots, /Allow: \/(?:\n|$)/);
  assert.ok(!/Disallow: \/(?:\n|$)/.test(robots));
  assert.ok(robots.includes(`Sitemap: ${origin}/sitemap.xml`));
});

test("unknown languages and service slugs return 404", async () => {
  for (const path of ["/fr", "/fr/about", "/lv/unknown", "/en/24h-sprints"]) {
    assert.equal((await request(path)).status, 404, path);
  }
});
