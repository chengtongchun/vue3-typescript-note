import request from "@/utils/request"; //封装的axios
//轮播图数据
export const getSwipeList = () => {
  return request({
    url: "/swiperList",
    // params: config,
  });
};
