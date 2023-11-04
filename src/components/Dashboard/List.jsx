import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { getApiById } from "../../hooks/apiFunction";
import { API } from "../../config";
import "./style.css";

const List = () => {
  const [lists, setLists] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get("medium");

  const fetchData = async () => {
    if (name === null) {
      setLists([]);
      return;
    } else {
      const res = await getApiById(API.localHost + "/list/listMedium", name);
      if (res.data !== undefined) {
        setLists(res.data.lists);
      } else {
        console.log(res.response.data);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [name]);

  const handleClick = (id) => {
    console.log("clicked", id);
    queryParams.set("list", id);
    navigate(`?${queryParams.toString()}`);
  };

  const handleBookmark = (id) => {
    const bookmark = localStorage.getItem("bookmark");
    if (bookmark === null) {
      localStorage.setItem("bookmark", id);
    } else {
      localStorage.setItem("bookmark", bookmark + "," + id);
    }
  };

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength - 3) + "...";
    } else {
      return text;
    }
  };

  return (
    <div className="overflow-y-scroll scrollbar-hide mt-4 flex flex-col gap-4 border-r-2 mr-3 pr-3.5">
      {lists.length > 0 ? (
        lists.map((list, index) => (
          <div
            key={index}
            className="flex flex-col p-2 border rounded-lg shadow-xl shadow-slate-100 cursor-pointer hover:bg-gray-100 pl-3"
            onClick={() => handleClick(list.id)}
          >
            <h2
              className="text-sm font-semibold pt-2"
              dangerouslySetInnerHTML={{ __html: list.list }}
            ></h2>
            <div
              className="text-xs list-none text-ellipsis ml-3 pt-3 text-slate-600"
              style={{ listStyleType: "none" }}
              dangerouslySetInnerHTML={{
                __html: truncateText(list.content1, 50),
              }}
            ></div>
            <div className="flex flex-row-reverse">
              <button
                onClick={() => handleBookmark(list.id)}
                className=" mt-3 py-1 px-3 bg-slate-300 rounded-lg  hover:bg-slate-500"
              >
                <i className="fa fa-floppy-o"></i>
              </button>
            </div>
          </div>
        ))
      ) : (
        <>Loading...</>
      )}
    </div>
  );
};

export default List;
