import { useEffect } from "react";
import { Draggable } from "gsap/Draggable";
import gsap from "gsap";
import { Navbar, Welcome, Dock, Home } from "./components/index";
import {
  Safari,
  Terminal,
  Resume,
  Finder,
  Text,
  ImageWindow,
  Contact,
  Photos,
} from "#windows";
import useThemeStore from "#store/theme";

gsap.registerPlugin(Draggable);

function App() {
    const { theme } = useThemeStore();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <main className="app">
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Text />
      <ImageWindow />
      <Finder />
      <Contact />
      <Home />
      <Photos />
    </main>
  );
}

export default App;
