import ProductCard from "../../Component/Card/ProductCard";
import Header from "../../Component/Header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="d-flex justify-content-center align-items-center flex-wrap py-4 body-content">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </>
  );
}
