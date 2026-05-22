import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function Layout() {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

// 每个页面都有 Header 和 Footer
// 中间的 Outlet 会根据当前网址显示不同页面