import { useSignin } from './ContextProvider';

const Card3Child = () => {
  const { signin, name } = useSignin();

  return (
    <div style={{ border: `3px ${signin ? '#f0c solid' : '#ccc dotted'}` }}>
      <p>{signin ? 'Do something' : '...'}</p>
      <p>{name}</p>
    </div>
  );
};

export default Card3Child;
