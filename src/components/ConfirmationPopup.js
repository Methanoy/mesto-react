import { React } from "react";
import PopupWithForm from "./PopupWithForm";
import { useEscKeydown, useOutsideClick } from "../utils/hooks";

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

  useEscKeydown(onClose);
  useOutsideClick(onClose);

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
