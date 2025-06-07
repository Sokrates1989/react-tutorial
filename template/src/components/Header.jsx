import React from "react";

function Header(props) {
  const backendUrl = window._env_?.VITE_BACKEND_URL;

  return (
    <header>
      <h1>{props.title}</h1>
      <small style={{ fontSize: "0.8rem", color: "#666" }}>
        Backend: {backendUrl}
      </small>
  </header>
  );
}

export default Header;
