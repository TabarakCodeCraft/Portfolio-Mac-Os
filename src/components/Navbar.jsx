import useWindowStore from "#store/window";
import { navLinks, navIcons } from "../constants";
import dayjs from "dayjs";

function Navbar() {
  const { openWindow } = useWindowStore();

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
            <li key={id}>
              <img src={img} className="icon-hover" alt={`icon-${id}`} />
            </li>
          ))}
        </ul>
        <time>{dayjs().format("dd MMM D h:mm A")}</time>
      </div>
    </nav>
  );
}

export default Navbar;
