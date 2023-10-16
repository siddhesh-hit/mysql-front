// import Navbar from "./Navbar";
import Channel from "./Channel";
import Medium from "./Medium";
import List from "./List";
import ListMedium from "./ListMedium";

const Container = () => {
  return (
    <>
      {/* <Navbar /> */}
      <section className="h-screen grid grid-cols-[60px_170px_215px_1fr] overflow-hidden">
        <Channel />
        <Medium />
        <List />
        <ListMedium />
      </section>
    </>
  );
};

export default Container;
