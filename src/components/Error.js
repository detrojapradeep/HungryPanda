import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Something went wrong brathar!</h1>
      <h2>
        Error {err.status} : {err.statusText}
      </h2>
    </div>
  );
};

export default Error;
