import Navbar from "../components/Navbar";

type onClickHomepage = {
  onLinkHomeClick: () => void,
  onLinkAboutClick: () => void
}

const Homepage = (props: onClickHomepage) => {
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
