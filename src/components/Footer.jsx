import React from "react";
import SocialLinks from "./SocialLinks";
import "./styles/footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <p className="footer-copy">© 2026 Griff Wong</p>
      <SocialLinks />
    </footer>
  );
};

export default Footer;
