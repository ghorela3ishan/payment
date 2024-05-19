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
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
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
