import Link from "./Link";

const Navbar = (props) => {
  const linkHome = Link({
    href: "/",
    label: "Home",
    onClick: props.onLinkHomeClick,
  });
  const linkAbout = Link({
    href: "/about",
    label: "About",
    onClick: props.onLinkAboutClick,
  });

  const div = document.createElement("div");
  div.append(linkHome);
  div.append(linkAbout);

  return div;
};

export default Navbar;
