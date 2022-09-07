import config from "@/config/index";

const __fetch = (url: string, options: any) => {
  const params = { ...options };

  if (!params.method) {
    params.method = "get";
  }

  if (params.headers) {
    let contentTypeFlag = true;
    const keyList = Object.keys(params.headers);
    // 如果有 headers，则循环它，看content-type有没有，没有就加上默认的
    for (let i = 0; i < keyList.length; i++) {
      const key = keyList[i];
      if (key.toLowerCase() === "content-type") {
        contentTypeFlag = false;
        break;
      }
      if (i + 1 === keyList.length && contentTypeFlag) {
        params.headers["Content-Type"] = "application/json";
      }
    }
  } else {
    params.headers = { "Content-Type": "application/json" };
  }

  let __url = config.API_URL + url;

  if (params.params) {
    let query = "";
    Object.entries(params.params).forEach((item, index) => {
      const [key, value] = item;
      if (index === 0) {
        query += `${key}=${value}`;
      } else {
        query += `&${key}=${value}`;
      }
    });
    __url += "?" + query;
  }

  fetch(__url, {
    method: params.method,
    body: JSON.stringify(params.body)
  }).then(body => {
    if (params.headers["Content-Type"] === "application/json") {
      try {
        return body.json();
      } catch(err) {
        throw new TypeError("JSON解析异常");
      }
    }

    return body.json();
  }, (err) => {
    console.log(err);
    return err;
  });
};

/**
 * 设置超时时间
*/
const _fetch = (url: string, options: any, timeout?: number) => {
  return new Promise((resolve, reject) => {
    // 超时中断
    const abort = new AbortController();
    setTimeout(() => {
      abort.abort();
      // eslint-disable-next-line
      reject({
        code: 500,
        message: "timeout"
      });
    }, timeout || 30000);

    resolve(__fetch(url, { ...options, signal: abort.signal }));
  });
};

export default async (url: string, options?: any, timeout?: number) => {
  return _fetch(url, options || {}, timeout);
};