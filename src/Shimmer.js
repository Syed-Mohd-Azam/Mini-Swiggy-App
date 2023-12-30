import Card from "./Card";
// Shimmer Component created to show fake cards before loading to the main content so that it assumes that data is fetching and taking some time to load.
const Shimmer = () => {
  return (
    <>
      <main className="mb-8">
        <section className="flex gap-x-8 px-14 py-8 ">
          <section className="flex gap-x-3">
            <input
              className=" px-2  rounded-md"
              style={{ backgroundColor: "#f0f0f0" }}
            />
            <button
              className=" rounded-md w-20 h-11 py-2 px-2 "
              style={{ backgroundColor: "#f0f0f0" }}
            ></button>
          </section>
          <button
            className=" rounded-md p-2 w-44 h-11"
            style={{ backgroundColor: "#f0f0f0" }}
          ></button>
        </section>
        <section className="flex flex-wrap gap-y-12 gap-x-6 px-10 ">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </main>
    </>
  );
};
export default Shimmer;
