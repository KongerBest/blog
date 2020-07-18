/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","66a4e60cacdba7398fc21580ebef8359"],["/about/index.html","8fb1bcbae1803f784e78d67638670283"],["/archives/2019/12/index.html","1516e26a7ca9fd00936c0c9967d9d987"],["/archives/2019/index.html","1a9ef253e1bd83dde52f97c1b3726788"],["/archives/2020/01/index.html","dbe6d0498d57b487c76ed3bc562f42c3"],["/archives/2020/02/index.html","6bbd9a9a0a65ab052172b1da76602c6f"],["/archives/2020/04/index.html","b7a05216241079025aaf26c84a0c00fb"],["/archives/2020/05/index.html","1148084bcdb17dcdef26989ecc69d191"],["/archives/2020/05/page/2/index.html","abce244542d253cd63d25f5e6c8e4759"],["/archives/2020/06/index.html","063b609200d170f4391f6571a1d84336"],["/archives/2020/07/index.html","0559ccddda6d58aab83ed77a1e178829"],["/archives/2020/index.html","4726fac9172f6ad41edc2b97e7053f30"],["/archives/2020/page/2/index.html","cbb7a3d35c1aba3ed3ee647879964cf8"],["/archives/2020/page/3/index.html","3b33dcf5fe1ebdde219237c2c88f8d90"],["/archives/2020/page/4/index.html","8191fcd86b4fb98f2f5e3f7c8efe23d8"],["/archives/index.html","c82c0daeae6454ef3eaf3ddbe562522e"],["/archives/page/2/index.html","2f1ecf55ddd7058e6039d74e084fd3cc"],["/archives/page/3/index.html","eb675a26e60f5ea3b1d5e759d64773c0"],["/archives/page/4/index.html","9db59a22a181fcae03f7808a02456b33"],["/archives/page/5/index.html","9fabfbedb90000e683649b275f61caaf"],["/categories/index.html","4bfd1b1a7843debd82bd325b6735846e"],["/categories/技术/index.html","d1517caebf1a33d4a0597ccc5d0eda50"],["/categories/技术/page/2/index.html","30acdedffe516d6bc586a7cc9333ff0e"],["/categories/技术/page/3/index.html","961e2d53406a3b55807c6ff6ff691cd1"],["/categories/技术/资源/index.html","3ccfea17d43da9d3c933c99d274906b5"],["/categories/技术/转载/index.html","cd56b5daa853833e1c89e7380ea8dc2e"],["/categories/杂谈/index.html","9101304558c231df6dfd53198e2d5419"],["/categories/生活/index.html","2b40258dc2da11313439a9e2b33be02f"],["/categories/生活/技术/index.html","9826b4ea819a5345d52bbb9c2370babe"],["/categories/生活/技术/转载/index.html","b79e0d2e33eecbe5c6ca83960a2a1958"],["/categories/生活/随想/index.html","43b9047ce1fea8e4a49a5fc22855d8f3"],["/categories/资源/index.html","b33ff7229488f429575663d5e25e06dc"],["/categories/资源/转载/index.html","4623b8d75ce1b97d472443567fcf5dc1"],["/categories/转载/index.html","c059bd4ff00082d4c13d940126f7177a"],["/categories/随想/index.html","85b33b4dec14e35e19248b0aefdaf3cf"],["/css/highlight/a11y-dark.css","773181a6a64c56a47b5c4e9444dff06b"],["/css/highlight/a11y-light.css","7b379d3f6871b06bed3300f1800ffbb8"],["/css/highlight/agate.css","cfcb574c0fde5dc2004125c700953b1c"],["/css/highlight/an-old-hope.css","884834f6477a3b08ca6e529f53047e75"],["/css/highlight/androidstudio.css","dc00593bfaf294c8f6aa911d708b2a61"],["/css/highlight/arduino-light.css","11038bdef791cb16e53d24ed2717fa2d"],["/css/highlight/arta.css","2f8fcc32c586e6a867f4b6e8886bc6e2"],["/css/highlight/ascetic.css","9624c74a76ec0d811edca224914d21fe"],["/css/highlight/atelier-cave-dark.css","3b27fc848931d017fcfd1f2c922aa0ee"],["/css/highlight/atelier-cave-light.css","20ebc1674c0ff112c5be585b93a24c34"],["/css/highlight/atelier-dune-dark.css","14731e88802745427924eb18f513a15b"],["/css/highlight/atelier-dune-light.css","0715ce306f934ea7ee89e54fce61202c"],["/css/highlight/atelier-estuary-dark.css","6c7d629cc07d59f398a18a8242136e22"],["/css/highlight/atelier-estuary-light.css","0320127bed58abadb0e3ee0cf4328947"],["/css/highlight/atelier-forest-dark.css","be46ac8fabe3af98adfe73c7ef223036"],["/css/highlight/atelier-forest-light.css","0947c2ee583915a2a64f43f3b4bf7237"],["/css/highlight/atelier-heath-dark.css","3cfb2737e3817ee210fd3aec726b2a60"],["/css/highlight/atelier-heath-light.css","a9ada53b8beb6d285ed16211ef112bee"],["/css/highlight/atelier-lakeside-dark.css","5f429f5130821b946285daba7a84cb90"],["/css/highlight/atelier-lakeside-light.css","39f30a6405b9146499672810599a865e"],["/css/highlight/atelier-plateau-dark.css","63c1cc4e516583a6ff8acdc6909699d9"],["/css/highlight/atelier-plateau-light.css","1bf3aebd2c27736d4e19886858b36fe9"],["/css/highlight/atelier-savanna-dark.css","94a5bdd64a65321096c8d7bb808f42c7"],["/css/highlight/atelier-savanna-light.css","cf2e3a143434f22bdc39225e12833570"],["/css/highlight/atelier-seaside-dark.css","ab035abfba8b68aec6fc66db862a312b"],["/css/highlight/atelier-seaside-light.css","d621c272c2e19a43bf5a4a0bff4d7cec"],["/css/highlight/atelier-sulphurpool-dark.css","42fa124df1d7a80440521acc646dd69f"],["/css/highlight/atelier-sulphurpool-light.css","b9eacd4df0390f7e8e1ec7ebddb371d9"],["/css/highlight/atom-one-dark-reasonable.css","1231bbd1e9cdfe508cb57977909a1a55"],["/css/highlight/atom-one-dark.css","7d8f0c59af46208444111149e6f78eef"],["/css/highlight/atom-one-light.css","b164e7e23ec8072232019fd5e15ca5c8"],["/css/highlight/brown-paper.css","99c91352e4476a7adc2125f71d16fbf7"],["/css/highlight/codepen-embed.css","8491f4d3e3fb8017fc211130b78a20d7"],["/css/highlight/color-brewer.css","6a0fd7499edc215409034637fea59844"],["/css/highlight/darcula.css","e49c2e1da26551029e793866fde2fc1f"],["/css/highlight/dark.css","87a99e86f27c1fb7f487ba82d371903e"],["/css/highlight/default.css","d90833d74f1c14bb227a28a8bc85bd59"],["/css/highlight/docco.css","6720ca17f90d9aaf93bc12f7b7df08cf"],["/css/highlight/dracula.css","a9c14a4ec80421e47b86646d3ab6b571"],["/css/highlight/far.css","74bb6d66958e1f3112110ac3e4549a1f"],["/css/highlight/foundation.css","54bac69eb84fc5b85922d7b2336679ed"],["/css/highlight/github-gist.css","db98fd3b07674d8ffe2483615980d1bc"],["/css/highlight/github.css","d7b71abee94ab92233b1d40137913bc0"],["/css/highlight/gml.css","7f5b64ccdb8c48425f2397895cff731d"],["/css/highlight/googlecode.css","e44533dd017685269da935d70b897b04"],["/css/highlight/gradient-dark.css","647d52321ab8a3315f92415f2291c99b"],["/css/highlight/grayscale.css","a61b55f19e82b28559b7f17c7f4dc571"],["/css/highlight/gruvbox-dark.css","c4586fa5c3231ae58ceb67752ff1cf21"],["/css/highlight/gruvbox-light.css","a4b0a95ce363e85af2b50fae0ed141b5"],["/css/highlight/hopscotch.css","06ef2d46bf58f39300eaa14d934083e4"],["/css/highlight/hybrid.css","fa259ee53fe7c30dea978531ef38ba9e"],["/css/highlight/idea.css","72fd1a933ea807a46f2b274620e92ea5"],["/css/highlight/ir-black.css","33aaefba9b08e8888d6862fee88feb7c"],["/css/highlight/isbl-editor-dark.css","e3706ca6f5cfbcaf5bf0df9ee3c17ef3"],["/css/highlight/isbl-editor-light.css","8ea4436a2740afb048fe95075768b356"],["/css/highlight/kimbie.dark.css","46f82aaab79cad7bd38885964e6decdc"],["/css/highlight/kimbie.light.css","a1c91e31322f8b25566ddedfe748218f"],["/css/highlight/lightfair.css","8a37f800709ecf6fbab40c4d99c208b9"],["/css/highlight/lioshi.css","ee5cd652e2eb4cf59733165ea861201c"],["/css/highlight/magula.css","8cd55b08dd51788a2d687eb5634f1d47"],["/css/highlight/mono-blue.css","6da3b6677115eabcb94fd2e115383766"],["/css/highlight/monokai-sublime.css","d342527ceb845ac7a429b7d8ae91463a"],["/css/highlight/monokai.css","6e6ec366ed96f9dc850b10e98b9d7039"],["/css/highlight/night-owl.css","06b3da9a2699613e4b97eeef43ef9efe"],["/css/highlight/nnfx-dark.css","3adc73fed35043d8f9b11deee1ee2a83"],["/css/highlight/nnfx.css","7b665ea567842ef4d46a6162ef95ad5b"],["/css/highlight/nord.css","8ea9169756010d86936daafba8c2a563"],["/css/highlight/obsidian.css","4f9d4dbbc4ac39d3fa39ff4500db6476"],["/css/highlight/ocean.css","af16b38411a11516a8414cb897c65ab9"],["/css/highlight/paraiso-dark.css","e4d77a445bead803d79062fdc54afc53"],["/css/highlight/paraiso-light.css","55bb00edd9345ae1ad2c045537c98143"],["/css/highlight/pojoaque.css","b400b897202035e1403e2d1c9492983d"],["/css/highlight/purebasic.css","63626dc31f04a78f4e984365b5787f5e"],["/css/highlight/qtcreator_dark.css","e3a4f41f66df8cc7b0209de0a4c58268"],["/css/highlight/qtcreator_light.css","0a9b119190060d9c74d00bc7a51a54c9"],["/css/highlight/railscasts.css","f733c6fdba4c1218f25edfff422be577"],["/css/highlight/rainbow.css","9b0cdc98c42389c54f8652474d6a1030"],["/css/highlight/routeros.css","3a179e46dac8786dc8cbc5859d718549"],["/css/highlight/school-book.css","98641c5e270fea37dcafe730679d2af4"],["/css/highlight/shades-of-purple.css","21e46149199462cab347ff3ee169100a"],["/css/highlight/solarized-dark.css","57f5f7d9af8819d2b789433b9aaa8dcf"],["/css/highlight/solarized-light.css","c7d34ec5552e2dc93a73b5e6fbb5716e"],["/css/highlight/srcery.css","cf0a2cb0c670844bd7d97ff98504e562"],["/css/highlight/sunburst.css","08950ef8461ce0f089bd3832affaee9e"],["/css/highlight/tomorrow-night-blue.css","5bf7cdbe8a5b11108e6c818949fc83de"],["/css/highlight/tomorrow-night-bright.css","39132215ef3e6f5826b50e9e49cdad94"],["/css/highlight/tomorrow-night-eighties.css","a6343feebb3687fb91f2e3d49bd89ee2"],["/css/highlight/tomorrow-night.css","79b1e0c7dd3dc7784a617f9812ea6339"],["/css/highlight/tomorrow.css","bbd76e139df252640faebcc4e5513dca"],["/css/highlight/vs.css","f78f2fb2b6e013cb57edbf3819dd8eb2"],["/css/highlight/vs2015.css","78f2dc4e83e5409e2efd4acf6adeafb2"],["/css/highlight/xcode.css","ca2ca637fee20b8facdd7c0695148620"],["/css/highlight/xt256.css","d8c534d760010643dac8533f505f4021"],["/css/highlight/zenburn.css","e7e102ae3e4c5d0fb866ec2c465e05bb"],["/css/style/dark.css","1803d7af1895cb08e9d302e04d9ca652"],["/css/style/main.css","390468a41c38948588b82fd93d64ae6c"],["/css/style/note.css","2a8ef5a419892dcca20b8365c2f038b7"],["/eating/index.html","e49a3ca0cb4096fae0ba88ed7bad843a"],["/index.html","f8d179ffcbf315a969b8be898c1efd19"],["/js/b2t.js","cd0f8ec03fec335251ac9c0c051f7cbf"],["/js/darkmode.js","96eb9ac7f1c1f415261aa7dd6dc5f024"],["/links/index.html","08541c78abf856fe8013da155d3bab0b"],["/links/link.html","5cb24eef970cc4fc3c1c8511cf1c87a9"],["/page/2/index.html","e15f2731d8b15e415f435c3539ed95bc"],["/page/3/index.html","9748f21921ba8e0c4f2adaf3ec04111e"],["/page/4/index.html","06c023bbc37b8f143a6f3ba954602fc1"],["/page/5/index.html","fd4bee92033987452e70864a7846a8f1"],["/posts/10798/index.html","936757cff07a1f80939a833453e676d3"],["/posts/11961/index.html","d61781dbd5704901c89aef1d6f6a6105"],["/posts/13009/index.html","3645c25a3d7a3234819b788c15a3e0dc"],["/posts/1478/index.html","f0ec515b9e7788f31b041b627235bc2e"],["/posts/16931/index.html","2cbafa6c2a516fed47ac8c9335a1992a"],["/posts/20708/index.html","8b39da0ccd170f1592f28d026b70a195"],["/posts/22338/index.html","fe16578fba425c42076d271d602b60ff"],["/posts/22378/index.html","205343328412b616eb0de079da34da19"],["/posts/24380/index.html","6c3ac7f1c3efdaea35dbef8c88ddcb41"],["/posts/26484/index.html","f0b44fc76e5cd7a4b9c513694dbe4369"],["/posts/29606/index.html","0d83b07ea26f61c91f0508e156762cb7"],["/posts/32449/index.html","7c7be3a84e122e65c30c68721c62ec29"],["/posts/3315/index.html","18c7647fdda94bb6b4d67de73b6de6e0"],["/posts/33197/index.html","432427af2bc9a107519f08a78a1e775b"],["/posts/33306/index.html","0175747dcc565cf9a41748362d6400f0"],["/posts/36128/index.html","48e16b2fefcb7957ca9403dbe24a0d34"],["/posts/37557/index.html","40fdd8faaf59e2a9dfb599dd28856946"],["/posts/37773/index.html","9703e4f7c8434be944b0ecb65b83faf4"],["/posts/38589/index.html","7763f441bea6e0a37b90c12bb9027106"],["/posts/39661/index.html","5034f8d5abd52e44e53d01b3160bc2ac"],["/posts/39842/index.html","d7fa7525654b039706301a2347537b92"],["/posts/39942/index.html","e876f571dc565b25863bc4e35dd7ca9f"],["/posts/44194/index.html","ae4e98739487df66bcf93b333388a795"],["/posts/44804/index.html","65504e583be5dd86707134000ee19fff"],["/posts/4588/index.html","b51ad6a940247068b9e5777fcac92d9a"],["/posts/48089/index.html","ccb639752d4fb31c1b8aeefb83596bdc"],["/posts/51892/index.html","f10bfa23b48b084245e8a650ce8c9654"],["/posts/53289/index.html","6edf4cb81ce74c943193cc45503a6358"],["/posts/54711/index.html","c08d4219b6c374ba6beb54574dc60f1d"],["/posts/55302/index.html","bcd5b1133d6a061fc4e45b971d44b434"],["/posts/56653/index.html","3db76f49faae1645c6e4eb33a831b2a1"],["/posts/57345/index.html","d31dc6b2ec3a106a754feac062f45846"],["/posts/60197/index.html","72906f203043a64edded86f84eaf59c6"],["/posts/60788/index.html","645313a749aad2e5e706c30bbf7aad6c"],["/posts/63676/index.html","3ecb06b33433979080148ad55c8c1bc9"],["/posts/64257/index.html","1d9a1f6583a3461617aef6a3ea1ad7ef"],["/posts/64865/index.html","c73ce836fe928265ea18e3ca82434950"],["/posts/65311/index.html","c1b8ae4ee9410ba4ebf5a2997b5f4b48"],["/posts/7324/index.html","c4c41aaca6d207d5806d8fc7e2279bb2"],["/posts/8688/index.html","f1a39c717d448b363f9066605fe11428"],["/posts/9687/index.html","85177f81fca16cb2321fe32d3774f668"],["/random/index.html","aa5a2f0589bd7a5c435f30187717bdb0"],["/sw-register.js","25cf355decbbfa511801b606f18ef5ef"],["/tags/index.html","d0099ea3e9aa68c86b533f52d50f2002"],["/tags/书单/index.html","b2820a580acdad60704f087fd14f5350"],["/tags/公告/index.html","89f4dfcad3c736cd967db212cd2093f6"],["/tags/悦读/index.html","9dcd59db1c9b67e912c483aa4c9808a4"],["/tags/笔记/index.html","dbff975e7f62a72e17ab10b99464e9ed"]];
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
