import { review } from "../../constants";
const Review = () => {
  return (
    <section className="testimonailss">
      <div className="container mx-auto">
        <main>
          <h3>In Our Customer`s own Words...</h3>
          <div className="flex flex-row gap-4">
            {review.map((item, index) => (
              <div className="testim" key={index}>
                <p style={{ textAlign: "center" }}>
                  {item.title}
                  <br />
                  <b>{item.data}</b>
                </p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </section>
  );
};

export default Review;
