import React, { useState, useEffect, useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "./contexts/CurrentUserContext";

function AddPlacePopup(props) {
  const currentUser = useContext(CurrentUserContext);
  const [cards, setCards] = useState("");
  const [description, setDescription] = useState("");

  function handleAddCard(e) {
    setCards(e.target.value);
  }

  function handleChangeDescription(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onUpdateUser({
      name,
      about: description,
    });
  }

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  return (
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
  );
}

export default AddPlacePopupPopup;
