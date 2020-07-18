/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","eaf453fb4da7a4ceb6f3981d94ffe69e"],["/about/index.html","e3b8c467d0e3bae5092f10411671575f"],["/archives/2019/12/index.html","7abae5f6bd8229019e65dbce001de0c9"],["/archives/2019/index.html","f961350a33fdf8d9c2b6eedc14d19713"],["/archives/2020/01/index.html","9385e7c9f78cbad800e34afb86a1a123"],["/archives/2020/02/index.html","98da52f8b0c2c8fbf86a3a993dc4514a"],["/archives/2020/04/index.html","8d4cba87db7d6a3917612c3893a2ab54"],["/archives/2020/05/index.html","f3e5ebeb264e7f9035a9ab45489216de"],["/archives/2020/05/page/2/index.html","c05c91ebc9cbc90e8e5e3a59179c0fd0"],["/archives/2020/06/index.html","a0f2a19511b550b25781c587368d8734"],["/archives/2020/07/index.html","6cddd7a69fc20d273a5f8695ded33cc3"],["/archives/2020/index.html","30612119792a36ec34e66253491135d2"],["/archives/2020/page/2/index.html","0ca52b069dc654a790e0914e5bc962a1"],["/archives/2020/page/3/index.html","b011b39de6851b046dab1a2a17dbcf6f"],["/archives/2020/page/4/index.html","9a3298568343b2eac2108791563336d1"],["/archives/index.html","4d8eee4acf4ab4b0619cc250f8d2c467"],["/archives/page/2/index.html","77dc308c9f14ad1b1af65656a71e3807"],["/archives/page/3/index.html","ecb645e538919d6046495c8410084ef2"],["/archives/page/4/index.html","3d56b720156e44894bedd3378d9bba9c"],["/archives/page/5/index.html","2e8ff9c71d5d0ba333e4378291cef3e1"],["/categories/index.html","116f819f831f7ced92d031228ab8ef5a"],["/categories/技术/index.html","0dc4341077d0e2b4b530c138e1520f9c"],["/categories/技术/page/2/index.html","9362cef6b04692bc4cb04ca6037791ec"],["/categories/技术/page/3/index.html","07383dc6aec364fe3cd1e6800ce679db"],["/categories/技术/资源/index.html","f5447bb058fd00621ae403f37defab3b"],["/categories/技术/转载/index.html","326fc0f58b292a18ef26facfe68426f6"],["/categories/杂谈/index.html","0ab9203140fbd2461c6498d3158643aa"],["/categories/生活/index.html","4f8f69b8f1c3468bdc72dbb7b5df37f4"],["/categories/生活/技术/index.html","da05648d3f524b03254ea681b20df032"],["/categories/生活/技术/转载/index.html","b843e9e49c745bf7918ddf4b1e31296b"],["/categories/生活/随想/index.html","2a152e5b6ddb100d01753655dfe65cb6"],["/categories/资源/index.html","9423e7d40c71812c75d50ed68f57d403"],["/categories/资源/转载/index.html","640761573f27070591a6fe2767c8f58d"],["/categories/转载/index.html","ecebb885f187269d7ac1af6b7a813aaf"],["/categories/随想/index.html","fae09a1d427f97aabec08893b29fefbe"],["/css/highlight/a11y-dark.css","23d3ca92376d3d81d8c19bca62d416db"],["/css/highlight/a11y-light.css","1d7900abfd99856453af7f6d5911abec"],["/css/highlight/agate.css","057cd3603439e5e225ff225be4f0f339"],["/css/highlight/an-old-hope.css","fe104baac8e5d5a25fcf3584140b55d2"],["/css/highlight/androidstudio.css","76a169acd07332c92f482b5b401bbb9b"],["/css/highlight/arduino-light.css","63f7b23f1c3ca63d1b593a88ae87264c"],["/css/highlight/arta.css","fdd056e212213338f7012261bbc754b8"],["/css/highlight/ascetic.css","b80e5348485d30cbee78ab19b3e7913e"],["/css/highlight/atelier-cave-dark.css","c9d4e3acffdea4f9666e2390ece67c19"],["/css/highlight/atelier-cave-light.css","09ca613aaaa23a450dd4e1a5b3a82f5f"],["/css/highlight/atelier-dune-dark.css","216af71d695b791ff4b5045a7cf5d92e"],["/css/highlight/atelier-dune-light.css","9b6c330f9166882e250b5bebf2352401"],["/css/highlight/atelier-estuary-dark.css","b1bf1f24fd8268c52b26cc5ced112193"],["/css/highlight/atelier-estuary-light.css","a842ca33831f74ba6366a96033f1fe6f"],["/css/highlight/atelier-forest-dark.css","342e8ef291c6681c25cbf6087d5b1a0a"],["/css/highlight/atelier-forest-light.css","40446dd4e4dab6437eaa5565e9a934b2"],["/css/highlight/atelier-heath-dark.css","71124b92359f9ff1b5441b9e5f52bdfe"],["/css/highlight/atelier-heath-light.css","b1ab43d7bbdef5cfe358dd99b4f4a5ef"],["/css/highlight/atelier-lakeside-dark.css","1b773ba04c7688ed8aba491e33983162"],["/css/highlight/atelier-lakeside-light.css","3d34b5260be7e6501f40d9c7250f9c8c"],["/css/highlight/atelier-plateau-dark.css","ccde1a536b9498a7b2fedc5043b4534b"],["/css/highlight/atelier-plateau-light.css","b956e4832e935954dbd6086ce7264df2"],["/css/highlight/atelier-savanna-dark.css","e6003aa7d0c299c01967916ca3f508bc"],["/css/highlight/atelier-savanna-light.css","0d7540394537706292fc396ca641ea1e"],["/css/highlight/atelier-seaside-dark.css","937b1ed1fccc94d50aa5aff45808b355"],["/css/highlight/atelier-seaside-light.css","d3f9d602b6a0281a6ea1c8829d4e5b8b"],["/css/highlight/atelier-sulphurpool-dark.css","7b3b6d3b44ee192bb5eba24e44d27eba"],["/css/highlight/atelier-sulphurpool-light.css","74f85721f2e34e897c977c149ff00bed"],["/css/highlight/atom-one-dark-reasonable.css","cbd0cc69a3d3710a77b0b77670c6e6ad"],["/css/highlight/atom-one-dark.css","acda11db8c7e2f304a06bf747d3d8809"],["/css/highlight/atom-one-light.css","47ce8f068b47add0ee1fba06334db877"],["/css/highlight/brown-paper.css","cd3417942c15261d915d04d3445119e8"],["/css/highlight/codepen-embed.css","9ffe847b5a37bd642908ee1c1c2a278a"],["/css/highlight/color-brewer.css","e029c0b3358bdee4aad3f54e49a9b677"],["/css/highlight/darcula.css","4b3b744339d8c69420c4321a4cb4480f"],["/css/highlight/dark.css","776e834f8d7f3dc121667fc290a119b8"],["/css/highlight/default.css","d93cc4d927636c357afea4d99c22be71"],["/css/highlight/docco.css","d8499881c33a0048fade650c59c5d14e"],["/css/highlight/dracula.css","f6024718c45939c5486a9c3548072ba7"],["/css/highlight/far.css","0e069217a60e87147ed99157c03eafab"],["/css/highlight/foundation.css","9df445344f185917be04095ef92d6425"],["/css/highlight/github-gist.css","9e8f82bfcc9c6e939e11f0f3307f64d4"],["/css/highlight/github.css","6e0d053be0b4de20e207282dd3813dd4"],["/css/highlight/gml.css","20b9193e91440727568f43f73122d6d4"],["/css/highlight/googlecode.css","6003d56a53b07be91b105631b908ac9c"],["/css/highlight/gradient-dark.css","ae4ce3228e6dfce0e60f05c359caf9b6"],["/css/highlight/grayscale.css","fd9ad5355700939ba19b4cb33310b962"],["/css/highlight/gruvbox-dark.css","cbd6005eb6968dcbad36eee5eeff5fc0"],["/css/highlight/gruvbox-light.css","4e935f4bf3bdfbbdf48ee7f58be069cc"],["/css/highlight/hopscotch.css","59ffad68604a2cd219fabdd62a61c6c7"],["/css/highlight/hybrid.css","85ffaea840d6f4c15a799966da622d45"],["/css/highlight/idea.css","fb0989198d851d115086341a24c5ad52"],["/css/highlight/ir-black.css","3e4943b8cad9f078c5e449e5757c3a21"],["/css/highlight/isbl-editor-dark.css","0fcddc6364f19f2c97e9cc2cdfbbd232"],["/css/highlight/isbl-editor-light.css","b5557cd80b6a66b8c9c198a9e58160e0"],["/css/highlight/kimbie.dark.css","316e4f1b5a2d30b17ba18ce0698a953b"],["/css/highlight/kimbie.light.css","703e21aa6c95c1b3c8c3955624cbe497"],["/css/highlight/lightfair.css","aacb95ffb0574c1ff2df5e833162e2b4"],["/css/highlight/lioshi.css","cfb30a26352e35b73cd034cd70675f0c"],["/css/highlight/magula.css","f86d9a76706ae7011b0ef11f0b149951"],["/css/highlight/mono-blue.css","3cc949f4584f249632f84532b897d47e"],["/css/highlight/monokai-sublime.css","d426328c6028d1418552ba2e6964f541"],["/css/highlight/monokai.css","0e3d2bac83923e094924dd37168a4dca"],["/css/highlight/night-owl.css","417d24e94220c58c5d4e759f0732b35f"],["/css/highlight/nnfx-dark.css","ea2fc660e462c254af5099fdf636ade3"],["/css/highlight/nnfx.css","1d00a9585df530f5e2005ff1a739e51c"],["/css/highlight/nord.css","a4f853201de5ba1aebe99a03d101d389"],["/css/highlight/obsidian.css","39dec3a66678b364e2218e3518972e26"],["/css/highlight/ocean.css","ec2dee540296ee46144557e4fc7ad33a"],["/css/highlight/paraiso-dark.css","8a21084d172320b859f740e10f16c19e"],["/css/highlight/paraiso-light.css","d9a68d77708a97955256cbc2fdd8d971"],["/css/highlight/pojoaque.css","9dbb4dd1fb10862d313858e3a1f94dba"],["/css/highlight/purebasic.css","82195184e66a818cfafef88cd02d73d3"],["/css/highlight/qtcreator_dark.css","5e72fe3d3768dcce1e91872eb87181be"],["/css/highlight/qtcreator_light.css","cf274fb462d5f91aeb9b07577d95a77c"],["/css/highlight/railscasts.css","56f5b13d928a7c30ad2b5fd9512c7a5d"],["/css/highlight/rainbow.css","ac13fdf49a48c75d53b9234f958afb47"],["/css/highlight/routeros.css","2981bd7f43e71a8bb1b72cfc6955a820"],["/css/highlight/school-book.css","2f2767dfe78f7283ee7ff64e139647cd"],["/css/highlight/shades-of-purple.css","485c894d195d64c9a8524e1a9819c9b3"],["/css/highlight/solarized-dark.css","351c4c6bdbabf5ba4782be6ca146a382"],["/css/highlight/solarized-light.css","16609fdeef6231a099415293498624cc"],["/css/highlight/srcery.css","aabe0e9d679d3b76e00055993097ed16"],["/css/highlight/sunburst.css","3c981f23c4951f0d7bcc22a7dadbca25"],["/css/highlight/tomorrow-night-blue.css","3481ac0b6a791c33abc5aba78c7c653c"],["/css/highlight/tomorrow-night-bright.css","8d141d0e9d3ff20d3f89352734b8dc49"],["/css/highlight/tomorrow-night-eighties.css","93e9738d6c7a33edb1d64944650da9a5"],["/css/highlight/tomorrow-night.css","02e379bf78eebbf66e63beb288d4ce92"],["/css/highlight/tomorrow.css","72e566b0a1d5af25e055d803d368ac74"],["/css/highlight/vs.css","27091778911becd477f98b824efcb871"],["/css/highlight/vs2015.css","19100345d44b24b0e7396518684a622c"],["/css/highlight/xcode.css","939f3abb038b459208c8d1ca5dc8a4f0"],["/css/highlight/xt256.css","a7dccd8b4c13df01d510a9ce249d733a"],["/css/highlight/zenburn.css","52fb2fa619d6b0ebaa47d98695f8e9f8"],["/css/style/dark.css","b2e3039418f188fcff20c0189804170c"],["/css/style/main.css","536fe617fadb348961ea5aadd48dba7a"],["/css/style/note.css","65464f604c81949b06b3ed1fe63cd69e"],["/eating/index.html","a8d49b4f46d8176c8aa14657dbb01944"],["/index.html","733937258b21f1eb4f8e1bb3b545891f"],["/js/b2t.js","cd0f8ec03fec335251ac9c0c051f7cbf"],["/js/darkmode.js","96eb9ac7f1c1f415261aa7dd6dc5f024"],["/js/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/links/index.html","70149af61bcce5897b8554f3a8802547"],["/links/link.html","fff692174b161b71740fbc95d20fb533"],["/page/2/index.html","7cb4843c3dded2bd245360688bb044be"],["/page/3/index.html","d9e29d5a87c4d61b936379f3a4099b92"],["/page/4/index.html","c38f7ef7f550e41601b98527058e69b8"],["/page/5/index.html","8dcac6a2e9f00b5c564e05a96881b037"],["/posts/10798/index.html","170b1a1265a3e5347acfe2faddd9cd7f"],["/posts/11961/index.html","7bfec0876df77238b57e7864d9e99e34"],["/posts/13009/index.html","8c0199f9342088e3acacd992cb606246"],["/posts/1478/index.html","4b4703207b3f15d18bf86ceef7eab496"],["/posts/16931/index.html","27ca2be51fef2bc1adf6426af6b23bab"],["/posts/20708/index.html","44814653845100399c1097e4a131aebc"],["/posts/22338/index.html","fa94dca9131935b66ab26311cd6bb420"],["/posts/22378/index.html","2705ff4671d655899030669956fb4372"],["/posts/24380/index.html","468e61d825ef503407a3861b36fa265b"],["/posts/26484/index.html","b32246b692227c5288d608aac30ee7f9"],["/posts/29606/index.html","8a6bcddc8e3968ba782075ab46e0340a"],["/posts/32449/index.html","444dc0b6b48dbd6ecc2ec055abfe5cee"],["/posts/3315/index.html","1a05d4f01d34da2a44d0d18934e370a0"],["/posts/33197/index.html","e3b54e17040f194bda5cf8560ec89313"],["/posts/33306/index.html","c1e24b48102af85c62ee51d81b0e2b6b"],["/posts/36128/index.html","31e19ab2d0550f029c642f3599fcdc3f"],["/posts/37557/index.html","9b591c6797be0ecb7d08f8623346058d"],["/posts/37773/index.html","1a4ddb8d0dcface3f2a6057fc68df194"],["/posts/38589/index.html","9bbc29295e38f49c83e31399aa67a600"],["/posts/39661/index.html","8f35d913b79a202246d7dc2ecf6791f7"],["/posts/39842/index.html","70f6416e5a4420231c35053db5ed57a3"],["/posts/39942/index.html","b0466d7ee9ac66a6d482f53b5d6a31a0"],["/posts/44194/index.html","1c7af2e9a679432ca30f2be26a3efc4e"],["/posts/44804/index.html","abf1144342df823fecd37b03029af8e0"],["/posts/4588/index.html","e9f1fcb593bf5fdfd0ea20fdfd3ecc99"],["/posts/48089/index.html","6a2126e6fb39346e5bd131ac63f8c5b3"],["/posts/51892/index.html","25e363c9dd8e4145f397a881406b5c63"],["/posts/53289/index.html","78340ea8ffb4e27c525035c2dce4343b"],["/posts/54711/index.html","a45f83dfd12340c325c8fba72b6bd8f3"],["/posts/55302/index.html","abe7286e7595284f4d1121d9d2175e9b"],["/posts/56653/index.html","d8612e78fcd42a7743e25841ae8bb010"],["/posts/57345/index.html","e1990c72d778fc93ee5fdde80b54873e"],["/posts/60197/index.html","d2b85bc71f0858df7ffbcad7056e8aa1"],["/posts/60788/index.html","8477d38f540f6955f8a6bdc2cf67928b"],["/posts/63676/index.html","db57b58de637935e1fa14b129a00d0aa"],["/posts/64257/index.html","5d4a74f1c0a85824871eba7ab6dcb90f"],["/posts/64865/index.html","c4fc7f61430973ded1cff3b2944e54e9"],["/posts/65311/index.html","504b1196eb75640157236a7d61b67104"],["/posts/7324/index.html","ae7848b14d80a1a7ed27c72eabe9248c"],["/posts/8688/index.html","df98fc8d44fb35f4cfb8dcebfd102af7"],["/posts/9687/index.html","6c8aaada42c157d68c412f408bb7800a"],["/random/index.html","7532a8fe56cecea8d6e9b095af6b2b6e"],["/sw-register.js","d8b9e73ed5f53356c0d4b216b62a5534"],["/tags/index.html","2c9071b0891919edc1958ed79ba828c5"],["/tags/书单/index.html","0ab23987730f682e75bf41b21a919727"],["/tags/公告/index.html","467337863ace2b103b129edb704c6b6f"],["/tags/悦读/index.html","8713bf3fb1348e5a5e172245af8d747e"],["/tags/笔记/index.html","a5f06468b9a2ffa6f6649e9c266c52b6"]];
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
