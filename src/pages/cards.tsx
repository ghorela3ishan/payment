import Head from "next/head";
import SideBar from "@/components/SideBar";
import InfoPanel from "@/components/InfoPanel";
import styled from "styled-components";

const Main = styled.div`
  display: grid;
  grid-template-columns: 340px 1fr;
  column-gap: 90px;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Aspire payments</title>
        <meta
          name="description"
          content="Trusted way of banking for 3,000+ SMEs and startups in Singapore"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <SideBar />
        <InfoPanel />
      </Main>
    </>
  );
}
