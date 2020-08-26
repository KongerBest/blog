/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","88997349566a2263104664099e7a0e28"],["/about/index.html","4785f79daef0064b50f084054f930c15"],["/archives/2019/12/index.html","1707da5106ffdbcda64519c1c060f11e"],["/archives/2019/index.html","976755770af3cee3df9cd324d94e0a3a"],["/archives/2020/01/index.html","5b98e38140b7128f87f8b987dee4c612"],["/archives/2020/02/index.html","ede1c55ae2f2e8290dbc10f1528bbf22"],["/archives/2020/04/index.html","3e982d250f20b24555003c7a40623303"],["/archives/2020/05/index.html","7dd776d621ccb68a6c4681d7fdcdc40f"],["/archives/2020/05/page/2/index.html","e3e046eb06227e6668e237f344fe34a5"],["/archives/2020/06/index.html","7d0d9e1ea21565c7f5d9837aeeaf6f40"],["/archives/2020/07/index.html","e7732d23ebd35bd883a5fe65c181c9cd"],["/archives/2020/08/index.html","da5e1acd78e99fe43a54b6e6db40d62e"],["/archives/2020/index.html","6ee92b2e6d0ddc2499fda83a47a60601"],["/archives/2020/page/2/index.html","1d5fbbd2ad60e5436bf1687626b7894d"],["/archives/2020/page/3/index.html","4df3d0ccd4953f361e5fd42175bc912a"],["/archives/2020/page/4/index.html","5024966b7aa963ef692cc3b70920ee0e"],["/archives/2020/page/5/index.html","265bce369da7237d9c70989f2b6c01f2"],["/archives/index.html","e42437a9ba531d0bf481c483439b301e"],["/archives/page/2/index.html","16bba05c444005b384a22acf1345e97d"],["/archives/page/3/index.html","e2b33956d6858b89d42fdd24bdcdca85"],["/archives/page/4/index.html","ad2b9ce383e9264cbb5a8ecf5a898fe5"],["/archives/page/5/index.html","c2eb4e4b421a744989cf6022a651bc64"],["/categories/index.html","108115881d48f7e211bb7abbcf442d00"],["/categories/分享/index.html","d90111a3f9f1e5ec345214fc37387d4f"],["/categories/技术/index.html","b55a93c4a0fdd3f202770b29528003d7"],["/categories/技术/page/2/index.html","add3de7e4e17c43eac105a9cf7236ff1"],["/categories/技术/page/3/index.html","585600dbf8a0de598760d69ce5729b6e"],["/categories/技术/资源/index.html","5c074f74ae023f3ebd9e5a1affc17e5f"],["/categories/技术/转载/index.html","dfaf8549318d48e6d0956e066df590ca"],["/categories/杂谈/index.html","986ef1fa2c2bd89e16016dff2330ea2a"],["/categories/生活/index.html","6a726c1558d635dfd45286108aaab04b"],["/categories/生活/技术/index.html","3a77c3e3b70dd2b07ae476ab4d299455"],["/categories/生活/技术/转载/index.html","bd47d4bebe3b96ae7b32476bb519d032"],["/categories/生活/随想/index.html","98e4caf8119930838cacdba867711470"],["/categories/资源/index.html","362296adb74df7588ef2da10567306b4"],["/categories/资源/转载/index.html","1c0f2b24e86e8d6cc31c7f9d2194c034"],["/categories/转载/index.html","f0035f6929b8b5221d6c2068bd38fb83"],["/categories/随想/index.html","043bc9dec39f5921b7853a3546fc2658"],["/css/highlight/a11y-dark.css","094c7de05e013aba2f126e7375a01ae2"],["/css/highlight/a11y-light.css","eb1c9db72ef82e833c68d184468a29fa"],["/css/highlight/agate.css","3db510c31e07b2e39f16af5597fc843a"],["/css/highlight/an-old-hope.css","5add63746d0bff8297294dc0631db6f5"],["/css/highlight/androidstudio.css","a5d2544d55fc8749a5ff74e59b8d8d18"],["/css/highlight/arduino-light.css","7d7b008e5429b1c8031fd68de71e5992"],["/css/highlight/arta.css","0c2f09bb4601127218bdacaa1dc5243c"],["/css/highlight/ascetic.css","11698b4a0f0d4a4a87d3f4839438bf4d"],["/css/highlight/atelier-cave-dark.css","b205b547fb5728e7628304dae0468424"],["/css/highlight/atelier-cave-light.css","3d33a262123c075face5caf03f9ef9a8"],["/css/highlight/atelier-dune-dark.css","9dbe02a272071421dd8ebf88e8f43d30"],["/css/highlight/atelier-dune-light.css","bf021e463875b16fd801ca2a7216a212"],["/css/highlight/atelier-estuary-dark.css","4372cb3274d52a9e92362517a39890e2"],["/css/highlight/atelier-estuary-light.css","181b4eabab4e7a07621fe275c670e2bf"],["/css/highlight/atelier-forest-dark.css","d48a2fb1bda23f5998e6ff27d6768316"],["/css/highlight/atelier-forest-light.css","f763e38cd196047e2a5d1356daa10625"],["/css/highlight/atelier-heath-dark.css","a18a643e37e87aa1cdc59a892c9d31ee"],["/css/highlight/atelier-heath-light.css","aac9f45f161612a8ebe9e834bc295d12"],["/css/highlight/atelier-lakeside-dark.css","31d491d2d89f5d3322a7b3b1a86e55ac"],["/css/highlight/atelier-lakeside-light.css","7a4c411c746a82553cc4c39faa36abff"],["/css/highlight/atelier-plateau-dark.css","45609ca44bbdb6d794aee2599345003f"],["/css/highlight/atelier-plateau-light.css","af9e654b18d9a0519c1eb9b073b2aa9b"],["/css/highlight/atelier-savanna-dark.css","c7ce65688c19e28b26556b8d8913ee7a"],["/css/highlight/atelier-savanna-light.css","79107bad5470fe3b5262426f552d9b69"],["/css/highlight/atelier-seaside-dark.css","6717f7edbb9932f600fef8320c8c54e1"],["/css/highlight/atelier-seaside-light.css","7c469452230a6dfa5c6111c45313fa00"],["/css/highlight/atelier-sulphurpool-dark.css","7a11990504673ae071ccff943c81432f"],["/css/highlight/atelier-sulphurpool-light.css","68c7b10806d44fe292c6e4b93f995bec"],["/css/highlight/atom-one-dark-reasonable.css","bcc609e9d2d506a2d81f17f75f402bb9"],["/css/highlight/atom-one-dark.css","1c64f1efc51ab46397b880855f5d3b8b"],["/css/highlight/atom-one-light.css","1806a15ecddfe066d57b6050b588adf0"],["/css/highlight/brown-paper.css","ded6c3d22ae2c2d249ac614079d1a643"],["/css/highlight/codepen-embed.css","668955fe974ec4449fdf244024569e47"],["/css/highlight/color-brewer.css","feaf5f3d96055c719c2d2c91964281df"],["/css/highlight/darcula.css","87e497c0471056d5b7502f5f852f544e"],["/css/highlight/dark.css","ecaa576303979d0af4fb0ce4d54c87f6"],["/css/highlight/default.css","62d9a0c65fdeb231d40e029eb3cc0267"],["/css/highlight/docco.css","cf093ca39abb8aaa755192caad0fcd70"],["/css/highlight/dracula.css","c6b6c060bffea8dd9434d6f154e2448d"],["/css/highlight/far.css","429863a7d8b9ab60ecfdae4d70bf3f50"],["/css/highlight/foundation.css","19ef32211c524cc67caac3a24d43a678"],["/css/highlight/github-gist.css","9bfb687a3676056489ef100a75de5047"],["/css/highlight/github.css","6c179f15d52aff84d528150fbaf5be21"],["/css/highlight/gml.css","5820b0636e8aef0fdaa2b50daf078d8d"],["/css/highlight/googlecode.css","b68831bba3e49f18449e15e5623eb3bd"],["/css/highlight/gradient-dark.css","3208975a618f9f823ecf479fc2e3f21a"],["/css/highlight/grayscale.css","991860d9f52912a8fa223a1885fd7925"],["/css/highlight/gruvbox-dark.css","48beae329b211b3c09681b564b1e8bfd"],["/css/highlight/gruvbox-light.css","46b78a13e4c0e35bce600cddcdb65771"],["/css/highlight/hopscotch.css","f9526c2272a139acd9241313a8a7fa2a"],["/css/highlight/hybrid.css","2b847e0e03ea7a27d90fff0ecef7e2b7"],["/css/highlight/idea.css","cb51940746693e0c6535b42805284c4d"],["/css/highlight/ir-black.css","94d435dc9fde759346441c48d1a24374"],["/css/highlight/isbl-editor-dark.css","47dbd01e1a4ae6728d885d8ce22920ba"],["/css/highlight/isbl-editor-light.css","280595a187a41aa17c4f07f23bfaae4e"],["/css/highlight/kimbie.dark.css","46b1f53ff4b26a7d14cc216d259db6ed"],["/css/highlight/kimbie.light.css","927fdb11f2331bfe690fc1c44a634836"],["/css/highlight/lightfair.css","d66368104fc68a431864ebd475e5afe3"],["/css/highlight/lioshi.css","69f2ccdd3b3d4f460b6ad5a11d085a44"],["/css/highlight/magula.css","6370f5aba9aee69648ddd9ff1e2e71a8"],["/css/highlight/mono-blue.css","7031b0d18c7f4a36ecff68b795cbbfbd"],["/css/highlight/monokai-sublime.css","7c09201f1e13aac9a9a671d46523cc49"],["/css/highlight/monokai.css","6912e7336cb130d20a1052a805d1bdeb"],["/css/highlight/night-owl.css","65712dc0ca1c14702ed9b206ec406ae2"],["/css/highlight/nnfx-dark.css","b1ebd42793283aa09f090bc3003d73cd"],["/css/highlight/nnfx.css","32c601298219675d69563854e7efed69"],["/css/highlight/nord.css","da23b6d1fb5ccf262f15401f1976d43b"],["/css/highlight/obsidian.css","defa1ff00165ac4fc65ab86aaf8922ed"],["/css/highlight/ocean.css","016284ccec5bce9a0663b89c3f0a4099"],["/css/highlight/paraiso-dark.css","d19bf9a449985b79fc58ee0df4a0fe78"],["/css/highlight/paraiso-light.css","3ec92658f3c567c50ea0a3c4dcc83bd7"],["/css/highlight/pojoaque.css","b994e3603a396b49a8a6a1cfaaa0db7a"],["/css/highlight/purebasic.css","360de72f20b890072b97bc5862985d32"],["/css/highlight/qtcreator_dark.css","df50c7f388c7b83b2c969d14a545155d"],["/css/highlight/qtcreator_light.css","51c7b01c052a348cf5066aee436916b3"],["/css/highlight/railscasts.css","37815073b0ab554e4681d69d6303b15f"],["/css/highlight/rainbow.css","a769a3ca3f1cdee97f388fd5d23a9677"],["/css/highlight/routeros.css","2cc3b5aad7d794b443b3e37876c397e8"],["/css/highlight/school-book.css","4f99af269732b4a8bb0bec619930f26e"],["/css/highlight/shades-of-purple.css","419ce248cdcf1e89fc0eb4d26b34ab6e"],["/css/highlight/solarized-dark.css","273e5381305e84792e02692fcc553b3a"],["/css/highlight/solarized-light.css","f738720ec4816fafb97e03ba879a7aad"],["/css/highlight/srcery.css","f5fdf9c532e9eebbf438dc3c25592014"],["/css/highlight/sunburst.css","1a75c7303a63b0bab00f8b1fd8be007c"],["/css/highlight/tomorrow-night-blue.css","bc865592b33577234b3fcb19af43c998"],["/css/highlight/tomorrow-night-bright.css","40f7bc793015b81f64c432b3167160bd"],["/css/highlight/tomorrow-night-eighties.css","5e13f62540af1cbf0ebc7338e65aa4ec"],["/css/highlight/tomorrow-night.css","7ae58c49f08bea60cb5eecf0cd7f4202"],["/css/highlight/tomorrow.css","ab8db4ecc16051c82cdf063f8125a727"],["/css/highlight/vs.css","e1583c2cc79b7e4c6dfd88cb70500556"],["/css/highlight/vs2015.css","52378c3cc90147eef9ead6d4ca0cf818"],["/css/highlight/xcode.css","43762853465fd2f2e6a2ff12e7ad13cd"],["/css/highlight/xt256.css","54bf67982183010fecf1f3fece3b8da7"],["/css/highlight/zenburn.css","ede6a8cb5de0782681d23967d9b96e00"],["/css/style/dark.css","b8dbc491283d3691a4b2004f1e5c3e26"],["/css/style/main.css","4ff0f7134212874d7a66680f8407200b"],["/css/style/note.css","e29ac7c821f609d38d71f265352dda9e"],["/eating/index.html","4c56c6c65c5ed8571e66e6fe1896c3b4"],["/index.html","41d7981e2cdc26658140cd367682e709"],["/js/b2t.js","cd0f8ec03fec335251ac9c0c051f7cbf"],["/js/darkmode.js","c94de29e565881ecc4572e87d6eded9d"],["/js/local-search.js","d41d8cd98f00b204e9800998ecf8427e"],["/links/index.html","62870be3f98539129c0e32da12f0c9ce"],["/links/link.html","2ab5edfedf111d24c0f6cafdc6d23db3"],["/page/2/index.html","f7a1d06847f3e0f564d65ffeaff0a521"],["/page/3/index.html","0f6bb562c0f160d14b7855e7dd8d996a"],["/page/4/index.html","3ae069abb7cf08d649e8238734147995"],["/page/5/index.html","17c1ffdc0f68e11c7a70171d7b79d830"],["/posts/10798/index.html","5a55506fe4fbe37286b231cb36908836"],["/posts/11149/index.html","3e5094d175c1a3c2f11141a5db864a0e"],["/posts/11961/index.html","023e1933039db941d18665cd52fb536e"],["/posts/13009/index.html","c7f59da5062f938cb26f2ce2c0018347"],["/posts/1478/index.html","699c9b911b6fead9a8fbc8dd22f7f8b4"],["/posts/16931/index.html","89fde7a3babcb0a36151abeea5c9a631"],["/posts/20708/index.html","644745d63a2bc4edd2c85526e936d57e"],["/posts/22338/index.html","2a8872b29bdd51b18d6a96082f9089df"],["/posts/22378/index.html","38b953c7a0e27313a5b6ae517db53192"],["/posts/24380/index.html","896ba9519552fc50a78b3429ff3c6456"],["/posts/26484/index.html","6464405d4a733045d83604088936e521"],["/posts/29606/index.html","6d86630449a8ab8d73053eae3dfa39ce"],["/posts/32449/index.html","c337023626e637f1c115edb5f5f42ede"],["/posts/3315/index.html","3dbff3a357d1008b0c9bd41caef8518c"],["/posts/33197/index.html","250ea623400a82419ad1a5c4cfae8eaf"],["/posts/33306/index.html","9d7ef175ef8a498a4d2e67c14c70cee6"],["/posts/36128/index.html","238f6084bd9049be1bb7966055a97bb0"],["/posts/37557/index.html","95c230741b0598308d082590ede347bd"],["/posts/37773/index.html","5a8fff4adbaaddc968d7ed18fd8594d7"],["/posts/38589/index.html","ab2eb6dedac3e4d8ad20497ebe7940d3"],["/posts/39661/index.html","75f877bd356985f674f212fc9bbaa322"],["/posts/39842/index.html","66bcb0c7bf49244986a0b4f5fbe84543"],["/posts/39942/index.html","f2269b820b018dcf8955e5638a42dfda"],["/posts/44194/index.html","161ecc14d920f05c288b2772831c48d4"],["/posts/44804/index.html","14ca1416ad9e9b382ee7bd179200d586"],["/posts/4588/index.html","bb1eaab10b956275478c7c5095e5070e"],["/posts/48089/index.html","357fd8790a79c8ecf6a8ea4566e59e21"],["/posts/51892/index.html","65b4058bb7db72131fc997215f7b052a"],["/posts/53289/index.html","59181065314baaff302aced7d5bc120d"],["/posts/54711/index.html","843ee588e9c3d005cbaf2aab324fa52f"],["/posts/55302/index.html","0294d77cffc190dbf9781e4350cdc4e4"],["/posts/56653/index.html","6d93ec5aa649edd21a649d30e1dd6cba"],["/posts/57345/index.html","560a9834b0a04a7450af3dadb00a50b7"],["/posts/60197/index.html","1cf6611e44adb15ced485124fac21fe6"],["/posts/60788/index.html","f1fe6a3e62680cd7fbff5afebbc73ef1"],["/posts/63676/index.html","0ac734cc206b8fb9277262048aebfc47"],["/posts/64257/index.html","4148824781e15187e02ab6ba8b83bcf9"],["/posts/64865/index.html","297824ed93fcb0c3510c2d715203c06a"],["/posts/65311/index.html","3d8254f63c5c3ebc7017131ed472c034"],["/posts/7324/index.html","2aa9faecb28fe6617048955e31c615b9"],["/posts/8688/index.html","18266a5f106ea3a8177cd0b8e62ac978"],["/posts/9687/index.html","e5baf2bdae4b624daf444e4598551d1e"],["/random/index.html","73c124af0205c1fb304d3f2b1af67204"],["/sw-register.js","1057cf4fa528261c18f079750883afc1"],["/tags/index.html","79ce3b7cf916873de277d5f9f383cef9"],["/tags/书单/index.html","6c30913eede449efe2b7991f2ad395ac"],["/tags/公告/index.html","81c7942c9b510714cbca8e69b7d90fc6"],["/tags/悦读/index.html","28d82509391e51ffbc7ffb691e597cec"],["/tags/笔记/index.html","87c3dfc96c50b4b28312236a1be26c65"],["/tags/语录/index.html","c1516d1de16a8bebbad8bf48b65bd626"]];
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
