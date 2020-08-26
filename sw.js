/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","1400d1afaa73b36b12d59ed22d484543"],["/about/index.html","2b5a029e4829dae8f3f2580816b6b935"],["/archives/2020/01/index.html","171586662eda88c9e02ee673d75fdff9"],["/archives/2020/02/index.html","82c3977d112b2866a497d3a735e49c82"],["/archives/2020/04/index.html","4c64efb762b61b2d60295d3087ea8870"],["/archives/2020/05/index.html","22a916fff64ae3022ac6071fec4b8d98"],["/archives/2020/05/page/2/index.html","7fbec81fa4d3508bba467382316af8f0"],["/archives/2020/06/index.html","851bc1e785aa9ddd3e00547f151522cd"],["/archives/2020/08/index.html","1097f59e7cfd575d2d38418221aa8950"],["/archives/2020/index.html","62b90f2981766f9215090fdd5e21e743"],["/archives/2020/page/2/index.html","6ded9da3341908388d233a4fb4b78778"],["/archives/2020/page/3/index.html","355212de68a18e9005a2ea620b69c934"],["/archives/index.html","cc06d1428a7b919ba6a171e85f2f7e3d"],["/archives/page/2/index.html","008681a93a6f4c0a5d87823fa9bb1147"],["/archives/page/3/index.html","b9630fe64a9456a9a7ebdc9c16b3ee9f"],["/categories/hexo/index.html","057fc3bf65b85794e8341da36597d274"],["/categories/index.html","6a023fd193559fb915f46a7327a44598"],["/categories/分享/index.html","22c3e5a4f7ac34d94fc7f24f6ac69509"],["/categories/技术/index.html","9269e7bb2ca3ce3ff1370174cfa4b1d2"],["/categories/技术/page/2/index.html","0642b08e28f2dcb17682ef5aaa740f3a"],["/categories/技术/page/3/index.html","30e94018b82da35d74a308d0b986f065"],["/categories/技术/资源/index.html","70a437376c00bf3413e6c687ac75f205"],["/categories/技术/转载/index.html","32b887f5f125cc00eaf54785a3afdd29"],["/categories/杂谈/index.html","aa859a0e4e68631923c2c7dbf4cd77a2"],["/categories/生活/index.html","a300a075ea7063205e8d0d57c16a9f70"],["/categories/生活/技术/index.html","24e591f4db53ea3c2a3bc2b3303e641b"],["/categories/生活/技术/转载/index.html","2beff34fc40fc9337fba4de7a3cd46bc"],["/categories/生活/随想/index.html","9e4eb296b247d15160682b5db583fd68"],["/categories/资源/index.html","73c3a5bccf939388124a2169172767d4"],["/css/highlight/a11y-dark.css","fcc034d30cfc6f0061211d67fb63d847"],["/css/highlight/a11y-light.css","40956793a4fc656f46106ca3c8a3453e"],["/css/highlight/agate.css","2dcffe5562b111d82ff491dea0907c79"],["/css/highlight/an-old-hope.css","a1159f541efed07520f971ff74dabfd3"],["/css/highlight/androidstudio.css","5766912c282ebae96b0846cfeea2c872"],["/css/highlight/arduino-light.css","b186f4965230668c3073b1a6cd2e0d11"],["/css/highlight/arta.css","b45861f69ab7e053ad9398ce54c81119"],["/css/highlight/ascetic.css","e9549c78883938eb8453faf1656eb34e"],["/css/highlight/atelier-cave-dark.css","25a5d19d567129c4e2d3e9b0540b5957"],["/css/highlight/atelier-cave-light.css","a5478408450cacb1f9358d7ddec0107e"],["/css/highlight/atelier-dune-dark.css","98ad380f936f2ad969bd686ced87ff30"],["/css/highlight/atelier-dune-light.css","7bc9393b8e7f786c264b485835bc8509"],["/css/highlight/atelier-estuary-dark.css","687d714b2979b8220c9c0681a0b0b5c1"],["/css/highlight/atelier-estuary-light.css","3dc269f62a81315adace265b862a2d85"],["/css/highlight/atelier-forest-dark.css","9543335c3e4561c92ff80066987bb914"],["/css/highlight/atelier-forest-light.css","6e3c7ad248efa94a06293eb37a198623"],["/css/highlight/atelier-heath-dark.css","78c5990d4c7b1e089bd8699eff02813a"],["/css/highlight/atelier-heath-light.css","19fcdef7bbcfca0aec0e481b2d5fd424"],["/css/highlight/atelier-lakeside-dark.css","16b75fff1d98bd3f316acaacad07611f"],["/css/highlight/atelier-lakeside-light.css","ae38886c483c55621600b55f682153b8"],["/css/highlight/atelier-plateau-dark.css","2a292adde14b73c3dce47e069ee71bd8"],["/css/highlight/atelier-plateau-light.css","d1304683b216c2d97ea2f7671b76cb32"],["/css/highlight/atelier-savanna-dark.css","eac55ef5bc675b3789c6052ee3463abb"],["/css/highlight/atelier-savanna-light.css","3e51095177fc6575a0a6a5ae523b7ae6"],["/css/highlight/atelier-seaside-dark.css","18cbc7a51b5035d51dadc5df1778e740"],["/css/highlight/atelier-seaside-light.css","7b7d531f3cbc6e3cb7c0d556ba8df124"],["/css/highlight/atelier-sulphurpool-dark.css","da413e1e15ed42f52a0e78caf864b80e"],["/css/highlight/atelier-sulphurpool-light.css","863cf62e6553b4744a8e224e310b5609"],["/css/highlight/atom-one-dark-reasonable.css","01c4a4601749f1fc23e137fda633b6a7"],["/css/highlight/atom-one-dark.css","b37761f3b69ecc50ff9c01a48cd7ec3e"],["/css/highlight/atom-one-light.css","c43d563005cd9ac7069fcaa905ca1493"],["/css/highlight/brown-paper.css","9e21396d481d038fa38b0555a8788573"],["/css/highlight/codepen-embed.css","f07b163692535e0fbb82f14a30a2a34e"],["/css/highlight/color-brewer.css","7be05960f992e559fca83284e716a272"],["/css/highlight/darcula.css","f6584fa7e6f1cb6345297f9d57ab638e"],["/css/highlight/dark.css","5d253201cc4d1db2784117c2d7269471"],["/css/highlight/default.css","ca8ccdc1b511ef18fb733d6d8b1401c8"],["/css/highlight/docco.css","0e895a9b212eddd6f5c2cdf8441692ff"],["/css/highlight/dracula.css","01e765fa8df13a85311cdeb44e5c8132"],["/css/highlight/far.css","030f1e3b33ba2b91279c866118eeb703"],["/css/highlight/foundation.css","3d1979199f5aabc75d0e0f7738964c65"],["/css/highlight/github-gist.css","ce3691910115d6648d85f8524d1489c4"],["/css/highlight/github.css","7aaac0d579515d13fc4c6b9e05ab7685"],["/css/highlight/gml.css","91efd335fb9cdce72db7db4d55b19c5a"],["/css/highlight/googlecode.css","6479ae8cb7b6ed62b0ebc8ff2da4fda2"],["/css/highlight/gradient-dark.css","7fccd1a2d944f07f727bb34bcc0bc001"],["/css/highlight/grayscale.css","4622b7223a640cf093d62ce3d3858a35"],["/css/highlight/gruvbox-dark.css","93705ce90f9c7a62e2697ff836729ce4"],["/css/highlight/gruvbox-light.css","58a277da42ae8e546bac068a1931691a"],["/css/highlight/hopscotch.css","eb578502ac368a5c083218b8ab9e3628"],["/css/highlight/hybrid.css","503e2bd9e4d995b4c0ef1d28d7b1b982"],["/css/highlight/idea.css","48bc1f78622728c2bb350a9efafdf289"],["/css/highlight/ir-black.css","8b379edc626eb737a5eff31c7e36b189"],["/css/highlight/isbl-editor-dark.css","680d988fc5f45ec6c3e8b9968a790b84"],["/css/highlight/isbl-editor-light.css","466e4a3fa0c7d7f0dd957a1143f50d2b"],["/css/highlight/kimbie.dark.css","ee2b61c3fb223fe367dffa1f2b884100"],["/css/highlight/kimbie.light.css","61b4a36667f789b2dea0df7d614a5dbd"],["/css/highlight/lightfair.css","3e4b7a842dbabf63ff795b08cefc2d0d"],["/css/highlight/lioshi.css","966e204b9f47c6e152e472bf6699d3cf"],["/css/highlight/magula.css","8b13fe10d40b250099b8a6d7030ed1a1"],["/css/highlight/mono-blue.css","1095ebd5010dee87a8dc9e9590411d7a"],["/css/highlight/monokai-sublime.css","255f50431a4d9f90948b2c949b842341"],["/css/highlight/monokai.css","44387033e8e6b5437d4756116cd1f293"],["/css/highlight/night-owl.css","77dd07e0224dabb387f535faa8589d9c"],["/css/highlight/nnfx-dark.css","77178b6f05180a458380664091be12c0"],["/css/highlight/nnfx.css","7ad1cbe43705d68e5c2f9936fae13052"],["/css/highlight/nord.css","d339e7877fcce06480b77083b4534e39"],["/css/highlight/obsidian.css","59a6b12a38c40319fd6aa2cb5c803538"],["/css/highlight/ocean.css","7411b944b412aebb676f2e0dcc1a63d0"],["/css/highlight/paraiso-dark.css","25c9a8d1e81688b011994076012c7dad"],["/css/highlight/paraiso-light.css","592855f5304feec3f2a655dc9abd0113"],["/css/highlight/pojoaque.css","bdfe422edadbf917a7373d544096c149"],["/css/highlight/purebasic.css","1268a4ab3ad9f01e80d87a889fde4ab7"],["/css/highlight/qtcreator_dark.css","dcfca869e01720659989ef2559754788"],["/css/highlight/qtcreator_light.css","9c00104fa5fa29b713e2823baaeb6b04"],["/css/highlight/railscasts.css","335a48344bc28b871990e8f7f9f4dd1a"],["/css/highlight/rainbow.css","b2f9aa41958ede975d53905b37188484"],["/css/highlight/routeros.css","77ca898d2412d3d0c43f8e353a8a2ba9"],["/css/highlight/school-book.css","03c2dd47f5ba60400d0ceb03d241a11f"],["/css/highlight/shades-of-purple.css","c214c3504e3731e91ee4fc895a211ab6"],["/css/highlight/solarized-dark.css","e24434f065c573fa05eb9f7152a7e168"],["/css/highlight/solarized-light.css","5b7773fa74f24b0d137dca190440004e"],["/css/highlight/srcery.css","da6129a194fc03e9aedc23be51eef5ab"],["/css/highlight/sunburst.css","f7ce1395270071418087a02fb95ecde6"],["/css/highlight/tomorrow-night-blue.css","a3dbd3f40146d10e8a6cbfc1d3444b71"],["/css/highlight/tomorrow-night-bright.css","589701ea87c888feaa811d7227a6f09a"],["/css/highlight/tomorrow-night-eighties.css","05ebb1ad4647df95a19d2c7536acf141"],["/css/highlight/tomorrow-night.css","b8db5188e9182e71380bedf0fbbfbf9f"],["/css/highlight/tomorrow.css","a092ab8fb20f6a31401bf1c50558d5a6"],["/css/highlight/vs.css","fc8cc3d41be882f8046a0052b3ad8010"],["/css/highlight/vs2015.css","66209d6e270a6a48e28d9beb8560bc68"],["/css/highlight/xcode.css","5ff48da4c8418677323ad9feb19bdb4b"],["/css/highlight/xt256.css","de1f3feb1be9052a1c2db84a0ee29c1d"],["/css/highlight/zenburn.css","912b042825be2affbf3e34411c6d8a7f"],["/css/style/dark.css","66655be00389f63df142148388bc8768"],["/css/style/main.css","9bc79467741c745b62706366f47592c0"],["/css/style/note.css","fc3664c635b0767c7f6b9f1ff249fe7b"],["/index.html","e9a02590311b3673bc82083d8d1779a8"],["/js/b2t.js","cd0f8ec03fec335251ac9c0c051f7cbf"],["/js/darkmode.js","c94de29e565881ecc4572e87d6eded9d"],["/js/local-search.js","d41d8cd98f00b204e9800998ecf8427e"],["/links/index.html","3329200cac246da558ca12215a930b7f"],["/links/link.html","4ff061569c2952e95835c952f2177567"],["/page/2/index.html","e64efcd59fddbb98bdb986483eee797b"],["/page/3/index.html","a6e726e124cb6f1c10c40ccdf0ed9559"],["/posts/11149/index.html","7b6c0dbfa4af00612263a2d88d46d7e6"],["/posts/11961/index.html","03da9524d7dff1734feb14104e4e0c42"],["/posts/1478/index.html","90a44b3539ff9177649eb020ac8ab4f7"],["/posts/16931/index.html","65f553b5030c59a8990573d29c84707b"],["/posts/20708/index.html","557c4238b4d8d5cb2f908b6a0e99793c"],["/posts/22378/index.html","af3059ccac53476e02e8b42959f96deb"],["/posts/29606/index.html","ea7e45a85834388f004536a641f34289"],["/posts/3315/index.html","565ccfd9bc1a01c9114e67a53f80f7b5"],["/posts/33197/index.html","23bc5b82b7899424da4f54c374b0e8ca"],["/posts/36128/index.html","9b356380adb1e9db11058d9b9bddec9b"],["/posts/37557/index.html","1b26e530c86cd26bfa7c41298b5b78fe"],["/posts/38589/index.html","f1ec5a5e3655928200c7c4431dc4092f"],["/posts/39661/index.html","6f333210b4eb580e3211c600bf24c5fe"],["/posts/39842/index.html","65e19bd5b7d53c33a9bbce13deae2ae4"],["/posts/39942/index.html","a76288b554534b5b5af4a1801cf33e55"],["/posts/4588/index.html","1c0ed05db1b498c5b43aa1188cdc0a43"],["/posts/48089/index.html","d37801c6d9d224bc186024a23520e9c5"],["/posts/51892/index.html","316540e53b5ff004db3d23144e983917"],["/posts/53289/index.html","6fd8d225b078147a37b7c2d52751402c"],["/posts/55302/index.html","d934c28c1f206df97aa489efec693148"],["/posts/56653/index.html","27c0a683f385b8d9c006a57a1e6a719e"],["/posts/57345/index.html","1c96cf11040a5a1643712946f40c1c06"],["/posts/60197/index.html","dee65b3628e641d174fa9a8a4ea48814"],["/posts/60788/index.html","6750f017fbb840cb764b50bc1868b391"],["/posts/64257/index.html","68c0912014ed26922bde7c83f4ae1ac0"],["/posts/64865/index.html","e861fb056856b0fd6d10ce0110c51308"],["/posts/7324/index.html","bbbb22f3eb68b767e03f9172113a7395"],["/posts/8688/index.html","135f7801dc9040cd02d8720610e2ad15"],["/random/index.html","0a8a6db6491b45c7957ed044c35c7276"],["/search/index.html","998b6fd05bd3e2944d363bbe06a5a56c"],["/sw-register.js","b2aad4861261cc1e275c849d7da21fe1"],["/tags/index.html","2ee3789b1d24f7441082e01d49676bdc"],["/tags/书单/index.html","3458956d06cd798f86225acd8f75519b"],["/tags/笔记/index.html","938e74a166d8e41efb134f6414b016b4"],["/tags/语录/index.html","6cac903ddd43c1a991d44e4f85326520"]];
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
