import { useProducts } from '@/hooks/query/useProducts';
import ProductItem from './ProductItem';

const ProductList = () => {
  const {
    fetchProductsQuery: { data: products, isPending, isError }
  } = useProducts();

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {products.map((product) => (
        <ProductItem key={product.id} data={product} />
      ))}
    </div>
  );
};

export default ProductList;
