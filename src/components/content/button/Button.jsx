

function Button ({param}) {

    const ButtonRusClick = (name) => {
        console.log(param)
    };
    const ButtonEngClick = (name) => {
        console.log(2)
    };
    const ButtonAlreadySend = (name) => {
        console.log(3)
    };
    
    return (
        <td className="dropdown">
                <button className="dropbtn">Create mail</button>
            <div className="dropdown-content">
                <a href="mailto:&body=body?subject=subject"><div typeof="button" onClick={ButtonRusClick}>Rus</div></a>
                <a href="mailto:&body=body?subject=subject"><div typeof="button" onClick={ButtonEngClick}>Eng</div></a>
                <div typeof="button" onClick={ButtonAlreadySend}>already send</div>
            </div>
        </td>
    )

}
export default Button;