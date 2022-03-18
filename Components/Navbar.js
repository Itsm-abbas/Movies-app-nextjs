import React, { useState, useRef } from "react";
import style from "../styles/navbar.module.css";
import { FaBars, FaSearch } from "react-icons/fa";
import requests from "../utils/requests";
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter();
  const search = useRef(null);
  const [toggle, settoggle] = useState(false);
  const formHandler = (e) => {
    e.preventDefault();
    const term = search.current.value;
    router.push(`/search?term=${term}`);
  };
  return (
    <div>
      <header className={style.header}>
        <img id={style.Mobilelogo} src={"/logo.svg"} alt="logo" />
        <button onClick={() => settoggle(!toggle)} className={style.bars}>
          <FaBars />
        </button>
        <div
          className={`${style.btns_container} ${
            toggle ? "navbar_show__9vXr6" : ""
          }`}
        >
          <img id={style.Desktoplogo} src={"/logo.svg"} alt="logo" />
          <div className={style.btns}>
            {Object.entries(requests).map(([key, { title, url }], index) => {
              return (
                <button
                  key={index}
                  onClick={() => {
                    settoggle(!toggle);
                    router.push(`/?genre=${key}`);
                  }}
                  className={style.btn}
                >
                  {title}
                </button>
              );
            })}
          </div>
          <form onSubmit={formHandler} style={{ position: "relative" }}>
            <input
              ref={search}
              type="text"
              name="search"
              id={style.search}
              placeholder="Search"
            />
            <button
              onClick={() => {
                settoggle(!toggle);
              }}
              type="submit"
              className={style.searchBtn}
            >
              <FaSearch />
            </button>
          </form>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
