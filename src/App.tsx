import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "./Button";
import s from './Buttom.module.css'

function App() {
    let [a, setA] = useState(0)

    const addButton1 = () => {
        if (a < 5)
        {setA(++a)}

    }
    const addButton2 = () => {
        setA(0)
    }

    const InputClasses = a === 5 ? s.performance : s.stopPerformance
    const Button1Classes= a<5 ? s.active:''
    const Button2Classes= a>0 ?s.active:''

    return (
        <div className={s.rectangle}>
            <div><h1 className={InputClasses}>{a}</h1></div>
            <div className={s.total}>
                <Button className={Button1Classes} name={'inc'}  onClick={addButton1}/>
                <Button className={Button2Classes} name={'reset'} onClick={addButton2}/>
            </div>
        </div>
    );
}

export default App;
