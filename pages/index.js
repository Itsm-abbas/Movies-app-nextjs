import Head from "next/head";
import Movie from "../Components/Movie";
import requests from "../utils/requests";
const Home = ({ data }) => {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <link rel="shortcut icon" href="/logo.jpg" />
      </Head>
      <Movie data={data} />
    </>
  );
};
export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const page = context.query.page || "1";
  const data = await fetch(
    `${requests[genre]?.url || requests.fetchUpcoming.url}&page=${page}`
  );
  const result = await data.json();
  return {
    props: {
      data: result.results,
    },
  };
}
export default Home;
