import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup";
import AddPlacePopup from "./AddPlacePopup";
import ImagePopup from "./ImagePopup";
import React, { useState, useEffect } from "react";
import api from "../utils/api.js";
import { CurrentUserContext } from "./contexts/CurrentUserContext";
import EditAvatarPopup from "./EditAvatarPopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setIsSelectedCard] = useState({});
  const [currentUser, setIsCurrentUser] = useState({});
  const [cards, setCards] = useState([]);


  const handleEditAvatarClick = () => setIsEditAvatarPopupOpen(true);
  const handleEditProfileClick = () => setIsEditProfilePopupOpen(true);
  const handleAddPlaceClick = () => setIsAddPlacePopupOpen(true);

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

  function handleUpdateUser(data) {
    api
      .editUserInfo(data)
      .then((userData) => {
        setIsCurrentUser(userData);
        closeAllPopups();
      })
      .catch((err) =>
        console.log(`Ошибка при редактировании данных пользователя: ${err}`)
      );
  }

  function handleUpdateAvatar(data) {
    api
      .editUserAvatar(data)
      .then((userData) => {
        setIsCurrentUser(userData);
        closeAllPopups();
      })
      .catch((err) =>
        console.log(`Ошибка при редактировании данных аватара: ${err}`)
      );
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api.changeCardLikeStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then((delCard) => {
      setCards((state) =>
        state.filter((c) => (c._id === card._id ? !delCard : c))
      );
    });
  }

  useEffect(() => {
    api
      .getInitialCardsData()
      .then((cardsArr) => {
        setCards(cardsArr);
      })
      .catch((err) =>
        console.log(
          `Ошибка при получении первоначальных данных карточек с сервера: ${err}`
        )
      );
  }, []);

  useEffect(() => {
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

  useEffect(() => {
    function handleEscClose(evt) {
      if (evt.key === "Escape") {
        closeAllPopups();
      }
    }
    document.addEventListener("keydown", handleEscClose);
    return () => document.removeEventListener("keydown", handleEscClose);
  }, []);

  useEffect(() => {
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
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />
        <ImagePopup
          card={selectedCard}
          isOpen={isImagePopupOpen}
          onClose={closeAllPopups}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        ></EditAvatarPopup>

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        ></EditProfilePopup>

        <AddPlacePopup
          name="cards"
          buttonText="Создать"
          titleText="Новое место"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >

        </AddPlacePopup>

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
