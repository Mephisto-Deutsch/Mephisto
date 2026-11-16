/* Mephisto service worker: offline app shell, updates only when the user taps "Aktualisieren". */
const VERSION = "13.1.0-38480ce035";
const CACHE = "mephisto-" + VERSION;
const FILES = ["./", "index.html", "manifest.webmanifest", "fonts.css", "icons/apple-touch-icon.png", "icons/favicon-32.png", "icons/icon-192.png", "icons/icon-512.png", "icons/maskable-192.png", "icons/maskable-512.png", "fonts/fraunces-italic.woff", "fonts/fraunces.woff", "fonts/jetbrainsmono.woff", "fonts/sourcesans3.woff", "fonts/sourceserif4-italic.woff", "fonts/sourceserif4.woff", "fonts/unifraktur.woff", "js/app.js", "js/data-b2.js", "js/data-base.js", "js/data-bib.js", "js/data-fix.js", "js/data-media.js", "js/data-more.js", "js/data-story.js", "media/art/clarke_10.webp", "media/art/clarke_11.webp", "media/art/clarke_15.webp", "media/art/clarke_18.webp", "media/art/clarke_19.webp", "media/art/clarke_2.webp", "media/art/clarke_20.webp", "media/art/clarke_22.webp", "media/art/clarke_3.webp", "media/art/clarke_31.webp", "media/art/clarke_35.webp", "media/art/clarke_39.webp", "media/art/clarke_40.webp", "media/art/clarke_41.webp", "media/art/clarke_46.webp", "media/art/clarke_47.webp", "media/art/clarke_48.webp", "media/art/clarke_52.webp", "media/art/clarke_54.webp", "media/art/clarke_57.webp", "media/art/clarke_58.webp", "media/art/clarke_59.webp", "media/art/clarke_61.webp", "media/art/clarke_62.webp", "media/art/clarke_63.webp", "media/art/clarke_7.webp", "media/art/delacroix_12.webp", "media/art/delacroix_16.webp", "media/art/delacroix_17.webp", "media/art/delacroix_18.webp", "media/art/delacroix_19.webp", "media/art/delacroix_2.webp", "media/art/delacroix_4.webp", "media/art/delacroix_7.webp", "media/art/dore_13.webp", "media/art/dore_16.webp", "media/art/dore_17.webp", "media/art/dore_18.webp", "media/art/dore_19.webp", "media/art/dore_2.webp", "media/art/dore_23.webp", "media/art/dore_31.webp", "media/art/dore_37.webp", "media/art/dore_4.webp", "media/art/dore_7.webp", "media/art/fahringer_16.webp", "media/art/fahringer_2.webp", "media/art/fahringer_36.webp", "media/art/fahringer_37.webp", "media/art/fahringer_8.webp", "media/art/rackham_10.webp", "media/art/rackham_12.webp", "media/art/rackham_13.webp", "media/art/rackham_15.webp", "media/art/rackham_18.webp", "media/art/rackham_19.webp", "media/art/rackham_5.webp", "media/art/rackham_7.webp", "media/art/rackham_9.webp", "media/art/struwwel_1.webp", "media/art/struwwel_15.webp", "media/art/struwwel_17.webp", "media/art/struwwel_29.webp", "media/art/struwwel_6.webp", "media/art/struwwel_8.webp", "media/bib.json", "media/fonts/pk-01-07bfe4e6.woff", "media/fonts/pk-02-06427f30.woff", "media/fonts/pk-03-d247250b.woff", "media/fonts/pk-04-387bf377.woff", "media/fonts/pk-05-271ae918.woff", "media/fonts/pk-06-77f3309c.woff", "media/fonts/pk-07-6a96740d.woff", "media/fonts/pk-08-9b846b36.woff", "media/fonts/pk-09-03eb4f09.woff", "media/fonts/pk-10-7c9c51c3.woff", "media/fonts/pk-11-a3dc50ad.woff", "media/fonts/pk-12-26ecba72.woff", "media/fonts/pk-13-36252adc.woff", "media/fonts/pk-14-c5d89178.woff", "media/fonts/pk-15-da5736ee.woff", "media/fonts/pk-16-e56fec23.woff"];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES.map(f => new Request(f, { cache: "reload" })))));
  // no skipWaiting here: the page asks first, so the app never reloads in the middle of a session
});

self.addEventListener("message", event => {
  if (event.data && event.data.type === "SKIP_WAITING") self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k.startsWith("mephisto-") && k !== CACHE).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // API calls, external links: straight to the network
  // the manifest: network first so name/icon changes arrive
  if (url.pathname.endsWith("manifest.webmanifest")) {
    event.respondWith(fetch(req).then(r => { const c = r.clone(); caches.open(CACHE).then(x => x.put(req, c)); return r; }).catch(() => caches.match(req)));
    return;
  }
  // page loads (incl. ?a=… shortcuts): the cached shell
  if (req.mode === "navigate") {
    event.respondWith(caches.match("index.html").then(r => r || fetch(req)));
    return;
  }
  event.respondWith(caches.match(req, { ignoreSearch: true }).then(r => r || fetch(req).then(resp => {
    if (resp && resp.ok && resp.type === "basic") { const c = resp.clone(); caches.open(CACHE).then(x => x.put(req, c)); }
    return resp;
  })));
});
