import Head from "next/head";
import "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          SPARKS Coding Club
        </title>
        <meta
          name="description"
          content="Official Website for SPARKS Coding Club"
        />
      </Head>
      <Navbar />
      <main>
        <h1 className="text-4xl">
          SPARKS Coding Club
        </h1>
      </main>
      <Footer />
    </>
  );
}
