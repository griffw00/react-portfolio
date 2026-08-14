import React from "react";
import { FiGithub, FiLinkedin, FiFileText } from "react-icons/fi";

const links = [
  {
    href: "https://github.com/griffw00",
    label: "GitHub",
    icon: FiGithub,
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/griff-wong",
    label: "LinkedIn",
    icon: FiLinkedin,
    external: true,
  },
  {
    href: "/resume.pdf",
    label: "Resume",
    icon: FiFileText,
    external: true,
  },
];

const SocialLinks = ({ className = "" }) => {
  return (
    <div className={`social-links ${className}`.trim()}>
      {links.map(({ href, label, icon: Icon, external }) => (
        <a
          key={label}
          href={href}
          className="social-link"
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          <Icon aria-hidden="true" />
          <span>{label}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
