/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","b98aa77507aebcf01df8aa2a511fca00"],["/about/index.html","3764b3b75cbe4fbc70b4d5719c797d01"],["/archives/2020/01/index.html","49cf4e24a28c7d874628d8c542c3dbb4"],["/archives/2020/02/index.html","c9fca0c02985251ab1091284b12da32a"],["/archives/2020/04/index.html","feef99e243200d14ef217da702e3a33a"],["/archives/2020/05/index.html","1dbb7ea183e63f7dbf2a95bc9742dec0"],["/archives/2020/05/page/2/index.html","a35a80552a94cc5a313636129985ecd7"],["/archives/2020/06/index.html","15e795577ec5d9e5c1de734bb1fdb082"],["/archives/2020/08/index.html","992827fbba5a9bce25c9ffed752fc33c"],["/archives/2020/index.html","2f37015e817e3eb0f97ab3a5c87a1226"],["/archives/2020/page/2/index.html","4c83ebf987a3ddc45c24a50688410a4a"],["/archives/2020/page/3/index.html","e698fa4eb90ebfe069575b0806745cb9"],["/archives/index.html","b510e43b4fa9793e7f62c0e95840813e"],["/archives/page/2/index.html","4bcdd0c996d3fc0b977fb3336f78db6e"],["/archives/page/3/index.html","0e5233f2d7d40750dcc5f09b5a76f5a3"],["/categories/hexo/index.html","dadde28694a63cf25b5eeb779d437462"],["/categories/index.html","7f013033092ea978ff9c92018d5a840b"],["/categories/分享/index.html","121c6ca62265fe1d5aaaf551f4188f12"],["/categories/技术/index.html","128f6640717657570832e512b442ff2d"],["/categories/技术/page/2/index.html","7b5e2b8331445dc8b3fe0030f44910ac"],["/categories/技术/page/3/index.html","5f60be2cc4149f2072295d8d407c7156"],["/categories/技术/资源/index.html","3dd0a5989c84be74feb0a3594fb4cd01"],["/categories/技术/转载/index.html","1a4a2bf47208769e6def1ea5e108dcd1"],["/categories/杂谈/index.html","ccc93b24054f7b2522ba454965fa9941"],["/categories/生活/index.html","8f9356073a263892453efa1cd0b3c2aa"],["/categories/生活/技术/index.html","f98b13b5094c0706b186c8f7b3f55f3a"],["/categories/生活/技术/转载/index.html","c2205eee46783b86fd9f903b66e03c55"],["/categories/生活/随想/index.html","544bf9bfb31d47e158fc1ef7f11dd0db"],["/categories/资源/index.html","bda949a123d3ebb1c3da61f564665621"],["/css/highlight/a11y-dark.css","0a585077dd4333207f6eac99e0956fc8"],["/css/highlight/a11y-light.css","e8a0be45c68f4772917407d21327ffb9"],["/css/highlight/agate.css","a700d12ef70c216b093f18743e9b460c"],["/css/highlight/an-old-hope.css","e18b9ae22ff009c5f5c7afe2cc2a1523"],["/css/highlight/androidstudio.css","23793304ab21b46ce4c08cff09f5c33b"],["/css/highlight/arduino-light.css","f7945f0a0ae6171e98c52fe25c196c0c"],["/css/highlight/arta.css","86ae55da3e0e19ddb86e7dffa5e9dc74"],["/css/highlight/ascetic.css","c2ee0dbc0c81959aa93faa8ed4f578ee"],["/css/highlight/atelier-cave-dark.css","f39ce5c6fe63a78757f8edf934f1c08c"],["/css/highlight/atelier-cave-light.css","b68ecafcb3cf97c3e821a0155ff518c9"],["/css/highlight/atelier-dune-dark.css","ef6692538ea73766e427c27615d75892"],["/css/highlight/atelier-dune-light.css","f7187554f33a46e8f437327034c1a42c"],["/css/highlight/atelier-estuary-dark.css","48ee14968b078881a8f079f809423cb1"],["/css/highlight/atelier-estuary-light.css","f1367004242b9e919094c075f844f73a"],["/css/highlight/atelier-forest-dark.css","a7f1ee9606371f1c498b98c37a05fd4e"],["/css/highlight/atelier-forest-light.css","ac97a6a9abd0043e800bea944078c8e4"],["/css/highlight/atelier-heath-dark.css","b90e0500524c9376999f9e6635c58f4e"],["/css/highlight/atelier-heath-light.css","20ec1fe8353b60bea2034ebccaeb5437"],["/css/highlight/atelier-lakeside-dark.css","75b60618e591a2d67fe8e6c51ee765a1"],["/css/highlight/atelier-lakeside-light.css","23e0337443330e0db05cce1653ea7f36"],["/css/highlight/atelier-plateau-dark.css","840d1fd71e2ffacfd7aef8411ebc465d"],["/css/highlight/atelier-plateau-light.css","4ee3dac723f1f7b89934019f75cdc5b3"],["/css/highlight/atelier-savanna-dark.css","056198141e3fc858472ab52c6e0fc2fc"],["/css/highlight/atelier-savanna-light.css","786e37680a104f7885a14c1b616989da"],["/css/highlight/atelier-seaside-dark.css","a6b74e5bcd0c4ae4ab3341786c878612"],["/css/highlight/atelier-seaside-light.css","09074028d4cacf22fb2975042b4d5b04"],["/css/highlight/atelier-sulphurpool-dark.css","ca7002f9e2d81d07a0f89e36d504a1be"],["/css/highlight/atelier-sulphurpool-light.css","a6a725bf38c8999ca608558f3e0f8003"],["/css/highlight/atom-one-dark-reasonable.css","8fde200bf3c9907329ba466388666bb5"],["/css/highlight/atom-one-dark.css","fb705a278b969ac14495c1d2df8a3f55"],["/css/highlight/atom-one-light.css","812966035b0864ab56282ef9fe7265e2"],["/css/highlight/brown-paper.css","0a45d3a41ffc02f9933942b0cae85eaa"],["/css/highlight/codepen-embed.css","e29550a474a590a50b1c3e430816313b"],["/css/highlight/color-brewer.css","d50e25273374b53e9f6261a0c2f3e96a"],["/css/highlight/darcula.css","dddabbbfe95dc4f078bd6de3e0254fae"],["/css/highlight/dark.css","6865844c734f12ea2f3b4610b5a66a9e"],["/css/highlight/default.css","1e5c61a27a715d4d6570039c2da3bb99"],["/css/highlight/docco.css","ac7a8b6feef4e089a225b5d8e92cce02"],["/css/highlight/dracula.css","37c4ce2fe0e2ffc725fbb932f710b0dd"],["/css/highlight/far.css","f3ef9bc4a71d786c7c5d7ea2fc972b63"],["/css/highlight/foundation.css","f48b7479eca75cabcd53cad2f1d78607"],["/css/highlight/github-gist.css","7a715aba492f7e2f0e859cfa69663b02"],["/css/highlight/github.css","b29dd302c7458ee62d8d1d57f18d0666"],["/css/highlight/gml.css","5666eaf7b6551cae9b01237d0435db9b"],["/css/highlight/googlecode.css","38a19db3d9bffbfa88c6d40e58e874ad"],["/css/highlight/gradient-dark.css","7a74b10211d46ba20d5b75d096e2b853"],["/css/highlight/grayscale.css","3f77c591d72cabb609c6ddde790402ec"],["/css/highlight/gruvbox-dark.css","90d566ea691c0f1a0416a031ea0d72ed"],["/css/highlight/gruvbox-light.css","7a93a37007576e44c583b421e9d0f4c3"],["/css/highlight/hopscotch.css","ccf45b528522f808e6626705f8db85c2"],["/css/highlight/hybrid.css","1a18299bf65470513162658d51b432b6"],["/css/highlight/idea.css","57ef9bed8be8f1d942edba0d0e832e17"],["/css/highlight/ir-black.css","e041b4ddebe807dff7bfa546e08c4279"],["/css/highlight/isbl-editor-dark.css","be64f78765c399f5e3fc88a1aaae0d44"],["/css/highlight/isbl-editor-light.css","5a9b4f8923f50a0e18acde9e2e2a8ca0"],["/css/highlight/kimbie.dark.css","3ae5294d2b66eb603d3c9b189c50e2a7"],["/css/highlight/kimbie.light.css","6cee38dac781bcd51bea370b4d1267f5"],["/css/highlight/lightfair.css","5f196fed8736b222440c1aac6d9ca065"],["/css/highlight/lioshi.css","5d466d81b841b57b783428a1253bafe8"],["/css/highlight/magula.css","747a31dfa9df42191943f380641704dc"],["/css/highlight/mono-blue.css","d99f1da2db5d10598c1a86a1c686364d"],["/css/highlight/monokai-sublime.css","8dc64be6baef2c24c32eecb02d234e6d"],["/css/highlight/monokai.css","b5b7a9123c5c43e2279776cfe5489a21"],["/css/highlight/night-owl.css","05ab76d0585b5d7133ed120ea5161900"],["/css/highlight/nnfx-dark.css","b59b033b2bb00e48a45ff8b3e2fcd96f"],["/css/highlight/nnfx.css","25080531cebeac8a1d4908d9f444579c"],["/css/highlight/nord.css","c40320ec3f236cb4ba86b5df9abf6f9e"],["/css/highlight/obsidian.css","88e9c77d7f5e197af706de243cb5f64b"],["/css/highlight/ocean.css","1d763de77687960f830512f68d99ef46"],["/css/highlight/paraiso-dark.css","93c4774fdebb0a057bf5f3fa4907238a"],["/css/highlight/paraiso-light.css","4a70f0525d2cf5db66ba379500752f35"],["/css/highlight/pojoaque.css","38a3555617b2dc06cc3910620935e051"],["/css/highlight/purebasic.css","70d35d8cdfce89ec0804efc53745df2f"],["/css/highlight/qtcreator_dark.css","419450a9738a003066032327f52979d2"],["/css/highlight/qtcreator_light.css","df20d74c4fda476ee581c0aac140cb49"],["/css/highlight/railscasts.css","d7336146b0ab977d5ef8ec5439b04605"],["/css/highlight/rainbow.css","7fb254345e8b6c2987195b2f8aff2c0f"],["/css/highlight/routeros.css","5428220108b26893365cfb1b5d5aeed3"],["/css/highlight/school-book.css","efc9789b8ecd1e7589fed1a6421e5ebe"],["/css/highlight/shades-of-purple.css","92d46cc5a652ccbcb6264f1103de179c"],["/css/highlight/solarized-dark.css","26dc84f288fc832dd731b247723e5fa7"],["/css/highlight/solarized-light.css","64fd9daa6bced37c4ddc73796a25d7ce"],["/css/highlight/srcery.css","95a324637833b241e9fff84355bef9f4"],["/css/highlight/sunburst.css","04223fccfec02a4f3910f9c992836fab"],["/css/highlight/tomorrow-night-blue.css","2de81c15a7e45dd362a718dee71990f1"],["/css/highlight/tomorrow-night-bright.css","cb0f05b32e08563ebf3de41507c2e0db"],["/css/highlight/tomorrow-night-eighties.css","e33b4b150c7828cdd2c64c1e10c4353b"],["/css/highlight/tomorrow-night.css","5e550b28ef0c3c1f81009dd6f71af161"],["/css/highlight/tomorrow.css","0796c5c81589018add1c26110d06ebe4"],["/css/highlight/vs.css","40eca64b553125843133e5b3ece1f1e2"],["/css/highlight/vs2015.css","eef3ac46e2d85d917e936c7c41e9b54c"],["/css/highlight/xcode.css","14f503148e5222d45c9a35433b68a6a8"],["/css/highlight/xt256.css","250d7a158f0018a8ce4f1a5fdd58ed17"],["/css/highlight/zenburn.css","20fa8c6bc7e60982179a5a6b9c030559"],["/css/style/dark.css","846147da33a216a53071eb4eb9539b69"],["/css/style/main.css","86e9db3bcbf835b6c3a4a439a3c41561"],["/index.html","0b046d71f7adb31319270dee1714e9d1"],["/js/b2t.js","ff7fee4413d70545d069b5f328e5cdbe"],["/js/darkmode.js","2be8ee2c06f76137631d04a452d4a5bc"],["/js/local-search.js","d41d8cd98f00b204e9800998ecf8427e"],["/links/index.html","d915c46ba5c8d8273e37e43d99018e17"],["/links/link.html","58f773de6e3cf578541295537843efd2"],["/page/2/index.html","fe2ac0127f6b8fb6486a398df8a0f10a"],["/page/3/index.html","63b9be077beaedeae542d1438a507568"],["/posts/11149/index.html","0bbf77ec445ba522cf1d89001118d5a0"],["/posts/11961/index.html","38d6bfa09aa31664e68581764ae55159"],["/posts/1478/index.html","2a126a757855861878e0a5f26bec0025"],["/posts/16931/index.html","69d77f047d2d6ca6d6e732c9ccb9a2df"],["/posts/20708/index.html","da602bf6da50fa0420d35d357a48c8f7"],["/posts/22378/index.html","137f1e11b3f1842647a703c1effffc2c"],["/posts/29606/index.html","cb2dec8b7d254527490fafa7715523b3"],["/posts/3315/index.html","2775547bf31bff943bbf8f8ed27262b8"],["/posts/33197/index.html","bbf197c674f6fd4719640fb1f416befb"],["/posts/36128/index.html","3ffad0a449782e6f73733add83097453"],["/posts/37557/index.html","f569c0881d7026a65bc909665a7f5738"],["/posts/38589/index.html","c40f2b4b9017cbaf5a62c1999c295694"],["/posts/39661/index.html","41836322626e3b2328d8830fd2d3ab47"],["/posts/39842/index.html","ce6aaecd25c43ed3f0f560b022b79d88"],["/posts/39942/index.html","db550868f9acf432659ab49479e7a9ae"],["/posts/4588/index.html","6fbc7a4a7ab75551f7a38da8b54bd2a4"],["/posts/48089/index.html","35b73e5600665c07c101575ea189e6ef"],["/posts/51892/index.html","79925cb4bcc1daa87004f09a578855dd"],["/posts/53289/index.html","ca022bc324733481fca57d9f0c212ec1"],["/posts/55302/index.html","99baf4ad6f04c6738ffba378c6753254"],["/posts/56653/index.html","d2685cf0e8611614e86c9a5a29c78fb3"],["/posts/57345/index.html","b848c7a2fd7d968ee5b8f3883df7957f"],["/posts/60197/index.html","646e73e2879d13969f1ffd28f5c65605"],["/posts/60788/index.html","3d4d537a5fe01b14192de8e5480c2c9b"],["/posts/64257/index.html","8e4eab8948fa7a9dd0ad332aa03961b8"],["/posts/64865/index.html","e828b70a6eaee8b895016952064d7d97"],["/posts/7324/index.html","a620b6aac10d64eff6bf7be7dc31e932"],["/posts/8688/index.html","4fd1ebbb7da4fa1717aee558fa16b9e3"],["/random/index.html","47bba969bad7c5511d6359a97fa97e2e"],["/search/index.html","04e7b0db71e5ca60a9ed57d3f70d74ef"],["/sw-register.js","ba38c7585f82add4485f5891ba6914ee"],["/tags/index.html","d1e8ca31f6c8c4300a7fb23a194c95cb"],["/tags/书单/index.html","3193f4b89de626782e9a240af7c98dbf"],["/tags/笔记/index.html","d6184c597f8a0944b6ea457ce5178123"],["/tags/语录/index.html","88be29a27dfdaa068171c66387d3b33e"]];
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
