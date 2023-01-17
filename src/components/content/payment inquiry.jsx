/* eslint-disable no-unused-vars */
import './notification.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import DateInq from './button/DateInq';

function PaymentInquiry() {

    axios.defaults.withCredentials = true;


    const [allInv, setAllInv] = useState([])
    const [invID, setInvID] = useState();
    const [clientName, setClientName] = useState();
    const [pageNumber, setPageNumber] = useState(5);
    const [pageSize, setPageSize] = useState(50);
    const [totalPage, setTotalPage] = useState(53);

    function SetInvID(event) {
        setInvID(event.target.value);
    }
    function SetClientName(event) {
        setClientName(event.target.value);
    }

    function SetPageSize () {
        const SelectPageSize = (event) => setPageSize(event.target.value);
        
        return (
            <select onChange={SelectPageSize} value={pageSize}>
                <option>10</option>
                <option>25</option>
                <option>50</option>
            </select>
        )
    };

    function Prolangation () {
        function Prev () {
            const SetPrev = () => {
                if (pageNumber > 1) {
                    setPageNumber(pageNumber-1)
                }
            }
            return (
                <div typeof='button' onClick={SetPrev}>Prev</div>
            )
        };
        function First () {
            const SetFirst = () => setPageNumber(1);
            if (pageNumber === 1) {
                return (
                    <div>..</div>
                )
            } else {
                return (
                    <div typeof='button' onClick={SetFirst}>1</div>
                )
            }
        };
        function PrevNumber () {
            const SetPrev = () => {
                if (pageNumber > 1) {
                    setPageNumber(pageNumber-1)
                }
            }
            if (pageNumber === 2 || pageNumber ===1) {
                return (
                    <div>..</div>
                )
            } else {
                return (
                    <div typeof='button' onClick={SetPrev}>{pageNumber-1}</div>
                )
            }
        };
        function CurrentPage () {
            return (
                <div>{pageNumber}</div>
            )
        };
        function NextNumber () {
            const SetNext = () => {
                if (pageNumber < totalPage) {
                    setPageNumber(pageNumber+1)
                }
            }
            if (pageNumber === totalPage || pageNumber === totalPage-1) {
                return (
                    <div>..</div>
                )
            } else {
                return (
                    <div typeof='button' onClick={SetNext}>{pageNumber+1}</div>
                )
            }
        };
        function Last () {
            const SetLast = () => setPageNumber(totalPage);
            if (pageNumber === totalPage) {
                return (
                    <div>..</div>
                )
            } else {
                return (
                    <div typeof='button' onClick={SetLast}>{totalPage}</div>
                )
            }
        };
        function Next () {
            const SetNext = () => {
                if (pageNumber < totalPage) {
                    setPageNumber(pageNumber+1)
                }
            }
            return (
                <div typeof='button' onClick={SetNext}>Next</div>
            )
        };
        return (
            <div className='plagination'>
                <Prev />
                <First />
                <PrevNumber />
                <CurrentPage />
                <NextNumber />
                <Last />
                <Next/>
            </div>
        )
    };
    useEffect (() => {
        if (clientName === undefined) {
            setClientName('%20')
        };
        if (invID === undefined) {
            setInvID('%20')
        };
    }, [clientName, invID]);
    // useEffect (() => {
    //     if (invID === undefined) {
    //         setInvID('%20')
    //     }
    // }, [invID]);

    useEffect(() => {
        axios.get((`https://localhost:7295/Invoice/GetAllInvoices?SearchByClientNameTerm=${clientName}&SearchByInvoiceNumberTerm=${invID}&PageNumber=${pageNumber}&PageSize=${pageSize}`)).then(res => { console.log(res); setAllInv(res.data.data) })
    }, [clientName, invID ,pageNumber, pageSize]);
     console.log(allInv)
    return (
        <div className="card">
            <div className='searchline'>
                <div>Invice ID</div>
                <div><input placeholder='Invice ID' onChange={SetInvID}></input></div>
            </div>
            <div className='searchline'>
                <div>ClientName</div>
                <div><input placeholder='ClientName' onChange={SetClientName}></input></div>
            </div>
            <SetPageSize />
            <Prolangation />
            <div className='notificationActive'>
                <div className='table-header'>
                    <div className='name'>All Invoises</div>
                </div>
                <div className='table'>
                    <table>
                        <tr className='thead'>
                            <th>invId</th>
                            <th>invoiceDate</th>
                            <th>clentCompany</th>
                            <th>Days Amount</th>
                        </tr>
                        {allInv.map(el => (
                            <tr className='tbody'>
                                <td>{el.inv}</td>
                                <td>{el.invoiceDate}</td>
                                <td>{el.clientCompany}</td>
                                <DateInq param={el.daysAmount}/>
                            </tr>
                        ))}
                    </table>
                </div>
            </div>

        </div>
    );

}

export default PaymentInquiry;
