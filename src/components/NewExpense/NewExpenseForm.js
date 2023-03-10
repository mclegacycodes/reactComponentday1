import './NewExpenseForm.css';
const NewExpenseForm=()=>{
return <form action="#">
    <div className='new-expense__controls'>
        <div className='new-expense__control'>
            <label htmlFor="title">Title</label>
            <input type="text" name='title'/>

        </div>
        <div className='new-expense__control'>
            <label htmlFor="amount">Amount</label>
            <input type="number" name='amount' min="0.01" step="0.01"/>

        </div>
        <div className='new-expense__control'>
            <label htmlFor="date">Title</label>
            <input type="date" min="2023-01-01" max="2023-12-31"/>

        </div>
    </div>
    <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
    </div>
</form>
}
export default NewExpenseForm;