import profileAvatar from '../images/profile_avatar.jpg';

function Main() {

    function handleEditAvatarClick() {
        const editPopup = document.querySelector('.popup_avatar');
        editPopup.classList.add('popup_opened');

        const editButton = document.querySelector('.profile__avatar-button');
        editButton.addEventListener('click', handleEditAvatarClick);
    }

    function handleEditProfileClick() {
        const editPopup = document.querySelector('.popup_profile');
        editPopup.classList.add('popup_opened');

        const editButton = document.querySelector('.profile__edit-button');
        editButton.addEventListener('click', handleEditProfileClick);
    }

    function handleAddPlaceClick() {
        const editPopup = document.querySelector('.popup_cards');
        editPopup.classList.add('popup_opened');

        const editButton = document.querySelector('.profile__add-button');
        editButton.addEventListener('click', handleAddPlaceClick);
    }

    return (

        <main className="content">

        <section className="profile">
            <button className="profile__avatar-button" aria-label="Редактировать аватар" onClick={handleEditAvatarClick}>
                <img className="profile__avatar" src={profileAvatar} alt="Ваш аватар." />
            </button>
            <div className="profile__info">
                <h1 className="profile__name">Загрузка...</h1>
                <p className="profile__occupation"></p>
                <button className="profile__edit-button" aria-label="Редактировать данные профиля" type="button" onClick={handleEditProfileClick}></button>
            </div>
            <button className="profile__add-button" aria-label="Добавить картинку" type="button" onClick={handleAddPlaceClick}></button>
        </section>

        <section className="elements">

            <ul className="cards"></ul>
            
        </section>

    </main>
    );
}

export default Main;