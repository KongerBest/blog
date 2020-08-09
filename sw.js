/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","a19b29e221d5a92475e232ae0767b541"],["/about/index.html","5dfa7560d34a6827675cda0351bb79e5"],["/archives/2019/12/index.html","741e26ebcb3df700bda0a47d8872e91b"],["/archives/2019/index.html","f374ab382dfa72c29c2cf1ba9f1f1844"],["/archives/2020/01/index.html","959c978b5110fad11c0831249e71d1ad"],["/archives/2020/02/index.html","c0ec1a2e7c877742e79517ad7697e808"],["/archives/2020/04/index.html","044d17452bc18532ea9e354f61c28329"],["/archives/2020/05/index.html","dfaedfd2034b00031e51755d156cfd6d"],["/archives/2020/05/page/2/index.html","ab8057f0e9189e6538fe71a98ebb0bb3"],["/archives/2020/06/index.html","9e161a7d18830d76da6fc63f0b9c7e80"],["/archives/2020/07/index.html","4999e3acd6ae7778bfc9b5803af8e6b8"],["/archives/2020/index.html","519ceae4ded7bacc6263685838430f68"],["/archives/2020/page/2/index.html","47693ba7fd543312bf471b311d85de19"],["/archives/2020/page/3/index.html","c89f8b6b21d61a8271722685e5c2c183"],["/archives/2020/page/4/index.html","3d65942a04457d4ae06655facd084b9f"],["/archives/index.html","4f6f22b34dc87db705b5ec25ce4d5e68"],["/archives/page/2/index.html","60dec1f754255910c33c932d4e38231d"],["/archives/page/3/index.html","9f9ed973f79d85e03337313369ab62f5"],["/archives/page/4/index.html","63b5fd397ecce0ef19f037c3435e16a3"],["/archives/page/5/index.html","3ca378303784497b0c9d71f04d356350"],["/categories/index.html","957d71acf53ce4a49468f31ea59ff0a0"],["/categories/技术/index.html","ab484b325044af54f46ef7868ecbc40f"],["/categories/技术/page/2/index.html","47f74da190aa34152c1fc8d1b0e718c8"],["/categories/技术/page/3/index.html","128fcc3a27a9ec1c3091a2407702c006"],["/categories/技术/资源/index.html","d6097ba56f11e0018f7dcd1f16e3cc06"],["/categories/技术/转载/index.html","55a3920deb3863f3265a8150a91474b4"],["/categories/杂谈/index.html","4d6c08dcc6f867bbf52b465e6dde604a"],["/categories/生活/index.html","463d6c2e894e086d75e605188a04533f"],["/categories/生活/技术/index.html","cabce0b0632b9e14f740082da50a5100"],["/categories/生活/技术/转载/index.html","43cdfd4d91c7a2af3c31c3035cf92b17"],["/categories/生活/随想/index.html","be4cd277df649a7c8442bb6b4e9ab6e5"],["/categories/资源/index.html","85b9d55cc6440a56e81353add2cac1d5"],["/categories/资源/转载/index.html","8deab606dfe282b9be5942bd56fdce97"],["/categories/转载/index.html","4b24d0697c717bb9869885c29e583c67"],["/categories/随想/index.html","dbb2ca3db0915d08a14b745b6d665968"],["/css/highlight/a11y-dark.css","c2a4b6f7291fd5f50926637611e813d0"],["/css/highlight/a11y-light.css","342bd54d1b4078524d7f212b883be3b1"],["/css/highlight/agate.css","4cbcf40b8fde3a602fa5d8b8e2ffb2ff"],["/css/highlight/an-old-hope.css","c2bd871964086966cd670af08fcb52f0"],["/css/highlight/androidstudio.css","45ef9ea968f24a5040799417721d1c61"],["/css/highlight/arduino-light.css","37575cfef699a7fae65d9d293b20c535"],["/css/highlight/arta.css","072621b31eb6f4ae53ad12792fcb6858"],["/css/highlight/ascetic.css","9e5c770647e9a48e2736e42e4a1a7a8b"],["/css/highlight/atelier-cave-dark.css","39d6e3d321fcddf00bae116685903a0d"],["/css/highlight/atelier-cave-light.css","de67a142152e3950e06995f43782e1c8"],["/css/highlight/atelier-dune-dark.css","92603f8738d012199e61f964c56eebba"],["/css/highlight/atelier-dune-light.css","b1f9df39c71cf4c51eb6ae59e168bba8"],["/css/highlight/atelier-estuary-dark.css","7d7174a087ce04873edf6678a8d3b97d"],["/css/highlight/atelier-estuary-light.css","f4a4ad97a062626517d644d18875d43b"],["/css/highlight/atelier-forest-dark.css","5390981e61f703f9134c643c3a06e1b4"],["/css/highlight/atelier-forest-light.css","840eca8f507a33d7ad7cee7bc446264f"],["/css/highlight/atelier-heath-dark.css","a417deefdac6ef6996cd677f7824a638"],["/css/highlight/atelier-heath-light.css","da1577f99ec4ca72a728c8bab7d205a1"],["/css/highlight/atelier-lakeside-dark.css","97599e9fe5c9f311dca06ded20dbf91c"],["/css/highlight/atelier-lakeside-light.css","4d79b35d1820d0145b4fd23e15b20afa"],["/css/highlight/atelier-plateau-dark.css","4ca12f50c16de2ef25c8caf36b44a952"],["/css/highlight/atelier-plateau-light.css","6daa06ea7144dd438cfa5863ceaaeddc"],["/css/highlight/atelier-savanna-dark.css","567e0567adca14dfa641879185d2f219"],["/css/highlight/atelier-savanna-light.css","8a07db4d84d9d83fe549234780e59d54"],["/css/highlight/atelier-seaside-dark.css","fefb0289f2c8cbabccf5afaa5f568f52"],["/css/highlight/atelier-seaside-light.css","8409c2aea200ce41b5488bb7301b1a75"],["/css/highlight/atelier-sulphurpool-dark.css","4b4f35f8d36a712829a0ee1af3eed7cf"],["/css/highlight/atelier-sulphurpool-light.css","b6acf6f21f1a5156be61e0eb792900e0"],["/css/highlight/atom-one-dark-reasonable.css","7a7c89739e975becb884b6a0f84e68cb"],["/css/highlight/atom-one-dark.css","3cdcc07d3ae6ad94ae2c77bec9ee1651"],["/css/highlight/atom-one-light.css","164c62df133e4500102b72497bef7512"],["/css/highlight/brown-paper.css","8106f9876fd3472d045e094c05279b6a"],["/css/highlight/codepen-embed.css","5c86e50c36ee86bcf33ed35e8e70300e"],["/css/highlight/color-brewer.css","8f618f1a1f876d9df304d37faf1b6f80"],["/css/highlight/darcula.css","f78117c340abb6736ec72f892704b948"],["/css/highlight/dark.css","ad6f24c76bc176bb10de7ad25bd61c92"],["/css/highlight/default.css","049e91dd8ad05e726527b7a92c751328"],["/css/highlight/docco.css","0de7c8659062cec03a55e32e13cb3a2f"],["/css/highlight/dracula.css","8acbb498b5f816b05ce90f67ef381b94"],["/css/highlight/far.css","dea462dcbc1d8d3d9d78673b9a740f58"],["/css/highlight/foundation.css","9caa9088a2f0d9d4b62ce85e5db52a7c"],["/css/highlight/github-gist.css","ef2d2e1207416ab4203e17f5b7d63b5e"],["/css/highlight/github.css","54d056c970c8bdc0459c38b327c871ab"],["/css/highlight/gml.css","7ca2836e42499ce28b6bc06be1cd46a6"],["/css/highlight/googlecode.css","a76501a1b993ce5729a24181c1f0faf5"],["/css/highlight/gradient-dark.css","14f72556d872ebb7fb6d02ddcb76d2b1"],["/css/highlight/grayscale.css","6429f107fc5d73d142e490d2169c6dd2"],["/css/highlight/gruvbox-dark.css","591273b44110bb1bd0f854a886cab988"],["/css/highlight/gruvbox-light.css","9a4d74dbc53d52c1c549acb3f21b3751"],["/css/highlight/hopscotch.css","46694dee96d000ec58d090a65b7a8a32"],["/css/highlight/hybrid.css","04b4696c9403a858033931661d43750d"],["/css/highlight/idea.css","8b94d91b510c2d7f1f6ca9e4535eb096"],["/css/highlight/ir-black.css","703e8c7327e247d5760945b7338b2ff3"],["/css/highlight/isbl-editor-dark.css","5f1ad1127531db54af5cd41ed06cb504"],["/css/highlight/isbl-editor-light.css","189b722a88a5280d03328dfe1bbaa95f"],["/css/highlight/kimbie.dark.css","05be04203cc29d544b23942ba86204ca"],["/css/highlight/kimbie.light.css","ef755e0528a31b7828847541588cc422"],["/css/highlight/lightfair.css","eda1b70c95ecaa320ee50057065b96d6"],["/css/highlight/lioshi.css","f821a7e44eed8d0e72d61e59a2fbd0b5"],["/css/highlight/magula.css","32cdcde40557c1d07467bd30127e1aff"],["/css/highlight/mono-blue.css","6765447209caf9ca863d487d035a9c9b"],["/css/highlight/monokai-sublime.css","6e3b3f7c74c6fea356504fc9143595da"],["/css/highlight/monokai.css","4a62b6181dd971d969e815944af73658"],["/css/highlight/night-owl.css","7da907bf8cdb3e1c91326687f27077d8"],["/css/highlight/nnfx-dark.css","9380047ad5d6dbded787a68f1ac6187d"],["/css/highlight/nnfx.css","3e3b4b79a7aad61612c422bfb39ae7a0"],["/css/highlight/nord.css","2a2b674444bbf1d0f6f9572e1be744b7"],["/css/highlight/obsidian.css","ff72bc59331e202bff82f7e4d238cbc0"],["/css/highlight/ocean.css","8236816c162e0ffa168afe32a9acca05"],["/css/highlight/paraiso-dark.css","84295252398adbc4b282e28c46935412"],["/css/highlight/paraiso-light.css","5ec5d3f3d250fea4c854baee6ebafc35"],["/css/highlight/pojoaque.css","c0a17824da3a9de300985d01371b803f"],["/css/highlight/purebasic.css","b51a6f920b1e0ad900773484963e281d"],["/css/highlight/qtcreator_dark.css","1cc6eeec183f02c29098becf23a1bef7"],["/css/highlight/qtcreator_light.css","853a6347db43ef3d921ab0f9c7e77baa"],["/css/highlight/railscasts.css","e3daa83c9f90a26b0a416dcff2245c37"],["/css/highlight/rainbow.css","f92a15ad663b5e60bdfd29336114230e"],["/css/highlight/routeros.css","8a77ef580fa1ba08222a8225e60662de"],["/css/highlight/school-book.css","a83e84ea7e9f34b46a1dec89f71e8fd9"],["/css/highlight/shades-of-purple.css","662c4bf6e0bed01588569ab518040275"],["/css/highlight/solarized-dark.css","73dcc7951c06ed48d4caf68e531fc506"],["/css/highlight/solarized-light.css","499483820c07eed3071ac0a99522e1d7"],["/css/highlight/srcery.css","2114af48e54d31e5838f2c62cd1933c3"],["/css/highlight/sunburst.css","d6dbaf07e10a09e16235c464060b8d69"],["/css/highlight/tomorrow-night-blue.css","3f3bf75435f969073e6a223ffafb7851"],["/css/highlight/tomorrow-night-bright.css","817f047de80421990633e0a6c049e514"],["/css/highlight/tomorrow-night-eighties.css","ab1d80fdedca350005ed9bc12418b273"],["/css/highlight/tomorrow-night.css","f1146e2ae732ae6efbd3845a8e21456a"],["/css/highlight/tomorrow.css","e0f596978588f59b30a17a19ee2388f8"],["/css/highlight/vs.css","43d518157ba117bf81497c823ebcd589"],["/css/highlight/vs2015.css","c1a34799ce0b78d8fe65bc5f5253df1e"],["/css/highlight/xcode.css","6405fb73e5c725fb5ba083af5f892da4"],["/css/highlight/xt256.css","5fc22e136508cbf0306991a4ade1ddcd"],["/css/highlight/zenburn.css","b62cb16f293368ef819c13db4ea7fee4"],["/css/style/dark.css","76edb38f5ecf265c8e5c0abc41489a99"],["/css/style/main.css","1ae2abc8c3e50869d0bb2f8082cb7b58"],["/css/style/note.css","bb1ec17066e329cbe76af85f7f46af63"],["/eating/index.html","3965ee9a8676a1d645a8a4dfe6d21639"],["/index.html","9d444c0bb075fc812439940bb0d98ead"],["/js/b2t.js","cd0f8ec03fec335251ac9c0c051f7cbf"],["/js/darkmode.js","96eb9ac7f1c1f415261aa7dd6dc5f024"],["/js/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/links/index.html","5d2fe3b983b7e1971d93c7dcbf1a4bff"],["/links/link.html","abdf5ea1506ac56f0747915738736c07"],["/page/2/index.html","2a0664c47262ae611e9ad5d1bbb8fe90"],["/page/3/index.html","c4fedc9c5e391bdebc3c31be804b8351"],["/page/4/index.html","7e50cb873d8bc6a41d7132d9624b8431"],["/page/5/index.html","e6f35ea74467b939b3cc8da72dd2c5ef"],["/posts/10798/index.html","9d471f0f0c8e6703e65205795cef43c5"],["/posts/11961/index.html","6ffe080267d2e5750eceeba69a48c695"],["/posts/13009/index.html","7ad715b448a659325c13cc1104610b28"],["/posts/1478/index.html","7afc0143fd42e0dc5e69c96b6f44ac06"],["/posts/16931/index.html","470af255aff27fc464654ed04fb66953"],["/posts/20708/index.html","881b4983659c90ae50f643c8a38a406c"],["/posts/22338/index.html","f86d7302c64116967b1d9e25325da6a2"],["/posts/22378/index.html","f493fb34db41c36be8c0f800dada07bc"],["/posts/24380/index.html","309cc7c81a287833d0382c3fb7a84b96"],["/posts/26484/index.html","6704f616e98adb287c757120de06e433"],["/posts/29606/index.html","45bb8a3964c0126c98abe1e29308dd86"],["/posts/32449/index.html","3404a74c9d74c8f44125e4c1e1818416"],["/posts/3315/index.html","97ca448b27ee82fbf844f022cf1a3976"],["/posts/33197/index.html","10a05bac17df44c6e48004ebe68de112"],["/posts/33306/index.html","cdba9e516215d999c8751e6e41717021"],["/posts/36128/index.html","f491b966d8397e7481545b79f4362895"],["/posts/37557/index.html","8418f516ee2bfeb965bface7d9373f16"],["/posts/37773/index.html","35df2c60717ab8b04ed8115b843cb9b9"],["/posts/38589/index.html","861186827505bc247101823b97babe03"],["/posts/39661/index.html","400c6e926926aa6879f13518b56939b4"],["/posts/39842/index.html","970c5a8b88d690cd60ea2ee741a643cc"],["/posts/39942/index.html","3dc66384834dd3b6d4573762cae682ef"],["/posts/44194/index.html","f12773e6d0200f10f6e64d1ef726f827"],["/posts/44804/index.html","422196636ef734b5c01d2b09236f1053"],["/posts/4588/index.html","e7a41737dc26d3c15a53ba01ae9c25b6"],["/posts/48089/index.html","bc9fc74ecf87a9177b16186026fae6a9"],["/posts/51892/index.html","469cf94c9a5f98e805ee7ebeaaf95b7c"],["/posts/53289/index.html","73665f075e8eddfa18240c9a74e3a1e8"],["/posts/54711/index.html","eeac356856611c32399d3b05fe43facb"],["/posts/55302/index.html","97bc734b2120a78657b76aeedc1db50e"],["/posts/56653/index.html","f476d834a03dd50045a1d22b624bd819"],["/posts/57345/index.html","e05663aeeab93f1edf13b55b846dd658"],["/posts/60197/index.html","eefa96d5339026394c8adba7bde0e882"],["/posts/60788/index.html","8be07f23193548bf63394e87bbe96a8c"],["/posts/63676/index.html","89eec9ca1115fa45bf384a0285baafc0"],["/posts/64257/index.html","6220f18355d37dc921ece44927e4bd63"],["/posts/64865/index.html","efa79c11cdeb8a96fe975fa43d7aa662"],["/posts/65311/index.html","03dbe4919be8c8de954a4ec38a743d86"],["/posts/7324/index.html","47f8b2a171148a661ff3cd8b5258372a"],["/posts/8688/index.html","2074f8574a96e904f10c96314f5b4d5f"],["/posts/9687/index.html","c3ac37649e4f73ce24046996a6db122f"],["/random/index.html","987122120d99b7f7da40a90299e2d45e"],["/sw-register.js","3951ce6eff9043111df18f7d9e1f89f5"],["/tags/index.html","2160326c18be87ced993662f8abd7168"],["/tags/书单/index.html","d032ab49b383f5de76ff46ec4f78d2b2"],["/tags/公告/index.html","f513153391f6daf471143491e49dc99e"],["/tags/悦读/index.html","3a36e2351979ec38f83913f3b66b361b"],["/tags/笔记/index.html","4e5149c422be58724237e525984b801b"]];
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
