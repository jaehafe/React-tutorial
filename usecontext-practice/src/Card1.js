import { useSignin } from './ContextProvider';

const Card1 = () => {
  const { signin, name } = useSignin();

  return (
    <div className={`cardWrapper ${signin ? 'active' : ''}`}>
      <h3>Child A</h3>
      <p>{signin ? 'Hello' : '...'}</p>
      <p>{name}</p>
    </div>
  );
};

export default Card1;
