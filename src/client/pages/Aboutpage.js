import Navbar from "../components/Navbar.js";

const Aboutpage = (props) => {
  const title = document.createElement("h1");
  title.textContent = "About";

  const div = document.createElement("div");
  div.append(
    Navbar({
      onLinkHomeClick: props.onLinkHomeClick,
      onLinkAboutClick: props.onLinkAboutClick,
    }),
    title
  );

  return div;
};

export default Aboutpage;
