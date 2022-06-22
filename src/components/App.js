import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className="page">

      <Header />
      <Main />
      <Footer />

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

    <div className="popup popup_profile">
        <div className="popup__container">
            <button className="popup__close-button" aria-label="Закрыть" type="button"></button>
            <div className="popup__content">
                <h3 className="popup__title">Редактировать профиль</h3>
                
                <form className="popup__form popup__profile-form" name="profile" noValidate>
                    
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

                    <button className="occupation-input-error popup__save-button popup__save-button_invalid" type="submit" aria-label="Сохранить">Сохранить</button>

                </form>
            </div>
        </div>
    </div>

    <div className="popup popup_cards">
        <div className="popup__container">
            <button className="popup__close-button" aria-label="Закрыть" type="button"></button>
            <div className="popup__content">
                <h3 className="popup__title">Новое место</h3>
                
                <form className="popup__form popup__cards-form" name="cards" noValidate>
                    
                    <input 
                    id="cardname-input"
                    className="popup__input popup__input_cardname" 
                    type="text" 
                    name="name"
                    //value="" 
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
                    //value="" 
                    placeholder="Ссылка на картинку" 
                    autoComplete="off"
                    required />
                    <span className="link-input-error popup__input-error"></span>

                    <button className="popup__save-button popup__save-button_invalid" type="submit" aria-label="Создать">Создать</button>

                </form>
            </div>
        </div>
    </div>

    <div className="popup popup_zoom">
        <div className="popup__container popup__container_zoom">
            <img className="popup__zoom-image" src="#" alt="#" />
            <h3 className="popup__title popup__title_zoom">#</h3>
            <button className="popup__close-button" aria-label="Закрыть" type="button"></button>
        </div>
    </div>

    <div className="popup popup_confirmation">
        <div className="popup__container">
            <button className="popup__close-button" aria-label="Закрыть" type="button"></button>
            <div className="popup__content">
                <h3 className="popup__title popup__title_confirmation">Вы уверены?</h3>
                <form className="popup__form" name="confirmation" noValidate>
                    <button className="popup__save-button" type="submit" aria-label="Да">Да</button>
                </form>
            </div>
        </div>
    </div>

    <div className="popup popup_avatar">
        <div className="popup__container">
            <button className="popup__close-button" aria-label="Закрыть" type="button"></button>
            <h3 className="popup__title popup__title_avatar">Обновить аватар</h3>
            <div className="popup__content">
                <form className="popup__form popup__avatar-form" name="avatar" noValidate>

                    <input 
                    id="avatar-input"
                    className="popup__input popup__input_avatar" 
                    type="url" 
                    name="avatar" 
                    //value="" 
                    placeholder="Ссылка на аватар" 
                    autoComplete="off"
                    required />
                    <span className="avatar-input-error popup__input-error"></span>

                    <button className="popup__save-button" type="submit" aria-label="Сохранить">Сохранить</button>
                </form>
            </div>
        </div>
    </div>
    </div>
  );
}

export default App;
