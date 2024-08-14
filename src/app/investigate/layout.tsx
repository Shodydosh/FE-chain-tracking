import React from "react";
import Header from "@/components/core/Header";
import Footer from "@/components/core/Footer";
import Sidebar from "@/components/core/Sidebar";
import Breadcrumb from "@/components/core/CustomBreadcrumb";
import { Layout } from "antd";
const { Content } = Layout;

export default function layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h2>LAYOUT</h2>
      <Layout>
        <Sidebar />
        <Layout
          style={{
            padding: "0 24px 24px",
          }}
        >
          <Header />
          <Breadcrumb />
          {children}
          <Footer />
        </Layout>
      </Layout>
    </>
  );
}
