self.addEventListener("install",(function(e){console.log("Installing Service Worker ...")})),self.addEventListener("activate",(function(e){console.log("Activating Service Worker ...")})),self.addEventListener("fetch",(function(e){console.log(e.request),e.respondWith(fetch(e.request))}));
//# sourceMappingURL=sw.bundle.js.map