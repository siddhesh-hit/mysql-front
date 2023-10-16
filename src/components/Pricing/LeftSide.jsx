import image from "../../assets/1.png";

const LeftSide = () => {
  return (
    <main className="px-8 border-r-4">
      <div className="my-4 text-center">
        <h3 className="text-xl font-[750]">
          Individual Plan (<span className="text-dollar text-3xl ml-1">$5</span>{" "}
          per platform)
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
  );
};

export default LeftSide;
