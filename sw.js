/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","7ab3ff093f8b07074da62071b2728f93"],["/about/index.html","634e04e90a4872daf5fc2a81efa3c075"],["/archives/2020/01/index.html","d90128042221658be30436b34b18a117"],["/archives/2020/02/index.html","9f9845ddd10bd9f610e6e886c0b13930"],["/archives/2020/04/index.html","6971edadd01227ce6dfa407a3427fa06"],["/archives/2020/05/index.html","97400f151fdec1b9a3d83870fb1f45d1"],["/archives/2020/05/page/2/index.html","298e7dabc9db8edcf5a65d4ac91ac189"],["/archives/2020/06/index.html","34cee3c5fb3d0d1d3bd6c688c2ac9703"],["/archives/2020/08/index.html","32e482fe83888d45ea14fb6d36275c55"],["/archives/2020/index.html","07f9b314c668f8bfeccafa97eb4d02ad"],["/archives/2020/page/2/index.html","08dd53ef882c16305eedf1a1db16db5f"],["/archives/2020/page/3/index.html","f2d562ec80a7da1a0499839c495cff6b"],["/archives/index.html","24d1be91c5f6ca22c330a0ab892e29d9"],["/archives/page/2/index.html","18bf1cd0cb48fe5712264249e90b8d4c"],["/archives/page/3/index.html","a194b19d0846e3da94037b1ceaf55fb5"],["/categories/hexo/index.html","21b42bd7662b486eca5d23849a727a1b"],["/categories/index.html","21cb10cada36069c93fad0e183c97c06"],["/categories/分享/index.html","a6a05d5909a07dcc164769f94d4483c3"],["/categories/技术/index.html","49a71586421b8f49d466400074e9fb30"],["/categories/技术/page/2/index.html","f3158defe703de8ce2947d940abf1420"],["/categories/技术/page/3/index.html","0739d5d1306241067bfb75443d966c1d"],["/categories/技术/资源/index.html","f537e03007a8a57b420cf311200a37be"],["/categories/技术/转载/index.html","daf918221a5b0c567a92d13e02611684"],["/categories/杂谈/index.html","81d33dd3f54ff7050d284fd05b697922"],["/categories/生活/index.html","5f131d6979c1017939c17a90954295d4"],["/categories/生活/技术/index.html","87a053127d50f4d1dbeb8a98eb08e0d9"],["/categories/生活/技术/转载/index.html","8d4b7c8ce3ec39f17877dd77b9c69609"],["/categories/生活/随想/index.html","5266fe944bb4893e34bbffa298decaa2"],["/categories/资源/index.html","2fa82392e480ad03d4653f89930dace4"],["/css/highlight/a11y-dark.css","df1d855d8f6364c909daafa8df603830"],["/css/highlight/a11y-light.css","ed8d480b49119df447a23bddeb08a110"],["/css/highlight/agate.css","7d57cb8482570bc2dba6ad38502003f4"],["/css/highlight/an-old-hope.css","cbe52ec21688e4b78fb6b74c217f62a7"],["/css/highlight/androidstudio.css","f0ad279999960a32448ceda306181f3d"],["/css/highlight/arduino-light.css","078b88501f1a52959a58a1b638727532"],["/css/highlight/arta.css","d0b176cfc59be527bcaf784f1f5e38c4"],["/css/highlight/ascetic.css","cc170550910b4c78de405b1d8e14b41e"],["/css/highlight/atelier-cave-dark.css","212290fd4dda834777cef427f6031c76"],["/css/highlight/atelier-cave-light.css","33fc52f3e300cbf9cd621d267569d2d2"],["/css/highlight/atelier-dune-dark.css","c653d80294a3052622812a1ab90113ec"],["/css/highlight/atelier-dune-light.css","b6779c699b2606f390582b01816cce81"],["/css/highlight/atelier-estuary-dark.css","447191a6f3b59398e91c1e1230a217a3"],["/css/highlight/atelier-estuary-light.css","83f33f4395d84962493b7aa84bbc1ec4"],["/css/highlight/atelier-forest-dark.css","26dd3d9758cd20723eab584840e56a81"],["/css/highlight/atelier-forest-light.css","ab0729e0eacc367d1153a459310b1f10"],["/css/highlight/atelier-heath-dark.css","292255a463240c9d1853625653d4f86c"],["/css/highlight/atelier-heath-light.css","bbe4d8245c5c89fd7926dd853e5039a7"],["/css/highlight/atelier-lakeside-dark.css","6a13518ff4a35856b0c46054d718b2e9"],["/css/highlight/atelier-lakeside-light.css","1a2d81d13ef238fd95e388d1d31ef8c6"],["/css/highlight/atelier-plateau-dark.css","a24a08ed0f0179c3330cf86d921ef6b0"],["/css/highlight/atelier-plateau-light.css","cb6d14c4312e42f2d81485261fbf6c5d"],["/css/highlight/atelier-savanna-dark.css","eb2ee5ad544dfbe6094f38d0d09403b2"],["/css/highlight/atelier-savanna-light.css","67bdb558cefbdb51a50ebd805afc303e"],["/css/highlight/atelier-seaside-dark.css","49eb82915fbd2fa4679696183d020977"],["/css/highlight/atelier-seaside-light.css","355cbd10711ebcbb0980346b8313c967"],["/css/highlight/atelier-sulphurpool-dark.css","0752705081d0ecb2897755f15835059c"],["/css/highlight/atelier-sulphurpool-light.css","367eb0829a0aef3d8a564a74d71fdb3c"],["/css/highlight/atom-one-dark-reasonable.css","4389fd73c982ff9fe36e4e4b54a9dba4"],["/css/highlight/atom-one-dark.css","e9d01105029dbce4d4904b0c637c5daa"],["/css/highlight/atom-one-light.css","b57457bb6b1f4c70be5a23c297770965"],["/css/highlight/brown-paper.css","fe720e95019fd23c0388b8d804064c52"],["/css/highlight/codepen-embed.css","f85ddf1a826142885dd551226861a77f"],["/css/highlight/color-brewer.css","465afd1c62cfa76198272e9c4be607c0"],["/css/highlight/darcula.css","9740790caab3923ff0c0928415dfbb8b"],["/css/highlight/dark.css","aabf5aa563455986d2d240cdc92548e1"],["/css/highlight/default.css","85743d591546c94f36081c3f7cdb2107"],["/css/highlight/docco.css","21ef368e063890238c2cf7355db3eefc"],["/css/highlight/dracula.css","ec5a5d28f50e282b9886a9a8f246e265"],["/css/highlight/far.css","e35ce812b26769fdff3ce8ca07ebdf71"],["/css/highlight/foundation.css","b553bcf471a2e740980c61f53694ef59"],["/css/highlight/github-gist.css","22262ff8a9fe02ff9df30ab0213f03f4"],["/css/highlight/github.css","1d6c2d169f5b33aafcae9baf82ea2582"],["/css/highlight/gml.css","661866283407f83385edc69c38141c97"],["/css/highlight/googlecode.css","6d94a43fdbce6912c1eb4f2d552b7290"],["/css/highlight/gradient-dark.css","c1bc34193c880af747b0d8cc4eddf08f"],["/css/highlight/grayscale.css","ccc3b2f6cafd8d8362184c29b5fb39fb"],["/css/highlight/gruvbox-dark.css","7b37e1462a82fe1062bd3b107337f707"],["/css/highlight/gruvbox-light.css","9e20713dd5650580c11d69e34d57f496"],["/css/highlight/hopscotch.css","de09f4dad6fcc269cbfb2d68adf3ba96"],["/css/highlight/hybrid.css","122bee6356956648c2c86955ed7fca20"],["/css/highlight/idea.css","9bcf019912eb51cf0c179f7791590a7d"],["/css/highlight/ir-black.css","8d2c2235710d35327b9680a4325f330f"],["/css/highlight/isbl-editor-dark.css","42463e7e34b6d219256d613bcc077304"],["/css/highlight/isbl-editor-light.css","0b65ba8e8e63a8a66473f8739ac32e0a"],["/css/highlight/kimbie.dark.css","1ad207473f2647a0e6500b82064a3da9"],["/css/highlight/kimbie.light.css","96893c96f5d1211dbac192d6f25efdb0"],["/css/highlight/lightfair.css","ea9cf5d5c620166a945a9c6cb2fb0bf0"],["/css/highlight/lioshi.css","4fec7aaf32de1e4210d84d699ba17ffc"],["/css/highlight/magula.css","f3b5ab5836a8c18b9927ec4de7761aa0"],["/css/highlight/mono-blue.css","eab81d8d3effd404617d10f4f3a066b4"],["/css/highlight/monokai-sublime.css","759b5e2e802e66a3fdccfe48e6337a1f"],["/css/highlight/monokai.css","2d65ac71c26868f01948a9dd1a7808d9"],["/css/highlight/night-owl.css","97e14223490e7a045584009459ea129a"],["/css/highlight/nnfx-dark.css","88d0cde3c0e5825144b914f42f28ee74"],["/css/highlight/nnfx.css","e1d2429d9180d1fdc9a0ff0d4a396deb"],["/css/highlight/nord.css","10231eaf4c079745bf17a9db02b50b08"],["/css/highlight/obsidian.css","d8b897a28a41b78482fb0917e9c8efac"],["/css/highlight/ocean.css","dc138b01a693ee5ccc126e0be65cc7de"],["/css/highlight/paraiso-dark.css","359d75a76e079bc440b8c8f3ddc28e03"],["/css/highlight/paraiso-light.css","9bd81dea146066f9d48e5052fda69841"],["/css/highlight/pojoaque.css","41268c0cc01a7923cd97801eecf932d4"],["/css/highlight/purebasic.css","fb147fc23b5261fe22f96d8a227370f7"],["/css/highlight/qtcreator_dark.css","378b967c2afb4b6de6dcdd6f6acb1681"],["/css/highlight/qtcreator_light.css","3216f9cea5cf91fe01d51d3e9ffab64c"],["/css/highlight/railscasts.css","896e5b9503026af65c61da8ab1438fb7"],["/css/highlight/rainbow.css","8211481afbe58bfed9c37bad3a1469db"],["/css/highlight/routeros.css","c413434e9f9f6875a294f3cec3b382d0"],["/css/highlight/school-book.css","655bb062860ec0be1780e1c3e8b5b104"],["/css/highlight/shades-of-purple.css","761504fd3f490f5788c88e1dcf799522"],["/css/highlight/solarized-dark.css","51285c8c9c79bdbae1329389152bd8a9"],["/css/highlight/solarized-light.css","f93bc7c078f6f619bd15c410fdfd0324"],["/css/highlight/srcery.css","3c5af26a3346e821647ecbf2bd67f4cd"],["/css/highlight/sunburst.css","34edf032e8b748808242d1e0cea19f8b"],["/css/highlight/tomorrow-night-blue.css","ef2937f7d5c4a0aa23a8ea9fa342e2ef"],["/css/highlight/tomorrow-night-bright.css","e4e7fa915e4ae2724b6a71af45e90558"],["/css/highlight/tomorrow-night-eighties.css","106e5e6634caeffa55c872d0fd87197e"],["/css/highlight/tomorrow-night.css","31b116af4409fc11d7bc22fff86567c6"],["/css/highlight/tomorrow.css","7160ad87407f58da1d816da1ea1a8f6a"],["/css/highlight/vs.css","c7b84d6d76e60c64144c0ee5d5d0e43b"],["/css/highlight/vs2015.css","3c9ab6f9622e0b76c0f487b27b59c232"],["/css/highlight/xcode.css","878a42d636f2eff4be821f1fe2a88c84"],["/css/highlight/xt256.css","9e14296c68ef84faafcfd6adfa36498b"],["/css/highlight/zenburn.css","0c6a9cece7a718ee6c19a7c35b8e07ac"],["/css/style/dark.css","dc8c44de4c1419f15f4f07cfc259845c"],["/css/style/main.css","46054977f4fd50d64f0b4d407cd7f24f"],["/index.html","5312e9ab77d788454fa1077ceec45ecd"],["/js/b2t.js","ff7fee4413d70545d069b5f328e5cdbe"],["/js/darkmode.js","2be8ee2c06f76137631d04a452d4a5bc"],["/js/local-search.js","d41d8cd98f00b204e9800998ecf8427e"],["/links/index.html","4b981949fd4024e046ecc4280d5f635c"],["/links/link.html","65ea2f898ec37598240c7a443838109d"],["/page/2/index.html","6ce1355cff16a6118bfeb2db61fea9f1"],["/page/3/index.html","199aafe7dc0e8b4a8db72f2c66b37248"],["/posts/11149/index.html","c9012082cf616e70413e5181cc8fefaa"],["/posts/11961/index.html","e1514afbe330d90fb8c580d79f92c5af"],["/posts/1478/index.html","30024f815099f4ba6a2f2ae8168545d9"],["/posts/16931/index.html","7c49603f5b55ec292a47185413009a97"],["/posts/20708/index.html","06e470bff3507a8407fc231d7b4d9e1f"],["/posts/22378/index.html","80bd0d34481de1f725c790a0f5b02321"],["/posts/29606/index.html","14ccae455c48493f751eab1f515daa27"],["/posts/3315/index.html","b0e3bc928af8b28e016e222d2e240024"],["/posts/33197/index.html","f60bf45df5c6d4a767c69bbab750f510"],["/posts/36128/index.html","93527e1cd2ade5eb576ad645d588009b"],["/posts/37557/index.html","1339b24740772a3833761bc9e575e633"],["/posts/38589/index.html","f1baa8e68c4638ba87423396c752b028"],["/posts/39661/index.html","8f872dfd7795b0bc72890c40a2b1f5da"],["/posts/39842/index.html","8d99b841ca9fc21bc50c2ea925a0fc99"],["/posts/39942/index.html","0cf671d35520f0515870b34a846c93b6"],["/posts/4588/index.html","5ae38788b8f94f4af6afabb1f706afa8"],["/posts/48089/index.html","45ca902515ec8cd1a89876823bfe1a16"],["/posts/51892/index.html","a026e76f0c88ab3b18bdea1083f4bf5e"],["/posts/53289/index.html","6b2a711cb50544af0421f84571672e4f"],["/posts/55302/index.html","ec05ffc4f73cbba968164aa462020c61"],["/posts/56653/index.html","0588fff429479be38a300bc09828127f"],["/posts/57345/index.html","f70dd3ba60e27c5438a7e625bc03e40e"],["/posts/60197/index.html","246aa7edcf6838202c2af0f6e9600105"],["/posts/60788/index.html","002b57c891d7224fa864103a73a3beb6"],["/posts/64257/index.html","6d9a0bc23021ec9f5c93d1668053693f"],["/posts/64865/index.html","2f5bd6e73c97370eeb52dda2be19ff03"],["/posts/7324/index.html","f37c52606026eaa780ad7efeb86bf8b3"],["/posts/8688/index.html","63854553633d740c94086a5f9631f478"],["/random/index.html","5b40a8296b4253b8c1735f07be6fe5de"],["/search/index.html","2c6cae16391dee183841d988e8c7afd8"],["/sw-register.js","53b63224820571a9dd8c4285c15a591c"],["/tags/index.html","f9c82da08ea2e5fa25811860b48f9b17"],["/tags/书单/index.html","558d440ed6a382567a027249e1169864"],["/tags/笔记/index.html","a0cd8f876ae2f93c92b2f7ab546c77fb"],["/tags/语录/index.html","fe23b814d1a62a9bfc036e476f445bb0"]];
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
