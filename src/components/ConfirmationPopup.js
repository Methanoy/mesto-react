import { React, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function ConfirmationPopup({
  deleteCardInfo: { isOpen, card },
  onClose,
  onDelete,
  textOnDeleteBtn,
}) {
  function handleSubmit(evt) {
    evt.preventDefault();
    onDelete(card);
  }

  useEffect(() => {
    function handleEscClose(evt) {
      if (evt.key === "Escape") {
        onClose();
      }
    }
    document.addEventListener("keydown", handleEscClose);
    return () => document.removeEventListener("keydown", handleEscClose);
  });

  useEffect(() => {
    function handleOutsideClickClose(evt) {
      if (evt.target.classList.contains("popup_opened")) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleOutsideClickClose);
    return () =>
      document.removeEventListener("mousedown", handleOutsideClickClose);
  });

  return (
    <PopupWithForm
      name="confirmation"
      buttonText={textOnDeleteBtn}
      titleText="Вы уверены?"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    ></PopupWithForm>
  );
}

export default ConfirmationPopup;
