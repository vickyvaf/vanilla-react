import Navbar from "../components/Navbar";

type onClickAboutpage = {
  onLinkHomeClick: () => void,
  onLinkAboutClick: () => void
}

const Aboutpage = (props: onClickAboutpage) => {
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