import type {
  Dispatch,
  SetStateAction,
} from "react";

import type { ItechList } from "../../types/Techlisttypes";
import { toast } from "react-toastify";

type Props = {
  TechList: ItechList[];
  stack: ItechList[];
  setStack: Dispatch<SetStateAction<ItechList[]>>;
};

const AvailableTech = ({
  TechList,
  stack,
  setStack,
}: Props) => {

 
  const addToStack = (tech: ItechList) => {

    // Check duplicate technology
    const alreadySelected = stack.some(
      (item) => item.id === tech.id
    );

    if (alreadySelected) {
      toast.warning(
        `${tech.name} is already in your stack!`
      );

      return;
    }

    
    setStack((previousStack) => [
      ...previousStack,
      tech,
    ]);

  
    toast.success(
      `${tech.name} added to your stack!`
    );
  };


 
  const removeFromStack = (id: string) => {

    const removedTech = stack.find(
      (item) => item.id === id
    );

    setStack((previousStack) =>
      previousStack.filter(
        (item) => item.id !== id
      )
    );

    if (removedTech) {
      toast.info(
        `${removedTech.name} removed from your stack!`
      );
    }
  };


  
  const removeAllFromStack = () => {

    if (stack.length === 0) {
      toast.warning(
        "Your stack is already empty!"
      );

      return;
    }

    setStack([]);

    toast.info(
      "All technologies removed from your stack!"
    );
  };


 
  const isSelected = (id: string) => {
    return stack.some(
      (item) => item.id === id
    );
  };


  
  const badgeColor = (badge: string) => {

    const map: Record<string, string> = {
      Popular: "bg-blue-50 text-blue-600",
      Essential: "bg-blue-50 text-blue-600",
      "Top SQL": "bg-blue-50 text-blue-600",
      "Full-Stack": "bg-blue-50 text-blue-600",

      Fast: "bg-orange-50 text-orange-600",

      Containers: "bg-blue-50 text-blue-600",

      NoSQL: "bg-green-50 text-green-600",

      Flexible: "bg-purple-50 text-purple-600",

      "In-Memory": "bg-red-50 text-red-600",

      "CI/CD": "bg-green-50 text-green-600",
    };

    return (
      map[badge] ??
      "bg-gray-100 text-gray-600"
    );
  };


  return (
    <div className="bg-white">

      <div className="max-w-7xl mx-auto">

       
        <div className="mb-8">

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Explore the{" "}

            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
              Technologies
            </span>

          </h1>

          <p className="text-xs sm:text-sm text-gray-500 mt-2">
            Pick any technologies you want to build your ideal stack.
          </p>

          <div className="w-10 h-1 bg-pink-500 rounded mt-4"></div>

        </div>


        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">


         
          <div className="lg:col-span-3">

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">

              {TechList.map((tech) => {

                const selected = isSelected(
                  tech.id
                );

                return (
                  <div
                    key={tech.id}
                    className={`border rounded-xl shadow-sm hover:shadow-md transition-all p-5 flex flex-col ${
                      selected
                        ? "bg-pink-50 border-pink-300"
                        : "bg-white border-gray-200"
                    }`}
                  >

                   
                    <div className="flex items-start justify-between">

                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-9 h-9 object-contain"

                        onError={(event) => {
                          event.currentTarget.style.display =
                            "none";
                        }}
                      />

                      <span
                        className={`text-[10px] font-medium px-2 py-1 rounded-full ${badgeColor(
                          tech.badge
                        )}`}
                      >
                        {tech.badge}
                      </span>

                    </div>


                   
                    <h2 className="text-lg font-bold text-gray-900 mt-3">
                      {tech.name}
                    </h2>


                   
                    <p className="text-xs text-gray-500 leading-relaxed mt-1 flex-1">
                      {tech.description}
                    </p>


                    
                    <div className="flex items-center justify-between mt-4">

                      <div className="flex gap-2 flex-wrap">

                        <span className="text-[10px] px-2 py-1 rounded border border-gray-300 text-gray-600">
                          {tech.category}
                        </span>

                        <span className="text-[10px] px-2 py-1 rounded border border-gray-300 text-gray-600">
                          {tech.difficulty}
                        </span>

                      </div>


                      <div className="flex items-center gap-1 text-xs text-gray-700">

                        <span className="text-yellow-500">
                          ★
                        </span>

                        <span className="font-semibold">
                          {tech.rating}
                        </span>

                      </div>

                    </div>


                    
                    <button
                      type="button"
                      onClick={() =>
                        addToStack(tech)
                      }
                      className={`w-full mt-4 text-white text-sm py-2 rounded-lg transition-all ${
                        selected
                          ? "bg-gray-400 hover:bg-gray-500"
                          : "bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 hover:opacity-90 active:scale-[0.98]"
                      }`}
                    >

                      {selected
                        ? "✓ Already Added"
                        : "Add to Stack"}

                    </button>

                  </div>
                );
              })}

            </div>

          </div>


         
          <div className="lg:col-span-1">

            <div className="lg:sticky lg:top-6">

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">


               
                <div>

                  <h3 className="text-base font-bold text-gray-900">
                    Your Stack
                  </h3>

                  <p className="text-xs text-gray-500 mt-1 mb-4">

                    {stack.length === 0
                      ? "No technologies selected yet."
                      : `${stack.length} technologies selected.`}

                  </p>

                </div>


                
                {stack.length === 0 ? (

                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">

                    <p className="text-xs text-gray-400">
                      Your stack is empty.
                    </p>

                  </div>

                ) : (

                 
                  <ul className="space-y-2">

                    {stack.map((tech) => (

                      <li
                        key={tech.id}
                        className="flex items-center justify-between bg-white border border-gray-200 px-3 py-2 rounded-lg text-xs"
                      >

                        <div className="flex items-center gap-2 min-w-0">

                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className="w-5 h-5 object-contain shrink-0"
                          />

                          <div className="min-w-0">

                            <span className="block truncate font-medium text-gray-800">
                              {tech.name}
                            </span>

                            <span className="block text-[9px] text-gray-400">
                              {tech.category}
                            </span>

                          </div>

                        </div>


                      
                        <button
                          type="button"
                          onClick={() =>
                            removeFromStack(
                              tech.id
                            )
                          }
                          className="text-red-400 hover:text-red-600 ml-2 shrink-0 cursor-pointer text-lg"
                          aria-label={`Remove ${tech.name}`}
                        >
                          ✕
                        </button>

                      </li>

                    ))}

                  </ul>

                )}


                
                <button
                  type="button"
                  onClick={removeAllFromStack}
                  disabled={stack.length === 0}
                  className="w-full mt-6 border border-red-300 text-red-500 py-2 rounded-lg font-medium hover:bg-red-50 transition disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Remove All
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default AvailableTech;