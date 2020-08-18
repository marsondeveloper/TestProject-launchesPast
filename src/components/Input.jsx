import React, {useState} from 'react';
import ButtonQuery from './ButtonQuery';

const Input = () => {
 
    const [inputText, setText] = useState('');
    const [folowingInProgress, setFollowingInProgress] = useState('');
   
    let onChangeText = ({target: {value}}) => {
        setText(value)
      if(value.length === 4 || value === ''){
        setFollowingInProgress(value)
      }
    }
    return (
        <div className='input'>
            <h2>Для отображения списка запусков шатлов введите год вылета от 2006</h2>
            <input placeholder={'Введите год'} type={'text'} value={inputText} onChange={onChangeText}/>
            <div>
                <ButtonQuery inputText = {inputText} folowingInProgress = {folowingInProgress} setFollowingInProgress = {setFollowingInProgress}/>
            </div>
        </div>
    )
}

export default Input;