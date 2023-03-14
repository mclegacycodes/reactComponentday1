import React,{useState} from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpenseFilter';
function Expenses(props){
  const [year,setYear]=useState("2020");
  const yearUpdateHandler=(yearValue)=>{
  setYear(yearValue);
    console.log(yearValue);

  }
  return (
<Card className='expenses'>
<ExpensesFilter onYearUpdate={yearUpdateHandler} selectedYear={year}/>
{props.expense.map((item)=>{ return <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}></ExpenseItem>})}
</Card>
  );

}

export default Expenses;