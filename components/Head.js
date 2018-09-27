import Head from "next/head";
import Header from "../components/Header";

export default props => (
  <div className="tc">
    <Head>
      <title>Robofriends</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Bungee+Shade"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"
      />
    </Head>
    <Header />
    {props.children}
  </div>
);
