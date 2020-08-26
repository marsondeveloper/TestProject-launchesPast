import React, {useState} from 'react';
import ButtonQuery from './ButtonQuery';

const Input = () => {
 
    const [inputText, setText] = useState('');
    
    let onChangeText = ({target: {value}}) => {
        setText(value)
    }
    return (
        <div className='input'>
            <h2>Введите год вылета ракет начиная от 2006-го года</h2>
            <input placeholder={'Введите год'} type={'text'} value={inputText} onChange={onChangeText}/>
            <div>
                <ButtonQuery inputText={inputText} />
            </div>
        </div>
    )
}

export default Input;