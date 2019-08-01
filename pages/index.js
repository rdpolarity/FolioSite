import React from "react";
import Document, { Head, Main } from "next/document";
import Home from "./Home";
import "../styles/index.scss";

export default function Index() {
  return (
    <html>
      <body>
        <Home />
      </body>
    </html>
  );
}
