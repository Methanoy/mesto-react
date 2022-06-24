import profileAvatar from '../images/profile_avatar.jpg';
import api from '../utils/api.js';
import React from 'react';

function Main(props) {
    const [userName, setUserName] = React.useState('Загрузка...');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState({profileAvatar});

    React.useEffect(() => {
        api.getInitialUserData()
            .then(userData => {
                setUserAvatar(userData.avatar);
                setUserName(userData.name);
                setUserDescription(userData.about);
        })
        .catch(err => console.log(`Ошибка при получении первоначальных данных с сервера: ${err}`))
    });

    return (

        <main className="content">

        <section className="profile">
            <button className="profile__avatar-button" aria-label="Редактировать аватар" onClick={props.onEditAvatar}>
                <img className="profile__avatar" src={userAvatar} alt="Ваш аватар." />
            </button>
            <div className="profile__info">
                <h1 className="profile__name">{userName}</h1>
                <p className="profile__occupation">{userDescription}</p>
                <button className="profile__edit-button" aria-label="Редактировать данные профиля" type="button" onClick={props.onEditProfile}></button>
            </div>
            <button className="profile__add-button" aria-label="Добавить картинку" type="button" onClick={props.onAddPlace}></button>
        </section>

        <section className="elements">

            <ul className="cards"></ul>
            
        </section>

    </main>
    );
}

export default Main;