/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","b8d4c80e80035c48a9c0019cb32d6c46"],["/about/index.html","6fe4b4bdb18223665b25569ffe8d3eb5"],["/archives/2019/12/index.html","a96ba7d996e93907a0a7f20832a0131c"],["/archives/2019/index.html","c02cda459e4bf0896b381c92ea160ce2"],["/archives/2020/01/index.html","9b78f2c1a4c2422157dc3b80dfa18b22"],["/archives/2020/02/index.html","c82f085b8c096675f6b1f7e759427e41"],["/archives/2020/04/index.html","78f4a56d62b55560c0051eddc5ddbca0"],["/archives/2020/05/index.html","d5f4aded54640015f0bec7f56c445688"],["/archives/2020/05/page/2/index.html","7bc1db07d65ca54a2b62d7e124d9221b"],["/archives/2020/06/index.html","521517cc377f50f8545751f64341e86a"],["/archives/2020/07/index.html","fd9505970dcf42f76b4f1abd129e4f9c"],["/archives/2020/08/index.html","721209fd595996e47207f6e0c5e804ba"],["/archives/2020/index.html","8846bac58833ac3d8ffff0ace07e0c7f"],["/archives/2020/page/2/index.html","a956df9c01250601abf76c997a4dc062"],["/archives/2020/page/3/index.html","c1be21e3b414ce5a120d8d4d335943ec"],["/archives/2020/page/4/index.html","e0b8c48b2c6653defcfab5d1a989946e"],["/archives/2020/page/5/index.html","e868fe007f47e60b42c2286407b6b351"],["/archives/index.html","2b36bc24d1ec795545d5599888aee7ce"],["/archives/page/2/index.html","7ec2100c8f3fc7e591917572b07fdcf0"],["/archives/page/3/index.html","a998d81a2177f283153636928c575ab6"],["/archives/page/4/index.html","c6163ecc71f1bf6c678c17aa1aaa8a37"],["/archives/page/5/index.html","5e920536c7eaed531513f098bc5793f2"],["/categories/index.html","1ee8bf80478361bd3e1c53b840f1263e"],["/categories/分享/index.html","09badcbec0c4290633aa7c16f9d3fc3f"],["/categories/技术/index.html","92b204a32acb568ae28f8f186a58647f"],["/categories/技术/page/2/index.html","d456c6ebcc4bf35d1ee478568a40346f"],["/categories/技术/page/3/index.html","61ebd342d8a07294ecceb6e48ec203df"],["/categories/技术/资源/index.html","3ee01c7cbdea0766bc535fc56743666a"],["/categories/技术/转载/index.html","6ddaa157255c283b87a4024b0a0eeba8"],["/categories/杂谈/index.html","5f2d79176b1c30306e19b772d512df81"],["/categories/生活/index.html","d28363387df6d8ed8246f1c4fadac539"],["/categories/生活/技术/index.html","71906f2ffc5e50352ec10959ad724fd8"],["/categories/生活/技术/转载/index.html","e738a5e06698b4a9e6f4f967fbeef171"],["/categories/生活/随想/index.html","1ddb5e2e2f1e44ed37a22e1080d3385a"],["/categories/资源/index.html","9a4b0111adcfe2e9b585b4ae9115e770"],["/categories/资源/转载/index.html","3bbaebba5d21d4a571810acf1280472b"],["/categories/转载/index.html","0a70c4ce60b95a2a0bfd97f3d2d931a0"],["/categories/随想/index.html","5b86fa926242338701a745990861931e"],["/css/highlight/a11y-dark.css","073c9230375f1017a0d5b89946c91539"],["/css/highlight/a11y-light.css","7591478176c9b8c742d0021427859cae"],["/css/highlight/agate.css","89e85d23aca4713392d398f3d4f043c9"],["/css/highlight/an-old-hope.css","88fb822cc6ad66518033301a64341bc4"],["/css/highlight/androidstudio.css","a0637ff9ee1cd04f5c670d7bbe871106"],["/css/highlight/arduino-light.css","5c89b88af995c56cb3142938b923ac7f"],["/css/highlight/arta.css","aeab99b340e9d6804fe0566b8a8bfdfa"],["/css/highlight/ascetic.css","198a244340e67146b3181d32832f573e"],["/css/highlight/atelier-cave-dark.css","97d478d76a7198aaae979df1250c9fca"],["/css/highlight/atelier-cave-light.css","10d5d0c06e490bda5246344577c7cf46"],["/css/highlight/atelier-dune-dark.css","a3033b88a097a8b504a3cb7ba5769c0d"],["/css/highlight/atelier-dune-light.css","d3ae17206642df0cdb0fbf2b84bc4d2a"],["/css/highlight/atelier-estuary-dark.css","496f68943807bd1119d1bbc5b62ed296"],["/css/highlight/atelier-estuary-light.css","e2cf0dd7f32b41f55586a16b5e0044b0"],["/css/highlight/atelier-forest-dark.css","ce5af4d7b97f30af327a6eb4ea936525"],["/css/highlight/atelier-forest-light.css","ce9989efa31924b29506b79ee7c52be6"],["/css/highlight/atelier-heath-dark.css","b5caf00b97b81b5cec741518400f9f0d"],["/css/highlight/atelier-heath-light.css","b82904cfe4df1cc50af41401dc3df910"],["/css/highlight/atelier-lakeside-dark.css","4cf97b837e5f15867084b6b9eac8f0bd"],["/css/highlight/atelier-lakeside-light.css","62243c39f722cde4deb597130eaf2f10"],["/css/highlight/atelier-plateau-dark.css","38400996da0d70464ecb3c1bd3a4f13e"],["/css/highlight/atelier-plateau-light.css","671e53c184a6954e39a6245d51ed8c3f"],["/css/highlight/atelier-savanna-dark.css","0ec9120c7ff33da115eace58fd76e45c"],["/css/highlight/atelier-savanna-light.css","585f5a1e07e16868fcf0c9cb9825e5af"],["/css/highlight/atelier-seaside-dark.css","2dc4b79107c1f34c03d4c7ea17061487"],["/css/highlight/atelier-seaside-light.css","9a79cf4d3b57a499ee36019d4f9efaea"],["/css/highlight/atelier-sulphurpool-dark.css","061ca00d0fe3672fefbed969081a575f"],["/css/highlight/atelier-sulphurpool-light.css","c033ee9de55992a873425767da6ec15a"],["/css/highlight/atom-one-dark-reasonable.css","3cfde7e783e747b2e8b3835e3cded68f"],["/css/highlight/atom-one-dark.css","8cab50ca582dba6150417e1f23aa756b"],["/css/highlight/atom-one-light.css","fb05623d5d70855e38c5c9a727d7f837"],["/css/highlight/brown-paper.css","001b18711076d736d97072f77b23481b"],["/css/highlight/codepen-embed.css","598ef74f7a0081c45ba4fa45c6bcf323"],["/css/highlight/color-brewer.css","0d114185ae935e75efe1b4b69fcfe2fc"],["/css/highlight/darcula.css","5b0c9305f7c5453ffc46486e914d6ff2"],["/css/highlight/dark.css","bd19f8b2b52e58b8527b5cbc1fed401b"],["/css/highlight/default.css","4cbd86c8ebd31bb3fcb0d049c0679864"],["/css/highlight/docco.css","33e67901379228cb471ef5386fba1bda"],["/css/highlight/dracula.css","b7ac12b6e0a67c8474c202dfbe074ad7"],["/css/highlight/far.css","592cfeb63cf883af893f5637fa6be1d8"],["/css/highlight/foundation.css","0a32a1c51e673e079f930bd1debe37a7"],["/css/highlight/github-gist.css","86b7b35333aa3591f84f22151ba36a33"],["/css/highlight/github.css","09a3709fcf6d21aa806227edbec02a2d"],["/css/highlight/gml.css","bb334c8b6926f9b99b06da0f0a744c05"],["/css/highlight/googlecode.css","647107b5d5e30ea7320b12af8d1d0c52"],["/css/highlight/gradient-dark.css","0fafbba6c2e9f967795a295b489c7456"],["/css/highlight/grayscale.css","59c19f29b6e88fc7f835a39a4e5fcf9d"],["/css/highlight/gruvbox-dark.css","03a21bbd0071ba13fcc4a775d5b623c0"],["/css/highlight/gruvbox-light.css","5b9f97ab24ce5bf18a97e5da72e5f366"],["/css/highlight/hopscotch.css","bac8b6c9027c449ff92337cd5c663dd2"],["/css/highlight/hybrid.css","67cde8c6e61743b8830d921605f579c0"],["/css/highlight/idea.css","6e1dd9418b097eb75936fb9b54a23ec0"],["/css/highlight/ir-black.css","d3f8ed9b4e668c79e854baa9c3a74c54"],["/css/highlight/isbl-editor-dark.css","0e5122fe9cdb4f2fe0b6a8acf74b3f8b"],["/css/highlight/isbl-editor-light.css","ae56c2c673f370f78b9f0a3adcd47f91"],["/css/highlight/kimbie.dark.css","dc36732af5cee7cbe8ac8f24b9117985"],["/css/highlight/kimbie.light.css","41f55fc72b215233691dee7ef1cdd708"],["/css/highlight/lightfair.css","493117539afe77a1e362414c910da69b"],["/css/highlight/lioshi.css","0d5168a7488c02da371dcd79b14ea343"],["/css/highlight/magula.css","60744bf2f5974e8d3adc0b2a43b9341b"],["/css/highlight/mono-blue.css","1351ed4222fd2794d53ba12365c76fc6"],["/css/highlight/monokai-sublime.css","53e64c05ac2f565f33c3016dc53cb37b"],["/css/highlight/monokai.css","620ff8e50d25deb476689d12644ea528"],["/css/highlight/night-owl.css","77be19ded3128b900ba809e65e9e6b6a"],["/css/highlight/nnfx-dark.css","e32cf37e8e606887705bb13fa7bb8c99"],["/css/highlight/nnfx.css","cc328bdba3fd245ca3f4e9e2494a4d76"],["/css/highlight/nord.css","361ada098eb97c397f755e3cdb381ae6"],["/css/highlight/obsidian.css","3a4b219acea27b1020a02d8ec109617e"],["/css/highlight/ocean.css","806a0874014deb7bb94a67dff7095469"],["/css/highlight/paraiso-dark.css","c705c524d183cf808fef003d089532c1"],["/css/highlight/paraiso-light.css","baa3fbb2c84e3d41fc482d46f516348b"],["/css/highlight/pojoaque.css","3f294b36105f879eab8770f25ed3fd74"],["/css/highlight/purebasic.css","d0cc485fa5fcb08ce74373cf9ebb4a33"],["/css/highlight/qtcreator_dark.css","b97c93b9b5c8b5150356cb04347cfda5"],["/css/highlight/qtcreator_light.css","63e6d15300664c2d6c2ca510497640ce"],["/css/highlight/railscasts.css","beb11a252d134af94a53a1dbba3981bf"],["/css/highlight/rainbow.css","3378380481ced255b53b3f83f487c2e2"],["/css/highlight/routeros.css","a102341957dd03bdc863acc7992867de"],["/css/highlight/school-book.css","80f420e0b6ac514f3085ce6752cbcd28"],["/css/highlight/shades-of-purple.css","47350288d41917c5a7d9cd36919d7d7e"],["/css/highlight/solarized-dark.css","0b64c747ada9aa440ec07ffbcf2730c7"],["/css/highlight/solarized-light.css","b22acc8ed135d0de7fbee41a6879f820"],["/css/highlight/srcery.css","6bd744bcdfec6a115ab2083ac2ab5ff8"],["/css/highlight/sunburst.css","f21a610b318b6afdc229982ecaf1da35"],["/css/highlight/tomorrow-night-blue.css","05fe7d4bc0b881cac00e1ee7c0887286"],["/css/highlight/tomorrow-night-bright.css","46c41b936d20c417a7ac3b759c261d4b"],["/css/highlight/tomorrow-night-eighties.css","bd59dc78fdab76f2d510f38d1adda895"],["/css/highlight/tomorrow-night.css","6cbe17f86c9860933d1fb81a228f0b26"],["/css/highlight/tomorrow.css","4c05bce16a4eefb1e0a28846679c0319"],["/css/highlight/vs.css","470ae79b56f9ee00e72880ed9da17ee8"],["/css/highlight/vs2015.css","34a71637386f1816a4f7ad3c3991d61d"],["/css/highlight/xcode.css","0499b7932045142d921238e41b5c9a90"],["/css/highlight/xt256.css","f45127a99014bec17a183507b8406ea7"],["/css/highlight/zenburn.css","f8df782234d5955e0fc18322aa0737c2"],["/css/style/dark.css","7da8373dcf9259e083143e89038c74f4"],["/css/style/main.css","c1cc2dd5d2cf117cc74669bae23d992c"],["/css/style/note.css","42217b2c97207e736aaacc4797101211"],["/eating/index.html","8bbbb2cac763964f056dd1ef210b7a2a"],["/index.html","5826880be57d74546b39ff5f30c3a759"],["/js/b2t.js","cd0f8ec03fec335251ac9c0c051f7cbf"],["/js/darkmode.js","96eb9ac7f1c1f415261aa7dd6dc5f024"],["/links/index.html","a76d930bf34c95998467bab684d25c5e"],["/links/link.html","9d67fcb16ae18f58bd07cd59455aad47"],["/page/2/index.html","36c457fd608f5cf06fa0589899b0426f"],["/page/3/index.html","9eeacf8e2c073c68b168efc1a2098fa6"],["/page/4/index.html","be2cd5b43f6b591df96873f68b83b785"],["/page/5/index.html","d22e5735e463ea8fecda179a739b58c6"],["/posts/10798/index.html","1b0913dfa106d404005e7ac4fdbdbc2e"],["/posts/11149/index.html","aeb18925e181480cd119ec5b86728d3e"],["/posts/11961/index.html","00601ee809c9122fbbec9631d6d368a3"],["/posts/13009/index.html","8387f4d8d25b0f477de0a0b9d58edf74"],["/posts/1478/index.html","055c3da2b88e56798affc376187d77bc"],["/posts/16931/index.html","fac70d6bd9bfe78bbc3c83bf6ba710b9"],["/posts/20708/index.html","1bba6bc7ae7af34bff345def1581fe1b"],["/posts/22338/index.html","a4b2a49721b10fad8a5ca8b6e57b1671"],["/posts/22378/index.html","5e1985b9883fef4431189f63a1542696"],["/posts/24380/index.html","3314dff5f126ad46ce79f886ec059213"],["/posts/26484/index.html","0c6ac6a33ee39b274441917aa7585b7b"],["/posts/29606/index.html","d08afdd7b315d51287d61fa66ede4951"],["/posts/32449/index.html","2e652d8bfea5d3428612c6c0a004ea5f"],["/posts/3315/index.html","50236ba674e1381810dbb46e243cc86b"],["/posts/33197/index.html","3b4a21299a2b81f380cf79e4e97b4532"],["/posts/33306/index.html","fff7ca7520017dddd18904a02319f14e"],["/posts/36128/index.html","f8ae87d5b6cdfb6a7657ab063bbf21c3"],["/posts/37557/index.html","ff3ff1920a1ac0d541080de8bb1f4f05"],["/posts/37773/index.html","064724297b9e299bc8b6bf1180453920"],["/posts/38589/index.html","e71d7ddc6e48714cbcf8889fe1bde61e"],["/posts/39661/index.html","155a77eb3b7d0c5b085dd3457e2dcb7a"],["/posts/39842/index.html","fccd2dce336801940930dca70e65bcc5"],["/posts/39942/index.html","94669a820c2f936d1fb9ade6c503f6c2"],["/posts/44194/index.html","b19e98c3a878365cb91e9f8fb2706666"],["/posts/44804/index.html","d6510b514f7466a51c96d9f46cd39843"],["/posts/4588/index.html","2b45ac37078c00c9702666c75473edde"],["/posts/48089/index.html","50dfa4d4ac5ab42dfbcf5806471d5ff1"],["/posts/51892/index.html","f767dc476f36daa23261018d54c3b67e"],["/posts/53289/index.html","7f474fcd2dcf9cae7e71caac0f53d05e"],["/posts/54711/index.html","c064e8dcbb06c37c51f15c4c5df913ba"],["/posts/55302/index.html","5635d0f120fbfad2b6f80704bd469bc2"],["/posts/56653/index.html","8d0b4005b4af8108c389c83d2ad7fbea"],["/posts/57345/index.html","208ede41c6bbbc0401e8e096b6dd8e36"],["/posts/60197/index.html","36dfdefc8daf8e29d3c8db2b75a4042e"],["/posts/60788/index.html","b909bad5155910cf3d85784adec578fd"],["/posts/63676/index.html","a7ed3f1ba83a93ca12ece9e6243fa080"],["/posts/64257/index.html","5d50d2f15b8c9fa7a91e16c3fe41538a"],["/posts/64865/index.html","9ffb9d4b60f51d3b8f77e6eb93362bf6"],["/posts/65311/index.html","39cca723ad04965e7e3b1de6a748c93f"],["/posts/7324/index.html","4ea905c191398dfd9e82175e01c31427"],["/posts/8688/index.html","7e36c5725bc1e0a2f7aecc1f1ad34367"],["/posts/9687/index.html","534fdfb9b4c63106783d04f5877c9598"],["/random/index.html","404e4250f842f5258a05e23dfe7e5cb7"],["/sw-register.js","f8b72e39e928fcdb6d4fdba7b7f3ac7a"],["/tags/index.html","c17a9cdf816a11ad574f16c089da674c"],["/tags/书单/index.html","be0150b3c6110c39fd326e05c2795337"],["/tags/公告/index.html","f9e52f907fff5beee15cc822df930165"],["/tags/悦读/index.html","3cad5d3e8b5a86b93196e918212125c8"],["/tags/笔记/index.html","2f9147af26fe8d22feb7175176ceecfb"],["/tags/语录/index.html","a2590ddee4b2ef4e5604b754b2465adf"]];
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
