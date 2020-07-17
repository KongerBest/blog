/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","f516a7e54ebda23c1ed2adfc1e4a5445"],["/about/index.html","f8990b44f903be395c5786853de0eef9"],["/archives/2019/12/index.html","e5d5d5dda7ebbe62bfdf8a9b51fe989e"],["/archives/2019/index.html","9c74705b989b25a1fc0187a4cf4379b3"],["/archives/2020/01/index.html","6ee45523a6cb9d1e997959e6467c3389"],["/archives/2020/02/index.html","a0ded4ffbffa5d50d3ce3d2b87cfceae"],["/archives/2020/04/index.html","d4ef6b66cf2af0d8664ad4225933250b"],["/archives/2020/05/index.html","2b2982833570b64cd8a81b2c45ecd007"],["/archives/2020/05/page/2/index.html","099b89b6eaa4036f55aaf9f955ed6dc8"],["/archives/2020/06/index.html","d0f2908530307fc5b758f117475b0ce5"],["/archives/2020/07/index.html","4f13160a96ad07c1db901fa3ec5215f4"],["/archives/2020/index.html","510c90db5fa37f5a6e18f2e4e9309849"],["/archives/2020/page/2/index.html","9978bd89ab3c5481b7ad8825219199c0"],["/archives/2020/page/3/index.html","20850944845af8de14d1c845898d4392"],["/archives/2020/page/4/index.html","1a24043547bea5599206511f5897e6a8"],["/archives/index.html","a0dffe540d95b08204abf3190581e052"],["/archives/page/2/index.html","23e1707378bd36ade97b6f756fa03120"],["/archives/page/3/index.html","0e6ec127291378874cb7bee36f2fbd2b"],["/archives/page/4/index.html","ad85f559abbd535946f4e676f2011048"],["/archives/page/5/index.html","9d911c0b6bbec26d95bc8dcd7cf9f951"],["/categories/index.html","45752ae8a5ff496090acdae4e377a431"],["/categories/技术/index.html","ebe67e9421d4cea92d1f27542a41d178"],["/categories/技术/page/2/index.html","88689e49fe83e7fadb69bf4b656e94c3"],["/categories/技术/page/3/index.html","6507f2025746b143c23f579053656b5d"],["/categories/技术/资源/index.html","8cc58a7fa74e37aec6893167d5763b2f"],["/categories/技术/转载/index.html","1198ea377f479a56d291fd0cc6f3cdd4"],["/categories/杂谈/index.html","b48674aa7d0368e9c4d4773bfc20a101"],["/categories/生活/index.html","459ae57d5baa9fc6688cd64c4bdd1c77"],["/categories/生活/技术/index.html","64d61a0bbf5f4f7e80df2d19a6ec7b63"],["/categories/生活/技术/转载/index.html","06181308d52dd82a8b7b9eaefe8202b8"],["/categories/生活/随想/index.html","e4f260b764611b9addf61d23af276f79"],["/categories/资源/index.html","3dfc863ee7b16699813511bfe21697b9"],["/categories/资源/转载/index.html","3e5d2638e5e375f65da258270e2ecf3c"],["/categories/转载/index.html","7e1025c9c424cbfd851abddbd9b03c14"],["/categories/随想/index.html","ab9b5929586bdeccbbb122e4c5d371e2"],["/css/highlight/a11y-dark.css","a20494b8eac6d2a4bd568aeccdf5f00f"],["/css/highlight/a11y-light.css","90b5b613c1dd1187021d2f5a99e6470c"],["/css/highlight/agate.css","c907404481a216584f97c3223fadf8fc"],["/css/highlight/an-old-hope.css","91d1b59fcc8cc158cf7e20d179d5489d"],["/css/highlight/androidstudio.css","0d677b7deba480ae378ea1b5c6419899"],["/css/highlight/arduino-light.css","5b0d03bb24d1a895370aa68920c97d31"],["/css/highlight/arta.css","6293ccada6b11b85dfe4c7367cd6ab7d"],["/css/highlight/ascetic.css","64b84fa123b38a834cd2e222b7e460f6"],["/css/highlight/atelier-cave-dark.css","0955fcec67aeac9151692ee68506acf0"],["/css/highlight/atelier-cave-light.css","dd6957547b5fb27c10d41023647c650a"],["/css/highlight/atelier-dune-dark.css","a8824e9419b812636e8fdd4c5003ae80"],["/css/highlight/atelier-dune-light.css","ed3415b163b0131c7850e1ef0ea01c91"],["/css/highlight/atelier-estuary-dark.css","e35ee9d513ec5665482ddec52fbc7708"],["/css/highlight/atelier-estuary-light.css","9679c16d11ffbb59957dd141a468ab63"],["/css/highlight/atelier-forest-dark.css","3ab6b1271f35a9cbd31003bc2b5127e4"],["/css/highlight/atelier-forest-light.css","978759df22b7acbc22ba9e04c3d86bc1"],["/css/highlight/atelier-heath-dark.css","34efc6adcaa8ca96c18ec7f4c662f4b1"],["/css/highlight/atelier-heath-light.css","61e5d56f20613da6f1354397223a2c29"],["/css/highlight/atelier-lakeside-dark.css","f65ce97ed49d248563a1387f86808185"],["/css/highlight/atelier-lakeside-light.css","71dae9934007397f2f24b519409afe2d"],["/css/highlight/atelier-plateau-dark.css","58651d27a71adc230d6199209e701bad"],["/css/highlight/atelier-plateau-light.css","e7668cdee57932d61ff8f015456ddb02"],["/css/highlight/atelier-savanna-dark.css","bed6ba9d76149ded8bddbf25d9e41f78"],["/css/highlight/atelier-savanna-light.css","ee9aef6af3027a3c9d987ab50bb5421e"],["/css/highlight/atelier-seaside-dark.css","d947f768fcc336eb0b33d941b67db998"],["/css/highlight/atelier-seaside-light.css","c150f626462faf99312e6057266fa311"],["/css/highlight/atelier-sulphurpool-dark.css","67ee6f7a72694b4560df403ae178a6ac"],["/css/highlight/atelier-sulphurpool-light.css","a07802508fee7475bbce4effe82a73a9"],["/css/highlight/atom-one-dark-reasonable.css","207fd31022bae48b4349d27e79d9e844"],["/css/highlight/atom-one-dark.css","1ab71b3afe1e6ce89b3299157643e756"],["/css/highlight/atom-one-light.css","9522d24b64a701da53f08198d101eedc"],["/css/highlight/brown-paper.css","a0a1fffa1b9c8076c3a744bb6dd3f819"],["/css/highlight/codepen-embed.css","6b369064628b29e6b9cf45b53aa99deb"],["/css/highlight/color-brewer.css","9a49e9084d1d9004bace1ec581fd7814"],["/css/highlight/darcula.css","8614a1260847b61703c387affd97794f"],["/css/highlight/dark.css","b3489a73fcd7f58a0da71e8a0d53099b"],["/css/highlight/default.css","f1212b8e40118d2266115e6758ab3bbf"],["/css/highlight/docco.css","d2a09e54aa7628937c62dda56bfd457e"],["/css/highlight/dracula.css","56ac35e820e6be9df68d9323e579a93b"],["/css/highlight/far.css","d5e309de03e5671b94617233f543342b"],["/css/highlight/foundation.css","bb3405e19c9bc5732c9770a1a4d30be7"],["/css/highlight/github-gist.css","84e18e105798e790979d7295168da19e"],["/css/highlight/github.css","4e7bd2d75aa51bab444e7131aee86bb0"],["/css/highlight/gml.css","cfc39fd3338c5580d42ca4155ded2df0"],["/css/highlight/googlecode.css","b49b5f8a4bd05c1841de250bcc38e4eb"],["/css/highlight/gradient-dark.css","8c16aa68cb9298bcae972399bee825e2"],["/css/highlight/grayscale.css","b7a6ac7075ba8eb36be90f0884b3500d"],["/css/highlight/gruvbox-dark.css","07ad3a25234e5e2d0f034539e6619218"],["/css/highlight/gruvbox-light.css","3766b4a0985afd8a5e0f2c959399780c"],["/css/highlight/hopscotch.css","64777bdd68d5c7732e94a0a5bffec9c3"],["/css/highlight/hybrid.css","56043b4c7c0c9338861e4b7b800c0893"],["/css/highlight/idea.css","3e35f51a7e5e592e96f7d27ccca12a56"],["/css/highlight/ir-black.css","3de472308d12da775c654da00c24c6a2"],["/css/highlight/isbl-editor-dark.css","8cad7eb1070e975a4c00ee43a9f1adde"],["/css/highlight/isbl-editor-light.css","c7a4e6464c60098935171e628b72fb60"],["/css/highlight/kimbie.dark.css","0a8fab6f233d0a5c416fecb899220922"],["/css/highlight/kimbie.light.css","f2ca0891cb13f4b8c3f8dd7e0488e4d2"],["/css/highlight/lightfair.css","2a1e1e7083ae4f98f5651b7c486cc5e6"],["/css/highlight/lioshi.css","7a3af58b713ce46297fd80d06b7d1701"],["/css/highlight/magula.css","cc62f79f5b168d1fe7571aa8a0beac1c"],["/css/highlight/mono-blue.css","baa1e074f4b48b14a3169726cef72c0a"],["/css/highlight/monokai-sublime.css","a9a5a305ed55a53eeed3b44cd63bd3d4"],["/css/highlight/monokai.css","68e161817c1696d8881c2eeeb2fb6b9b"],["/css/highlight/night-owl.css","268de8568fe8b2750242acfa43cda7a5"],["/css/highlight/nnfx-dark.css","64625fe0322eb605e796de13dc94a589"],["/css/highlight/nnfx.css","0ed42e8c231c0cd0b0f4642cf0133006"],["/css/highlight/nord.css","4fc704c12c9ced4188646e36ac834f3c"],["/css/highlight/obsidian.css","43e4be00ef26e49a1360edab7864ce46"],["/css/highlight/ocean.css","70f4f9955df0c24f3e804ca57f61eaf6"],["/css/highlight/paraiso-dark.css","dd6fef1925a18ce38d767b6fce4eec0b"],["/css/highlight/paraiso-light.css","6d2e16a00411f04da9456e5dc6a73ec9"],["/css/highlight/pojoaque.css","e28690c663c9afc70cb73901ffb03faf"],["/css/highlight/purebasic.css","e5e3dbf352220ffdfbb14899c7a593d8"],["/css/highlight/qtcreator_dark.css","0b2a26717231b793060b36b27d871ec0"],["/css/highlight/qtcreator_light.css","158e9a3f2636b6cd39a16b52eababf65"],["/css/highlight/railscasts.css","5f0caf5175aace02bd8f5b911e16f024"],["/css/highlight/rainbow.css","1cd49348a479fe649e5e667172ee4ce4"],["/css/highlight/routeros.css","4f95f25d4b2714201827f9f53ef96bd6"],["/css/highlight/school-book.css","276e45786a2c314f20560985e14bb5e5"],["/css/highlight/shades-of-purple.css","5fdac47ebbaf959a5412cd5b9aab528d"],["/css/highlight/solarized-dark.css","cde2503ea11b15625101aab1122a6ee5"],["/css/highlight/solarized-light.css","bdfc6ff89ac33bc9cd25e384ba871893"],["/css/highlight/srcery.css","9d625681f666174bc8b4d5f1e0ef8886"],["/css/highlight/sunburst.css","4784cf41d5682d4e6f2fef3978e28737"],["/css/highlight/tomorrow-night-blue.css","02da1b01d7fde990877f93171e964bfc"],["/css/highlight/tomorrow-night-bright.css","56f05970cbd70d6c8388ad3fcbef061a"],["/css/highlight/tomorrow-night-eighties.css","66343d532212322afa71944ab49cdce4"],["/css/highlight/tomorrow-night.css","c5774dd6d7dd7cd293277de9da9f6bc5"],["/css/highlight/tomorrow.css","dfb9a6af5490a839e4249c16f18dbee9"],["/css/highlight/vs.css","7bf6795ed00eec5f8fa13a13199568e9"],["/css/highlight/vs2015.css","fd72f379c84e7b49c5419e17c8121e6d"],["/css/highlight/xcode.css","67696bd052ffd25856312e40515e780d"],["/css/highlight/xt256.css","e0e90b4fdfb7e6e632699cf458fc5fd6"],["/css/highlight/zenburn.css","4135894740e27cd1013e1ba66b8b229e"],["/css/style/dark.css","4e6ad44d1b5d8612d7c610fe747c9d01"],["/css/style/main.css","6c155d53c6dcb253deec51e087560a98"],["/css/style/note.css","06e6681c11abb97b24a06df6f3a70921"],["/eating/index.html","9d4ce2c16c6769fc39e808e2f5512bd2"],["/index.html","c4c16249788680d91d8baa9711682ed4"],["/js/b2t.js","cd0f8ec03fec335251ac9c0c051f7cbf"],["/js/darkmode.js","96eb9ac7f1c1f415261aa7dd6dc5f024"],["/links/index.html","4dbbddf180eb5f8e769f6632e9561aaf"],["/links/link.html","ccd9e9c4dfafb4bd7afc6df20bc1a6f9"],["/page/2/index.html","04ed72978e3c02fe64ae4910e19ed8eb"],["/page/3/index.html","0af993ef360996451604d4b02a04c593"],["/page/4/index.html","30edc241584fe34a53fdf00b85e274fb"],["/page/5/index.html","baa5d3643483830829c4b26878cac5f9"],["/posts/10798/index.html","89f29e4399a555de1ab888d49e5d2b7e"],["/posts/11961/index.html","0a7883a336c3854f3a10acfa2de061ca"],["/posts/13009/index.html","66e1cb259c42f06f9673b9abf2146f61"],["/posts/1478/index.html","fdee7994096748e98ed1b3445037a1d4"],["/posts/16931/index.html","eee7bdf8b997a05e598ce1e85cc66f76"],["/posts/20708/index.html","0b8178977c1aefb407d6fc3e9895bdba"],["/posts/22338/index.html","b9506dabbbb18439ed43f4fd1063fbff"],["/posts/22378/index.html","76a352bd00f6c2bf7af33a76d2089e33"],["/posts/24380/index.html","43e7c6327034844dcc730740f48bf001"],["/posts/26484/index.html","6e7d8998dd64c6f98c93502719f9cedf"],["/posts/29606/index.html","e3bb1664d503d2552babadeaa384f77d"],["/posts/32449/index.html","dc8a9fc8897500022bc63905b8027488"],["/posts/3315/index.html","98a597c0a76fb218e0d135dd107e4c47"],["/posts/33197/index.html","4c22414a9ee732fa75ca191fb6cd1ad2"],["/posts/33306/index.html","fce4a03b6b41542b834e11834706064e"],["/posts/36128/index.html","2a6f2ffef9d6c352a4caaed27b06ad20"],["/posts/37557/index.html","e392f7ceeff82b24d37b994d00b11bb7"],["/posts/37773/index.html","5889ac40400a7806908eadedc620a583"],["/posts/38589/index.html","6c7887b3362fd3f53f6193fe75c82d33"],["/posts/39661/index.html","bff2d5a035eeb11107abafceec7f5530"],["/posts/39842/index.html","990ad43c25b63a51501a6922a64034e0"],["/posts/39942/index.html","f5f2939739ffdb76815d2ead300d723b"],["/posts/44194/index.html","4469f74540ec3a2b7da92887e431a445"],["/posts/44804/index.html","6b43060dee2934a7a9c6ae7587c27af5"],["/posts/4588/index.html","93525790ff5c5addf6cb3352fa760dda"],["/posts/48089/index.html","bd0983338b0db51a007e176f39cb2bb4"],["/posts/51892/index.html","153816c71beb1e0db672479f1199d6d4"],["/posts/53289/index.html","295c744e407700f95fc0d1e6d3149c13"],["/posts/54711/index.html","d1dde20927c8de66850ffba433afd256"],["/posts/55302/index.html","99ec8ff13a6745d7dd296ee27e8fe81d"],["/posts/56653/index.html","940ff515bab8f54527c10dca5e12c1d6"],["/posts/57345/index.html","6aa79de3524fd004556bdfc7cafc5c9d"],["/posts/60197/index.html","5b92a3ed7344f2a0878a2a02c334fc63"],["/posts/60788/index.html","c77b54162968c06c573e4616f1ed9445"],["/posts/63676/index.html","f3a0d35be51816cbb39e8627b92b8536"],["/posts/64257/index.html","8b1ee1d748aefac116530a40becb5574"],["/posts/64865/index.html","c28988eeb5793061af54b0de8b7b5383"],["/posts/65311/index.html","5e9a11de7b865c67bf82813f33b5a74f"],["/posts/7324/index.html","a7bac4d889bfb9bc94f7af61a822c292"],["/posts/8688/index.html","7414c6b8d588ffae8a900fb8b0d04a83"],["/posts/9687/index.html","578792b0ad2a093df71699cfaa54d5f8"],["/sw-register.js","262d7575bcd999d2bdc2742dfcf5a645"],["/tags/index.html","a2164e0c1524e5c601d88075ee549a12"],["/tags/书单/index.html","b16fa501bc7339f77cf62fe37880c5b9"],["/tags/公告/index.html","e74a0c18b15dfada80b90a410e0a381c"],["/tags/悦读/index.html","460b236ac5541091f952cf160ba58d75"],["/tags/笔记/index.html","5fda501a75990dc1c665e44da43b055f"]];
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
