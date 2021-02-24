/**
 * @file 具体表单数据配置
 * @author linbingchen@baidu.com
 */

const collegelist = [
  {
    title: "数计",
    value: "computer",
  },
  {
    title: "机械",
    value: "machine",
  },
  {
    title: "经管",
    value: "manage",
  },
];

const majorlist = [
  {
    title: "计算机网络",
    value: "computer-network",
    attr: {
      fromCollege: ["computer"],
    },
  },
];

export { collegelist, majorlist };
