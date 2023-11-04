import laptops from "../../assets/home/Laptop.png";
import laptopEmp from "../../assets/home/Laptop_Empower.png";

import { data, allow } from "../../constants";
const Laptop = () => {
  return (
    <>
      <section className="bg-white">
        <main className="container mx-auto">
          <div>
            <h3 className="etxt">
              Strategy Tool is the First and Only tool that allows everyone and
              anyone to apply
              <br /> the social media techniques in their day to day business.
            </h3>
            <h1 className="etxt1">
              <b>
                Professional, Proven and Applied Techniques for you to implement
                directly..
              </b>
            </h1>
          </div>
          <div className="grid grid-cols-3 jbjhj">
            {allow.map((item, index) => (
              <div className="borderss" key={index}>
                <p className="">
                  <img src={item.image} className=""></img>
                  {item.data}
                </p>
              </div>
            ))}
          </div>
        </main>
      </section>

      <section className="bg-white1">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div>
              <h2 className="learns">
                Learn what works <br />
                (and what doesn’t)
              </h2>
              <p className="businesss">
                It’s your business and you cannot afford to experiment with its
                growth. With Strategy Tool, learn all the tricks and trade on
                how to achieve success in the Digital and Social World.
              </p>
              <ul className="growthhacks">
                <li className="">
                  Growth Hacks for all Social Media Platforms
                </li>
                <li className="">Proven and Successful Strategies</li>
                <li className="">Performance Tracking</li>
              </ul>
            </div>
            <div className="...">
              {" "}
              {/* This represents the left side */}
              <img className="lapp" src={laptops} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="...">
              {" "}
              {/* This represents the left side */}
              <img className="abcaaq" src={laptopEmp} />
            </div>
            <div>
              <h3 className="empower">
                Empower Your Team to Suggest and Test the Ideas
              </h3>
              <p className="starte">
                With Strategy Tool, you can centralize idea suggestions,
                allowing any team member to suggest out-of-the-box ideas that
                can be refined with data, compared against your knowledge base,
                and prioritized according to your own criteria and current
                goals.
              </p>
              <button
                className="contt"
                // onClick={submitHandler}
              >
                Contact us
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container mx-auto">
          <main className="youwillget1">
            <h2 className="">With Strategy Tool you will get</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3">
              {data.map((item, index) => (
                <div key={index}>
                  <img src={item.image} />
                  <h3 className="">{item.title}</h3>
                </div>
              ))}
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default Laptop;
