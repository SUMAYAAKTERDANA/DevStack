import banner from '../assets/banner-stack.png';

const Section = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row items-center gap-10">

      <div className="w-full md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Build Your Ideal <br />
          <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>

        <p className="text-gray-600 mt-5 max-w-lg">
          Explore frontend, backend, database, and tooling options,
          compare them side by side, and put together the stack that
          fits your next project.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <button className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-500 text-white font-medium px-6 py-3 rounded-xl shadow-sm hover:opacity-90 transition-all">
            Explore Technologies
          </button>

          <button className="border border-gray-200 text-gray-700 font-medium px-6 py-3 rounded-xl hover:bg-gray-50 transition-all">
            Learn More
          </button>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={banner}
          alt="Development Stack"
          className="w-full max-w-md object-contain"
        />
      </div>

    </section>
  );
};

export default Section;