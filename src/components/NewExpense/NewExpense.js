import NewExpenseForm from './NewExpenseForm';
import './NewExpense.css';
function NewExpense(props){
 const  onSaveExpenseDataHandler=(submittedExpenseData)=>{
  const exportExpenseData={...submittedExpenseData, id:Math.random().toString()}
  props.onExtractData(exportExpenseData)
  // console.log(exportExpenseData);

 }
return (
    <div className='new-expense'>
      <NewExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}/>  
    </div>
);
}
export default NewExpense;