/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","f791ca0a1d87401ffcdb03c4d0623f33"],["/about/index.html","be135b8ef7edad3cc5f5619e457996d8"],["/archives/2020/01/index.html","5d4ed8e00b422c953dc3c55aa4df1e58"],["/archives/2020/02/index.html","3e3650cba98313d88357c9169041692f"],["/archives/2020/04/index.html","ebb8e916d9a1f40d14a04885d2e2df18"],["/archives/2020/05/index.html","285211b44e685fcd7d8b5b65a2dc4df2"],["/archives/2020/05/page/2/index.html","5df445c6f7893366f716de2cf8481f75"],["/archives/2020/06/index.html","dae3a969bfa0cb725c3f0eebfe10958f"],["/archives/2020/08/index.html","2313035fb54c7b77a5e463e1a04902d9"],["/archives/2020/index.html","0b3de2c30b3f2280ed4de724ca04a2de"],["/archives/2020/page/2/index.html","e39d135071294912df0b9b8dea2fbceb"],["/archives/2020/page/3/index.html","d0f6a2f76b08482920a8bfa34a1c7d74"],["/archives/index.html","1f5dc84f1e112eb8057c480015b7e7e0"],["/archives/page/2/index.html","e740befc03df59eac9b3c6599a09835b"],["/archives/page/3/index.html","cc98d796564793999aa816e41ed2daaf"],["/categories/hexo/index.html","990472ffbcf23b15ff3ab3c18a16c91b"],["/categories/index.html","ffe01eb63f6f669f718526b14495a780"],["/categories/分享/index.html","d4490ea054febcab2da65986c393d0f8"],["/categories/技术/index.html","691a6e42f49803a50e865678c29bc156"],["/categories/技术/page/2/index.html","665a60a5adef3d6647226300ec86ae3e"],["/categories/技术/page/3/index.html","93624b5305eef5c6ae16be88ab360f8b"],["/categories/技术/资源/index.html","d4e09690210bc2799cb23c7b76e16919"],["/categories/技术/转载/index.html","07587387c8f37c3d1d21bd8448481ebf"],["/categories/杂谈/index.html","08fb9398642663a985f72f8a70ec2196"],["/categories/生活/index.html","0d0e642cb79869b210ffac464ec1d589"],["/categories/生活/技术/index.html","298ed06363d7ae0b4b4343aabdfa871a"],["/categories/生活/技术/转载/index.html","64356c2e87296f9ab687706993eb81fa"],["/categories/生活/随想/index.html","023cda1141d5dedaf7c4b72fc262361d"],["/categories/资源/index.html","2b79a3e46f236054e4b83dad346d050a"],["/css/highlight/a11y-dark.css","513292422664b4d880587e07a265077f"],["/css/highlight/a11y-light.css","38c8b1bb96e87eece30f0886ae6ea1b0"],["/css/highlight/agate.css","3fd47882e66d290728a13989da9859d6"],["/css/highlight/an-old-hope.css","ac1a42ad1f118c97c5b80153329c4dd3"],["/css/highlight/androidstudio.css","5d64e4f994514876e670cc3d49b6bd7f"],["/css/highlight/arduino-light.css","c4f0ca7a960febe890ed3bbb38527d59"],["/css/highlight/arta.css","c5681bd87d3f5dae6d8d62cd74a6dc73"],["/css/highlight/ascetic.css","d06b5355994f0f5b82c60cabccccf0ce"],["/css/highlight/atelier-cave-dark.css","fb1903a4212303e18eba76855a70aecb"],["/css/highlight/atelier-cave-light.css","7c45ff050f0211873ed5a3ad77b1a94e"],["/css/highlight/atelier-dune-dark.css","d0da89317e1d504a7f8113043083325e"],["/css/highlight/atelier-dune-light.css","2819fd9a6b00b0f0b0137f8eaba784d3"],["/css/highlight/atelier-estuary-dark.css","cbfda999b112cd71e0fa73988fc8fca2"],["/css/highlight/atelier-estuary-light.css","92ebf31784c90bb3e6596e17be6d1465"],["/css/highlight/atelier-forest-dark.css","38684950db4df7165086b56452a9cabe"],["/css/highlight/atelier-forest-light.css","8423e2f0599328dc100263872b18bb30"],["/css/highlight/atelier-heath-dark.css","0313fdf9723235bc5a7ad20343a614a8"],["/css/highlight/atelier-heath-light.css","6d165115c8b67d4d19ea64129cf05006"],["/css/highlight/atelier-lakeside-dark.css","e5bbadb1ff26320eeeb14338e4aa6fa9"],["/css/highlight/atelier-lakeside-light.css","f013c0e61af9dfeab85b4008342c5bea"],["/css/highlight/atelier-plateau-dark.css","c81c2af8d9aa9663aa3fb8a1cb9e2bee"],["/css/highlight/atelier-plateau-light.css","86f1927000a6bc844ef5a35566262959"],["/css/highlight/atelier-savanna-dark.css","f25b337996ed4b10802fdc7bfe137696"],["/css/highlight/atelier-savanna-light.css","99981e5f1a4174219621008e5657c7f4"],["/css/highlight/atelier-seaside-dark.css","4b6cbac25db1a6895195333013a4d2d3"],["/css/highlight/atelier-seaside-light.css","26cd8b602d43ba5b4a1efb22ed2f2538"],["/css/highlight/atelier-sulphurpool-dark.css","2c891989293139183ec59c4454d25693"],["/css/highlight/atelier-sulphurpool-light.css","20d186e8fb072c1d80574157d688bc83"],["/css/highlight/atom-one-dark-reasonable.css","f81012e076b4efb17906c5288f437da6"],["/css/highlight/atom-one-dark.css","b22442ecda6b96cc7be5c1de5b2785f6"],["/css/highlight/atom-one-light.css","5dfa6d13fff11ea781b748cffee34e6e"],["/css/highlight/brown-paper.css","d3a7aa66bfdefcb04f5b7472195d2c48"],["/css/highlight/codepen-embed.css","e2fac11d8c59c35bd197863ff204b02a"],["/css/highlight/color-brewer.css","2c3abbe026b0767fa4df39e8df57eb6b"],["/css/highlight/darcula.css","36211ac57fe2cc09ce3719149faa16f9"],["/css/highlight/dark.css","1d4412386e3c91e8100adbab4c640167"],["/css/highlight/default.css","61bc9cc7cd02cf93e2ce9d4312b52bd3"],["/css/highlight/docco.css","6c63807a1f16eab765d1565ca8bfa8ef"],["/css/highlight/dracula.css","1b7c697e95cb6219c5053284d03b09c8"],["/css/highlight/far.css","8bddb6e5b20f716fb24915efb92a6330"],["/css/highlight/foundation.css","dfc8b4ce7a5faa6a85ac6a56ad9f6fe9"],["/css/highlight/github-gist.css","aee06ccf4f9480afc136101f4f93730e"],["/css/highlight/github.css","bb58e895c2da325ae3801da7a1c658ed"],["/css/highlight/gml.css","004a46468272e60a5b56c0c42ec176b3"],["/css/highlight/googlecode.css","1feceeb0a33103222f9964f6bcd74d52"],["/css/highlight/gradient-dark.css","82afe8c18f12b412bac164024f83e332"],["/css/highlight/grayscale.css","90289504d5a8bb62dc069ef32c52e235"],["/css/highlight/gruvbox-dark.css","efa05a3fcfec10af60f579e5551d5316"],["/css/highlight/gruvbox-light.css","415bcc735593baa17a01a38c2c9196b3"],["/css/highlight/hopscotch.css","f8841d0e1988f87ef4a56bf81d41da6f"],["/css/highlight/hybrid.css","32b1453ff6ca56446a9cc69f303e2a20"],["/css/highlight/idea.css","4a429e47db43a93193969c997306ab27"],["/css/highlight/ir-black.css","a0d8244233814355dbf56976942ea4f2"],["/css/highlight/isbl-editor-dark.css","dae7143f0a519d093ece2c38bdccdee5"],["/css/highlight/isbl-editor-light.css","4180bfc8dafddfaf1f47b1efba7fddd1"],["/css/highlight/kimbie.dark.css","51f53f17fac0e0353e6b5e092501b795"],["/css/highlight/kimbie.light.css","49299bad5e8a8f77fd24e5f9a4d15764"],["/css/highlight/lightfair.css","01923061de496e4beb9f4055370598e6"],["/css/highlight/lioshi.css","a7e38003b60c87a539b463989c4636ee"],["/css/highlight/magula.css","d57c1f6f80bac6f4be0b16c07eb1f088"],["/css/highlight/mono-blue.css","d9d6f8efa4c3c8a1f9e9eb30c4370fa5"],["/css/highlight/monokai-sublime.css","6b4a124cc36518ac989855ca5b4246d1"],["/css/highlight/monokai.css","742e488cbe7da3ea8aef0c22d2f0db0b"],["/css/highlight/night-owl.css","6e5c4bad01c82665c0fc31478e022fca"],["/css/highlight/nnfx-dark.css","99617811d55013e55f4c04ff64e47923"],["/css/highlight/nnfx.css","30d20712fe7d9878cbf421426b1ca583"],["/css/highlight/nord.css","dfe8efe5b3f4a70e9ac0a8350e1427df"],["/css/highlight/obsidian.css","8dc52f8c6f99aab7eebbea18761aa2d5"],["/css/highlight/ocean.css","9c45062e24139cb29a4c0855afcaff27"],["/css/highlight/paraiso-dark.css","4d972122da9039a6669fbb53a0e5d9cb"],["/css/highlight/paraiso-light.css","812689b63be763e3c1e7a921992267d9"],["/css/highlight/pojoaque.css","0c494d702cc72ede9e8dcd2b7e022f2f"],["/css/highlight/purebasic.css","96ca73f16af482dfbb5e19ad427d9885"],["/css/highlight/qtcreator_dark.css","d4fe4eaa3951b030b3e0062a5e8e6b70"],["/css/highlight/qtcreator_light.css","4e4ab9cebf1281b1bf92dde41713dc16"],["/css/highlight/railscasts.css","0b69dbd8d4e39cd0285d563e307c81a0"],["/css/highlight/rainbow.css","2f65cabd10d2744f1ab636526bc569c4"],["/css/highlight/routeros.css","80449dc68f47d04800576722b1d022a7"],["/css/highlight/school-book.css","a8c3b03ba752f6f6060d811e66eb7e84"],["/css/highlight/shades-of-purple.css","54461b26d7671f4fc879d6b861eb6c05"],["/css/highlight/solarized-dark.css","8407941b22d0a36af534ff326110dcbf"],["/css/highlight/solarized-light.css","6d310c1dceb38f14d6ad0cda263b198f"],["/css/highlight/srcery.css","00cdeb99b83f404b52a1698d3bcb0d5d"],["/css/highlight/sunburst.css","209f8a180d3588dcb138a998131074db"],["/css/highlight/tomorrow-night-blue.css","9a4fb93c6ece9dd8517f11a21ad1b769"],["/css/highlight/tomorrow-night-bright.css","5e8572df40a0af71238f3becab572ab2"],["/css/highlight/tomorrow-night-eighties.css","215831b22022df9bfa3d76d615bd150a"],["/css/highlight/tomorrow-night.css","3f1365c75cfccd4fdebd3513a7fcdc14"],["/css/highlight/tomorrow.css","0b680d7ea6978ca03bef0bd9bbe52dd4"],["/css/highlight/vs.css","d8bcd583d02f6707e6eab015cc876514"],["/css/highlight/vs2015.css","7d07dd9bd37f6568a257ca44b427fee0"],["/css/highlight/xcode.css","54723330444a7be83f703949dd57bdc1"],["/css/highlight/xt256.css","a7381d6c2deabc7ac722e23f2bbc31eb"],["/css/highlight/zenburn.css","0def81f2bcb64478e94062d94a787a2f"],["/css/style/dark.css","a904180568405c304f7faebec5659d48"],["/css/style/main.css","7d94834ff894e15e3344b6e99dbe35da"],["/index.html","9f7a8f084ba972366986e77e573bb16a"],["/js/b2t.js","ff7fee4413d70545d069b5f328e5cdbe"],["/js/darkmode.js","2be8ee2c06f76137631d04a452d4a5bc"],["/js/local-search.js","d41d8cd98f00b204e9800998ecf8427e"],["/links/index.html","c6b4a84185b8d1258ad7d07aa3d46fc1"],["/links/link.html","0ce4f2a13bb39d5b8e8fd8efb35304d4"],["/page/2/index.html","38da9ba579b0b9c9e53642b899b1858a"],["/page/3/index.html","4db8163ce316080c67ddaa69319e40c7"],["/posts/11149/index.html","587d34469326b58e32827d86ca0730cd"],["/posts/11961/index.html","d512f492c436d1b13f20b06b152155ba"],["/posts/1478/index.html","4dba37269c4fde209112c6e7a3aee24d"],["/posts/16931/index.html","261ada45e71e6fe40f3854ed42ce32a8"],["/posts/20708/index.html","9a63849ef2166c82d7957632b7c4bafc"],["/posts/22378/index.html","51ca62703997896152d18ebcb534f0ee"],["/posts/29606/index.html","0b2c9d4ff1e5a5de3127c956ae5c7f4f"],["/posts/3315/index.html","534f312f9eb3d2cc3c6cc87fdc493458"],["/posts/33197/index.html","939f376d5d525da8df28e48af46f8067"],["/posts/36128/index.html","e0783634f3d6fc1be8f42f90dc3e2d35"],["/posts/37557/index.html","10c9123f450d6a75ff8ebda02418b809"],["/posts/38589/index.html","2176a7c3469d23b7b16e448bc02e07b8"],["/posts/39661/index.html","9fcb5b210679178b83445692b5d5cd7d"],["/posts/39842/index.html","5f026cab5fd0c19500585c7aede76271"],["/posts/39942/index.html","81d896a85b238ca9be3a18973ebed4f2"],["/posts/4588/index.html","ee7e48532a161580f13d5af78d325182"],["/posts/48089/index.html","55011cf86c3c809e45b0073548681aa4"],["/posts/51892/index.html","4659f09a9ba858bfa396f41e8bd05987"],["/posts/53289/index.html","144e0c4fc1fe30574edf0a035fbf9eff"],["/posts/55302/index.html","5a190f363c3831db5510c8dd62e2d2dc"],["/posts/56653/index.html","2be18ad5f0926b6c78192692cf336f8f"],["/posts/57345/index.html","ac2a8a71883bd6a5c9f7bdf4ab329ad3"],["/posts/60197/index.html","e38af52a585be86de2d1525627462a2f"],["/posts/60788/index.html","e7477bf93b0dae896bbeda56e6586b02"],["/posts/64257/index.html","0910189e711097778dc9bf2d41939e8c"],["/posts/64865/index.html","5fff49554c4c2a80d76bb21eedfa1c60"],["/posts/7324/index.html","41d796f9bb3b95035571ee48c26ecb3b"],["/posts/8688/index.html","801c996d657c658280debba787246ffa"],["/random/index.html","81bdf91959db06bcb7eea8ca0a0baa80"],["/search/index.html","46868a98b9f50ff17972e4c057f941b6"],["/sw-register.js","b353569504ca07206969fd5e3b1dae90"],["/tags/index.html","f5542c39b6204b4a7f8b3fe20699a9fb"],["/tags/书单/index.html","12708e2e13b1294f79c24a3beb6c3b1a"],["/tags/笔记/index.html","e0830b850292c955023a6437cd4ecdcf"],["/tags/语录/index.html","11d0fde6895bdfb80a6c480b9886b23f"]];
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
