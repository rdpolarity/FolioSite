import React from "react";
import Document, { Head, Main } from "next/document";
import Home from "./Home";
import "../styles/index.scss";
import Footer from "./components/Footer";

export default function Index() {
  return (
    <html>
      <body>
        <Home />
        <Footer />
      </body>
    </html>
  );
}
