import Image from "next/image";
import React from "react";
import style from "../styles/movie.module.css";
import { useRouter } from "next/router";
import PaginationBtn from "./PaginationBtn";
function Movie({ data }) {
  const router = useRouter();
  const baseimgurl = "https://image.tmdb.org/t/p/w1280";
  return (
    <>
      <main className={style.main}>
        {data.map((movie) => {
          return (
            <div className={style.movie_box} key={movie.id}>
              <Image
                src={
                  baseimgurl +
                  (movie.poster_path
                    ? movie.poster_path
                    : "/d5NXSklXo0qyIYkgV94XAgMIckC.jpg")
                }
                alt={movie.title}
                width={500}
                height={550}
                priority
              />
              <div className={style.name_box}>
                <p className={style.movie_name}>{movie.title}</p>
                <h5 className={style.rating}>{movie.vote_average}</h5>
                <div className={style.overview}>
                  <p>Release Data : {movie.release_date}</p>
                  <h2>Overview</h2>
                  <p>{movie.overview}</p>
                  <button
                    onClick={() => router.push(`/similarMovies?id=${movie.id}`)}
                    className={style.similarmovies}
                    type="button"
                  >
                    Similar Movies
                  </button>
                  <button
                    onClick={() => router.push(`/trailer?id=${movie.id}`)}
                    className={style.similarmovies}
                    type="button"
                  >
                    Watch Trailer
                  </button>
                  <button
                    onClick={() => router.push(`/videos?id=${movie.id}`)}
                    className={style.similarmovies}
                    type="button"
                  >
                    Watch Videos
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </main>
      <PaginationBtn />
    </>
  );
}

export default Movie;
