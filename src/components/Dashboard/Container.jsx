import { lazy, Suspense } from "react";

const Channel = lazy(() => import("./Channel"));
const Medium = lazy(() => import("./Medium"));
const List = lazy(() => import("./List"));
const ListMedium = lazy(() => import("./ListMedium"));
const Loading = lazy(() => import("../Loader"));

const Container = () => {
  return (
    <>
      <section className="h-screen grid grid-cols-[60px_170px_215px_1fr] overflow-hidden">
        <Suspense fallback={<Loading />}>
          <Channel />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Medium />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <List />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <ListMedium />
        </Suspense>
      </section>
    </>
  );
};

export default Container;
