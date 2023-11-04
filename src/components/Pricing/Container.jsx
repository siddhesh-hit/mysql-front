import { useState } from "react";

import { API } from "../../config";
import { postApi } from "../../hooks/apiFunction";
import image from "../../assets/1.png";
import "./styles.css";

const Container = () => {
  const [book, setBook] = useState({
    name: "The Fault In Our Stars",
    author: "John Green",
    img: "https://images-na.ssl-images-amazon.com/images/I/817tHNcyAgL.jpg",
    amount: 55,
  });

  const initPayment = (data) => {
    const options = {
      key: "rzp_test_wwKeLsIebAHemk",
      amount: data.amount,
      currency: data.currency,
      name: book.name,
      description: "Test Transaction",
      image: book.img,
      order_id: data.id,
      handler: async (response) => {
        console.log(response);
        try {
          const { data } = await postApi(
            API.localHost + "/razorpay/verify-payment",
            response
          );
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handlePayment = async () => {
    try {
      const { data } = await postApi(API.localHost + "/razorpay/create-order", {
        amount: book.amount,
      });
      console.log(data);
      initPayment(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="backgroundUrl relative flex flex-col min-h-screen overflow-hidden">
      <h2 className="text-2xl font-semibold text-center my-5">
        Get Started Now Pick a Plan
      </h2>

      <main className="mx-auto w-11/12 max-w-screen-lg ">
        <div className="grid grid-cols-2 bg-white">
          <main className="px-8 border-r-4">
            <div className="my-4 text-center">
              <h3 className="text-xl font-[750]">
                Individual Plan (
                <span className="text-dollar text-3xl ml-1">$5</span> per
                platform)
              </h3>
              <p className="text-lightShade font-[600]">
                Select the platform of your choices
              </p>
            </div>
            <hr />
            <div className="overflow-y-scroll scrollbar-hide h-80 mt-4 flex flex-col gap-4">
              <div className="border flex">
                <input
                  type="checkbox"
                  name="facebook"
                  value="facebook"
                  className="m-2"
                />
                <img className="w-10 h-10" src={image} />
                <div>
                  <h4>Facebook</h4>
                  <p>Post to your Facebook page</p>
                </div>
              </div>
            </div>
          </main>

          <main className="px-8">
            <div className="my-4 text-center">
              <h3 className="text-xl font-semibold">
                Life Time Plan (Just @
                <span className="text-dollar text-3xl ml-2">$67</span>
                <span className="line-through text-lightShade ml-2">$165</span>)
              </h3>
              <p className="text-lightShade font-[600]">
                Get All Access 30+ Platform
              </p>
            </div>
            <hr />
            <div className="overflow-y-scroll inline-block scrollbar-hide mt-4 flex flex-col gap-4">
              <div></div>
              <p className="break-words ">
                To stand out on social, you need the right strategies and tools.
                With STRATEGY TOOL, you`ve got everything you need to build your
                following and grow your brand across all digital channels. We
                have the perfect Growth Hacks for your business which you can
                implement on your OWN.
              </p>
            </div>
            <div className="text-center">
              <button className="bg-button py-3 px-8 mt-8 text-white text-xl font-[600] border rounded-full ">
                Submit for the life time plan
              </button>
            </div>
          </main>
        </div>
      </main>

      <main className="grid grid-cols-3 mx-auto w-11/12 max-w-screen-lg mt-1">
        <div className="bg-white pl-4 py-2 border-r-4">
          <h1 className="font-semibold text-xl">Platform Selected</h1>
          <p className="font-semibold text-2xl text-lightShade mt-2">0</p>
        </div>
        <div className="bg-white pl-4 py-2 border-r-4">
          <h1 className="font-semibold text-xl">Total amount (in $)</h1>
          <p className="font-semibold text-2xl text-lightShade mt-2">0 $</p>
        </div>
        <div className="bg-white pl-4 py-5 text-xl font-semibold flex justify-center">
          <button
            className="bg-button px-6 text-white rounded-full"
            onClick={() => handlePayment()}
          >
            Proceed to Checkout
          </button>
        </div>
      </main>
    </section>
  );
};

export default Container;
