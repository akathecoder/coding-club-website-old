import Head from "next/head";
import "../styles/Home.module.css";
import Layout from "../components/Layout";
import Hero from "../components/HomePage/Hero";
import HomeDomains from "../components/HomePage/HomeDomains";
import HomeEvents from "../components/HomePage/HomeEvents";

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

      <main className="bg-backgroundColor-main">
        <Hero />
        <HomeDomains />
        <HomeEvents />
      </main>
    </Layout>
  );
}
