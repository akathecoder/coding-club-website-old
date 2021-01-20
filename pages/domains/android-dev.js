import Head from "next/head";
import Layout from "../../components/Layout";
import Hero from "../../components/domains/Hero";
import Main from "../../components/domains/Main";
import * as domains from "../../assets/data/Domains.json";

export default function AndroidDev() {
  return (
    <Layout>
      <Head>
        <title>
          SPARKS Coding Club - Domains
        </title>
        <meta
          name="description"
          content="Official Website for SPARKS Coding Club"
        />
      </Head>

      <main className="bg-backgroundColor-main">
        <Hero
          domain={domains[1].domain}
          image={domains[1].image}
        />
        <Main
          technologies={
            domains[1].technologies
          }
          vision={domains[1].vision}
          mission={domains[1].mission}
          events={domains[1].events}
          projects={domains[1].projects}
        />
      </main>
    </Layout>
  );
}
