import { Heading } from './components/Heading';

import './styles/global.css';
import './styles/theme.css';

export function App() {
  return (
    <>
      <Heading attr={123} attr2='String'>
        Olá mundo!
      </Heading>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        corrupti culpa, harum repellendus ad deleniti quam provident eaque
        eligendi pariatur.
      </p>
    </>
  );
}

export default App;
