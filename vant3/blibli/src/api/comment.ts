import request from "@/utils/request";
//评论
export const getCommentList = () => {
  return request({
    url: "/commentsList",
    // params: config,
  });
};
