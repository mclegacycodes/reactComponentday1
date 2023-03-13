import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props){
  return (
<Card className='expenses'>
{props.expense.map((item)=>{ return <ExpenseItem title={item.title} amount={item.amount} date={item.date}></ExpenseItem>})}
</Card>
  );

}

export default Expenses;