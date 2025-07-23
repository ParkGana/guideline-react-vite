import { useProduct } from '@/hooks/query/useProduct';
import { useNavigate, useParams } from 'react-router-dom';
import ModalLayout from '../layout/ModalLayout';

const ProductModal = () => {
  const navigate = useNavigate();
  const { productId } = useParams();

  const {
    fetchProductQuery: { data: product, isPending, isError }
  } = useProduct(productId ?? '');

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <ModalLayout handleClose={() => navigate(-1)}>
      <div className="flex flex-col gap-2 pb-5">
        <img src={product.img_url} className="mx-auto" />
        <div className="flex items-center gap-3">
          <p className="text-label">{product.title}</p>
          <p className="text-body">
            <span className="text-yellow-400">★</span> {product.rating}
          </p>
        </div>
        <p className="text-body">{product.description}</p>
        <p className="text-body font-bold">$ {product.price}</p>
      </div>
      <div className="flex flex-col gap-5 border-t border-gray-300 pt-5">
        {product.reviews.map(({ reviewerName, comment, rating, date }) => (
          <div key={reviewerName} className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <p className="text-caption font-bold">{reviewerName}</p>
              <p className="text-caption">
                <span className="text-yellow-400">★</span> {rating}
              </p>
              <p className="text-caption text-gray-500">{date.slice(0, 10)}</p>
            </div>
            <p className="text-body">{comment}</p>
          </div>
        ))}
      </div>
    </ModalLayout>
  );
};

export default ProductModal;
