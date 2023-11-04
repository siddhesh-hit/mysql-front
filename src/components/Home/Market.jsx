import brands from "../../assets/home/brandss.png";
import laptop from "../../assets/home/ways.png";

const Market = () => {
  return (
    <>
      <section className="bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="...">
              {" "}
              {/* This represents the left side */}
              <h4 className="texthelp">
                <b>We help brands and startups grow organically</b>
              </h4>
              <p className="home_para">
                To stand out on social, you need the right strategies and tools.
                With STRATEGY TOOL, you’ve got everything you need to build your
                following and grow your brand across all digital channels. We
                have the perfect Growth Hacks for your business which you can
                implement on your OWN
              </p>
              <button className="callbutt">
                <b>Book a Call</b>
              </button>
              <button className="clickbutt">
                <b>Click</b>
              </button>
            </div>
            <div className="...">
              {" "}
              {/* This represents the right side */}
              <div>
                <img className="brand" src={brands} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white1">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="...">
              {" "}
              {/* This represents the left side */}
              <img src={laptop} />
            </div>
            <div className="...">
              {" "}
              {/* This represents the right side */}
              <div>
                <h4 className="simplesee">
                  The Simplest Way to Market your Business on your OWN
                </h4>

                <button className="todayy">
                  <b>Try Strategy Tool Today</b>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Market;
