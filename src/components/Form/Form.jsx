import {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectorBookings } from "store/selectors/selectors";
import { addBooks } from "store/sliceBookings/sliceBookings";
import css from './Form.module.css'

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [comment, setComment] = useState('');
    const bookings = useSelector(selectorBookings);
    const distpatch = useDispatch();
    const handlerSubmit = (evt) => {
setName('');
setEmail('');
setDate('');
setComment('');
const result = bookings?.find(book => book.date === date);
if(!result) {
    const book = {
        name, 
        email,
        date,
        comment
    };
distpatch(addBooks(book));
alert(`You have successfully made your reservation on ${date}`);
}else {
    return alert(`${date} is already busy`);
}


    }
    const handlerChange = (evt) => {
        const inp = evt.target;
        switch (inp.name) {
            case 'name':
              setName(inp.value);
              break;
            case 'email':
              setEmail(inp.value);
              break;
              case 'date':
                setDate(inp.value);
                break;
                case 'comment':
                    setComment(inp.value);
                    break;
            default:
              return;
          }
    }
    return <form className={css.form} onSubmit={handlerSubmit}>
        <div>
        <h2 className={css.title}>Book your campervan now</h2>
        <p className={css.text}>Stay connected! We are always ready to help you.</p>
        </div>
        <div className={css.contForm}>
        <input required className={css.input} value={name} name='name' onChange={handlerChange} placeholder="Name" pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" type="text" />
        <input required className={css.input} value={email} name='email' onChange={handlerChange} placeholder="Email" type='email'/>
        <input required className={css.input} value={date} name='date' onChange={handlerChange} placeholder="Booking date" type='date'/>
        <input className={css.inputComment} value={comment} name='comment' onChange={handlerChange} placeholder="Comment" type="text" />
        </div>
        
        <button className={css.btn} type="submit">Send</button>
    </form>
}
export default Form;