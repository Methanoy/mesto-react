import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import React from 'react';

function App() {

  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);

  const handleEditAvatarClick = () => { setEditAvatarPopupOpen(true) };
  const handleEditProfileClick = () => { setEditProfilePopupOpen(true) };
  const handleAddPlaceClick = () => { setAddPlacePopupOpen(true) };

  return (
    <div className="page">

      <Header />
      <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} />
      <Footer />
      <ImagePopup />
      <PopupWithForm name="avatar" buttonText="Сохранить" titleText="Обновить аватар" isOpen={isEditAvatarPopupOpen} children={
        <>
          <input 
          id="avatar-input"
          className="popup__input popup__input_avatar" 
          type="url" 
          name="avatar" 
          placeholder="Ссылка на аватар" 
          autoComplete="off"
          required />
          <span className="avatar-input-error popup__input-error"></span>
        </>
      } />

      <PopupWithForm name="profile" buttonText="Сохранить" titleText="Редкатировать профиль" isOpen={isEditProfilePopupOpen} children={
        <>
          <input
          id="name-input" 
          className="popup__input popup__input_name" 
          type="text" 
          name="name"
          minLength="2"
          maxLength="40"
          autoComplete="off"
          required />
          <span className="name-input-error popup__input-error"></span>

          <input
          id="occupation-input" 
          className="popup__input popup__input_occupation" 
          type="text" 
          name="about"
          minLength="2"
          maxLength="200"
          autoComplete="off"
          required />
          <span className="occupation-input-error popup__input-error"></span>
        </>
      } />

      <PopupWithForm name="cards" buttonText="Создать" titleText="Новое место" isOpen={isAddPlacePopupOpen} children={
        <>
          <input 
          id="cardname-input"
          className="popup__input popup__input_cardname" 
          type="text" 
          name="name"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          autoComplete="off"
          required />
          <span className="cardname-input-error popup__input-error"></span>

          <input 
          id="link-input"
          className="popup__input popup__input_link" 
          type="url" 
          name="link" 
          placeholder="Ссылка на картинку" 
          autoComplete="off"
          required />
          <span className="link-input-error popup__input-error"></span>
        </>
      } />

      <PopupWithForm name="confirmation" buttonText="Да" titleText="Вы уверены?" />

      <template id="cards-template">
        <li className="cards__element">
            <div className="card">
                <img className="card__photo" src="#" alt="#" />
                <button className="card__del" aria-label="Удалить карточку" type="button"></button> 
                <div className="card__caption-zone">
                    <h2 className="card__caption">#</h2>
                    <div className="card__like-zone">
                        <button className="card__like" aria-label="" type="button"></button>
                        <span className="card__like-counter">0</span>
                    </div>
                </div>
            </div>
        </li>
    </template>

    </div>
  );
}

export default App;
