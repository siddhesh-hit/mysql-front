import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import Footer from "./Footer";
import "./styles.css";

const Container = () => {
  return (
    <section className="backgroundUrl relative flex flex-col min-h-screen overflow-hidden">
      <h2 className="text-2xl font-semibold text-center my-5">
        Get Started Now Pick a Plan
      </h2>
      <main className="mx-auto w-11/12 max-w-screen-lg ">
        <div className="grid grid-cols-2 bg-white">
          <LeftSide />
          <RightSide />
        </div>
      </main>

      <main className="grid grid-cols-3 mx-auto w-11/12 max-w-screen-lg mt-1">
        <Footer />
      </main>
    </section>
  );
};

export default Container;
