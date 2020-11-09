if (!self.define) {
  const e = (e) => {
      "require" !== e && (e += ".js");
      let i = Promise.resolve();
      return (
        a[e] ||
          (i = new Promise(async (i) => {
            if ("document" in self) {
              const a = document.createElement("script");
              (a.src = e), document.head.appendChild(a), (a.onload = i);
            } else importScripts(e), i();
          })),
        i.then(() => {
          if (!a[e]) throw new Error(`Module ${e} didn’t register its module`);
          return a[e];
        })
      );
    },
    i = (i, a) => {
      Promise.all(i.map(e)).then((e) => a(1 === e.length ? e[0] : e));
    },
    a = { require: Promise.resolve(i) };
  self.define = (i, c, s) => {
    a[i] ||
      (a[i] = Promise.resolve().then(() => {
        let a = {};
        const n = { uri: location.origin + i.slice(1) };
        return Promise.all(
          c.map((i) => {
            switch (i) {
              case "exports":
                return a;
              case "module":
                return n;
              default:
                return e(i);
            }
          })
        ).then((e) => {
          const i = s(...e);
          return a.default || (a.default = i), a;
        });
      }));
  };
}
define("./sw.js", ["./workbox-5f22278a"], function (e) {
  "use strict";
  self.addEventListener("message", (e) => {
    e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
  }),
    e.precacheAndRoute(
      [
        { url: "_config.yml", revision: "932865e374757d33e321eeb2d5e88b6b" },
        { url: "about.html", revision: "656f66c4ee7331bb0b7e9c6b6f2f9da4" },
        {
          url: "ar/babel.config.js",
          revision: "f3e7d907f34c0ce5a70096716c501a6b",
        },
        {
          url: "ar/package-lock.json",
          revision: "9b0c3b3326e678c3ac7af56e1e1a3183",
        },
        {
          url: "ar/package.json",
          revision: "89e2614f3960ed0115a692fc24560c17",
        },
        {
          url: "ar/public/favicon.ico",
          revision: "1ba2ae710d927f13d483fd5d1e548c9b",
        },
        {
          url: "ar/public/img/icons/android-chrome-192x192.png",
          revision: "f130a0b70e386170cf6f011c0ca8c4f4",
        },
        {
          url: "ar/public/img/icons/android-chrome-512x512.png",
          revision: "0ff1bc4d14e5c9abcacba7c600d97814",
        },
        {
          url: "ar/public/img/icons/android-chrome-maskable-192x192.png",
          revision: "845a39478d0e2d4d5d32a092de2de250",
        },
        {
          url: "ar/public/img/icons/android-chrome-maskable-512x512.png",
          revision: "2695f5feb66cdb0c6f09d0e415824cf9",
        },
        {
          url: "ar/public/img/icons/apple-touch-icon-120x120.png",
          revision: "936d6e411cabd71f0e627011c3f18fe2",
        },
        {
          url: "ar/public/img/icons/apple-touch-icon-152x152.png",
          revision: "1a034e64d80905128113e5272a5ab95e",
        },
        {
          url: "ar/public/img/icons/apple-touch-icon-180x180.png",
          revision: "c43cd371a49ee4ca17ab3a60e72bdd51",
        },
        {
          url: "ar/public/img/icons/apple-touch-icon-60x60.png",
          revision: "9a2b5c0f19de617685b7b5b42464e7db",
        },
        {
          url: "ar/public/img/icons/apple-touch-icon-76x76.png",
          revision: "af28d69d59284dd202aa55e57227b11b",
        },
        {
          url: "ar/public/img/icons/apple-touch-icon.png",
          revision: "66830ea6be8e7e94fb55df9f7b778f2e",
        },
        {
          url: "ar/public/img/icons/favicon-16x16.png",
          revision: "4bb1a55479d61843b89a2fdafa7849b3",
        },
        {
          url: "ar/public/img/icons/favicon-32x32.png",
          revision: "98b614336d9a12cb3f7bedb001da6fca",
        },
        {
          url: "ar/public/img/icons/msapplication-icon-144x144.png",
          revision: "b89032a4a5a1879f30ba05a13947f26f",
        },
        {
          url: "ar/public/img/icons/mstile-150x150.png",
          revision: "058a3335d15a3eb84e7ae3707ba09620",
        },
        {
          url: "ar/public/img/icons/safari-pinned-tab.svg",
          revision: "4e857233cbd3bb2d2db4f78bed62a52f",
        },
        {
          url: "ar/public/index.html",
          revision: "2e3d11f9e4be8c07112bbba640fe8a38",
        },
        {
          url: "ar/public/robots.txt",
          revision: "b6216d61c03e6ce0c9aea6ca7808f7ca",
        },
        { url: "ar/README.md", revision: "bbbb07304d1d9c6007f38b4748445fcf" },
        { url: "ar/src/App.vue", revision: "178def26d65c06670e058c97defefde1" },
        {
          url: "ar/src/assets/logo.png",
          revision: "82b9c7a5a3f405032b1db71a25f67021",
        },
        {
          url: "ar/src/components/HelloWorld.vue",
          revision: "436e6e668ba4e83ec525635e3db29948",
        },
        { url: "ar/src/main.js", revision: "a48ec6793528aeb4d5e5eae732affb8c" },
        {
          url: "ar/src/registerServiceWorker.js",
          revision: "17692e48fd0c161001ca28d491e6fd4d",
        },
        { url: "css/main.css", revision: "148359fad47da48e998d48b96bcf7b6f" },
        { url: "css/reset.css", revision: "7b1a12a07586982fdd111be569dbaec1" },
        {
          url: "details-awl.html",
          revision: "a05558c38b5a0d281ac167130f34693d",
        },
        {
          url: "details-corn.html",
          revision: "a879122bda02357715d4362ed4b0bcf0",
        },
        {
          url: "details-lawson-deer-bone-bead.html",
          revision: "e22f2d904d7a3fb20c1e4259aa5330f3",
        },
        {
          url: "details-mandible.html",
          revision: "76527e7ff54acb56cf4618a9d47154ae",
        },
        {
          url: "details-phalangebone.html",
          revision: "cf0aac3765f5b2f668dbfccacbf900ca",
        },
        {
          url: "docs/_config.yml",
          revision: "932865e374757d33e321eeb2d5e88b6b",
        },
        { url: "docs/index.md", revision: "a3c8844b4b739dc90f4bae6464160282" },
        {
          url: "images/aaron-lawsite-still.jpg",
          revision: "d2d07679ca3b39e9200deb9698963ed9",
        },
        {
          url: "images/aaron-longhouse.usdz",
          revision: "5f38c345fa44b73aa0af6b88e52c9c1a",
        },
        { url: "images/awl.png", revision: "228a2b8be41774a16964042eb5f8c76d" },
        {
          url: "images/awl.usdz",
          revision: "d3aef8fe2fb82d1dd201f0bc84edf791",
        },
        {
          url: "images/burger.svg",
          revision: "0ac50ff24888a9ef67710b45348cb535",
        },
        {
          url: "images/cadences_pot_isometric1.png",
          revision: "8510999f0803b8fda32f9bc69a22113b",
        },
        {
          url: "images/cadences_pot_isometric2.png",
          revision: "ace8247b13f069e3751db497c9b0a6ab",
        },
        {
          url: "images/cadences_pot_size.png",
          revision: "fdc34ccd854f5ccf5fa0916bdea17636",
        },
        {
          url: "images/cadences_pot.png",
          revision: "7f77c0a478828607ecdb58310b8f1544",
        },
        {
          url: "images/cadences_pot.usdz",
          revision: "a22b86a6c90f448d1e41699cec88bcda",
        },
        {
          url: "images/cindy_pot.usdz",
          revision: "e71efa57ce56bc9b82e7365a8cb5728b",
        },
        {
          url: "images/cindy_pot2.png",
          revision: "0877ae1da45af4614871b7e528566183",
        },
        {
          url: "images/cindy-pot-1000.png",
          revision: "a8fc32dc554487e54a1923f4eeec8e69",
        },
        {
          url: "images/cindy-pot-720.png",
          revision: "d7e32d472cbb280a74c95fc72bd21fe0",
        },
        {
          url: "images/cindy-pot-front-400.png",
          revision: "debe3357c0756bcd91c619de76763f61",
        },
        {
          url: "images/close.svg",
          revision: "f2dbe13603d85ff8895049df76ed145e",
        },
        {
          url: "images/corn-kernel.png",
          revision: "6b74359ea96d0bd4d54d71f0883778d8",
        },
        {
          url: "images/corn-kernel.usdz",
          revision: "f9dc68f01e79e803c0688d51fbe28374",
        },
        {
          url: "images/corn-size.png",
          revision: "7493bf99441339dd3f56b75bb0d2e4fa",
        },
        {
          url: "images/corn.png",
          revision: "6a0d5c1a0c107ac05e2ae8fc0d839179",
        },
        {
          url: "images/flavicon-moalogo.png",
          revision: "ca9053b1c760076664673011fa06b6e7",
        },
        {
          url: "images/heni_longhouse.png",
          revision: "ac9e93422dcaf7a606a77af5dc44cce9",
        },
        {
          url: "images/heni_longhouse.usdz",
          revision: "a4f51acaca8ed69da03275584143d286",
        },
        {
          url: "images/henis_pot.JPG",
          revision: "608e60bd6d62fb1040b6036b3d7d357e",
        },
        {
          url: "images/henis_pot.usdz",
          revision: "6f487d16528c65949a17069bf75789cb",
        },
        {
          url: "images/icon-512x512.png",
          revision: "0c1ca57dfced2bf1801bc35b90b9dd88",
        },
        {
          url: "images/icons/android-chrome-192x192.png",
          revision: "1af6bea4d2330edb0077a9d1c6e76882",
        },
        {
          url: "images/icons/android-chrome-512x512.png",
          revision: "b621d7be63d65491f1081daa9d2fd1cb",
        },
        {
          url: "images/icons/apple-touch-icon.png",
          revision: "9cf0a7bda1ce01358c3252ed74969395",
        },
        {
          url: "images/icons/browserconfig.xml",
          revision: "d40001cd3c83bc6face16ac9e6945276",
        },
        {
          url: "images/icons/favicon-16x16.png",
          revision: "5216e46fef7d587e17782e7d54730811",
        },
        {
          url: "images/icons/favicon-32x32.png",
          revision: "74c5a15f80ca137b7931a4c4f8039529",
        },
        {
          url: "images/icons/favicon.ico",
          revision: "f30bd2a45d4e2dfb3b0e9d4f4fc84051",
        },
        {
          url: "images/icons/icon-128x128.png",
          revision: "e5053783fd429ff2c8bc06c99331f26a",
        },
        {
          url: "images/icons/icon-144x144.png",
          revision: "7a1d73452d43f48154e0b23ed23c832a",
        },
        {
          url: "images/icons/icon-152x152.png",
          revision: "1240c81e30f707ab0efc17b52473a99e",
        },
        {
          url: "images/icons/icon-192x192.png",
          revision: "eba04d5da6e365aef6d6d39002cfcbe8",
        },
        {
          url: "images/icons/icon-384x384.png",
          revision: "610db77d1187d30e19af6d4f856edecc",
        },
        {
          url: "images/icons/icon-512x512.png",
          revision: "0c1ca57dfced2bf1801bc35b90b9dd88",
        },
        {
          url: "images/icons/icon-72x72.png",
          revision: "ee772d57eef887f486321c97974bd980",
        },
        {
          url: "images/icons/icon-96x96.png",
          revision: "bbd5ba108eb9a039814b4ec6c77cfcb7",
        },
        {
          url: "images/icons/mstile-150x150.png",
          revision: "4babb595d8e853343bcbba73aa51b227",
        },
        {
          url: "images/icons/safari-pinned-tab.svg",
          revision: "b1ae0c0c4c548add726222b8bd40337d",
        },
        {
          url: "images/jins_pot.png",
          revision: "0a3cc8f81f9587306de0b471a98119cd",
        },
        {
          url: "images/jins_pot.usdz",
          revision: "afbbb9f8df2ee0f303ea07da9d7f9a41",
        },
        {
          url: "images/lawson_deer_bone_bead_upper_view.png",
          revision: "214992f969334e1f3c4183f7232199c4",
        },
        {
          url: "images/lawson_deer_bone_bead.png",
          revision: "84480ff6e271d2bc7c4af999c5699a80",
        },
        {
          url: "images/lawson_deer_bone_beed.usdz",
          revision: "90fc9dd90f74a78f1ae39e31015287ce",
        },
        {
          url: "images/longhouse-cadence.jpg",
          revision: "abe471fad0e4e069b865d17acafd3966",
        },
        {
          url: "images/longhouse-cadence.usdz",
          revision: "8af121998ad43e30f811a6a280e92e77",
        },
        {
          url: "images/longhouse/Longhouse_uclygy_c_scale,w_1016.png",
          revision: "478d1f280e2ac8408e0e35a64d18fbf1",
        },
        {
          url: "images/longhouse/Longhouse_uclygy_c_scale,w_1096.png",
          revision: "eca3817db4d325597ef38d2502459ec1",
        },
        {
          url: "images/longhouse/Longhouse_uclygy_c_scale,w_1176.png",
          revision: "63851bcc48f69119aab8d0276b3f72c3",
        },
        {
          url: "images/longhouse/Longhouse_uclygy_c_scale,w_1200.png",
          revision: "df9c7b624d28da4529d0f4ac3a347576",
        },
        {
          url: "images/longhouse/Longhouse_uclygy_c_scale,w_320.png",
          revision: "d2013277071fdb582489d299bdf2efb4",
        },
        {
          url: "images/longhouse/Longhouse_uclygy_c_scale,w_489.png",
          revision: "aa9fe3a245d2edfb55af29a540a18f71",
        },
        {
          url: "images/longhouse/Longhouse_uclygy_c_scale,w_624.png",
          revision: "5f1a132d875a49e7a2102b550ae3adc9",
        },
        {
          url: "images/longhouse/Longhouse_uclygy_c_scale,w_734.png",
          revision: "80cb54ecb6a33968bb72c135478720fe",
        },
        {
          url: "images/longhouse/Longhouse_uclygy_c_scale,w_836.png",
          revision: "72e91805843a1a16417f96d53bceab89",
        },
        {
          url: "images/longhouse/Longhouse_uclygy_c_scale,w_930.png",
          revision: "bf5092d8b6addd0cd56a7a062af039a3",
        },
        {
          url: "images/longhouse/Longhouse.png",
          revision: "f75301cdc915f023b7abe4eae8d80c46",
        },
        {
          url: "images/longhouse/Longhouse.usdz",
          revision: "cc1f8bac67c8b710a1b1b60ca231d65d",
        },
        {
          url: "images/mandible-front.png",
          revision: "e879a351d7058f622fcb01f514b66e77",
        },
        {
          url: "images/mandible-side.png",
          revision: "f1a282aba7a2a7c623c7d4038d9bae80",
        },
        {
          url: "images/mandible.png",
          revision: "3c75b36c63053549f81d8ce6464f8aba",
        },
        {
          url: "images/mandible.usdz",
          revision: "7bb83abea62b761216a713758bcca386",
        },
        {
          url: "images/moa-instuction-icons.svg",
          revision: "c997f993cd2f10be2d45e44fca00bbcd",
        },
        {
          url: "images/moalogo_final_transparent.png",
          revision: "317c3743f98d8cb591f2f36440816cc3",
        },
        {
          url: "images/mohawk-gltz_file.png",
          revision: "4407aff98b03087a0645566afdc785ed",
        },
        {
          url: "images/mohawk-isometric-1.png",
          revision: "8ce12a4de23b6fc7be64eabad0b70087",
        },
        {
          url: "images/mohawk-isometric-2.png",
          revision: "9fafd2d08aa99cbd4ae0094dc9a32c40",
        },
        {
          url: "images/mohawk-isometric-3.png",
          revision: "7dda9f999cf9212950d9b05d097db2b1",
        },
        {
          url: "images/paterson_aaron_mohawk.usdz",
          revision: "6754b2e5af8429774d7f100dece4d294",
        },
        {
          url: "images/phalange_bone.usdz",
          revision: "30b0908fe30a1355e8a4340f305ac774",
        },
        {
          url: "images/phalange_bone1.png",
          revision: "a258e16b3e9cf328fa55612d34517207",
        },
        {
          url: "images/phalange_bone2.png",
          revision: "5ff5ddb558d6dd070a3190139c024391",
        },
        {
          url: "images/phalange_bone3.png",
          revision: "7862291f4d61127b792006a4b1883b7c",
        },
        { url: "index.html", revision: "5a828bd283dab398407fd02fae8ff3e4" },
        {
          url: "js/88507C13C1223C3F2A335CFAAA4EF584.cache.js",
          revision: "299ac8a173d7a1ad88f6d7cb875ba667",
        },
        {
          url: "js/9C51964BB0BBCC41BB79120ED90449EA.cache.js",
          revision: "f3069e6e329968e47fc4910835257e45",
        },
        {
          url: "js/B566A15506556F952CAD2B7994FFA824.cache.js",
          revision: "a4f35d368614018c3503b587c31c9141",
        },
        {
          url: "js/clear.cache.gif",
          revision: "6d22e4f2d2057c6e8d6fab098e76e80f",
        },
        {
          url: "js/compilation-mappings.txt",
          revision: "337fee3516452755a04780c340fb6e61",
        },
        {
          url: "js/D9940D84355A4C8E89013B8814821244.cache.js",
          revision: "59a0c72beddd8efadf40ca40eb99c1e1",
        },
        {
          url: "js/F4C3969B01AFD421179360B47BCEA2E0.cache.js",
          revision: "b8f02aed1fc6f938db8b0f6f06e0b1ca",
        },
        {
          url: "js/functionality.js",
          revision: "3f18aa9bdd8f96bc982d161b2b6b5e6f",
        },
        { url: "js/jsQR.js", revision: "345d9ec85176bd7ac10c9941efa5048c" },
        {
          url: "js/jsqrscanner.devmode.js",
          revision: "127d4d9638ca331c225fe41792710171",
        },
        {
          url: "js/jsqrscanner.nocache.js",
          revision: "1cddd493b96a547cac903710f8b1b3a7",
        },
        { url: "js/main.js", revision: "3e63e82dd01f8e983f1cc425a7d6a9d9" },
        {
          url: "js/scrollmagic.js",
          revision: "d093bccc8d916cf0373dd46569cb5bbd",
        },
        {
          url: "js/ScrollMagic.min.js",
          revision: "afab74fd8fe0cbd628c8b76054fa0139",
        },
        {
          url: "lawsonsite.html",
          revision: "659dabd42b5e8c0b89b4c3b1009f8f0e",
        },
        { url: "manifest.json", revision: "7ab9fb8c523b76fc35b17945f7b05788" },
        {
          url: "package-lock.json",
          revision: "1bcececf01a2ec3fbc5b10f42799133d",
        },
        { url: "package.json", revision: "47358d53299c3c50184ab81ec09f6687" },
        { url: "README.md", revision: "8fc9ac1cae61882a87476ff7d9348f93" },
        { url: "supportus.html", revision: "c63ec6506d687521e6599bd5fe6551b5" },
        { url: "sw_.js", revision: "5b170b35a05a50629819e9025a4e3218" },
        {
          url: "vid/longhouse.mp4",
          revision: "0dc1c4b61a10b555ef599479ccdef591",
        },
        {
          url: "vid/thumbnail.png",
          revision: "7891b853df0612eebeb4a1cc8bc0d128",
        },
      ],
      {}
    );
});
//# sourceMappingURL=sw.js.map
