import { useState } from "react";
import hands from "../assets/hand.svg";
import brands from "../assets/home/brandss.png";
import laptop from "../assets/home/ways.png";
import laptops from "../assets/home/Laptop.png";
import laptopEmp from "../assets/home/Laptop_Empower.png";

import { data, allow, review, whoIsItFor } from "../constants";
import { Link } from "react-router-dom";

function Homepage() {
  const [active, setActive] = useState(null); // Use 'null' to represent no active element

  const handleElementClick = (elementName) => {
    setActive(elementName === active ? null : elementName);
  };

  const isElementActive = (elementName) => elementName === active;
  return (
    <section className="bg-homeBack">
      <main className="pt-12 ">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row">
            <img src={hands} width={40} height={40} className="mr-4" />
            <h1 className="text-4xl font-semibold ">
              Hello, what are we creating today?
            </h1>
          </div>
          <p className="text-xl font-[500] my-8">
            Get started by selecting the idea type from the options below
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="relative">
            <input
              type="text"
              name="q"
              className="w-[30rem] border h-12 shadow p-4 rounded-full text-sm"
              placeholder="Search content types like Facebook Ads, Blog ideas, SEO..."
            />
            <svg
              className="text-gray-400 h-5 w-5 absolute top-3.5 right-3 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              style={{ background: "new 0 0 56.966 56.966;" }}
              xmlSpace="preserve"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"></path>
            </svg>
          </div>
        </div>
      </main>

      <main className="py-12 mx-20">
        <div className="flex items-center justify-center ">
          {[
            "All",
            "Social Media",
            "CopyRight",
            "SEO",
            "E-Commerce",
            "Others",
          ].map((elementName) => (
            <span
              key={elementName}
              className={`border py-2 px-4 rounded-lg hover:bg-zinc-900 hover:text-white ${
                isElementActive(elementName)
                  ? "bg-zinc-900 text-white"
                  : "bg-white tet-black"
              }`}
              onClick={() => handleElementClick(elementName)}
            >
              {elementName}
            </span>
          ))}
        </div>

        <div className="pt-12 grid grid-cols-3 gap-4 ">
          <div className="flex gap-4 bg-white p-2 border ">
            <img src={hands} width={40} height={40} />
            <div className="flex flex-col">
              <h1>ꜱʟɪᴅᴇꜱʜᴀʀᴇ</h1>
              <p>Create the best slideshows possible, from branding to SEO.</p>
            </div>
          </div>
        </div>
      </main>

      <main className="bg-white">
        <div className="flex flex-row gap-4">
          <div>
            <h4 className="">
              <b>We help brands and startups grow organically</b>
            </h4>
            <p className="">
              To stand out on social, you need the right strategies and tools.
              With STRATEGY TOOL, you’ve got everything you need to build your
              following and grow your brand across all digital channels. We have
              the perfect Growth Hacks for your business which you can implement
              on your OWN
            </p>
            <button
              className=""
              // onClick={submitHandler}
            >
              <b>Book a Call</b>
            </button>
            <button
              className=""
              // onClick={submitHandler1}
            >
              <b>Click</b>
            </button>
          </div>
          <div>
            <img src={brands} />
          </div>
        </div>
      </main>

      <main>
        <div className="flex flex-row gap-4">
          <div>
            <img src={laptop} />
          </div>
          <div>
            <h4 className="">
              The Simplest Way to Market your Business on your OWN
            </h4>

            <button
              className=""
              // onClick={submitHandler}
            >
              <b>Try Strategy Tool Today</b>
            </button>
          </div>
        </div>
      </main>

      <main className="bg-white">
        <div>
          <h3 className="">
            Strategy Tool is the First and Only tool that allows everyone and
            anyone to apply
            <br /> the social media techniques in their day to day business.
          </h3>
          <h1 className="">
            <b>
              Professional, Proven and Applied Techniques for you to implement
              directly..
            </b>
          </h1>
        </div>
        <div className="grid grid-cols-3">
          {allow.map((item) => (
            <div className="" key={item.id}>
              <p className="">
                <img src={item.image} className=""></img>
                <br />
                {item.data}
              </p>
            </div>
          ))}
        </div>
      </main>

      <main>
        <div className="flex flex-row gap-4">
          <div>
            <h2 className=" ">
              Learn what works <br />
              (and what doesn’t)
            </h2>
            <p className=" ">
              It’s your business and you cannot afford to experiment with its
              growth. With Strategy Tool, learn all the tricks and trade on how
              to achieve success in the Digital and Social World.
              <ul className="">
                <li className="">
                  Growth Hacks for all Social Media Platforms
                </li>
                <li className="">Proven and Successful Strategies</li>
                <li className="">Performance Tracking</li>
              </ul>
            </p>
            <button
              className=""
              // onClick={submitHandler}
            >
              <b>Try Strategy Tool Today</b>
            </button>
          </div>
          <div>
            <img className="" src={laptops} />
          </div>
        </div>
      </main>

      <main className="bg-white">
        <div className="flex flex-row gap-4">
          <div>
            <img src={laptopEmp} />
          </div>
          <div>
            <h3 className="">
              Empower Your Team to Suggest and Test the Ideas
            </h3>
            <p className="">
              With Strategy Tool, you can centralize idea suggestions, allowing
              any team member to suggest out-of-the-box ideas that can be
              refined with data, compared against your knowledge base, and
              prioritized according to your own criteria and current goals.
            </p>
            <button
              className=""
              // onClick={submitHandler}
            >
              Contact us
            </button>
          </div>
        </div>
      </main>

      <main className="bg-white">
        <h2 className="">With Strategy Tool you will get</h2>
        <div className="grid grid-cols-3 gap-4">
          {data.map((item) => (
            <div key={item.id}>
              <img src={item.image} />
              <h3 className="">{item.title}</h3>
            </div>
          ))}
        </div>
      </main>

      <main>
        <h3>In Our Customer`s own Words...</h3>
        <div className="flex flex-row gap-4">
          {review.map((item) => (
            <div key={item.id}>
              <p style={{ textAlign: "center" }}>
                {item.title}
                <br />
                <b>{item.data}</b>
              </p>
            </div>
          ))}
        </div>
      </main>

      <main className="bg-white text-center">
        <h3 className="">Who&apos;s it for?</h3>
        <p className="">
          Growth Software has a suite of solutions for teams in different
          verticals who have the goal of growing the businesses: SaaS, mobile
          apps, digital media, financial services, e-commerces, logistics,
          e-learning, consumer goods, industry, and more!
        </p>

        <div className="grid grid-cols-3 gap-4">
          {whoIsItFor.map((item) => (
            <div key={item.id} className="">
              <h6 className="text-2xl font-semibold">{item.title}</h6>
              <p className="">{item.data}</p>
            </div>
          ))}
        </div>
      </main>

      <footer>
        <div className="footer-copyright text-center py-3">
          <p className="footer">
            {" "}
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="#">
              {" "}
              All Rights Reserved. Design & Developed by DIY Strategies
            </a>
          </p>
          <Link to="/Privacypolicy">Privacy Policy</Link>
          <Link to="/Termscondition">Terms & Condition</Link>
        </div>
      </footer>
    </section>
  );
}

export default Homepage;
