import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import Section from './components/Section';
import AvailableTech from './components/technologyCards/AvailableTech';
import type { ItechList } from './types/Techlisttypes';

function App() {
  const [techData, setTechData] = useState<ItechList[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data: ItechList[]) => {
        setTechData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load data:', err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Nav />
      <Section />
      {loading ? (
        <h2 className="p-10 text-center">Loading...</h2>
      ) : (
        <AvailableTech TechList={techData} />
      )}


    </>
  );
}

export default App;