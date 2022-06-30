import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import React from "react";
import api from "../utils/api.js";
import { CurrentUserContext } from "./contexts/CurrentUserContext";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setIsSelectedCard] = React.useState({});
  const [currentUser, setIsCurrentUser] = React.useState({});

  React.useEffect(() => {
    api
      .getInitialUserData()
      .then((userData) => {
        setIsCurrentUser(userData);
      })
      .catch((err) =>
        console.log(
          `Ошибка при получении первоначальных данных пользователя с сервера: ${err}`
        )
      );
  }, []);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };
  const handleCardClick = (card) => {
    setIsSelectedCard(card);
    setIsImagePopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false) ||
      setIsEditProfilePopupOpen(false) ||
      setIsAddPlacePopupOpen(false) ||
      setIsImagePopupOpen(false);
  };

  React.useEffect(() => {
    function handleEscClose(evt) {
      if (evt.key === "Escape") {
        closeAllPopups();
      }
    }
    document.addEventListener("keydown", handleEscClose);
    return () => document.removeEventListener("keydown", handleEscClose);
  }, []);

  React.useEffect(() => {
    function handleOutsideClickClose(evt) {
      if (evt.target.classList.contains("popup_opened")) {
        closeAllPopups();
      }
    }
    document.addEventListener("mousedown", handleOutsideClickClose);
    return () =>
      document.removeEventListener("mousedown", handleOutsideClickClose);
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <ImagePopup
          card={selectedCard}
          isOpen={isImagePopupOpen}
          onClose={closeAllPopups}
        />
        <PopupWithForm
          name="avatar"
          buttonText="Сохранить"
          titleText="Обновить аватар"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          children={
            <>
              <input
                id="avatar-input"
                className="popup__input popup__input_avatar"
                type="url"
                name="avatar"
                placeholder="Ссылка на аватар"
                autoComplete="off"
                required
              />
              <span className="avatar-input-error popup__input-error"></span>
            </>
          }
        />

        <PopupWithForm
          name="profile"
          buttonText="Сохранить"
          titleText="Редкатировать профиль"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            id="name-input"
            className="popup__input popup__input_name"
            type="text"
            placeholder="ФИО"
            name="name"
            minLength="2"
            maxLength="40"
            autoComplete="off"
            required
          />
          <span className="name-input-error popup__input-error"></span>

          <input
            id="occupation-input"
            className="popup__input popup__input_occupation"
            type="text"
            placeholder="Профессия"
            name="about"
            minLength="2"
            maxLength="200"
            autoComplete="off"
            required
          />
          <span className="occupation-input-error popup__input-error"></span>
        </PopupWithForm>

        <PopupWithForm
          name="cards"
          buttonText="Создать"
          titleText="Новое место"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            id="cardname-input"
            className="popup__input popup__input_cardname"
            type="text"
            name="name"
            placeholder="Название"
            minLength="2"
            maxLength="30"
            autoComplete="off"
            required
          />
          <span className="cardname-input-error popup__input-error"></span>

          <input
            id="link-input"
            className="popup__input popup__input_link"
            type="url"
            name="link"
            placeholder="Ссылка на картинку"
            autoComplete="off"
            required
          />
          <span className="link-input-error popup__input-error"></span>
        </PopupWithForm>

        <PopupWithForm
          name="confirmation"
          buttonText="Да"
          titleText="Вы уверены?"
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
