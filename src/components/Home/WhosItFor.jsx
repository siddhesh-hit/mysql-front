import { whoIsItFor } from "../../constants";

const WhosItFor = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto">
        <main className="texthgh">
          <h3 className="whosits">Who&apos;s it for?</h3>
          <p className="asss">
            Growth Software has a suite of solutions for teams in different
            verticals who have the goal of growing the businesses: SaaS, mobile
            apps, digital media, financial services, e-commerces, logistics,
            e-learning, consumer goods, industry, and more!
          </p>

          <div className="grid grid-cols-3 gap-4">
            {whoIsItFor.map((item, index) => (
              <div key={index} className="whosisfors">
                <h6 className="text-2xl font-semibold">{item.title}</h6>
                <p className="">{item.data}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </section>
  );
};

export default WhosItFor;
