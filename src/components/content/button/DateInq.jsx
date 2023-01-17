import '../notification.css';
import { useState } from "react";

function DateInq (param) {

    const [days, setDays] = useState(param.param);

    function SetDays(event) {
        setDays(event.target.value);
    }
    const onClick = () => console.log(days);

    return (
        <>
        <td className="days"><input type='number' value={days} onChange={SetDays}></input></td>
        <td ><button className='savebutton' onClick={onClick}>Save</button></td>   
        </>
    )

}
export default DateInq;