import profileAvatar from '../images/profile_avatar.jpg';

function Main(props) {

    return (

        <main className="content">

        <section className="profile">
            <button className="profile__avatar-button" aria-label="Редактировать аватар" onClick={props.onEditAvatar}>
                <img className="profile__avatar" src={profileAvatar} alt="Ваш аватар." />
            </button>
            <div className="profile__info">
                <h1 className="profile__name">Загрузка...</h1>
                <p className="profile__occupation"></p>
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