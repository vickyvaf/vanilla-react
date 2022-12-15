const ProductsList = (props) => {
  const listWrapper = document.createElement("div");

  props.products.map((product, i) => {
    const list = document.createElement("p");
    list.textContent = product.title;

    listWrapper.append(list);
  });

  return listWrapper;
};

export default ProductsList;
