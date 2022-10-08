import style from "./style.module.css";

const BaseLayout = ({ children }) => {
  return (
    <div className={style.base_layout}>
      <header className={style.header}>
        <h1 className={style.title}>MARVEL</h1>
      </header>
      <main className={style.content}>{children}</main>
      <footer className={style.footer}>
        <a
          className="link"
          target="_blank"
          href="http://marvel.com"
          rel="noreferrer"
        >
          Data provided by Marvel. © 2022 MARVEL
        </a>
      </footer>
    </div>
  );
};

export default BaseLayout;
