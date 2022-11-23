import request from "@/utils/request";
export const getRecommendList = () => {
  return request({
    url: "/recommendList",
    // params: config,
  });
};

export const getRecommend = (id: string | number) => {
  return request({
    url: "/recommendList",
    method: "post",
    data: id,
    // params: id,
  });
};
