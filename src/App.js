import Header from "./components/Header";
import Intro from "./pages/Intro";
import Stack from "./pages/Stack";
import Project from "./pages/Project";
import Outtro from "./pages/Outtro";

function App() {
  return (
    <>
      <Header />

      <div className="Intro">
        <Intro />
      </div>
      <div className="Stack">
        <Stack />
      </div>
      <div className="Project">
        <Project />
      </div>
      <div className="Outtro">
        <Outtro />
      </div>
    </>
  );
}

export default App;
