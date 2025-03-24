import ProductItem from "../../components/ProductItem";
import FullScreenWrapper from "../../components/Wrapper";

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
  {
    name: "Product 1",
    price: 100,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWdhWlkSctjkXh_A2l4CwjmI7Ez9-Z08PKGA&s",
    categoryId: "3",
  },
  {
    name: "Product 2",
    price: 150,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWdhWlkSctjkXh_A2l4CwjmI7Ez9-Z08PKGA&s",
    categoryId: "4",
  },
];

const BestSellers = () => {
  return (
   <div className="mt-10">
  <FullScreenWrapper>
    <h1 className="text-3xl text-center font-semibold text-gray-800">Best Seller</h1>
  </FullScreenWrapper>
  <FullScreenWrapper>
      <p className="text-center mt-5">There are many variations of passages of lorem ipsum available</p>
    </FullScreenWrapper>
  <FullScreenWrapper>
    <img className="mt-5" src="/public/images/hbdr.png" alt="new arrival" />
  </FullScreenWrapper>
    <FullScreenWrapper>
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
    </FullScreenWrapper>
   </div>
  );
};

export default BestSellers;
