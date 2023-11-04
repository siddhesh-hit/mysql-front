import { Search, Laptop, Market, Review, WhosItFor } from "../components/Home";

function Homepage() {
  return (
    <section className="bg-homeBack">
      {/* Search */}
      <Search />

      {/* Market */}
      <Market />

      {/* Laptop */}
      <Laptop />

      {/* Review */}
      <Review />

      {/* WhosItFor */}
      <WhosItFor />
    </section>
  );
}

export default Homepage;
