import Head from "next/head";
import "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>
          SPARKS Coding Club
        </title>
        <meta
          name="description"
          content="Official Website for SPARKS Coding Club"
        />
      </Head>

      <main>
        <h1 className="text-4xl">
          SPARKS Coding Club
        </h1>
      </main>
    </Layout>
  );
}
