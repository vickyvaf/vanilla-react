const ProductsList = (props) => {
  const listWrapper = document.createElement("div");

  props.state.products.map((product, i) => {
    const list = document.createElement("p");
    list.textContent = product.title;

    listWrapper.append(list);
  });

  return listWrapper;
};

export default ProductsList;
