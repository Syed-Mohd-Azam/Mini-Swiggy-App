import { useRouteError } from "react-router-dom";
const Error = () => {
  // useRouteError() is a hook provided by React Router to display the error with message of the reason. It is used to cover the error Boundary.
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
