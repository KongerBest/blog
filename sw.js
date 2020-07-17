/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","071f0dd9f5ece7ac35969fe76cb70ca2"],["/about/index.html","244791ad4f7a4c75f2d6dd5121681086"],["/archives/2019/12/index.html","101c4edddc9724a18b9b44a525f85d6b"],["/archives/2019/index.html","1ae5a65f8b3cccae852e999a94dd0fbb"],["/archives/2020/01/index.html","03174152ba9d880420f0ea946ed27422"],["/archives/2020/02/index.html","7ace1a7f115c075a52a933c32f6b77ff"],["/archives/2020/04/index.html","786c4e466bd7a9c2579dfd8348f44155"],["/archives/2020/05/index.html","d04744d0f33515ada4312d920ba8dd7c"],["/archives/2020/05/page/2/index.html","e518367e0468c79fc577c8f7749a28e1"],["/archives/2020/06/index.html","46c5ba674a4a5cc9ed25ea4cfcf3e539"],["/archives/2020/07/index.html","e9ae6b1509ade7c0f7ef88eead0bf8df"],["/archives/2020/index.html","a4d8d5d29792ba51ed0e0ee868262b8e"],["/archives/2020/page/2/index.html","3f133d88a00734ec836f050afff6d734"],["/archives/2020/page/3/index.html","c7963ae89bd5cd8b3535dbd745a72c35"],["/archives/2020/page/4/index.html","d393db1422ef94f8f2fc05914f1d4a6f"],["/archives/index.html","7d0a4b9fa4be6f941229c5a2434360dc"],["/archives/page/2/index.html","8d297a79479e8948267de9d4129f6ed1"],["/archives/page/3/index.html","41dd1508ec3f27b842c924d1030b5269"],["/archives/page/4/index.html","d7c94265975db383376645216e55c660"],["/archives/page/5/index.html","2411e9a285b84e9ef62e186736bb0379"],["/categories/index.html","7d13b91f07efeef2f13598f9a1bd90e2"],["/categories/技术/index.html","122e0e806562cbe87cca834aeaece49b"],["/categories/技术/page/2/index.html","d67d4f342f47330e4cb53bbc856b90f7"],["/categories/技术/page/3/index.html","efb4f50db099b947087db270c63f652a"],["/categories/技术/资源/index.html","84ba1d098ad556fba4c360a122d6b2f1"],["/categories/技术/转载/index.html","4b633b7c2bec945fe917d9608b45b8dc"],["/categories/杂谈/index.html","6ab38272479305a069acf35cf26f9323"],["/categories/生活/index.html","6654f822878e31d9542f14c73cb4d79c"],["/categories/生活/技术/index.html","324e4c79d53d88ac7c47ee2561774315"],["/categories/生活/技术/转载/index.html","d592e03dc21d274c0230bcdb09da1fb3"],["/categories/生活/随想/index.html","6d304ff1c8065da2bd4f3bf5c8813ea4"],["/categories/资源/index.html","51286463e6a583a82a2924e656e87877"],["/categories/资源/转载/index.html","173880f8f3edad5942ecf849b8e058de"],["/categories/转载/index.html","bc5fe2ef2491ab7be55bb3ca8238f408"],["/categories/随想/index.html","f11a7ac9a7f6b0706a4e55b70a7af3b2"],["/css/highlight/a11y-dark.css","f832270ca9399c627c071dd580e05b14"],["/css/highlight/a11y-light.css","7caabd5043e81901f72564b4b3834d4d"],["/css/highlight/agate.css","9134ed8eda4c295d39f5376808c8fda9"],["/css/highlight/an-old-hope.css","62805f9f26ed2533faeb33df7738ab04"],["/css/highlight/androidstudio.css","6bc21f6f9fc5a3bd84d71bbb9951df73"],["/css/highlight/arduino-light.css","a35138b116a86dbaa978cca8912612ca"],["/css/highlight/arta.css","ee771ddc8060789197b6f48fb19d9741"],["/css/highlight/ascetic.css","84f24191df5f10c584286e76faaf0902"],["/css/highlight/atelier-cave-dark.css","5c663c0efbcfd439de13c272b7975b12"],["/css/highlight/atelier-cave-light.css","c6445000f538bf42d7f84449e4d1ed62"],["/css/highlight/atelier-dune-dark.css","a85dd4cf5ed9c0b5075d7e18990f7b5f"],["/css/highlight/atelier-dune-light.css","01ba6a23bdc57a3cfd619766288eb34a"],["/css/highlight/atelier-estuary-dark.css","48b4418cc49faf1b957edc9dc2b007e7"],["/css/highlight/atelier-estuary-light.css","a905196f7986503ab5ccc0820e04d501"],["/css/highlight/atelier-forest-dark.css","a6d0927148e2467fa7bc217e9be36257"],["/css/highlight/atelier-forest-light.css","9fab0801cd0dcceede954a6a359c0fa6"],["/css/highlight/atelier-heath-dark.css","8cfa79abb120a6e098db27f09443f210"],["/css/highlight/atelier-heath-light.css","a1f2fde9fea874e80fe16da36cc08e1b"],["/css/highlight/atelier-lakeside-dark.css","938f6c61b60ff42dba963d80bf6f6628"],["/css/highlight/atelier-lakeside-light.css","41ef9c7959fea7a50025f2e06051090a"],["/css/highlight/atelier-plateau-dark.css","18bc5d62d1ca69d5351c6f6f177ddf4d"],["/css/highlight/atelier-plateau-light.css","79828b00b6ae327f670f5421a1845b94"],["/css/highlight/atelier-savanna-dark.css","482c8719e321a31677d4b0934cd1a7b3"],["/css/highlight/atelier-savanna-light.css","47598e7da72a76f4c9f1e8e03e624877"],["/css/highlight/atelier-seaside-dark.css","5a70d81a80c4cdf51b22f56964a11e1b"],["/css/highlight/atelier-seaside-light.css","3a18a8cf0151ee5d9852b92c28155278"],["/css/highlight/atelier-sulphurpool-dark.css","ac7f82f43c627f656a1ff8df76b9cfb8"],["/css/highlight/atelier-sulphurpool-light.css","a06c78de68e3a9079590ba06d046ef34"],["/css/highlight/atom-one-dark-reasonable.css","6002bb7352b70b6c37eae02ea5f6c007"],["/css/highlight/atom-one-dark.css","9bec0f622c87cbc1c4dd622cfe6d6df9"],["/css/highlight/atom-one-light.css","1a131dd3f6be0e1361994e3d2feead73"],["/css/highlight/brown-paper.css","8d249655d68f24d15c1d0abcb6518f39"],["/css/highlight/codepen-embed.css","97b05b589af5f8efbcda68a7b438e8a1"],["/css/highlight/color-brewer.css","f6b22a9b569e4d9797e23290942d1771"],["/css/highlight/darcula.css","275e2d7179d64ae933ae94dadc03450c"],["/css/highlight/dark.css","763f731f058154d7cc1ea3acfe7916f9"],["/css/highlight/default.css","d15630e0a2ce6155df6942883cf5b831"],["/css/highlight/docco.css","5586c8a780afd5454fd0e6e83a427007"],["/css/highlight/dracula.css","b6d2663a7e4972fcb3aa2c8eb2959ae3"],["/css/highlight/far.css","9ea79cfecee8cf64d6b36ae0e9d23fb1"],["/css/highlight/foundation.css","9e1fb19a44af71764cb0092036f36068"],["/css/highlight/github-gist.css","69620dfdcfbeae7071a4f1a3f8be49db"],["/css/highlight/github.css","15f78d71386b9c0520e0140670f1ced9"],["/css/highlight/gml.css","7343e05a98779d7db8ddcd685f7eb0b3"],["/css/highlight/googlecode.css","c479bf5326dea01d46a52a5c956ad8cf"],["/css/highlight/gradient-dark.css","7234be746076243c1f0ad38ce0098c55"],["/css/highlight/grayscale.css","470d91866bc48339acae61181f9b2c84"],["/css/highlight/gruvbox-dark.css","a3468540bdbef2cdcd17e98ede1cca38"],["/css/highlight/gruvbox-light.css","4f3e1c2cb89e0b772210bb4130997c7b"],["/css/highlight/hopscotch.css","a40d067a3c85f739a1eb4a4031a21455"],["/css/highlight/hybrid.css","03e826e41304d52fc2b73c78899a217b"],["/css/highlight/idea.css","2bd43fbd03b6256d23ea177d78df056e"],["/css/highlight/ir-black.css","047d78efd33db80499a62ea555e37de3"],["/css/highlight/isbl-editor-dark.css","51a08b5b12d80a55fcbf97db4a9bbb31"],["/css/highlight/isbl-editor-light.css","3c68ceeefd84f2f50145dbb211fadadd"],["/css/highlight/kimbie.dark.css","706cd16820250852c8e7955e5b4bed2d"],["/css/highlight/kimbie.light.css","05530ef643f0993a6bc17fc4acbbedf9"],["/css/highlight/lightfair.css","617ce7f9d7e350b4df73b41665dfe3e8"],["/css/highlight/lioshi.css","6d01eeaadbca74f1b50a16dd6210d6c4"],["/css/highlight/magula.css","fa31a089f1324b4f8e863844c05cebd7"],["/css/highlight/mono-blue.css","6fb2d5cc579193f819d07484696d4ab3"],["/css/highlight/monokai-sublime.css","1202f6856b89c27b28837f2a70ee6430"],["/css/highlight/monokai.css","c4604ccc96f838e8970119feaaebdb5c"],["/css/highlight/night-owl.css","754a7c98148ad46b7bc9bd32823c0c8d"],["/css/highlight/nnfx-dark.css","78c8021d3fc4b0cbdcb5e20fc34530f5"],["/css/highlight/nnfx.css","3349d1abff05412024005035bcde3533"],["/css/highlight/nord.css","c53e6f2c42c885456fad6270320bb890"],["/css/highlight/obsidian.css","a6a6991d01972e126b0557b095bd7265"],["/css/highlight/ocean.css","4170c6881c0b1fe5c4382f6a194a2b18"],["/css/highlight/paraiso-dark.css","2f7629d00a9e07f6a3edb4346942fe68"],["/css/highlight/paraiso-light.css","00ecc7ab2f5edc365e51ebe917f9b44b"],["/css/highlight/pojoaque.css","1f8468dd89ec3f3d003916a273fc9ec3"],["/css/highlight/purebasic.css","02525448d0302591b3292e0ff1e0552a"],["/css/highlight/qtcreator_dark.css","523100df28703c35e8232f033af56521"],["/css/highlight/qtcreator_light.css","75a92bd71f663e3f60940d32dbe1cd55"],["/css/highlight/railscasts.css","70b4fd4e783754edf6d8ada39fcba0b7"],["/css/highlight/rainbow.css","8a8b02f360042915a6d547a4e1592b84"],["/css/highlight/routeros.css","c813b9816b9dc848b4acd712964f13aa"],["/css/highlight/school-book.css","4607c039e1cca36e9a75aa60f8856870"],["/css/highlight/shades-of-purple.css","e38300eb9501c65216692e4f3620aad9"],["/css/highlight/solarized-dark.css","57503f16fa7c105240393ed0afa39bfa"],["/css/highlight/solarized-light.css","01bfa2ac0f6c25a6f62dab333c2ce55f"],["/css/highlight/srcery.css","e4df1939724fd72c2f10eb14d522d22b"],["/css/highlight/sunburst.css","57d2788d6931db4789874a4a019748f8"],["/css/highlight/tomorrow-night-blue.css","25b7dcaa1198ee528951aa7a139e8bcb"],["/css/highlight/tomorrow-night-bright.css","bb007aab78f3252492aae3c0aa137157"],["/css/highlight/tomorrow-night-eighties.css","8f76ac73787e3074c09fa64202ab4b06"],["/css/highlight/tomorrow-night.css","e0074eb80f356f49f317128c48cf35e5"],["/css/highlight/tomorrow.css","5179903aeeaaa83ee985a66b74a70f03"],["/css/highlight/vs.css","5fd3e2cfad316cf0259641d8adcc6700"],["/css/highlight/vs2015.css","dc97b12ebfdc3613e1c1770a0511d602"],["/css/highlight/xcode.css","a48bb5042a6fbafe0f934c5318fa03b6"],["/css/highlight/xt256.css","21267ce4170ad680758942dc3013b04b"],["/css/highlight/zenburn.css","17d0144155e6e30bc47bb810475e3172"],["/css/style/dark.css","35b46a381dabbca80586fd714e518774"],["/css/style/main.css","89b509dcbd3e28bab1f32d33141486f8"],["/css/style/note.css","46337b35c92bb44d1b22dff271f5ddd2"],["/eating/index.html","82ca6975c7737f748f1ccd109b8f1077"],["/index.html","c781d7988472d9da20481bae4de38f4f"],["/js/b2t.js","cd0f8ec03fec335251ac9c0c051f7cbf"],["/js/darkmode.js","96eb9ac7f1c1f415261aa7dd6dc5f024"],["/links/index.html","c59b6304739939825d80f40c325e8dcd"],["/links/link.html","38d6c10cdce359818f5ef5f97b054c5c"],["/page/2/index.html","8292a1906b166eea8c2508057606e7f0"],["/page/3/index.html","1d27c10708f5674aa9703f23b0877715"],["/page/4/index.html","1e9d11b9d8a63e69db7078196dc33e63"],["/page/5/index.html","10f9c7e927c19dc542e606a04e56d541"],["/posts/10798/index.html","c1c7cde2c6ecbb43a8814ef5acf029b3"],["/posts/11961/index.html","fef9aeacd7fa44748dfc9f67be9363e3"],["/posts/13009/index.html","6f82ead52061cced838f3b5270eccf93"],["/posts/1478/index.html","8370a7bce4c5eb6889a40192fbbb9f40"],["/posts/16931/index.html","19cddc63d0c4744ad666b4d10c450391"],["/posts/20708/index.html","e5b6852e31fe9c8359e0b3575afd4a99"],["/posts/22338/index.html","15f24582a3fc23ddd9ef8b0ebb54805e"],["/posts/22378/index.html","ecc4a5cbcf4175a7031a47f203e650b9"],["/posts/24380/index.html","1b7f9750df3cd57e106e098eb61e25c5"],["/posts/26484/index.html","702ea84e773e473d0036f133ef729434"],["/posts/29606/index.html","77305b49ff1a4a800a4844c503544490"],["/posts/32449/index.html","fbc9bf22c69923e83fe1e2c48b539bbb"],["/posts/3315/index.html","474e3ecfcb1fa201f5f27b44186e4a76"],["/posts/33197/index.html","df4ef4768b06cda4d07902ec502aee35"],["/posts/33306/index.html","d30a56546ca6b9181cfdcce912f120d9"],["/posts/36128/index.html","dadc32ac36174763ef8384074968c9a0"],["/posts/37557/index.html","4ace25bbf29e84df76353ee10dc5362c"],["/posts/37773/index.html","fff416eb888863fbefae3eed814b1c93"],["/posts/38589/index.html","6546d6d242058feddcbd88cf3e8bd175"],["/posts/39661/index.html","a492255b71179defd1c8f02014cf1ced"],["/posts/39842/index.html","ac86247cb90ad2a977605fb017c1b3ac"],["/posts/39942/index.html","136975b8a12d3cfe0903934ac305ec6d"],["/posts/44194/index.html","76602269f0189ea2c07c6e4c00efea97"],["/posts/44804/index.html","5e6d11c08627e6b28d3917e769aacc5b"],["/posts/4588/index.html","e5dff056f7af9589a00369b631b796a9"],["/posts/48089/index.html","52969249c32479dbe9ec2718c4575d02"],["/posts/51892/index.html","77548bd842cf9521d1e1766aedfae1a0"],["/posts/53289/index.html","e500663df511ed62ebdf441a971b5b07"],["/posts/54711/index.html","4a8b8270498fd4ec5d4b27be780d9e23"],["/posts/55302/index.html","c19267abf0dabbfb415c32fb4d71fa8a"],["/posts/56653/index.html","c6b5d5b7a472d92a3fe16814bb35a298"],["/posts/57345/index.html","a524d802732a180bde7485610bf00279"],["/posts/60197/index.html","8733f48c8337b12464d5b69e2b434289"],["/posts/60788/index.html","a9a5dc81badd546de81ee6f7908e3009"],["/posts/63676/index.html","9dac071cb5fbb5e83429e5b93f6647af"],["/posts/64257/index.html","2f206c28aabbc69239efa5fe1c1494eb"],["/posts/64865/index.html","4e6ab0d160f0d2f53403a565b2e9999d"],["/posts/65311/index.html","e9fcac7c56a669f1b4924b76af1fe7ba"],["/posts/7324/index.html","1483eb7343cce324539aa0ec673b0a15"],["/posts/8688/index.html","f9e4cd58c821692df04634edf7a53314"],["/posts/9687/index.html","ffb25e5def76194f5f36bd0ad1a5da48"],["/sw-register.js","9a48dceca442e8a104cf2d387b4935aa"],["/tags/index.html","d6952747dc9b2b0839051605f9195ce8"],["/tags/书单/index.html","0f159505c303fc95091cfdef260005c7"],["/tags/公告/index.html","bd61e78c1330c15f70ed3e9f8a5c0d10"],["/tags/悦读/index.html","de844ec766830de5686de8cb7da39d15"],["/tags/笔记/index.html","cd3262dc398e2dbbedf223cca0da1401"]];
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
