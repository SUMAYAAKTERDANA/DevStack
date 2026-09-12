import { useState } from 'react';
import type { ItechList } from '../../types/Techlisttypes';

type Props = {
  TechList?: ItechList[];
};

const AvailableTech = ({ TechList = [] }: Props) => {
  const [stack, setStack] = useState<ItechList[]>([]);
  const addToStack = (tech: ItechList) => {
    if (!stack.find((t) => t.id === tech.id)) {
      setStack([...stack, tech]);
    }
  };


  const removeFromStack = (id: string) => {
    setStack(stack.filter((t) => t.id !== id));
  };

  const badgeColor = (badge: string) => {
    const map: Record<string, string> = {
      Popular: 'bg-blue-50 text-blue-600',
      Essential: 'bg-blue-50 text-blue-600',
      'Top SQL': 'bg-blue-50 text-blue-600',
      'Full-Stack': 'bg-blue-50 text-blue-600',
      Fast: 'bg-orange-50 text-orange-600',
      Containers: 'bg-blue-50 text-blue-600',
      NoSQL: 'bg-green-50 text-green-600',
      Flexible: 'bg-purple-50 text-purple-600',
      'In-Memory': 'bg-red-50 text-red-600',
      'CI/CD': 'bg-green-50 text-green-600',
    };

    return map[badge] ?? 'bg-gray-100 text-gray-600';
  };
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">


        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Explore the <span className="text-pink-500">Technologies</span>
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-2">
            Pick one technology per category to build your ideal stack.
          </p>
          <div className="w-10 h-1 bg-pink-500 rounded mt-4"></div>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">


          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {TechList.map((tech) => (
                <div
                  key={tech.id}
                  className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow p-5 flex flex-col"
                >

                  <div className="flex items-start justify-between">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-9 h-9 object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <span
                      className={`text-[10px] font-medium px-2 py-1 rounded-full ${badgeColor(tech.badge)}`}
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
                    <div className="flex items-center gap-1 text-xs text-gray-700 shrink-0">
                      <span className="text-yellow-500">★</span>
                      <span className="font-semibold">{tech.rating}</span>
                    </div>
                  </div>


                  <button


                    onClick={() => addToStack(tech)}
                    className="w-full mt-4 bg-gray-900 hover:bg-gray-800 active:scale-[0.98] text-white text-sm py-2 rounded-lg transition-all"
                  >
                    Add to Stack
                  </button>
                </div>
              ))}
            </div>
          </div>


          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-6">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <h3 className="text-base font-bold text-gray-900">
                  Your Stack
                </h3>
                <p className="text-xs text-gray-500 mt-1 mb-4">
                  {stack.length === 0
                    ? 'No technologies selected yet.'
                    : `${stack.length} technologies selected.`}
                </p>


                {stack.length === 0 ? (
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <p className="text-xs text-gray-400">
                      Your stack is empty.
                    </p>
                  </div>
                ) : (
                  <ul className="space-y-2">
                    {stack.map((t) => (
                      <li
                        key={t.id}
                        className="flex items-center justify-between bg-white border border-gray-200 px-3 py-2 rounded-lg text-xs"
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <img
                            src={t.icon}
                            alt={t.name}
                            className="w-4 h-4 object-contain shrink-0"
                          />
                          <span className="truncate font-medium text-gray-800">
                            {t.name}
                          </span>
                        </div>
                        <button
                          onClick={() => removeFromStack(t.id)}
                          className="text-red-400 hover:text-red-600 ml-2 shrink-0"
                          aria-label={`Remove ${t.name}`}
                        >
                          ✕
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AvailableTech; 