import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import homepage from "../../assets/home/homepage.gif";
import { getApiById } from "../../hooks/apiFunction";
import { API } from "../../config";
import "./style.css";

const ListMedium = () => {
  const [listMedium, setListMedium] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get("list");

  const fetchData = async () => {
    if (name === null) {
      setListMedium([]);
      setIsLoading(true);
      return;
    } else {
      const res = await getApiById(API.localHost + "/list/list", name);
      if (res.data !== undefined) {
        setListMedium(res.data.list);
        setIsLoading(false);
      } else {
        console.log(res.response.data);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [name]);

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center">
          <img
            src={homepage}
            alt="homepage"
            className="h-auto max-w-lg mx-auto"
          />
        </div>
      ) : (
        <div className="flex flex-col min-h-screen items-center overflow-auto scrollbar-hide">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1
              className="text-3xl font-bold leading-9 text-gray-900 sm:text-4xl"
              dangerouslySetInnerHTML={{ __html: listMedium?.list }}
            ></h1>
          </div>
          <hr className="h-px bg-gray-200 dark:bg-gray-700 w-9/12" />
          <main className="flex-grow">
            <section className="">
              <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col">
                  <div className="flex-1"></div>
                  <div className="flex-1 flex flex-col justify-center">
                    <div
                      className="mt-4 text-base leading-6 text-gray-500"
                      dangerouslySetInnerHTML={{ __html: listMedium?.content1 }}
                    ></div>
                    <img
                      src={
                        listMedium.images[0].image[0] !== undefined
                          ? API.basic +
                            listMedium.images[0].image[0].destination +
                            "/" +
                            listMedium.images[0].image[0].filename
                          : API.basic +
                            listMedium.images[0].image.destination +
                            "/" +
                            listMedium.images[0].image.filename
                      }
                      alt="list"
                      className="h-50 py-5 max-w-xl object-contain"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <div
                      className="mt-4 text-base leading-6 text-gray-500"
                      dangerouslySetInnerHTML={{ __html: listMedium?.content2 }}
                    ></div>
                    {listMedium.images[1] ? (
                      <img
                        src={
                          listMedium.images[1].image[0] !== undefined
                            ? API.basic +
                              listMedium.images[1].image[0].destination +
                              "/" +
                              listMedium.images[1].image[0].filename
                            : API.basic +
                              listMedium.images[1].image.destination +
                              "/" +
                              listMedium.images[1].image.filename
                        }
                        alt="list"
                        className="h-50 max-w-xs object-contain"
                      />
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <div
                      className="mt-4 text-base leading-6 text-gray-500"
                      dangerouslySetInnerHTML={{ __html: listMedium?.content3 }}
                    ></div>
                    {listMedium.images[2] ? (
                      <img
                        src={
                          listMedium.images[2].image[0] !== undefined
                            ? API.basic +
                              listMedium.images[2].image[0].destination +
                              "/" +
                              listMedium.images[2].image[0].filename
                            : API.basic +
                              listMedium.images[2].image.destination +
                              "/" +
                              listMedium.images[2].image.filename
                        }
                        alt="list"
                        className="h-50 max-w-xs object-contain"
                      />
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      )}
    </>
  );
};

export default ListMedium;
