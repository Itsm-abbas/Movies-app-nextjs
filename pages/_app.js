import Navbar from "../Components/Navbar";
import "../styles/global.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <main className="main">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
