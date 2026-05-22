import { siteConfig } from "../content/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} {siteConfig.studio}. All rights reserved.</p>
        <p>Built with React, Vite and TypeScript.</p>
      </div>
    </footer>
  );
}