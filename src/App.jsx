import BioData from "./components/BioData";

const App = () => {
  return (
    <>
      <BioData
        name="Ahmad Orpu"
        age={29}
        mobile="+8801728136344"
        occupation="Software Developer"
        skills={["NextJs", "ReactJs", "NodeJs", "MongoDB", "ExpressJS"]}
        interests={["Programming", "Reading", "Traveling"]}
      />
      <hr />

      <BioData
        name="Farjana Nishu"
        age={27}
        occupation="Masters Student"
        skills={["Crafting", "Sewing", "Cooking", "Dancing", "Painting"]}
        interests={["Watching Movies", "Reading", "Traveling"]}
      />
    </>
  );
};

export default App;
