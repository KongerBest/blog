/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","fa3e7d48513860d44ba39c3d3f44ba8e"],["/about/index.html","14e94e8092e7615c9280d3deac89c710"],["/archives/2019/12/index.html","1dde0fb664847a2338a6dca7fcd69dde"],["/archives/2019/index.html","7a1ef8091fe9a5f8046eec383bfad99b"],["/archives/2020/01/index.html","dcc888051b4c1dbb40fb72ae4012ecfc"],["/archives/2020/02/index.html","3be60a21fd0e1ce09d12f7f7fcc4406a"],["/archives/2020/04/index.html","db52f196b5a6bcc0a476ff18455f44a5"],["/archives/2020/05/index.html","98d03b9e67cdc91c2dff510bde47393b"],["/archives/2020/05/page/2/index.html","05d03c2cba4e98b9cb57ba3e2a59bcb4"],["/archives/2020/06/index.html","78637e8402bcab73ee5cb407f38f8668"],["/archives/2020/07/index.html","a26934f1bec6739214106ae0ca2565c5"],["/archives/2020/index.html","a1bb62886da377bc5cc71d43519b6de0"],["/archives/2020/page/2/index.html","ab732337e3b0b75af263a27c43d44708"],["/archives/2020/page/3/index.html","54075dd9e6c5692ace161816edafe7ba"],["/archives/2020/page/4/index.html","7fca5c8f7c7608b1e9180e44dabfe769"],["/archives/index.html","4cb28f9d7a8889447fc18faaa4cd46fb"],["/archives/page/2/index.html","c5c53720335657643d2b190509d179b4"],["/archives/page/3/index.html","40cda1a299c97ecb2e3dfa99df8551cd"],["/archives/page/4/index.html","c4cb0f75e15f26d6dc6fa784294f0647"],["/archives/page/5/index.html","f3fa687dc878945cc33966c1a81fcafe"],["/categories/index.html","b72c11d0ac5f993a30db55cc4d265c97"],["/categories/技术/index.html","2879dd24eb593e8482e26d8de60210d3"],["/categories/技术/page/2/index.html","374e1a82e38f0bd8c30449c1520b7b2c"],["/categories/技术/page/3/index.html","cf951cb57ebd4a6be48649180aa85b32"],["/categories/技术/资源/index.html","43f3128023da26e0a20ffaf850d051fd"],["/categories/技术/转载/index.html","437a0cd8f026407c486dc9bf5e870d96"],["/categories/杂谈/index.html","b67efd74a163fb462e784c1185f22c88"],["/categories/生活/index.html","624a4f919f251b8a4a68626f97aaf3dc"],["/categories/生活/技术/index.html","ad52a6ed99cc8c3a1578d20d4174f6be"],["/categories/生活/技术/转载/index.html","8c230f754acf840e1a7526cecb6bf614"],["/categories/生活/随想/index.html","14360c252b216207753b4e13fa498ca6"],["/categories/资源/index.html","b818a45ab733e25c5bbcb044d5fc1656"],["/categories/资源/转载/index.html","996ce0e664527af70674366228a448b8"],["/categories/转载/index.html","8e9f78226b038257120e85a45483c759"],["/categories/随想/index.html","3ee91c289499e0786384f1328c2f3f20"],["/css/highlight/a11y-dark.css","0a63e3392c7753084f3f9676c7e7bbd0"],["/css/highlight/a11y-light.css","50d3c7d445f9bca416e3109ae8c20221"],["/css/highlight/agate.css","1d4b909bff2ad5705b86d213ca0aa165"],["/css/highlight/an-old-hope.css","43266f98904b56d19dc171f877607841"],["/css/highlight/androidstudio.css","e2620a1f0b52b9108ffe646989923e91"],["/css/highlight/arduino-light.css","b1eff546b2c991473b1f7fa2e407f6ca"],["/css/highlight/arta.css","5670572fa4fc15ce3fe168b6963b423c"],["/css/highlight/ascetic.css","eb7cfe04fb348c5f4e8e03573c08677d"],["/css/highlight/atelier-cave-dark.css","fefd6e5db2a47539545030b9b0efb8da"],["/css/highlight/atelier-cave-light.css","4109a22691d0473c04c98e2dea615bcc"],["/css/highlight/atelier-dune-dark.css","66dec53497c886c7f2beab5348f6d2df"],["/css/highlight/atelier-dune-light.css","c734c4dad04504f0fd7c3aa876a9438c"],["/css/highlight/atelier-estuary-dark.css","79b55c18852520e2fc4751b1a9c120ca"],["/css/highlight/atelier-estuary-light.css","e5bdab1f660a715b1555e61e5a4cd24f"],["/css/highlight/atelier-forest-dark.css","a4d2ce618ebccc28782c6a40b22029b1"],["/css/highlight/atelier-forest-light.css","388d6f060c866535580e3ca78ad35d37"],["/css/highlight/atelier-heath-dark.css","65f4d346ae62173e7ac39f9350c20cc8"],["/css/highlight/atelier-heath-light.css","f564fd58dbcefbc06502085946bd4036"],["/css/highlight/atelier-lakeside-dark.css","5f6b4478ad1175a592a67591cd18ac7b"],["/css/highlight/atelier-lakeside-light.css","515924ac647ce95e130a6aaf47a0bae4"],["/css/highlight/atelier-plateau-dark.css","5bbe17206d26769d8663acc3dc3b490f"],["/css/highlight/atelier-plateau-light.css","9745353d7ca8c0d161591ba5484b1532"],["/css/highlight/atelier-savanna-dark.css","b8fbd7d4e15d00db7e3d5c8dcffe424d"],["/css/highlight/atelier-savanna-light.css","669226fb47f3e8e58a7e307bb5988974"],["/css/highlight/atelier-seaside-dark.css","f84a2b81fc62b99f2a540b3fa89c8907"],["/css/highlight/atelier-seaside-light.css","9b9c9684bba2d36a4a4a02c01fb970a6"],["/css/highlight/atelier-sulphurpool-dark.css","9a8af7245cf0ea3b7de5e595dbcb6989"],["/css/highlight/atelier-sulphurpool-light.css","9bbe7e6fe2a7c9ce61c60408d4c1a820"],["/css/highlight/atom-one-dark-reasonable.css","94f7f8d78fe4491f52a616cb99aaac1f"],["/css/highlight/atom-one-dark.css","30b81903b373758fc84bf37c8eb56612"],["/css/highlight/atom-one-light.css","3d641ec1850f7c75f1b686da52d1d091"],["/css/highlight/brown-paper.css","b31028e98c521ef05e82db05fe10c674"],["/css/highlight/codepen-embed.css","3ce0ae929929b56249ad1a7ad56db60b"],["/css/highlight/color-brewer.css","3f7777de88cdecbfedfc42ac42f6039e"],["/css/highlight/darcula.css","3d0d82d20cd275a16a99bedef11cd6c5"],["/css/highlight/dark.css","fed0a3caf25927ad7fad75468de74580"],["/css/highlight/default.css","de95adedd58d4ebe7b50f81366a1ba86"],["/css/highlight/docco.css","024bdee4d3c3f595c8d2e03d6c960124"],["/css/highlight/dracula.css","ac9130b64bf4fb27327b64a6caaf1402"],["/css/highlight/far.css","f1d9e5e46ee00df254efeddf9bd39ad8"],["/css/highlight/foundation.css","141df09630999b19b7e0405156c3c0a3"],["/css/highlight/github-gist.css","1cb553c12fa4c52bcd736a2dc9d61196"],["/css/highlight/github.css","bce2d3fecac7ad6cc7a57d630873d87b"],["/css/highlight/gml.css","d2e311ab4d0aec5cf6b371d02ece9fc6"],["/css/highlight/googlecode.css","f1239e95e8bef77dde287dbd48b88b8c"],["/css/highlight/gradient-dark.css","c2502a53a997db27b5aa42deaffa9fbe"],["/css/highlight/grayscale.css","31b82a423a938b4dd3b1f712a98db940"],["/css/highlight/gruvbox-dark.css","5753554cbfc79025e1e3ac027c8a885d"],["/css/highlight/gruvbox-light.css","ed10a11f38961fb4504e7d281694e231"],["/css/highlight/hopscotch.css","f5f350f04bb9f7961666b8235e863f8f"],["/css/highlight/hybrid.css","197f9a7978df1f7b7089690b1bda709c"],["/css/highlight/idea.css","c8ad6adcb574af7d42e5a0aea142c8bb"],["/css/highlight/ir-black.css","cfd472302036fbee0e190680cb24aca7"],["/css/highlight/isbl-editor-dark.css","0b038b424f0efd65759e6f30c9bfa178"],["/css/highlight/isbl-editor-light.css","1b771381036516e3dbb85cc262d71ec0"],["/css/highlight/kimbie.dark.css","d489126efed11579d9028a8282ccb6ed"],["/css/highlight/kimbie.light.css","8d9b8c3ab8e7941f3e1ad7810a706c0b"],["/css/highlight/lightfair.css","2b40304ff4f66a7f61345094c5d852cf"],["/css/highlight/lioshi.css","2148fb77561ef451e76729f7fd7592d1"],["/css/highlight/magula.css","1f2baa626b01310b65ffab6d2e9c8d17"],["/css/highlight/mono-blue.css","8e3b0573650c04cee74b07c2e6d01213"],["/css/highlight/monokai-sublime.css","934fcae9637cf4790b5de92031fc00bf"],["/css/highlight/monokai.css","5f731c4e050440cb842e335a78ce6aea"],["/css/highlight/night-owl.css","4f07f93c2575884d1177fc21eece5a29"],["/css/highlight/nnfx-dark.css","8d8bbaca947d07818c0c9cf526d4e337"],["/css/highlight/nnfx.css","51104e0782fb727690cb47b29e300212"],["/css/highlight/nord.css","dd82a5b4106ac396e76c28b149a8067b"],["/css/highlight/obsidian.css","5542ff9d1face15ed4e97985cac21428"],["/css/highlight/ocean.css","5a68f6d467176fea42b295ea3e5cee23"],["/css/highlight/paraiso-dark.css","097bd3455bbe9c3ae701b8ea2e04f3a8"],["/css/highlight/paraiso-light.css","d20db8c50b1fd12eb0ec9dd43b92bb90"],["/css/highlight/pojoaque.css","204038e2275df81579528659377aff53"],["/css/highlight/purebasic.css","d4a7cd213e2e08855250e6b6ce29bcd0"],["/css/highlight/qtcreator_dark.css","aa38c40df20fe4e40ac2c68ab0d3c576"],["/css/highlight/qtcreator_light.css","97002e271873d4b10cbd88422d9a9ba2"],["/css/highlight/railscasts.css","02c7543d2093cd705f45b8758b331b66"],["/css/highlight/rainbow.css","29f68cd8e134f8a65773f1de8dc36e42"],["/css/highlight/routeros.css","8f90949a02b2113808614d18ea188a36"],["/css/highlight/school-book.css","70636bfc6a4f8138fb4fa2024939bd74"],["/css/highlight/shades-of-purple.css","a916dbea2d716ae6b11db7177b2eb3e4"],["/css/highlight/solarized-dark.css","31271d767d6e56b0010eb691a51b0cd4"],["/css/highlight/solarized-light.css","5d796f9833e860c35992daa95b0395c9"],["/css/highlight/srcery.css","2684e9ca8403d3abc0549fd23c88bf75"],["/css/highlight/sunburst.css","cc404532ea86fc4f6e4a1d0b5415e609"],["/css/highlight/tomorrow-night-blue.css","bf4f1775c1404734a142c6b0b3b6d44f"],["/css/highlight/tomorrow-night-bright.css","f59900ef20451672312ea1a3e9dba033"],["/css/highlight/tomorrow-night-eighties.css","c26b9aa763766c36ccd62b1a92ecae2e"],["/css/highlight/tomorrow-night.css","28721ef9cb915c97f1c8590d362d4990"],["/css/highlight/tomorrow.css","921f22b92ee218ba99b629bde15c8032"],["/css/highlight/vs.css","e8617b1e54233832d25054a7e211ac73"],["/css/highlight/vs2015.css","33921e9df5f0a432f40a4db0d24f6f99"],["/css/highlight/xcode.css","5d76833ce64135724de57c76eb8547f8"],["/css/highlight/xt256.css","35543fa0482df3e577191cb853fef57b"],["/css/highlight/zenburn.css","64473cef0446800cd20b37f8c387f5e3"],["/css/style/dark.css","82e796ca411b26ebee4719791a4c37a1"],["/css/style/main.css","b13f60fadb30b08f453c2ebccc3cee8a"],["/css/style/note.css","657edf49590e362fd3866304f9e738e2"],["/eating/index.html","7b4c80897b4422d5ea00de795639595d"],["/index.html","6dcdee79533c32be68b7c4881f754036"],["/js/b2t.js","cd0f8ec03fec335251ac9c0c051f7cbf"],["/js/darkmode.js","96eb9ac7f1c1f415261aa7dd6dc5f024"],["/links/index.html","ee1952f3030d92b14c315a5a21aacf06"],["/links/link.html","03d36371ce2cfa956048625130a67f6e"],["/page/2/index.html","7c9a4def1a483f4480e68f8ecf2309dd"],["/page/3/index.html","4479ef102d985700db74895f17df8124"],["/page/4/index.html","7211bd704008738145dcef5dad2152dd"],["/page/5/index.html","a5928b827691aba9d4ab917770b44d4b"],["/posts/10798/index.html","da0ff43539733f06fe943a31dbdc04b3"],["/posts/11961/index.html","5ed4d841a055dfa7a5c822c328baf1da"],["/posts/13009/index.html","16343ca076fecefcb346adc97dac10a6"],["/posts/1478/index.html","8175933189a7b9ac0c4a771e049bd7ea"],["/posts/16931/index.html","116e06da99a443deae4fd2c5785b5c87"],["/posts/20708/index.html","4c2a84009c59e10afb835f073dd476a7"],["/posts/22338/index.html","f059d47fdfbd81900e05812dce5881cc"],["/posts/22378/index.html","752e6dfabb32e34e0ac30ec472b25dfe"],["/posts/24380/index.html","9e8d2e99eeac2c915fa2de93696577d1"],["/posts/26484/index.html","c2bd083eab9d5d1361e9a3dbb5765e4f"],["/posts/29606/index.html","9fe94c682e292db857387a68160cf2f3"],["/posts/32449/index.html","4ece1e3ba0d43a6efaf354c02c133f71"],["/posts/3315/index.html","50dfb600531de666f651e014a48cf6d5"],["/posts/33197/index.html","99543b50fb4dbee5a095a56e68d47fc6"],["/posts/33306/index.html","b6fd6c12224070d4262e5c2d8083a703"],["/posts/36128/index.html","f7866f554292dea94d7316fb2e4412df"],["/posts/37557/index.html","fb2a0bab67cbb620746628717e1e09bc"],["/posts/37773/index.html","12a9e00fa6ff941001d48d0272ecacad"],["/posts/38589/index.html","c52c42b9f50710c1cebde2862d1e7534"],["/posts/39661/index.html","6552b11c73f32de4a98765020ff9bf22"],["/posts/39842/index.html","41c0c277e30187a50fb9289346015fdd"],["/posts/39942/index.html","6c26bb5640b886ad9a6bc4d0f18a1f99"],["/posts/44194/index.html","12b03106b82e2dc9a4dfe5cec59676c9"],["/posts/44804/index.html","6ae9702fe659d873f8ba492781c7697d"],["/posts/4588/index.html","1fb52514ae39c21a550eae86d7bc42f5"],["/posts/48089/index.html","e25a75ac23761ebf87fa791cbc0200eb"],["/posts/51892/index.html","d14739f41f14d177a77d007703c72ad0"],["/posts/53289/index.html","174ce709d98b7dde1a1fec804c3310f2"],["/posts/54711/index.html","5d563eb2f5d4d5e4bc9059a8a977cf70"],["/posts/55302/index.html","baf2e672340f695aaa26b84281ca09c4"],["/posts/56653/index.html","6be10315cdaacd01d6d28d5cfe592dd2"],["/posts/57345/index.html","69a7d04280e1bfdbe27542c7c469a5e3"],["/posts/60197/index.html","554e95cadea6d12818b447a200ccddfd"],["/posts/60788/index.html","d69c755e1b619e61b1d3a18f14fc8908"],["/posts/63676/index.html","a3db6892f05ec1bbe8a697a98d524e20"],["/posts/64257/index.html","c91d50aa78fd15a1026587d06d861288"],["/posts/64865/index.html","5f1f8c4ecf5ac2939f20696810e128a6"],["/posts/65311/index.html","2ef40a4645e856242fc1f26e883ddffb"],["/posts/7324/index.html","d35d289157cc39da84bc6297da00820d"],["/posts/8688/index.html","6ca0b7f8739b9c77cc1ad55f285a8d36"],["/posts/9687/index.html","3e101f662dc477b23a51b5a442045056"],["/random/index.html","c966ae1e5fc29ccd32d96c47952466e3"],["/sw-register.js","1e03c8c9025ea73ebf5f94bb42db739b"],["/tags/index.html","61d339f3220908e1ecee7ab73e7b4377"],["/tags/书单/index.html","6a731fd50ecd64e76d694b61c72eb2a8"],["/tags/公告/index.html","d567893f20d74fd2322567dead16af99"],["/tags/悦读/index.html","563d3a7e4eb909ac2a125887cb54be22"],["/tags/笔记/index.html","bb5460d8b9318351ed527c0a89d0a309"]];
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
