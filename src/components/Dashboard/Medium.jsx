import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { getApiById } from "../../hooks/apiFunction";
import { API } from "../../config";
import "./style.css";

const Medium = () => {
  const [mediums, setMediums] = useState([]);
  const [active, setActive] = useState(null);
  const [channel, setChannel] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get("channel");

  const fetchData = async () => {
    if (name === null) {
      setMediums([]);
      return;
    } else {
      const res = await getApiById(
        API.localHost + "/medium/mediaChannel",
        name
      );
      if (res.data !== undefined) {
        setMediums(res.data.media);
      } else {
        console.log(res.response.data);
      }
      const res1 = await getApiById(API.localHost + "/channel/channel", name);
      if (res1.data !== undefined) {
        setChannel(res1.data.channel);
      } else {
        console.log(res1.response.data);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [name]);

  const handleClick = (id) => {
    console.log("clicked", id);
    setActive(id);

    queryParams.delete("list");
    queryParams.set("medium", id);
    navigate(`?${queryParams.toString()}`);
  };

  return (
    <div className="overflow-y-scroll scrollbar-hide justify-between mt-4 flex flex-col gap-4 border-r-2 mr-3">
      <div>
        {mediums.length > 0 ? (
          mediums.map((medium, index) => (
            <>
              <div
                key={index}
                className={`flex flex-row items-center border rounded-lg w-36 p-2 shadow-lg shadow-slate-100 cursor-pointer hover:bg-gray-100 mb-2 ${
                  active === medium.id ? "bg-gray-300" : ""
                }`}
                onClick={() => handleClick(medium.id)}
              >
                <img
                  src={
                    API.basic +
                    medium.images[0].image.destination +
                    "/" +
                    medium.images[0].image.filename
                  }
                  alt="medium"
                  className="w-6 h-6 rounded-full"
                />
                <h1 className="text-sm pl-2">{medium.medium}</h1>
              </div>
            </>
          ))
        ) : (
          <>Loading ...</>
        )}
      </div>

      {channel.images && channel.images.length > 0 ? (
        <div key={channel._id}>
          <img
            src={
              API.basic +
              channel?.images[1].image.destination +
              "/" +
              channel?.images[1].image.filename
            }
            alt="banner"
          />
        </div>
      ) : (
        <>Loading ...</>
      )}
    </div>
  );
};

export default Medium;
