import { React } from "./react.js";
import Homepage from "./pages/Homepage.js";
import Aboutpage from "./pages/Aboutpage.js";
import NotFound from "./pages/Notfound.js";

const App = () => {
  const [pathname, setPathname] = React.useState(window.location.pathname);

  React.useEffect(() => {
    history.pushState(null, "", pathname);
  }, [pathname]);

  const onLinkHomeClick = () => {
    setPathname("/");
  };

  const onLinkAboutClick = () => {
    setPathname("/about");
  };

  if (pathname === "/") {
    return Homepage({ onLinkHomeClick, onLinkAboutClick });
  } else if (pathname === "/about") {
    return Aboutpage({ onLinkHomeClick, onLinkAboutClick });
  } else {
    return NotFound();
  }
};

export default App;
