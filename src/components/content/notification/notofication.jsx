/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import './notification.css';
import axios from 'axios';
import Button from './button/Button';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Notification() {


    const [data, setData] = useState([]);
    axios.defaults.withCredentials = true

    useEffect(() => {
        axios.get((`http://10.72.193.77:50008/Invoice/GetInvoicesOfManager/managerGPN?managerGPN=${id}%20`)).then(res => {console.log(res); setData(res.data.data)})
    }, []);
    const {id} = useParams();
    console.log(id)
    console.log("вывод даты")
    console.log(data);
    return (
        <div className='card'>

            {data.map(el => {
                if (el.optionId === 0) {
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
                                        <th>mail</th>
                                    </tr>
                                    {data.map(el => {
                                        if (el.optionId ===0){
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

{data.map(el => {
                if (el.optionId === 0) {
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