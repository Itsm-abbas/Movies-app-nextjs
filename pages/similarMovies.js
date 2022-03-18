import Head from "next/head";
import React from "react";
import Movie from "../Components/Movie";
const SimilarMovies = ({ data }) => {
  console.log(data);
  return (
    <>
      <Head>
        <title>Similar Movies</title>
      </Head>
      <Movie data={data} />
    </>
  );
};

export default SimilarMovies;
export const getServerSideProps = async (context) => {
  const movieId = context.query.id;
  const apikey = process.env.MOVIES_API_KEY;
  const page = context.query.page || "1";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${apikey}&language=en-US&page=${page}`
  );
  const result = await data.json();
  return {
    props: {
      data: result.results,
    },
  };
};
