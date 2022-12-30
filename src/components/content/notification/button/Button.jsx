

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
        <td class="dropdown">
                <button class="dropbtn">Create mail</button>
            <div class="dropdown-content">
                <div typeof="button" onClick={ButtonRusClick}>Ссылка 1</div>
                <div typeof="button" onClick={ButtonEngClick}>Ссылка 2</div>
                <div typeof="button" onClick={ButtonAlreadySend}>Ссылка 3</div>
            </div>
        </td>
    )

}
export default Button;