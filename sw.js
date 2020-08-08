/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","e3067c1e57b62b2adadc0f7d1ea71347"],["/about/index.html","66573eec6012ffa40d8bf75016cd9d99"],["/archives/2019/12/index.html","e28300aa6febcbf97dbf398e13f7850e"],["/archives/2019/index.html","088117a94c77d237e423515944693b5d"],["/archives/2020/01/index.html","0bf27c60463c896e022c197a19d535fa"],["/archives/2020/02/index.html","a890c75300a9ef58ca78342e30e4cb3a"],["/archives/2020/04/index.html","5f9c9292e559ff5e330edea1afbc062c"],["/archives/2020/05/index.html","2d48308f307d3bdbbafc2d97064340d4"],["/archives/2020/05/page/2/index.html","add424896c0808b4bfaed3081d0e9e67"],["/archives/2020/06/index.html","c87ee2dc88fc2989471134c5ca3babd0"],["/archives/2020/07/index.html","d8a8405f6aa79064f7b92e575b7c79d9"],["/archives/2020/index.html","c026e35db294e03785e2e7b7cc0ad0e5"],["/archives/2020/page/2/index.html","c6b00dd29bc09af6dac4a22e9e0275ee"],["/archives/2020/page/3/index.html","e9c28febd58f6088774c2c2ed6a0f4a1"],["/archives/2020/page/4/index.html","7332a03b94fca19e7c1ba99be9f2b440"],["/archives/index.html","7c73c473e0903a1d40f283a148397a85"],["/archives/page/2/index.html","953436c7af4e6646bb41e8b272017690"],["/archives/page/3/index.html","c50c5aa07603d8739c7a426ba832b07d"],["/archives/page/4/index.html","c66b1e1428e94a4d8c3505297b29c46b"],["/archives/page/5/index.html","9967b977eae48115baad94578cda4817"],["/categories/index.html","91f79b9a66d2c5fdc957a18aebd83522"],["/categories/技术/index.html","9a11c020b4fc896eb58be90db74606e2"],["/categories/技术/page/2/index.html","ddd0ea9d18c977e9d167e4754adc9747"],["/categories/技术/page/3/index.html","375dbb22e85ef55443c1b2eb09f6102a"],["/categories/技术/资源/index.html","a142c7bc11108ef17214f496823c4c6f"],["/categories/技术/转载/index.html","d1afebb4f1042c5e19e76b2507ee5847"],["/categories/杂谈/index.html","bc276964e0ad52fbff54077afb3c8d17"],["/categories/生活/index.html","e3d81eca85149d661698445ed8d392ee"],["/categories/生活/技术/index.html","36af6013e65b08751327d2ada2e620d6"],["/categories/生活/技术/转载/index.html","086df83ad7248fec05df1a070406bf72"],["/categories/生活/随想/index.html","ec035f01765c2080d1a8c5adfa678a9d"],["/categories/资源/index.html","2f4f71c49f23a4f4cc5f747771d7afa2"],["/categories/资源/转载/index.html","bc77578e6b1d926df811e7f3d9f3abf1"],["/categories/转载/index.html","da8772b8805888c54898d12bbf677957"],["/categories/随想/index.html","ccdf6418e0f28c3ac8c029ac1de70aba"],["/css/highlight/a11y-dark.css","47e2efe67d4aa4d71d51faaa5910857e"],["/css/highlight/a11y-light.css","d3c1fc716a42464781b886c938f7bb55"],["/css/highlight/agate.css","dffd8d56c86852134ab02eb864043df8"],["/css/highlight/an-old-hope.css","740eb5c59d8c72068b28dd6434cc931f"],["/css/highlight/androidstudio.css","1e95a4d9ee1c0e1f3e6fcb4bea4b544a"],["/css/highlight/arduino-light.css","d61b395ecae8abe9d3dcacd7af10452c"],["/css/highlight/arta.css","8401aced82436cba6c8a91445c612bb9"],["/css/highlight/ascetic.css","055bde86cd8e016be6ea444ce9e4ada3"],["/css/highlight/atelier-cave-dark.css","cfae86be9cd5f48d8d2a87ce22a23e38"],["/css/highlight/atelier-cave-light.css","86eb33718400ad56c20165ebaf29cbf9"],["/css/highlight/atelier-dune-dark.css","9d7edacbb71013fe7367030ee6957534"],["/css/highlight/atelier-dune-light.css","4cf91e12050e24343d669b38d682cb14"],["/css/highlight/atelier-estuary-dark.css","a86e127571451eeee9270581850d602f"],["/css/highlight/atelier-estuary-light.css","5af63865ccc53f68553efba22eb98487"],["/css/highlight/atelier-forest-dark.css","b292afdeee2d919006a4dbb032267352"],["/css/highlight/atelier-forest-light.css","30d0e43beb1be3a76b6854b1829bee96"],["/css/highlight/atelier-heath-dark.css","72b462ee9cb3c0ff5cdd55bf473818de"],["/css/highlight/atelier-heath-light.css","65ec6432f299247901c4a83b22b44191"],["/css/highlight/atelier-lakeside-dark.css","16a95ce0f40843b6c5d1741a849dbb07"],["/css/highlight/atelier-lakeside-light.css","2fbfb37f80aeb2007c54efe75600852d"],["/css/highlight/atelier-plateau-dark.css","ea8979fd08c2cf59c3fb60cef866fdc7"],["/css/highlight/atelier-plateau-light.css","8acd3e6c1a45890d37315dae19e3f725"],["/css/highlight/atelier-savanna-dark.css","aca22c56fc8ff9a20be50d855eff6a95"],["/css/highlight/atelier-savanna-light.css","44dfdfa7c1de4d804f54d7acbfdb009a"],["/css/highlight/atelier-seaside-dark.css","41043588c2525c3123006be024c32deb"],["/css/highlight/atelier-seaside-light.css","f388bc4e216d10478338a4e0e2022f42"],["/css/highlight/atelier-sulphurpool-dark.css","d5a7813756109b4c11ed5164c1d367c7"],["/css/highlight/atelier-sulphurpool-light.css","f75b0befebe27bfe573a95ff6408559b"],["/css/highlight/atom-one-dark-reasonable.css","f5164081f410d858879576828a16c74a"],["/css/highlight/atom-one-dark.css","12cafed435cd2cef1b97984017ad0854"],["/css/highlight/atom-one-light.css","b982f390e3f855f11f5d9a50682f774c"],["/css/highlight/brown-paper.css","59ec081bea1c107c88c158b31a815b40"],["/css/highlight/codepen-embed.css","0270b7b087cc4e75a94c5ff964d367de"],["/css/highlight/color-brewer.css","77481e087b611656a46d5cb9711b8aca"],["/css/highlight/darcula.css","a000a4b0cd6a607d073ba8b47e47cc66"],["/css/highlight/dark.css","308cc7e37b114b04262734e5ddb6f8b1"],["/css/highlight/default.css","9d6f3d1a0615e1a709256bcf55a756aa"],["/css/highlight/docco.css","a69cca333b2f55b835d153a27dcb6351"],["/css/highlight/dracula.css","27bd02bd76196dd6e088f082b01b4a2e"],["/css/highlight/far.css","2e26bda07bf705667ed6658367275668"],["/css/highlight/foundation.css","31c910bce787357fc446311bb6da2462"],["/css/highlight/github-gist.css","90bfaaef54a8c7bc7cdc58539adb1921"],["/css/highlight/github.css","460c42d4ffa99dec59669b33eb7a7b2f"],["/css/highlight/gml.css","09d5d831e4716a3e76f7dd654ad7e3fa"],["/css/highlight/googlecode.css","a2a3493f538dc89fa63f77a472ab0a55"],["/css/highlight/gradient-dark.css","5e53696926d0f6a87c5561e3b6ee7782"],["/css/highlight/grayscale.css","b2b035e466ffafd82abd2657b716e916"],["/css/highlight/gruvbox-dark.css","8c171f722fe824c3a6cf7f98549e2543"],["/css/highlight/gruvbox-light.css","e96075d185e3e4c0f6dece812162b65b"],["/css/highlight/hopscotch.css","a87f0fd952f544d3c581b80cf685cc2d"],["/css/highlight/hybrid.css","b60ff08839bba85adea9aeae888eafac"],["/css/highlight/idea.css","4d7ff834d3e301cdd63f6a5908a52377"],["/css/highlight/ir-black.css","9ab601c0fc91295702bd378a9958d8d0"],["/css/highlight/isbl-editor-dark.css","f7e4c789bef5b379de375f281ba7ab79"],["/css/highlight/isbl-editor-light.css","9bd3fa72f4f12049c46a04cebe010808"],["/css/highlight/kimbie.dark.css","c61cf8667b1eec4ece63e23070f0bccc"],["/css/highlight/kimbie.light.css","8997cbe19864ddf0ca0b84703a85d90b"],["/css/highlight/lightfair.css","19ed62c68ff58ab62bd8faf20f7ddbc2"],["/css/highlight/lioshi.css","a04bf277b2d21d9808b342ebbe9c0b7d"],["/css/highlight/magula.css","3ea85068b2a378c15ab5153c44850fc9"],["/css/highlight/mono-blue.css","04276ee157921297af8ac0c37ca16327"],["/css/highlight/monokai-sublime.css","7f56da4635d9204a8c09b26bd76cd4be"],["/css/highlight/monokai.css","a27eda1d6a1e0bba4358db5a18b9c079"],["/css/highlight/night-owl.css","8b8eed2dfa46ee5414a09b5667e34594"],["/css/highlight/nnfx-dark.css","c68e268586ffe1df2d5e720c58e785bf"],["/css/highlight/nnfx.css","b679f8b15775d81544440e64137bec04"],["/css/highlight/nord.css","ffef25199473ea35646ef51e2c9b00b4"],["/css/highlight/obsidian.css","e255ef5f5dcb0768315e75292662187a"],["/css/highlight/ocean.css","64b928eb0afb6909693a658f62529d04"],["/css/highlight/paraiso-dark.css","de1a020294284c7f28c39dc0eee6f6da"],["/css/highlight/paraiso-light.css","b09601fb3bc85f27d3af32c1fcbcd3ce"],["/css/highlight/pojoaque.css","ff87b371661bca2f0c865fc9a0f18805"],["/css/highlight/purebasic.css","d64c1d724af7a22b906c971c693fca31"],["/css/highlight/qtcreator_dark.css","1f67b41a11701409ad237fd594dc02d9"],["/css/highlight/qtcreator_light.css","8ded8f6cefab277403e85dbd2acfa7d8"],["/css/highlight/railscasts.css","9c54fcd19fb47dde421b26b6c4797146"],["/css/highlight/rainbow.css","6ca56df3cf8c1111e7838b0ea007ce62"],["/css/highlight/routeros.css","727733c0d6343cff77f51b812792ed01"],["/css/highlight/school-book.css","cb21878e4033031a2644616adf188c49"],["/css/highlight/shades-of-purple.css","3bcf97452838873d9a0c7389842cda0d"],["/css/highlight/solarized-dark.css","16084501fc2a18d7f456dcf45d2b6beb"],["/css/highlight/solarized-light.css","c6ac5db129d3c2772233d043dc7bf61b"],["/css/highlight/srcery.css","90b9811135bcab3a4cd549ef1501ad96"],["/css/highlight/sunburst.css","e14015bc796f8a223935557d684d3ccb"],["/css/highlight/tomorrow-night-blue.css","be87c81211c6ef4520850d45da773c1c"],["/css/highlight/tomorrow-night-bright.css","0a9348d7b072ca6bb0f2443c97fca575"],["/css/highlight/tomorrow-night-eighties.css","5dabe70b688d91ca69fd5b7706671584"],["/css/highlight/tomorrow-night.css","d91cc7d53de72dfd2bafa94df8feb1c6"],["/css/highlight/tomorrow.css","77772b8fb7afee4b22e27225aeef88af"],["/css/highlight/vs.css","578fd81f5db49d00bc96eb4abdf2aa05"],["/css/highlight/vs2015.css","fd2a994a224575f641eb459ea397bb99"],["/css/highlight/xcode.css","9c9acfe18a7d6d2354afc13e01d955d6"],["/css/highlight/xt256.css","4cd36d18ff31d08dfd919921ed6a732e"],["/css/highlight/zenburn.css","fef4f7d4a20395e388310d9d8a7126a7"],["/css/style/dark.css","8a86bf05b94e5dda147cacbd93290b65"],["/css/style/main.css","d898202b950356d2e574c2660fd1a9bb"],["/css/style/note.css","4585236cef73eca7f7875fbf6cbd69fd"],["/eating/index.html","5570d0af6282f76096f2157cd9a626ab"],["/index.html","faa5682e41b5de61b221299a68cfd2cd"],["/js/b2t.js","cd0f8ec03fec335251ac9c0c051f7cbf"],["/js/darkmode.js","96eb9ac7f1c1f415261aa7dd6dc5f024"],["/js/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/links/index.html","5967631bde21f50f69ef6ef796882511"],["/links/link.html","527d589c4b2fecd14e269cdd184a653b"],["/page/2/index.html","6ac324f4e38cf0139ffe6174da68de78"],["/page/3/index.html","c5d051122851cfbe9af44344f026b2a8"],["/page/4/index.html","46c622217e618c520e6a985beff86607"],["/page/5/index.html","9ec260a643d56ca781ba2050c474e4e2"],["/posts/10798/index.html","7c622e42a1e92c3ae5ba1b8e2d33cef9"],["/posts/11961/index.html","bda576902d64de0df1e425ef33578b38"],["/posts/13009/index.html","cd5b47da2f30e2133ec0e44fe6bd4b30"],["/posts/1478/index.html","5eaeabdd4aa8e55fa21ed4fb2c4da006"],["/posts/16931/index.html","14774af4b3ecfba8ab39629347e229f5"],["/posts/20708/index.html","248c9730ff6d1f9c2609eae7beea3690"],["/posts/22338/index.html","eecc69eec5ccffb952932b8a64e7a651"],["/posts/22378/index.html","4232ba4aca199f8888b4af56f81a8ac9"],["/posts/24380/index.html","d0d93a781397a30d44c18831b69866b9"],["/posts/26484/index.html","e1eab9b7453cc241edb02c1d71c83079"],["/posts/29606/index.html","89cf42c4a3e10a49f3b39959af3272d3"],["/posts/32449/index.html","6be07e8e4f9cda243586452b8e514e0f"],["/posts/3315/index.html","f639ada8a61d0203e4d69dff1f8ffc53"],["/posts/33197/index.html","5b35c08c3af4b346606b0e72cc347261"],["/posts/33306/index.html","977f3d4fff0d08a9e42dce9d1395e3ba"],["/posts/36128/index.html","89d31feb0b3709237ce8a824fced5f7a"],["/posts/37557/index.html","543ff87809b1aa0d9a791b6acb9804dd"],["/posts/37773/index.html","562aa91f2c599f5115c2479abbcaef7c"],["/posts/38589/index.html","16562295a7dcae7a77e4d565badd3e68"],["/posts/39661/index.html","4f05fd66f666cad48705b31ad321be6a"],["/posts/39842/index.html","acdba8a13da7a3c4b03c7ba800ed03e2"],["/posts/39942/index.html","cd121f1b44ce9faf2184917b882045fd"],["/posts/44194/index.html","6a2cc5f5f2cecb98d1faa3220166de0f"],["/posts/44804/index.html","31f91484947bb08ca1552d26ee2bf084"],["/posts/4588/index.html","75079d4f8fead7bd957ead2dcc566f61"],["/posts/48089/index.html","ea1d5a799440e10c80b73c1daf980ae7"],["/posts/51892/index.html","cabed86cdc0516363e1ffbc200db21dd"],["/posts/53289/index.html","8cfc050fd1a0fa7e820a55bcfb4f5822"],["/posts/54711/index.html","9d5734625ca8cbfe64cf7c891543a049"],["/posts/55302/index.html","ee8d32e2ba11aba4c15e5c4e46f2f1c8"],["/posts/56653/index.html","e638c78b43b0b008d2f471551913e9f4"],["/posts/57345/index.html","ee36cda531982e95337fb7d6b475ba82"],["/posts/60197/index.html","c5df2800c39c9be3109f3a5bf3efd8d2"],["/posts/60788/index.html","94c7b31807bd8bda383a4ea74ae6cd72"],["/posts/63676/index.html","84759d8687dd7eef21f3da23def280c7"],["/posts/64257/index.html","566a823effeb7020cf9570229addbcda"],["/posts/64865/index.html","c93415b915952ca131b36b87a4806e9f"],["/posts/65311/index.html","96c4b541ab2fc03025668f41c3cb7060"],["/posts/7324/index.html","5ec1d811506782bda300b60d8f457cba"],["/posts/8688/index.html","fd1b979a87d9c79b4d43003c8b95661e"],["/posts/9687/index.html","1968568dff85a461fa996b5094a52a9c"],["/random/index.html","37f58a39a66d27b4babe444a65d466e1"],["/sw-register.js","3bc000b9676f59dee4866adf0e62365e"],["/tags/index.html","dd72fb6cc6a3bd36e34fe0c6bcee40ae"],["/tags/书单/index.html","9b1f3000b1b354ac7460a3bd998261eb"],["/tags/公告/index.html","3eb9c1236085d1336d5e6e52bc6a99d2"],["/tags/悦读/index.html","793db9c71ec7ed72dc263d2fdee2fb42"],["/tags/笔记/index.html","1be423db1d8eb9d36b9d0d8916accc52"]];
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
