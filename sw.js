/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","328c54d1197ddcdb1460c9d22950a925"],["/about/index.html","c67ac6a8d5f59f4e4a67144638f34e4e"],["/archives/2019/12/index.html","a907e248d7e6b1f12f31f7e61ba2ab8d"],["/archives/2019/index.html","ff061b5356832b27c674abaead9d0942"],["/archives/2020/01/index.html","8adf863172e6619ef24af50aa9e475f9"],["/archives/2020/02/index.html","6ef619898ebccc412ab04d69b83184b1"],["/archives/2020/04/index.html","c4e2dbee883494ec675d2ca16de3bff6"],["/archives/2020/05/index.html","69a8f62604aee19dee99ebb561d5f0c9"],["/archives/2020/05/page/2/index.html","cc7d06b7ddf4acb2701adef1bfc64fa7"],["/archives/2020/06/index.html","90bcd763b367dcd4382c8ecddcc6b5ac"],["/archives/2020/07/index.html","e8452b6bd0236984ba2c97d853682fd7"],["/archives/2020/index.html","0cd48c93e66f65af657aef326d6b448b"],["/archives/2020/page/2/index.html","942e554495563c6a0e7d64e69d85e852"],["/archives/2020/page/3/index.html","394b2ca5c9cef7280d90fdace5c38727"],["/archives/2020/page/4/index.html","00b60e69cbb94e803b67d03db68d4656"],["/archives/index.html","918f707c00f6d2271a38c2f5d8ebe900"],["/archives/page/2/index.html","9a0e0364bc6fab063698a7770397addb"],["/archives/page/3/index.html","86d160762b0dcfe613df30e778301a9d"],["/archives/page/4/index.html","98e02c18c200c0f116d17174ff214f1e"],["/archives/page/5/index.html","05b9fb77e7286ebd0227c21fa5128e93"],["/categories/index.html","75820924610d6cc6f69cc4237ec84f3a"],["/categories/技术/index.html","e033619bacadb66d3d90547824c29720"],["/categories/技术/page/2/index.html","c27cbff2c3bda768e34650f5f43dcfd2"],["/categories/技术/page/3/index.html","91d60b4ba8da22660f12e9cf9907a877"],["/categories/技术/资源/index.html","4c28d7bac7f52f649c4119096bb4e3c9"],["/categories/技术/转载/index.html","59771ad75d5403f6e30761a1984cb7ad"],["/categories/杂谈/index.html","6c916cd3ff9856fbe36f42feeff554d4"],["/categories/生活/index.html","b183a7c149b7fa0139cec279802b4450"],["/categories/生活/技术/index.html","0067eb6e12caef471b778fdebbf53e6e"],["/categories/生活/技术/转载/index.html","f92e949f2b63155a2ff7f5af915497aa"],["/categories/生活/随想/index.html","d4cd6037be6010694cf640c6a4d827de"],["/categories/资源/index.html","77489a61e5ea3cba5727b7c69efd8aed"],["/categories/资源/转载/index.html","327a39dfbd6b01655c5d52f72d1d77db"],["/categories/转载/index.html","491881d5492d010ec67b14a60cf37b9b"],["/categories/随想/index.html","78f1eff7a018c24b7892be24c9e62420"],["/css/highlight/a11y-dark.css","97e705f23e5fd8b35295f480b7cac8fd"],["/css/highlight/a11y-light.css","8460b3ca0252565229ecb16c62f96a8f"],["/css/highlight/agate.css","97767fb8d200c5c1bd32625703e0223b"],["/css/highlight/an-old-hope.css","3c79eb6214489bbe5e607fa6c997cfbf"],["/css/highlight/androidstudio.css","5ca22f9cfb1d9b238de13dabf57807cb"],["/css/highlight/arduino-light.css","5229a8a66d4c2bf0428a40d8c6beb0ab"],["/css/highlight/arta.css","7e225f618b5e0e6e96c2d259eff57fa0"],["/css/highlight/ascetic.css","0611ef9babaf436e03cd4c6fd2f74ba9"],["/css/highlight/atelier-cave-dark.css","508ed5d558e27dc37a186396d7117cac"],["/css/highlight/atelier-cave-light.css","c913d383c70fab1544d641a972d60d91"],["/css/highlight/atelier-dune-dark.css","74d5220aa542fa9e04510b51f3bdba54"],["/css/highlight/atelier-dune-light.css","ded499915880079e33f8959e26314465"],["/css/highlight/atelier-estuary-dark.css","7a8bdc99ff65bd5adc258c585b5a423f"],["/css/highlight/atelier-estuary-light.css","6ef3d84d8a094f4a146bb177f53d6ea4"],["/css/highlight/atelier-forest-dark.css","f2276841e741c1b851497eeb1dc33d37"],["/css/highlight/atelier-forest-light.css","9148dabf983238355622db712bf3b162"],["/css/highlight/atelier-heath-dark.css","d20de87c550ff21bd9cb4913150a9d87"],["/css/highlight/atelier-heath-light.css","7cffd71bf9eb20563eb1c9a71bf6858d"],["/css/highlight/atelier-lakeside-dark.css","264542abed5c35f669d09bf2543b7358"],["/css/highlight/atelier-lakeside-light.css","22f1405df041142a1c2c71d36f24e8ad"],["/css/highlight/atelier-plateau-dark.css","072ad272eb30026f2572363164615c70"],["/css/highlight/atelier-plateau-light.css","9662f3dc6893e68e04e1e386d5d4fb58"],["/css/highlight/atelier-savanna-dark.css","9f70d4deedd4e0101dddef3a99a0f18c"],["/css/highlight/atelier-savanna-light.css","7556baf8a96367595f41d32a44d7acf5"],["/css/highlight/atelier-seaside-dark.css","098251e66c776b5b8ef2c4055b317faf"],["/css/highlight/atelier-seaside-light.css","4de9084b8c584fd260ccb17f163150b4"],["/css/highlight/atelier-sulphurpool-dark.css","aae6c25f48ee1418cc379eeed0d2b55f"],["/css/highlight/atelier-sulphurpool-light.css","4db929be9162dea5b35773c3da09505e"],["/css/highlight/atom-one-dark-reasonable.css","6934e69fb21033d5567beb19da47513b"],["/css/highlight/atom-one-dark.css","8adbc6c80b998f464558855ae7d914e9"],["/css/highlight/atom-one-light.css","162ef6b2d4485f205bdfe54e71070c70"],["/css/highlight/brown-paper.css","9b7201a5f59ba54587f5cd544f465333"],["/css/highlight/codepen-embed.css","9f2804a8b25fb45311442cea58130a89"],["/css/highlight/color-brewer.css","a8b06e41ee4e389c37767c17c84060bf"],["/css/highlight/darcula.css","e0e765fca93359d85356c8267aac744c"],["/css/highlight/dark.css","7d7c9dceaaa6f997edf007b411ea77ac"],["/css/highlight/default.css","0ff5fd14fcb8dc24bf6f05466c0cda36"],["/css/highlight/docco.css","2210c4e980b65e5977840b208c699818"],["/css/highlight/dracula.css","2ba2258c8436523b03037b474069cce5"],["/css/highlight/far.css","bf8fa0bd2136dcbfeb2cf60fd8816f98"],["/css/highlight/foundation.css","e2a30d24bde364c30ea609eb5b77df17"],["/css/highlight/github-gist.css","47af319047fd3caeae12c363e9a0b1a8"],["/css/highlight/github.css","26d6f4fd19e45611fbfde94cf7347cd4"],["/css/highlight/gml.css","beb0b805eff522515c7758763f6df2c9"],["/css/highlight/googlecode.css","46a72886de81b69f1a8a74ca50224e5e"],["/css/highlight/gradient-dark.css","677b621cec5154f5b2771d8d89773db9"],["/css/highlight/grayscale.css","015779eaa79ddfd3b9b4d4659c966469"],["/css/highlight/gruvbox-dark.css","24e986784ab6946a34d0d4acec7c58c8"],["/css/highlight/gruvbox-light.css","e22c9b858432c4804e58d65d0533a6ff"],["/css/highlight/hopscotch.css","c58901b337e60fe6a336630f628dd1f0"],["/css/highlight/hybrid.css","eda609133c391528545ad77c3b9dd8fe"],["/css/highlight/idea.css","a5ecfeb1bdf532fb37973b8553dae776"],["/css/highlight/ir-black.css","72bc29e1824a1b02cc99ff05f958ded7"],["/css/highlight/isbl-editor-dark.css","629a278332ed91fc41b1695b9aa10279"],["/css/highlight/isbl-editor-light.css","f0c335b5f84f83048faa0546f063285c"],["/css/highlight/kimbie.dark.css","8aa8aea354dc48e268ceec0c6ea018c7"],["/css/highlight/kimbie.light.css","b3710f1c247568ada0b30e5dde91354e"],["/css/highlight/lightfair.css","7250df1a08b8140287829fe91414d7d6"],["/css/highlight/lioshi.css","c54e48028f1d32423bd72f7a011c330c"],["/css/highlight/magula.css","a7f31938b33a6f6f0bdeaa4cfcbbe9b9"],["/css/highlight/mono-blue.css","2b19fec7f7ab186c419c0657b7e83397"],["/css/highlight/monokai-sublime.css","4adac577864e1914593bbd0547fea647"],["/css/highlight/monokai.css","abb05892dddb6450fa40014cf23df1b3"],["/css/highlight/night-owl.css","0cd2845e42891ce8c5a0361547d88bfc"],["/css/highlight/nnfx-dark.css","d9dcc24bda958920db47c4ff634f8877"],["/css/highlight/nnfx.css","3b0932dd55eea0d6cf34f1eee8998cb4"],["/css/highlight/nord.css","c687a5589fbb4eab152680ec301e32d5"],["/css/highlight/obsidian.css","e304dba56be1b174af4c2ba667bb35a0"],["/css/highlight/ocean.css","753c2e955cf61a923385f5ff26900be4"],["/css/highlight/paraiso-dark.css","367f8a64b090e4eedf27c9d86ba0874b"],["/css/highlight/paraiso-light.css","ecb28ab1e85230bef58d4ff3ef67ea9c"],["/css/highlight/pojoaque.css","382105a8169b28361a5fa053169e0fd1"],["/css/highlight/purebasic.css","e8e0652a44a29342b1ecd5d628edee60"],["/css/highlight/qtcreator_dark.css","6ac334734c1c6effe884eb8e81024b4a"],["/css/highlight/qtcreator_light.css","ee487c953d25f44d24d81efb71f0d1c7"],["/css/highlight/railscasts.css","3d120960b997312c01690e86c89e87d7"],["/css/highlight/rainbow.css","f6785c67f47eac1503c20393849b7ba4"],["/css/highlight/routeros.css","89f9694c8410cffcc7ff24e609a17919"],["/css/highlight/school-book.css","37f6e9da9d1215520981e97883d4352b"],["/css/highlight/shades-of-purple.css","1d6b80f3c56a923e33c035a056ab8504"],["/css/highlight/solarized-dark.css","2efc30507581b4f75893f2474f76db44"],["/css/highlight/solarized-light.css","0ac6e11217d9658d4c8a7b302b3a67ee"],["/css/highlight/srcery.css","0e08fc923906076a6cee840582c9c8b6"],["/css/highlight/sunburst.css","91bc8bc77f6c1e092f2d0af14ea24098"],["/css/highlight/tomorrow-night-blue.css","00ca90ddd2aefa4cfeca54582df78a99"],["/css/highlight/tomorrow-night-bright.css","72648539d789a642705a3dbca1ab63a5"],["/css/highlight/tomorrow-night-eighties.css","8de8bceabc5bb01fa3669586f95a49df"],["/css/highlight/tomorrow-night.css","88dbe54f4145f10494091c491b1f1688"],["/css/highlight/tomorrow.css","3e8c046fc00aa610a30aaad85a8b9971"],["/css/highlight/vs.css","ec7b583317ef69844582e865c861be8d"],["/css/highlight/vs2015.css","1aa0483794e683711af3ed06f7715f42"],["/css/highlight/xcode.css","aa4d7fd4eee0dbdaf5460899c7d715bd"],["/css/highlight/xt256.css","ddcacdf62f87aa8a054656a830482820"],["/css/highlight/zenburn.css","2478f432356a99835689a029d488ede4"],["/css/style/dark.css","630a83d6cca498b681a5e985c566f1fc"],["/css/style/main.css","fefbffb287b12ff11af49849deaacad3"],["/css/style/note.css","5e78e93d889f24c0cd649568fc624467"],["/eating/index.html","5b9b31dc7788ef0fb4ed7901abd57cc1"],["/index.html","25a49c72de5a230e1f0c5d69fd1cfb0f"],["/js/b2t.js","cd0f8ec03fec335251ac9c0c051f7cbf"],["/js/darkmode.js","96eb9ac7f1c1f415261aa7dd6dc5f024"],["/js/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/links/index.html","25fc520e94d1bdac4a080d6832054e18"],["/links/link.html","2d0da618c82b5954b16122678cbdc41a"],["/page/2/index.html","6d4cd222b565e571bdb9f6a5b1a1fcd4"],["/page/3/index.html","10e9d44a426beb40ccd4128bd78b10ff"],["/page/4/index.html","a6659260c187d9696c07000e82203dcc"],["/page/5/index.html","1cb95dc9fe216d1370a39c6dbeae6166"],["/posts/10798/index.html","1840bb3050dc0d1b3a18ce37b65f885e"],["/posts/11961/index.html","a7d7bd881e20a5164903421003c7ecd3"],["/posts/13009/index.html","4ee016b2f632be8cf6a6545f3f2beece"],["/posts/1478/index.html","eaf718093d4da8813a8f2a8a6fde06e1"],["/posts/16931/index.html","c99585e9bf86d0e6df47c95742037eb0"],["/posts/20708/index.html","bd4985a14548b6c95bc51a5d52027e3a"],["/posts/22338/index.html","959d9368dc2b44178b65b348c279269d"],["/posts/22378/index.html","89d8281d577fb2899048626eacaeddb1"],["/posts/24380/index.html","643b00b89528de5b0d2cd33f73e9786b"],["/posts/26484/index.html","e0c478532a68096684cd1afd76062e29"],["/posts/29606/index.html","104ace53face677f8c7407fa3bd9f22e"],["/posts/32449/index.html","2c1b24e73e9e65844fb972ba481fc19c"],["/posts/3315/index.html","21808700e2004d1c8d771bbc32d12b98"],["/posts/33197/index.html","206bb6f3ef5b1e950e654299f2baeb0b"],["/posts/33306/index.html","8ac9c784f5e3d5eb741818c5922420b1"],["/posts/36128/index.html","ee387f19ef18f5e7685ee8cd16b6231e"],["/posts/37557/index.html","5e1f69f20fb960e1a4b812ccec90bfdf"],["/posts/37773/index.html","5cc219829a450dafbcac6808b160a227"],["/posts/38589/index.html","b915e68c1d19e1174f32ed48add60c41"],["/posts/39661/index.html","ba248bdd7278caf69987778d211552da"],["/posts/39842/index.html","f24a1a274a528681f8374bb1012c170e"],["/posts/39942/index.html","eef0a6906a58a6ea1162b69d0a9a9d67"],["/posts/44194/index.html","5d23e34b031d0dcb216dfc80dbdd79e3"],["/posts/44804/index.html","7158e823b699d934a7c6f39e47fd3a17"],["/posts/4588/index.html","b2692e9ac467455c020756716edc7342"],["/posts/48089/index.html","36cbe1bce741cddafa6c5eecee54d5f2"],["/posts/51892/index.html","f520dcd10eb4c64796fb9c810bb34561"],["/posts/53289/index.html","74cf66b2f86eceab57934c416e4b2e32"],["/posts/54711/index.html","cd6050464e4294ddd20fc5a97d450f8e"],["/posts/55302/index.html","a29d2cca576acf55a5c6fd4a4a667812"],["/posts/56653/index.html","07772d2b50e3b65f7bd3b4fc1231c5f2"],["/posts/57345/index.html","642208879aaa8e4999725462ab28a859"],["/posts/60197/index.html","21b056e68dfd6d81171d505b026c7fa3"],["/posts/60788/index.html","5717c13f41c777a9eb4af8aec46a9786"],["/posts/63676/index.html","a620c7b34e393b8db59576b03f231111"],["/posts/64257/index.html","656642e8d3f7a88db00b6727138d4bd5"],["/posts/64865/index.html","d030c345218a6fe0ed99509880a6b40f"],["/posts/65311/index.html","1830c178d415488dc77860f8f56f8e5f"],["/posts/7324/index.html","dbde3aacdbb4e555dc2d87200f39c89f"],["/posts/8688/index.html","12549693394e14bea49f8f366ab44557"],["/posts/9687/index.html","74bd5937b1dcbabd7ba073c7dc3ba43e"],["/random/index.html","68d32385d84715b934ee6c21ccab5d13"],["/sw-register.js","b20173a1cb8aca37fb2d397d282f31a3"],["/tags/index.html","cb381cbb782d581c2691153dd4985fc8"],["/tags/书单/index.html","69780f594cab76977fb123deb0483f02"],["/tags/公告/index.html","3d2ad600083774375a68fa11c912749d"],["/tags/悦读/index.html","023a220cf41253dd9401a37cbe69eea3"],["/tags/笔记/index.html","3f516e664c39fdfa1482ffb26de0b9d1"]];
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
