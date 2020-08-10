/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","4711095a558b007c6fa6ce0855ba55dd"],["/about/index.html","215cdc2ee20efdef81440e9e224e9bf8"],["/archives/2019/12/index.html","6039cc388375a2e323d54a0c7d01db4a"],["/archives/2019/index.html","7b4c533e13381d1bc849a26010dd57a3"],["/archives/2020/01/index.html","70e72ec74f7d140e16bfdaeb41550ef2"],["/archives/2020/02/index.html","c969b724f8eede0ff446b165fe7e8edb"],["/archives/2020/04/index.html","b648b2be89b861bbd1d247bcbcc04f51"],["/archives/2020/05/index.html","03c43027d956d7bdb67227b0bc1854ee"],["/archives/2020/05/page/2/index.html","6707da12a94396c1fa33912d5bff8daf"],["/archives/2020/06/index.html","52db5829c1d0184d4093928cfda7cd93"],["/archives/2020/07/index.html","f41f534d76ceefe700311daae0f05fe5"],["/archives/2020/index.html","052a751d4f238d7dca8c51a7ccdc5806"],["/archives/2020/page/2/index.html","933d3da65de68d123b6ba59507f241e4"],["/archives/2020/page/3/index.html","b29b8bdb9e0e24663c3f72dd19726cb6"],["/archives/2020/page/4/index.html","801aad9ddedfeb853c38677718081b7f"],["/archives/index.html","61830d8f0ba1485b945545b2ce5450e9"],["/archives/page/2/index.html","d50ab377c52914cf40d54679e7b91769"],["/archives/page/3/index.html","36aeaeb8defde8359858e9ca74218083"],["/archives/page/4/index.html","ef71b135414458ff735f4adb3612dc84"],["/archives/page/5/index.html","7f50f9076100bf7a35c199c5703571ec"],["/categories/index.html","757e88b16e2cb930c7157b76c2ad328a"],["/categories/技术/index.html","d9418630530f5f43e72a0ef1981b0fd1"],["/categories/技术/page/2/index.html","2d79f7c78a464a677990130ec810ee98"],["/categories/技术/page/3/index.html","00ae3ce50b0a8998bc7025ec67f83f3b"],["/categories/技术/资源/index.html","3d499f759250c8583a0a188239ac1543"],["/categories/技术/转载/index.html","704db5b65e3d8c962cd9535160d5c9d9"],["/categories/杂谈/index.html","768afcd143134618f604ea594cccfcb6"],["/categories/生活/index.html","8c38478a66d634b19a417df73f333eee"],["/categories/生活/技术/index.html","9774b8b239e21700da94571546f4affe"],["/categories/生活/技术/转载/index.html","6c6391342861ad212196b3f4e1af1f3f"],["/categories/生活/随想/index.html","8991c335d569f3642fea0a53a5ed90bb"],["/categories/资源/index.html","f6cbb48c1061d95522b4ace3606af9b0"],["/categories/资源/转载/index.html","6b4b7004274f0ab0461cafd5690fb3e3"],["/categories/转载/index.html","6cb10af16f451f9df4418abbfc7cd625"],["/categories/随想/index.html","d34a67e16b2c601be440aa57b2aced15"],["/css/highlight/a11y-dark.css","5daf038114ea86421a09f393e8f44fd9"],["/css/highlight/a11y-light.css","3da3275f3bf82a039d65eef48f79c250"],["/css/highlight/agate.css","ea5efa8c1a0b6eb43bb836daf3806c38"],["/css/highlight/an-old-hope.css","768f752161305aa85fef8514680381d0"],["/css/highlight/androidstudio.css","3fcd43f6216868ae7f50abe88830b3a2"],["/css/highlight/arduino-light.css","b23f2cbef57ea7d2ce2509e438cfa69d"],["/css/highlight/arta.css","7f89845883c034c705337e81e88c56ec"],["/css/highlight/ascetic.css","64186b20d00f1775b7c23850f1663604"],["/css/highlight/atelier-cave-dark.css","895b4658ddcd99a2edefc6f325c70829"],["/css/highlight/atelier-cave-light.css","fc0e7de164c011d8dbd08a4d0d5b844c"],["/css/highlight/atelier-dune-dark.css","a4a4d59a71241c3286e40c3af2530cb2"],["/css/highlight/atelier-dune-light.css","b65826c715d6204b241c61b841aa778b"],["/css/highlight/atelier-estuary-dark.css","c273cbb281f34d1650f1b8bc03e81521"],["/css/highlight/atelier-estuary-light.css","a4f07093c5e696440a386fccc065efb1"],["/css/highlight/atelier-forest-dark.css","52614a767ec366f865d51e523326532b"],["/css/highlight/atelier-forest-light.css","f82fe04cefeaba3f38194cdd7dd564a9"],["/css/highlight/atelier-heath-dark.css","a382c2300deddabf38440fb08023cdb0"],["/css/highlight/atelier-heath-light.css","84884addf62e8b1b72ac166a5f0f129e"],["/css/highlight/atelier-lakeside-dark.css","add8d7de7e5f19f646f26d3eb8eb1d78"],["/css/highlight/atelier-lakeside-light.css","b0f0bfe94033714a3a1d2e58837c38b5"],["/css/highlight/atelier-plateau-dark.css","7a0dbe69c099c0216357c81c999e5675"],["/css/highlight/atelier-plateau-light.css","7f2dab12b523783826307f4607a4cc0e"],["/css/highlight/atelier-savanna-dark.css","fbbeb2d123141054d8fc065f5855046d"],["/css/highlight/atelier-savanna-light.css","76850ab6f48b6e4fa6348be217345691"],["/css/highlight/atelier-seaside-dark.css","3e12a07c1f3951dc82bfced8a4173f17"],["/css/highlight/atelier-seaside-light.css","7967572d4ea588c7236021fba6390213"],["/css/highlight/atelier-sulphurpool-dark.css","2ef8f9db0b9211b17669dc6f8500bfcb"],["/css/highlight/atelier-sulphurpool-light.css","e03dc194e5784ebc6a041bfca923f416"],["/css/highlight/atom-one-dark-reasonable.css","8cc7e61eafa1488825ffcdf19b36ff27"],["/css/highlight/atom-one-dark.css","42a6b2a08a65036cb4a973f6d2b9a11d"],["/css/highlight/atom-one-light.css","efd8fb89e831b44b064a857e088a4ef5"],["/css/highlight/brown-paper.css","46cec57ca8f755de3e9439bff8bfe0e1"],["/css/highlight/codepen-embed.css","b8e99cdf2c2fad6a7af78eb7024c4813"],["/css/highlight/color-brewer.css","1ed1bc8c2a6cf73c7802179bfc61288d"],["/css/highlight/darcula.css","9eaee91de0b1db4a78d1eddc9d5eefa1"],["/css/highlight/dark.css","aec2654da47bddc7729b606098b968a9"],["/css/highlight/default.css","b2081a0fd5892a40e673f6a933ab20fd"],["/css/highlight/docco.css","56a5669b2ae3b195a5993fb37f9a8e78"],["/css/highlight/dracula.css","f84d80f8d1c8d8370b1d37699f54b6b9"],["/css/highlight/far.css","2509423c69806424c1903ef89a20d31e"],["/css/highlight/foundation.css","4d52bad8af60533ffa332b82a2ee338f"],["/css/highlight/github-gist.css","0509c099e63bc57431f6fb1cecf13adf"],["/css/highlight/github.css","0033907f1fc70cccb3922b09ea3341ad"],["/css/highlight/gml.css","b2bffdab401a811d02134d423e95b0d0"],["/css/highlight/googlecode.css","0e49f65b37dd033cfe518cac43e85391"],["/css/highlight/gradient-dark.css","ed98d874a4f819fea9fbfeeca3cfdc23"],["/css/highlight/grayscale.css","d02652e58473c241ab00100fb9e251c0"],["/css/highlight/gruvbox-dark.css","ed5c259515e7249f793404829d4f8efd"],["/css/highlight/gruvbox-light.css","c796ec6887c24d74c36e2713d30014cb"],["/css/highlight/hopscotch.css","d1fbc2b40252e0fafd8a4281645bfc97"],["/css/highlight/hybrid.css","34f14f451eb628ba19560e35933111ea"],["/css/highlight/idea.css","ee1acf1093d902558771ccff47e0abde"],["/css/highlight/ir-black.css","a64f4f72fc9f24c63c9c329aaf407a96"],["/css/highlight/isbl-editor-dark.css","67dda13bc5316b334a296a96e54b674c"],["/css/highlight/isbl-editor-light.css","3526b62c2f5f06249dd13cd7f579b733"],["/css/highlight/kimbie.dark.css","07010b513cd2a73ea43aa16d0130d763"],["/css/highlight/kimbie.light.css","d6274fbbb4875535a1175190bf5887a5"],["/css/highlight/lightfair.css","1d408f02e366f6e8adf2dee9d7597fda"],["/css/highlight/lioshi.css","fe15686d1732de57646a201637a3c3b5"],["/css/highlight/magula.css","1037171354ce888c8b0b325a851cb3eb"],["/css/highlight/mono-blue.css","f0ecab13d7975953e52071c961168bc3"],["/css/highlight/monokai-sublime.css","2da77e9164716278e8a138cadd1d38a1"],["/css/highlight/monokai.css","ae390eaecffb86ee2a8b0057a89086c4"],["/css/highlight/night-owl.css","ee5ddc5487b1ebd3f7d83939366e46a7"],["/css/highlight/nnfx-dark.css","b95be72fa68d7eb889a73b6e95afcfb3"],["/css/highlight/nnfx.css","170c47592e6b5e4eeafb7bacb3f5de07"],["/css/highlight/nord.css","c6e0d5f0b4b0411ff918d4d1af750295"],["/css/highlight/obsidian.css","1e509b47dbe3ddb2df1f92e79d3ff516"],["/css/highlight/ocean.css","c06e03cf1f8f7346c53db51dec25a9b0"],["/css/highlight/paraiso-dark.css","b203f0764f2c54e0b8e59f542ad40d98"],["/css/highlight/paraiso-light.css","1677aac55d70ab3ae3dfe6e4437e153d"],["/css/highlight/pojoaque.css","5569521e436234b01fb47bf0d7f57f6b"],["/css/highlight/purebasic.css","b18e7dad6be15a16df270b295f0d9721"],["/css/highlight/qtcreator_dark.css","2cb58a31a8ebe6da43bb3235d0198da9"],["/css/highlight/qtcreator_light.css","70290bc0cabaa6551549fbb9a5790676"],["/css/highlight/railscasts.css","c96d176ed2aa2548cd7c21ac79b09c39"],["/css/highlight/rainbow.css","fec483218bd49cc4981083c2054a53ae"],["/css/highlight/routeros.css","de22a842480183ffab92cbc5db5679ca"],["/css/highlight/school-book.css","f137cb6dd0e0a3479649c0deefd7b2e5"],["/css/highlight/shades-of-purple.css","1c4ebffba28225391ce14c6c0663dc9f"],["/css/highlight/solarized-dark.css","bb6f2a13926900d97b1b5cb20d5ed99f"],["/css/highlight/solarized-light.css","0eb5d4aa7c24716148a252d1a7607cee"],["/css/highlight/srcery.css","81e3747f93cde9d5c561ffcd6c963c30"],["/css/highlight/sunburst.css","9613facdb2f57ce664157cfc8c16dfb0"],["/css/highlight/tomorrow-night-blue.css","582de335bcb59597b8e12c14cf57cf0d"],["/css/highlight/tomorrow-night-bright.css","50e4ddc480ae65b0556661ef83f0b5a1"],["/css/highlight/tomorrow-night-eighties.css","f7a40c592cc98fd25cab947b4ad305ba"],["/css/highlight/tomorrow-night.css","049d3005dc9f6ea262f31df615f68699"],["/css/highlight/tomorrow.css","ed7345709fb7ad695676c821f8846f42"],["/css/highlight/vs.css","1bff0676283d9b3bdcfa45b9aa0654f4"],["/css/highlight/vs2015.css","1e356660d28f578e486ea4c3548f8ff8"],["/css/highlight/xcode.css","4587d27e8a2985657b97a8e6009034be"],["/css/highlight/xt256.css","b084352bac0bea28281111afff9b26c3"],["/css/highlight/zenburn.css","42f9cb30912672e1772d5e6cd3d52dce"],["/css/style/dark.css","221ffd6c78f4f47bc05fa0edd60eec51"],["/css/style/main.css","13cc9cb13a5563f7ade62d2d9a0bd30c"],["/css/style/note.css","a6651e5ff09806e5b0c19dd4a27ab8d0"],["/eating/index.html","441ac0b067632c9e69083e99fd86eef5"],["/index.html","9745dc6ca489e1ad775045664105ada6"],["/js/b2t.js","cd0f8ec03fec335251ac9c0c051f7cbf"],["/js/darkmode.js","96eb9ac7f1c1f415261aa7dd6dc5f024"],["/js/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/links/index.html","d44478db387e0d2ac5c671cf5796d678"],["/links/link.html","51bd2edb0ca245aa17e29873e1da4018"],["/page/2/index.html","c52698ced81a4b31eb4e0086b474ff46"],["/page/3/index.html","e6f36aecb56ef1afc3046c8684d280d0"],["/page/4/index.html","ab9252176b2dea354cd57b2be463a42a"],["/page/5/index.html","a014272337a97794a3622724ee0e25e9"],["/posts/10798/index.html","7bc6275c335ada77c42a397fe35ddc83"],["/posts/11961/index.html","8b4695da0dab8050bd0fdd580f3dc34d"],["/posts/13009/index.html","b5f517f6121e4ff58e752201120d4395"],["/posts/1478/index.html","a6216df86fc8191fdd18d8361ae4da54"],["/posts/16931/index.html","bd9cc9dc524eb1125fe2e996e8300bd7"],["/posts/20708/index.html","a46086ede259a879ffaa9830aae8a7a2"],["/posts/22338/index.html","caab1779f22d9de299d38e5ec292854a"],["/posts/22378/index.html","306b44f8f75bb90efd3f4b4da100bd3d"],["/posts/24380/index.html","a678d1c2a90cd33b2d3cf0e838db64a0"],["/posts/26484/index.html","5815162e552034d874cd3ddd9eb6d80f"],["/posts/29606/index.html","074e96499bd73cda96113595ae4ebf95"],["/posts/32449/index.html","5f9c03b88915f546bc04280f4c04c6ff"],["/posts/3315/index.html","329fa405562d4d6c30101a3134eaf24c"],["/posts/33197/index.html","0e1e630fcdbb72d379af3df9851e1676"],["/posts/33306/index.html","05cb00f0d9df575d2c063f1efdc46c9b"],["/posts/36128/index.html","22cd2ffe0874c11cf7d7b20f68d3806f"],["/posts/37557/index.html","557e96e126305b903647a3fb6195011e"],["/posts/37773/index.html","898d6e19fd110cef0c419bbc94d65a87"],["/posts/38589/index.html","4ffa13db493f100d995f02d7f8a0f50c"],["/posts/39661/index.html","6e5d35cb60b06913353adc0769666d7d"],["/posts/39842/index.html","e31000b1b6eaafb3e142ef2afe9eb7a7"],["/posts/39942/index.html","9a269a1b29f97836316d500fb695dcea"],["/posts/44194/index.html","8c5107151db804c5fe25d2bba2f0efc5"],["/posts/44804/index.html","00146ff3ac48f103f47c6436b3a97ea6"],["/posts/4588/index.html","97076c8f28a09ecdcc21d8ac9238a04b"],["/posts/48089/index.html","362b03040da443ba768e4e952241bbff"],["/posts/51892/index.html","efb56c289763b4c735fe530d99ee7c1a"],["/posts/53289/index.html","f60b14159ab1e96ca6b44778f8811d69"],["/posts/54711/index.html","1861989a197749bc5b1e65ddf9c5ae8c"],["/posts/55302/index.html","d2e57575eec83b97e9a25cc52e76bf55"],["/posts/56653/index.html","bfe34cb639cba335936df4ef48e40d40"],["/posts/57345/index.html","f53b5d31a1171d91f51e1ace6f5a6d55"],["/posts/60197/index.html","c1fd28d8e1af29cef22e4bcc4949735b"],["/posts/60788/index.html","1883fe4059f39c9eb06180df795184c6"],["/posts/63676/index.html","a8ff7b9ef4d8f60125450d6d0010f80c"],["/posts/64257/index.html","d108a60ab6284a41bd7d6debf07cc475"],["/posts/64865/index.html","486cf9307c97c45020a76d210e3c5ac2"],["/posts/65311/index.html","9a53d074d9d3615a1f61436565e0e799"],["/posts/7324/index.html","5c1b4914f137387cd1062600d6b13c0d"],["/posts/8688/index.html","a43c39f9e5f7effad9232388f9c2c00e"],["/posts/9687/index.html","7dcd2efafce6fe6e54a7936bebf0ad3b"],["/random/index.html","09515b41d10507dfe30833fb5544b2ef"],["/sw-register.js","42ace52a4bdb3caa3ff726d62aaebef3"],["/tags/index.html","be712a10b3a1330b837e8139588775d3"],["/tags/书单/index.html","30f7168fb13fa9a4212b83d85ac85804"],["/tags/公告/index.html","bf7007029178c2db36d503fa9e989c19"],["/tags/悦读/index.html","06bd0249082edf3f7c5a582a01b31c12"],["/tags/笔记/index.html","2ad62601f22e313335ffbca2546c4716"]];
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
