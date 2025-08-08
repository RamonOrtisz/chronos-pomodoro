import { TimerIcon } from 'lucide-react';
import { Heading } from './components/Heading';

import './styles/global.css';
import './styles/theme.css';

export function App() {
  return (
    <>
      <Heading>
        Olá mundo!
        <button>
          <TimerIcon />
        </button>
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
