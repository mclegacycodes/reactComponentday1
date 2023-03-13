import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpenseFilter';
function Expenses(props){
  const yearUpdateHandler=(yearValue)=>{
    console.log(yearValue);

  }
  return (
<Card className='expenses'>
<ExpensesFilter onYearUpdate={yearUpdateHandler}/>
{props.expense.map((item)=>{ return <ExpenseItem title={item.title} amount={item.amount} date={item.date}></ExpenseItem>})}
</Card>
  );

}

export default Expenses;