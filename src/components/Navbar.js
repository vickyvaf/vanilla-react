import { React } from "../react.js";
import Link from "./Link";

const Navbar = () => {
  const [link, setLink] = React.useState("");

  const linkHome = Link({
    href: link,
    label: "Home",
    pushState: () => history.pushState(null, "", "/"),
    onClick: () => setLink("/"),
  });
  const linkAbout = Link({
    href: link,
    label: "About",
    pushState: () => history.pushState(null, "", "/about"),
    onClick: () => setLink("/about"),
  });

  const div = document.createElement("div");
  div.append(linkHome);
  div.append(linkAbout);

  return div;
};

export default Navbar;
