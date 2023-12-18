import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <main>
        <h1>Oops!! Something went wrong</h1>
        <h2>Error: {error.statusText}</h2>
      </main>
    </>
  );
};
export default Error;
