/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","787783ffa00aad2772d28bfe4ce210e5"],["/about/index.html","213a9f0146b9e474974db03bc17dccd1"],["/archives/2019/12/index.html","481489794c467870aacd0ab931ad72ef"],["/archives/2019/index.html","83341af4e618e146469795d94c9c9cea"],["/archives/2020/01/index.html","1883cb55b5b7cc8e54d03e6479177598"],["/archives/2020/02/index.html","40ad543ae68a179a447a3fe501aa3e73"],["/archives/2020/04/index.html","d86d9c4b992b73e998f6d19b2794d6dc"],["/archives/2020/05/index.html","49eaa3a9746c4756bafd5e008604025b"],["/archives/2020/05/page/2/index.html","e01eb5efde82a64549d9997b5bc81c57"],["/archives/2020/06/index.html","05b12d9c1218445a7a5d548ba8ce9d1e"],["/archives/2020/07/index.html","bc1edd4b80598c6d0cd039592c4206c5"],["/archives/2020/08/index.html","3069e1531512bf496e301df375991c86"],["/archives/2020/index.html","07c463fcdd31812ec382e77c36ec3e17"],["/archives/2020/page/2/index.html","58bf0ff48fe677b55d7efe7cadb46846"],["/archives/2020/page/3/index.html","44ed5719165e085f4485bb1d85a370b7"],["/archives/2020/page/4/index.html","9c5ce4c63c85c967179ee13ae6f95c6a"],["/archives/2020/page/5/index.html","ae8bdce518ad4c888fc35bc37d0d69f9"],["/archives/index.html","ad69dd93f7a6e4c7ba3222294be50933"],["/archives/page/2/index.html","cf681522bcdfea69c72b989702ab4804"],["/archives/page/3/index.html","3b01c0c5739928e762c27c79dbfce169"],["/archives/page/4/index.html","a0e78f4746797488f330dea4adfa1eac"],["/archives/page/5/index.html","9dd05ad50582e518cac6df1c45230802"],["/categories/index.html","908cc78c4c9d1dad875c6e947b958600"],["/categories/分享/index.html","0bf237a7a9b2c62c39a8f61696e4d1a7"],["/categories/技术/index.html","bada5689ad7cc027f23b983882904cbd"],["/categories/技术/page/2/index.html","47e74be30dc3363524b9018b1973a2f3"],["/categories/技术/page/3/index.html","5f5d376261c097e692ff3f136c4aedc4"],["/categories/技术/资源/index.html","e7390e14623985dccc2e53cb83c5cff9"],["/categories/技术/转载/index.html","6dc89c64d0b37527771b3d87adbf23ca"],["/categories/杂谈/index.html","ea9274b0470dfa28c79e14c7b6c42edb"],["/categories/生活/index.html","7a58bd24d4084d5b7b0f3d4f1944702c"],["/categories/生活/技术/index.html","72407baf0f51f98090589228f5b38430"],["/categories/生活/技术/转载/index.html","befbba3cf8e8792872920a1ac285de0f"],["/categories/生活/随想/index.html","fba051eb8852662f75809c7d80b8064b"],["/categories/资源/index.html","105b531aa48f6815e90ed248bf13cbcf"],["/categories/资源/转载/index.html","29125dcefba6fcb69808cd61b543a4b1"],["/categories/转载/index.html","4794bdab5fd9c59dbcaf6b91a0d9a5a4"],["/categories/随想/index.html","2e5ee0797ac7ed49baa0160df4b65099"],["/css/highlight/a11y-dark.css","3d3bd3dedfb9dd0f23a99d7128e0cc08"],["/css/highlight/a11y-light.css","7062bfdbeaebbf337dd49e2c4ec99462"],["/css/highlight/agate.css","0766827db7a2c331014897bb01b87f90"],["/css/highlight/an-old-hope.css","cf0bd0c73e3571be9584fd4fce32ae0a"],["/css/highlight/androidstudio.css","ba974989397b3b9ea5856d7b795c3d3f"],["/css/highlight/arduino-light.css","cf489cdff72c1b70d68887a8992431c1"],["/css/highlight/arta.css","d85f7c7b328cded7f413f8f0140573c1"],["/css/highlight/ascetic.css","c9a0d7bc4800752507febf887cac1a33"],["/css/highlight/atelier-cave-dark.css","a13a6695a0c64defa54a4d988184d17a"],["/css/highlight/atelier-cave-light.css","a533eab9327839c0bda2941e68d954a1"],["/css/highlight/atelier-dune-dark.css","79f7e00bb7799edb38640b3ca148cccd"],["/css/highlight/atelier-dune-light.css","23b728c31e702fb2585e4c32ff962348"],["/css/highlight/atelier-estuary-dark.css","39ce3b1d0dfaac01ed0d32cf94e8de2f"],["/css/highlight/atelier-estuary-light.css","b01a7b57e152e07d02419ce7d0601e6b"],["/css/highlight/atelier-forest-dark.css","909e70da980e257a305abefb1b62089b"],["/css/highlight/atelier-forest-light.css","721913362beb830b6f9cbc4bbb870563"],["/css/highlight/atelier-heath-dark.css","6a104224db744a01044e3df67fc43d80"],["/css/highlight/atelier-heath-light.css","ed842ba4e9555718a8183fd7f1257db9"],["/css/highlight/atelier-lakeside-dark.css","bd67952b94ad8bd297954a4dfb4e3f50"],["/css/highlight/atelier-lakeside-light.css","4a5f4371ec9bb304136f03731925ecfd"],["/css/highlight/atelier-plateau-dark.css","39117ffcbfdbed986acf04a92e96f670"],["/css/highlight/atelier-plateau-light.css","3a100931978b2167f68316ce430c2eeb"],["/css/highlight/atelier-savanna-dark.css","784444186dd72a1229c2d6cd5701a657"],["/css/highlight/atelier-savanna-light.css","b8b08a430d46ff328b5d4d508a7536de"],["/css/highlight/atelier-seaside-dark.css","82da9fbbb87954e21dfda12a6148e197"],["/css/highlight/atelier-seaside-light.css","82dee3cbef696cbb9b66197c9d03356b"],["/css/highlight/atelier-sulphurpool-dark.css","5a38f3b53022c2adf707381a230abfa5"],["/css/highlight/atelier-sulphurpool-light.css","ff6ac15b26a1fd44163b578d2aa19855"],["/css/highlight/atom-one-dark-reasonable.css","24dd4cecb19e243e9b213370c636943c"],["/css/highlight/atom-one-dark.css","e7b10a3780c2771a19456286f8faec5a"],["/css/highlight/atom-one-light.css","011ace8717026b580735e708944ddb52"],["/css/highlight/brown-paper.css","be97641f87494a0f948752c0ac1dce06"],["/css/highlight/codepen-embed.css","2d1819f2004f504c778badfee2e349cc"],["/css/highlight/color-brewer.css","9a338abc13baf137aac5ec4c607518de"],["/css/highlight/darcula.css","97e9a2fb17c44c1daea0b17555b281de"],["/css/highlight/dark.css","7df4935fa938802f866c44c7c609fd8e"],["/css/highlight/default.css","5b39da626cb535ba8f4ab2f994bfe62e"],["/css/highlight/docco.css","147cce56297c77fdedb17245580d7b8c"],["/css/highlight/dracula.css","9330536f3953acd5f140f47336229f54"],["/css/highlight/far.css","808d9393e849617377fc727d2b3bb0fc"],["/css/highlight/foundation.css","353f4c0099f296295affa010f3f088a2"],["/css/highlight/github-gist.css","5edc6da6e67ba868d5131b0d122f5ccd"],["/css/highlight/github.css","4b3fd0ceb75aeef7b177e3e900853fe4"],["/css/highlight/gml.css","4f759f44e68574c1a3b90fc5b29348e1"],["/css/highlight/googlecode.css","fe0b8139a278984a43604a300d7a67f9"],["/css/highlight/gradient-dark.css","5d2c9b61c10c0cdceb5a7a6cc8e39d41"],["/css/highlight/grayscale.css","f27060b4608085996a7ad4113e2f1a01"],["/css/highlight/gruvbox-dark.css","b366e2895bbed0701ed0a5c328c735ab"],["/css/highlight/gruvbox-light.css","dffed4fe2099e2e2804958aa9c854f78"],["/css/highlight/hopscotch.css","7bee2f06fe0d637319ad604d5bba4361"],["/css/highlight/hybrid.css","c816822269c8eaec895463aa74dfd5cd"],["/css/highlight/idea.css","f7f53ae4e29e33a715a88daef8621085"],["/css/highlight/ir-black.css","04fe3f1d8947b78942a7cab515cc7443"],["/css/highlight/isbl-editor-dark.css","f0f510eabffd4072a23a02745f03cdb5"],["/css/highlight/isbl-editor-light.css","3bed577f9e2aafaba70d2e92ee93e213"],["/css/highlight/kimbie.dark.css","51263d239ea47f6e7720d4c711ff5697"],["/css/highlight/kimbie.light.css","89d8d48cd0524316e51a6539c4fa4d31"],["/css/highlight/lightfair.css","cb1e1a6ab643652ca75e14086d38f9ce"],["/css/highlight/lioshi.css","c24ee19db1286d07f5523ef5e9820eb5"],["/css/highlight/magula.css","81d694cec5b7c4df9f4e0e6e7d6d8470"],["/css/highlight/mono-blue.css","852cfc603b1456f8ae077f89dfef3f3d"],["/css/highlight/monokai-sublime.css","509ad6f34908928922ad05f10a0240e5"],["/css/highlight/monokai.css","5b9c89ceef845f13b25b0745642b9413"],["/css/highlight/night-owl.css","a452a73aeb45b4e0008a23787502ba52"],["/css/highlight/nnfx-dark.css","6b8194c1dfa7739fbc7951fe5b4a5641"],["/css/highlight/nnfx.css","8705ce29cf2b04aacd20a254249d32a7"],["/css/highlight/nord.css","6648dfce759b3904c12488ede95efe44"],["/css/highlight/obsidian.css","575e02591d44ea41d7cc502092b2297b"],["/css/highlight/ocean.css","cfa27af84cbdb2098c43059dffd40ff1"],["/css/highlight/paraiso-dark.css","526095d2a415fb03f83ad70401b914bb"],["/css/highlight/paraiso-light.css","466fca4fca1341ae1f66cad3443b9905"],["/css/highlight/pojoaque.css","00c7fd5c9660aa946937bbb7b6ad3a99"],["/css/highlight/purebasic.css","64f35cbc5a7fb03709c0381a2bc383fa"],["/css/highlight/qtcreator_dark.css","8d914ac4faa724d958b2048f796fcab0"],["/css/highlight/qtcreator_light.css","d1ef19b8d3602b41dcd513001eaeb7bf"],["/css/highlight/railscasts.css","7287e77cc8671a0766bc69f8886bcc57"],["/css/highlight/rainbow.css","02bc5adccd3121533d64ea6eccd5a95e"],["/css/highlight/routeros.css","6560d9ebbc4f9402a36104ed1713864c"],["/css/highlight/school-book.css","7875ec4059f8d05a7641a6c06c53e3af"],["/css/highlight/shades-of-purple.css","ac551828220b7d7dd98b8616f3775e0c"],["/css/highlight/solarized-dark.css","fea08ac4c07e3c866c7f1240193babbe"],["/css/highlight/solarized-light.css","1a2d3c03acffdc16e8a098c8bb1261a7"],["/css/highlight/srcery.css","f3f41d390f5c12bd3582d5e433062c59"],["/css/highlight/sunburst.css","3a56525d9d2c98dc1b536f7c74e4c9c4"],["/css/highlight/tomorrow-night-blue.css","4dd783c5f8fca3dfa2de507dcfd5036f"],["/css/highlight/tomorrow-night-bright.css","00c40087209d67aa530eb39a9557bed1"],["/css/highlight/tomorrow-night-eighties.css","221249123bd1c9d527b6b850163ffff7"],["/css/highlight/tomorrow-night.css","33b7ec0c2b9ea2466ab24a7c13364796"],["/css/highlight/tomorrow.css","41e2564880be393cfd98009a843b5f33"],["/css/highlight/vs.css","033162c6005e48da9a703b6da7ce7f4d"],["/css/highlight/vs2015.css","af826c6b58ff6fc2e4d59657a5d4b0b8"],["/css/highlight/xcode.css","19c8277e661551b7c49d05386b508d1d"],["/css/highlight/xt256.css","15485b2acde0643395378bffa7beaf55"],["/css/highlight/zenburn.css","54ece0de80469184f4aa960c72d0bc9a"],["/css/style/dark.css","2e5dedc9acb5d02a70f41df8e58e3034"],["/css/style/main.css","e19672c1143031e42629880b15ab584f"],["/css/style/note.css","95d4f63ff31418b94825d71927a1052d"],["/eating/index.html","12e0237c253268891de08af379f18241"],["/index.html","7a8a140552796b3fcf00fd787793984c"],["/js/b2t.js","cd0f8ec03fec335251ac9c0c051f7cbf"],["/js/darkmode.js","96eb9ac7f1c1f415261aa7dd6dc5f024"],["/js/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/links/index.html","f789e8455d908fbbeebd4c9b8c3e7b0a"],["/links/link.html","1a14d408ba443f970dde37fc24b34577"],["/page/2/index.html","9601e674f50325284e684ed31abe60dc"],["/page/3/index.html","c0324bd5040680c50b6f89a07208827f"],["/page/4/index.html","5511d6b9ed83f7db40439725227b9607"],["/page/5/index.html","d5c436cabd7ea1df681d7b07af5f7125"],["/posts/10798/index.html","e8f5bca46943cfff645d37136ce5e29e"],["/posts/11149/index.html","89d28620b8ac61c715e4f502fe16e266"],["/posts/11961/index.html","ef142e6f438b9da86b5dfd293e0648b5"],["/posts/13009/index.html","e2aacb80d819974cee437427e9c5e7ab"],["/posts/1478/index.html","7d7e37c6d0bef7569d65a52f78b476ed"],["/posts/16931/index.html","5b11336f28fee389fa1322a0895a944e"],["/posts/20708/index.html","3566ac38c30dcdc2042ab4899ed50756"],["/posts/22338/index.html","e9314d9abc6d9d5e16d536117ac60027"],["/posts/22378/index.html","81e0993322e73ab2ae8113c1546b2652"],["/posts/24380/index.html","a8dc89864dbcfcb1b2e3cf731141c947"],["/posts/26484/index.html","bc31be240e1e4d4621f0b02ef0838d36"],["/posts/29606/index.html","c3dad3cf90ead257dc831040008f809f"],["/posts/32449/index.html","b5022acf6ad3d5433619c14cba33b2ba"],["/posts/3315/index.html","82d1a9f8558dadc6ae36076109f85177"],["/posts/33197/index.html","0520ef5fcb2e5ec687d82ca763182a4e"],["/posts/33306/index.html","305feebd7f736e96c05a3c8c265b3ec7"],["/posts/36128/index.html","0b254110cd5e054c97441afd2f5a91a7"],["/posts/37557/index.html","d544c124f5a6114301d00756b76c89f4"],["/posts/37773/index.html","79af26c4e239f66d39c59a7d3eda33e7"],["/posts/38589/index.html","ae4093da2932857c473f654550512bf8"],["/posts/39661/index.html","35386169db975dff6ad0fa8a2fb203f6"],["/posts/39842/index.html","584fb1f863847469e0b87dd553a4a3bc"],["/posts/39942/index.html","db64ce3c4e28d640a9aa49dd9eba3ef5"],["/posts/44194/index.html","7e1785d4ecc086266c04487c4fc4f128"],["/posts/44804/index.html","4aade281b6eaf1b9ed29ea1900c82544"],["/posts/4588/index.html","4a13881e67eff3422e27009d549ff07f"],["/posts/48089/index.html","e9b61d36ac8f20043951b1ad28f1c53b"],["/posts/51892/index.html","b463ad6b2ccbc229bc5f8c44ab54b09d"],["/posts/53289/index.html","e4bc53367cbf6f4742c0030ebd4b0bcf"],["/posts/54711/index.html","3a41c838a9c0f6e95302d082425d60eb"],["/posts/55302/index.html","84cf4aff4250ae4056d0b7d7e4e60a85"],["/posts/56653/index.html","a032bc890e6234bdb0789948ee9c82a1"],["/posts/57345/index.html","353bddcf2cf9c8e751a549d0eb0a9fc3"],["/posts/60197/index.html","8e2431fc8304b45b80ac76a84040331a"],["/posts/60788/index.html","11a944b764a28a32bcea7baf266fee05"],["/posts/63676/index.html","7295ca9244d56c0c4a6dd85fcce08f59"],["/posts/64257/index.html","da5bee1ce3d93944154cf0e087a0bfee"],["/posts/64865/index.html","df66c6cb5b02b10de23941b6cdc63499"],["/posts/65311/index.html","da5242e158112191e8166e1a52135c8f"],["/posts/7324/index.html","6b2365b67beb75994e3270eaa4c08726"],["/posts/8688/index.html","add9c3c1eaa75f8e45d98330631b7656"],["/posts/9687/index.html","b0c9a005dafb53803ec624010eca34bd"],["/random/index.html","255eec408136a8a6e144f2b8f41ec265"],["/sw-register.js","d4976d3bca9bd0e29e846fa879b96be7"],["/tags/index.html","5b45b9768e9a72e69252aad9041db53f"],["/tags/书单/index.html","6d0d58db8c922fa2185fa99024ed3676"],["/tags/公告/index.html","4cd25f54512dfeba98146ddd31c79990"],["/tags/悦读/index.html","17089beef16a64e99721d058eecadd70"],["/tags/笔记/index.html","31be788976b1e3280eab7a7ace67d207"],["/tags/语录/index.html","1f8b1acc784919a89b656c3c33ffdfbb"]];
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
