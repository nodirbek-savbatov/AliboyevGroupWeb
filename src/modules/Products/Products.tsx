import ProductItem from "../../components/ProductItem";

const products = [
  {
    name: "Product 1",
    price: 100,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWdhWlkSctjkXh_A2l4CwjmI7Ez9-Z08PKGA&s",
    categoryId: "1",
  },
  {
    name: "Product 2",
    price: 150,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWdhWlkSctjkXh_A2l4CwjmI7Ez9-Z08PKGA&s",
    categoryId: "2",
  },
];

const Products = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {products.map((product, index) => (
        <ProductItem
          key={index}
          name={product.name}
          price={product.price}
          image={product.image}
          categoryId="1"
        />
      ))}
    </div>
  );
};

export default Products;
