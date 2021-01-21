import Head from "next/head";
import Layout from "../../components/Layout";
import Hero from "../../components/domains/Hero";
import Main from "../../components/domains/Main";
import * as domains from "../../assets/data/Domains.json";

export default function AIML() {
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
          domain={domains[2].domain}
          image={domains[2].image}
        />
        <Main
          technologies={
            domains[2].technologies
          }
          vision={domains[2].vision}
          mission={domains[2].mission}
          events={domains[2].events}
          projects={domains[2].projects}
          members={domains[2].members}
        />
      </main>
    </Layout>
  );
}
