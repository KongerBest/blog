/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","cfda605bd7ce8050fb429fd6c025ce12"],["/about/index.html","6485a0ba53e46d98425e824f0ffa550e"],["/archives/2019/12/index.html","6febf4af57927ffbe06ad8e61e0dd183"],["/archives/2019/index.html","d7372ce722b00a7df09072381ac59bdb"],["/archives/2020/01/index.html","ce6f05712710f0d139dbaf81746b24be"],["/archives/2020/02/index.html","15661aad42eea426d6a6f96e98d34c31"],["/archives/2020/04/index.html","c99936cc75a83a9eb87f6b449568e6b2"],["/archives/2020/05/index.html","4cb6a775d3e198faaae4304da2ab9618"],["/archives/2020/05/page/2/index.html","6c54aaf8c2dd4cdb7ded6e06d5f35508"],["/archives/2020/06/index.html","d31adf01c32cbc952a86425ceeaaa806"],["/archives/2020/07/index.html","20ec4e93e26f6f9dcd4503a2e0a1266b"],["/archives/2020/08/index.html","4061d8bca9017dc46c3dda14f391b841"],["/archives/2020/index.html","75b6118de9a744883bf62c41fa26e0de"],["/archives/2020/page/2/index.html","801a230449429983d43c601687959b57"],["/archives/2020/page/3/index.html","f5e87b45b1104ab0ad2e9e892dc2707f"],["/archives/2020/page/4/index.html","14e0e58df1d4c08c4959e6776ff00a4b"],["/archives/2020/page/5/index.html","c704d131817ece606d183765e4a1d230"],["/archives/index.html","b3b4b1ea925701ff51f1656b2c1d2daa"],["/archives/page/2/index.html","e8e080528780431d342f989239d1f0bf"],["/archives/page/3/index.html","5616613291237f642ff103e94a1809ec"],["/archives/page/4/index.html","82787621c0fdd9e7d8cdb0549471f02d"],["/archives/page/5/index.html","a8157f50b1a45691397df9c62632a1f6"],["/categories/index.html","9b4bda334ae9223948d37adf87ff601f"],["/categories/分享/index.html","710d9f8e538d4934ad9ed12a8b1d1c63"],["/categories/技术/index.html","3012c6feb6096f021c99803d7f519c2d"],["/categories/技术/page/2/index.html","7191137c7ae299b0b57571eb417509a2"],["/categories/技术/page/3/index.html","9354ee220d658f74f95842abf9404e4d"],["/categories/技术/资源/index.html","ee66c3a5835dcf4cb4c000693a10906c"],["/categories/技术/转载/index.html","b795bfe0348f55e3059761cf3587350d"],["/categories/杂谈/index.html","409b2054251c96b5a556917c3bb59f23"],["/categories/生活/index.html","454febff765a7810f8f04518a864e742"],["/categories/生活/技术/index.html","1af95f2bbde01c137ac43fbfbf94a58a"],["/categories/生活/技术/转载/index.html","59624f5d650f49d3ccd665e8434044f2"],["/categories/生活/随想/index.html","bbc60f545ff1c9268442e19ed4beff0f"],["/categories/资源/index.html","a17be8b662dd985bebf5c6e6d3b5a08a"],["/categories/资源/转载/index.html","c41a4c769ecbf5e66eabb007260d08de"],["/categories/转载/index.html","4d3eb01a3f73e8b5a8961b10bdae8b89"],["/categories/随想/index.html","9c2d3a9eccfef478177392c3d03cda97"],["/css/highlight/a11y-dark.css","ad8a42796b0eaf260fc831370e4b3e93"],["/css/highlight/a11y-light.css","5bccc9be977a8114ebde0a5067f9a7cd"],["/css/highlight/agate.css","b0c1742488ba323210f8eb4baf1af261"],["/css/highlight/an-old-hope.css","ed5f76bfd729963e11cbca6b6b08d076"],["/css/highlight/androidstudio.css","0977cf21ebdf967d750937bfe2294f7a"],["/css/highlight/arduino-light.css","3d0f2c87625006666ea58b904f8447ee"],["/css/highlight/arta.css","eda0272556b58b36b74762dfa56f2daa"],["/css/highlight/ascetic.css","a9f08209ee120aafa8d7e627ecfe0cc0"],["/css/highlight/atelier-cave-dark.css","e18cd525fc7367485e420884684d723d"],["/css/highlight/atelier-cave-light.css","5c5b99cb55f7c35bd5f6732563c3756b"],["/css/highlight/atelier-dune-dark.css","e5c1dc7419add1f1630037fb33cdc71f"],["/css/highlight/atelier-dune-light.css","187c3f13cc170632b022cf04a544bd8d"],["/css/highlight/atelier-estuary-dark.css","2e388b3d74b3715c3277e2d15376713e"],["/css/highlight/atelier-estuary-light.css","5b441a49f52ffc11254790f928455e06"],["/css/highlight/atelier-forest-dark.css","93d97a1f2db13171ef3010f93ba8bbbb"],["/css/highlight/atelier-forest-light.css","067ece40883dadef707cdbc6ecc1b419"],["/css/highlight/atelier-heath-dark.css","6e13fd1960df921db4e0ee1c7cc722da"],["/css/highlight/atelier-heath-light.css","b080fd28d90adf3a651f60d128a54d38"],["/css/highlight/atelier-lakeside-dark.css","b551da21644358ca12062083c2a33bcb"],["/css/highlight/atelier-lakeside-light.css","b3920b7a4875b7e6a61371423c4f18a0"],["/css/highlight/atelier-plateau-dark.css","fc9d3492f7668cad3b8367a4ea17c996"],["/css/highlight/atelier-plateau-light.css","f87ee34c24b9de0934cb0a19f625939d"],["/css/highlight/atelier-savanna-dark.css","3b20dced6171b0d98438e87a9110630e"],["/css/highlight/atelier-savanna-light.css","74d29b3b0729c4a20f085f6b54c6db6c"],["/css/highlight/atelier-seaside-dark.css","8d622196b26857f9229fb526ce492b55"],["/css/highlight/atelier-seaside-light.css","b6a1c3a8df5822c749247773c0c50c86"],["/css/highlight/atelier-sulphurpool-dark.css","fe229153da393e105a7f70aa76eb42ee"],["/css/highlight/atelier-sulphurpool-light.css","e2a80737c48d21610b32f20dfb007d67"],["/css/highlight/atom-one-dark-reasonable.css","0ccc890a5fca1a4535746e25334156df"],["/css/highlight/atom-one-dark.css","20581a5f1ef95ce4d245d1a985a76d1d"],["/css/highlight/atom-one-light.css","72b6606da3515febc8ac840bfd508dbf"],["/css/highlight/brown-paper.css","40be58a8351366be9581602b7f9a3232"],["/css/highlight/codepen-embed.css","e659a74093dbd4a8cdb3048b8a7a05de"],["/css/highlight/color-brewer.css","d4a081baca584e6e4bcd520ebbb67b2d"],["/css/highlight/darcula.css","ae7079c9e2a385cc108bdcd2e6d820e5"],["/css/highlight/dark.css","1670822ca70e468b7aa10ea204c22171"],["/css/highlight/default.css","8b467190eee836f4f5e7d05c652d685b"],["/css/highlight/docco.css","263bc123cddc64184ca04d22c0cfb197"],["/css/highlight/dracula.css","81a90c4aa5e6d802e642f320caca2d72"],["/css/highlight/far.css","b55ce729f8a852f1e4025f7070b6480a"],["/css/highlight/foundation.css","3861e5fdd5f917421dd335c0499c1627"],["/css/highlight/github-gist.css","81118b15aa3f20c68bc89c48e58aa3aa"],["/css/highlight/github.css","e180246e25c8dbe66ebdc01ad2ede202"],["/css/highlight/gml.css","8f29184a203a92fb3faf3b5b392a0dc9"],["/css/highlight/googlecode.css","3798a5ced0c5be6d0d76909823f158ad"],["/css/highlight/gradient-dark.css","d18cfbf514a632a5e706b3df148835bd"],["/css/highlight/grayscale.css","131a0123b2ce9d482701a22695b8bea1"],["/css/highlight/gruvbox-dark.css","6562544f5a576e48ca67240475d169b4"],["/css/highlight/gruvbox-light.css","a10078b2e8ae134304809f8f6e72054a"],["/css/highlight/hopscotch.css","e9b8275b48a6c363beca2067cc747140"],["/css/highlight/hybrid.css","64e513921e85a6124a377aa51b854833"],["/css/highlight/idea.css","11d88cd4e98bc2f750a8b40a8220be84"],["/css/highlight/ir-black.css","896f34497e6915307fa3c47c3b74d8d1"],["/css/highlight/isbl-editor-dark.css","9939c3163cdaf8cf1f780abc176d9c93"],["/css/highlight/isbl-editor-light.css","976534f538363214e7ec9581bfffa484"],["/css/highlight/kimbie.dark.css","d63d5dd4a1c03ce39c124babcdf6f539"],["/css/highlight/kimbie.light.css","bf4d2ea4ae350740cbb4e97331f1531c"],["/css/highlight/lightfair.css","bcb71e07515026663586e55cb37b6ab8"],["/css/highlight/lioshi.css","f28fcf2ee10997c6b42c5489a280aa30"],["/css/highlight/magula.css","b57d044d8cdf933a2848d4461c291624"],["/css/highlight/mono-blue.css","47a2a434dc78a2ee7bc2273470b07420"],["/css/highlight/monokai-sublime.css","98e2bee8dfe77d2062ee1642d811daa4"],["/css/highlight/monokai.css","e27f63a8183afeb5fae52b0d6789aa34"],["/css/highlight/night-owl.css","693f427882a3ff9dec6a170066732f93"],["/css/highlight/nnfx-dark.css","bef50d472b0562aa42f0d4798ce7a98b"],["/css/highlight/nnfx.css","9e09e221a03ad2dd0b12302609a37837"],["/css/highlight/nord.css","38c9058e8e107c0200f8b6690ecadffc"],["/css/highlight/obsidian.css","f19622114e0cb4d44faf4af9ed068f5e"],["/css/highlight/ocean.css","9760b52b708eb2236f52cca585562c86"],["/css/highlight/paraiso-dark.css","4814be6958d36cbebd5e2d6faf038310"],["/css/highlight/paraiso-light.css","d65c34433697f392408255bdaa523372"],["/css/highlight/pojoaque.css","7494d735571e9eb10148892e3b3585dd"],["/css/highlight/purebasic.css","ad70ef5fe4c1cc9d839ff12e83f3bdd2"],["/css/highlight/qtcreator_dark.css","fb7375a44313c401caae34c7af18d9e8"],["/css/highlight/qtcreator_light.css","417e1808df7a6a9dd8c2c6a5a4837f0b"],["/css/highlight/railscasts.css","79e69dee983a6e86d5331e56d57a7a2d"],["/css/highlight/rainbow.css","bbe819d8c8934148d9981438622f004d"],["/css/highlight/routeros.css","12c3807242297c6b34e5553b62d86625"],["/css/highlight/school-book.css","60458b69a79566ff0d8b588332680699"],["/css/highlight/shades-of-purple.css","b1e19495f6994ad9e3429e7d061b1f9a"],["/css/highlight/solarized-dark.css","8578da4366a0f8e775c720ef913761a0"],["/css/highlight/solarized-light.css","eb650c9faeba250f4e8f6c2f89791c09"],["/css/highlight/srcery.css","b01f9b4117bd99b594b9a42ee78eb489"],["/css/highlight/sunburst.css","6bdc5047feb73ccfc8f3af51a5434a15"],["/css/highlight/tomorrow-night-blue.css","2cb2cc63a8baa358940944bc29d516cf"],["/css/highlight/tomorrow-night-bright.css","f68138e77791fe60fbe8cec06323476a"],["/css/highlight/tomorrow-night-eighties.css","23a1ffc39d9e2c345d6fb833775533e4"],["/css/highlight/tomorrow-night.css","8c7778ba29eae2fac847d6822a389caa"],["/css/highlight/tomorrow.css","be21d85563d5297bf7af4d43522fb6e9"],["/css/highlight/vs.css","7e0ea8badcce937301a69514d5d36533"],["/css/highlight/vs2015.css","8a502f5820d2a0862e003c5074c3253f"],["/css/highlight/xcode.css","3abbd71aab690854f48dd148e0286ba1"],["/css/highlight/xt256.css","9bca2f929b3335590c8eefb4c1d1a756"],["/css/highlight/zenburn.css","c4aa8bb754875b4c114b9164d439e378"],["/css/style/dark.css","61fab56e691c57bcece397bc286af9b0"],["/css/style/main.css","8dae64af2c1be8f863cc54afdb7c6052"],["/css/style/note.css","9a3044f1ccb04f8eddd49225436cd0ad"],["/eating/index.html","25b899163938edabadd42d7d8685797a"],["/index.html","50a133b4ca8c39c868c3d827a6c18edb"],["/js/b2t.js","cd0f8ec03fec335251ac9c0c051f7cbf"],["/js/darkmode.js","c94de29e565881ecc4572e87d6eded9d"],["/js/local-search.js","d41d8cd98f00b204e9800998ecf8427e"],["/links/index.html","827ba815287d5b11dd5be96d33e037bd"],["/links/link.html","31994bf9beff7028ba6076aa1fd2bb1d"],["/page/2/index.html","1dfed6a6c50f4814a73715fd32871d07"],["/page/3/index.html","11ed7d44736c579bce2b1017d330a4cf"],["/page/4/index.html","b8a9bfb71eda8f02bcfc2839ebc65985"],["/page/5/index.html","8e52e1e707f71e4d180b9773d8c45500"],["/posts/10798/index.html","690860a898610a685e05173d65ee4c4e"],["/posts/11149/index.html","44a26a209275a9f7a1ea963e71f89816"],["/posts/11961/index.html","2ba8e097db37c086a14bdee1385f1b53"],["/posts/13009/index.html","a263ccd5667dffd152abe148816b0fee"],["/posts/1478/index.html","8beb28a3960296ebaccd15f20d8f294e"],["/posts/16931/index.html","ddfe43da2997ba103169fedb6204944c"],["/posts/20708/index.html","200a8fa0749d7178a6136cd9e5690d1a"],["/posts/22338/index.html","8f0f6195e484b2205a712dc48adf6996"],["/posts/22378/index.html","1afb1261213a702cd89949d56846184c"],["/posts/24380/index.html","6b61ef8a386f36214f6b809fab63307e"],["/posts/26484/index.html","a1eb9f03baed3a38111a87d2d00ede27"],["/posts/29606/index.html","ae5a057bcf5cf16e6c6323b768c444ef"],["/posts/32449/index.html","28793d97523f6b9b3cfd41e436775db6"],["/posts/3315/index.html","399d2d6a56c360ff0bf256ad599e4c83"],["/posts/33197/index.html","d5514a1a2ef0a2db5805c5048a7e5703"],["/posts/33306/index.html","618168608b231f07e75b7de1bd237332"],["/posts/36128/index.html","8949f0df62553d89e51a39d74b152eea"],["/posts/37557/index.html","8e3697fc9ab0915f0eb9bc89e475b001"],["/posts/37773/index.html","c1f37e3ac020a4b0b986b0c378b9340d"],["/posts/38589/index.html","9c20aac77a1d2b010b5cca1b8d761ea7"],["/posts/39661/index.html","bd38724c54b67c946bcdd420981f8ada"],["/posts/39842/index.html","ed3340ec1e8683f41cfd4045f7d0e6ee"],["/posts/39942/index.html","6cd969ba03406041aecfc1e494c075eb"],["/posts/44194/index.html","f817fa90763443f533246f6e0818bfe3"],["/posts/44804/index.html","6178bec56b1354fd63200cdd3e275948"],["/posts/4588/index.html","35c937fb6b8aeeb7ada67f05a4502110"],["/posts/48089/index.html","676a85709bf0d4ae2ac5433ce6f31d04"],["/posts/51892/index.html","863691d0de1d1e7f55b77c8755a388cb"],["/posts/53289/index.html","96cd7e9cf99a04424ffa05531fd644e3"],["/posts/54711/index.html","71c75e4e6dbe398d8223b6036102d9c1"],["/posts/55302/index.html","241c5ec756e6935371ed2a01bc60248c"],["/posts/56653/index.html","6a70cdf1c79bb837be7754e36f79cb00"],["/posts/57345/index.html","c0356e7f35a7180f88bf6842c868b3e4"],["/posts/60197/index.html","0cb7cf2622bb543d7e6058e2fde77a5b"],["/posts/60788/index.html","f6c7414214d9223b5dcaf88ae1ea5ad8"],["/posts/63676/index.html","19fe8f0de22952e96138f8bf3ccf7bf7"],["/posts/64257/index.html","cc8bfc2a19d2106fd8ddd1ca9169f09d"],["/posts/64865/index.html","edb9c786252068a3b10d17460dbf4aef"],["/posts/65311/index.html","ace6043d66f88e5e8adc0e2c5c29ff4c"],["/posts/7324/index.html","cbf2c31711815df9ca188fecae10b23e"],["/posts/8688/index.html","9ce464958ed53fd097eec582a62da383"],["/posts/9687/index.html","177d0df2e2747477a06e344c9cd09c75"],["/random/index.html","17bfafa3f6555c89dd78aab0db999f35"],["/sw-register.js","f6622bada2b19df5971e280160a7c0f3"],["/tags/index.html","d3e449f94c39f34d130ba276747f8439"],["/tags/书单/index.html","91a45bcd4a51f7ac3fe30d7876306de7"],["/tags/公告/index.html","52492546822b750ad9c0fe97f1b34fec"],["/tags/悦读/index.html","8ca9400dd41b6268f8624ede1df6e3c3"],["/tags/笔记/index.html","80a4c99bb661147dc23e2c3b90f7a1bf"],["/tags/语录/index.html","d8f6dc82a0ff3a22460f33ee9dccfb48"]];
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
