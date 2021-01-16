import Head from "next/head";
import "../styles/Home.module.css";
import Layout from "../components/Layout";
import Hero from "../components/Hero";

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
        <Hero />
      </main>
    </Layout>
  );
}
