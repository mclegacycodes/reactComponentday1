import React,{useState} from 'react';
import ExpenseItem from './ExpenseItem';
import { format } from 'date-fns';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpenseFilter';




function Expenses(props){
  const [year,setYear]=useState("2020");
  const yearUpdateHandler=(yearValue)=>{
  setYear(yearValue);
    console.log(yearValue);

  }
  const filterYear=(receivedYear)=>{ return format(receivedYear.date,'y') === year};
  return (
<Card className='expenses'>
<ExpensesFilter onYearUpdate={yearUpdateHandler} selectedYear={year}/>
{
// props.expense.map((item)=>{ return <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}></ExpenseItem>})
 

props.expense.filter(filterYear ).map((item)=>{ return <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}></ExpenseItem>})


}
</Card>
  );

}

export default Expenses;