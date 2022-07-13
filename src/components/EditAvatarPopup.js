import { React, useEffect, useRef } from "react";
import PopupWithForm from "./PopupWithForm";
import useEvent from "../utils/hooks";

function EditAvatarPopup(props) {
  const avatarRef = useRef(null);

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  useEffect(() => {
    avatarRef.current.value = "";
  }, [props.isOpen]);

  /*
  useEffect(() => {
    function handleEscClose(evt) {
      if (evt.key === "Escape") {
        props.onClose();
      }
    }
    document.addEventListener("keydown", handleEscClose);
    return () => document.removeEventListener("keydown", handleEscClose);
  });
  */
 useEvent(props.onClose);
 
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
      name="avatar"
      buttonText={props.textOnSaveBtn}
      titleText="Обновить аватар"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        id="avatar-input"
        className="popup__input popup__input_avatar"
        type="url"
        name="avatar"
        placeholder="Ссылка на аватар"
        autoComplete="off"
        ref={avatarRef || ""}
        required
      />
      <span className="avatar-input-error popup__input-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
