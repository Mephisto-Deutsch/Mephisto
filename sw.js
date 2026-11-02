/* Mephisto service worker: offline app shell, updates only when the user taps "Aktualisieren". */
const VERSION = "11.2-f317c3e9b1";
const CACHE = "mephisto-" + VERSION;
const FILES = ["./", "index.html", "manifest.webmanifest", "fonts.css", "icons/apple-touch-icon.png", "icons/favicon-32.png", "icons/icon-192.png", "icons/icon-512.png", "icons/maskable-192.png", "icons/maskable-512.png", "fonts/fraunces-italic.woff", "fonts/fraunces.woff", "fonts/jetbrainsmono.woff", "fonts/sourcesans3.woff", "fonts/sourceserif4-italic.woff", "fonts/sourceserif4.woff", "fonts/unifraktur.woff"];

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
