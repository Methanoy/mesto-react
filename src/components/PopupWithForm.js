function PopupWithForm(props) {
    
    return (
        <div className={`popup popup_${props.name}`}>
            <div className="popup__container">
                <button className="popup__close-button" aria-label="Закрыть" type="button"></button>
                <div className="popup__content">
                    <h3 className={`popup__title popup__title_${props.name}`}>{props.titleText}</h3>
                    <form className="popup__form" name={props.name} noValidate>
                        {props.children}
                        <button className="popup__save-button" type="submit" aria-label={props.buttonText}>{props.buttonText}</button>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default PopupWithForm;