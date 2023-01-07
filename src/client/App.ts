import { React } from "./React";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import NotFound from "./pages/NotFound";

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
