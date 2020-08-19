/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","46fb4f6312db21fb25e5dfb12c42b0d8"],["/about/index.html","bcfdd9ba68ba784f8bd084e94453c0fe"],["/archives/2019/12/index.html","5a74b840e3421b090512ecb3e4eefcf9"],["/archives/2019/index.html","db3703d11b963d9b75e80a4f3a5e9ec2"],["/archives/2020/01/index.html","bc4f22c2ddcdd8e09b181327eb82b05e"],["/archives/2020/02/index.html","5400476812b92dc21c2cbe2e66606caa"],["/archives/2020/04/index.html","0c435f346db80d7d90e3861065cc2bbe"],["/archives/2020/05/index.html","df02b9b6752fe8f2b92b392b76eeca23"],["/archives/2020/05/page/2/index.html","91cac76f989cc83c4aaf3a73194afe2a"],["/archives/2020/06/index.html","f09c6f612e8664104d58947436f93893"],["/archives/2020/07/index.html","b8895ad70bc384342d6ce4f1ed2277bd"],["/archives/2020/08/index.html","bc24bd164a702723a24351321322a0e1"],["/archives/2020/index.html","5770a7e48137dcdfccf4135d7656033a"],["/archives/2020/page/2/index.html","2c8c78e2c30f2bc00742c45e80d40112"],["/archives/2020/page/3/index.html","4a9032eadf7823b0af7a40f1cbd525c7"],["/archives/2020/page/4/index.html","ad30512eb3b39ee5785322e01088ac76"],["/archives/2020/page/5/index.html","d89e6fafb4602f4be95d702a30471c9e"],["/archives/index.html","5fcc4839989e270941ac3c7965689c0f"],["/archives/page/2/index.html","aed9edf16963e6c0b1bae2d673f540fb"],["/archives/page/3/index.html","1eb80f987481ff2c5d4b9aa51506bd62"],["/archives/page/4/index.html","5ad37071500de8cdb0e60972a4cbd290"],["/archives/page/5/index.html","24f15ded2310d8416d8d4a0348ad3b1c"],["/categories/index.html","f1f8ef880b21f260d715091726523888"],["/categories/分享/index.html","f80ae8365c8776dea1b973c98931b57e"],["/categories/技术/index.html","9b91ce252074f8a19dcfc572869342b3"],["/categories/技术/page/2/index.html","38ace5f24f97a2f31cf99008e7b41f00"],["/categories/技术/page/3/index.html","f65e2a749fd441bd23624bc5ea828db5"],["/categories/技术/资源/index.html","dca70d63c317b13ac1d9bf996c42d5d7"],["/categories/技术/转载/index.html","7342fda41ef5c86fe664b26548d454ad"],["/categories/杂谈/index.html","48c52d7c5aabc2e8b9615d2b5e3e85df"],["/categories/生活/index.html","0203c87752fcd7e2184cd5159bf181fe"],["/categories/生活/技术/index.html","57e04bfb7ada1af8427c4532f89e0e74"],["/categories/生活/技术/转载/index.html","0752ee7af8c99a3bc17f591bbb0687cd"],["/categories/生活/随想/index.html","545aeab89e512a049663f8bb3c885119"],["/categories/资源/index.html","0cd1af8cb9b0f9a1f3279f025b3caccf"],["/categories/资源/转载/index.html","c7c2aefb142e7501e0e6e7ca26652b7a"],["/categories/转载/index.html","ffb2e9ce213b64b8214cc4dc4def3c7b"],["/categories/随想/index.html","7633e9ead115b17e836cd33d071953b5"],["/css/highlight/a11y-dark.css","ccd9d7c707439a3838000d14db8f0285"],["/css/highlight/a11y-light.css","eb1ee856e8f594a037f726ec1c066451"],["/css/highlight/agate.css","d0345957e38bcd3b4997748d7c79cdb2"],["/css/highlight/an-old-hope.css","4944dac338a2a55bc5ac2f7ba4c87043"],["/css/highlight/androidstudio.css","6977b5752de588abed5def7245d6b844"],["/css/highlight/arduino-light.css","241493f1fadd4357b7375bffe16d5cf2"],["/css/highlight/arta.css","ae64dc084155d4e349534cc5b26c641a"],["/css/highlight/ascetic.css","86193d01a31e7a6c84c999924bb1aefe"],["/css/highlight/atelier-cave-dark.css","99a5d288911d5e5dd2de29cfd1155a5b"],["/css/highlight/atelier-cave-light.css","f39058194b7b3fb02ac29a14d5ac8e38"],["/css/highlight/atelier-dune-dark.css","b7b062f0133b766a2b7f6fd3f779d4b5"],["/css/highlight/atelier-dune-light.css","54a9ece990b51ffe7ed57a90ddd0f603"],["/css/highlight/atelier-estuary-dark.css","87b40d9e87b4e6133f1fad97f7cdd0cf"],["/css/highlight/atelier-estuary-light.css","0aa65c2d16ae0e784747693614e52397"],["/css/highlight/atelier-forest-dark.css","20db0b3aafd9b8cc5c8fb36913fb3020"],["/css/highlight/atelier-forest-light.css","bf97a878688e8088f0c4a1b67958f82b"],["/css/highlight/atelier-heath-dark.css","6e316e04d35882bf6047aeccc4dd63dc"],["/css/highlight/atelier-heath-light.css","93009c2618418ce4314c07f24c0c177a"],["/css/highlight/atelier-lakeside-dark.css","9977ad26f4374c56fbd22f8563766a14"],["/css/highlight/atelier-lakeside-light.css","2c432ce878bae79f0db88d6706350bbc"],["/css/highlight/atelier-plateau-dark.css","3e12a42fc1a4a8525a31f90d5e43c871"],["/css/highlight/atelier-plateau-light.css","51bb22c07ad55b239e11dd1762e619dd"],["/css/highlight/atelier-savanna-dark.css","c0c4a2f0036a56d9e607f8902db61cd6"],["/css/highlight/atelier-savanna-light.css","57e74f2b0093061e6dd5084464ec69ad"],["/css/highlight/atelier-seaside-dark.css","19cf750796258cf8c5de82874b2c150a"],["/css/highlight/atelier-seaside-light.css","607280f572116f4eadaf0a5591372d3f"],["/css/highlight/atelier-sulphurpool-dark.css","7f8478ce6266cac1d98878bcb7c0cda9"],["/css/highlight/atelier-sulphurpool-light.css","0aa0ab5fd3702a37e31314f6456d93c2"],["/css/highlight/atom-one-dark-reasonable.css","721de4ecc0e156486df2a33ed330b57c"],["/css/highlight/atom-one-dark.css","fc82401333f80354cfb176558a255107"],["/css/highlight/atom-one-light.css","75d24e180e64f02bee0d3b990747985e"],["/css/highlight/brown-paper.css","3311d9de1cbbc8b45aba30a9610b6106"],["/css/highlight/codepen-embed.css","7f3d13d21e3658f499051d88fc5f929c"],["/css/highlight/color-brewer.css","d4fda7982d5152715458bb767c9c0a67"],["/css/highlight/darcula.css","29b29fedb914d4bc58268db563147290"],["/css/highlight/dark.css","359b2f7217d5fa212d8844d688160b63"],["/css/highlight/default.css","89f4b0cd0939c5624225d1760b6db5e9"],["/css/highlight/docco.css","7a1f320efdc40b0a8ed5fd9ee7ff887b"],["/css/highlight/dracula.css","164dec97bba310a4d0c1231672106744"],["/css/highlight/far.css","d7f6ccd3efebc9b0176f4b2e63191da1"],["/css/highlight/foundation.css","f45febdace9bf291eb772e504eee0332"],["/css/highlight/github-gist.css","8a037737ba51c943051a72cabb878ec3"],["/css/highlight/github.css","220599961e7f15dd46f7992d95241c5b"],["/css/highlight/gml.css","d88771d3502207933062983a121fd31d"],["/css/highlight/googlecode.css","d7fd68a86db0e0bc54d274fe34898056"],["/css/highlight/gradient-dark.css","8e16f0b5085c751b1199cdcd207660f6"],["/css/highlight/grayscale.css","e639cfcdfb1fd127b99a541af9c8aead"],["/css/highlight/gruvbox-dark.css","fc4994be7910b4d4b1fec2e563bbcd9b"],["/css/highlight/gruvbox-light.css","451b58f2172576f9c80593101c0d55df"],["/css/highlight/hopscotch.css","2eff9bf2e827c1a29736ccf883157a69"],["/css/highlight/hybrid.css","f7e065bd697327ba82730ef51914f8f4"],["/css/highlight/idea.css","030635957625fef05d9cf379f375f016"],["/css/highlight/ir-black.css","075e0d3d959672c88d64aae0f55f538c"],["/css/highlight/isbl-editor-dark.css","45b88ca4a1bf22636d3ff55385634dc4"],["/css/highlight/isbl-editor-light.css","7418ae4adfb37abb066649902a3f0663"],["/css/highlight/kimbie.dark.css","b6ee97415efe27a17d00378dd0e47666"],["/css/highlight/kimbie.light.css","3061824c21e85032b93bcbf7e6581bc3"],["/css/highlight/lightfair.css","f2ab8065097ca3d7b7d7993d4925b745"],["/css/highlight/lioshi.css","cc70a129ba2b76328a009b1c1c16f82a"],["/css/highlight/magula.css","09d544635db4eb9417e00fed807dac6c"],["/css/highlight/mono-blue.css","f321c6dd868d4880915bb8d0bf0be93c"],["/css/highlight/monokai-sublime.css","6cca4d07da2d17981398a98f0f56fb79"],["/css/highlight/monokai.css","9b7d6a9b6d1d60e4f89163dc61768347"],["/css/highlight/night-owl.css","3c38b81cee5a25448a5306be74879d1f"],["/css/highlight/nnfx-dark.css","c9b8fcd1084e7a63e0c957c78f08271c"],["/css/highlight/nnfx.css","e718915400d323c6323e4a23d842d824"],["/css/highlight/nord.css","707e51ed8f952355c5b85c4625eecc36"],["/css/highlight/obsidian.css","b222bae96efa1f3ff11ff82c7f554b13"],["/css/highlight/ocean.css","8e4e7413c605eceb89c88c598dd3a062"],["/css/highlight/paraiso-dark.css","3b754c5db1ef210f3e3dc33e12858941"],["/css/highlight/paraiso-light.css","449b3140b9d060c6c74951e7963fd7c4"],["/css/highlight/pojoaque.css","8f7e080dc054ced226f793ddcf751d38"],["/css/highlight/purebasic.css","89bb95cd1197285159228b1e12f86394"],["/css/highlight/qtcreator_dark.css","7fe6367df20ac83ebd9c98f0ef21f9db"],["/css/highlight/qtcreator_light.css","7c847ad45f0393996c75eca2e0094649"],["/css/highlight/railscasts.css","a1f4f06cd967bc1cf72d497bcd449d91"],["/css/highlight/rainbow.css","126c60aeaf7fa2b353b557dbbd10cfcd"],["/css/highlight/routeros.css","f62794019833836a5cbf9d34f5e4c96a"],["/css/highlight/school-book.css","fded0a7a91d7084807b11055f2a47df7"],["/css/highlight/shades-of-purple.css","88a01d8bd94339d9d756a9ed2b27c54a"],["/css/highlight/solarized-dark.css","835aac015bc4d9b31bfd63d525277e1a"],["/css/highlight/solarized-light.css","54ff6923c5e6119bffd325448e55d63a"],["/css/highlight/srcery.css","7579ca6ff9f881248f7d114c76daac40"],["/css/highlight/sunburst.css","b2a3b1347548536cc0c56388df384fe4"],["/css/highlight/tomorrow-night-blue.css","89a8cd394e1ea6cf54348646a6a7fdb5"],["/css/highlight/tomorrow-night-bright.css","38cd76e4250a83318f77437a581a6459"],["/css/highlight/tomorrow-night-eighties.css","35204cfe409f515c54c40e156e15e729"],["/css/highlight/tomorrow-night.css","17cd22ad25d3c182b0dd3f2e5be50fae"],["/css/highlight/tomorrow.css","e9b0c4969ea45c60b104e4f3841d6767"],["/css/highlight/vs.css","2c92cca8a3b91fc02ff2697c873ec12b"],["/css/highlight/vs2015.css","3c1072e53d8d582760185d6337a515cc"],["/css/highlight/xcode.css","5461730cfc73a9d360ce8a209b1bbb24"],["/css/highlight/xt256.css","cc6a5d6c3ac4cef4ae8aa939f4901481"],["/css/highlight/zenburn.css","bfceaadfb16095e05cd9d6cdc4026658"],["/css/style/dark.css","41218f77523c2bfaa86ce90d10e82421"],["/css/style/main.css","48c8f255c969a71f241546ca447e19cb"],["/css/style/note.css","135d25ff7274ad19de7e4713fb7a3cd6"],["/eating/index.html","20ef49e5955a31a0ca0c56e2f944cab1"],["/index.html","2d84322a0db2b13bfd70877a31c57216"],["/js/b2t.js","cd0f8ec03fec335251ac9c0c051f7cbf"],["/js/darkmode.js","96eb9ac7f1c1f415261aa7dd6dc5f024"],["/links/index.html","26088509a81fc675202880d297f20030"],["/links/link.html","fd25251416435aace06dadcb8196624d"],["/page/2/index.html","ded3102ee1b4b80330737c9b9458eca3"],["/page/3/index.html","bec2e49d1515edc79ee4f63a476814d8"],["/page/4/index.html","1e0b8fba85541a9e359bc3a119ea6abd"],["/page/5/index.html","2254b0ca0e350e824b21a6677ba1a612"],["/posts/10798/index.html","ae3241887dad4bf99e8dc2d0df8f8f74"],["/posts/11149/index.html","5327656ff070f095f1bea2635270e4ed"],["/posts/11961/index.html","0e1412cc5536210e88d535ea4ce527f8"],["/posts/13009/index.html","b5f14ab488843cc295a66387adc9c76e"],["/posts/1478/index.html","b87d3465a338fc4f52c8fed22a86195a"],["/posts/16931/index.html","3f5857ca83cf73d709a1aafface5e332"],["/posts/20708/index.html","c6d224b814926c93f65931dcbe16b5fe"],["/posts/22338/index.html","980789c4ee6425874aa573ce89cb0d59"],["/posts/22378/index.html","7c2d5948b9e310e6a627fda0bc4ab116"],["/posts/24380/index.html","78e159ef26a08f169fd1f15b3d7c9cd6"],["/posts/26484/index.html","24431f9f3272f56c6ba61142376fbc20"],["/posts/29606/index.html","b7df04ae7e8a46f8e7f415713c2ef698"],["/posts/32449/index.html","9ff3342205a62d3889800f42dbb2e04e"],["/posts/3315/index.html","ba29030ed8d51314cd22073b19716a84"],["/posts/33197/index.html","96c79b8743f050bb59967651c8fee847"],["/posts/33306/index.html","8f94842a1da0e2aec7c9958632d1ef2e"],["/posts/36128/index.html","0ea2c023ffd10ba657d1a81b9590ce4f"],["/posts/37557/index.html","228f5ba1693387f7664a41b10f342482"],["/posts/37773/index.html","23e50331585145976c25ed541e582b98"],["/posts/38589/index.html","ef35dbe72f91c24d73e39895016e9f3f"],["/posts/39661/index.html","160f766f31ba62a8e45a9997c800034e"],["/posts/39842/index.html","f01d4e5b73c9f31225519d0f23a49b36"],["/posts/39942/index.html","c68008c8d62bea6a54677f4002f22008"],["/posts/44194/index.html","6448e96a86ca4509dfd7dfe6cdbe7b5c"],["/posts/44804/index.html","fb1bcd74145fd4dd25889397a2a493a9"],["/posts/4588/index.html","97406ea867b68eb705653220b0703849"],["/posts/48089/index.html","987bb56aba54320b7ccf8c3e0f242523"],["/posts/51892/index.html","cc156e632d84a9479f06b79485265903"],["/posts/53289/index.html","ca58c9056bc6463e07f9b25c8c0ef367"],["/posts/54711/index.html","5f679089f17f340ae4a21982bf4ae1c1"],["/posts/55302/index.html","89c2aaf30bd5a1fb5879b2f4f619f394"],["/posts/56653/index.html","e881c6b5cb03691e8ffdbca3e81399b3"],["/posts/57345/index.html","7c84d02504fa3607d99e515381f91543"],["/posts/60197/index.html","8d93899d35ba01666dbf8883d7e309f5"],["/posts/60788/index.html","c82790a60aee9a2297a0983a844eaa66"],["/posts/63676/index.html","f54128cbefc198acf3ee380e3d66b6c7"],["/posts/64257/index.html","0dd4f62e176fe01a4e5b7ae43ddc861f"],["/posts/64865/index.html","e42cf8e3695cbd448c664c31230a6f54"],["/posts/65311/index.html","09cf5de022dad0da7459e613918ae23f"],["/posts/7324/index.html","9c169bf584b8eedf01f9ec0fb259c45c"],["/posts/8688/index.html","c0ec227a7785979d74d0da926c9fa3b9"],["/posts/9687/index.html","f39c176984845945c7f31cbec3ac4904"],["/random/index.html","07f624cca2fc9218e6b3b5a62e4dd0e5"],["/sw-register.js","4045e48549c8431e37e5dff088d31d62"],["/tags/index.html","53d0b17ca5b2eab812a6ce1001450bd8"],["/tags/书单/index.html","6de58d11ad9f8a3e25729bd434ee46b4"],["/tags/公告/index.html","c104ca444ac5903e2b43cca5d1806a60"],["/tags/悦读/index.html","4b70696492a394c8730784af5ae62830"],["/tags/笔记/index.html","d2e2a2f8a27c8993fe226e43d808a579"],["/tags/语录/index.html","b04b80d2601f5a5eb3f3584c0c0ac5c3"]];
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
