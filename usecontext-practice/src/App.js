import SigninProvider from './ContextProvider';
import Page from './Page';

const App = () => {
  return (
    <SigninProvider>
      <Page />
    </SigninProvider>
  );
};

export default App;
