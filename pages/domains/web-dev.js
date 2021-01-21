import Head from "next/head";
import Layout from "../../components/Layout";
import Hero from "../../components/domains/Hero";
import Main from "../../components/domains/Main";
import * as domains from "../../assets/data/Domains.json";

export default function WebDev() {
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
          domain={domains[0].domain}
          image={domains[0].image}
        />
        <Main
          vision={domains[0].vision}
          mission={domains[0].mission}
          events={domains[0].events}
          projects={domains[0].projects}
          members={domains[0].members}
        />
      </main>
    </Layout>
  );
}
