import MainPage from "../components/MainPage";
import fetch from "isomorphic-unfetch";
import Link from "next/link";

const Index = props => (
  <div>
    <MainPage robots={props.robots} />
    <style jsx global>{`
      body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        background: linear-gradient(
          to left,
          rgb(150, 51, 214),
          rgb(79, 147, 247)
        );
      }
    `}</style>
  </div>
);

Index.getInitialProps = async function() {
  const req = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await req.json();
  return {
    robots: data
  };
};

export default Index;
