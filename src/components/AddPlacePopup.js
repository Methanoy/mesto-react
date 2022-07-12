import { React, useEffect, useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const linkRef = useRef(null);
  const captionRef = useRef(null);

  useEffect(() => {
    captionRef.current.value = "";
    linkRef.current.value = "";
  }, [props.isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onAddPlace({
      name: captionRef.current.value,
      link: linkRef.current.value,
    });
  }

  useEffect(() => {
    function handleEscClose(evt) {
      if (evt.key === "Escape") {
        props.onClose();
      }
    }
    document.addEventListener("keydown", handleEscClose);
    return () => document.removeEventListener("keydown", handleEscClose);
  });

  useEffect(() => {
    function handleOutsideClickClose(evt) {
      if (evt.target.classList.contains("popup_opened")) {
        props.onClose();
      }
    }
    document.addEventListener("mousedown", handleOutsideClickClose);
    return () =>
      document.removeEventListener("mousedown", handleOutsideClickClose);
  });

  return (
    <PopupWithForm
      name="cards"
      buttonText={props.textOnCreateBtn}
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
        ref={linkRef || ""}
        required
      />
      <span className="link-input-error popup__input-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
