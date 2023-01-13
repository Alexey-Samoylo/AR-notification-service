import './notification.css';
import { useState } from 'react';
// import { useEffect } from 'react';

function PaymentInquiry() {

    const [GPN, setGPN] = useState();
    const [InvID, setInvID] = useState();
    const [ClientID, setClientID] = useState();
    const [ClientName, setClientName] = useState();

    function SetGPN(event) {
        setGPN(event.target.value);
    }
    function SetInvID(event) {
        setInvID(event.target.value);
    }
    function SetClientID(event) {
        setClientID(event.target.value);
    }
    function SetClientName(event) {
        setClientName(event.target.value);
    }

    return (
        <div className="card">
            <div className='searchline'>
                <div>GPN</div>
                <div><input placeholder='GPN' onChange={SetGPN}></input></div>
            </div>
            <div className='searchline'>
                <div>InvID</div>
                <div><input placeholder='InvID' onChange={SetInvID}></input></div>
            </div>
            <div className='searchline'>
                <div>ClientID</div>
                <div><input placeholder='ClientID' onChange={SetClientID}></input></div>
            </div>
            <div className='searchline'>
                <div>ClientName</div>
                <div><input placeholder='ClientName' onChange={SetClientName}></input></div>
            </div>
        </div>
    );

  }
  
  export default PaymentInquiry;
  