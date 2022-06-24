function Card(props) {

    function handleClick() {
        props.onCardClick(props.cardData);
    }

    return(
        <li className="cards__element">
            <div className="card">
                <img className="card__photo" src={props.cardData.link} alt={props.cardData.name} onClick={handleClick} />
                <button className="card__del" aria-label="Удалить карточку" type="button"></button> 
                <div className="card__caption-zone">
                    <h2 className="card__caption">{props.cardData.name}</h2>
                    <div className="card__like-zone">
                        <button className="card__like" aria-label="" type="button"></button>
                        <span className="card__like-counter">{props.cardData.likes.length}</span>
                </div>
            </div>
        </div>
    </li>
    );
}

export default Card;