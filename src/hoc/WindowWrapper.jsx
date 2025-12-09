import useWindowStore from "#store/window";
import { useRef } from "react";

function WindowWrapper(Component, windowKey) {
  const Wrapped = (props) => {
    const { focusWindow, windows } = useWindowStore();
    const { isOpen, zIndex } = windows[windowKey] || {
      isOpen: false,
      zIndex: 0,
    };
    const ref = useRef(null);

    if (!isOpen) return null;

    return (
      <section
        id={windowKey}
        ref={ref}
        style={{ zIndex }}
        className="absolute"
        onClick={() => focusWindow(windowKey)}
      >
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${
    Component.displayName || Component.name || "Component"
  })`;

  return Wrapped;
}

export default WindowWrapper;
