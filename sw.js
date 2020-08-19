/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","12ba89ec5afcf975203f1e180606ab55"],["/about/index.html","9fbb6a26729def922ad4f41ac7575ef1"],["/archives/2019/12/index.html","f8a10d50b3e8ce22b3cb926a80fc24e2"],["/archives/2019/index.html","294dde336a6f7b392d315149d751af82"],["/archives/2020/01/index.html","16e0ea31fa2ed90f86794740e8b227df"],["/archives/2020/02/index.html","bd5a23d52fc34b76f7e72664ade69e9d"],["/archives/2020/04/index.html","8a673d66d0570c28b8f8be6913ee9566"],["/archives/2020/05/index.html","e171e19da439ad230674903df5aa3363"],["/archives/2020/05/page/2/index.html","8bae7de992d2d90f467848e94a19cb85"],["/archives/2020/06/index.html","afee6c088f6485f0dc8377fcf4d47683"],["/archives/2020/07/index.html","9ee886a2955e3c226f47d920714611c6"],["/archives/2020/08/index.html","0d505e6e2d0f37ae18687a7ddf3e3341"],["/archives/2020/index.html","c732dcc307b71ed7c646cb93819a957f"],["/archives/2020/page/2/index.html","5133adacd37aac748534ea44143ab85c"],["/archives/2020/page/3/index.html","e1aad16cfd93946865e9fa0584ecc9ea"],["/archives/2020/page/4/index.html","b88f57ab01c62af0541e681cefb15561"],["/archives/2020/page/5/index.html","10bde467009c93478e84ea95d7cf8bd2"],["/archives/index.html","cf9a64e9569e72174d729af6aaa15c80"],["/archives/page/2/index.html","c6ac7bbdee6029c67039ee3ec93a516f"],["/archives/page/3/index.html","a126ee8e85e74ab826cab42ee270ddd8"],["/archives/page/4/index.html","9dd978b4c92d4dbfd92bda33783d6de1"],["/archives/page/5/index.html","66953e8553f7d01a650983d6a49f4e76"],["/categories/index.html","d65fadf67263cfbfa2ede868950b9ca7"],["/categories/分享/index.html","cd1f52cd02911f3f88ad412e005d5e5a"],["/categories/技术/index.html","e1f7e1b1a0db6801f5960dcac64f7ec1"],["/categories/技术/page/2/index.html","dc0d2e03a562af0976583f1a171bf138"],["/categories/技术/page/3/index.html","e99812df038c7fcaba5656a2e7faedab"],["/categories/技术/资源/index.html","3dea908b886f32bfd672445b15b745a1"],["/categories/技术/转载/index.html","d578e0d3fdc4ef87f24920f402b0b09a"],["/categories/杂谈/index.html","e542f6a14e45dbbf7aa70351777b46a0"],["/categories/生活/index.html","907db4b26910f7c8b7d0851c31204470"],["/categories/生活/技术/index.html","c1c3fe641f1630805e21d6cb0caf54f4"],["/categories/生活/技术/转载/index.html","d55b6d1847eeb4e542aaa0eab5245626"],["/categories/生活/随想/index.html","f0d7dc5c63eec0299e4329c31ba4a014"],["/categories/资源/index.html","8328a5f3fc76210241efeb7f39febf29"],["/categories/资源/转载/index.html","25da5867788d7a54fcab68168cd8ac2c"],["/categories/转载/index.html","0e4ebbebe514371c958f09327bbdd779"],["/categories/随想/index.html","3f61e422b08f6e964e4d0c4863e7328f"],["/css/highlight/a11y-dark.css","450a7a41135e01c2478780a7d4ff97bf"],["/css/highlight/a11y-light.css","ff348873846a5afa13e84bca0e871add"],["/css/highlight/agate.css","bb476ea1448f281b69838909d3226efb"],["/css/highlight/an-old-hope.css","e086802738b62ee58761cbddabdad363"],["/css/highlight/androidstudio.css","8bb3585f1103ec977cdedd87ac048139"],["/css/highlight/arduino-light.css","72c876adcdd99f1d26f865e89c6ec06f"],["/css/highlight/arta.css","96e76e5bcb78568bcc86da226d1b5e14"],["/css/highlight/ascetic.css","9c2b654075f6d77e62235446caed561d"],["/css/highlight/atelier-cave-dark.css","0c7cca405ce0d6676bdffd7829c7279e"],["/css/highlight/atelier-cave-light.css","bfbe5a6d8cfcb5336cd5df5306c823c8"],["/css/highlight/atelier-dune-dark.css","b662aa70d0e291b8ad471424afc595e2"],["/css/highlight/atelier-dune-light.css","93dd6af4d273147204f801ca87c3962a"],["/css/highlight/atelier-estuary-dark.css","73071e91437d6a3d19efae89cc46bc80"],["/css/highlight/atelier-estuary-light.css","676defe2ce650ef722b01043065dec8b"],["/css/highlight/atelier-forest-dark.css","9ada15e9ffa528988af84e31ece6d415"],["/css/highlight/atelier-forest-light.css","b1038b7c8863909792a1c16a3d6d2405"],["/css/highlight/atelier-heath-dark.css","c588ee542aa711048b4cd6ace15b3ec8"],["/css/highlight/atelier-heath-light.css","6f4e61814377889ab05e6264328a2218"],["/css/highlight/atelier-lakeside-dark.css","cd867cd4b1731e01c6787f87f944dff2"],["/css/highlight/atelier-lakeside-light.css","9ed0e9e2397a9795c1e347a9eb0ad334"],["/css/highlight/atelier-plateau-dark.css","6d662f80ab4bb3954083130257151c53"],["/css/highlight/atelier-plateau-light.css","ba05ef44428d796b8b9abd5d1917ff94"],["/css/highlight/atelier-savanna-dark.css","54ac7ba2ca12634b14c1583ee8ec78ee"],["/css/highlight/atelier-savanna-light.css","8f5f790b1687503e6a0ebfffdf9107e8"],["/css/highlight/atelier-seaside-dark.css","cb520ea58fba84d646e31cccbb715749"],["/css/highlight/atelier-seaside-light.css","f2f6a3ed393a38285987a7fa0d6adc27"],["/css/highlight/atelier-sulphurpool-dark.css","f23537ac5e39c9a47bb34c2cda66058b"],["/css/highlight/atelier-sulphurpool-light.css","892f066d53ab8467083fa7cbb2e449e5"],["/css/highlight/atom-one-dark-reasonable.css","8a497d79a0a7b603218ed179cec977fa"],["/css/highlight/atom-one-dark.css","e8a443dd742362125ef89269e0aa7c18"],["/css/highlight/atom-one-light.css","1c2eed4b7b4659ebf6b70c4f3a52c8e3"],["/css/highlight/brown-paper.css","e57f94735bb307f4e8fb14045fc6036c"],["/css/highlight/codepen-embed.css","b8cc9601ec74287b09e45599f2061699"],["/css/highlight/color-brewer.css","e0c1dbbed2aa3b829795494765baceb9"],["/css/highlight/darcula.css","513103da0f1cf0fb3ea4955daaf844b1"],["/css/highlight/dark.css","2af09d69fa34f2cbeacab6e70d6f2650"],["/css/highlight/default.css","97f55e9b3d0c1ece5fecce138ef32187"],["/css/highlight/docco.css","6cc3c88c1fc8694843c342c1ca33ff33"],["/css/highlight/dracula.css","04fb10bc9cd21e42c36e2ceb4755202f"],["/css/highlight/far.css","f345486f17f95281ca37ea2698080a97"],["/css/highlight/foundation.css","6c79651ca1bed6070637065d0f081b19"],["/css/highlight/github-gist.css","49413b81d36fc030a4d298bc3a70ffd9"],["/css/highlight/github.css","28c566d252799d8e55c736ccf9bae4c0"],["/css/highlight/gml.css","d1d5a9997077ed5329d23842810a584b"],["/css/highlight/googlecode.css","fefb02eae39087167e3c7377f5f808de"],["/css/highlight/gradient-dark.css","ee7267d0e8cf65d721f54caf4a53d9a4"],["/css/highlight/grayscale.css","d2d8a8e73606e0ecd76ee3c30b525d76"],["/css/highlight/gruvbox-dark.css","674f1c4274926748852d207b6777b8ca"],["/css/highlight/gruvbox-light.css","2647500a74a9626bae1e6af5f6193217"],["/css/highlight/hopscotch.css","0eeec603ae6cdb4616e45a70a537fbbc"],["/css/highlight/hybrid.css","d4c425265ca8993c5955aef7e6ce44cc"],["/css/highlight/idea.css","c2e4fc223efe04f6da0801b35894a571"],["/css/highlight/ir-black.css","493f247d6e9dc10f31cf60659205b754"],["/css/highlight/isbl-editor-dark.css","aa6635ccf78b9e887f7e50380e5f8d3b"],["/css/highlight/isbl-editor-light.css","1c4dfcdc21ee2603d7692a5d31ae668b"],["/css/highlight/kimbie.dark.css","a5ac87eeeea99d9b650ce6b485db1a25"],["/css/highlight/kimbie.light.css","d658a7334e579cb592c06512b46d533d"],["/css/highlight/lightfair.css","d8198912e9a4bffe26eb0f243b767a9a"],["/css/highlight/lioshi.css","1e416c27e9319603b990b74a04b2eb6b"],["/css/highlight/magula.css","f3f6d1e3e980b5f7d9521fe42b8fce91"],["/css/highlight/mono-blue.css","9e7f419f5fd50954fa4230a3ea67b99f"],["/css/highlight/monokai-sublime.css","6aeac7e867938070ab6f7b30ce74b3b6"],["/css/highlight/monokai.css","a6a6bbf2eed32b98e057ee9125bf29b6"],["/css/highlight/night-owl.css","298900f882bf41f58f8cab67ce82ab4c"],["/css/highlight/nnfx-dark.css","d641f648d5a00b27fd3e67c55b9fbf0f"],["/css/highlight/nnfx.css","2d0daa0049c8f14c279c85d4e06baf2d"],["/css/highlight/nord.css","8e72b58fe9152b5bbb172d1147d35cd2"],["/css/highlight/obsidian.css","58c3e5c77226609d2342c4ade6a1cab5"],["/css/highlight/ocean.css","3b380c451aab46fafdc331ef2b6fa84d"],["/css/highlight/paraiso-dark.css","3bbfc6e563f1d63a17c654cd24cfda26"],["/css/highlight/paraiso-light.css","b05030943e9630aa2a38529d32ff9008"],["/css/highlight/pojoaque.css","477b583cd73dbc1f0fd26956a0f4a063"],["/css/highlight/purebasic.css","f1859eecfe9b0b7b34c3138a9982547e"],["/css/highlight/qtcreator_dark.css","f0cd4c75e7ed0b16a3ccd1bfa46a433a"],["/css/highlight/qtcreator_light.css","b72fb242d4dfb039cdeb995d9eb2a752"],["/css/highlight/railscasts.css","50641160c6997c942fe27aadf99538fd"],["/css/highlight/rainbow.css","96da0a4422b5f48b5df339aeaf742156"],["/css/highlight/routeros.css","7c34cb2328a8b031af0a101d707bc050"],["/css/highlight/school-book.css","96ccdeb2a9c3da40dc9cd55cdb86abc0"],["/css/highlight/shades-of-purple.css","360817750b2d961f4d5fbd2e3539629a"],["/css/highlight/solarized-dark.css","82d1c7a61dc51fe4c9b19e732ed1edcd"],["/css/highlight/solarized-light.css","f4dc656aba64f367034bd702f08ed290"],["/css/highlight/srcery.css","13018092f9834caacbb32c18c7f9e5ae"],["/css/highlight/sunburst.css","bcd14d77e4bf716f678d6b55017c9dd0"],["/css/highlight/tomorrow-night-blue.css","50affcef35e224fdd5aa88198f2d50aa"],["/css/highlight/tomorrow-night-bright.css","fa2d9e271e69a602e0d54b5cf6527e6f"],["/css/highlight/tomorrow-night-eighties.css","3ef3717e6db2dee525880bf9f09c5a12"],["/css/highlight/tomorrow-night.css","7df53eb543e9acc7cbe68ab7d6381f3d"],["/css/highlight/tomorrow.css","7cfff55d69d7bb8d2602bc6659607b1f"],["/css/highlight/vs.css","7106c0d03376d5506e1324ef5abeb368"],["/css/highlight/vs2015.css","749e1659c29eeab849e861bffc486fed"],["/css/highlight/xcode.css","bd7de4652306805c5367e9d887203ff5"],["/css/highlight/xt256.css","bae03b09230848add017fa6a19ebc92a"],["/css/highlight/zenburn.css","962e20a43b59cb1e911506536cfea9eb"],["/css/style/dark.css","ad319e490da29f27532480fc8303e85d"],["/css/style/main.css","40c55570f4af1e523a09146abcb2b677"],["/css/style/note.css","bce63c23a2ea8225efc2cbb3757acee0"],["/eating/index.html","8d1355ec9694436cc5078bfd16ccf78f"],["/index.html","42fa0866bc6852f269074fddebf3fc16"],["/js/b2t.js","cd0f8ec03fec335251ac9c0c051f7cbf"],["/js/darkmode.js","96eb9ac7f1c1f415261aa7dd6dc5f024"],["/links/index.html","c450e19b31b1e6422dd57792cf66e577"],["/links/link.html","ce89230a76b642a1a5d6079d88761072"],["/page/2/index.html","5e969596d4faf72c89367bfa900aec02"],["/page/3/index.html","d6b3e6162dd6de24205c3edc29db11d0"],["/page/4/index.html","ab501c7450180e23738b695aea73e743"],["/page/5/index.html","11fbda73f78fea2571e29f645b04c7db"],["/posts/10798/index.html","9b08d2feaec52a042971c5ef8cacb9a0"],["/posts/11149/index.html","f7f2bb6ebbea1cf3183151b7625c3460"],["/posts/11961/index.html","fd7bc374722d48205fc56a719e64a28f"],["/posts/13009/index.html","bc7184126e71f5cc4c6d93dbb0a85843"],["/posts/1478/index.html","a9045020619669bbd004d4c9ed2a2053"],["/posts/16931/index.html","391e8c75502da4f17a7df2f2686e12e8"],["/posts/20708/index.html","ff8411bf063de94e96fdde605261d2f4"],["/posts/22338/index.html","e18cefa987b1ead55bbe3041b192c953"],["/posts/22378/index.html","4d717df695c57149a9ddc8704e3e13ab"],["/posts/24380/index.html","15fcfd70e1db1129e93f6e71881598d2"],["/posts/26484/index.html","03895b9985cce6d27138ff94786e4f95"],["/posts/29606/index.html","2b3ba372c6054867b3c19d4f832c0f49"],["/posts/32449/index.html","d1a81a34450d76225323a9b9a95e5343"],["/posts/3315/index.html","a1a0aa4b8f5261bcce2917d497236190"],["/posts/33197/index.html","ef89fc92b11721117db635e2e6b88547"],["/posts/33306/index.html","b08e9af8a1119823ca8ce15e99b7eb64"],["/posts/36128/index.html","22f4b9bdb16c8390595295669dc6738e"],["/posts/37557/index.html","72da7776203ca8fe3802d5ea942e8278"],["/posts/37773/index.html","134a7598c541c344edfe81b33cef0269"],["/posts/38589/index.html","5955634103806ed3d7819bf58bcdbc18"],["/posts/39661/index.html","b48a02cc2e6ba6c6f1ae04476b0c8a34"],["/posts/39842/index.html","81dfbf79d57742806f0b50cb14c3b800"],["/posts/39942/index.html","e7a6be497d0b6487d63456ccc7c7c366"],["/posts/44194/index.html","75de81e031b91247574913deedb9915e"],["/posts/44804/index.html","84500754434da403a78b9fb4210dcfea"],["/posts/4588/index.html","39ebd9c3e8e6624f0fa3ac038016484c"],["/posts/48089/index.html","1e953527b5ead293178df6d6e22c92be"],["/posts/51892/index.html","7f6b6342b6126a44423ea04b3bdb9d52"],["/posts/53289/index.html","42a56df00b5e78f8f9c8b87d9f3bf864"],["/posts/54711/index.html","a430d96158ad986e498f66055bb2869a"],["/posts/55302/index.html","0bae3f97414d767057556f597b33a909"],["/posts/56653/index.html","45be529d4e192c0cdabdcbff64a59eb0"],["/posts/57345/index.html","4d1de7e9dcbe34e0f4ba205bfe59c694"],["/posts/60197/index.html","a9973a7b26b245e0eec4bcd37d5eb3a2"],["/posts/60788/index.html","95e437006c42e65a1292608fb3ec3f6a"],["/posts/63676/index.html","1ee2f1862420914f8f9b796656ceca21"],["/posts/64257/index.html","021bbf33134eb5745a7a5e7a98f5a02c"],["/posts/64865/index.html","17d4de9c7748247d6f128d6937dbc62a"],["/posts/65311/index.html","aef49de92eec6170411f763aba0abfea"],["/posts/7324/index.html","4b0120b02131abe843d503da813b3437"],["/posts/8688/index.html","b6bbd80fd2620ce3da4fb7c4e7f7685a"],["/posts/9687/index.html","132257cb9c0c6173a9082d07e4e588ad"],["/random/index.html","c964465f35ab229e530187f6fed0ef3a"],["/sw-register.js","e6aa8d4cd8dc3cdb833a4418ea4a424e"],["/tags/index.html","9be76ac1a46e8780be37df1a32968695"],["/tags/书单/index.html","4aa05e2a696804ad35cc9025a0a77be3"],["/tags/公告/index.html","7f1ba21d5116fd32a61ec9554ee2346f"],["/tags/悦读/index.html","5912ef9f497874dbb8bf3f5925456d49"],["/tags/笔记/index.html","8a5168d47889b740baa9f895ae7b075a"],["/tags/语录/index.html","c445aaf6d15a977c9a37245c53457144"]];
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
