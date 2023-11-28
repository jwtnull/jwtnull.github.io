import { navbar } from "vuepress-theme-hope";
//导航
export default navbar([
  "/",
  {
    text: "Java",
    prefix: "/views/java/",
    children:[
      {
        text: "Java基础和面向对象",
        prefix: "basic/",
        children: [
          { text: "Java基础语法", icon: "", link: "java-basic-basic" },
          { text: "Java面向对象", icon: "", link: "java-basic-oop" },
        ],
      },
      {
        text: "Java进阶-集合框架",
        icon: "",
        prefix: "basic/",
        children: [
          { text: "Java基础语法", icon: "", link: "java-basic-basic" },
          { text: "Java面向对象", icon: "", link: "java-basic-oop" },
        ],
      },
      {
        text: "Jav进阶-并发框架",
        icon: "",
        prefix: "basic/",
        children: [
          { text: "Java基础语法", icon: "", link: "java-basic-basic" },
          { text: "Java面向对象", icon: "", link: "java-basic-oop" },
        ],
      },
      {
        text: "Jav进阶-IO框架",
        icon: "",
        prefix: "basic/",
        children: [
          { text: "Java基础语法", icon: "", link: "java-basic-basic" },
          { text: "Java面向对象", icon: "", link: "java-basic-oop" },
        ],
      },
      {
        text: "Jav进阶-JVM",
        icon: "",
        prefix: "basic/",
        children: [
          { text: "Java基础语法", icon: "", link: "java-basic-basic" },
          { text: "Java面向对象", icon: "", link: "java-basic-oop" },
        ],
      },
      {
        text: "Jav进阶-新版本特性",
        icon: "",
        prefix: "feature/",
        children: [
          { text: "Java 8 特性", icon: "", link: "feature-java8" }
        ],
      }
    ]
  },
  {
    text: "Spring",
    prefix: "/views/spring/",
    children:[
      {
      text: "Spring Framework(v5)",
      children: [
        { text: "Spring控制反转(IOC)", icon: "", link: "spring-ioc" },
        { text: "Spring面向切面(AOP)", icon: "", link: "spring-ioc" },
      ]
    },
    {
      text: "SpringBoot(v2.7)",
     prefix: "boot/",
      children: [
        { text: "SpringBoot", icon: "", link: "springboot" },
      ]
    }
    ]
  },
  {
    text: "数据库",
    children:[],
  },
  {
    text: "中间件",
    children:[],
  },
  {
    text: "ORM框架",
    children:[],
  },
  {
    text: "算法",
    children:[],
  }
]);
