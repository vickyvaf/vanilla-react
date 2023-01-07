type LinkProps = {
  href: string;
  label: string;
  onClick: () => void;
};

const Link = (props: LinkProps) => {
  const a = document.createElement("a");
  a.href = props.href;
  a.textContent = props.label;
  a.onclick = function (event) {
    event.preventDefault();
    props.onClick();
  };
  return a;
};

export default Link;
