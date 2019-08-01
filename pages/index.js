import React from "react";
import Document, { Head, Main } from "next/document";
import Home from "../components/Home";
import Footer from "../components/Footer";
import "../styles/index.scss";

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
