import Container from './components/Container'
import CountDown from './components/CountDown'
import Cycles from './components/Cycles'
import Input from './components/Input'
import Logo from './components/Logo'
import Menu from './components/Menu'
import './styles/global.css'
import './styles/theme.css'



export default function App(){
  return(
    <>
      <Container>
        <Logo/>
      </Container>
      <Container>
        <Menu/>
      </Container>
      <Container>
        <CountDown/>
      </Container>
      <Container>
        <form className='form' action=''>
          <div className='formRow'>
           <Input 
              id='meuInput' 
              type='text' 
              text='Task'
              placeholder='Digite a Task'
           />
          </div>
          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className='formRow'>
            <Cycles/>
          </div>
          <div className='formRow'>
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  )
}