import Head from "next/head";
import "../styles/Home.module.css";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import HomeDomains from "../components/HomeDomains";
import HomeDomain from "../components/HomeDomain";
import HomeEvents from "../components/HomeEvents";

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
