import { Link, useParams } from 'react-router-dom';
import products from '../data';

const SingleProduct = () => {
  // 현재 URL의 path 파라미터만 뽑아서 받아올 수 있음.
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const { image, name } = product;
  console.log('useParams', useParams());
  console.log('product', product);
  return (
    <section className="section product">
      <img src={image} alt={name} />
      <h5>{name}</h5>
      <Link to="/products">Back to Products</Link>
    </section>
  );
};

export default SingleProduct;
