import { TimerIcon } from 'lucide-react'
import Heading from './components/Heading'
import './styles/global.css'
import './styles/theme.css'

export default function App(){
  return(
    <>
      <Heading>
        Ola Mundo
        <button>
          <TimerIcon/>
        </button>
      </Heading>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, nam sapiente? Cumque tempora nisi magni explicabo possimus dignissimos. Recusandae ad explicabo repellendus error iusto quos voluptates facere. Error, dignissimos quo.</p>
    </>
  )
}