/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","27459722f4ff7a7fd862c992bbad4461"],["/about/index.html","addc43a734ab48e5bc094d4ebd096b7c"],["/archives/2019/12/index.html","a1827f9322f97991e4a4db2b3604524e"],["/archives/2019/index.html","d1d3566bcee399025066720deb63c077"],["/archives/2020/01/index.html","0297c9ed6862edc2c53f4259fb6cba4a"],["/archives/2020/02/index.html","91eceae6c490032fb083fe346e04a18e"],["/archives/2020/04/index.html","e08a59b446077e18b060c5e439d44085"],["/archives/2020/05/index.html","797cbd200ca1df4678d81ae69bc9aa41"],["/archives/2020/05/page/2/index.html","a0b077f36001e070856c8f6315bd2edf"],["/archives/2020/06/index.html","ef0e6c4cd5915825117825d625c32fd1"],["/archives/2020/07/index.html","ba5c61e60a289a731839d6d94991ad35"],["/archives/2020/index.html","3242daa255f6e60d865f8a534f531c35"],["/archives/2020/page/2/index.html","c935c554a1b1a4002cbe49692c5bd274"],["/archives/2020/page/3/index.html","0ed96317aae959bacfdc8c2e9b0c8bea"],["/archives/2020/page/4/index.html","3d1d2ef4874d475b06165dc237f2e18b"],["/archives/index.html","ce4745a7c9153d6bc1fc788777b04070"],["/archives/page/2/index.html","dfe7f03c7951ccb1760afb40eb27c9b4"],["/archives/page/3/index.html","6d8b28577bac8d693259d73dcf5ad17d"],["/archives/page/4/index.html","b73718e1ea3af1f35713f15c7ca82524"],["/archives/page/5/index.html","1a0f2b0d30f97cd6ec58de80009ff225"],["/categories/index.html","fe7e07a1fde7235659edfa630ba07829"],["/categories/技术/index.html","bc8965e7158f0b5522e1da4f32c7541a"],["/categories/技术/page/2/index.html","7becffaea42c11d77e642b98c497887d"],["/categories/技术/page/3/index.html","3dde86ccd2c59ddf4085dbb06ec1294d"],["/categories/技术/资源/index.html","cbab5bbeeae73d5625d8f568c9a1b56b"],["/categories/技术/转载/index.html","d249252a000d419048302c3fa49e09ac"],["/categories/杂谈/index.html","b4aaaf07e8bdf9446324341219cba2fe"],["/categories/生活/index.html","5dd2c3c9c57cbafa4a13e4e85dc97f57"],["/categories/生活/技术/index.html","9714085bb7b0ef39fd8a37b24ee77976"],["/categories/生活/技术/转载/index.html","b3b94546090f0d9a6d0bc15cb924331b"],["/categories/生活/随想/index.html","6a14c1c9e48aea2f88546fdf3b029e3c"],["/categories/资源/index.html","8735be178b25b652d28cd14404566856"],["/categories/资源/转载/index.html","86b41acaece5e55baf434db0ee6954f0"],["/categories/转载/index.html","0b42b7328dcedee49d33ab76cdc4d2bf"],["/categories/随想/index.html","43c27f1887d7c727439ba9886db7d78a"],["/css/highlight/a11y-dark.css","c9c36e95d387e046abdcaabf0a28bbaa"],["/css/highlight/a11y-light.css","b8367bff58d29dd88532012b1c120627"],["/css/highlight/agate.css","ed8f49555227925cf1ed15782efd4e65"],["/css/highlight/an-old-hope.css","027a2d79db9eaeddb71ea11dced3434e"],["/css/highlight/androidstudio.css","393ef867797d57ce1026f26f73701ef2"],["/css/highlight/arduino-light.css","3abc92526592d360428b6b8d3c0a7617"],["/css/highlight/arta.css","de4916e1ae20f4e18a6f6cbef9b96eab"],["/css/highlight/ascetic.css","a52ab9de3c18483ba92ee1489b058b6c"],["/css/highlight/atelier-cave-dark.css","12f8b88176ebdc4bfb58c02baf4d5083"],["/css/highlight/atelier-cave-light.css","1c08003d49aaf238d95b880322ddc4d8"],["/css/highlight/atelier-dune-dark.css","e6a4e7604a87531c996b7d9441e9a490"],["/css/highlight/atelier-dune-light.css","3084e6653f07e6e9067fff34464551eb"],["/css/highlight/atelier-estuary-dark.css","c61213ba1c31766c193535436cfeff27"],["/css/highlight/atelier-estuary-light.css","8e5db20c4efe4888e74b91b1e6f008db"],["/css/highlight/atelier-forest-dark.css","9c12f0b2361352a48e50eba7ad136efb"],["/css/highlight/atelier-forest-light.css","3f13b44ab87ab227dba82ab8eed6eb41"],["/css/highlight/atelier-heath-dark.css","299fe1c431c372cfd3771f1ad7c7a80f"],["/css/highlight/atelier-heath-light.css","5819d3f902da600d169a1707a51138bf"],["/css/highlight/atelier-lakeside-dark.css","60ccf4f10b87e750cd159f03bef74171"],["/css/highlight/atelier-lakeside-light.css","6d2e8ca23b6cee58c9b246e6ca4ffb54"],["/css/highlight/atelier-plateau-dark.css","03997341bada32f9f151b3f6cee66daa"],["/css/highlight/atelier-plateau-light.css","a777ae085881eb838f4de484fc0412db"],["/css/highlight/atelier-savanna-dark.css","b3b44b089e386663d484eea3b941b686"],["/css/highlight/atelier-savanna-light.css","39acca3f73b3eb18ef158e5a9698ad7d"],["/css/highlight/atelier-seaside-dark.css","2a79aafd98344c7778a3720a6c3119b0"],["/css/highlight/atelier-seaside-light.css","2a1f4e5f282736abb9cb407dacd58a6c"],["/css/highlight/atelier-sulphurpool-dark.css","7fcc4aedc149f019e5fcd76134593162"],["/css/highlight/atelier-sulphurpool-light.css","98a5a28076dca9ab8aa1fcfff4953e33"],["/css/highlight/atom-one-dark-reasonable.css","4287743fe768911f2697fe0b0ec74e75"],["/css/highlight/atom-one-dark.css","35e47da8f4e9b9548bac51fb47786734"],["/css/highlight/atom-one-light.css","a33d50247663ad9ec190c2ebbdb7f0eb"],["/css/highlight/brown-paper.css","8dbcc30b69ae885a718fb321ac0d8617"],["/css/highlight/codepen-embed.css","3b127cb8978e97cfb20ab7983730cece"],["/css/highlight/color-brewer.css","9a61f4f189d5e3b10316958153ec3952"],["/css/highlight/darcula.css","8442f2e4bc59514b33a12006ad927fff"],["/css/highlight/dark.css","7c0330e427b889ef29d998f6b9f5fb60"],["/css/highlight/default.css","5dca0977a7465e0f163cbed9caf59eba"],["/css/highlight/docco.css","b2c029ba45b25ef1e138bfcf4547c060"],["/css/highlight/dracula.css","86a37d6df1a380aa8cc7ff31b3a9860b"],["/css/highlight/far.css","195bdf83725bc8f7cc8e2a21486c2971"],["/css/highlight/foundation.css","1bc99479add7c7440fe2ec5a9c7fdcaf"],["/css/highlight/github-gist.css","9e9fa35e24a8294c9bf836663ab3b434"],["/css/highlight/github.css","12baadc408a57aa3d4ee77b89569bc04"],["/css/highlight/gml.css","66fbcfd22a57756b181d397bf9cc5753"],["/css/highlight/googlecode.css","a04bb99240c239d0b30256e347669871"],["/css/highlight/gradient-dark.css","2f5c6255c94ed3578bab299fd611e309"],["/css/highlight/grayscale.css","57f0cb2ca0605f264a722a633169d099"],["/css/highlight/gruvbox-dark.css","c2e09f3fd543c35421901eda22311674"],["/css/highlight/gruvbox-light.css","df3fe4b48f243d4864b0e882b011221b"],["/css/highlight/hopscotch.css","a8498d6fc23c708a4e85499c7216a7cb"],["/css/highlight/hybrid.css","193307f81457f86523acc5b7bc22f558"],["/css/highlight/idea.css","33f65d995dbc8bddda3d36632b90c2d7"],["/css/highlight/ir-black.css","d65b194bc015d195631114e15afa1b9f"],["/css/highlight/isbl-editor-dark.css","3f6266807b77e41427d63a2a865c8d60"],["/css/highlight/isbl-editor-light.css","715e4303effae918891fe6e6da38604d"],["/css/highlight/kimbie.dark.css","0f046cd0fc6f7e0c78aad50731271b23"],["/css/highlight/kimbie.light.css","1a1529f4c6da5bf1f04b65d9040fa634"],["/css/highlight/lightfair.css","5e386d652d0ba513526d89efbd55e981"],["/css/highlight/lioshi.css","5fe6bf34d134a6c80742223a2b1df174"],["/css/highlight/magula.css","1d9f37d9d3d9144051e11111af8d8657"],["/css/highlight/mono-blue.css","9f448cd702a32f48348e15588244361b"],["/css/highlight/monokai-sublime.css","55e50274c36cab8c4c6420825101a1e9"],["/css/highlight/monokai.css","94ff9c54742009355769be95214959f3"],["/css/highlight/night-owl.css","918638188617ac8b0545cb1f9c5d0fbe"],["/css/highlight/nnfx-dark.css","4abe69d93198fdfa692029dca4b3ea7a"],["/css/highlight/nnfx.css","ba86aa1e3c466d023c6af5f5ab4d6966"],["/css/highlight/nord.css","07653f02b61ab59b40f57647ac66e6a0"],["/css/highlight/obsidian.css","2377dbc7318c1f9ede01e66fee79d55c"],["/css/highlight/ocean.css","dadd2d7dcdef175b710a8a23afe57117"],["/css/highlight/paraiso-dark.css","6005460159f5684f43ba6bea88c772c0"],["/css/highlight/paraiso-light.css","6118f24ce3cd428f7a0f2117115365f0"],["/css/highlight/pojoaque.css","e3ee98e01c068ab80dd246072949c85f"],["/css/highlight/purebasic.css","353e2eaae7940e86818ff940cd4c3c2b"],["/css/highlight/qtcreator_dark.css","1371143652fc555452c7bfeed297ba0a"],["/css/highlight/qtcreator_light.css","eb36c4085fe699a91e2a00a8488cdf22"],["/css/highlight/railscasts.css","af988df99d1fa3ccbc670683ec7f2a11"],["/css/highlight/rainbow.css","fa3c834c7bbf36d6721d1d4826027e82"],["/css/highlight/routeros.css","709031530c0fba12d27ee6a272470491"],["/css/highlight/school-book.css","a886e3dc7a9acf128779ef02652284cb"],["/css/highlight/shades-of-purple.css","c0348fcd42432eec41a4e07b2da2666c"],["/css/highlight/solarized-dark.css","84a324498dc0df2743bc16fb1262b092"],["/css/highlight/solarized-light.css","6f6b837352afd5c7a9e5b15b18dd9959"],["/css/highlight/srcery.css","8dedba604b59c2b47efe61af3a61102d"],["/css/highlight/sunburst.css","9d734ca1df323ebff7bf41afa9c64744"],["/css/highlight/tomorrow-night-blue.css","59d381bc189a267ff590020e64038ea5"],["/css/highlight/tomorrow-night-bright.css","b5cae370c9bed82e440791eb380929c9"],["/css/highlight/tomorrow-night-eighties.css","943417d8a0357a87c17a03e3c55709e7"],["/css/highlight/tomorrow-night.css","45f85ed31fab2bf5336190be8f0f2ebf"],["/css/highlight/tomorrow.css","997eb4d8d3bebcb6c988230bc0705917"],["/css/highlight/vs.css","cb6d9bc54b745b7e26ddcf2425dd7d3a"],["/css/highlight/vs2015.css","d974a7288980e61d37d61ba075ebb92a"],["/css/highlight/xcode.css","15e15d7924fc619f99a97ea79333e0bc"],["/css/highlight/xt256.css","de4c44190c44ebfb374418bf520b626c"],["/css/highlight/zenburn.css","3c9f5cbd5ee3912012e5e985ad01532b"],["/css/style/dark.css","4e69643c987847538ba1aef3ca10144f"],["/css/style/main.css","1e6db3584e41e3aedb8b9271ae3251d6"],["/css/style/note.css","72240bd3a85aa68cbaa2cb9edc52602a"],["/eating/index.html","722a69703ad9f82a01759dc8baf81f82"],["/index.html","079c47edbaf8fe31dacf36a122568120"],["/js/b2t.js","cd0f8ec03fec335251ac9c0c051f7cbf"],["/js/darkmode.js","96eb9ac7f1c1f415261aa7dd6dc5f024"],["/links/index.html","f6b53cc4bf762c6464751ecbdc6e0576"],["/links/link.html","51b0942fd806dd8672e662bbd37fec23"],["/page/2/index.html","a2c1fa6478a81daf999cfae2e03112a6"],["/page/3/index.html","3af049c85a57a21585fda615218405c2"],["/page/4/index.html","7c1d9bb0ad64d18a6a15361182b8a227"],["/page/5/index.html","9e29f7fbadd16368dc0e3dbb59fbe935"],["/posts/10798/index.html","39d4d66b546d4b653cdb7ad93e7dfa51"],["/posts/11961/index.html","c50ac199791fb5d3b2b5a01798755dc1"],["/posts/13009/index.html","a4aa9613d445f97d4b56ea7e9f74c0cc"],["/posts/1478/index.html","f5c6b4080c5e3ea20ff9e92b9f5fde95"],["/posts/16931/index.html","4b6315e3c9dca0a8911717339479d5ea"],["/posts/20708/index.html","57c8bf8845d8808be824b35df23102b2"],["/posts/22338/index.html","1203b4a47fa1960f795c0de6710a41f5"],["/posts/22378/index.html","2a30b1e0cf60e23a790003ff67bb8374"],["/posts/24380/index.html","2c480876494cd938b718c7c921449014"],["/posts/26484/index.html","d275f1217832c021293ec464222874bb"],["/posts/29606/index.html","72958a0525f084567fdc062a61c81429"],["/posts/32449/index.html","4c01f95299b6b2eebdcbf91b9a21dc3c"],["/posts/3315/index.html","efbacee315d2c021eaf2947ae962f367"],["/posts/33197/index.html","7a3bb264cb18dcdda3080e1c1b4409ba"],["/posts/33306/index.html","0f54f38ff17b80ed9e6d590d78702a9c"],["/posts/36128/index.html","c32b532c30f9d420030dcc0fe10ad9cf"],["/posts/37557/index.html","55a51441f09eba45591e2dfa612b2191"],["/posts/37773/index.html","9a71aa2e462c2564b962ff2d088321ab"],["/posts/38589/index.html","ba9fb045d21ca782690a7aeb4904a1df"],["/posts/39661/index.html","0bd3ce82baec118077b3f9096653cb29"],["/posts/39842/index.html","5cdb8d4b5b4528ea9781013c0da72d91"],["/posts/39942/index.html","e3763106f35f29f19d606311e20d5190"],["/posts/44194/index.html","5cc04ade8dff53a0cd8e1ab6660e3242"],["/posts/44804/index.html","4e0a94311a34278fa6c93886042c9fb9"],["/posts/4588/index.html","0507f27c070e553c2ba898c3f565d72a"],["/posts/48089/index.html","2ac42934e72c8df6a70e25f900773dc8"],["/posts/51892/index.html","25fc0483d32176a65973a8699a70bb03"],["/posts/53289/index.html","8ab47a4982732f7725583595cc764db6"],["/posts/54711/index.html","95c280e2ce9bb7eb4be7af9f1ad420e0"],["/posts/55302/index.html","8377dcb54804bc5c5354d9839e3244f6"],["/posts/56653/index.html","a7e51319544c84697b401ddc8791d175"],["/posts/57345/index.html","a428ac54cb68be93ee6c5cf679b2cc6e"],["/posts/60197/index.html","9839fb9d54ccb72ff80e1a61bd83c8ef"],["/posts/60788/index.html","71c69a83a36ffa885f5cf37418ca6290"],["/posts/63676/index.html","e4234033f324e7575364fa1f187cf6d6"],["/posts/64257/index.html","17f4d058806331069981aa8f8bc14563"],["/posts/64865/index.html","3c0040b449203f10c741c39b3b0c4d37"],["/posts/65311/index.html","78fa9e5d0c8c6ba800827a280fd518e7"],["/posts/7324/index.html","789d439e73279c4acae0cd86c7aa8167"],["/posts/8688/index.html","6fafb0ef9de9a2b1c0d92bb5e9927904"],["/posts/9687/index.html","7078f2698abaa38705bf23a4ada8876f"],["/sw-register.js","c2a5c09eea384548169e5d3564df0979"],["/tags/index.html","52b0cabb6772bb3a7af26e929735f693"],["/tags/书单/index.html","c4434ee146ff57f2baa5c8951a35ca98"],["/tags/公告/index.html","1b928e635c05573115e9de7474826001"],["/tags/悦读/index.html","b40330faf5100ac8f9f821159fa5ab4c"],["/tags/笔记/index.html","42c10beae956b83bdd644189809094d3"]];
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
