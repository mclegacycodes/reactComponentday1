import React,{useState} from 'react';
import './NewExpenseForm.css';
const NewExpenseForm=(props)=>{
    // const [title,setTitle]=useState("");
    // const [amount,setAmount]=useState(0);
    // const [date,setDate]=useState("");
    const[userInput,setUserInput]=useState({title:'', amount:'', date:''})

    const titleHandler=(event)=>{
        // setTitle(event.target.value);
        setUserInput({...userInput, title:event.target.value});
    }
    const amountHandler=(event)=>{
        // setAmount(event.target.value);
        setUserInput({...userInput, amount:event.target.value});

    }
    const dateHandler=(event)=>{
        // setDate(event.target.value);
        setUserInput({...userInput, date:event.target.value});
        // console.log(userInput);
    }
    const submitHandler=(event)=>{
        event.preventDefault()
        props.onSaveExpenseData(userInput)
// console.log(userInput);
    }
return <form action="#" onSubmit={submitHandler}>
    <div className='new-expense__controls'>
        <div className='new-expense__control'>
            <label htmlFor="title">Title</label>
            <input type="text" name='title' onChange={titleHandler}/>

        </div>
        <div className='new-expense__control'>
            <label htmlFor="amount">Amount</label>
            <input type="number" name='amount' min="0.01" step="0.01" onChange={amountHandler}/>

        </div>
        <div className='new-expense__control'>
            <label htmlFor="date">Date</label>
            <input type="date" min="2023-01-01" max="2024-12-31" placeholder="YYYY-MM-DD" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" onChange={dateHandler}/>

        </div>
    </div>
    <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
    </div>
</form>
}
export default NewExpenseForm;