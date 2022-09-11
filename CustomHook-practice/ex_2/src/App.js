import useFetch from './useFetch';

const baseURL = 'https://jsonplaceholder.typicode.com';

const App = () => {
  // useFetch로부터 data를 받아옴.
  // data의 이름을 userData로 변경.
  const { data: userData } = useFetch(baseURL, 'users');
  const { data: postData } = useFetch(baseURL, 'posts');
  // console.log(userData);
  return (
    <div>
      <h1>user</h1>
      {userData && <pre>{JSON.stringify(userData[0], null, 2)}</pre>}
      <h1>post</h1>
      {postData && <pre>{JSON.stringify(userData[1], null, 2)}</pre>}
    </div>
  );
};

export default App;
