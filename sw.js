/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","02573a8cc643f262a267c25db9c6f753"],["/about/index.html","7b024a40923313cf8b1ccfdb3aac8e4a"],["/archives/2019/12/index.html","2123cbd73393aeada587747b92d30882"],["/archives/2019/index.html","51446ac74c3173e618b042742ad66200"],["/archives/2020/01/index.html","4f02bc115f7d0dd789db15d9407b6d94"],["/archives/2020/02/index.html","cfe673994863ddce789ce939ed632b5b"],["/archives/2020/04/index.html","f3984284d78f576b602ea46948c6b181"],["/archives/2020/05/index.html","2436b2ffc2bdde1b5f752d65622c6fec"],["/archives/2020/05/page/2/index.html","ec43e6b319683f472b98f2ab602e9c21"],["/archives/2020/06/index.html","f283fad04d78d00e2c312cf90313950c"],["/archives/2020/07/index.html","3121dfa99715ba1d166361a7148eb223"],["/archives/2020/index.html","5cb26f6d9b4e48d85804494af882fb34"],["/archives/2020/page/2/index.html","3bce8ccc7469ed57c1860b2e452526f5"],["/archives/2020/page/3/index.html","fdd44525135041f944726b24e405052e"],["/archives/2020/page/4/index.html","ef8e8cd1a4ca2682772bf1ae4eb89497"],["/archives/index.html","d8e0d7c7ca2dcd065df3f488a219f848"],["/archives/page/2/index.html","b9be77e92c54a5016b62862defde002c"],["/archives/page/3/index.html","ff2a60ba47d518594f75a299bfd3583a"],["/archives/page/4/index.html","827f678cac123a10c7da336b26ff118d"],["/archives/page/5/index.html","95054b2ad0b620c7197928961754ca4e"],["/categories/index.html","f0dedb266fa2d5f4ac97883587ae3087"],["/categories/技术/index.html","65ae2b13302241a4c8b2e37cf321bdd3"],["/categories/技术/page/2/index.html","c1a2f50860559f7aeb88d0c5786c9888"],["/categories/技术/page/3/index.html","4d1142eabe93647d8d3bbde0d09dae05"],["/categories/技术/资源/index.html","9ea68de79f03a768051fb76f8e2dd751"],["/categories/技术/转载/index.html","0eb23949c5ce96dfb7384c0098f0b96b"],["/categories/杂谈/index.html","9d2be3b885148561f03414139695a20d"],["/categories/生活/index.html","e3bfe9d5957d02e7e0edc9f69a6de471"],["/categories/生活/技术/index.html","49f9bf9f820c91018f8d15d2bf0ed3b8"],["/categories/生活/技术/转载/index.html","f22f398fe2883b39a7a0dc72eb7655e6"],["/categories/生活/随想/index.html","7e659ea898d9f9bfa1a05515dea8c4e2"],["/categories/资源/index.html","2aee9fd5620c0cfb9ee42ccd0ad3f067"],["/categories/资源/转载/index.html","27ee91aabf0624a3a7f92d4417016bf8"],["/categories/转载/index.html","cec34da6952ee3db9bf630f05afd867b"],["/categories/随想/index.html","0bc53a38214baf8f9599159d94005175"],["/css/highlight/a11y-dark.css","c950f72aceec1b141f1e3bb71f276d53"],["/css/highlight/a11y-light.css","5b1550e0d947944b6d44a689da97ba01"],["/css/highlight/agate.css","197b8cce313badbd95e46e054e181248"],["/css/highlight/an-old-hope.css","9fe3f575cb07b179399076409702cd9c"],["/css/highlight/androidstudio.css","5d4f8d7033f2f0e1352e4c6924f7d6b5"],["/css/highlight/arduino-light.css","89c7ace7ae95d38ec35d461cb89c28fa"],["/css/highlight/arta.css","e329d34ab8ef6de61634362d102945ce"],["/css/highlight/ascetic.css","d2e1c3f819e819b9492a3ff770861e8f"],["/css/highlight/atelier-cave-dark.css","3bae26530a83993726833cededc5df66"],["/css/highlight/atelier-cave-light.css","096ad75dd785761c4627fb8fe2af5bee"],["/css/highlight/atelier-dune-dark.css","21774bce3c50c750e292f30c243946da"],["/css/highlight/atelier-dune-light.css","006845dbeb87b5c3d8dc2c8d97108d81"],["/css/highlight/atelier-estuary-dark.css","9fe7930bf0174473c9bddee00c918319"],["/css/highlight/atelier-estuary-light.css","4030fc7c793866eced4e96a6da986603"],["/css/highlight/atelier-forest-dark.css","9a988e31b335f89d7f29403cc88ba2e4"],["/css/highlight/atelier-forest-light.css","8fc8a1f9a1f740bb287392aaa8b509b3"],["/css/highlight/atelier-heath-dark.css","f52cf6a956df40b196cd0c3c33a9041c"],["/css/highlight/atelier-heath-light.css","d0c0bc790091c619c87625964d2ce18a"],["/css/highlight/atelier-lakeside-dark.css","fc55456dcc0df530907a3fc62dacb028"],["/css/highlight/atelier-lakeside-light.css","753821739f2e8f0fc21e677d18380de3"],["/css/highlight/atelier-plateau-dark.css","c0fbfa9b93043aec2bd2cf6c335330e9"],["/css/highlight/atelier-plateau-light.css","d0f8e002f71da3af5d758ff8f0a2c16f"],["/css/highlight/atelier-savanna-dark.css","844caee9ecc1c83d0146315e8b848e4d"],["/css/highlight/atelier-savanna-light.css","10c56b795c21a928a1762f7363839ad7"],["/css/highlight/atelier-seaside-dark.css","191b1306a30ea11fca3bf8e4afdde470"],["/css/highlight/atelier-seaside-light.css","f91a91fcc12890031ea0f68d733fb537"],["/css/highlight/atelier-sulphurpool-dark.css","fcd8bf0556730f4029b0c506c7b2d3c4"],["/css/highlight/atelier-sulphurpool-light.css","3b1f8e55788c167d5e3caf7065f91c87"],["/css/highlight/atom-one-dark-reasonable.css","d2caf6ac0a366b1ea0490546d2c5bc84"],["/css/highlight/atom-one-dark.css","c5eabf86ed73175dce20918c5c51c392"],["/css/highlight/atom-one-light.css","367dbd3e5ec47f9adb81741517ce4a75"],["/css/highlight/brown-paper.css","980759b706fa272f332d27b05e33fa6f"],["/css/highlight/codepen-embed.css","6247cf57f639d6f2d486e7ade0747371"],["/css/highlight/color-brewer.css","bf2da984b99b454af88d07a51fc3b6ab"],["/css/highlight/darcula.css","56c47ff17ac72a05265b3bc2d3d84122"],["/css/highlight/dark.css","dc23d7c4bde0cedc8e510a2b4172b09d"],["/css/highlight/default.css","20dc47c439842971efa3308a0438f80b"],["/css/highlight/docco.css","63d5e2530dc8af409b286a59a980cd01"],["/css/highlight/dracula.css","91cab4f80d2a0cd6e2f5d490797c5ad0"],["/css/highlight/far.css","97e33650c52319096553ca7ed55b683e"],["/css/highlight/foundation.css","31b35ecfce702f819523a3fc7741aeef"],["/css/highlight/github-gist.css","0a8ca57d58318c8145fbb9e83b0d7d98"],["/css/highlight/github.css","df231035a0396eaefae24ee8da871822"],["/css/highlight/gml.css","cf77d2db990584acc8338154cfe65926"],["/css/highlight/googlecode.css","98feafc87758f5c7447ff6a253358897"],["/css/highlight/gradient-dark.css","96a7314617fbfac44edf339e14c61ea6"],["/css/highlight/grayscale.css","d42d753cee116534b993b7febda7245a"],["/css/highlight/gruvbox-dark.css","78d583a8b05b1e41e407b364c96ba071"],["/css/highlight/gruvbox-light.css","2e28b19a3b3d16e6368dea48afe2ef98"],["/css/highlight/hopscotch.css","e3a9364be387a84f89a93f405ef677c9"],["/css/highlight/hybrid.css","aff582dfe27837df8e87727a4b0d546d"],["/css/highlight/idea.css","ffa178d55864776ef7b053947e11b9ea"],["/css/highlight/ir-black.css","b4a178b7442e9365194868081b3ab3e6"],["/css/highlight/isbl-editor-dark.css","69e9a4b78ea95383ce2ae327aa503c10"],["/css/highlight/isbl-editor-light.css","2208fd845ff2eb64be75efff6aca5982"],["/css/highlight/kimbie.dark.css","8331347451cb8f0735abc10bd818fe25"],["/css/highlight/kimbie.light.css","50808b4469c826bf4d34ab46f8111b63"],["/css/highlight/lightfair.css","772f204c921cecfbcd1204a3644c0a61"],["/css/highlight/lioshi.css","5c449d5cc6d61ddae6811b64f0776049"],["/css/highlight/magula.css","1828b20570ea459c64e994640d2f9d65"],["/css/highlight/mono-blue.css","261966a135b651a4bd5ee2394808d848"],["/css/highlight/monokai-sublime.css","01dc1cceaf4ba3a24b729f7fae30a097"],["/css/highlight/monokai.css","f562f135063e27c10db3fbdcfa01e310"],["/css/highlight/night-owl.css","ee4cc3b2df03385c25bc143a43849f79"],["/css/highlight/nnfx-dark.css","d93c829f317f23beddb475f888800c24"],["/css/highlight/nnfx.css","3bb8d364dc2cfc15ddfb6bfdb239471b"],["/css/highlight/nord.css","0410d9fd611f6a05db23f7665ded887b"],["/css/highlight/obsidian.css","a5ca8fb09be1c3f530bc08c683794f84"],["/css/highlight/ocean.css","3cc18dedb2b454a12cb6c366b21e9db1"],["/css/highlight/paraiso-dark.css","4a125bceec8229b3eb284d1aa93e4e2b"],["/css/highlight/paraiso-light.css","56e5cf86696a9893abcc06ac0963898a"],["/css/highlight/pojoaque.css","4006cf7d32f2dc5a1fe4574864509eae"],["/css/highlight/purebasic.css","12fa52f6f5c447c4c7b886cc73fad0da"],["/css/highlight/qtcreator_dark.css","0a70fbce71b2d8f2fdf61ae63cb953fa"],["/css/highlight/qtcreator_light.css","a3ac0f01f7be92f126eea690d1ffd17b"],["/css/highlight/railscasts.css","11fedc4326d70cb4da00d86879e8bc2c"],["/css/highlight/rainbow.css","8dcc14c84a63e0482716ab7489aaac84"],["/css/highlight/routeros.css","ca4837cdb268d8e88e87fafe104dca58"],["/css/highlight/school-book.css","55200c81146d0fed6a79b2fe36a63a58"],["/css/highlight/shades-of-purple.css","9c1a935e0e991459dd8b49f2a77e6b03"],["/css/highlight/solarized-dark.css","e8d50a30993f5dca84015c3dc5728fbf"],["/css/highlight/solarized-light.css","fda7eef4eff666b2c5f72e1159c56996"],["/css/highlight/srcery.css","62eae78cf11545cdd328b598491d3c51"],["/css/highlight/sunburst.css","5c044f2b8ba4efaa0d0cf6fd11d939fa"],["/css/highlight/tomorrow-night-blue.css","eb6a9eb4fe476bbee647e8d0eacac064"],["/css/highlight/tomorrow-night-bright.css","c62e9bd93e7bc5be98718ade7f264e2a"],["/css/highlight/tomorrow-night-eighties.css","22baf3d3a5b86b22cf13ccebd21b06a4"],["/css/highlight/tomorrow-night.css","4bb92ec0d65b9ae1bd5f219362f8cc05"],["/css/highlight/tomorrow.css","d033dde76837ce2ef279803066839857"],["/css/highlight/vs.css","669c638230b6fff32353b919f69e624e"],["/css/highlight/vs2015.css","227f14da7b7ae7758ff5fc85936234d6"],["/css/highlight/xcode.css","6b2b8b55739a9dc81cc11411c8ed1026"],["/css/highlight/xt256.css","ff6ab9774322e11afe60e9a51afdbadf"],["/css/highlight/zenburn.css","0870a4aaf86e5e64bdcac0848a2fd1ac"],["/css/style/dark.css","8d7f4ed9349042185198af1885f75dea"],["/css/style/main.css","9a9764dfc639850e91bb06bafae6072b"],["/css/style/note.css","f2dc74a8f99f9bae5d051e6c61fb6479"],["/eating/index.html","ebe74a5816af6c500a5e999751d8c1c7"],["/index.html","4f5541189b10ecad5807ed0b580a1938"],["/js/b2t.js","cd0f8ec03fec335251ac9c0c051f7cbf"],["/js/darkmode.js","96eb9ac7f1c1f415261aa7dd6dc5f024"],["/links/index.html","6d78e08e38517577d4849d17506c1430"],["/links/link.html","12180ce0cf924d92aa55235ebe46e20a"],["/page/2/index.html","3a6bfc3ab33c051f21dbd9b7ad58dabb"],["/page/3/index.html","31feb71a79e4503e0425bac7119915a6"],["/page/4/index.html","77bbd218865bedd3819fbf283b5b2df3"],["/page/5/index.html","91c16d169582dbe1f75d1bfdc0905047"],["/posts/10798/index.html","5386949a01da716a19a0692a14707af7"],["/posts/11961/index.html","e170aa730b75c9108ffdedb0c0e7b5ca"],["/posts/13009/index.html","b8b61cc2a83d205aa4a93ecfe6e14d29"],["/posts/1478/index.html","3b995cbc913b76e7fda799c1a1952781"],["/posts/16931/index.html","24b8857d5aeeff75c0d4cf7c8414758b"],["/posts/20708/index.html","97df4f118f3cbbd2306a0020ba1db27b"],["/posts/22338/index.html","f74d09a2a92109c67255a5a1b2106983"],["/posts/22378/index.html","680425e2a492563bb93b7b161fb7aab9"],["/posts/24380/index.html","8266878677b65b97ef0aa54e4de75704"],["/posts/26484/index.html","566b9a64fbe298709852525ef5265f26"],["/posts/29606/index.html","c182f7795c4ab37483821dc6f66b26d8"],["/posts/32449/index.html","1f708d25d137d79b7f8fc8b5bbe771a3"],["/posts/3315/index.html","4902123620d14256b2a908fe471a5535"],["/posts/33197/index.html","b602e414b003f62b02ab742754727890"],["/posts/33306/index.html","74a0c9b758bbe33f96b69e4b1b657540"],["/posts/36128/index.html","cf45094ee655e29a685c648d56b499a5"],["/posts/37557/index.html","ee6095478537399b607e068749cefc80"],["/posts/37773/index.html","00e7ada1c93d1e60246489e3420036c1"],["/posts/38589/index.html","de3fe072ba72d5af2968bae485c9f530"],["/posts/39661/index.html","05e77f70cff745b3abb31553fc2bfe09"],["/posts/39842/index.html","dc8cb3aef40d264ff9061c12fc211d0d"],["/posts/39942/index.html","83ca04380ccacc03c87dc8315c2ddcbd"],["/posts/44194/index.html","1b49366f68a2a8212e01ce865f592312"],["/posts/44804/index.html","1395e3e3401743a64b36f54f6aac780e"],["/posts/4588/index.html","aeecaf2d0276dec6036d07364925ca47"],["/posts/48089/index.html","cad95e25aa1a6b2370f3e21349824513"],["/posts/51892/index.html","081d21d4173f8e1b09434956d5892636"],["/posts/53289/index.html","eaeea18bd948c5b7ed240f42d863597c"],["/posts/54711/index.html","a21ac7b97bcb8f1b9521148a2addfe43"],["/posts/55302/index.html","e56214aff437ff4fc7d0fb5d5a430701"],["/posts/56653/index.html","3fc8388ce8158267b9d51862114eba31"],["/posts/57345/index.html","eadbd3356b07110bfa0b5a5440c47ec1"],["/posts/60197/index.html","8bbcbcd3f9d82f96c302bea1f7e2fe94"],["/posts/60788/index.html","cf7bc16edc267a49809c1da1b93c73cc"],["/posts/63676/index.html","a59a1ff74602a9011786a09fdca7fa04"],["/posts/64257/index.html","24557a608456918c88386f3cc162d531"],["/posts/64865/index.html","c24d9495cd955263dc8a133b76178f45"],["/posts/65311/index.html","3cbc8e06191e159634fc88458256d1a3"],["/posts/7324/index.html","497332a08ef731d11494adcb014fc4fc"],["/posts/8688/index.html","fc505d9ec9a4df3d7490fce20386c187"],["/posts/9687/index.html","1577931db4ae262b019a769e1ae72a4c"],["/sw-register.js","2711ee753cf8e3addc7c79b3e9552368"],["/tags/index.html","d26a63ca31d26a2a49461756c08cc0fd"],["/tags/书单/index.html","36bf488946fe3ea6763925e5bc9a5e69"],["/tags/公告/index.html","ca2f1d5657b762bf028ea2edfc18ca41"],["/tags/悦读/index.html","ac4e96bc0d7c90b5785ac27c95a7daab"],["/tags/笔记/index.html","20d9a83a594a0b565af8942c5604d689"]];
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
