import { useEffect, useState } from "react";
import hands from "../../assets/hand.svg";
import { jwtDecode } from "jwt-decode";

const Search = () => {
  const [search, setSearch] = useState("");
  const [active, setActive] = useState(null);
  const [name, setName] = useState("Hello");

  const [data, setData] = useState([
    {
      img: hands,
      title: "Slideshare",
      description: "Create the best slideshows possible, from branding to SEO.",
    },
    {
      img: hands,
      title: "Slideshare",
      description: "Create the best slideshows possible, from branding to SEO.",
    },
    {
      img: hands,
      title: "Slideshare",
      description: "Create the best slideshows possible, from branding to SEO.",
    },
    {
      img: hands,
      title: "Slideshare",
      description: "Create the best slideshows possible, from branding to SEO.",
    },
    {
      img: hands,
      title: "Slideshare",
      description: "Create the best slideshows possible, from branding to SEO.",
    },
    {
      img: hands,
      title: "Slideshare",
      description: "Create the best slideshows possible, from branding to SEO.",
    },
    {
      img: hands,
      title: "Slideshare",
      description: "Create the best slideshows possible, from branding to SEO.",
    },
    {
      img: hands,
      title: "Slideshare",
      description: "Create the best slideshows possible, from branding to SEO.",
    },
    {
      img: hands,
      title: "Slideshare",
      description: "Create the best slideshows possible, from branding to SEO.",
    },
    {
      img: hands,
      title: "Slideshare",
      description: "Create the best slideshows possible, from branding to SEO.",
    },
    {
      img: hands,
      title: "Slideshare",
      description: "Create the best slideshows possible, from branding to SEO.",
    },
    {
      img: hands,
      title: "Slideshare",
      description: "Create the best slideshows possible, from branding to SEO.",
    },
    {
      img: hands,
      title: "Slideshare",
      description: "Create the best slideshows possible, from branding to SEO.",
    },
    {
      img: hands,
      title: "Slideshare",
      description: "Create the best slideshows possible, from branding to SEO.",
    },
    {
      img: hands,
      title: "Slideshare",
      description: "Create the best slideshows possible, from branding to SEO.",
    },
    {
      img: hands,
      title: "Slideshare",
      description: "Create the best slideshows possible, from branding to SEO.",
    },
    {
      img: hands,
      title: "Slideshare",
      description: "Create the best slideshows possible, from branding to SEO.",
    },
    {
      img: hands,
      title: "Slideshare",
      description: "Create the best slideshows possible, from branding to SEO.",
    },
  ]);
  const [filteredData, setFilteredData] = useState([
    {
      img: hands,
      title: "Slideshare",
      description: "Create the best slideshows possible, from branding to SEO.",
    },
    {
      img: hands,
      title: "Slideshare",
      description: "Create the best slideshows possible, from branding to SEO.",
    },
    {
      img: hands,
      title: "Slideshare",
      description: "Create the best slideshows possible, from branding to SEO.",
    },
    {
      img: hands,
      title: "Slideshare",
      description: "Create the best slideshows possible, from branding to SEO.",
    },
    {
      img: hands,
      title: "Slideshare",
      description: "Create the best slideshows possible, from branding to SEO.",
    },
    {
      img: hands,
      title: "Slideshare",
      description: "Create the best slideshows possible, from branding to SEO.",
    },
    {
      img: hands,
      title: "Slideshare",
      description: "Create the best slideshows possible, from branding to SEO.",
    },
    {
      img: hands,
      title: "Slideshare",
      description: "Create the best slideshows possible, from branding to SEO.",
    },
    {
      img: hands,
      title: "Slideshare",
      description: "Create the best slideshows possible, from branding to SEO.",
    },
    {
      img: hands,
      title: "Slideshare",
      description: "Create the best slideshows possible, from branding to SEO.",
    },
    {
      img: hands,
      title: "Slideshare",
      description: "Create the best slideshows possible, from branding to SEO.",
    },
    {
      img: hands,
      title: "Slideshare",
      description: "Create the best slideshows possible, from branding to SEO.",
    },
    {
      img: hands,
      title: "Slideshare",
      description: "Create the best slideshows possible, from branding to SEO.",
    },
    {
      img: hands,
      title: "Slideshare",
      description: "Create the best slideshows possible, from branding to SEO.",
    },
    {
      img: hands,
      title: "Slideshare",
      description: "Create the best slideshows possible, from branding to SEO.",
    },
    {
      img: hands,
      title: "Slideshare",
      description: "Create the best slideshows possible, from branding to SEO.",
    },
    {
      img: hands,
      title: "Slideshare",
      description: "Create the best slideshows possible, from branding to SEO.",
    },
    {
      img: hands,
      title: "Slideshare",
      description: "Create the best slideshows possible, from branding to SEO.",
    },
  ]);

  const handleElementClick = (elementName) => {
    setActive(elementName === active ? null : elementName);
  };

  const isElementActive = (elementName) => elementName === active;

  const handleChange = (e) => {
    setSearch(e.target.value);
    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase())
        ? item
        : null
    );
    setFilteredData(filtered);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwtDecode(token);
      setName(user.name);
    }
  }, []);

  return (
    <>
      <main className="pt-12 ">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row">
            <img src={hands} width={40} height={40} className="mr-4" />
            <h1 className="text-4xl font-semibold ">
              {name}, what are we creating today?
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
              value={search}
              onChange={handleChange}
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
              style={{ background: "new 0 0 56.966 56.966" }}
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

        <div className="pt-12 grid grid-cols-3 gap-4 mx-40">
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 bg-white rounded-lg p-4 border hover:bg-slate-100"
              >
                <img src={item.img} width={40} height={40} />
                <div className="flex flex-col">
                  <h1 className="text-xl font-semibold">{item.title}</h1>
                  <p className="text-slate-500">{item.description}</p>
                </div>
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
      </main>
    </>
  );
};

export default Search;
