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
    src: "/photos/照片/烤肉.jpg",
    alt: "校园照片",
    title: "校园日常",
    description: "好吃的烤肉，超推荐！",
  },
  {
    id: "miss-1",
    src: "/photos/照片/大姑.jpg",
    alt: "时光之门",
    title: "思念的人",
    description: "我想念的人",
  },
  {
    id: "life-1",
    src: "/photos/照片/圣诞.jpg",
    alt: "生活照片",
    title: "生活片段",
    description: "认真生活，慢慢成长",
  },
  {
    id: "life-2",
    src: "/photos/照片/生日1.jpg",
    alt: "生活照片",
    title: "生活片段",
    description: "和好朋友一起过生日，开心的时刻",
  },
  {
    id: "life-3",
    src: "/photos/照片/生日2.jpg",
    alt: "生活照片",
    title: "生活片段",
    description: "这个蛋糕是我最喜欢的口味，太好吃了",
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
    src: "/photos/照片/日出.jpg",
    alt: "城市照片",
    title: "南京",
    description: "在南京学习和成长",
  },
  {
    id: "moment-1",
    src: "/photos/照片/小鹿.jpg",
    alt: "日常瞬间",
    title: "日常瞬间",
    description: "和朋友一起去玩，看到可爱的小鹿，感觉很治愈",
  },
   {
    id: "moment-2",
    src: "/photos/照片/财神.jpg",
    alt: "日常瞬间",
    title: "日常瞬间",
    description: "遇见财神，当然要拍照啦！",
  },
   {
    id: "moment-3",
    src: "/photos/照片/财神2.jpg",
    alt: "日常瞬间",
    title: "日常瞬间",
    description: "很开心诶，和我最好的朋友和朋友的姐姐一起跨年，感觉很幸福！",
  },

];