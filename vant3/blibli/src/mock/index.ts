import Mock from "mockjs";
import navList from "./data/navList";
import swiperList from "./data/swiperList";
import videosList from "./data/videosList";
import recommendList from "./data/recommendList";
import commentsList from "./data/commentsList";
import videoDetailList from "./data/videoDetailList";

// // mock的配置
// Mock.setup({
//   // 随机延时50-1000毫秒
//   timeout: '50-1000'
// })

// 轮播图
Mock.mock(/\/swiperList/, "get", () => {
  return {
    code: 0,
    result: swiperList,
  };
});

// 频道菜单
Mock.mock(/\/navList/, "get", () => {
  return {
    code: 0,
    result: navList,
  };
});

Mock.mock(/\/videosList/, "get", () => {
  return {
    code: 0,
    result: videosList,
  };
});
//返回要找的视频
Mock.mock(/\/videosList/, "post", (config) => {
  // console.log("查看要找的视频", config, config.body);
  // let data = JSON.parse(config.body);
  let video = videosList.filter((v) => v.id == config.body); //data.id);
  console.log(video, video[0]);
  return {
    code: 0,
    result: video[0],
  };
});
Mock.mock(/\/recommendList/, "get", () => {
  return {
    code: 0,
    result: recommendList,
  };
});
//返回要找的视频
Mock.mock(/\/recommendList/, "post", (config) => {
  // let data = JSON.parse(config.body);
  // let video = recommendList.filter((v) => v.id == data.id);
  let video = recommendList.filter((v) => v.id == config.body);

  return {
    code: 0,
    result: video[0],
  };
});
Mock.mock(/\/commentsList/, "get", () => {
  return {
    code: 0,
    result: {
      count: 454,
      items: commentsList,
    },
  };
});

interface IMockConfig {
  body: string | null;
  type: string;
  url: string;
}
Mock.mock(/\/videoDetail/, "get", ({ url }: IMockConfig) => {
  const querystr = url.split("?")[1];
  // const queryObj = new URLSearchParams(querystr)
  // const id = queryObj.get('id')
  // console.log(querystr,queryObj,id,'iiii')
  let id = querystr;
  console.log(querystr);
  return Mock.mock({
    code: 0,
    result: function () {
      return videoDetailList.find((item) => item.id === id);
    },
  });
});
