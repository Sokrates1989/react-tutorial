import React from "react";

function Footer() {

  const currentYear = new Date().getFullYear();
  const companyName = window._env_?.VITE_COMPANY_NAME ?? "Your Company";

  return (
    <footer>
      <p>Copyright © {currentYear} {companyName}. All rights reserved.</p>
  </footer>
  );
}

export default Footer;
