import { Suspense } from "react";
import Nav from "./components/Nav";
import Section from "./components/Section";
import TechList from "./components/technologyCards/TechList";
import Footer from "./components/Footer";
import type { ItechList } from "./types/Techlisttypes";
import "react-toastify/dist/ReactToastify.css";

// Promise
// const TechListPromise: Promise<ItechList[]> = fetch("/data.json").then(
//   (res) => res.json()
// );
const TechListPromise: Promise<ItechList[]> = new Promise(
  (resolve, reject) => {
    setTimeout(() => {
      fetch("/data.json")
        .then((res) => res.json())
        .then(resolve)
        .catch(reject);
    }, 2000);
  }
);



function App() {
  return (
    <>
      <Nav />

      <Section />

      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            <p className="text-lg font-semibold text-gray-500">
              Loading technologies...
            </p>
          </div>
        }
      >
        <TechList TechListPromise={TechListPromise} />
      </Suspense>

      <Footer />
    </>
  );
}

export default App;