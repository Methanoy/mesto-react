import { useEffect } from "react";

export default function useEvent(handleClosePopup) {
  useEffect(() => {
    function handleEscClose(evt) {
      if (evt.key === "Escape") {
        handleClosePopup();
      }
    }
    document.addEventListener("keydown", handleEscClose);
    return () => document.removeEventListener("keydown", handleEscClose);
  });
}
