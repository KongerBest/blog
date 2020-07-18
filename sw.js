/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","83b175e9f3a4f26a55851dec1c4f30b2"],["/about/index.html","e8c867d3d28f78a9c8c48e16c745e8e5"],["/archives/2019/12/index.html","b328f0e279501c4536c170fd7a25e352"],["/archives/2019/index.html","e55ee140fdc128e78de53e072f8d2add"],["/archives/2020/01/index.html","6f7034d88ded6e17547ffd86e5f34f05"],["/archives/2020/02/index.html","a0c48e3d174299eee3042bad3b5cdedb"],["/archives/2020/04/index.html","6d714ee71df6930df237e14f47ad4066"],["/archives/2020/05/index.html","5f13228e28f121937de1e0b0c4e8619d"],["/archives/2020/05/page/2/index.html","bbf1da1ad2d53c7694f8b11a6ecf552d"],["/archives/2020/06/index.html","2e33c0888239cf9ec914b7bf7f83a8cd"],["/archives/2020/07/index.html","5c133d7411303d09f72f2cf6c145a900"],["/archives/2020/index.html","f0647b61e530cf17e058230fc30f200d"],["/archives/2020/page/2/index.html","04370e1225ae1e56c1ab074aec9da518"],["/archives/2020/page/3/index.html","b13ae4475c4fa99b62f92dd0698e5a12"],["/archives/2020/page/4/index.html","ba62c13e39cd63eb5a1158d9d98dbebc"],["/archives/index.html","12ecabf23fe640697e60659ca6b68a44"],["/archives/page/2/index.html","323d8b508578b93bb8ac9ac7aac932ad"],["/archives/page/3/index.html","3808f44a131e6a72f2ab5e725407c77e"],["/archives/page/4/index.html","996b3568fbb752d3557b8c46d5596640"],["/archives/page/5/index.html","6c8d8d7beb537da0ad9d56056338f749"],["/categories/index.html","de905c5096b0500bdc048c6ce7970442"],["/categories/技术/index.html","f3e561e2fb4b70fdc441e3f581ec9bf3"],["/categories/技术/page/2/index.html","7d77ff574ad3c185a928f49fdf6b1361"],["/categories/技术/page/3/index.html","5a528ebb9659280aaa9214808b92fc8d"],["/categories/技术/资源/index.html","c532cd4173912b236478a428312a5b7a"],["/categories/技术/转载/index.html","9691cd71dc89845bbe549393bcc8968c"],["/categories/杂谈/index.html","bbb67c91819c55b92dc9512f092087cc"],["/categories/生活/index.html","1fe4ec76e14be22c67e1577febe6cd5d"],["/categories/生活/技术/index.html","2d49806de7d40db398319ef7e77f2a20"],["/categories/生活/技术/转载/index.html","5cebefe17f8d50bea38146c68ca3c345"],["/categories/生活/随想/index.html","0aa9a5f7e6544d4902a0327528ce84cc"],["/categories/资源/index.html","2ba5f67d5d3cff20d6c88fff13e54519"],["/categories/资源/转载/index.html","367853a108e3ddc14bfc2116c2608224"],["/categories/转载/index.html","aaab6d73ea3ff07b6a56fb8fb902a051"],["/categories/随想/index.html","4e21c1905a936a247a264735dfcf3b09"],["/css/highlight/a11y-dark.css","807962f2711e42f14601bb73e9831eac"],["/css/highlight/a11y-light.css","588c3eb75f6f276ef794e93523a5b5c4"],["/css/highlight/agate.css","61dc31f7d272f7a6384f691f126c2cad"],["/css/highlight/an-old-hope.css","95c437b5861cc12496fdec1f01872bfa"],["/css/highlight/androidstudio.css","0e5821574e78ff62fa6d1e8b70d6d158"],["/css/highlight/arduino-light.css","a4a2a02941f6f2c4187f23c0baa7e654"],["/css/highlight/arta.css","8e13bb492d928a1ea8938b0c76203fb4"],["/css/highlight/ascetic.css","d06fae1a866ca1ff8e3f4c6280f3dbdd"],["/css/highlight/atelier-cave-dark.css","964291b4eed0d549d3c857e24390ea64"],["/css/highlight/atelier-cave-light.css","ad4cfc2c561f3420fe2e3ff699b7c682"],["/css/highlight/atelier-dune-dark.css","f6272e6cd021071d77f64ce98461f4c0"],["/css/highlight/atelier-dune-light.css","8865a6eb59bbaa0db1ea8f7f08ea2197"],["/css/highlight/atelier-estuary-dark.css","de3b102256dcdab0087eb4b218c89a79"],["/css/highlight/atelier-estuary-light.css","21273752bec8da0e0ae6a751c4621b07"],["/css/highlight/atelier-forest-dark.css","d1dd95d0adf8a43b91e06f0947543330"],["/css/highlight/atelier-forest-light.css","03e059c7eac685f126d905f657a9c80e"],["/css/highlight/atelier-heath-dark.css","90ee58be858f15c2a585607aebf02bb4"],["/css/highlight/atelier-heath-light.css","ad389e93f0226b901feb4a9b0b2819fb"],["/css/highlight/atelier-lakeside-dark.css","811cef0db1db1afcc8ffc8017b9e97f7"],["/css/highlight/atelier-lakeside-light.css","d3404be998496c7bdb554a01cfe35e9c"],["/css/highlight/atelier-plateau-dark.css","42704bc692e560f12dd531d9c62dc8f1"],["/css/highlight/atelier-plateau-light.css","fdad8e9a8f23e6872b5d368d755d6091"],["/css/highlight/atelier-savanna-dark.css","6c1ef844ff1efa52a6b44779c1cc79bc"],["/css/highlight/atelier-savanna-light.css","27a19c627fa92da309f375b543e07f84"],["/css/highlight/atelier-seaside-dark.css","fbc4def660d411a36b7853d39e241072"],["/css/highlight/atelier-seaside-light.css","0a1fa61be6539f34f251773879c64934"],["/css/highlight/atelier-sulphurpool-dark.css","ef59fb4baeaa5ed756896ad427a6f5f9"],["/css/highlight/atelier-sulphurpool-light.css","ad0c58e2f445765d51dafeb580725bf6"],["/css/highlight/atom-one-dark-reasonable.css","948e1c1eab0f7b9452cdd1ad3e1f6c0e"],["/css/highlight/atom-one-dark.css","91bf89c12f296eac77cd99336b9bd506"],["/css/highlight/atom-one-light.css","cbb746817c11a4d23223126da5b14c95"],["/css/highlight/brown-paper.css","790f230a3007e5183f3561557f82dd69"],["/css/highlight/codepen-embed.css","2e0e9f82979f4f276776eb65b0055fe4"],["/css/highlight/color-brewer.css","15dd325e662e0dc4d91bd33be9151bd6"],["/css/highlight/darcula.css","d4b74c630917712102d6c1d65d2e84d9"],["/css/highlight/dark.css","a6844c6579f53c4d42214763e681f94a"],["/css/highlight/default.css","a92c0f0ae4ca1143864acb1c66a19697"],["/css/highlight/docco.css","367d9203393ae47d9225b1081acc14f3"],["/css/highlight/dracula.css","f3ca7394f6b7e29db4d42100f28a7ff8"],["/css/highlight/far.css","1ee0452a604b149a64279b3b07edd521"],["/css/highlight/foundation.css","04d2a95a6962ee1bc76e53753d4bb721"],["/css/highlight/github-gist.css","4f0d28a83fec287d1b50e28586801900"],["/css/highlight/github.css","1db2cca6202c3f5cd66e267741bee8b5"],["/css/highlight/gml.css","c78734b18dd65cabc1ccbeea2f9e0dd8"],["/css/highlight/googlecode.css","9dd9748dde00cdd54794e42f6a1aa531"],["/css/highlight/gradient-dark.css","e5ca16bbb6f1c043832db395e5cc138e"],["/css/highlight/grayscale.css","fa304c20848b755e4f6e4f89c35e5e2d"],["/css/highlight/gruvbox-dark.css","d6b0e9635631a285fb19e1e64417fe0f"],["/css/highlight/gruvbox-light.css","32a4c4ddfd8937d8775d7f5192e80cdf"],["/css/highlight/hopscotch.css","5b4797d07998924ce4bd5e9bbbda709b"],["/css/highlight/hybrid.css","71d088c00bc40b406ae259c4ac1f8a90"],["/css/highlight/idea.css","bb758fecb96d2536c22c75cd2b6e032f"],["/css/highlight/ir-black.css","3a8c16901554f82de88c430daef70249"],["/css/highlight/isbl-editor-dark.css","8b82235ec7089abdcf3973d3b235e71d"],["/css/highlight/isbl-editor-light.css","3a3a9aceaabf87a7f3465043d56368d8"],["/css/highlight/kimbie.dark.css","94dc7cf9351a9ab14b21e98164c123af"],["/css/highlight/kimbie.light.css","c69f677b0daab198a4b82d892f201957"],["/css/highlight/lightfair.css","df68aa3f8f42af38b316e00c8f805721"],["/css/highlight/lioshi.css","ce042259e4244565039d363aca99bc0a"],["/css/highlight/magula.css","4f0ab4cbeb85ba7c2d7de3ab292ddbe2"],["/css/highlight/mono-blue.css","4cf1c15c0a7f45870e1d906749f45150"],["/css/highlight/monokai-sublime.css","f61561cd6c507a827af106508b5e12cf"],["/css/highlight/monokai.css","0388cc246f4af7d11c42c4cd837e9537"],["/css/highlight/night-owl.css","7106e213b28b7c5e6a3fd92309c0e647"],["/css/highlight/nnfx-dark.css","2ba0052b7ddc226204ad6b14a11015ea"],["/css/highlight/nnfx.css","22aae088235091e5ea58b268245497f8"],["/css/highlight/nord.css","502be97e17b8823bb63f18df99018034"],["/css/highlight/obsidian.css","b05c04a5e57afdbbd005ec98660c7729"],["/css/highlight/ocean.css","a0b09253f94d5a4b69ee77102b17d681"],["/css/highlight/paraiso-dark.css","9f350bacc49566ed41b981c58a66e636"],["/css/highlight/paraiso-light.css","c8cbdd9fd944a1794763bf9eb09f5d82"],["/css/highlight/pojoaque.css","a47ee867c78e597452f50e377892129e"],["/css/highlight/purebasic.css","ce326f5768dea8d8b54a7da0c5b1aecb"],["/css/highlight/qtcreator_dark.css","4643bb4ca2f43044ef952c2d0a4a80b3"],["/css/highlight/qtcreator_light.css","69292aacb1b90c666d892bad80a8ea1c"],["/css/highlight/railscasts.css","6df7c50c7d52692ce33c24031340623a"],["/css/highlight/rainbow.css","21e6718a59813a04225e9603f2ed0887"],["/css/highlight/routeros.css","7e0c28c0d7e1321d1f3f3198f1c39e04"],["/css/highlight/school-book.css","99c0de39f72204fc1d4369a3763f721f"],["/css/highlight/shades-of-purple.css","2bb26ca08f6ff4502b9826af15f780f4"],["/css/highlight/solarized-dark.css","329913cc8057d16015573968fb92659e"],["/css/highlight/solarized-light.css","8587e9d6fa437a8db768bc56930d8f9f"],["/css/highlight/srcery.css","e70136f18802aff288c8f2f8556f3fc0"],["/css/highlight/sunburst.css","35616e5247d9a01077f1caae6e4689dd"],["/css/highlight/tomorrow-night-blue.css","abfa1e00b4d47e5ed162756ffaa1a613"],["/css/highlight/tomorrow-night-bright.css","4e8d031c2bfe8d12e3530590c3f2844e"],["/css/highlight/tomorrow-night-eighties.css","c04c4508ed18f5e465c5bf8d80186dfd"],["/css/highlight/tomorrow-night.css","8180f59edce82ed872e37e5ebdff4e79"],["/css/highlight/tomorrow.css","8cd8f2728d71c8ea84950df59f6ff52c"],["/css/highlight/vs.css","48713ad950bd0fd7150dc8aa81240b82"],["/css/highlight/vs2015.css","36d968ae3580b579bd5838dde2f7d60c"],["/css/highlight/xcode.css","e2c4a98ad007be0252d1d8a3c1d5005c"],["/css/highlight/xt256.css","7df8e17c14b31b38fed991d2d315a10b"],["/css/highlight/zenburn.css","fe8118a149217ff41a05f15f805c4f6e"],["/css/style/dark.css","858d7ab34560f92182796f4501cf334d"],["/css/style/main.css","4fb5297c736483ef224f8c8b3ee46128"],["/css/style/note.css","810362c04de7118b42cf18ac3b1a425d"],["/eating/index.html","884fa493d79f8080acb5470f22b659ff"],["/index.html","f5aa5965a62286735f5163a8bb126ce3"],["/js/b2t.js","cd0f8ec03fec335251ac9c0c051f7cbf"],["/js/darkmode.js","96eb9ac7f1c1f415261aa7dd6dc5f024"],["/links/index.html","a55f0824b664eadc95f1a65537d7e942"],["/links/link.html","6a35952e59ecbfc42be7357ca864700d"],["/page/2/index.html","922e8e23942daa5b26649a25e27f1a1d"],["/page/3/index.html","fd55d7068ce0ff0f3b9821e65fce7cc7"],["/page/4/index.html","45147b6abb3cbca521b545f177c91541"],["/page/5/index.html","f61f5a875ddde662ad6171dbebd4012f"],["/posts/10798/index.html","f797f00a593934b6940e4fca848cdf3f"],["/posts/11961/index.html","f46f238eaa8cc6ea2e7a60689e3a5536"],["/posts/13009/index.html","8e09b8a4e505a9a2c326a30b93223aab"],["/posts/1478/index.html","444ae7e8b6326e9be569246099eaf02e"],["/posts/16931/index.html","389866679be4746009ceb064f4c118df"],["/posts/20708/index.html","e285fdc196cb62433cc9542075501e45"],["/posts/22338/index.html","63a059753e655ce79ddc5eb8b2b0f605"],["/posts/22378/index.html","d8e27c1e84081262c827d33517ff38dc"],["/posts/24380/index.html","ea4f66e707824099cd5dd2688222d1e3"],["/posts/26484/index.html","5ae3a2779c431be3baab222d6192c42f"],["/posts/29606/index.html","6d534782d0fb50c7978363a7f82e556f"],["/posts/32449/index.html","63feda0cbd4bee1a5d16db4b8127828c"],["/posts/3315/index.html","26c11fc79fcc0884a17495120c7f5706"],["/posts/33197/index.html","b3eaaa19a1e0a595143daae2cd57c828"],["/posts/33306/index.html","b2970a8eab4b6f3abef26a653d37d777"],["/posts/36128/index.html","ca33d9423717e2e50ab783010fad3524"],["/posts/37557/index.html","8f1afbcea11da924f951d8dbf6f0463b"],["/posts/37773/index.html","75b8515177de45a91028395a4a1270c4"],["/posts/38589/index.html","657d253260bb495034693f6b18c7ecd2"],["/posts/39661/index.html","69981c9972261c3275c444d660d213bb"],["/posts/39842/index.html","f9710107815248b8b5ebabfcea773171"],["/posts/39942/index.html","319512bde8ecd6dec04dce91e81ba7a2"],["/posts/44194/index.html","d0bfc0ea6c398312ae4d18dd9f8dfd78"],["/posts/44804/index.html","978488b74df41387192ba40567d065a1"],["/posts/4588/index.html","d72e9f55da3724d301bff35720755ace"],["/posts/48089/index.html","bab96aaae0dc5f32e842e735891f50c2"],["/posts/51892/index.html","a8802b1e843e9df88d0a0a25a1f1629a"],["/posts/53289/index.html","586a077daf67c49f2f4664c24e840d0b"],["/posts/54711/index.html","18182d4fd676bb7ee42c7d742fa09b96"],["/posts/55302/index.html","efe4defcb20590f53c09b66bba955f5f"],["/posts/56653/index.html","6aee4a98f4d14fbce83bccba86c20443"],["/posts/57345/index.html","f1d6f98ab2a136c57cfeb6c513120c55"],["/posts/60197/index.html","9da0bf5e9a9a1ccc60d95751dd5e60fc"],["/posts/60788/index.html","3750cfa9910491185fca063e4862c5a6"],["/posts/63676/index.html","27d36c0a090916b05458d23c24ce674d"],["/posts/64257/index.html","d55d6866d9c7befa5ac9c0e19f73a05b"],["/posts/64865/index.html","1e5262907f722ed566daa07f7f7db670"],["/posts/65311/index.html","03c18b5a868b9bb9a388cdd7793c716e"],["/posts/7324/index.html","7e7c587148d8a3daf4c12501d969ee30"],["/posts/8688/index.html","b56b032e4970f4405259271cc805b01c"],["/posts/9687/index.html","b86b38c384cd06d17d2078efba26e189"],["/random/index.html","26902f8119acd8e085f6f211dd60b22f"],["/sw-register.js","c8af8cc9307e008eb5d4469f0d24f374"],["/tags/index.html","68ccdff386c7882f79267148592e0540"],["/tags/书单/index.html","9aa74ec86c928f8b375c0a804e073fe0"],["/tags/公告/index.html","72548d60cb3bf6fdcc1e6f0388217396"],["/tags/悦读/index.html","5287c93b1ae12116031f18437b95b699"],["/tags/笔记/index.html","190c790585950b49dda6a60b9afe2679"]];
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
