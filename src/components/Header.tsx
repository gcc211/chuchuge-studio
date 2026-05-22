import { useState } from "react";
import { NavLink } from "react-router-dom";
import { siteConfig } from "../content/site";

const navItems = [
  { label: "首页", path: "/" },
  { label: "关于", path: "/about" },
  { label: "个人简历", path: "/resume" },
  { label: "项目", path: "/projects" },
  { label: "照片墙", path: "/gallery" },
  { label: "博客", path: "/blog" },
  { label: "联系", path: "/contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <NavLink className="brand" to="/" aria-label="返回首页" onClick={closeMenu}>
          <span className="brand-mark">G</span>
          <span>{siteConfig.studio}</span>
        </NavLink>

        <nav className="nav desktop-nav" aria-label="主导航">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          className={`menu-toggle ${isMenuOpen ? "is-open" : ""}`}
          type="button"
          aria-label={isMenuOpen ? "关闭导航菜单" : "打开导航菜单"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>


      <button
        className={`mobile-nav-mask ${isMenuOpen ? "is-open" : ""}`}
        type="button"
        aria-label="关闭导航菜单"
        onClick={closeMenu} 
       />
      <div className={`mobile-nav-panel ${isMenuOpen ? "is-open" : ""}`}>
        <nav className="mobile-nav" aria-label="移动端导航">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}