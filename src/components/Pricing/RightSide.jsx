const RightSide = () => {
  return (
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
          To stand out on social, you need the right strategies and tools. With
          STRATEGY TOOL, you`ve got everything you need to build your following
          and grow your brand across all digital channels. We have the perfect
          Growth Hacks for your business which you can implement on your OWN.
        </p>
      </div>
      <div className="text-center">
        <button className="bg-button py-3 px-8 mt-8 text-white text-xl font-[600] border rounded-full ">
          Submit for the life time plan
        </button>
      </div>
    </main>
  );
};

export default RightSide;
