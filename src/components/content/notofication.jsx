/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import './notification.css';
import axios from 'axios';
import Button from './button/Button';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DateInv from './button/DateInv';

function Notification() {


    const [data, setData] = useState([]);
    axios.defaults.withCredentials = true;
    
    useEffect(() => {
        axios.get((`https://localhost:7295/Invoice/GetInvoicesOfManager/managerGPN?managerGPN=${id}`)).then(res => {console.log(res); console.log(res); setData(res.data.data)})
    }, []);
    const {id} = useParams();
    console.log(data);
    var firsttable = 0;
    var secondtable = 0;

    return (
        <div className='card'>

            {data.map(el => {
                if (el.optionId === 0 && firsttable === 0) {
                    firsttable += 1;
                    return (
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
                                        <th>Date</th>
                                        <th>mail</th>
                                    </tr>
                                    {data.map(el => {
                                        if (el.optionId ===0){
                                            return(
                                                <tr className='tbody'>
                                                    <td>{el.inv}</td>
                                                    <td>{el.invoiceDate}</td>
                                                    <td>{el.clientCompany}</td>
                                                    <DateInv param={el.invoiceDate}/>
                                                    <Button param={el.email}/>
                                                </tr>
                                            )
                                        }
                                    })}
                                </table>
                            </div>
                        </div>
                    )
                }
            })}

{data.map(el => {
                if (el.optionId === 1 && secondtable === 0) {
                    secondtable +=1;
                    return (
                        <div className='notificationActive'>
                            <div className='table-header'>
                                <div className='name'>Overdue payments disable</div>
                            </div>
                            <div className='table'>
                                <table>
                                    <tr className='thead'>
                                        <th>invId</th>
                                        <th>invoiceDate</th>
                                        <th>clentCompany</th>
                                        <th>mail</th>
                                    </tr>
                                    {data.map(el => {
                                        if (el.optionId ===1){
                                            return(
                                                <tr className='tbody'>
                                                    <td>{el.invId}</td>
                                                    <td>{el.invoiceDate}</td>
                                                    <td>{el.clentCompany}</td>
                                                    <Button param={el.Name}/>
                                                </tr>
                                            )
                                        }
                                    })}
                                </table>
                            </div>
                        </div>
                    )
                }
            })}

        </div>
    );

}

export default Notification;