import { React, useState, useEffect, useContext, useRef } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "./contexts/CurrentUserContext";

function EditAvatarPopup(props) {
  const currentUser = useContext(CurrentUserContext);
  const [avatar, setAvatar] = useState("");
  const avatarRef = useRef("");

  function handleChangeAvatar(evt) {
    setAvatar(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onUpdateAvatar({
      avatar,
    });
  }

  useEffect(() => {
    avatarRef.current.value = "";
  }, [props.isOpen]);

  useEffect(() => {
    setAvatar(currentUser.avatar);
  }, [currentUser]);

  return (
    <PopupWithForm
      name="avatar"
      buttonText={props.onSave}
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
        onChange={handleChangeAvatar}
        required
      />
      <span className="avatar-input-error popup__input-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
