import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import style from "../styles/paginationBtn.module.css";
import { useRouter } from "next/router";
const PaginationBtn = () => {
  const router = useRouter();
  let page = Number(router.query.page) || 1;
  const genre = router.query.genre;
  const term = router.query.term;
  const id = router.query.id;
  return (
    <div className={style.container}>
      <div>
        {router.pathname == "/" && (
          <>
            {page > 1 && (
              <Link href={`/?genre=${genre}&page=${page - 1}`}>
                <a>
                  <FaChevronLeft />
                  Previous
                </a>
              </Link>
            )}
            <Link href={`/?genre=${genre}&page=${page + 1}`}>
              <a>
                Next
                <FaChevronRight />
              </a>
            </Link>
          </>
        )}
        {router.pathname == "/search" && (
          <>
            {page > 1 && (
              <Link href={`/search?term=${term}&page=${page - 1}`}>
                <a>
                  <FaChevronLeft />
                  Previous
                </a>
              </Link>
            )}
            <Link href={`/search?term=${term}&page=${page + 1}`}>
              <a>
                Next
                <FaChevronRight />
              </a>
            </Link>
          </>
        )}
        {router.pathname == "/similarMovies" && (
          <>
            {page > 1 && (
              <Link href={`/similarMovies?id=${id}&page=${page - 1}`}>
                <a>
                  <FaChevronLeft />
                  Previous
                </a>
              </Link>
            )}
            <Link href={`/similarMovies?id=${id}&page=${page + 1}`}>
              <a>
                Next
                <FaChevronRight />
              </a>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default PaginationBtn;
