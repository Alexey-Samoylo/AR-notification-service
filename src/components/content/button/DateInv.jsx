import { useState } from "react";
import '../notification.css';

function DateInv (param) {

    const [date, setDate] = useState(param.param);

    function SetDate(event) {
        setDate(event.target.value);
    }
    const onClick = () => console.log(date);
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          console.log(date)
        }
      };
      
    return (
        <>
        <td className="date"><input type='date' value={date} onChange={SetDate} onKeyDown={handleKeyDown}></input></td>
        <td ><button className='savebutton' onClick={onClick}>Save</button></td>
        </>
    )

}
export default DateInv;