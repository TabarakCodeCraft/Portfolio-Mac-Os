import useWindowStore from "#store/window";
import useThemeStore from "#store/theme";
import { navLinks, navIcons } from "../constants";
import dayjs from "dayjs";

function Navbar() {
  const { openWindow } = useWindowStore();
  const { theme, toggleTheme } = useThemeStore();

  const handleIconClick = (id) => {
    if (id === 4) { // mode icon
      toggleTheme();
    }
    // Add other icon handlers here
  };

  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="" />
        <p className="font-bold">Tabarak Portfolio</p>
        <ul>
          {navLinks.map(({ id, name, type }) => (
            <li key={id} onClick={() => openWindow(type)}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li 
              key={id}
              onClick={() => handleIconClick(id)}
              className="cursor-pointer"
            >
              <img 
                src={img} 
                className="icon-hover" 
                alt={`icon-${id}`}
              />
            </li>
          ))}
        </ul>
        <time>{dayjs().format("dd MMM D h:mm A")}</time>
      </div>
    </nav>
  );
}

export default Navbar;