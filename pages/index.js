import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "../components/HomePage/Hero";
import HomeDomains from "../components/HomePage/HomeDomains";
import MemberList from "../components/membersList/MemberList";
import * as membersData from "../assets/data/members.json";
import AboutUs from "../components/HomePage/AboutUs";

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
        <AboutUs />
        <HomeDomains />
        {/* <HomeEvents /> */}

        <div className="h1 mt-14 mb-10 flex justify-center text-5xl font-normal ">
          Members
        </div>
        <div className="pt-8 pb-16 px-6 md:px-60 md:py-16 -mt-10">
          <MemberList
            members={membersData}
          />
        </div>
      </main>
    </Layout>
  );
}
