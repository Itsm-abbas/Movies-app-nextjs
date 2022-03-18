import Head from "next/head";
import React from "react";
import YouTube from "react-youtube";
const Trailer = ({ data }) => {
  return (
    <div>
      {data.map((item) => {
        return (
          <>
            <Head>
              <title>{data.original_title} videos</title>
            </Head>
            <p style={{ color: "white", marginBottom: "1rem" }}>{item.name}</p>
            <YouTube videoId={`${item?.key}`} id="videoplayer" />
          </>
        );
      })}
    </div>
  );
};

export default Trailer;
export const getServerSideProps = async (context) => {
  const id = context.query.id;
  const apikey = process.env.MOVIES_API_KEY;
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apikey}&language=en-US`
  );
  const result = await data.json();
  return {
    props: {
      data: result.results,
    },
  };
};
