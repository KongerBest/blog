/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d41d8cd98f00b204e9800998ecf8427e"],["/about/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2019/12/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2019/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2020/01/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2020/02/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2020/04/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2020/05/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2020/05/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2020/06/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2020/07/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2020/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2020/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2020/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2020/page/4/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/4/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/5/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/技术/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/技术/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/技术/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/技术/资源/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/技术/转载/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/杂谈/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/生活/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/生活/技术/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/生活/技术/转载/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/生活/随想/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/资源/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/资源/转载/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/转载/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/随想/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/css/highlight/a11y-dark.css","86e60d8aca8c052e5d5aeec7ec68bcf7"],["/css/highlight/a11y-light.css","8db2666240bd29f583a372ecbe3530ab"],["/css/highlight/agate.css","4dbc39396a3c289a61fb2968d07a192d"],["/css/highlight/an-old-hope.css","b3d897d46d7a4c88cc77d6931e141dde"],["/css/highlight/androidstudio.css","bcb13b681d21059cb37bd519fb575194"],["/css/highlight/arduino-light.css","8c711c6973e2b82cbd937c8cbde83d52"],["/css/highlight/arta.css","aa8a9e6732cddb727e0980b60ec72768"],["/css/highlight/ascetic.css","14a5df94a41d034b548e6c9888e96da8"],["/css/highlight/atelier-cave-dark.css","83f14b4c59e414edf509a6eaa4e7bae5"],["/css/highlight/atelier-cave-light.css","11898e8d9e355a557196c63efeaadc8f"],["/css/highlight/atelier-dune-dark.css","29c2804db304e7d2e1311e5945da6194"],["/css/highlight/atelier-dune-light.css","46770fbdd6f2e62814d6a5e982277536"],["/css/highlight/atelier-estuary-dark.css","95fb1fccac1612dc67b1df7d5a9d366f"],["/css/highlight/atelier-estuary-light.css","1d4cc76f513482f0d1ce1c43af58d4af"],["/css/highlight/atelier-forest-dark.css","e7ef7b61702565ca9acb1c4cc418e13c"],["/css/highlight/atelier-forest-light.css","fbd876e06692e806e718cb04a864a604"],["/css/highlight/atelier-heath-dark.css","54b60a6664443c73428319fbeb70ed06"],["/css/highlight/atelier-heath-light.css","e7add842cff1cc4849555ab582729c86"],["/css/highlight/atelier-lakeside-dark.css","a8880dfdac4021d1665e9701ead5c533"],["/css/highlight/atelier-lakeside-light.css","0cd71c1e78512c89a50926ac036b959e"],["/css/highlight/atelier-plateau-dark.css","e084a88a79f8ee1d93b697cd053fea63"],["/css/highlight/atelier-plateau-light.css","d544f34d19a82b50f738af4f48ddde54"],["/css/highlight/atelier-savanna-dark.css","03d7908cc2945b61f4685fddea548da8"],["/css/highlight/atelier-savanna-light.css","6a8a49f6b9046201e34f2c9fb636f7f4"],["/css/highlight/atelier-seaside-dark.css","89b0b72bf90e85796da9450c127c2bd2"],["/css/highlight/atelier-seaside-light.css","f0f53d8cfb4f3825aa5a0b0afa023d9d"],["/css/highlight/atelier-sulphurpool-dark.css","287d0fb6771329960a97f15bc2b7d7bc"],["/css/highlight/atelier-sulphurpool-light.css","30fb277e5bd7a4bf98f77027e3958cbb"],["/css/highlight/atom-one-dark-reasonable.css","793c5f7ca7c0667a14122d12ce7321dc"],["/css/highlight/atom-one-dark.css","2a86d0e8b12025840e6b073375b2108e"],["/css/highlight/atom-one-light.css","4d7fb40282b4ec32ece61d30f56628c6"],["/css/highlight/brown-paper.css","9d6bcf5a6d8ead73fc895bae174a29f8"],["/css/highlight/codepen-embed.css","73a08fb3e5d31ff9ceb20ce9a1de7e1a"],["/css/highlight/color-brewer.css","e48b64d87c0cffc9912939ac5f486f58"],["/css/highlight/darcula.css","a5d4c8500a87d3bf4ff61fab029c56b3"],["/css/highlight/dark.css","19e0867cd1e13bfc373b5c422a5a1c3f"],["/css/highlight/default.css","df4dca73fca80c03c55c49d624f8dd90"],["/css/highlight/docco.css","1f1c03e479a962cc3eda6ca1aebf6fed"],["/css/highlight/dracula.css","bdda91e7a45ce839adb1b94c7a974895"],["/css/highlight/far.css","fe19032e0fd3a0dbb9ff31780971da5c"],["/css/highlight/foundation.css","3e8f12b1b26a6619c2981f2c9d156383"],["/css/highlight/github-gist.css","dfc959a7556d7c0b780eaab980a5e298"],["/css/highlight/github.css","1dfe05335b9991c6005a796b67db4e97"],["/css/highlight/gml.css","9d2b04d86e9523bbe14de38fabc4c7e2"],["/css/highlight/googlecode.css","1d20ec00b6379e1798ff5be2299fb908"],["/css/highlight/gradient-dark.css","be69279181c590205bc277b56c8940b0"],["/css/highlight/grayscale.css","e168b808639fba1cf29364763f77eac0"],["/css/highlight/gruvbox-dark.css","71b7666ba40fa02c8ccbbc0a43dc70b0"],["/css/highlight/gruvbox-light.css","b4b9eae829ec33635af6f7d312232854"],["/css/highlight/hopscotch.css","0ecc083fe544b7be7365d9861d19f54b"],["/css/highlight/hybrid.css","2036a52d612490fb55fe7ac3b56e4a85"],["/css/highlight/idea.css","f82691942af215f94bd33829c7a17ead"],["/css/highlight/ir-black.css","3739f701ddf0f9782d7232c450a1efe5"],["/css/highlight/isbl-editor-dark.css","40c42d3ab54479192a1ef552efd65bac"],["/css/highlight/isbl-editor-light.css","650a47e70c462dd2c275cd3f513cd2cf"],["/css/highlight/kimbie.dark.css","3f79a4d42f8d55d7dee9322f11fd233e"],["/css/highlight/kimbie.light.css","f607e9b854185dfd608d652aa19f65a5"],["/css/highlight/lightfair.css","320d3f936feb70214727345cf6972688"],["/css/highlight/lioshi.css","c6614217d92253fceb2607384f655fdc"],["/css/highlight/magula.css","9e7662d1bc5992ac149554b0b64a600c"],["/css/highlight/mono-blue.css","b7d21f8c487f33c2908072595a691b0d"],["/css/highlight/monokai-sublime.css","4a6114dfdc3bad06d92048e364661e2f"],["/css/highlight/monokai.css","33ad048b9a277cc02df7dba812f4f63d"],["/css/highlight/night-owl.css","e3a3588705ad6a4dc0135170174fc81a"],["/css/highlight/nnfx-dark.css","547e3e78cc324a7bde360593c816fdfd"],["/css/highlight/nnfx.css","a89c4224a3547cc4e2cee39ccac3c323"],["/css/highlight/nord.css","f972c0cb37ba34782eff2fed532d67a7"],["/css/highlight/obsidian.css","ff2764bc73aaae2900e72336bcb60fdd"],["/css/highlight/ocean.css","054419485cdde3e75559dfe2ea549521"],["/css/highlight/paraiso-dark.css","8ed5e8c8124e1261f9a5b55c52ba8114"],["/css/highlight/paraiso-light.css","6ac7f24523c3e39c81c80ecb6ba5d37c"],["/css/highlight/pojoaque.css","902662541b6495c5af09011923978fab"],["/css/highlight/purebasic.css","9cd84dbb3882197fe89dd85ef5c483d4"],["/css/highlight/qtcreator_dark.css","534158e2c326b60cde0ad68193a02aa1"],["/css/highlight/qtcreator_light.css","729407c316d3c734e5d09a2199575920"],["/css/highlight/railscasts.css","9a3c7de29f820f13b71c5b34bdc71519"],["/css/highlight/rainbow.css","ea8e59b645b89dcf35be7d88ddebdcf0"],["/css/highlight/routeros.css","c2b70fc35b7e47acfd86e5e316809de4"],["/css/highlight/school-book.css","a1ae5006c4a3b9afac466bb1edb1ed7e"],["/css/highlight/shades-of-purple.css","6b4a29a25e7b2b22150a7d35f3b2a38b"],["/css/highlight/solarized-dark.css","1bbb00c9d55c8b58936cf2111a776723"],["/css/highlight/solarized-light.css","0b2bf12290f926b90fe2c47f1accf5c6"],["/css/highlight/srcery.css","07d69199a554a7169a54900a15740067"],["/css/highlight/sunburst.css","8a7e6c545f03df4a2f25b61738186913"],["/css/highlight/tomorrow-night-blue.css","db563c7027998ac890e267df764f8d16"],["/css/highlight/tomorrow-night-bright.css","5dd0932b1c9224fa0fb4d2a8df2f9f3b"],["/css/highlight/tomorrow-night-eighties.css","e5dd158dc8f7d0b54ebda7ec5bca202d"],["/css/highlight/tomorrow-night.css","234f61003ee4fb1aab753e4c69f45963"],["/css/highlight/tomorrow.css","da35c1916d761282650da4c9cf665dfa"],["/css/highlight/vs.css","7075918f2c9c903cb8c87ae384058441"],["/css/highlight/vs2015.css","ba76111bfad383fd7f335a435a837690"],["/css/highlight/xcode.css","4e3708edaf3113b2649c3f89bb610af5"],["/css/highlight/xt256.css","0a742a7d2ccca4cd17e9c630079a47e9"],["/css/highlight/zenburn.css","130d69926334e3c56f20e8513a90481b"],["/css/style/dark.css","ddafacc7d934c010e21060107f4fdec8"],["/css/style/main.css","c5a11a3fe38f0328bad6f31900007ef7"],["/css/style/note.css","ed1bbc2fedaf72ef0e79566ea893eaae"],["/eating/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/js/b2t.js","cd0f8ec03fec335251ac9c0c051f7cbf"],["/js/darkmode.js","96eb9ac7f1c1f415261aa7dd6dc5f024"],["/js/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/links/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/links/link.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/4/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/5/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/10798/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/11961/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/13009/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/1478/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/16931/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/20708/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/22338/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/22378/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/24380/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/26484/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/29606/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/32449/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/3315/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/33197/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/33306/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/36128/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/37557/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/37773/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/38589/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/39661/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/39842/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/39942/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/44194/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/44804/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/4588/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/48089/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/51892/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/53289/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/54711/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/55302/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/56653/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/57345/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/60197/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/60788/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/63676/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/64257/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/64865/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/65311/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/7324/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/8688/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/9687/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/random/index.html","458d3b8d30aadef44f4b329efbc88a1e"],["/sw-register.js","2e5437ae87fb84013afb29f39681d17d"],["/tags/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/书单/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/公告/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/悦读/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/笔记/index.html","d41d8cd98f00b204e9800998ecf8427e"]];
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
