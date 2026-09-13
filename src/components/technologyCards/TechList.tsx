import { use, useState } from "react";
import type { ItechList } from "../../types/Techlisttypes";
import AvailableTech from "./AvailableTech";

interface TechListProps {
  TechListPromise: Promise<ItechList[]>;
}

const TechList = ({
  TechListPromise,
}: TechListProps) => {
  const techList = use(TechListPromise);

  // Selected technologies
  const [stack, setStack] = useState<ItechList[]>([]);

  // Available / Selected
  const [buttonType, setButtonType] = useState<
    "available" | "selected"
  >("available");

 
  const displayedTech =
    buttonType === "available"
      ? techList
      : stack;

  return (
    <div className="container mx-auto px-4 py-8">

      
      <div className="flex justify-between items-center gap-4 mb-6">

       

        <div className="flex gap-2">

         
          <button
            type="button"
            onClick={() =>
              setButtonType("available")
            }
            className={`btn ${
              buttonType === "available"
                ? "bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 text-white border-none"
                : ""
            }`}
          >
            Available
          </button>

          
          <button
            type="button"
            onClick={() =>
              setButtonType("selected")
            }
            className={`btn ${
              buttonType === "selected"
                ? "bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 text-white border-none"
                : ""
            }`}
          >
            Selected ({stack.length})
          </button>

        </div>
      </div>

      
      <AvailableTech
        TechList={displayedTech}
        stack={stack}
        setStack={setStack}
      />

    </div>
  );
};

export default TechList;