/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","5ebfc3dae7693bfe97f5edc9e0c778ca"],["/about/index.html","b8674947c252b0b79324927284e9fd63"],["/archives/2019/12/index.html","c6f26f58ac08a1b23809fd3c1c98d373"],["/archives/2019/index.html","da0b6ad1d8a99dd0caddf84699aa4f9b"],["/archives/2020/01/index.html","d7db373203d29a22b00c630387d43871"],["/archives/2020/02/index.html","123ac22e83144a22cc22bd882474b9a8"],["/archives/2020/04/index.html","e4bfa4e61d6fe67323f3a7fbefcc4fbb"],["/archives/2020/05/index.html","3ea5d87be7444e6c66f56afb21d1fc88"],["/archives/2020/05/page/2/index.html","4c93cd246c7dc5d547179b89204584ba"],["/archives/2020/06/index.html","bc70b505139c21f04a23ecec08694539"],["/archives/2020/07/index.html","d3b2426b0d5c7cf5121101c0f29fe7f1"],["/archives/2020/08/index.html","244d7a87acd0de9ade526efd8448ee76"],["/archives/2020/index.html","339b25bebc465b2c597a41aa9d7fe2ee"],["/archives/2020/page/2/index.html","e87d89ccfa659885204e50813040ef70"],["/archives/2020/page/3/index.html","5fd248f8465aed0f3fdf054565843ae6"],["/archives/2020/page/4/index.html","eee21f30d98a418a0123a4f6fc31791c"],["/archives/2020/page/5/index.html","d273867916f15acd6aeec70b0a0ffaf5"],["/archives/index.html","e8832c4dedafaba1c381e9a8b558f291"],["/archives/page/2/index.html","ecd45a144035ee1545ff43afaf3cbcc7"],["/archives/page/3/index.html","1311c7d57c0ba2ad9d5fc7bd21087f84"],["/archives/page/4/index.html","1fd2f6b2d8b637630ea032733e5512dd"],["/archives/page/5/index.html","e603514acd4ede76a2bdb52111ad2202"],["/categories/index.html","7a6c3919db37fb1131072f58e0d2abe8"],["/categories/分享/index.html","4ca65fe6f6c0d43aebf4232a581e04d3"],["/categories/技术/index.html","259099e6c792ed6c875310ad502ebfcb"],["/categories/技术/page/2/index.html","eccc46a314f342633330194997e44ffb"],["/categories/技术/page/3/index.html","c0b0ed400861bf3e679391d9ab9a8ce2"],["/categories/技术/资源/index.html","0ebc8615edefc19300b3450a5d5a9fdb"],["/categories/技术/转载/index.html","b6302c19c3faa06804fff5b3c5b3bbdd"],["/categories/杂谈/index.html","d56e541d4aa1238fe65b7ecf363a2ddc"],["/categories/生活/index.html","6914590d82868dadcfc084ba8ff4abd8"],["/categories/生活/技术/index.html","d96b41f7c24818b1d290a5d2e13ac9aa"],["/categories/生活/技术/转载/index.html","1e72dabc992b1c101a132a32001332fa"],["/categories/生活/随想/index.html","ce1a9431bb2f98642917cb5131844aa0"],["/categories/资源/index.html","99f09c9307a9cd98ac2948cd2f39f0fb"],["/categories/资源/转载/index.html","ab9c53062d82ad1cec504d26ac072b5f"],["/categories/转载/index.html","ce17b1160bb7843e9b71df95c804e352"],["/categories/随想/index.html","bf5dd6baae241acc81388c34127a8b55"],["/css/highlight/a11y-dark.css","263b4eb6722ca83a8fd55f49c069163b"],["/css/highlight/a11y-light.css","51b2a254ffb969f0c25ac6057eb68f5d"],["/css/highlight/agate.css","4fcaf37d90e8b8f36117a8244c9fea12"],["/css/highlight/an-old-hope.css","390c1d29bd125360361ec107b0f72363"],["/css/highlight/androidstudio.css","c0efaca003cbe9655e68fb7a07111a11"],["/css/highlight/arduino-light.css","97d3e5ac0cabe619254e0d169991d8a2"],["/css/highlight/arta.css","889b970454c1efe0f0911d9398c1e89e"],["/css/highlight/ascetic.css","efeccf6e061c7a76b9d1fbb4ae75d1ff"],["/css/highlight/atelier-cave-dark.css","53027478d14018eac7b054c0e51976da"],["/css/highlight/atelier-cave-light.css","5a8162b7cb1a389be1cd3d686816dec4"],["/css/highlight/atelier-dune-dark.css","9137ea0be4ed6b1dae590700c49a7718"],["/css/highlight/atelier-dune-light.css","ce9a9caab9814e117eedd37a73a07649"],["/css/highlight/atelier-estuary-dark.css","3a0565576b8834d8166244701695179b"],["/css/highlight/atelier-estuary-light.css","232df695ba304b79cdec7076638a4e42"],["/css/highlight/atelier-forest-dark.css","429859f936d74b2688666dd1282c8e76"],["/css/highlight/atelier-forest-light.css","1a66d119a3d57ede891dd572c9746b7e"],["/css/highlight/atelier-heath-dark.css","0034e1175c873fdfbef302bd72ecb707"],["/css/highlight/atelier-heath-light.css","d9fed69d97c12cc9e7fcf370898e7f63"],["/css/highlight/atelier-lakeside-dark.css","1ac5c6ccba1128e13e41b7104cbafbd7"],["/css/highlight/atelier-lakeside-light.css","a242a51c843aaaabb170bd8ce8640dbe"],["/css/highlight/atelier-plateau-dark.css","e1de3cf42d3d25a4fbba9e8b171e3855"],["/css/highlight/atelier-plateau-light.css","a0edd02f1fb7975fafebe693259c5b91"],["/css/highlight/atelier-savanna-dark.css","93326d02706d4b78199f53008db222c4"],["/css/highlight/atelier-savanna-light.css","8696e55333926b29bdd38566fc437b61"],["/css/highlight/atelier-seaside-dark.css","f81bdfd4a8797f04a202aacda7ccaa5f"],["/css/highlight/atelier-seaside-light.css","da9995bb6b66b70a9277be376d9f283a"],["/css/highlight/atelier-sulphurpool-dark.css","b574494b1235626c255d6c65ec5c104a"],["/css/highlight/atelier-sulphurpool-light.css","5ec83c67befe51e899e244f4d351b2ec"],["/css/highlight/atom-one-dark-reasonable.css","3176088c71caec7b2063414dcbaa7d9e"],["/css/highlight/atom-one-dark.css","57d5a00648b0f97efe8559d5256b0944"],["/css/highlight/atom-one-light.css","d16252358a90dbe8ca1db8af75d5c653"],["/css/highlight/brown-paper.css","f8705d6d0ccd372896f483fbc26c867c"],["/css/highlight/codepen-embed.css","26cb9e07985b947ab7faac517918135e"],["/css/highlight/color-brewer.css","67eb911c36335ae71cbed73e5ed4386b"],["/css/highlight/darcula.css","3359d0b33de3b52e9175360ca9e0df24"],["/css/highlight/dark.css","dbd42fb4f3b05d2517d86cb39b545e0f"],["/css/highlight/default.css","22ab146dac9a3230feecee34b66e9d1d"],["/css/highlight/docco.css","22fb401295768ca55d84929aab06347a"],["/css/highlight/dracula.css","3c1fda53ba972aa5e123ee5c98a2de1c"],["/css/highlight/far.css","59a3084d974ba7be102a6faca071ef30"],["/css/highlight/foundation.css","1c65a438a3bb734e362c20c105c30018"],["/css/highlight/github-gist.css","629a168ab421fc289fb76288f47f849f"],["/css/highlight/github.css","af44c01f1bf8a6840fd2e7914abea9e5"],["/css/highlight/gml.css","17cdb6432ca9b426fd2c4e6de011c562"],["/css/highlight/googlecode.css","866239eba6f43aa9d187e6d261fb0379"],["/css/highlight/gradient-dark.css","bad021b11e95cc5133d7070d0e0bb7aa"],["/css/highlight/grayscale.css","c110719a5c9fa2aaa36e336260168f3f"],["/css/highlight/gruvbox-dark.css","c539f73a24e9a9d7835bf6bc3f2794ea"],["/css/highlight/gruvbox-light.css","92073bb01041bc4602b2c815f5e95d43"],["/css/highlight/hopscotch.css","e88e862c5e4c1a3fa98489312f4affcf"],["/css/highlight/hybrid.css","e15937d261cbe899f7c9470e88c444aa"],["/css/highlight/idea.css","5d46203e0e90ad8deb6320f2e2d988b5"],["/css/highlight/ir-black.css","6fe56615ba1c971c4e2890cc8baa90aa"],["/css/highlight/isbl-editor-dark.css","f56de96de345f4ae928b46e6261c27ee"],["/css/highlight/isbl-editor-light.css","add71e12a66177f3041314fde5c93b30"],["/css/highlight/kimbie.dark.css","e1143e00d54f8d772bcf7c0dce0d43f7"],["/css/highlight/kimbie.light.css","044c177e0a9a42ec7f3f4fdb171ab8d6"],["/css/highlight/lightfair.css","c4c1bc4196296f2adfd56dcb4e78a172"],["/css/highlight/lioshi.css","7cac2a359d7aa8dc5c4d1d8162f0b8e0"],["/css/highlight/magula.css","e0706a2cd4ce9d2d9c1349029ce09d03"],["/css/highlight/mono-blue.css","3074b08843f101d0c8dbfa6962a82ee9"],["/css/highlight/monokai-sublime.css","2acbaa0493c192a39797faf10433f1c3"],["/css/highlight/monokai.css","0cb340f8c58ef9312d7228bfd3c18108"],["/css/highlight/night-owl.css","a4f156e4ccf7c8db7c7c3f2a1cc42a83"],["/css/highlight/nnfx-dark.css","5bce7370603be0511c0e262056f48c5a"],["/css/highlight/nnfx.css","ff483a510b544dad38f84fb598a7b16f"],["/css/highlight/nord.css","f69765aaf54862edf5baff27f91d2cf0"],["/css/highlight/obsidian.css","0ab709fbc178135c60fa54db2dbaadcb"],["/css/highlight/ocean.css","5361d75fab2edbd3ddb6769f6483f8d7"],["/css/highlight/paraiso-dark.css","97160dc8f2f55211f49cfe92063a0fbd"],["/css/highlight/paraiso-light.css","91fc9d373f18b3f12ef7a4c47a1a2351"],["/css/highlight/pojoaque.css","48142245ab3b4aaa74e34353c062d947"],["/css/highlight/purebasic.css","370c71ef4bf7813910e8f7343c907360"],["/css/highlight/qtcreator_dark.css","cd4bce7cdb0a35ec0b7e991944a7d419"],["/css/highlight/qtcreator_light.css","9faf1155ca6a9da1ebb3aed7b36453ca"],["/css/highlight/railscasts.css","2cc7ab1d0d9b8bac65018637e429ef5a"],["/css/highlight/rainbow.css","100756a87789071a128d3c6cdff66de1"],["/css/highlight/routeros.css","60e653c07d5833931063bd44ceaed577"],["/css/highlight/school-book.css","ac2edaaccb08dfc8b7dfd8d0d834cf17"],["/css/highlight/shades-of-purple.css","cfb6c32cac67777b6bd919557e0f0bf8"],["/css/highlight/solarized-dark.css","0c5849380eac897519c11184192ab6d2"],["/css/highlight/solarized-light.css","08a693aa30ac8178b21225227a2192c8"],["/css/highlight/srcery.css","03c20b0ddccf158e4b7da10c840106ed"],["/css/highlight/sunburst.css","80ba890e257a8ff78e4700515aa35833"],["/css/highlight/tomorrow-night-blue.css","3fc9452961bb4c0366288fb1de6a9d42"],["/css/highlight/tomorrow-night-bright.css","01eb4929dd9d972b667922e2e4e98cb0"],["/css/highlight/tomorrow-night-eighties.css","844e59044f9ddfd8c47fd93f80136980"],["/css/highlight/tomorrow-night.css","112b935f04c6eb443ace67bda7d953ee"],["/css/highlight/tomorrow.css","52003d59a27af7fc60bc42cc05c90209"],["/css/highlight/vs.css","f0902d99613a0f8041b45e666b4e21fc"],["/css/highlight/vs2015.css","0ee754f10839d06a54f281e05defcfd1"],["/css/highlight/xcode.css","88396e17fcad2c6ba11335692771800e"],["/css/highlight/xt256.css","11900b71b7453727c2423a9b240c23f3"],["/css/highlight/zenburn.css","f72db1f64a6104a47e8a30f29d2871a5"],["/css/style/dark.css","2cf5355ab3f419df4cd1fed072a299c6"],["/css/style/main.css","dab1822896da1e1d2f929995bac20fbb"],["/css/style/note.css","b79456b74925c0ca0b181dcf6e759460"],["/eating/index.html","05e9f1479cd1755f47e96bb7d6366c79"],["/index.html","4a5e691e6c9c2ef9f11b7ff298776440"],["/js/b2t.js","cd0f8ec03fec335251ac9c0c051f7cbf"],["/js/darkmode.js","c94de29e565881ecc4572e87d6eded9d"],["/js/local-search.js","d41d8cd98f00b204e9800998ecf8427e"],["/links/index.html","d1d516a9e971c71993cdf93c058befe4"],["/links/link.html","711a080492992ad290f2d50e34150608"],["/page/2/index.html","3306c693c0d7f417f6bdb9c2bc577510"],["/page/3/index.html","5e4401d7ea44fb36e3fcd75665bb7a56"],["/page/4/index.html","d5cd3f012eb57fe0a21f450b83b33f4f"],["/page/5/index.html","0852ed8e5fbda7479f36f2f3f95724ee"],["/posts/10798/index.html","37038d96a204f895d6e5cb9c9c62aba3"],["/posts/11149/index.html","dccd448739fbcfe6d4f20b1505fe3f64"],["/posts/11961/index.html","9f29ebb615f7e329ada885fe4164a92a"],["/posts/13009/index.html","b51f0f7941d212d0db65f5e1c0b7f91e"],["/posts/1478/index.html","3641c82447064f1b5c59127c88571a7c"],["/posts/16931/index.html","241e766ac326fd7333a703501c26396f"],["/posts/20708/index.html","f65ed2084093290556557d1307ae3fdc"],["/posts/22338/index.html","ff0a4f6cc2fc683ceff621ce139d7875"],["/posts/22378/index.html","36fb16d32b1fb75d8372d46d77739ffa"],["/posts/24380/index.html","c1648d1f5e2a5f35970cb0167da824a3"],["/posts/26484/index.html","a33a394ed2072760a3ad2310306b1045"],["/posts/29606/index.html","2eef7f66948ec8b6ffa72f72017fb2f1"],["/posts/32449/index.html","e27b09ebb017605f3c2edad0d07d2cf9"],["/posts/3315/index.html","2cf4d5e97e6572dd782de29eef90b208"],["/posts/33197/index.html","09923f7a1e43e687c1eeaa69658de9ec"],["/posts/33306/index.html","f936c128e6fe70d3697fdf6dea9a6c50"],["/posts/36128/index.html","f3b60ec4a976777914d80f3d36ffc1c5"],["/posts/37557/index.html","4cf93ca25afbe428f7d1fb9b68b30997"],["/posts/37773/index.html","4bcae4b49238a63f2071a8ea654fd9fe"],["/posts/38589/index.html","0dfa820c045d21b7e41a873836d3491c"],["/posts/39661/index.html","618dbe2a8d4623b0316c29e2343b3a90"],["/posts/39842/index.html","d396d7e1c6fa1f3d08d860861ee8cdcb"],["/posts/39942/index.html","be3f086eca04f1c15e3e65c26ad3f327"],["/posts/44194/index.html","d024aaff78ab1a08baf10300cd3e4b3c"],["/posts/44804/index.html","6821b805c081cb3760e0553cfc56f03a"],["/posts/4588/index.html","4664c5f27b8c8d360dfea26290bc6697"],["/posts/48089/index.html","6c3640ff4b2c049ba1b2c3fdeb710a15"],["/posts/51892/index.html","1c2e7878b0fb5b72d2e4eab16301812b"],["/posts/53289/index.html","754ef153af5bc45a0f5422ee139c9da0"],["/posts/54711/index.html","a2b5263cb106876f27f757a0750edd3e"],["/posts/55302/index.html","49436004d7064b28eb0122576ea0c10a"],["/posts/56653/index.html","c5a44abd9bffc9cdc33e7bcf9d754a88"],["/posts/57345/index.html","e1ae6420909c6ed78a9daf6ad00b3690"],["/posts/60197/index.html","034481220144196f7dadb88191f19e25"],["/posts/60788/index.html","a83dbb3c71ed0abb18c9710209b84876"],["/posts/63676/index.html","15ebf505dbb64e60e0b1eade08c78a03"],["/posts/64257/index.html","f0882bfa94af1640fe43919067a91487"],["/posts/64865/index.html","e1d3987a1105a167da7ea79ffa3740e1"],["/posts/65311/index.html","e8959b6552a6c9687415e9e05d17e8fb"],["/posts/7324/index.html","3d4ab8b5eb6734ed14d378f508eacd1f"],["/posts/8688/index.html","bdf3501b41f0a478c048a0db1e89634f"],["/posts/9687/index.html","170d55bda2c8b0cf4e5ed4b370b307e8"],["/random/index.html","a0b656391dd326c25decd10a0bc15228"],["/sw-register.js","f24f7f32b83fa0afe043a475af78eba4"],["/tags/index.html","013b0c94ec452d639b20bf8e8b3f14d4"],["/tags/书单/index.html","42f423bfd4eeb522af07064d10588623"],["/tags/公告/index.html","97275b363b99efc8b433c300adbdf312"],["/tags/悦读/index.html","b0ba87e56358474b8dbadcf42452ae85"],["/tags/笔记/index.html","2832ad32eb2984900c264eb87bb4957d"],["/tags/语录/index.html","90aafdc0e18fc731ecd457da9c7ffc87"]];
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
