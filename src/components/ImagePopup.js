function ImagePopup() {
    
    return(
        <div className="popup popup_zoom">
        <div className="popup__container popup__container_zoom">
            <img className="popup__zoom-image" src="#" alt="#" />
            <h3 className="popup__title popup__title_zoom">#</h3>
            <button className="popup__close-button" aria-label="Закрыть" type="button"></button>
        </div>
    </div>
    );
}

export default ImagePopup;