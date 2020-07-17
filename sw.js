/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","a9903bc63b852cdbcbcdfbdbe40b8feb"],["/about/index.html","efd2616f0abccf8ab5cfbaf2c185f942"],["/archives/2019/12/index.html","77b29268d65a3183bf6469284b9f3942"],["/archives/2019/index.html","d74b98092f6e4f87c6444cab19846358"],["/archives/2020/01/index.html","14a8e03718eba0fed19ecc0bc3685780"],["/archives/2020/02/index.html","285d10bef6120b64ff66305ae21655ec"],["/archives/2020/04/index.html","55ae6ac48fddf429442960972fbe7c62"],["/archives/2020/05/index.html","7a52f2b5242502fe7b4ec3763a4f6d00"],["/archives/2020/05/page/2/index.html","4a218266995b2bcf4d154394b9c620fd"],["/archives/2020/06/index.html","c1245284b52cf576545a3eb79d44515a"],["/archives/2020/07/index.html","6589f4cfbf6f6c1f6b7d51463827a7ce"],["/archives/2020/index.html","64dca27be8c3231737d900c8fdd20af0"],["/archives/2020/page/2/index.html","7893078ec3dd2cb0b662a69dd23ebd0d"],["/archives/2020/page/3/index.html","e8b8a69b5b31b858f31343262dbbbdf5"],["/archives/2020/page/4/index.html","26f2a2123d3a98ccb0b32337bfc7f010"],["/archives/index.html","f2d72a6f656e68a47670f92941efdf59"],["/archives/page/2/index.html","2e523e1e3febbf36e4a5aa4a29ccc7c8"],["/archives/page/3/index.html","97ae95ca24a0547cc74c1f250cbe79f6"],["/archives/page/4/index.html","67936bc4613a6dd5d08e0532b9fde851"],["/archives/page/5/index.html","f1836fd8bdf2b5cb890000fa50c07a46"],["/categories/index.html","8463f03b5391323b175fa31e7726f10e"],["/categories/技术/index.html","c9dfebe944335db3cbc5eec40ac46dc5"],["/categories/技术/page/2/index.html","7fda5988b28333329c4f14765b5135de"],["/categories/技术/page/3/index.html","a544aa5005be42589dbb880d005fe3c9"],["/categories/技术/资源/index.html","362395b280c471cd0f1d2f296b54dae1"],["/categories/技术/转载/index.html","ee792ef67d3afa6bd209059af9dcb70d"],["/categories/杂谈/index.html","ee9b41ac3cdc96e2dfd582ff987b35a2"],["/categories/生活/index.html","d9214712afde85ba8f9ddaa6e1ce5322"],["/categories/生活/技术/index.html","06a141069052f05b239869fb2c3fed87"],["/categories/生活/技术/转载/index.html","8a48e2572cc45cd8f36291f6d7b67b20"],["/categories/生活/随想/index.html","e81f20755775e90a812c05ded2f544b5"],["/categories/资源/index.html","5fb6e1edb98fffbe3eddac033bf8d70f"],["/categories/资源/转载/index.html","d163bb9edf378b99fedfe08cda55da0f"],["/categories/转载/index.html","47ed21321182ab436069375d04562596"],["/categories/随想/index.html","4c50fb0d8b808216fd8354686a644e0c"],["/css/highlight/a11y-dark.css","0c0cd8add334f8faa2822d4eaaad102b"],["/css/highlight/a11y-light.css","7715dee5964c8e5c780bb575e97fc050"],["/css/highlight/agate.css","49910d06b56e1a7449b06ae51f8d4a41"],["/css/highlight/an-old-hope.css","46eec6922371900f3ff742eb6063122c"],["/css/highlight/androidstudio.css","2edf09bad49a43138559138cdc6a3342"],["/css/highlight/arduino-light.css","dbffb795dea1331298fc5bca0a21e396"],["/css/highlight/arta.css","0174aa6de48c9469bec4323f205db07e"],["/css/highlight/ascetic.css","3a2335b578de74760a80ca73bd21f2e2"],["/css/highlight/atelier-cave-dark.css","161888fe12bb84244e3468be08ddb304"],["/css/highlight/atelier-cave-light.css","27f0a3955c326ecdb1331fa224ad96f5"],["/css/highlight/atelier-dune-dark.css","039863c32458ddfd19bd32335515c4be"],["/css/highlight/atelier-dune-light.css","cefe408d02041b6f2be75212217c8491"],["/css/highlight/atelier-estuary-dark.css","34bd0ec2111169ac83dd341c9016f422"],["/css/highlight/atelier-estuary-light.css","1bf486b77d14f0ca703ffb0dd0170b61"],["/css/highlight/atelier-forest-dark.css","4b31f8fed3daf1a4533cd494341b3599"],["/css/highlight/atelier-forest-light.css","3821e2fd361c5b75a79139d358992d50"],["/css/highlight/atelier-heath-dark.css","88adc6ba1ac980dbfaaff71b74c8ab66"],["/css/highlight/atelier-heath-light.css","8714632391766c666b377974bd025c95"],["/css/highlight/atelier-lakeside-dark.css","91df2ba305d08d21b8644d641e0cef4d"],["/css/highlight/atelier-lakeside-light.css","ba464e2024a0598baf6c98625760409a"],["/css/highlight/atelier-plateau-dark.css","882e332d213cf1cb0756eea7c1b11f57"],["/css/highlight/atelier-plateau-light.css","b1ec9c6e7ec00443b1c6ead152669ef8"],["/css/highlight/atelier-savanna-dark.css","065de709e974f41e10070f48789b828a"],["/css/highlight/atelier-savanna-light.css","e8352660cd9224bc68f58737fc36075c"],["/css/highlight/atelier-seaside-dark.css","9ddabb68155fa772209d9b550ee7113e"],["/css/highlight/atelier-seaside-light.css","66f5940876dc5985689de557a7b3330f"],["/css/highlight/atelier-sulphurpool-dark.css","c144e6b22e3f35134586fc9f38771f14"],["/css/highlight/atelier-sulphurpool-light.css","01b52e307d9a68967218aa2daf893c20"],["/css/highlight/atom-one-dark-reasonable.css","fcc79e87ae98a77d9774ec3917c41af7"],["/css/highlight/atom-one-dark.css","1b3fe5858e920eaba8deb8775e024c1e"],["/css/highlight/atom-one-light.css","1bc7aa0d294162b31dde21babec4a974"],["/css/highlight/brown-paper.css","ea7190c600a0da0040d391500f02899a"],["/css/highlight/codepen-embed.css","dad726293c752ad3e3b8b56e20a16411"],["/css/highlight/color-brewer.css","2b417aadd51ff9773caea42c13272bf6"],["/css/highlight/darcula.css","b76aaf3408d8bfa8f3ee791638a3bf02"],["/css/highlight/dark.css","6522fb065b009340330b554f72d7cadc"],["/css/highlight/default.css","fcf0aacedbb0d73efa4ac10bc6d3ddde"],["/css/highlight/docco.css","0463a1230601c33f910a4eadc27c19aa"],["/css/highlight/dracula.css","56151efa84d9d848d65280e21e9fc25c"],["/css/highlight/far.css","2a747f3599a0b1a939290e4a620839a4"],["/css/highlight/foundation.css","12751aeea1cca1fa778d557a94858a3e"],["/css/highlight/github-gist.css","2d5ce2e52f5ab64bea78a49a86e9c475"],["/css/highlight/github.css","1690adf0007e70d5eafa071b1ecb0878"],["/css/highlight/gml.css","b8291cf606303bf58c7103174dedf1d4"],["/css/highlight/googlecode.css","21c5930ccebf0da786d9aed631d6e194"],["/css/highlight/gradient-dark.css","1aa4e1a10b55dfe41e60313e5e9c7cc2"],["/css/highlight/grayscale.css","38acbbe54893894353a018a00cd162ab"],["/css/highlight/gruvbox-dark.css","420c614e4a4e7cf2c03ce97a35c6dda3"],["/css/highlight/gruvbox-light.css","77dda9888bab6ef19aca2b8183a377c6"],["/css/highlight/hopscotch.css","e426b316255231fb0c6c5ad6af9fa988"],["/css/highlight/hybrid.css","0f3b5f8cf834a733766196b0093ee646"],["/css/highlight/idea.css","2bf97e3738f3c064daec3dce831e8c47"],["/css/highlight/ir-black.css","245a9b2f4ba499e7c9c7b0660cc8cf5d"],["/css/highlight/isbl-editor-dark.css","ef85d5dab69c54dc23f120b9a1b50522"],["/css/highlight/isbl-editor-light.css","070c5a28032f91ceb5faa5ca0a35551a"],["/css/highlight/kimbie.dark.css","5e76470ef12cd12bc9f67a7fc93756ed"],["/css/highlight/kimbie.light.css","d76b769c59c1ebf9c33ba7f818a1c0e8"],["/css/highlight/lightfair.css","fd2890a28f69dce6afd5601128371e7e"],["/css/highlight/lioshi.css","aa20ac46096faa6b33c8d82f1c138de2"],["/css/highlight/magula.css","ae6a971d80239eddba96d8de8baf8ea6"],["/css/highlight/mono-blue.css","ab91dccdf6225e915aa91e1bf8a92fb7"],["/css/highlight/monokai-sublime.css","960437aff86f3707ea5a74858693eea2"],["/css/highlight/monokai.css","21af3d7501be0f6eae9c33fb784ddf82"],["/css/highlight/night-owl.css","34fb102b784fda6ec23175659acfa369"],["/css/highlight/nnfx-dark.css","c6f3cf86170dfa832b7755565d77da44"],["/css/highlight/nnfx.css","45cd831246e6a949ab1234ef1026c8d7"],["/css/highlight/nord.css","42255f50d24459ad41310f8cf0eed5ca"],["/css/highlight/obsidian.css","7a1b41ff768805e9da695eee083a04b6"],["/css/highlight/ocean.css","1ef4491aeb7ae94011af490c73fb3ffb"],["/css/highlight/paraiso-dark.css","7e0c573eee4bdfebaf59f27f720a64be"],["/css/highlight/paraiso-light.css","741e710dad7049ee47c0c87991525db1"],["/css/highlight/pojoaque.css","a1399c54dd452776e2c5d11820b34947"],["/css/highlight/purebasic.css","cbae99c716d64d41c9e60074b4ab9924"],["/css/highlight/qtcreator_dark.css","9303f17f3e4a9ce1f89a538e22e6ab7c"],["/css/highlight/qtcreator_light.css","6e94ac7a6aaee53878a2f0c798a9254f"],["/css/highlight/railscasts.css","5273c5c3e4d03bd0eec5c409baedd789"],["/css/highlight/rainbow.css","5f46f38bfd1cad459bd8b3674be128f3"],["/css/highlight/routeros.css","ea94f775830e8ae4854b8b35f5c8dd0d"],["/css/highlight/school-book.css","67d7af5a9d5be68b80e925b65880970b"],["/css/highlight/shades-of-purple.css","d298ca18ee15a31743ded790707c5840"],["/css/highlight/solarized-dark.css","ad6b2d012dd9c20182c63a7c0cb0da6b"],["/css/highlight/solarized-light.css","0250f21b0240b4a9ae362ffc957ceede"],["/css/highlight/srcery.css","4cc6e080fb4b72d810f77ea35376169d"],["/css/highlight/sunburst.css","b08008fe2c1c1c8fc4b17e78a4fd7ffd"],["/css/highlight/tomorrow-night-blue.css","16a3b31dba99e3f07b1e82c1d276dad4"],["/css/highlight/tomorrow-night-bright.css","a4429306927f74d1f4e361e56287cb9e"],["/css/highlight/tomorrow-night-eighties.css","2adacedeae58f268c39b89bd1b0e7d84"],["/css/highlight/tomorrow-night.css","6755b120ada28f878128279a785c9e19"],["/css/highlight/tomorrow.css","7264aa8f2e4b0d8f8a84df5a8ca5b24e"],["/css/highlight/vs.css","52bf51cbe4b2d78c1d77f6037701799c"],["/css/highlight/vs2015.css","3cfdb804f301b3df58f23ea2229f737e"],["/css/highlight/xcode.css","4bb7d60c6440c907a14032d1e91a8b22"],["/css/highlight/xt256.css","d3ae0fe7604ede742c430543fa977d75"],["/css/highlight/zenburn.css","efea69ac6612bb9d2ec7d06e45e805a4"],["/css/style/dark.css","7fb20766f2675a177c858dbd73f24fc0"],["/css/style/main.css","d009c461bedf045e97fff9db765c08c8"],["/css/style/note.css","ebd754762ebd1fc7f747e216dc1df986"],["/eating/index.html","e9ba27b02691bd2144325ec0d3bc9fed"],["/index.html","82d8a1b048e1bc0ffdfaa2b50dba8ea6"],["/js/b2t.js","cd0f8ec03fec335251ac9c0c051f7cbf"],["/js/darkmode.js","96eb9ac7f1c1f415261aa7dd6dc5f024"],["/links/index.html","8eed2e699a29a48cd92d5d2f44fddc15"],["/links/link.html","024248259617ad4df04e821be2bf6a0c"],["/page/2/index.html","26a99a9e6d888cc0c490478d83ceac6d"],["/page/3/index.html","67cf067dbcc2c60978e13040624581ac"],["/page/4/index.html","6753fc6a99b675adbcab50598d827284"],["/page/5/index.html","4b5b5acad5d6fe9c69b759c24bbd7f33"],["/posts/10798/index.html","3466e72e9395ed159cc9c1a0b9c90666"],["/posts/11961/index.html","5a990e5a906d8b6bd0734e8b91678d81"],["/posts/13009/index.html","44be0dd1ec00b377118cbe6e381b2ea9"],["/posts/1478/index.html","76d6fa87035490e6d89dff50457c2374"],["/posts/16931/index.html","bf3d6f211e65b6cf99c43e4cfda2ed2b"],["/posts/20708/index.html","90da04e8f2d9f5d42ba1acaf23c471df"],["/posts/22338/index.html","28a946b8fa30ee5d6ea01c5a9ed6a495"],["/posts/22378/index.html","24753780c0e532dc97ccfcf86c74fee3"],["/posts/24380/index.html","6f929cdc390cf90719bc15506eee7405"],["/posts/26484/index.html","d978d3b18fd9b9ef58c27e5e7b8bae7e"],["/posts/29606/index.html","8730df161ad70beb0e81b6c1bbca1df1"],["/posts/32449/index.html","893506145efb5ea779c4a78716955a1a"],["/posts/3315/index.html","29cfd4d9ed87cecaa2f7de05dd5ef380"],["/posts/33197/index.html","ae8bf4c5ebbe1a44cadb0ed82b7d63de"],["/posts/33306/index.html","4641c707b141b1ede7a0dcb13f623cd8"],["/posts/36128/index.html","88e06dd4079c36369c6a981073e7be51"],["/posts/37557/index.html","c66f0b857b6a09ffe4e1df0ced9f57c3"],["/posts/37773/index.html","0cad6ba94883f4ed9d41fac6d32be775"],["/posts/38589/index.html","1e1c2070bd800b56c12982cbb6bbe933"],["/posts/39661/index.html","8c878789f3533a1e726e555848d76598"],["/posts/39842/index.html","91b9b80928f615f8665a3fb9c38f2626"],["/posts/39942/index.html","cf609c216241ffb6189bbeed179cbf63"],["/posts/44194/index.html","418dca108f4828e7bb906d120554c48b"],["/posts/44804/index.html","89a50885c0b759c28d270551fc94c0aa"],["/posts/4588/index.html","c9d5d857871a49fc10a44e038270e889"],["/posts/48089/index.html","2814ac47009ba8ffd17aaacbe6049d18"],["/posts/51892/index.html","50488b94532ab83f21bb3a47093a798b"],["/posts/53289/index.html","db38e3e20d7916e1e94e20bb9033eb8f"],["/posts/54711/index.html","654832408c7d3d5a6bdeb3bfd8fe817f"],["/posts/55302/index.html","638dc9e6bc0fee098cddb659fac5e4e3"],["/posts/56653/index.html","08d68eba4ab701f45024c3ff8c0737cb"],["/posts/57345/index.html","5c9f1b154978df84478247665401ab1e"],["/posts/60197/index.html","52be300974368122ae1dc3819d2a4ca9"],["/posts/60788/index.html","9f1c2db683660354f6a386bbd6e7488a"],["/posts/63676/index.html","8ff200dd8f0d00363163101d2f33869e"],["/posts/64257/index.html","ba0886fbdff9bdbf4fdad8b2f9a0e2cd"],["/posts/64865/index.html","12477aef55b0bd302ca0794ab20dca8f"],["/posts/65311/index.html","4c2328eb787044704da192e277005e64"],["/posts/7324/index.html","5b6f32e71798715841f1bf3980d1d30e"],["/posts/8688/index.html","a4770fcfcb314293173d2b00edaa7ae3"],["/posts/9687/index.html","ea19dadc9450058f9e8adcc4c1e99f2b"],["/sw-register.js","a4b2375dc14522e21f8767c385d303c8"],["/tags/index.html","c230aea7e67ee517ad0bc904abca075d"],["/tags/书单/index.html","049ab6a7229ab974e62f7629c64087f9"],["/tags/公告/index.html","dfea91cb9203f78f4a4746c242800515"],["/tags/悦读/index.html","11191ce435842cdff55f45d72b1ce763"],["/tags/笔记/index.html","ee25db3ffd5a44d90446372b62e8ee9e"]];
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
