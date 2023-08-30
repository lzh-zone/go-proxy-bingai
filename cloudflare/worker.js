// 同查找 _U 一样, 查找 KievRPSSecAuth 的值并替换下方的xxx
const KievRPSSecAuth = 'FABSBBRaTOJILtFsMkpLVWSG6AN6C/svRwNmAAAEgAAACD5GRCJs8QLXEATmfQR+6UwbM9x5052FB6BmLxuVmn4MIdg2vUfuHAHGTATaAW7N4/yETebScv0DL38tjSuUw3F4x8w4CiqZKC+yXf7XakubclN/avhhbfw/5uGTul0OIzQoEQhnUpypYNbLC0ryH3TrPBl2DmAGYLs9wekxFewMGWHY7uE0mzR9vyqY1SYh14W92Bi10afYRbJEsqyCTNYQUwcANoP1Dic4MjIa5TEzNojj6Q26CCO9v+h2ew4zMMcbU8tkvTAiHCHuK/4TYzI1vgIgGep6eXG3khweNjPXyX0pPO8KsYwAXpvoh/q12rKE0jQHCb6C1e0V/XuHhDE1BbMZXxKX3FKX1YC5Yi8h0Ar/e6EUMTzGv9chEN1yJ31AHhru0G1RbO+VoR42eTz5luNDPz6zMrpAVlNVrvmfZIUC6oJ4St/TVG3lHeu34g8fXdQAdrBFOHh6bM01gsMkMsFxtHfzx8zNkWQfebNCB9/ZoLbrskSCRjNkEZFh/MLud+sScyo8Czl7d1jp3Yd/h9BQZLIFnMdN5k+8zvTnckfPDGxjrRZYqDpHfJXBMxJ3zHWfRmyxue/k/4XnWY/rSeQuI+K74Mq9oKwA/61Dl90Oriw06CYXJ9d9xiQVRyyqv7/KdkpWbM8R67jisIUaabi6/j9gVSk23CWT1Q/drKdSKhCRpwhech/i/mc+xpcREBX3cXXgggDT9/xQFJgHaXCV8WVu3qtbTglkiR0axRFcpqzONhGmsbDIZnfRQQMvSoBLrsOTRaWB1I/7BuHnrriXZpxitAJ0aB+9o1A/fN3uNiXnMTp0qT6QMpiEIuyUh3yLZQqkXmz83OfF363cEHmakrUDqURlvQD5KNIFjkcYFetRv/DmBL7VBCUpmPuCWc566ubmiX591QvvPyokgp3iT5ZPUmldbnrb1yPiWld1NnWeeYYeL8/ML+jB5+oUL6vEFGYU/a9O+xkd2FKq+EJvMRFappbtGn6RyAf6AFQIcr0VnD+kJR5gR4cI299OoOHCaYqgeTA6j5V2YZzScCLnJDY4RPV5vethK8Yv6AAB8Ip00L4lEq4ite1EHB5X4SZJJuU+R63MeqYBYmr2A7K5NBIWPQpJ9IdsoeUctmX+FIJ7VcYN3iiL3FyXZS+DfuLeWqXfVlURFg9gQKck1yZtL2Sja3phcR3zcf/CNJp6kci2SVcIUoqdKLzPiLDHSTefbABa0LNLaVJMyUPdFF4K3Ep1m7ieTQsC7SvPSfJtiXz+gKa63iznm0gAPyx4b5neXSdxh9eQxPz4u76WrYT7vKEjsGVZefuREg4mLCGectklYHMvKEyU2yhicXrkzO2ICMnllPlP1CQb9kTO03XUkhi31EUwHOXzpOs0lEpwhUN2ivoWTxQAvPIMxWVV2UdrvQx2QuMwd5ipppI=';
const _RwBf = 'r=0&ilt=1&ihpd=1&ispd=0&rc=0&rb=0&gb=0&rg=200&pc=0&mtu=0&rbb=0&g=0&cid=&clo=0&v=1&l=2023-08-29T07:00:00.0000000Z&lft=0001-01-01T00:00:00.0000000&aof=0&o=2&p=&c=&t=0&s=0001-01-01T00:00:00.0000000+00:00&ts=2023-08-30T01:20:33.1893457+00:00&rwred=0&wls=&wlb=&lka=0&lkt=0&TH=';
const MUID = '06B26C5ECF69680F0EA77F23CED36995';
const _U = '1cEyod0vDX8fjf-Fz3FDoFX6sCpLGGhvZUWWlqC1QV2btore0q_ZKfIL16G2DXrDbphTarfnXG1Am8e1Dc3qzji_PCikSZYubJRcC38Qc8iuLdkhOHykYHUVLWtIlMp2w4V4zgBQCtCGfz4lc4RcqVfRniGg_g27R3z1NHp-_pSULIEW6jBWGHJ2-fXrHMzfVnd0MYwCoe1QOzj-giUppow';

const SYDNEY_ORIGIN = 'https://sydney.bing.com';
const BING_ORIGIN = 'https://www.bing.com';
const KEEP_REQ_HEADERS = [
  'accept',
  'accept-encoding',
  'accept-language',
  'authorization',
  'connection',
  'cookie',
  'upgrade',
  'user-agent',
  'sec-websocket-extensions',
  'sec-websocket-key',
  'sec-websocket-version',
  'x-request-id',
  'content-length',
  'content-type',
  'access-control-request-headers',
  'access-control-request-method',
  'sec-ms-gec',
  'sec-ms-gec-version',
  'x-client-data',
  'x-ms-client-request-id',
  'x-ms-useragent',
];
const IP_RANGE = [
  ['4.150.64.0', '4.150.127.255'],       // Azure Cloud EastUS2 16382
  ['4.152.0.0', '4.153.255.255'],        // Azure Cloud EastUS2 131070
  ['13.68.0.0', '13.68.127.255'],        // Azure Cloud EastUS2 32766
  ['13.104.216.0', '13.104.216.255'],    // Azure EastUS2 256
  ['20.1.128.0', '20.1.255.255'],        // Azure Cloud EastUS2 32766
  ['20.7.0.0', '20.7.255.255'],          // Azure Cloud EastUS2 65534
  ['20.22.0.0', '20.22.255.255'],        // Azure Cloud EastUS2 65534
  ['40.84.0.0', '40.84.127.255'],        // Azure Cloud EastUS2 32766
  ['40.123.0.0', '40.123.127.255'],      // Azure Cloud EastUS2 32766
  ['4.214.0.0', '4.215.255.255'],        // Azure Cloud JapanEast 131070
  ['4.241.0.0', '4.241.255.255'],        // Azure Cloud JapanEast 65534
  ['40.115.128.0', '40.115.255.255'],    // Azure Cloud JapanEast 32766
  ['52.140.192.0', '52.140.255.255'],    // Azure Cloud JapanEast 16382
  ['104.41.160.0', '104.41.191.255'],    // Azure Cloud JapanEast 8190
  ['138.91.0.0', '138.91.15.255'],       // Azure Cloud JapanEast 4094
  ['151.206.65.0', '151.206.79.255'],    // Azure Cloud JapanEast 256
  ['191.237.240.0', '191.237.241.255'],  // Azure Cloud JapanEast 512
  ['4.208.0.0', '4.209.255.255'],        // Azure Cloud NorthEurope 131070
  ['52.169.0.0', '52.169.255.255'],      // Azure Cloud NorthEurope 65534
  ['68.219.0.0', '68.219.127.255'],      // Azure Cloud NorthEurope 32766
  ['65.52.64.0', '65.52.79.255'],        // Azure Cloud NorthEurope 4094
  ['98.71.0.0', '98.71.127.255'],        // Azure Cloud NorthEurope 32766
  ['74.234.0.0', '74.234.127.255'],      // Azure Cloud NorthEurope 32766
  ['4.151.0.0', '4.151.255.255'],        // Azure Cloud SouthCentralUS 65534
  ['13.84.0.0', '13.85.255.255'],        // Azure Cloud SouthCentralUS 131070
  ['4.255.128.0', '4.255.255.255'],      // Azure Cloud WestCentralUS 32766
  ['13.78.128.0', '13.78.255.255'],      // Azure Cloud WestCentralUS 32766
  ['4.175.0.0', '4.175.255.255'],        // Azure Cloud WestEurope 65534
  ['13.80.0.0', '13.81.255.255'],        // Azure Cloud WestEurope 131070
  ['20.73.0.0', '20.73.255.255'],        // Azure Cloud WestEurope 65534
];

/**
 * 随机整数 [min,max)
 * @param {number} min
 * @param {number} max
 * @returns
 */
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

/**
 * ip 转 int
 * @param {string} ip
 * @returns
 */
const ipToInt = (ip) => {
  const ipArr = ip.split('.');
  let result = 0;
  result += +ipArr[0] << 24;
  result += +ipArr[1] << 16;
  result += +ipArr[2] << 8;
  result += +ipArr[3];
  return result;
};

/**
 * int 转 ip
 * @param {number} intIP
 * @returns
 */
const intToIp = (intIP) => {
  return `${(intIP >> 24) & 255}.${(intIP >> 16) & 255}.${(intIP >> 8) & 255}.${intIP & 255}`;
};

const getRandomIP = () => {
  const randIndex = getRandomInt(0, IP_RANGE.length);
  const startIp = IP_RANGE[randIndex][0];
  const endIp = IP_RANGE[randIndex][1];
  const startIPInt = ipToInt(startIp);
  const endIPInt = ipToInt(endIp);
  const randomInt = getRandomInt(startIPInt, endIPInt);
  const randomIP = intToIp(randomInt);
  return randomIP;
};

/**
 * 生成随机字符串
 * @param {number} e
 * @returns
 */
const randomString = (e) => {    
  e = e || 32;
  const t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678_-+";
  var n = "";
  for (let i = 0; i < e; i++) n += t.charAt(getRandomInt(0, t.length));
  return n;
}

/**
 * home
 * @param {string} pathname
 * @returns
 */
const home = async (pathname) => {
  const baseUrl = 'https://raw.githubusercontent.com/Harry-zklcdc/go-proxy-bingai/master/';
  let url;
  if (pathname.indexOf('/web/') === 0) {
    url = pathname.replace('/web/', baseUrl+'web/');
  } else {
    url = baseUrl + 'web/index.html';
  }
  const res = await fetch(url);
  const newRes = new Response(res.body, res);
  if (pathname.endsWith('.js')) {
    newRes.headers.set('content-type', 'application/javascript');
  } else if (pathname.endsWith('.css')) {
    newRes.headers.set('content-type', 'text/css');
  } else if (pathname.endsWith('.svg')) {
    newRes.headers.set('content-type', 'image/svg+xml');
  } else if (pathname.endsWith('.ico') || pathname.endsWith('.png')) {
    newRes.headers.set('content-type', 'image/png');
  } else {
    newRes.headers.set('content-type', 'text/html; charset=utf-8');
  }
  newRes.headers.delete('content-security-policy');
  return newRes;
};


export default {
  /**
   * fetch
   * @param {Request} request
   * @param {*} env
   * @param {*} ctx
   * @returns
   */
  async fetch (request, env, ctx) {
    const currentUrl = new URL(request.url);
    // if (currentUrl.pathname === '/' || currentUrl.pathname.startsWith('/github/')) {
    if (currentUrl.pathname === '/' || currentUrl.pathname.indexOf('/web/') === 0) {
      return home(currentUrl.pathname);
    }
    if (currentUrl.pathname === '/sysconf') {
      return new Response('{"code":200,"message":"success","data":{"isSysCK":false,"isAuth":true}}')
    }
    let targetUrl;
    if (currentUrl.pathname.includes('/sydney')) {
      targetUrl = new URL(SYDNEY_ORIGIN + currentUrl.pathname + currentUrl.search);
    } else {
      targetUrl = new URL(BING_ORIGIN + currentUrl.pathname + currentUrl.search);
    }

    const newHeaders = new Headers();
    request.headers.forEach((value, key) => {
      // console.log(`old : ${key} : ${value}`);
      if (KEEP_REQ_HEADERS.includes(key)) {
        newHeaders.set(key, value);
      }
    });
    newHeaders.set('host', targetUrl.host);
    newHeaders.set('origin', targetUrl.origin);
    newHeaders.set('referer', 'https://www.bing.com/search?q=Bing+AI');
    const randIP = getRandomIP();
    // console.log('randIP : ', randIP);
    newHeaders.set('X-Forwarded-For', randIP);
    const cookie = request.headers.get('Cookie') || '';
    let cookies = cookie;
    if (!cookie.includes('KievRPSSecAuth=')) {
      if (KievRPSSecAuth.length !== 0) {
        cookies += '; KievRPSSecAuth=' + KievRPSSecAuth;
      } else {
        cookies += '; KievRPSSecAuth=' + randomString(512);
      }
    }
    if (!cookie.includes('_RwBf=')) {
      if (_RwBf.length !== 0) {
        cookies += '; _RwBf=' + _RwBf
      } else {
        cookies += '; _RwBf=' + randomString(256);
      }
    }
    if (!cookie.includes('MUID=')) {
        if (_RwBf.length !== 0) {
          cookies += '; MUID=' + _RwBf
        } else {
          cookies += '; MUID=' + randomString(256);
        }
      }
    if (!cookie.includes('_U=')) {
      if (_U.length !== 0) {
        cookies += '; _U=' + _RwBf
      } else {
        cookies += '; _U=' + randomString(128);
      }
    }
    newHeaders.set('Cookie', cookies);
    const oldUA = request.headers.get('user-agent');
    const isMobile = oldUA.includes('Mobile') || oldUA.includes('Android');
    if (isMobile) {
      newHeaders.set(
        'user-agent',
        'Mozilla/5.0 (iPhone; CPU iPhone OS 15_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.7 Mobile/15E148 Safari/605.1.15 BingSapphire/1.0.410427012'
      );
    } else {
      newHeaders.set('user-agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36 Edg/113.0.1774.35');
    }

    // newHeaders.forEach((value, key) => console.log(`${key} : ${value}`));
    const newReq = new Request(targetUrl, {
      method: request.method,
      headers: newHeaders,
      body: request.body,
    });
    // console.log('request url : ', newReq.url);
    const res = await fetch(newReq);
    const newRes = new Response(res.body, res);
    newRes.headers.set('Access-Control-Allow-Origin', request.headers.get('Origin'));
    newRes.headers.set('Access-Control-Allow-Methods', 'GET,HEAD,POST,OPTIONS');
    newRes.headers.set('Access-Control-Allow-Credentials', 'true');
    newRes.headers.set('Access-Control-Allow-Headers', '*');
    return newRes;
  },
};
