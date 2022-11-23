import request from "@/utils/request";
export const getVideoList = () => {
  return request({
    url: "/videosList",
    // params: config,
  });
};

export const getVideo = (id: string | number) => {
  console.log(id);
  return request({
    url: "/videosList",
    method: "post",
    data: id,
    // params: config,
  });
};
