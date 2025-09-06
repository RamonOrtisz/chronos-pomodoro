import { DefaultInput } from './components/Defaultinput';
import { Container } from './components/Container';
import { CountDown } from './components/CountDown';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';

import './styles/global.css';
import './styles/theme.css';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <DefaultInput
              id='meuInput'
              labelText='task'
              type='text'
              placeholder='digite algo'
            />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>

          <div className='formRow'>
            <p>Ciclos</p>
            <p> 0 0 0 0 0 0 0</p>
          </div>

          <div className='formRow'>
            <button>enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}

export default App;
