/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","349955570c306846f65752147b26df27"],["/about/index.html","b1546e3c62602516c3107281d7652594"],["/archives/2019/12/index.html","2ddb862acf77213e87703b63935cd131"],["/archives/2019/index.html","f12c6c5847d835b1f47052183d59021c"],["/archives/2020/01/index.html","d1978115197e1375d48c65ddea32fcb5"],["/archives/2020/02/index.html","68aa73cd0bd35ccfec3b24e2e6b725ab"],["/archives/2020/04/index.html","fd3c1e4f181fe8c559ed7cd4ac674f52"],["/archives/2020/05/index.html","61fa4ff1fcd7e9b989796114e52b940f"],["/archives/2020/05/page/2/index.html","f0a610b6612bbc09eb9d4bdcd28792c6"],["/archives/2020/06/index.html","6bc9d2c8c24f9c8d8c596edcc20d763a"],["/archives/2020/07/index.html","de3f36b6b306030ca18f1a64493046f9"],["/archives/2020/index.html","1ca7e8d4c5c636249ac5d6bfdcd21be8"],["/archives/2020/page/2/index.html","97be2336270014614348f26612a7e802"],["/archives/2020/page/3/index.html","221c88731d43311f21b4e3ae8468b4cc"],["/archives/2020/page/4/index.html","06ee1fa92df0d7aa44f6bbd5c7f8e15c"],["/archives/index.html","e087414dc463ae7149b054d56a3b90cf"],["/archives/page/2/index.html","252a39d768a8d14a2c3641c784ce5b03"],["/archives/page/3/index.html","9b9eb70a00a8ae0a9d865ada98c3c98d"],["/archives/page/4/index.html","1d5b8b6938252cec2826d4da24e79273"],["/archives/page/5/index.html","58a6c999e460ffc31a56657a4c2909b1"],["/categories/index.html","277be0e786b07c3deff8ddd9e349c920"],["/categories/技术/index.html","ea62e5a657796c0e7624678455e08f7b"],["/categories/技术/page/2/index.html","7370117356e8d621b94e6d2e8d88ae39"],["/categories/技术/page/3/index.html","0ece16096b6e2d8b19a6260b1120562e"],["/categories/技术/资源/index.html","c46dec83fcb12f10af55390b52ef4cc5"],["/categories/技术/转载/index.html","624851e17bcef5c8fcfbaceb61573ab1"],["/categories/杂谈/index.html","606c94e93f272b53cf42c3544e34d7d6"],["/categories/生活/index.html","1d5966a6b57bd161f5812d0e603b9aa5"],["/categories/生活/技术/index.html","1ef5f313bf8bd26ca010368c24636706"],["/categories/生活/技术/转载/index.html","dc45af1f3c1760d9b31631059faa639d"],["/categories/生活/随想/index.html","eb2ba61c22cccb7b5a4475b8e45e45d0"],["/categories/资源/index.html","08a891e5f456660aa3c607847ceb12ff"],["/categories/资源/转载/index.html","4ab86eb796d7054f5cfe4bab5ce286a8"],["/categories/转载/index.html","e243dcc94473998f133357fc95e6c0be"],["/categories/随想/index.html","ae2d3c50bd343de4de5b985306905c51"],["/css/highlight/a11y-dark.css","44acbbdb532e2dc9bbdd8d5bb52dc77b"],["/css/highlight/a11y-light.css","c957b46d5b7e7b30512abbc2b2b1afed"],["/css/highlight/agate.css","58c30a315f4f38402d698ed5888e2cc9"],["/css/highlight/an-old-hope.css","4af4c15c821686134ac96fcd71cc276b"],["/css/highlight/androidstudio.css","ac6fc0659a568b16411d3c6baa5d2f61"],["/css/highlight/arduino-light.css","1860a63577da8b71da2a47e6b545c5e7"],["/css/highlight/arta.css","e2ced7feb63453ee46aaa47a0fa15943"],["/css/highlight/ascetic.css","e6461d285b5edbfd21091062cd971466"],["/css/highlight/atelier-cave-dark.css","6aeda5638004be87e779df43bfb9c601"],["/css/highlight/atelier-cave-light.css","cd823cc4cb50e97d8b106a52429c6d6d"],["/css/highlight/atelier-dune-dark.css","3abc7bc4ceb85684aacb2af9e7b8dd09"],["/css/highlight/atelier-dune-light.css","a7bf8f64c999645e81b48eb9d8f95cdc"],["/css/highlight/atelier-estuary-dark.css","db301b8de813022f1bf583af54a1e629"],["/css/highlight/atelier-estuary-light.css","791f978e7825a44eaa67819be8cf21bb"],["/css/highlight/atelier-forest-dark.css","7e9f5dfeb09d5f25c482ed02df2ecce3"],["/css/highlight/atelier-forest-light.css","592cdb526c44b959946ccc0d63e4817e"],["/css/highlight/atelier-heath-dark.css","2657b8391c859d5247c68cbfd259360c"],["/css/highlight/atelier-heath-light.css","8fe891c18f678d19d3804a0198c83c41"],["/css/highlight/atelier-lakeside-dark.css","ae1d137a9621cab0fe240b32127ceddf"],["/css/highlight/atelier-lakeside-light.css","370e14ec097325ecdb283f1860da16fb"],["/css/highlight/atelier-plateau-dark.css","4e74956df379f61739e0bcba4c3cc198"],["/css/highlight/atelier-plateau-light.css","726a84f9118c3e50c18ec707dbb7490f"],["/css/highlight/atelier-savanna-dark.css","56324ccf1c61e353bfa667968748110b"],["/css/highlight/atelier-savanna-light.css","6184fe6b364bc71940f694aacfb4c1ab"],["/css/highlight/atelier-seaside-dark.css","a641c852b0572e5c1c6c86f6490e22a6"],["/css/highlight/atelier-seaside-light.css","ac1e9054d7ef7b99d614d64757a3b987"],["/css/highlight/atelier-sulphurpool-dark.css","de36155ac1eb0161086575a0e62f070e"],["/css/highlight/atelier-sulphurpool-light.css","d6c08893d164c09363df1420b572c9e2"],["/css/highlight/atom-one-dark-reasonable.css","f294f953e02ecd490a7f8823f0e6d59a"],["/css/highlight/atom-one-dark.css","065bd0a5afd375506b180c8c133f40a5"],["/css/highlight/atom-one-light.css","ba81845d01f1b73505ef2cf652c4da3c"],["/css/highlight/brown-paper.css","4622263b921d19a7c6ff54fafa7ef209"],["/css/highlight/codepen-embed.css","330d7ea7e5d1facb7320a652399b6f1a"],["/css/highlight/color-brewer.css","455dec72716155d9ae55c1a7831f09f3"],["/css/highlight/darcula.css","5440418d2152dc92d60d4da8db76bac2"],["/css/highlight/dark.css","62f71a0b6d6fa2c49a273624bba829ab"],["/css/highlight/default.css","5151fd8d273dff9ac971c0d223bdbcfc"],["/css/highlight/docco.css","bae998fa90ec9a4250d84c009b579b23"],["/css/highlight/dracula.css","dd8dead7207f4783c39a6f7b09262d15"],["/css/highlight/far.css","0676491ba4552307e47d4c0721e08043"],["/css/highlight/foundation.css","e2cb47b79bdd4bf760974024c5fcbb27"],["/css/highlight/github-gist.css","51beccf540121719354488f21f1e4662"],["/css/highlight/github.css","8af3ce595458fd46de4b310967827261"],["/css/highlight/gml.css","e6030044940b188e0cb3b67ce8a5cd3f"],["/css/highlight/googlecode.css","8cd6d36c0da61291c46910f5afca42f2"],["/css/highlight/gradient-dark.css","80578d857d7927f64b16b24bca1d6c27"],["/css/highlight/grayscale.css","e9b6532f39db559b52ab4e40bdd0f556"],["/css/highlight/gruvbox-dark.css","7f5beec0101298b122ca818528b0dade"],["/css/highlight/gruvbox-light.css","c5f704978e9d80554ea71c0a8e991c8e"],["/css/highlight/hopscotch.css","6223974d7ff362d8dc105170c2eb0fc7"],["/css/highlight/hybrid.css","1dc32208218a978387ab13b2074c1eca"],["/css/highlight/idea.css","02251d27243173ccfd18783c59be594e"],["/css/highlight/ir-black.css","9cc3d60330ba4cc18387c8c6b1da6d69"],["/css/highlight/isbl-editor-dark.css","feb10913e66afc510ffbb0e770d2bb08"],["/css/highlight/isbl-editor-light.css","82cdaed4e4f4d0501e1ba9129b6443e8"],["/css/highlight/kimbie.dark.css","eb50c2c62d6d0135714e6c5502bc28a6"],["/css/highlight/kimbie.light.css","2fff82760c7dd06b4f950bf2a7b27f6c"],["/css/highlight/lightfair.css","390be49d9ed9c43afa373bbe64da8457"],["/css/highlight/lioshi.css","cd0c4779fc1deca28c3f4dabaaa4eb51"],["/css/highlight/magula.css","c128fa72b4dec88fb2c340cb26d2c15e"],["/css/highlight/mono-blue.css","d04fd2c7225b3185a79af2900e4a7b05"],["/css/highlight/monokai-sublime.css","8e6d42493c712c0d02ca5589b81cac36"],["/css/highlight/monokai.css","31e4d665a6d6ac05ffdcc2958b0a32c7"],["/css/highlight/night-owl.css","42f3719ce4fc1abe9c36bdb7ea6f5090"],["/css/highlight/nnfx-dark.css","2aac3913372bac7c569f6e98e4d67f2b"],["/css/highlight/nnfx.css","26276e03a60c9893d594d4f814219849"],["/css/highlight/nord.css","e121de8a90d1484e3be3398a3bfbc586"],["/css/highlight/obsidian.css","6fd751c8c5b507c5954973a215734c7c"],["/css/highlight/ocean.css","aefd3dcfcfc692aaa989609135ca0acf"],["/css/highlight/paraiso-dark.css","3a0513da85dc45fdc834027aed9c2f67"],["/css/highlight/paraiso-light.css","2bdc990d419f65642df7b02cdf5675c3"],["/css/highlight/pojoaque.css","ab942cf92de6ec97f4e33282b9ddd43b"],["/css/highlight/purebasic.css","8a5864e7627568fa13c137f3927df6dd"],["/css/highlight/qtcreator_dark.css","df5297694def45d4565b72c3c8957aa9"],["/css/highlight/qtcreator_light.css","8bc16fc71bbe9c4a1a3939f9fe8b575b"],["/css/highlight/railscasts.css","4b219ac7a10f0106c5593eab88d350dc"],["/css/highlight/rainbow.css","202ffacf72f302338d89b431a2cb6fc3"],["/css/highlight/routeros.css","a49dbbfde059c3f4a4662a1394a4cb98"],["/css/highlight/school-book.css","fe4f5ba9775e51e7d31998aa4fb23925"],["/css/highlight/shades-of-purple.css","0fd0d5a0e433ed9de437af61efcfbf00"],["/css/highlight/solarized-dark.css","d1bd310db3b3052794f1237c975f569a"],["/css/highlight/solarized-light.css","d49f425deda9e4888a1a269f85aa01c6"],["/css/highlight/srcery.css","903a4facaa719db16605150768ea1fb8"],["/css/highlight/sunburst.css","f86a8f7e89bc1eeceec0159848d5786f"],["/css/highlight/tomorrow-night-blue.css","be3c13fa9a2b0f9cd84200ad629ebd3b"],["/css/highlight/tomorrow-night-bright.css","54eab9e9fdc42049496b2f14cf3b10e4"],["/css/highlight/tomorrow-night-eighties.css","48acea80a76a7d6a113e012a42ce5e1a"],["/css/highlight/tomorrow-night.css","2746d0bd54fc57ca04ac88563b12ac59"],["/css/highlight/tomorrow.css","041cb55323cc47f735d465cd46c44a9b"],["/css/highlight/vs.css","3750fec0e23d1944c9d51fc663852be1"],["/css/highlight/vs2015.css","1697127550679841c5b21977c0fcbb04"],["/css/highlight/xcode.css","ad5decbbe8140013e322ad1cb9d7f5dd"],["/css/highlight/xt256.css","2d43bd454e84bc806bdca21113d5a79c"],["/css/highlight/zenburn.css","b0b3d80f18856c05fed6bba74ccb01be"],["/css/style/dark.css","6368b123550d2901be1739567b6233aa"],["/css/style/main.css","33add098de982d4d45454d0f066afd6b"],["/css/style/note.css","0d87d1c8022611c1d7e8daebfecb0db8"],["/eating/index.html","4373dc7f3f33a8d356357d55630622fa"],["/index.html","5cdc9d9b9cea36b83e6c50eb69b5e234"],["/js/b2t.js","cd0f8ec03fec335251ac9c0c051f7cbf"],["/js/darkmode.js","96eb9ac7f1c1f415261aa7dd6dc5f024"],["/links/index.html","8700bb7e195e815ff1e96a1a05ed912b"],["/links/link.html","180d31e992ff01d2d2380785436208d5"],["/page/2/index.html","a03a96a8252ac6e278e71a9182e2ca4f"],["/page/3/index.html","220661f4a33af6a37134fdea955fa556"],["/page/4/index.html","6ecbb73a8d13c702317bd9078974e09f"],["/page/5/index.html","0f5a958d966f6caeb039e99067da88b6"],["/posts/10798/index.html","5d71af4898d79f022f8883e474a33a07"],["/posts/11961/index.html","54f6a554d7f9d20ac9cd4529ba648814"],["/posts/13009/index.html","bc0ed9100c7514d270527d267faba0ec"],["/posts/1478/index.html","129c86d4d76c92ad2b41b70f95752a69"],["/posts/16931/index.html","5f75125f7c36c3b7614fa77ed34e8cee"],["/posts/20708/index.html","d1c2ad3604cc771863ec8fd0222818b2"],["/posts/22338/index.html","e33411e53a3d1d44ec131ed6bed8b392"],["/posts/22378/index.html","ef5a8f03258ca88c366a6290175da822"],["/posts/24380/index.html","6dc5b9b93873a64cc9970189d92ff481"],["/posts/26484/index.html","303a1c7b7f0f88b92ec32c3dac13f75a"],["/posts/29606/index.html","fd5c9b01442d6b079343dde3c6315811"],["/posts/32449/index.html","9b51af7e692d9da88b1966fc8f7c8e05"],["/posts/3315/index.html","8105b3ab2c04b9a9fe44af0148390103"],["/posts/33197/index.html","bfc144b39bba17ee28267ba01d57cd4a"],["/posts/33306/index.html","b59f84a050e6ca220f4717addab2dbb5"],["/posts/36128/index.html","5f34107c09637bcbf2d5ad41e3228675"],["/posts/37557/index.html","e320dcc01743e5d0cb0d342c26697d40"],["/posts/37773/index.html","ba9c5555baec9e8d5d35e61af5210252"],["/posts/38589/index.html","a8fd9ed7e9dd1da2fff0e5c3a3a885ef"],["/posts/39661/index.html","56feaa0cb2574ed6a50b99a501b365fe"],["/posts/39842/index.html","d7ceeffd79a316cbeb661aa61f20b7ab"],["/posts/39942/index.html","bfc45aa104d3030457ab07acce069745"],["/posts/44194/index.html","b139f5cd9c7755f42877f4409834cfeb"],["/posts/44804/index.html","e43e35b0c510a5da5705cb4e29dd7d7d"],["/posts/4588/index.html","894f3b911883e8edfc81642a091bb5da"],["/posts/48089/index.html","da6aa5a4d3a470ba294e875207b102db"],["/posts/51892/index.html","11b05c8b0eb1ab674078a348d1395e4b"],["/posts/53289/index.html","e70b1a2d7ee48987efdc8474a88b6df3"],["/posts/54711/index.html","60471676db8883d82ba95bf41a07e5e4"],["/posts/55302/index.html","6306faa03095724ca4006ba42af204d2"],["/posts/56653/index.html","9f2d7764188a5bee78c0f746f0153790"],["/posts/57345/index.html","10af2e808c4cd168b76c664faecb2222"],["/posts/60197/index.html","145f6a9b1d554e792e4ff10fde68dfb4"],["/posts/60788/index.html","5c531cbfe0a3d4b59463df262edc3f30"],["/posts/63676/index.html","9a956c27acd39d8deea1c5305573a6be"],["/posts/64257/index.html","0629ee94fc7a5c8434617faa3b008bdc"],["/posts/64865/index.html","90003d0a46be90dfae15ed2e772a3ee1"],["/posts/65311/index.html","b52158b757020aaa7fd9a1d3d9f1d490"],["/posts/7324/index.html","64cc133b9dda13b2057e46ce6595b280"],["/posts/8688/index.html","f60f70a1866ecb192c40ae25dc6259cc"],["/posts/9687/index.html","fe0acff6073243268fca065781f284c3"],["/sw-register.js","c51b1dac54459918b1de72446db72013"],["/tags/index.html","ef16aee5604de17810d66e07880b9fe2"],["/tags/书单/index.html","187bd907c0bb34bd812cf699d359967c"],["/tags/公告/index.html","e767de6f74c66d5621b93852462cf696"],["/tags/悦读/index.html","08f5f242c489255e8de621c51dba3adc"],["/tags/笔记/index.html","ba6db6cd98b37aab504abe6d4d4311f8"]];
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
