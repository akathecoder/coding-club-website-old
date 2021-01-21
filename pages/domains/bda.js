import Head from "next/head";
import Layout from "../../components/Layout";
import Hero from "../../components/domains/Hero";
import Main from "../../components/domains/Main";
import * as domains from "../../assets/data/Domains.json";

export default function BDA() {
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
          domain={domains[3].domain}
          image={domains[3].image}
        />
        <Main
          technologies={
            domains[3].technologies
          }
          vision={domains[3].vision}
          mission={domains[3].mission}
          events={domains[3].events}
          projects={domains[3].projects}
          
          members={domains[3].members}
        />
      </main>
    </Layout>
  );
}
