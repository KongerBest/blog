/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","dc96ec6459b55480ac783bcc13ed1b68"],["/about/index.html","df107b131a09c2a528c56207f60e1a1a"],["/archives/2019/12/index.html","f994a04216f51477a2f6a69ad8b5b3d4"],["/archives/2019/index.html","ba18d9d05295fd5b14010a81e3a84875"],["/archives/2020/01/index.html","a777d5a59be6d14b5e69927e727303e4"],["/archives/2020/02/index.html","468de5ba37ecd7eb8ba4e91c6a4243d7"],["/archives/2020/04/index.html","30da4b2cc45c14d5cd1bbe4e6dbecc4c"],["/archives/2020/05/index.html","f44ae75cfa51ec8d78c73c56da3245d2"],["/archives/2020/05/page/2/index.html","00d675aeed7562699041d662508f57c1"],["/archives/2020/06/index.html","d13c38ceaa5c1ff4195959001052dee5"],["/archives/2020/index.html","2b9ef16d55c9098e5e8d8190e53a828d"],["/archives/2020/page/2/index.html","642f075b32ba8c9aacc5290f6407681f"],["/archives/2020/page/3/index.html","52c9d6c680126c10881bdb0f7416acaf"],["/archives/2020/page/4/index.html","99e7a6ab12bee5f07a31654e9dc7be66"],["/archives/index.html","e34207f73d14634e6cc70ded577af131"],["/archives/page/2/index.html","ac479796e6695ef5a7ab2d058b24f701"],["/archives/page/3/index.html","b193db7a619d593639744d2902c66dde"],["/archives/page/4/index.html","77cf1375ed6b9b7d1517f3149d3048b6"],["/categories/index.html","84629e5084548f81f36f0b80e9acef0f"],["/categories/技术/index.html","99d59469bbc4390a1dba75d9223d2d0e"],["/categories/技术/page/2/index.html","220ab64296e7abcba68ff626bb3441c6"],["/categories/技术/page/3/index.html","9e45a899ac1e9c976df923c3dce56a5a"],["/categories/技术/资源/index.html","9beae65a7a0eb64c09261decff3cdd8d"],["/categories/技术/转载/index.html","ac780ede516267da33271a24ababdc35"],["/categories/杂谈/index.html","b42e137c9a943677bbe009305d2846fb"],["/categories/生活/index.html","6efdf9da28b374a171cc51de392f565d"],["/categories/生活/技术/index.html","7203fc8873d1eacc5b26b9c0570cd15f"],["/categories/生活/技术/转载/index.html","50b3d1bc8855327477bb36777af9e3fb"],["/categories/生活/随想/index.html","6cb8e924101c1b87503f702e6a2e81dd"],["/categories/资源/index.html","d523346bcc145c8398935c449b7e2c15"],["/categories/资源/转载/index.html","3b6b29fa5b671459b2421560e9469330"],["/categories/转载/index.html","bbe85763659bca5543c4221c5aa1da36"],["/categories/随想/index.html","8845720c4911f76988d2ef5600e085f9"],["/css/highlight/a11y-dark.css","49467cedce24eca0e88c0fa039f8e501"],["/css/highlight/a11y-light.css","17a45a31ee28712cafda6c5545275651"],["/css/highlight/agate.css","5982650c4cbf5d6c1184199b99e8ece3"],["/css/highlight/an-old-hope.css","f027f51c93a1422148b9fccd82a42b51"],["/css/highlight/androidstudio.css","59edd05d4baa82835143472e7c67ff6d"],["/css/highlight/arduino-light.css","57a30bc712236b11bce635b9acfd2cc2"],["/css/highlight/arta.css","b62a46729658bb4a801a7ed05a5aa23b"],["/css/highlight/ascetic.css","2b993d8c5b8ed2f883474c0efe2f3736"],["/css/highlight/atelier-cave-dark.css","71d3b0eeff612d7b8b872706d1b84488"],["/css/highlight/atelier-cave-light.css","5e7c19a38665af3353e3b837aeb51342"],["/css/highlight/atelier-dune-dark.css","aafcf00ceb714130cc45983508821e85"],["/css/highlight/atelier-dune-light.css","8aa9fd04877ce2cb83a82b21cadfa19d"],["/css/highlight/atelier-estuary-dark.css","20fb1b0212fa52aa6f4689e93b2403c6"],["/css/highlight/atelier-estuary-light.css","6405722284fdeba85f88125495f84cea"],["/css/highlight/atelier-forest-dark.css","93d8703e55b4bb055fec660834e08f69"],["/css/highlight/atelier-forest-light.css","56447d9c0bbf9f65692bfa3f24646e3a"],["/css/highlight/atelier-heath-dark.css","1da8f0be459f973aa65a5f996f166c18"],["/css/highlight/atelier-heath-light.css","cc5f292ab4b594f38e19d77836d60e6f"],["/css/highlight/atelier-lakeside-dark.css","db0c28eb6afa77c20afd94fc1b29e9c0"],["/css/highlight/atelier-lakeside-light.css","8a0f6402f8d0c0d90334cc00b20c5c28"],["/css/highlight/atelier-plateau-dark.css","dcc305f52464669e5c06fc2a196fedf3"],["/css/highlight/atelier-plateau-light.css","b131ddbb0cae41b384bdee4b929f4645"],["/css/highlight/atelier-savanna-dark.css","942e9bd8e4893c8406adc72bc829ac82"],["/css/highlight/atelier-savanna-light.css","366ebf933ca2b2ea9492468e702f524d"],["/css/highlight/atelier-seaside-dark.css","778054776d3c96f5063e7abb4e6e271a"],["/css/highlight/atelier-seaside-light.css","da663312eb488c6f0b6e8ec786ddc8f9"],["/css/highlight/atelier-sulphurpool-dark.css","68502aa70216a84fdca7159d7a26842d"],["/css/highlight/atelier-sulphurpool-light.css","fc567b6cf21805a7872929a0eada8d2c"],["/css/highlight/atom-one-dark-reasonable.css","a85499fc45f0256cc11d559b6aa7742b"],["/css/highlight/atom-one-dark.css","d59d16d458f0ce7402c6e7877feec3e6"],["/css/highlight/atom-one-light.css","f1cebefb730abbf344f44b4ca935bbf1"],["/css/highlight/brown-paper.css","bfd2a01b790d087ffc658f196bb55d0b"],["/css/highlight/codepen-embed.css","74f9f73390568e0b7aeeb2dd9d75eb4c"],["/css/highlight/color-brewer.css","2cd3d08a57c4e48ba513fd2def2b761a"],["/css/highlight/darcula.css","e0ce434db652350ec3345f774d274620"],["/css/highlight/dark.css","63cf6361f0c5e8a0e3f11bb63401f095"],["/css/highlight/default.css","2850257caf4c460084c79ff9eae61689"],["/css/highlight/docco.css","7ba417d0d0152b84f96fd4d66b27fbdd"],["/css/highlight/dracula.css","a80a200492f9bac8598580a796dd5e77"],["/css/highlight/far.css","4f3c60d82d7f1b6c4d04a77d811c4866"],["/css/highlight/foundation.css","8657cdbee0cbb3af21286e72ae27d7fc"],["/css/highlight/github-gist.css","87db52f9fc205617f6d6b2c038c61998"],["/css/highlight/github.css","82458b5193af0575852f3eb7596c76b0"],["/css/highlight/gml.css","4a340847aa497bea6420cabb3b93ceda"],["/css/highlight/googlecode.css","34aa2b6921ea2fa20b3db73573b6dd6e"],["/css/highlight/gradient-dark.css","371f44ca3e2cbb86d3393b26ecd6ff53"],["/css/highlight/grayscale.css","63cd7b228e92fd5ad43c7ba590cbf4d4"],["/css/highlight/gruvbox-dark.css","cd33c8497e023f90ca5e1e583cf9b8e9"],["/css/highlight/gruvbox-light.css","981ad439431eaede80fd89171b448635"],["/css/highlight/hopscotch.css","4708c762c032e5fdb934ed847a6d08cc"],["/css/highlight/hybrid.css","82cd8bf99ee410f98628880fcc48aa72"],["/css/highlight/idea.css","eec3841f3ae93257ed26c1b98bd42a28"],["/css/highlight/ir-black.css","740bbe598394263720352c0e1153e965"],["/css/highlight/isbl-editor-dark.css","9d89b3445451a8eba23d06e8be0bd78c"],["/css/highlight/isbl-editor-light.css","ef63369e8f6671ad688c36fa7996ee75"],["/css/highlight/kimbie.dark.css","4c106d5c607de3e9565a3abcbe715989"],["/css/highlight/kimbie.light.css","54157da8e39ecd24d69e9e1b779e40c1"],["/css/highlight/lightfair.css","d38a285f48fbc79ecc01455adf9174fe"],["/css/highlight/lioshi.css","f16246ec83354faf82c6d370b02088a0"],["/css/highlight/magula.css","4c349af20e4dae3779c5942278ee5090"],["/css/highlight/mono-blue.css","140e0d3d5dbabf447411747b58cfb251"],["/css/highlight/monokai-sublime.css","fdec0db15b604a3dda1cee879c228886"],["/css/highlight/monokai.css","4c63cbc475c62b2cebfe5057d06102ed"],["/css/highlight/night-owl.css","e3ee39442fdc5845f32331ca78fe4fbf"],["/css/highlight/nnfx-dark.css","709805107fa60275ff99ac9ef78aa69f"],["/css/highlight/nnfx.css","c67941b653ad205aa760674ddf390a76"],["/css/highlight/nord.css","be07672572a0fa59d2a219c2a5c4c9d0"],["/css/highlight/obsidian.css","f86cc4038814b5be78fe44de9dbbdf58"],["/css/highlight/ocean.css","39d20fb793b6e8ed1d936408429fa31c"],["/css/highlight/paraiso-dark.css","4c7b49ef2b87e27a8783f31a018bb551"],["/css/highlight/paraiso-light.css","ea2e9a6d459850b52acbb4f52b2eb04d"],["/css/highlight/pojoaque.css","b0f8ac314b5331f03b5ea44713925010"],["/css/highlight/purebasic.css","e949ddb6a296dbc316acaee14ef0aac5"],["/css/highlight/qtcreator_dark.css","62e0039bccd672c8355040625910ec76"],["/css/highlight/qtcreator_light.css","9c27016ed2bb0aafcdaec8859b41c510"],["/css/highlight/railscasts.css","ad0b65f0ac0cd4afb5c1264cec57c4e0"],["/css/highlight/rainbow.css","e877680fa7470fcdfc5f46aea84d0b2c"],["/css/highlight/routeros.css","1137c75ff091457dc7ea33f55a23c9a6"],["/css/highlight/school-book.css","60c7ad40bb03fc6127f0b2eafef2bc3e"],["/css/highlight/shades-of-purple.css","dcf917fcce175c983bff67bb45c977df"],["/css/highlight/solarized-dark.css","949a8ce078274b51b2fb79a9e2467504"],["/css/highlight/solarized-light.css","624b31afeb4083356c3649419a9e16b1"],["/css/highlight/srcery.css","1cef4bbc14738dd879cd37077d2bfe20"],["/css/highlight/sunburst.css","39ec915785c51ad3b1123c10e723595a"],["/css/highlight/tomorrow-night-blue.css","4003eeea3cc168247bb6dd813c7dd2f6"],["/css/highlight/tomorrow-night-bright.css","8ab49c2252c50a521e5463ec2b4ce7a6"],["/css/highlight/tomorrow-night-eighties.css","dd5281cee72045e435b5ca14b5065506"],["/css/highlight/tomorrow-night.css","dc357535dc0ae50a5f26ef041e0e01b2"],["/css/highlight/tomorrow.css","e2d359b1a1a8913baf01eb0c375269e4"],["/css/highlight/vs.css","6cd43651b3a33c8effc0d32359ce70a9"],["/css/highlight/vs2015.css","aad780ad8312e450971a4f521e921f58"],["/css/highlight/xcode.css","c757a4e3fdffc3d413474adc80d1705e"],["/css/highlight/xt256.css","b4ff68dc95b8c2b3ab384b5fb987666e"],["/css/highlight/zenburn.css","02d8de7cf87db082719b9f9aea781056"],["/css/style/dark.css","dd1438a5e156171b40889820445af858"],["/css/style/main.css","21d2e747a39d7206482b52a97657ff57"],["/css/style/note.css","6c286692dfbc39ceb6786acb59218acd"],["/eating/index.html","131a7474546925c074eeb89c903876bf"],["/index.html","34bb550cd1299c915a89709ad1abd38a"],["/js/b2t.js","cd0f8ec03fec335251ac9c0c051f7cbf"],["/js/darkmode.js","96eb9ac7f1c1f415261aa7dd6dc5f024"],["/links/index.html","ecf2a076420b45ddfffca481c7549444"],["/links/link.html","088af8b60256aa86380ad50f8bd08826"],["/page/2/index.html","6f24f363389d516dba6d7fa8e9e8558b"],["/page/3/index.html","0182753e7dedc31af289bd588274361a"],["/page/4/index.html","8de3ad1210ec4525352658a1f3657b25"],["/posts/10798/index.html","1a877c5c61fbda25622bf612233f60c4"],["/posts/11961/index.html","072438d78abd6d7cea92343584577593"],["/posts/13009/index.html","5b4ed59ce794b65235b3e64e16db5f96"],["/posts/1478/index.html","4d28bc5f49143af574f95414fcd7ea1d"],["/posts/16931/index.html","0ec59219e6e9e218893ac87371a43cb4"],["/posts/20708/index.html","c26b56559228748a1457db4f6c8ceb7e"],["/posts/22338/index.html","09634bdc1e8eb62509acf7b21c9c7b3f"],["/posts/22378/index.html","d9792ffa73975e757dfe1f5414357a53"],["/posts/24380/index.html","5f320146fb601072c3afb895c38c6848"],["/posts/26484/index.html","2b6fd8726dfe9f68752b8e9729a01213"],["/posts/29606/index.html","52415d494cc846926d941a330800fbe2"],["/posts/32449/index.html","2bdc5ccc3b62a4d34d6a4a78525c1b3d"],["/posts/3315/index.html","cc97e438acca37417d5cea8d5ff737ab"],["/posts/33197/index.html","6c67504ef87ccbdc6ec5c3f08228ccbb"],["/posts/33306/index.html","b215079c689032a87972142cdd53005b"],["/posts/36128/index.html","e152a302ec0e7d8382e10daf3e95c62a"],["/posts/37557/index.html","f6cd38522691cabec30db74dc768ff09"],["/posts/37773/index.html","3e909c8ed7e54f8275492a0d7084466d"],["/posts/38589/index.html","277a1084a9f93a18ccaf427bba9b770a"],["/posts/39661/index.html","0a8d9efea4d35c3a110b5fd5c1bcb015"],["/posts/39842/index.html","b12b18747940f45e0285c22f6f46704f"],["/posts/39942/index.html","b043e3e7d3d6decb7ca0efaaa672d540"],["/posts/44194/index.html","561e3c086809260cb1bd44d17c34679b"],["/posts/44804/index.html","93bba86414e7c7bdc1b52677cd905161"],["/posts/4588/index.html","2c119013f60043231c3e62048eb11a49"],["/posts/48089/index.html","5527cd869dc2178666a157c29eba65a8"],["/posts/51892/index.html","f2a5ec933272a396a010299b57f8735b"],["/posts/53289/index.html","2050466aa42fa69f6865052479eb291b"],["/posts/54711/index.html","f92eb9f46e2dffa6fc9065a635771240"],["/posts/55302/index.html","163ea70667b7c3f53bbd2361965105a1"],["/posts/56653/index.html","d63801030aa97294052218bd10e4c1b2"],["/posts/57345/index.html","4e5cfadede0e47d1c9183d58d8323672"],["/posts/60197/index.html","3bebeb21e3d7c8d9bda63a6cae8b5e89"],["/posts/60788/index.html","65f5b4d129acfbf9ee122b7805c62125"],["/posts/64257/index.html","91c83db50c9f97d775e22bdfc0b01e1d"],["/posts/64865/index.html","4a72de60d84142e91fec8c2a8e4197a7"],["/posts/65311/index.html","291e84225b9dded09b09d7d579e6c162"],["/posts/7324/index.html","50c483cca3a77f89f84449d926e24dbb"],["/posts/8688/index.html","59e327d1a2844fc8fdb569447a407659"],["/posts/9687/index.html","72cb7d9f7dd8cec6332d238c1e9fecfe"],["/sw-register.js","9fe1c8b69824425cfeac81e78997c7ee"],["/tags/index.html","1d5f3ec53c52cb3e2491329a2d5416a3"],["/tags/书单/index.html","658fbfb8fedaccbc0971cbd8e6497e13"],["/tags/公告/index.html","f1c8a2c0775ecc4e7cc57a2a1360ae2b"],["/tags/悦读/index.html","83eea8aaf43e97f110e0c210136dc1ed"],["/tags/笔记/index.html","df89f743a907d232043db84ffbc5e63a"]];
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
