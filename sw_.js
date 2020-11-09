// Tutorials for setting up custom service worker https://www.youtube.com/playlist?list=PL4cUxeGkcC9gTxqJBcDmoi5Q2pzDusSL7
const DYNAMIC_CACHE = "app-dynamic-v1";
const STATIC_CACHE = "app-static-v1";
const MAX_FILES_IN_CACHE = 200;

// const ASSETS = [
//     "/about.html","/ar/babel.config.js","/ar/package-lock.json","/ar/package.json","/ar/public/favicon.ico","/ar/public/img/icons/android-chrome-192x192.png","/ar/public/img/icons/android-chrome-512x512.png","/ar/public/img/icons/android-chrome-maskable-192x192.png","/ar/public/img/icons/android-chrome-maskable-512x512.png","/ar/public/img/icons/apple-touch-icon-120x120.png","/ar/public/img/icons/apple-touch-icon-152x152.png","/ar/public/img/icons/apple-touch-icon-180x180.png","/ar/public/img/icons/apple-touch-icon-60x60.png","/ar/public/img/icons/apple-touch-icon-76x76.png","/ar/public/img/icons/apple-touch-icon.png","/ar/public/img/icons/favicon-16x16.png","/ar/public/img/icons/favicon-32x32.png","/ar/public/img/icons/msapplication-icon-144x144.png","/ar/public/img/icons/mstile-150x150.png","/ar/public/img/icons/safari-pinned-tab.svg","/ar/public/index.html","/ar/public/robots.txt","/ar/README.md","/ar/src/App.vue","/ar/src/assets/logo.png","/ar/src/components/HelloWorld.vue","/ar/src/main.js","/ar/src/registerServiceWorker.js","/css/main.css","/css/reset.css","/details-awl.html","/details-corn.html","/details-lawson-deer-bone-bead.html","/details-mandible.html","/details-phalangebone.html","/docs/_config.yml","/docs/index.md","/images/aaron-lawsite-still.jpg","/images/aaron-longhouse.usdz","/images/awl.png","/images/awl.usdz","/images/burger.svg","/images/cadences_pot_isometric1.png","/images/cadences_pot_isometric2.png","/images/cadences_pot_size.png","/images/cadences_pot.png","/images/cadences_pot.usdz","/images/cindy_pot.usdz","/images/cindy_pot2.png","/images/cindy-pot-1000.png","/images/cindy-pot-720.png","/images/cindy-pot-front-400.png","/images/close.svg","/images/corn-kernel.png","/images/corn-kernel.usdz","/images/corn-size.png","/images/corn.png","/images/flavicon-moalogo.png","/images/heni_longhouse.png","/images/heni_longhouse.usdz","/images/henis_pot.JPG","/images/henis_pot.usdz","/images/icon-512x512.png","/images/icons/android-chrome-192x192.png","/images/icons/android-chrome-512x512.png","/images/icons/apple-touch-icon.png","/images/icons/browserconfig.xml","/images/icons/favicon-16x16.png","/images/icons/favicon-32x32.png","/images/icons/favicon.ico","/images/icons/icon-128x128.png","/images/icons/icon-144x144.png","/images/icons/icon-152x152.png","/images/icons/icon-192x192.png","/images/icons/icon-384x384.png","/images/icons/icon-512x512.png","/images/icons/icon-72x72.png","/images/icons/icon-96x96.png","/images/icons/mstile-150x150.png","/images/icons/safari-pinned-tab.svg","/images/jins_pot.png","/images/jins_pot.usdz","/images/lawson_deer_bone_bead_upper_view.png","/images/lawson_deer_bone_bead.png","/images/lawson_deer_bone_beed.usdz","/images/longhouse-cadence.jpg","/images/longhouse-cadence.usdz","/images/longhouse/Longhouse_uclygy_c_scale,w_1016.png","/images/longhouse/Longhouse_uclygy_c_scale,w_1096.png","/images/longhouse/Longhouse_uclygy_c_scale,w_1176.png","/images/longhouse/Longhouse_uclygy_c_scale,w_1200.png","/images/longhouse/Longhouse_uclygy_c_scale,w_320.png","/images/longhouse/Longhouse_uclygy_c_scale,w_489.png","/images/longhouse/Longhouse_uclygy_c_scale,w_624.png","/images/longhouse/Longhouse_uclygy_c_scale,w_734.png","/images/longhouse/Longhouse_uclygy_c_scale,w_836.png","/images/longhouse/Longhouse_uclygy_c_scale,w_930.png","/images/longhouse/Longhouse.png","/images/longhouse/Longhouse.usdz","/images/mandible-front.png","/images/mandible-side.png","/images/mandible.png","/images/mandible.usdz","/images/moa-instuction-icons.svg","/images/moalogo_final_transparent.png","/images/mohawk-gltz_file.png","/images/mohawk-isometric-1.png","/images/mohawk-isometric-2.png","/images/mohawk-isometric-3.png","/images/paterson_aaron_mohawk.usdz","/images/phalange_bone.usdz","/images/phalange_bone1.png","/images/phalange_bone2.png","/images/phalange_bone3.png","/index.html","/js/88507C13C1223C3F2A335CFAAA4EF584.cache.js","/js/9C51964BB0BBCC41BB79120ED90449EA.cache.js","/js/B566A15506556F952CAD2B7994FFA824.cache.js","/js/clear.cache.gif","/js/compilation-mappings.txt","/js/D9940D84355A4C8E89013B8814821244.cache.js","/js/F4C3969B01AFD421179360B47BCEA2E0.cache.js","/js/functionality.js","/js/jsQR.js","/js/jsqrscanner.devmode.js","/js/jsqrscanner.nocache.js","/js/main.js","/js/scrollmagic.js","/js/ScrollMagic.min.js","/lawsonsite.html","/manifest.json","/package-lock.json","/package.json","/README.md","/supportus.html","/sw2.js","/vid/thumbnail.png",
// ];

// static caching
self.addEventListener('install', e => { 
    e.waitUntil(
        caches.open(STATIC_CACHE).then(cache => {
            cache.addAll(ASSETS);
        })
    );
});

// // delete old cache versions
// self.addEventListener('activate', e => { 
//     e.waitUntil(
//         // retrieve keys from all previous caches
//         caches.keys().then(keys => {
//             // await each promise to resolve, to delete all previous caches~
//             return Promise.all(
//             keys.filter(key => key !== STATIC_CACHE)
//             .map(key => caches.delete())
//             )
//         })
//     )
//  });

// limit cache size to a predetermined number of files
const limitCacheFileCount = (cacheName, cacheSize) => {
    caches.open(DYNAMIC_CACHE).then(cache => {
        cache.keys().then(keys => {

            // recursive delete
            if(keys.length > cacheSize) {
                cache.delete(keys[0]).then(limitCacheFileCount(name, size));
            }
        })
    })
}

// return cached files, or new files from server
self.addEventListener('fetch', e => { 
    e.respondWith(
        caches.match(e.request).then(cacheRes => {
            return cacheRes || fetch(e.request).then(fetchRes => {

                // dynamic caching, within file count limit
                return caches.open(DYNAMIC_CACHE).then(cache => {
                    cache.put(e.request.url, fetchRes.clone());
                    limitCacheFileCount(DYNAMIC_CACHE, MAX_FILES_IN_CACHE);
                    return fetchRes;
                })
            })
        })
    );
});
