import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { getApi } from "../../hooks/apiFunction";
import { API } from "../../config";
import "./style.css";

// eslint-disable-next-line react/prop-types
const Channel = () => {
  const [channels, setChannels] = useState([]);
  const [active, setActive] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  const fetchData = async () => {
    const res = await getApi(API.localHost + "/channel/channels");
    if (res.data !== undefined) {
      setChannels(res.data.channels);
    } else {
      console.log(res.response.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = (id) => {
    console.log("clicked", id);
    setActive(id);
    queryParams.delete("medium");
    queryParams.delete("list");
    // window.history.replaceState({}, document.title);
    queryParams.set("channel", id);
    navigate(`?${queryParams.toString()}`);
  };

  return (
    <div className="overflow-y-scroll scrollbar-hide  mt-4 flex flex-col pl-3 border-r-2 mr-3">
      <div className="font-semibold">
        {channels.map((channel, index) => (
          <div key={index} className="flex items-center">
            <button
              onClick={() => handleClick(channel.id)}
              className={`nav-link ${active === channel.id ? "active" : ""}`}
            >
              <img
                src={
                  API.basic +
                  channel.images[0].image.destination +
                  "/" +
                  channel.images[0].image.filename
                }
                alt="channel"
                className={`w-8 h-8 rounded-lg hover:rounded-none cursor-pointer p-1 `}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Channel;
