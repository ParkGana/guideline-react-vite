import ProductList from '@/components/product/ProductList';

const ProductPage = () => {
  return (
    <div className="flex flex-col gap-5">
      <p className="text-title text-center">PRODUCT</p>
      <ProductList />
    </div>
  );
};

export default ProductPage;
