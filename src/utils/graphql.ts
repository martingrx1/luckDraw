/**
 * @file graphql请求规范
 * @author linbingchen@baidu.com
 */

// TODO 对 [{}] 数组嵌套对象进行支持

const formattedGqlInputParams = (origin) => {
  let res = "";
  for (const key in origin) {
    if (Object.prototype.hasOwnProperty.call(origin, key)) {
      if (!Array.isArray(origin[key]) && typeof origin[key] === "object") {
        res += formattedGqlInputParams(origin[key]);
      } else {
        res += key + ":" + JSON.stringify(origin[key]) + ",";
      }
    }
  }

  return res.replace(/,$/, "");
};

export { formattedGqlInputParams };
