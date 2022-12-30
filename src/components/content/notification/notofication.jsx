import './notification.css';
import axios from 'axios';
import Button from './button/Button';
import { useState, useEffect } from 'react';

function Notification() {


    const [data, setData] = useState([]);
    axios.defaults.withCredentials = true

    useEffect(() => {
        axios.get(('http://10.72.193.77:50008/Invoice/GetInvoicesOfManager/managerGPN?managerGPN=BY011700004%20')).then(res => {console.log(res); setData(res.data.data)})
    }, []);

    console.log("вывод даты")
    console.log(data);
    return (
        <div className='card'>
            <div className='notificationActive'>
                <div className='table-header'>
                    <div className='name'>Overdue payments</div>
                </div>
                <div className='table'>
                    <table>
                        <tr className='thead'>
                            <th>invId</th>
                            <th>invoiceDate</th>
                            <th>clentCompany</th>
                            <th>mail</th>
                        </tr>
                    {data.map(el => (
                        <tr className='tbody'>
                            <td>{el.invId}</td>
                            <td>{el.invoiceDate}</td>
                            <td>{el.clentCompany}</td>
                            <Button param={el.Name}/>
                        </tr>
                    ))}
                    </table>
                </div>
            </div>
            {/* <div className='notificationDisable'>
                <div className='table-header'>
                    <div className='name'>Overdue payments</div>
                </div>
                <div className='table'>
                    <table>
                        <tr className='thead'>
                            <th>Name</th>
                            <th>EID</th>
                            <th>date</th>
                            <th>mail</th>
                        </tr>
                    {post.map(el => { if (el.param ===1) {
                        {console.log(el.param)}
                        (<tr className='tbody'>
                            <td>{el.Name}</td>
                            <td>{el.EID}</td>
                            <td>{el.date}</td>
                            <Button param={el.Name}/>
                        </tr>)
                        
                    }
                    })}
                    </table>
                </div>
            </div> */}
        </div>
    );

}

export default Notification;