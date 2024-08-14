import React from "react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import Header from "../components/Header";
import DocumentationSection from "../components/DocumentationSection";

export default function DocumentationPage() {
  useDocumentTitle("| Documentation");
  return (
    <>
      <Header />
      <div className="wrapper" style={{ position: "initial" }}>
        <main className="documentation__main">
          <DocumentationSection />
        </main>
      </div>
    </>
  );
}
