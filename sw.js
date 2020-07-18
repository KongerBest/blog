/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","70db55908f722e63b879ac844fedf9ad"],["/about/index.html","bb5f65d1e0ca3b25c2aca3397ac95404"],["/archives/2019/12/index.html","d5c0e36a71bba11aa0e1a74dd8824ce2"],["/archives/2019/index.html","abaed8333b29a232cb7cd957653b59d4"],["/archives/2020/01/index.html","2f60c5e551d9f534dd40196996a9b09d"],["/archives/2020/02/index.html","fe23bcbe80a66ce2215a4100569e8f76"],["/archives/2020/04/index.html","9de777ed3cb408baa25b5b2ed038a4d0"],["/archives/2020/05/index.html","e90875cd876a0ae52f3a47321f3bb575"],["/archives/2020/05/page/2/index.html","37ec0080f152a6f9bd50d7b4d36128ad"],["/archives/2020/06/index.html","0ad8d17be6374458830d4414176b566e"],["/archives/2020/07/index.html","948cd37857552fdf31edf3fc3cf13fd5"],["/archives/2020/index.html","6f5632609296e108358ef40488e82469"],["/archives/2020/page/2/index.html","2967a840800845e90516a00e9b9d4e84"],["/archives/2020/page/3/index.html","3435208e87c250d851b83711a3138450"],["/archives/2020/page/4/index.html","26eef76010f834fb4c12eaedd72a427e"],["/archives/index.html","bee34f33b590df960e37ae86264bce4e"],["/archives/page/2/index.html","34dbd1c35b1904434611b22b0109be21"],["/archives/page/3/index.html","49cf3d270983308dcb6c60fcad8a1447"],["/archives/page/4/index.html","122feb4eeed5a9a3f0c712b550e2496c"],["/archives/page/5/index.html","0424ba0b84edbf54a7984f7be9c79912"],["/categories/index.html","7d241ee2772cb317006089f9b52d42fc"],["/categories/技术/index.html","e6c53b9015d0b01405c0337fbedcce36"],["/categories/技术/page/2/index.html","770fc808b3fd2cdc9b7bfe7280a31036"],["/categories/技术/page/3/index.html","50687d1c24610f6c158e036d7f92385b"],["/categories/技术/资源/index.html","6d61a57e397c5c2103daff6c7e63ea91"],["/categories/技术/转载/index.html","3964ea52d881d1e922340f33434fdaf6"],["/categories/杂谈/index.html","a0c56870361313ab245c786dca120383"],["/categories/生活/index.html","28078d0e22946fb0ec7c354d9c1924ee"],["/categories/生活/技术/index.html","584a59a92fe89a28129687dba27d1a91"],["/categories/生活/技术/转载/index.html","cd9408b18108ab9de5a4d17f39b96e93"],["/categories/生活/随想/index.html","8f9390a35ccd257ee96ce584b50adb04"],["/categories/资源/index.html","4940f56fa625c4f8760f40b48ef469b8"],["/categories/资源/转载/index.html","45b06e574cef754327074d24087dc11e"],["/categories/转载/index.html","9d752df0fdd006883d92f6312dd6fe2e"],["/categories/随想/index.html","a338d0bf8dad10dd6100854134479509"],["/css/highlight/a11y-dark.css","add587d16e4ef2c2390c7987ca8a55de"],["/css/highlight/a11y-light.css","efb550990fe05d382b285dff13f60a4d"],["/css/highlight/agate.css","e31d97eadcc08b22ba0058a651d85aaa"],["/css/highlight/an-old-hope.css","1eeb2283ecd1dafa03261f0a5589a966"],["/css/highlight/androidstudio.css","b1a0602b67b00c683ce155fa0345481e"],["/css/highlight/arduino-light.css","6e8857a8bb7c34b7831d6663cf1c366f"],["/css/highlight/arta.css","8a4d8aa5cf9343a82311a6af9916b5e1"],["/css/highlight/ascetic.css","448531ffc430dd34d89e049eb9e216ef"],["/css/highlight/atelier-cave-dark.css","cc40d6cac271226280707d99ae2b7ba5"],["/css/highlight/atelier-cave-light.css","de725c8a87ca6b3983bfd8746a62370c"],["/css/highlight/atelier-dune-dark.css","80c906f10168d203ee05fd301bd06603"],["/css/highlight/atelier-dune-light.css","1f5e5ea9999fde73d1c0f084996aaddc"],["/css/highlight/atelier-estuary-dark.css","35516a04a7bd41bee1edbd129179100c"],["/css/highlight/atelier-estuary-light.css","9b0f268b40af07325e653b914063cc7d"],["/css/highlight/atelier-forest-dark.css","451a34216abbc36ffc8aac44ed8916b8"],["/css/highlight/atelier-forest-light.css","5c4436cea7244f340b24ec86fb35a97c"],["/css/highlight/atelier-heath-dark.css","9f2a881d96f37573c8f779544d51bfa3"],["/css/highlight/atelier-heath-light.css","2ea5fcd4de7f91c81ed3cf9226ec5bd3"],["/css/highlight/atelier-lakeside-dark.css","fa93102b2bf80abb68cbf3b8e3582039"],["/css/highlight/atelier-lakeside-light.css","7763643af846bd39acf44042c2153f36"],["/css/highlight/atelier-plateau-dark.css","f290fda7db0c2071fd90e99ebbff8837"],["/css/highlight/atelier-plateau-light.css","141d74caaa983f8c81171f86ed64fd1a"],["/css/highlight/atelier-savanna-dark.css","e0e1c4a4715e891ee8e6669bd64bb831"],["/css/highlight/atelier-savanna-light.css","50ec1c6d61d9135415bd8f704eb1546f"],["/css/highlight/atelier-seaside-dark.css","002c464134e2b400e4b26326770de8fe"],["/css/highlight/atelier-seaside-light.css","f0d4c987294452933b557a3417ca791a"],["/css/highlight/atelier-sulphurpool-dark.css","e2800852a27a35ae4713d6b6e153eca9"],["/css/highlight/atelier-sulphurpool-light.css","f0deddcfc23be8b0ac4543fa9ae4d71a"],["/css/highlight/atom-one-dark-reasonable.css","e80b4eec2d05f5c1a735988d68b651ea"],["/css/highlight/atom-one-dark.css","dde081cc182cfcd35f152259728143b5"],["/css/highlight/atom-one-light.css","9067e23224093defbf60a8d4ec6ce389"],["/css/highlight/brown-paper.css","45d0a5678ffcfaeb4d9725140ea8fde6"],["/css/highlight/codepen-embed.css","6ed6992bb122e81c169de50076cac444"],["/css/highlight/color-brewer.css","a0250ab6b83c38770634e48cb08edac1"],["/css/highlight/darcula.css","2180f4213b0dc865e91e65d9045f6cc2"],["/css/highlight/dark.css","75e408e4f3f3361c20b732c6971e3ec0"],["/css/highlight/default.css","9c9b9cb05a625be55333e2f2cf1ae430"],["/css/highlight/docco.css","174ef621e7dd89e488fd8388808108e3"],["/css/highlight/dracula.css","1329704431c5214cbc31babfa7255edf"],["/css/highlight/far.css","60e7d8c6795d07bda957cbadb6cdb063"],["/css/highlight/foundation.css","5195e2fb5ee2f5541e6b3061937775f5"],["/css/highlight/github-gist.css","64941114e622184534d1d2201f7792bb"],["/css/highlight/github.css","eb88d39c62602f886491e363a3f8d3fe"],["/css/highlight/gml.css","173c71ffc86059a96fe43562c388c0c2"],["/css/highlight/googlecode.css","746ce06ef7f77be6c3ba44a893a61775"],["/css/highlight/gradient-dark.css","714291dc693179d122a55c27b28f4b5e"],["/css/highlight/grayscale.css","922735c6c5d70dae894bb1489c941e83"],["/css/highlight/gruvbox-dark.css","40b37384d74f0b8b69510ac0446e2a8b"],["/css/highlight/gruvbox-light.css","3f87eac01d0c3c3a221a7f53c4bd5699"],["/css/highlight/hopscotch.css","1d334bfb3cd612625db920ee11354c37"],["/css/highlight/hybrid.css","9e66c6e4f0400c57f2dfecec05b845fc"],["/css/highlight/idea.css","bcdbe72593c7e42809ecca067bcfef06"],["/css/highlight/ir-black.css","21ad3336d2c838e670c9334e2221faa6"],["/css/highlight/isbl-editor-dark.css","09b33c1d5c584c9f7558fa96ef1f35d5"],["/css/highlight/isbl-editor-light.css","34afa9f2560affdf5eb3284250ee01c5"],["/css/highlight/kimbie.dark.css","bd89bfdf92a70414b3dc44998f8e6607"],["/css/highlight/kimbie.light.css","dbe6d19cfe8ddcf1fb4c9401fa56f49f"],["/css/highlight/lightfair.css","f995d2e6e365d4ae53206cc12cc204eb"],["/css/highlight/lioshi.css","5b6b0a6c937db781e446372046cb43a9"],["/css/highlight/magula.css","67cfe8ca858f3bf9b086495724833e14"],["/css/highlight/mono-blue.css","66d1d54773a6822a3a3b7be2f8859e6b"],["/css/highlight/monokai-sublime.css","f2e8e502190139e6a5e085edb111194b"],["/css/highlight/monokai.css","ccfdf759abd7fd7ff4b5b0374aef8f8d"],["/css/highlight/night-owl.css","20b792e30e21dcb01a04b0e75cbffa76"],["/css/highlight/nnfx-dark.css","18e0c03c19268c339efbbc51042dd0f5"],["/css/highlight/nnfx.css","9e653a1c2695ca759aaea0b1e5a68b5c"],["/css/highlight/nord.css","55dcb875b61fbfce5744a42947fdda60"],["/css/highlight/obsidian.css","67b5c31f1b3e6691d10651f32f14be5b"],["/css/highlight/ocean.css","120d6779f210eafbb09ad4f4cfa24cce"],["/css/highlight/paraiso-dark.css","d5d466aaaca6562517716d2455103fae"],["/css/highlight/paraiso-light.css","4d8d0461805656b1a05a2686d6962658"],["/css/highlight/pojoaque.css","a4d472ce219602981bbddaaa6670ca55"],["/css/highlight/purebasic.css","bf93316ac177b6e3b45ed035e8960645"],["/css/highlight/qtcreator_dark.css","04aee629fc8ed1205f3409e6d631e40d"],["/css/highlight/qtcreator_light.css","f27d349fb72451ae438f6af7187f0aef"],["/css/highlight/railscasts.css","43768e6dc1bc512004dcca4483b02e25"],["/css/highlight/rainbow.css","a10ce97e2532334ee037fbe6cb2bb162"],["/css/highlight/routeros.css","9605d435113c1b1538f74270e43c6c9b"],["/css/highlight/school-book.css","782180c48f5db61ad4db714f55fed9d9"],["/css/highlight/shades-of-purple.css","cc80e1cb56cf0a61319bf454d5a48337"],["/css/highlight/solarized-dark.css","03e4a9fa27fedd158c64989fed785b04"],["/css/highlight/solarized-light.css","275898d5dd9012318b7e9ae93504e19d"],["/css/highlight/srcery.css","eab4717db22a00fd8c169cfd27df25ca"],["/css/highlight/sunburst.css","a8c63174f7a7af5d05a2bc8b37ed0b91"],["/css/highlight/tomorrow-night-blue.css","2273a1dcbf6a0a8740a93d9725676128"],["/css/highlight/tomorrow-night-bright.css","cd6420d3666fc76a67a8888221c7b53f"],["/css/highlight/tomorrow-night-eighties.css","ed0f6df9b4161464b2ebd0bb3c0485ea"],["/css/highlight/tomorrow-night.css","fc078a19886693213b986e0e3bd0d9ce"],["/css/highlight/tomorrow.css","bd39c98afd29ec7c8b4ad21bd1c417f0"],["/css/highlight/vs.css","b3e4d772130898bc38c10fcc6cca9b8a"],["/css/highlight/vs2015.css","037cb661dead5793ac5d51139f6e1e6b"],["/css/highlight/xcode.css","dd6040df4ccb6a3a007e70ca0158fae9"],["/css/highlight/xt256.css","2b73a9c4c290b2a873d6779adba87506"],["/css/highlight/zenburn.css","a7cb67cc3ee85b52e46b7cec621e09f4"],["/css/style/dark.css","b8d66b648177dbafb9095be7a4bd55ff"],["/css/style/main.css","914cdf97caa604524d1146d6106e995c"],["/css/style/note.css","dbcadcbd85e58a4942f9c1a8abbc78e8"],["/eating/index.html","b96eca505a776ae305ca940fb23d8a30"],["/index.html","feff4dbb3f1afbb98e6b8c03c2bf350a"],["/js/b2t.js","cd0f8ec03fec335251ac9c0c051f7cbf"],["/js/darkmode.js","96eb9ac7f1c1f415261aa7dd6dc5f024"],["/js/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/links/index.html","543a9ddd43feb08b6cb44589c1d068de"],["/links/link.html","b278e4f4b0e6fe5559f1d4b93d539339"],["/page/2/index.html","a4cd0f9779f79ddcf604b4b3b5d81477"],["/page/3/index.html","737cfe6610f58d9780ed2090e15d087a"],["/page/4/index.html","d6ebc4708460d0fc1264f14485860343"],["/page/5/index.html","b59440b6fd11a25adc4af496656cd8ed"],["/posts/10798/index.html","41dc4ab731f29ca2995e9b1d6f04ae1e"],["/posts/11961/index.html","b0e0b77ae432bbcca4e73663fd9f389b"],["/posts/13009/index.html","88709d9c9bf0877da4f1ab2a8c32fd83"],["/posts/1478/index.html","0ab7667dc8940c6bb813bfc655a29c75"],["/posts/16931/index.html","11bf928a7dff3addf37f19346beff1c8"],["/posts/20708/index.html","7aefa6aa2312d4546ffea2495fd44ddb"],["/posts/22338/index.html","60e19eaa854eef31c6fe325fd1401510"],["/posts/22378/index.html","6b65a8bee5b8195782f0f4498ee632d7"],["/posts/24380/index.html","83c090f2e7ad0d82ee104bf8e7d324cc"],["/posts/26484/index.html","5bce541a97ec8f78f6345fc318886f74"],["/posts/29606/index.html","2f0063eaa47ebf977fcd3f6f6fe434e6"],["/posts/32449/index.html","618ebbceaf10ee8f93d3d4406d269ba2"],["/posts/3315/index.html","888349fb38162803f635786f758c79a5"],["/posts/33197/index.html","2d0c5a0c271a00812aabfb99babdb960"],["/posts/33306/index.html","f51795e5b41cdc7e0460b422cb67f041"],["/posts/36128/index.html","bcd3a030b9d5317499fb51d2b7751843"],["/posts/37557/index.html","972e44889203a17e759b6639e91b02a6"],["/posts/37773/index.html","4493a2d740742efd9db12678d779422e"],["/posts/38589/index.html","a238e3dd6d31529a4e0b5a8805d18796"],["/posts/39661/index.html","8a51e882cbd171c6ae8b815f57a8dea5"],["/posts/39842/index.html","d3a9701e6356b80eff25f0655d349d5a"],["/posts/39942/index.html","2fb443fc514bdc0bf9a75a5eec1fa617"],["/posts/44194/index.html","861e05a1eb15c1fc246ed8a568f49fff"],["/posts/44804/index.html","add2daa9acdd0262d9bf172146c286ce"],["/posts/4588/index.html","b8792eb50e29adb25c9978c004bdab04"],["/posts/48089/index.html","aa85a4ff014cc904b63c38213fc34633"],["/posts/51892/index.html","b6c2d7eafe79b29d532986bc34a2fcf2"],["/posts/53289/index.html","92a03a8eea742e085034561ab94708c7"],["/posts/54711/index.html","bfd8e5de46beeab38f812808a5b250d9"],["/posts/55302/index.html","f18430ccacfadddd9abcf5a185109855"],["/posts/56653/index.html","8aae3e3910ecb200488f72b267c1bc4c"],["/posts/57345/index.html","f8a69461bec6208e73e7f2cc44468d13"],["/posts/60197/index.html","2c7174911b2eff55bfc06b53fc415527"],["/posts/60788/index.html","22aa2c68a72405807407eceed9f080a3"],["/posts/63676/index.html","1182f07a407071273b1ec650a275d825"],["/posts/64257/index.html","b135f642ad4a16e71912d83b0d8ad170"],["/posts/64865/index.html","e47378d2557634ba131b592e28857e65"],["/posts/65311/index.html","71bdbac32bf8dbb971be2f6fe4677bb3"],["/posts/7324/index.html","615abd391a56160948484da190c068af"],["/posts/8688/index.html","8505d51a7e5c9130bca3e713a089faf9"],["/posts/9687/index.html","428956079579a022dd09a6b0d5cc61e9"],["/random/index.html","a06ba90fa35e7dc42199dc8270ca2a66"],["/sw-register.js","155696b7710266e908ce4c6d3180ade6"],["/tags/index.html","03afe17136cdc59297c5fd4443613207"],["/tags/书单/index.html","1db3d6fc30a78fb14e883e1f6f28945d"],["/tags/公告/index.html","3e91c6e018822924d25d5c975e94b68b"],["/tags/悦读/index.html","60c5be21e0334c1c533a8c2ad792796b"],["/tags/笔记/index.html","438da1f27c4299fa5a6baa7dedef9b6f"]];
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
