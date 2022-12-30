import Navbar from "../components/Navbar.js";

const Homepage = (props) => {
  const title = document.createElement("h1");
  title.textContent = "Home";

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

export default Homepage;
