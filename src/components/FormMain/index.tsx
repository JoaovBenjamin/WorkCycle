import { PlayCircleIcon } from "lucide-react";
import DefaultButton from "../DefaultButton";
import Cycles from "../Cycles";
import Input from "../Input";

export default function FormMain(){
    return(
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
            <DefaultButton icon={<PlayCircleIcon/>}/>
          </div>
        </form>
    )
}