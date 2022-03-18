import React, { useState, useEffect } from "react";
import Head from "next/head";
import movieTrailer from "movie-trailer";
import Player from "react-player";
const Trailer = ({ data }) => {
  const [movieUrl, setMovieurl] = useState("");
  useEffect(() => {
    movieTrailer(`${data?.original_title || data?.title}`).then((response) => {
      setMovieurl(response);
    });
  }, []);
  return (
    <>
      <Head>
        <title>{data.original_title} trailer</title>
      </Head>
      <div style={{ textAlign: "center" }}>
        {movieUrl ? (
          <Player
            url={`${movieUrl}`}
            width="100%"
            height="30rem"
            controls="true"
          />
        ) : (
          <h2 style={{ color: "white" }}>"Sorry no trailer"</h2>
        )}
      </div>
    </>
  );
};

export default Trailer;
export const getServerSideProps = async (context) => {
  const movieId = context.query.id;
  const apikey = process.env.MOVIES_API_KEY;
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apikey}&language=en-US&page`
  );
  const result = await data.json();
  return {
    props: {
      data: result,
    },
  };
};
