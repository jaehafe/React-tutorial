import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';

const Page = () => {
  return (
    // children을 사용할 경우 self closing tag x
    <>
      <Card1 />
      <Card2 />
      <Card3 />
    </>
  );
};

export default Page;
