import { useState, useEffect } from "react";

export default function Home() {
  const [theme, setTheme] = useState(undefined);

  const handleToggle = (e) => {
    setTheme(e.target.checked);
  }

  useEffect(() => {
    console.log('theme',theme);

    if(theme){

    }
    const colorMode = window.localStorage.getItem('theme');

    switch(colorMode){
      case 'light':
        window.localStorage.setItem('theme', 'dark')
      break;
      case 'dark':
        window.localStorage.setItem('theme', 'light')
      break;
      default:
        window.localStorage.setItem('theme', 'light')
    }
    console.log(colorMode);
    document.documentElement.removeAttribute("data-theme");
    document.documentElement.setAttribute("data-theme", colorMode);
  }, [theme]);

  return (
    <div className="container">
      <nav>
        <div className="title">スウィッチモード</div>
        <div>
          <form action="#">
            <label className="switch">
              <input type="checkbox" onChange={handleToggle} checked={theme}/>
              <span className="slider"></span>
            </label>
          </form>
        </div>
      </nav>
      <section>
        <div className="content">
          <h1>見出し１</h1>
          <h3>見出し3</h3>
          <p>スイッチモードポートフォリオについて、NextJsの技術を使いトグルスイッチでライト画面とダーク画面を切り替えるサイトを構築中</p>
          <button className="primary-btn">お問合せ</button>
        </div>
      </section>
    </div>
  );
}
