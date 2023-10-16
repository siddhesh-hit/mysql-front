import "./styles.css";

const Footer = () => {
  return (
    <>
      <div className="bg-white pl-4 py-2 border-r-4">
        <h1 className="font-semibold text-xl">Platform Selected</h1>
        <p className="font-semibold text-2xl text-lightShade mt-2">0</p>
      </div>
      <div className="bg-white pl-4 py-2 border-r-4">
        <h1 className="font-semibold text-xl">Total amount (in $)</h1>
        <p className="font-semibold text-2xl text-lightShade mt-2">0 $</p>
      </div>
      <div className="bg-white pl-4 py-5 text-xl font-semibold flex justify-center">
        <button className="bg-button px-6 text-white rounded-full">
          Proceed to Checkout
        </button>
      </div>
    </>
  );
};

export default Footer;
