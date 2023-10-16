import image1 from "../../assets/1.png";
const ListMedium = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-9 tracking-tight text-gray-900 sm:text-4xl">
            This is a Tailwind ReactJS Landing Page Demo
          </h1>
        </div>
      </header>
      <main className="flex-grow">
        <section className="bg-white">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col">
              <div className="flex-1">
                <img
                  className="object-cover h-96 w-full"
                  src={image1}
                  alt="Hero Image"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                  This is a Tailwind ReactJS Landing Page Demo
                </h2>
                <p className="mt-4 text-base leading-6 text-gray-500">
                  This is a simple landing page demo built with Tailwind CSS and
                  ReactJS. You can use it as a starting point for your own
                  landing page project.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="mt-4 text-base leading-6 text-gray-500">
            &copy; 2023 Bard, Google AI
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ListMedium;
