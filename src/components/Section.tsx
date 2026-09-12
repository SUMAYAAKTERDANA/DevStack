import banner from '../assets/banner-stack.png'


const Section = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 md:py-20
                        flex flex-col md:flex-row items-center gap-10">


      <div className="w-full md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold">
          Build Your Ideal <br />
          <span className="text-pink-500">
            Development Stack
          </span>
        </h1>

        <p className="text-gray-600 mt-5">
          Explore frontend, backend, database, and tooling options,
          compare them side by side, and put together the stack that
          fits your next project.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <button className="bg-pink-500 text-white px-5 py-3 rounded-lg">
            Explore Technologies
          </button>

          <button className="border px-5 py-3 rounded-lg">
            Learn More
          </button>
        </div>
      </div>


      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={banner}
          alt="Development Stack"
          className="w-full max-w-md"
        />
      </div>

    </section>
  );
};

export default Section;