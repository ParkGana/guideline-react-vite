import type { ProductType } from '@/types/productType';
import { useLocation, useNavigate } from 'react-router-dom';

type ProductItemProps = {
  data: ProductType;
};

const ProductItem = ({ data: { id, title, price, rating, img_url } }: ProductItemProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      className="flex flex-col items-center gap-2 border-4 border-gray-300 p-3 cursor-pointer"
      onClick={() => navigate(`/product/${id}`, { state: { backgroundLocation: location } })}
    >
      <img src={img_url} className="w-full max-w-[200px]" />
      <p className="w-full text-body text-center truncate">{title}</p>
      <div className="flex items-center gap-3">
        <p className="text-caption">$ {price}</p>
        <p className="text-caption">
          <span className="text-yellow-400">★</span> {rating}
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
