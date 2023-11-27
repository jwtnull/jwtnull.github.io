import { navbar } from "vuepress-theme-hope";
//导航
export default navbar([
  "/",
  "/demo/",
  {
    text: "Java",
    icon: "book",
    prefix: "/views/java/",
    children:[
      {
        text: "Java基础和面向对象",
        icon: "pen-to-square",
        prefix: "basic/",
        children: [
          { text: "Java基础语法", icon: "pen-to-square", link: "java-basic-basic" },
          { text: "Java面向对象", icon: "pen-to-square", link: "java-basic-oop" },
        ],
      },
      {
        text: "Jav进阶-集合框架",
        icon: "pen-to-square",
        prefix: "basic/",
        children: [
          { text: "Java基础语法", icon: "pen-to-square", link: "java-basic-basic" },
          { text: "Java面向对象", icon: "pen-to-square", link: "java-basic-oop" },
        ],
      },
      {
        text: "Jav进阶-并发框架",
        icon: "pen-to-square",
        prefix: "basic/",
        children: [
          { text: "Java基础语法", icon: "pen-to-square", link: "java-basic-basic" },
          { text: "Java面向对象", icon: "pen-to-square", link: "java-basic-oop" },
        ],
      },
      {
        text: "Jav进阶-IO框架",
        icon: "pen-to-square",
        prefix: "basic/",
        children: [
          { text: "Java基础语法", icon: "pen-to-square", link: "java-basic-basic" },
          { text: "Java面向对象", icon: "pen-to-square", link: "java-basic-oop" },
        ],
      },
      {
        text: "Jav进阶-JVM",
        icon: "pen-to-square",
        prefix: "basic/",
        children: [
          { text: "Java基础语法", icon: "pen-to-square", link: "java-basic-basic" },
          { text: "Java面向对象", icon: "pen-to-square", link: "java-basic-oop" },
        ],
      },
      {
        text: "Jav进阶-新版本特性",
        icon: "pen-to-square",
        prefix: "feature/",
        children: [
          { text: "Java 8 特性", icon: "pen-to-square", link: "feature-java8" }
        ],
      }
    ]
  },
  {
    text: "Spring",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
  {
    text: "数据库",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
  {
    text: "中间件",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
  {
    text: "ORM框架",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
  {
    text: "算法",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  }
]);
