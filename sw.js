/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","0f2d11aa6a50695c69be34acf3985c75"],["/about/index.html","200d1dece9517c57af3c408c611d673d"],["/archives/2019/12/index.html","1fa4e2f4d91e15c85bbd2ec0264a2f94"],["/archives/2019/index.html","7a1b3503e3e87074fe8a89e409bdbe05"],["/archives/2020/01/index.html","8f68e88ee797fc8ad198f0c65f2a3d3f"],["/archives/2020/02/index.html","2b672c358e694a397ab1a41ac8f46b6c"],["/archives/2020/04/index.html","2b71c948281dc0c8daf81f2ad1a8038a"],["/archives/2020/05/index.html","47d5146df4cc16fe8c439bc24a759185"],["/archives/2020/05/page/2/index.html","9188d670120c177db245c25d549cc7ec"],["/archives/2020/06/index.html","02c6b112ff98e0509ecb8686ab7d4d8d"],["/archives/2020/07/index.html","eab190555f73e44a4f951e7ce6cead08"],["/archives/2020/index.html","f3622437a6dc6aafaaf7321138ff1f67"],["/archives/2020/page/2/index.html","b3c6c467f8a9d44bb5ee3b904e11c60c"],["/archives/2020/page/3/index.html","cd8b15cf27c5aea4dd9dd33582a18afa"],["/archives/2020/page/4/index.html","5d116e94f72b2dec67a9b9434835a03f"],["/archives/index.html","dde44f31b48e1a082a2ab0c4845137f0"],["/archives/page/2/index.html","34609e83392d6b8b694a60a6799f50af"],["/archives/page/3/index.html","45d78795c57ff32aafb9db2e95d1f4ec"],["/archives/page/4/index.html","cdf51b6aeb0a5f577e0a50cb25181179"],["/archives/page/5/index.html","4dbf7369c755a5e231ccbac485c733bd"],["/categories/index.html","81877b18147e27c968c401123a616614"],["/categories/技术/index.html","1dd68315d851e4380e29c60d591c5fbc"],["/categories/技术/page/2/index.html","96f02d9dee73ba08b402b1044a605f85"],["/categories/技术/page/3/index.html","4f48546c873b174e6ab3dc8ac1aa6afa"],["/categories/技术/资源/index.html","5cb4fbaf06893551bcacfc2f41961c7f"],["/categories/技术/转载/index.html","798979e8ba692e271dd70ea982180dc4"],["/categories/杂谈/index.html","024fff1cf8416e56cde2be64419c76f0"],["/categories/生活/index.html","5d780e294fa46ea8a36541f6bf7f354f"],["/categories/生活/技术/index.html","231939262a4e28487e6c8890fe1c9881"],["/categories/生活/技术/转载/index.html","33df2721846382abdbc47d2ce3cc3e5c"],["/categories/生活/随想/index.html","8ca2c330155b6fc49fdcb172d92f4792"],["/categories/资源/index.html","e27ff876c089365d320978d711156a0b"],["/categories/资源/转载/index.html","38788754acbe7762efe24530415229da"],["/categories/转载/index.html","6ae6b8f871ad99b49d2fd314f99102ba"],["/categories/随想/index.html","03e6ec67dd7398fcc91664617efedbec"],["/css/highlight/a11y-dark.css","3fb4d4849304ed36d757aa5231b8022e"],["/css/highlight/a11y-light.css","f0f893a00f357eaa0de4c16d26ad63d8"],["/css/highlight/agate.css","5ac4d7e2f8cccf35fe820fd9f25dae07"],["/css/highlight/an-old-hope.css","b91a6bfdabe0e68b280ce3e9e05f3cdf"],["/css/highlight/androidstudio.css","e07d005d876e25d96593eced01a8f34a"],["/css/highlight/arduino-light.css","6b600f70b9216b17ed44f16a797a8ee2"],["/css/highlight/arta.css","1dad2b3313066e68fdc407200aa4692a"],["/css/highlight/ascetic.css","7bd8de767c034dc24818a0f195dc554b"],["/css/highlight/atelier-cave-dark.css","dabc64280f885f2bdea5faed85b3636f"],["/css/highlight/atelier-cave-light.css","1fb41c17a923c6e50148f1e2ba12792d"],["/css/highlight/atelier-dune-dark.css","c09150df433a3faf2e10acb7705d176e"],["/css/highlight/atelier-dune-light.css","0e283935a3c5cde4eae103b9ebd27a5f"],["/css/highlight/atelier-estuary-dark.css","bc5795a573ed0c0814021d9fa9fe0f28"],["/css/highlight/atelier-estuary-light.css","fd3afd6ce0e40cf90ac826ec0eb58ff4"],["/css/highlight/atelier-forest-dark.css","ae8759abea21df0521a900ee5b4e45db"],["/css/highlight/atelier-forest-light.css","3e80f6acca9f5023bec183a7ef6ddcfa"],["/css/highlight/atelier-heath-dark.css","d45652030ab6bf8ac152ad06208ff8c9"],["/css/highlight/atelier-heath-light.css","71a84d4e36d4444bc7fc491ee5c4ff3f"],["/css/highlight/atelier-lakeside-dark.css","53d7d8adb6a0a2a45e506d28349a2b79"],["/css/highlight/atelier-lakeside-light.css","a0453a8fe89012368818f1763e5ae597"],["/css/highlight/atelier-plateau-dark.css","35975e2da676ad0fbf848d62c977fe24"],["/css/highlight/atelier-plateau-light.css","4d8c8fa2080c025b65b1a37bc8691738"],["/css/highlight/atelier-savanna-dark.css","c7961bf3ac2cc37e8a7dc5362a2a3292"],["/css/highlight/atelier-savanna-light.css","9b3bb79b2dad65bff70bd6cb237b6b12"],["/css/highlight/atelier-seaside-dark.css","81d5d1b9e27083ddd9715e1d9896930e"],["/css/highlight/atelier-seaside-light.css","28d248ae59ea387860fc5cf98fbaacb7"],["/css/highlight/atelier-sulphurpool-dark.css","1d97409f97f3f88b5d92926171cab835"],["/css/highlight/atelier-sulphurpool-light.css","f9b7d7fff6eda0e60538048d8e17181f"],["/css/highlight/atom-one-dark-reasonable.css","64267468e9b2dece982a9acb1ba149d0"],["/css/highlight/atom-one-dark.css","a1ad4a6df717023641b7594db6cce37d"],["/css/highlight/atom-one-light.css","357272cf415e045f99f2cb586ca5db02"],["/css/highlight/brown-paper.css","58b74c5fafe1acba6438500358d42728"],["/css/highlight/codepen-embed.css","f30532920cdb6bfe645f9a6ac9a64254"],["/css/highlight/color-brewer.css","d698b75a94f00045415b9250e499898a"],["/css/highlight/darcula.css","a9419013e4706e483985218d9afacffb"],["/css/highlight/dark.css","4f233707db0e62c9226a14cd3f103803"],["/css/highlight/default.css","32a6f6bcbef1c04856d4badb01248b29"],["/css/highlight/docco.css","137377fcd2071c9bd0157c96ddb9dd36"],["/css/highlight/dracula.css","1b1cdda3b1270cc528208bd10eaf2919"],["/css/highlight/far.css","08fe01f45088ef7e47ca0eb12c5b9cdb"],["/css/highlight/foundation.css","7fa4bd4e1898e836f2d45eee44490f48"],["/css/highlight/github-gist.css","0efdaf8cb8f603b4ecc7f23e98d1e9a1"],["/css/highlight/github.css","ec778c80d71e0a739b78fdeb93267693"],["/css/highlight/gml.css","a751a713f56fdee5ed346055202953da"],["/css/highlight/googlecode.css","d20932775318152661a71c4e147b1911"],["/css/highlight/gradient-dark.css","4948e354d196fea5d378563c157007b4"],["/css/highlight/grayscale.css","ca1b7b922ba38c36b002c01b860c4429"],["/css/highlight/gruvbox-dark.css","02618feebad1440223851e68b3967586"],["/css/highlight/gruvbox-light.css","97d5c5aa1427b1732ada597ce1485378"],["/css/highlight/hopscotch.css","b40a3eac94d98ee3aa62152fab116ae4"],["/css/highlight/hybrid.css","033d714c3548c96a963783222e729082"],["/css/highlight/idea.css","aad60ee6c0b549960ca1aa5f38e0b893"],["/css/highlight/ir-black.css","1496db94c017698f918c0f9fc10b6b10"],["/css/highlight/isbl-editor-dark.css","17c93e8e57141e6c848da31896288442"],["/css/highlight/isbl-editor-light.css","f785a286d5ae3b4532391e5bfcdadd7e"],["/css/highlight/kimbie.dark.css","39c7a8a62575a2a53f6b3f7e024f2d70"],["/css/highlight/kimbie.light.css","d8dcd536c269b31c59a2bc10e694975f"],["/css/highlight/lightfair.css","064152fbdd43c7454eccb49618f2b08f"],["/css/highlight/lioshi.css","9a542b667991bf33f9866b780811f909"],["/css/highlight/magula.css","b6575efd2432427a376865d90f3f4cf1"],["/css/highlight/mono-blue.css","097c5c74ec761da9eff14b4613ae3c51"],["/css/highlight/monokai-sublime.css","dabe746f00c0fd67f68b6389d3ab995b"],["/css/highlight/monokai.css","7bea9bbb176c9a24097455a4eea62c2d"],["/css/highlight/night-owl.css","79c3c030b95a04c53b62442a8c6e6c87"],["/css/highlight/nnfx-dark.css","e7180fc75265f3a4526d06b8e3861890"],["/css/highlight/nnfx.css","2545ac25788d5b95638f3cf6ac44bcca"],["/css/highlight/nord.css","967c46ddc9d2b3f33e39d3f0ba0009ab"],["/css/highlight/obsidian.css","ca4a326c15af78b6c6b892616e0dddac"],["/css/highlight/ocean.css","68b8cf232f920dee54912661ff575288"],["/css/highlight/paraiso-dark.css","04fd112ccfcc11a1b440c6828edc7cd6"],["/css/highlight/paraiso-light.css","e35ba8f82a376fbc84b727a2ea311888"],["/css/highlight/pojoaque.css","41d3e330c70d197b6ebaa6a96e8772d6"],["/css/highlight/purebasic.css","8ee2b0599f7e95f2e8765fa5864da2e5"],["/css/highlight/qtcreator_dark.css","1749e4c370ea1832022acf18c667cea8"],["/css/highlight/qtcreator_light.css","1e6e772d564926a99b0285f86d52f7a4"],["/css/highlight/railscasts.css","8da65413c50d34087b29f8e0042040d5"],["/css/highlight/rainbow.css","8ecb9f9a5f111c7bf921623c6c4ababa"],["/css/highlight/routeros.css","7dc393d525edcffb47227f5122d12245"],["/css/highlight/school-book.css","76c5185453cd81031f0e0cc19476279d"],["/css/highlight/shades-of-purple.css","49fa3d459685103d07d067b4091d3b2a"],["/css/highlight/solarized-dark.css","5143f07023dfca70a0ec68e01cf35695"],["/css/highlight/solarized-light.css","dcf4ec1c71af9d63d659cebd28f0ce91"],["/css/highlight/srcery.css","7059aa7e6b5b30236a1e3f3f773c09f6"],["/css/highlight/sunburst.css","cc20c4bb137f9f935107ec60f0b1a097"],["/css/highlight/tomorrow-night-blue.css","925c0fcfe4c88b202284d793feded58d"],["/css/highlight/tomorrow-night-bright.css","ca0f58f8f3650eb1edb264549e8badbf"],["/css/highlight/tomorrow-night-eighties.css","a6a50300b904d7a66ec84f0e8531a02e"],["/css/highlight/tomorrow-night.css","ccac7e07f6c5b0f599501eebbc0339bb"],["/css/highlight/tomorrow.css","b8e365ec72fe7970225e5c54d76949e8"],["/css/highlight/vs.css","66fa62f3576f4c59898a5109b7c6ae23"],["/css/highlight/vs2015.css","a5a96f52743e9f4ce4158f3038183a2e"],["/css/highlight/xcode.css","4a68fb8730b229d2563ec740eab6fe76"],["/css/highlight/xt256.css","17db005c741e2f0cc88d2d42e2742c60"],["/css/highlight/zenburn.css","33ab2b043a3b5b699b432798928065f8"],["/css/style/dark.css","5a5f800c92f7eaa5ff85c975a55e559f"],["/css/style/main.css","72727131d5af12dc1bdccd338b322583"],["/css/style/note.css","8ee83d6eacf8fc65f00ae7e5d2f45d1e"],["/eating/index.html","c68cdd78d04a2768c604bdae1bc84ec3"],["/index.html","3a157a74e24ed562cdef8b35b8b62234"],["/js/b2t.js","cd0f8ec03fec335251ac9c0c051f7cbf"],["/js/darkmode.js","96eb9ac7f1c1f415261aa7dd6dc5f024"],["/js/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/links/index.html","24115438e1033489be36484bf291eae0"],["/links/link.html","ae2a3bfe142654919f31bde9dd304d0d"],["/page/2/index.html","241b24b802625bc3330f968b131dc28a"],["/page/3/index.html","6df8ec06b13228769a0cc7bf1ada834b"],["/page/4/index.html","db5e491d25fc372b1ff75f9e5f12262b"],["/page/5/index.html","98f2ee7e5a5ba83ee317edb458ea5110"],["/posts/10798/index.html","d77484c74b13c7600660d9c684f479c8"],["/posts/11961/index.html","68f2b520f8ed7de0364205f0a1b67f86"],["/posts/13009/index.html","1b31880eac03f65762c9e86c13df174b"],["/posts/1478/index.html","1cfa2719a2e8b5b5d3321d098102b1f2"],["/posts/16931/index.html","74e9eb0e5bda3b1128dc1b617f7eedd4"],["/posts/20708/index.html","a7f6f0bf1a56c289b8946488971eee48"],["/posts/22338/index.html","0f031082cbd3650412f1109a4ce7be26"],["/posts/22378/index.html","f596462b294a2310ddf4129c4256cd95"],["/posts/24380/index.html","e270dcc6f5f9660987dd33f380c93ec0"],["/posts/26484/index.html","76b332293b4a9a3fdef39451864faac3"],["/posts/29606/index.html","5b68c8897babe3396ddf2e5dd4f37643"],["/posts/32449/index.html","f81a053535fb7e6dd219e72955af5d20"],["/posts/3315/index.html","d0f2d5cb76fd9dcfea0a0b7ae7e3f4d6"],["/posts/33197/index.html","e82f4a79f9dbfaaf7ddcce9c876c3710"],["/posts/33306/index.html","224512d8ae6922bdcffcccc528412c6e"],["/posts/36128/index.html","033e6fc568a9348632ca71a4ab4b8d13"],["/posts/37557/index.html","479ef96e4e8bd00cb6a5961cb91d1146"],["/posts/37773/index.html","86195dea050a6f8ef951ea31ac07a0ad"],["/posts/38589/index.html","e1f8b6926a5cc2e80fd6eee8d1b54df5"],["/posts/39661/index.html","396391c62149bf762f6e7b4b97cac0f7"],["/posts/39842/index.html","f82ad33f8ea9dbe4c411029578557a8d"],["/posts/39942/index.html","7765d517d9d0be085862db2295acc275"],["/posts/44194/index.html","4b5e32349e163ab51f54cb413895880e"],["/posts/44804/index.html","383cc60805ce20cf43c77614d378a8f5"],["/posts/4588/index.html","a9de9dc7dd055e14fdc3a666d868f2e8"],["/posts/48089/index.html","d3689b09df81658ed4472df2cdc19e58"],["/posts/51892/index.html","c7a64615617d8eeecdab18ab2c4bd9c1"],["/posts/53289/index.html","0e180f6fdb439d32f0cc957434faa8c3"],["/posts/54711/index.html","44a805449392700128719df5ad9fe5f9"],["/posts/55302/index.html","a7298418858f1ef230c5e31017b30aff"],["/posts/56653/index.html","a2b77fddfd9f258f2369019649f7f7dc"],["/posts/57345/index.html","254270935298f7e64fb270f9e6930d5c"],["/posts/60197/index.html","6521b6df2603484ec77f38fed4b780ab"],["/posts/60788/index.html","35a8150834062843c60334fe117b57c0"],["/posts/63676/index.html","87a2d2d25449d86224be517ab90b04ea"],["/posts/64257/index.html","86df2cf9545024423386217fca530d48"],["/posts/64865/index.html","5b84370e8adeb5a94535670b0fa38597"],["/posts/65311/index.html","b6b731ee6181dbf8adfaea11dd0fafe4"],["/posts/7324/index.html","144874801afef39db40b451199ff3337"],["/posts/8688/index.html","79b626a438ca9b979b89e6fc5ec1c5be"],["/posts/9687/index.html","903b364e5b94e9ff8ea242c1a9eefe21"],["/random/index.html","1338c624bfa6c3da2981f45a68f91d1f"],["/sw-register.js","f164aa4e82d0f05581b32833fd22719d"],["/tags/index.html","7bed4a749ce3ccb3591979c59c33710e"],["/tags/书单/index.html","a1f20f7af7cadc644a66da34b57e6372"],["/tags/公告/index.html","c5fe0c9d434c77ebbd7c6a542752153d"],["/tags/悦读/index.html","0d1cea0792db8fdef6cd046fdc3b4ba7"],["/tags/笔记/index.html","8fcd505fbfaff2acd11ae5cc2207e837"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});





/* eslint-enable */
