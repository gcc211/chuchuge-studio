export type Photo = {
  id: string;
  src: string;
  alt: string;
  title: string;
  description?: string;
};

export const photos: Photo[] = [
  {
    id: "campus-1",
    src: "/photos/campus-1.jpg",
    alt: "校园照片",
    title: "校园日常",
    description: "学习与生活的记录",
  },
  {
    id: "study-1",
    src: "/photos/study-1.jpg",
    alt: "学习记录",
    title: "学习记录",
    description: "保持输入，也保持输出",
  },
  {
    id: "life-1",
    src: "/photos/life-1.jpg",
    alt: "生活照片",
    title: "生活片段",
    description: "认真生活，慢慢成长",
  },
  {
    id: "project-1",
    src: "/photos/project-1.jpg",
    alt: "项目记录",
    title: "项目实践",
    description: "把想法做成可以运行的作品",
  },
  {
    id: "city-1",
    src: "/photos/city-1.jpg",
    alt: "城市照片",
    title: "南京",
    description: "在南京学习和成长",
  },
  {
    id: "moment-1",
    src: "/photos/moment-1.jpg",
    alt: "日常瞬间",
    title: "日常瞬间",
    description: "一些值得记住的小片段",
  },
];