import Link from "next/link";

const Card = ({ name, email, id }) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5">
      <Link prefetch href={`/robots?id=${id}`} as={`/robots/${id}`}>
        <a className="no-underline">
          <img src={`https://robohash.org/${id}?size=200x200`} alt="robots" />
          <div>
            <h2>{name}</h2>
            <p>{email}</p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Card;
