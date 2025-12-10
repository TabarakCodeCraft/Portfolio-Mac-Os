import { Draggable } from "gsap/Draggable";
import gsap from "gsap";

import { Navbar, Welcome, Dock } from "./components/index";
import { Safari, Terminal, Resume, Finder, Text, ImageWindow } from "#windows";

gsap.registerPlugin(Draggable);

function App() {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Text />
      <ImageWindow />
      <Finder />
    </main>
  );
}

export default App;
