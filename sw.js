/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","b1753d00a1f3461269f9b93e90539f33"],["/about/index.html","02cce9ab4797713f50d1d5b6f5d494f8"],["/archives/2019/12/index.html","9283bf3655fea93d250fa634ff37fca9"],["/archives/2019/index.html","3cf56daa49b1fcb162f5510ca597ba8e"],["/archives/2020/01/index.html","4ec85ae78a987c804c68c00c873a8357"],["/archives/2020/02/index.html","f7fb04749e341ccb84ff8bbac3d5bcc9"],["/archives/2020/04/index.html","0f6c3a4b1a7035eb87a751e4899419bf"],["/archives/2020/05/index.html","370f0c6e0bd1495f4eae826ad18e5e8c"],["/archives/2020/05/page/2/index.html","85bed2d3405c302d59e73a0c53916dca"],["/archives/2020/06/index.html","cca748ca588235db97536dbe780bdd79"],["/archives/2020/07/index.html","4f8c34a0eea23091f86b171537993fee"],["/archives/2020/index.html","f45b2d58827217448a682532827b4ad0"],["/archives/2020/page/2/index.html","5e1e7e9d31530597186aba836544e246"],["/archives/2020/page/3/index.html","4dcacb321a356bb243088e6de65456be"],["/archives/2020/page/4/index.html","53ed8acdf372e598f89c2e87a5771b31"],["/archives/index.html","8deadc0291ff3fe0d7bc192d375bac66"],["/archives/page/2/index.html","9a7006e1193345d35afa6f8d573b7090"],["/archives/page/3/index.html","437dfc85c1bececf69e89dc7d8b6f169"],["/archives/page/4/index.html","8917685df9f5e1784d73f796e7b9ae9f"],["/archives/page/5/index.html","ab4fd04eb7e882d8232376894468c2d2"],["/categories/index.html","b1a4f7f2eca6bf7d1911c5edac1b70db"],["/categories/技术/index.html","eb4f44e32a1b2214ba98f5244c11bd06"],["/categories/技术/page/2/index.html","0b8421892ea5176354f1e70f1930e22a"],["/categories/技术/page/3/index.html","db910e42ccbe239a06886229d26b0100"],["/categories/技术/资源/index.html","06316f266addc041ccf79d150a06fcae"],["/categories/技术/转载/index.html","c42c84337ca75af08c945e190019befd"],["/categories/杂谈/index.html","75f0999f200456f218117cc143dff7c9"],["/categories/生活/index.html","9b41899c22c2d6f7687dd653a3efea3a"],["/categories/生活/技术/index.html","e46d16116764c3359205f1bf19eac74f"],["/categories/生活/技术/转载/index.html","22fa7391b7f4c62784eb7e101bf69a8c"],["/categories/生活/随想/index.html","a9aa7aeb577f7d9e7e8a80dd22edee80"],["/categories/资源/index.html","4e70954bd05b81e6e251cd1bc1e20f9b"],["/categories/资源/转载/index.html","1464c2134eda63fdc16b03fcbd5e1b81"],["/categories/转载/index.html","20e1adea8b5e9553a05c3be2f0606e83"],["/categories/随想/index.html","62ac034998ebb5163c21c79704fff429"],["/css/highlight/a11y-dark.css","6c108d3d717f702e42c36fc020482512"],["/css/highlight/a11y-light.css","86b5ef1522cb4865df9a421499ec45d9"],["/css/highlight/agate.css","c297f3b8dd0f1c0fb77e6e4530139198"],["/css/highlight/an-old-hope.css","6c4f708b831f3fa5a0abe4fec47384a1"],["/css/highlight/androidstudio.css","e923fce12634b7c3945d76270b98efd6"],["/css/highlight/arduino-light.css","b363d51137ee142c50d50abac2931468"],["/css/highlight/arta.css","45ed0ee4254659ac197166808aa2c2ae"],["/css/highlight/ascetic.css","d968987b1a1a009e8d0f8fee099bd497"],["/css/highlight/atelier-cave-dark.css","976c058fea3eb258e13e102ad3eacadf"],["/css/highlight/atelier-cave-light.css","849ff30e3bc981beff55553307aa6e79"],["/css/highlight/atelier-dune-dark.css","7db8344ddf2085d86d8cd27a2386ee9f"],["/css/highlight/atelier-dune-light.css","68dc1533010436c4ec52aef0afb08d98"],["/css/highlight/atelier-estuary-dark.css","55862b58c4eae2684ae0125cfa69267b"],["/css/highlight/atelier-estuary-light.css","f7ed93970b73f608a0791ccee3dd6419"],["/css/highlight/atelier-forest-dark.css","9447bde1c14ddb1effe5081214a00cca"],["/css/highlight/atelier-forest-light.css","4a76116027ea8aea34b01eda5839fff1"],["/css/highlight/atelier-heath-dark.css","72f0d0bdf76c7d197ceb4856b2331155"],["/css/highlight/atelier-heath-light.css","0cd5a7c9f4430712164e24ea05e0171d"],["/css/highlight/atelier-lakeside-dark.css","01bf49685b444f07c3a3566742b839ad"],["/css/highlight/atelier-lakeside-light.css","29685eaed0f52c4fc0ec3ce846abe7de"],["/css/highlight/atelier-plateau-dark.css","28629bf71dd8c3d98303272503f172da"],["/css/highlight/atelier-plateau-light.css","a1e1b47dd117a5a8acf59f8acc66e454"],["/css/highlight/atelier-savanna-dark.css","a1cfa2c34d5599473864cd64cb112679"],["/css/highlight/atelier-savanna-light.css","8785e92abe807756e9b9a6e775916ca2"],["/css/highlight/atelier-seaside-dark.css","925e0339f8c9cfabae8d27c44edf1718"],["/css/highlight/atelier-seaside-light.css","4ab9dce4c87af288006c12387d69ea8f"],["/css/highlight/atelier-sulphurpool-dark.css","c4acc24e2a3a9b38bbb794af44bcd1cd"],["/css/highlight/atelier-sulphurpool-light.css","b72764cde5b9dd692eed15b01a60d8cd"],["/css/highlight/atom-one-dark-reasonable.css","61fa5a90239fdd5db0e5d9e06dd2ae6e"],["/css/highlight/atom-one-dark.css","ee245f814680f3030380fe5170013ee9"],["/css/highlight/atom-one-light.css","da3f697454c90096857edf14db9d46f5"],["/css/highlight/brown-paper.css","db42f860adbec5a9dc3826d3192f6d85"],["/css/highlight/codepen-embed.css","0782dcccd05c52fd117bb40aa487b1b3"],["/css/highlight/color-brewer.css","f7f3a6171e78cb1d5db0a4e37e39dd38"],["/css/highlight/darcula.css","43d202fcd6a280e9cd66db151e7fd7bd"],["/css/highlight/dark.css","cdeac377066150dfd6d2dfbc4b30c64c"],["/css/highlight/default.css","67818ce82a37b69fc9c30471c7c610e0"],["/css/highlight/docco.css","8b21ef13909ba0e20feb96506dc2682e"],["/css/highlight/dracula.css","a401d208b8dccb2b8d4f5b49fbe975f8"],["/css/highlight/far.css","3b7527273cac4f0b5be91b47b9e22cb8"],["/css/highlight/foundation.css","3bfef87a32d07371ce0d41f389236735"],["/css/highlight/github-gist.css","27cd6c1d9e8095cf49dff4a841ade519"],["/css/highlight/github.css","79851c64f5575db8da69186b3722d60a"],["/css/highlight/gml.css","59bc107cba03632ef4ddb48b83e86db7"],["/css/highlight/googlecode.css","91bac37bebd3d9ef939c4091bb827054"],["/css/highlight/gradient-dark.css","061ac459ebad6a6314ca02205d961ec2"],["/css/highlight/grayscale.css","d41a735916d63ceb364924f9e6e23768"],["/css/highlight/gruvbox-dark.css","a040db78557033827972439de71fbda3"],["/css/highlight/gruvbox-light.css","b8d34164eb06b7b42fdd31bf4026efe5"],["/css/highlight/hopscotch.css","21f73a378af3ea9206231ce3210fb270"],["/css/highlight/hybrid.css","c9038b0c32f8cd09d8e954b24f37b412"],["/css/highlight/idea.css","7eb7b538e6b46c1ac21e516fcaa1ed5d"],["/css/highlight/ir-black.css","962757f9fc78cd119f4ee73682af69d4"],["/css/highlight/isbl-editor-dark.css","1a1a46c1934a2155751fe2311a37f702"],["/css/highlight/isbl-editor-light.css","42d97942e39272439cc253eeabbfb450"],["/css/highlight/kimbie.dark.css","19a37f462c0d2ebe7d0de86e68abb7e9"],["/css/highlight/kimbie.light.css","f0f16de1fc7a8f5b6497e35ef3595531"],["/css/highlight/lightfair.css","d955fe36f1c0d6e2986c35a45b9db56f"],["/css/highlight/lioshi.css","5afcfa69cf9cc1ed7cbf3e7d8a426ccd"],["/css/highlight/magula.css","c1e13ddc188dce51b31a6271998bf629"],["/css/highlight/mono-blue.css","95417e77ff7606f2432938b94055a528"],["/css/highlight/monokai-sublime.css","c8a63ec43c27f33e19507ed1c0d14b29"],["/css/highlight/monokai.css","b63e65d37968b0fd9f8f35c402817510"],["/css/highlight/night-owl.css","b85915a87a076ab5b5214432d39ee2dd"],["/css/highlight/nnfx-dark.css","f4b6353685659bf98931be1238c2ec93"],["/css/highlight/nnfx.css","9c6fb31f53be523d22448bd7b8ea4bef"],["/css/highlight/nord.css","322831f140eb56f0d56653a12c786cc4"],["/css/highlight/obsidian.css","f7c1b121b596bf7f7de46efbc041a6f0"],["/css/highlight/ocean.css","f82ee3a5538a829afbe5bc96eda379bc"],["/css/highlight/paraiso-dark.css","a39fcb46a799349e53800a46ddf58c10"],["/css/highlight/paraiso-light.css","0b1f4f58864315ab594f17405fbc0522"],["/css/highlight/pojoaque.css","8935b9f70a97bba0ec2ab4da29a39e77"],["/css/highlight/purebasic.css","0facfbbd7c9de6789da9e6e7035a8401"],["/css/highlight/qtcreator_dark.css","5d2bbbdf6be6dc60839838c0c7a9767f"],["/css/highlight/qtcreator_light.css","280ff1d9e42bde80f1532932b6db98c5"],["/css/highlight/railscasts.css","a19778435f222d055933b5820a26cac6"],["/css/highlight/rainbow.css","97ac4133783459277339382fb715effc"],["/css/highlight/routeros.css","abb3d1b8737fa81dc9049fa8764f0118"],["/css/highlight/school-book.css","fab4208214ef2fbf6d543601ddff2484"],["/css/highlight/shades-of-purple.css","fd0ce901f9ce1194a1c8f7b79f0f3c8b"],["/css/highlight/solarized-dark.css","88efc18787eebd7848b54c739b96e4f3"],["/css/highlight/solarized-light.css","d904ffef98ba19058f8f607e14d80b33"],["/css/highlight/srcery.css","96e28fbaeefe93c9370b3e8cfda0c1df"],["/css/highlight/sunburst.css","8733cfac20e167d16af8c4ddb27fcc1d"],["/css/highlight/tomorrow-night-blue.css","f1c9c504ab562febeaeff08ec7bb19b7"],["/css/highlight/tomorrow-night-bright.css","cb6b991bb5d06424c1a5de546a1f6a93"],["/css/highlight/tomorrow-night-eighties.css","e36417f223ef9e945999af46639bc7fb"],["/css/highlight/tomorrow-night.css","a23fdb8d2a0f68c6af0c1995db0b1536"],["/css/highlight/tomorrow.css","6cf50ee6654d227f3a06c2025a076057"],["/css/highlight/vs.css","ddfa0701b1b2bdbf92b041da82120b14"],["/css/highlight/vs2015.css","8886ecc99af526c3fdee21776c8e89ab"],["/css/highlight/xcode.css","9d9b1a41cf9a99b4f8fe22c30e60229e"],["/css/highlight/xt256.css","776ca1dcd6e1f138dac5ba7bf1edb7af"],["/css/highlight/zenburn.css","33578ac6a2bcb479f15fbd99b58c6a8c"],["/css/style/dark.css","29dfb31294e690df72213edeed6c99ad"],["/css/style/main.css","667f89bc3f5015d0fbc3147ba00d9161"],["/css/style/note.css","ce615aedfca258868fc4ad27f74bc5ea"],["/eating/index.html","6cb0632666822aa596991c74fcef8e23"],["/index.html","54129055e0962da622bb8047561306e1"],["/js/b2t.js","cd0f8ec03fec335251ac9c0c051f7cbf"],["/js/darkmode.js","96eb9ac7f1c1f415261aa7dd6dc5f024"],["/links/index.html","7b8e63c8adab4c8db15c41cf48b6bc48"],["/links/link.html","16091c7fde6de9d2a618ae85bbe0646a"],["/page/2/index.html","372815ba4ce3635b2693eca6b55f358d"],["/page/3/index.html","d58330e16400e665e1f8068d6e34d08d"],["/page/4/index.html","8e704201d12c856bf6222c4fcc380b7b"],["/page/5/index.html","b4bf1b4dfdbe611f2d7e0676d111aa66"],["/posts/10798/index.html","85c92c11912efdcd00fad0354f263714"],["/posts/11961/index.html","f098c3ad60826bb2537913a3158cae8d"],["/posts/13009/index.html","c09d1144d8988621f45b7a6b51d05f46"],["/posts/1478/index.html","1b04b97960f61a53bd691f84f1a292f9"],["/posts/16931/index.html","4c2a124177667641e40f363a2aca4e22"],["/posts/20708/index.html","5cbb7ecee3c715564101d3cc431796ed"],["/posts/22338/index.html","7edf5265b8c9e2d4b3595d18932852d9"],["/posts/22378/index.html","12d0d40fc6311eec37dd6646d55ccfd3"],["/posts/24380/index.html","f414242088c2c0d817cad150d48f1c6e"],["/posts/26484/index.html","49ee286916cdfbe35c97e9a8964b5a0d"],["/posts/29606/index.html","acb8246fc22a9837fe0128455f948f1f"],["/posts/32449/index.html","1a7ac64a453b5b62be6d8d9b53fea59d"],["/posts/3315/index.html","9a5291d335b02a7c8c9c2ec741033f25"],["/posts/33197/index.html","00b05b4504a014b08e3d06b82d4cce23"],["/posts/33306/index.html","3460f5840c65af0d3be5b123137e2c47"],["/posts/36128/index.html","d12af8f5f1d7cdd9f5079a5d440e2261"],["/posts/37557/index.html","0c297910b4696d8e4687da30fd8acd9f"],["/posts/37773/index.html","cdaa6c3b75730b4acfafffe15fa50529"],["/posts/38589/index.html","ffdb90e4a3feff1ec55f2054d1700051"],["/posts/39661/index.html","2af9efa430b4a551fd84b23a1d6d1f81"],["/posts/39842/index.html","c1457e26b8119079539834cb05f70fde"],["/posts/39942/index.html","91f8834e42bdc1ac8d7f07b7b9a8887b"],["/posts/44194/index.html","fd05862800ac640d0242bf673588421d"],["/posts/44804/index.html","79855eb3c8e8ba7bdd03638b26f314be"],["/posts/4588/index.html","3c376dde117ebd9e4cf167a21bb0773e"],["/posts/48089/index.html","2e336f2c410de7d254db13eff919748c"],["/posts/51892/index.html","e490623bbd20876b2c563092903977bf"],["/posts/53289/index.html","e70a236ab7aef2d47ad66049d9d33ad4"],["/posts/54711/index.html","faedc883a3db6ac05450fe640493d3de"],["/posts/55302/index.html","515c21a14adbfac80c765dda51ddb85b"],["/posts/56653/index.html","f4929ad50d1a3c49a98a5c7f838adc35"],["/posts/57345/index.html","d78c4143d049f3932f587e62150b9668"],["/posts/60197/index.html","1582fc7dc3cf5e3b1dc5d7f844d26b06"],["/posts/60788/index.html","ab26c6ee846fe89ca1d4d6ad21e1554e"],["/posts/63676/index.html","855428c048fd3e1239da5fbf14b7c5a2"],["/posts/64257/index.html","0b272b08ce5099574356e0968809bc1b"],["/posts/64865/index.html","a814b4998569ae01ab0062d44ab298d0"],["/posts/65311/index.html","81474935f25e575dec47f34c3445b7ff"],["/posts/7324/index.html","aab3f840fbe53f9ce107eff854295f07"],["/posts/8688/index.html","1c493412e402cc31a714e98caf2c755b"],["/posts/9687/index.html","2d8feccbe832727d68f12117b4edf72a"],["/random/index.html","0e5e2d6fa97731f92edd928b0ce94c03"],["/sw-register.js","f23908104eda02500d6d452e4461611c"],["/tags/index.html","b66854e4f25e62bd188392e472a5402f"],["/tags/书单/index.html","9413d9bb97544e8089ba3aa3117d6499"],["/tags/公告/index.html","b84697304d08b851dc074cead58bf69e"],["/tags/悦读/index.html","d8bb585c2c5ff2087cb1053d616af589"],["/tags/笔记/index.html","d08d33dc834116b98348eb3f02df3e6d"]];
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
