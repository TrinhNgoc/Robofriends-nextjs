import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Head from "../components/Head";

const Robots = props => (
  <Head>
    <div className="mw9 center ph3-ns">
      <div className="cf ph2-ns">
        <div className="fl w-100 w-50-ns pa2">
          <div className="bg-light-green br3 pa3 ma2 ">
            <img
              alt="robots"
              src={`https://robohash.org/${props.data.id}?size=200x200`}
            />
          </div>
        </div>
        <div className="fl w-100 w-50-ns pa2">
          <div className="bg-white br3 pa3 ma2 ">
            <h2>{props.data.name}</h2>
            <p>{props.data.email}</p>
            <p>Company: {props.data.company.name}</p>
            <p>"{props.data.company.bs}"</p>
            <Link prefetch href="/">
              <button className="br2 pa2 w-40 bg-washed-green dim bt b--black-10 ">
                Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>

    <style jsx global>{`
      body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        background: linear-gradient(
          to left,
          rgba(7, 27, 82, 1) 0%,
          rgba(0, 128, 128, 1) 100%
        ); /* w3c */
      }
    `}</style>
  </Head>
);

Robots.getInitialProps = async function({ query }) {
  const req = await fetch(
    `https://jsonplaceholder.typicode.com/users/${query.id}`
  );
  const data = await req.json();
  return { data };
};

export default Robots;
