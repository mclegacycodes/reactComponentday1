import './ExpenseDate.css'
import { format } from 'date-fns';
function ExpenseDate(props){
    // const formattedDate=format(parseIso(props.date), yyyy-MMMM-dd);
    const month=format(new Date(props.date),'MMMM');
    const day=format(new Date(props.date),'dd');
    const year=format(new Date(props.date),'y');
    return (
            <div className='expense-date'>
                <div className='expense-date__month'>{month}</div>
                <div className='expense-date__day'>{day}</div>
                <div className='expense-date__year'>{year}</div>
            </div>
    );
}
export default ExpenseDate;