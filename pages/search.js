import React from "react";
import Head from "next/head";
import Movie from "../Components/Movie";
const Search = ({ data }) => {
  return (
    <>
      <Head>
        <title>Search Page</title>
      </Head>
      <Movie data={data} />
    </>
  );
};

export default Search;
export const getServerSideProps = async (context) => {
  const term = context.query.term;
  const apikey = process.env.MOVIES_API_KEY;
  const apiurl = "https://api.themoviedb.org/3/";
  const page = context.query.page || "1";
  const data = await fetch(
    `${apiurl}search/movie?api_key=${apikey}&language=en-US&query=${term}&page=${page}`
  );
  const result = await data.json();
  return {
    props: {
      data: result.results,
    },
  };
};
