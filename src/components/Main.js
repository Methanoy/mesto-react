import React from "react";
import Card from "./Card.js";
import api from "../utils/api.js";
import { CurrentUserContext } from "./contexts/CurrentUserContext";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [cards, setCards] = React.useState([]);

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

  React.useEffect(() => {
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

  return (
    <main className="content">
      <section className="profile">
        <button
          className="profile__avatar-button"
          aria-label="Редактировать аватар."
          onClick={props.onEditAvatar}
        >
          <img
            className="profile__avatar"
            src={currentUser.avatar}
            alt="Ваш аватар."
          />
        </button>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <p className="profile__occupation">{currentUser.about}</p>
          <button
            className="profile__edit-button"
            aria-label="Редактировать данные профиля."
            type="button"
            onClick={props.onEditProfile}
          ></button>
        </div>
        <button
          className="profile__add-button"
          aria-label="Добавить картинку."
          type="button"
          onClick={props.onAddPlace}
        ></button>
      </section>

      <section className="elements">
        <ul className="cards">
          {cards.map((element) => (
            <Card
              card={element}
              key={element._id}
              onCardClick={props.onCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
