import { React, useState, useEffect, useContext, useRef } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "./contexts/CurrentUserContext";

function AddPlacePopup(props) {
  const currentUser = useContext(CurrentUserContext);
  const [link, setLink] = useState("");
  const [caption, setCaption] = useState("");
  const linkRef = useRef("");
  const captionRef = useRef("");

  function handleAddLink(evt) {
    setLink(evt.target.value);
  }

  function handleAddCaption(evt) {
    setCaption(evt.target.value);
  }

  useEffect(() => {
    captionRef.current.value = "";
    linkRef.current.value = "";
  }, [props.isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onAddPlace({
      name: caption,
      link,
    });
  }

  useEffect(() => {
    setCaption(currentUser.caption);
    setLink(currentUser.link);
  }, [currentUser]);

  return (
    <PopupWithForm
      name="cards"
      buttonText={props.onCreate}
      titleText="Новое место"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        id="cardname-input"
        className="popup__input popup__input_cardname"
        type="text"
        name="caption"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        autoComplete="off"
        onChange={handleAddCaption}
        ref={captionRef || ""}
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
        onChange={handleAddLink}
        ref={linkRef || ""}
        required
      />
      <span className="link-input-error popup__input-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
