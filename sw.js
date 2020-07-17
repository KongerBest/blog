/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","122502e7dcdae5b87a31f70856492e3c"],["/about/index.html","e93d5e4bee66339c306d14afa54a9c26"],["/archives/2019/12/index.html","d758226c4ca4455ad22a5329e77dd0d8"],["/archives/2019/index.html","8df5cc736d4de25e7d72a470c7a0a360"],["/archives/2020/01/index.html","b2add63eb902b0b632ea554d459a9ae0"],["/archives/2020/02/index.html","4127bcb23a7e5d6691d0385679124837"],["/archives/2020/04/index.html","f4c3cb893b006307d4040f8bbe83a31d"],["/archives/2020/05/index.html","ec98232d7689cf9f2cd2b6eff30ded3a"],["/archives/2020/05/page/2/index.html","84d193dc9a0f112af3b013adea58969a"],["/archives/2020/06/index.html","9462247a51a2ef71bc38bc961f0ecfb0"],["/archives/2020/07/index.html","ea7fc70439034ae211f8b2fabe7686ea"],["/archives/2020/index.html","beee7b5f82b2e9050999d6d4848a40fb"],["/archives/2020/page/2/index.html","9ed059ba00cdd6d822f2e85ed70d0c3c"],["/archives/2020/page/3/index.html","17781708d7c04c0c620811f8cbe17ebb"],["/archives/2020/page/4/index.html","284366018d3e64dcc213bb30c6bbd291"],["/archives/index.html","4b8470170f7c38ec92a81ef11a788d66"],["/archives/page/2/index.html","35f994679ebec2e42fa268ad30214707"],["/archives/page/3/index.html","a0b2e60b88106fa6f05d70db5d5ab36d"],["/archives/page/4/index.html","2118a3d8fda2cd8fa55744be45556da9"],["/archives/page/5/index.html","d394f5533282b5d6f1d9c74505fa6b3a"],["/categories/index.html","8fc8bd36fbf24beae87ab7c99a438135"],["/categories/技术/index.html","6518dc9844748c5b7ab9da8b166245af"],["/categories/技术/page/2/index.html","db0ead31b32a30f1c011fd11dbc07e0c"],["/categories/技术/page/3/index.html","4c6826e3dd5959dd219dac44a0bee801"],["/categories/技术/资源/index.html","de3e820fa6acc00ace36d26a6624e662"],["/categories/技术/转载/index.html","2b5267e462c89c6ed904635add430e73"],["/categories/杂谈/index.html","2558a5f0ae91d9fda914f42d173c20c5"],["/categories/生活/index.html","9fae86b9fd6a5e308fef01d51c312dd5"],["/categories/生活/技术/index.html","5a3d3abebb8bddb55293221b16197f56"],["/categories/生活/技术/转载/index.html","c10e1545f5d0b68ec10ec04bb0b9b070"],["/categories/生活/随想/index.html","ac5c113090ebf5062005954cf77af3df"],["/categories/资源/index.html","83d92c73b4a715e59edfa9bbc20d2dd2"],["/categories/资源/转载/index.html","30d68e4c322d9611e62641b73f306536"],["/categories/转载/index.html","4c388cf06914447a6a801fdf422825ce"],["/categories/随想/index.html","a386495eae87570fc654e3c2df0983ed"],["/css/highlight/a11y-dark.css","7c0a3fb85ed186cc0632f85cfd522622"],["/css/highlight/a11y-light.css","60cdb3f43c4c2f16438c60c53395a677"],["/css/highlight/agate.css","99cf01231e24d004187eca620ffb84df"],["/css/highlight/an-old-hope.css","6f557e1a35dcf0f95a4a2808959210cd"],["/css/highlight/androidstudio.css","92cd63212e6108e6e9d307cbd0e53864"],["/css/highlight/arduino-light.css","540cf7d2c7476761e691249cddd8cab2"],["/css/highlight/arta.css","eac096e1d648220de3f5cc8bdcb3556c"],["/css/highlight/ascetic.css","2735045ca1ac1936863ce77cff69251c"],["/css/highlight/atelier-cave-dark.css","7cfb845e134b0b1071a2f52097955790"],["/css/highlight/atelier-cave-light.css","40e92ab4896ce2823862d871dfbd40e6"],["/css/highlight/atelier-dune-dark.css","02ccf1d58604fd9b69ddc1fa319ee8d9"],["/css/highlight/atelier-dune-light.css","e282122f134acfb8101fc9aea0b739d4"],["/css/highlight/atelier-estuary-dark.css","92e4bba2f44c27026caf3e2ccdd6d203"],["/css/highlight/atelier-estuary-light.css","91144136da691f553d1ec4596834d658"],["/css/highlight/atelier-forest-dark.css","3e4489b1c9cb679020416d2a8f2a7eca"],["/css/highlight/atelier-forest-light.css","63215974925984a7242ce539aef7c163"],["/css/highlight/atelier-heath-dark.css","088a3eed4898e19cd314359c865b78ba"],["/css/highlight/atelier-heath-light.css","6068ff7551289294462837d9de5a463e"],["/css/highlight/atelier-lakeside-dark.css","f57b00a847db0258f1812e7c1ed1deee"],["/css/highlight/atelier-lakeside-light.css","ffc1f6b3eaad3d8278be5411ba34dc2f"],["/css/highlight/atelier-plateau-dark.css","00d6e6e4ed5d0e93abfa7ea9957be397"],["/css/highlight/atelier-plateau-light.css","fa565b1e1039bd60b263751abb306705"],["/css/highlight/atelier-savanna-dark.css","463352036316cc4740240e15a9da3f48"],["/css/highlight/atelier-savanna-light.css","319536b7c06b0a3fe0e659e09ac41b4f"],["/css/highlight/atelier-seaside-dark.css","ebce9a470bf83af92b2d7798f575ae36"],["/css/highlight/atelier-seaside-light.css","f148b0a486c83fe3645d0a4ab2b718c2"],["/css/highlight/atelier-sulphurpool-dark.css","7cab527b92ab9d3b8994ce1d32609821"],["/css/highlight/atelier-sulphurpool-light.css","d10ec4a73b8a7d402a961056aab3be53"],["/css/highlight/atom-one-dark-reasonable.css","004641ba0a986611c24194e5c699ddfa"],["/css/highlight/atom-one-dark.css","a5731b2a07a99aff311f783753f3daf7"],["/css/highlight/atom-one-light.css","9b31cf317720e0750b67ac940d571166"],["/css/highlight/brown-paper.css","936f4eb97895e4c8c700e4ae91e43947"],["/css/highlight/codepen-embed.css","50a2b40fecff53e523b83be590ead345"],["/css/highlight/color-brewer.css","8646ff10ffbf52b01a9ba7a3fe68e3c0"],["/css/highlight/darcula.css","ded3b66a314d71c3e852e2203bbfcc27"],["/css/highlight/dark.css","e5d4766ab9c0163dc81c0936b4a45016"],["/css/highlight/default.css","fbea2d25e32c5e0061130e18e0c3b25b"],["/css/highlight/docco.css","6f50bdc7df247657665d4aa5049b11ae"],["/css/highlight/dracula.css","b34da1841ae68a62f72edc7ef4dd017b"],["/css/highlight/far.css","1542474acc3e0603e4b3bff298c08299"],["/css/highlight/foundation.css","f118bdc2af09ac1fe03fa4842660d848"],["/css/highlight/github-gist.css","3353c86bf4b545f8d3e0d2481d20ce74"],["/css/highlight/github.css","cee1fb1dada54b6e7008b544ad80245d"],["/css/highlight/gml.css","ea10442a31ee38e2ee1a7f6852b671ed"],["/css/highlight/googlecode.css","dc1882e2be9252aef2da3cb9ec28286c"],["/css/highlight/gradient-dark.css","4b926ea3ef7ade442d01c5c49bbb71a1"],["/css/highlight/grayscale.css","5d1d5c2bf4ee146b1f1ffdf124b83136"],["/css/highlight/gruvbox-dark.css","1ceba28f0e609b592a65ea00ccfdc8a5"],["/css/highlight/gruvbox-light.css","983d8fd4e38c00bf2cd561eb9d970640"],["/css/highlight/hopscotch.css","0caef1994d1ea983bf74f7102ccf8868"],["/css/highlight/hybrid.css","4f85dd51159e58f69ad11eb99d7fe284"],["/css/highlight/idea.css","e646cf9462630b3d9cd7dd7670c5fc3c"],["/css/highlight/ir-black.css","07475b8f649cfeadb2f9477b54878eff"],["/css/highlight/isbl-editor-dark.css","19bce06930613e55751c70933010b5c7"],["/css/highlight/isbl-editor-light.css","b3617773274daa2609fdee85199dc07c"],["/css/highlight/kimbie.dark.css","43d1464ce875d3e25a06400780d57aea"],["/css/highlight/kimbie.light.css","b1954cb3bb27fea913e5791b44416043"],["/css/highlight/lightfair.css","662a7af8942d6fd78aa9e36131e901ef"],["/css/highlight/lioshi.css","9b9e1143ae93dc2d3ce0b3b120c080b0"],["/css/highlight/magula.css","966b265be8f0a67220f8e2cdcd4a6e3f"],["/css/highlight/mono-blue.css","a858349979af71cbb4994ff19903c35d"],["/css/highlight/monokai-sublime.css","8575412497738c7e4b77e4eb72ad31b9"],["/css/highlight/monokai.css","12d1c2d6ab9bdcba5cb917d91fb8d20a"],["/css/highlight/night-owl.css","475b61b47f4a68cbec64e942175c8d49"],["/css/highlight/nnfx-dark.css","2a22ef70a6dea77832d11ef98bd7caa1"],["/css/highlight/nnfx.css","083a8668a8d5987dec6759774d799061"],["/css/highlight/nord.css","d0f8a1b82b4a3c0c7f979bf05086093e"],["/css/highlight/obsidian.css","dcc9207c8d7f80e067e4b0a229343edf"],["/css/highlight/ocean.css","b3e95f6d5e7b7a67bed3cfee7a27a836"],["/css/highlight/paraiso-dark.css","460909126d5b1c12592f6c4c85406d02"],["/css/highlight/paraiso-light.css","9612293f4f5e4c3c85c28160973a37d6"],["/css/highlight/pojoaque.css","c82b1d61a92bd58d011aec6f4168b86e"],["/css/highlight/purebasic.css","42b8a7e9e7dca2663796ab328c866346"],["/css/highlight/qtcreator_dark.css","70af72bba029d1d01016f5a1b42afc67"],["/css/highlight/qtcreator_light.css","f5d2364550476cd0a3df2862993b68af"],["/css/highlight/railscasts.css","a3d9c7734f310cf9a44fd7f6d2cdc34e"],["/css/highlight/rainbow.css","10e2cffa2471d867cfd266e5df9d88d1"],["/css/highlight/routeros.css","ed9aead4084db60023f7c82f7a7ff322"],["/css/highlight/school-book.css","ad54aea972ebd5793241ddbe846762d6"],["/css/highlight/shades-of-purple.css","4b5018df1c61e39bd7d4bb18d6622afe"],["/css/highlight/solarized-dark.css","8608fd3deb8f5de699e1980a92d4f94e"],["/css/highlight/solarized-light.css","e1373290fc4dacedbb2ed47d1218cca5"],["/css/highlight/srcery.css","1ed8243321b20ec27abf885e8076b7b5"],["/css/highlight/sunburst.css","e36c930b8273ab93d0c9e1714464cd7b"],["/css/highlight/tomorrow-night-blue.css","8fc6a4665adb92b01bd9231c9eee7b17"],["/css/highlight/tomorrow-night-bright.css","67fc7739bd62b5ee3652784ec3b7dff9"],["/css/highlight/tomorrow-night-eighties.css","03dd05931edda1c0afd2ef568fdaef15"],["/css/highlight/tomorrow-night.css","7fe177b84110a6ccb83b2b39d2b656a2"],["/css/highlight/tomorrow.css","8c97fb78fb4f49730a76418ad79d2cc6"],["/css/highlight/vs.css","bd0f59eff8cd89d1bdf6c31998e2b342"],["/css/highlight/vs2015.css","be915985ee589b13c00532a202e9a94d"],["/css/highlight/xcode.css","558edef03ea2f0806616b54ea0652da1"],["/css/highlight/xt256.css","b41a5443e41b78f9e45ee9853a1e3e65"],["/css/highlight/zenburn.css","bea9be0ca85cbf80be01a39f25de1821"],["/css/style/dark.css","b3ddbdb2f5d774485778bda5177cc6e0"],["/css/style/main.css","cfd5230096d884e3aa1f930b6e70860f"],["/css/style/note.css","0b8cf6c7ec5a1b21e8de2c5a2bf2c711"],["/eating/index.html","d6a718ec38352077a61f8c0645e80a92"],["/index.html","b796c2cb6864492be5bb5479dae46709"],["/js/b2t.js","cd0f8ec03fec335251ac9c0c051f7cbf"],["/js/darkmode.js","96eb9ac7f1c1f415261aa7dd6dc5f024"],["/links/index.html","d6de0a2bafb0e08dc2862d3cae2aa0f6"],["/links/link.html","10ceeed37295bbc461b23a537681b0e2"],["/page/2/index.html","5d441b8f8a4a04dd9aab656896b0a354"],["/page/3/index.html","1e4722cbeeab8b39363509357531cfc0"],["/page/4/index.html","9dd7d25ce90d5a8b0e3192882987af89"],["/page/5/index.html","08a1c33751464b0d155a1faaf00915f4"],["/posts/10798/index.html","32068a27f160d5b95c3fc2ec743200e3"],["/posts/11961/index.html","1244d806742b48900d06583d1fe6c2c2"],["/posts/13009/index.html","dc4db82822c63473e494a848066f065e"],["/posts/1478/index.html","0f2c654aa2fe818b0106b150869b948f"],["/posts/16931/index.html","9abc493dd5bc96477e5c9561717dcb16"],["/posts/20708/index.html","c964466c132f0b8c794ec7f1caf0716a"],["/posts/22338/index.html","21f8208d9371283275594d044d15f35b"],["/posts/22378/index.html","eb49817b7ada02434bb8b7230b00f61b"],["/posts/24380/index.html","246594f9a2a0893e920a73d148d193aa"],["/posts/26484/index.html","06e1dbfcf5cb25307a262bec0d0528c3"],["/posts/29606/index.html","f2bad2453519ee608296e935cfb8d494"],["/posts/32449/index.html","657cfd0546b4263e45c63e2230c54150"],["/posts/3315/index.html","98a07ec5d1279e7d8920905b1b78a88c"],["/posts/33197/index.html","caf2e93bdf56e6a2bed30e7d0073c50a"],["/posts/33306/index.html","a4f5cb3c936f02db3cd2435ce432a04b"],["/posts/36128/index.html","e369de3e1f2970ea29e21dbdbd1c90d6"],["/posts/37557/index.html","c2d9a8d1ab3966ebff515384fafe9e03"],["/posts/37773/index.html","f7d6e735f0175c406c5461f225c815d7"],["/posts/38589/index.html","a32fb31f5e8e17bfc4ffd49276c621f6"],["/posts/39661/index.html","739e70f895bde9efaa12eab5576b0c6a"],["/posts/39842/index.html","bcc60c1639839ab8c3b609bb0fff0ed2"],["/posts/39942/index.html","41992fa5321b2e46c318457a2d39b853"],["/posts/44194/index.html","c408cb5357d885839799a547829cafad"],["/posts/44804/index.html","b849033cf854b9941e3e48f69e25b9cf"],["/posts/4588/index.html","090a99ba66014629866062b8ea9920d9"],["/posts/48089/index.html","51f2aa24dd74f47942312cd7fe8ba0d4"],["/posts/51892/index.html","a91b481a3a21553804e186bbd7d4a526"],["/posts/53289/index.html","7d614372e0f07b30518e4fddb7006991"],["/posts/54711/index.html","b3e687e9a62d19eeebc0ceb117cdf4c1"],["/posts/55302/index.html","64903f2ef5b1c961f8504830fbfce2e5"],["/posts/56653/index.html","e46ed25dc829f6ebd8d366bb10e92c4b"],["/posts/57345/index.html","b5b085272fc2945ad7f6de15693c1db1"],["/posts/60197/index.html","fba402184c26d28083c15f70de5232f2"],["/posts/60788/index.html","e2191d6f891332cae58fb4872d2c82a6"],["/posts/63676/index.html","fb9d83e28ad661f5c24ab26c2469ec58"],["/posts/64257/index.html","9c37cde80ed3060d8d60a29715cabf5f"],["/posts/64865/index.html","c1c435c48c0cf028791c467d1bc4d714"],["/posts/65311/index.html","7a7a278d0bc96f4c2d15007834905803"],["/posts/7324/index.html","f5fe4cf5b12febc0d31d05338cdf12e1"],["/posts/8688/index.html","be76d39fe376b45e498e895917b7d369"],["/posts/9687/index.html","7e81f5d860f78317a48671fc2877176f"],["/sw-register.js","8869b02f2a0bc5108fcbfdb3a5e32c1b"],["/tags/index.html","fc728e4e4db0fb5bf02b43477ec6e41d"],["/tags/书单/index.html","f3c5d1af5f553e00b8ef45aeef3db866"],["/tags/公告/index.html","0c041252123d30f637e8b2c9bfd68716"],["/tags/悦读/index.html","baa1738ca8c6902e46d4563cdacdd3ec"],["/tags/笔记/index.html","34f74e79d3870181d01a126703d9f26a"]];
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
