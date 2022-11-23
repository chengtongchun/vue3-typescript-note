//视频列表接口
export interface IVideoItem {
  id: string | number;
  imgSrc: string; //封面图
  videoSrc: string; //视频
  desc: string; //视频标题
  author: string; //作者名
  authorIconSrc: string; //作者头像
  playCount: string; //播放数
  likeCount: string; //点赞数
  favCount: string; //收藏数
  commentCount: string; //评论数
  date: string; //发布时间
}
//轮播图
export interface ISwiper {
  imgSrc: string;
  link: string;
}
//视频选项栏
export interface INvaItem {
  id: string;
  text: string;
}
//评论
export interface IComment {
  id: string;
  date: string;
  content: string;
  avatar: string;
  username: string;
}
