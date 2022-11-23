import request from "@/utils/request"; //封装的axios
//视频种类导航栏
export const getNavList = () => {
  return request({
    url: "/navList",
    // params: config,
  });
};
