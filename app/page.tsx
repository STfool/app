import Image from "next/image";

export default function Home() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a href="#about">关于我</a>
            </li>
            <li>
              <a href="#projects">项目</a>
            </li>
            <li>
              <a href="#contact">联系我</a>
            </li>
          </ul>
        </nav>
      </header>
      <section id="hero">
        <h1>你好，我是Alex</h1>
        <p>欢迎来到我的个人网站！</p>
      </section>
      <section id="about">
        <h2>关于我</h2>
        <p>我是一名前端开发工程师，擅长HTML, CSS和JavaScript。</p>
      </section>
      <section id="projects">
        <h2>项目</h2>
        <ul>
          <li>项目1：个人博客</li>
          <li>项目2：在线商店</li>
          <li>项目3：任务管理应用</li>
        </ul>
      </section>
      <section id="contact">
        <h2>联系我</h2>
        <p>邮箱：zhangsan@example.com</p>
      </section>
      <footer>
        <p>&copy; 2024 Alex. 保留所有权利。</p>
      </footer>
    </>
  );
}
