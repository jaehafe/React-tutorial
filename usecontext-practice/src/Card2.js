import { useSignin } from './ContextProvider';

const Card2 = () => {
  const { signin, name } = useSignin();

  return (
    <div className={`cardWrapper ${signin ? 'active' : ''}`}>
      <h3>Child B</h3>
      <p>{signin ? 'Welcome' : '...'}</p>
      <p>{name}</p>
    </div>
  );
};

export default Card2;
