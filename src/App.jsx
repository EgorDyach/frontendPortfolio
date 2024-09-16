import { useState } from 'react';
import './App.css'
import img1 from './assets/img1.png'
import img2 from './assets/img2.png'
import img3 from './assets/img3.jpg'
import img4 from './assets/img4.jpg'
import img5 from './assets/img5.png'
import img6 from './assets/img6.png'
import img7 from './assets/img7.png'
import img8 from './assets/img8.png'
import img9 from './assets/img9.jpg'
import img10 from './assets/img10.png'
import img11 from './assets/img11.png'
import img12 from './assets/img12.png'
import img13 from './assets/img13.png'
import img14 from './assets/img14.png'
const content = [
  { title: "Интернет-магазин по продаже тг-роботов и алгоритмов", link: "https://main--jihu.netlify.app/", img: "https://sun9-14.userapi.com/impg/xOxSbEVSXjA0PybXJ3BKl6n0QFCClA9n1e8TJA/a_ngZaMFMYc.jpg?size=2560x1473&quality=96&sign=446ea329d0784a7e98cd76c4eef95f15&type=album", descr: "Реализовал интернет магазин по продаже и просмотру тг-роботов, создал несколько форм для добавления, сделал страницу 'О нас', реализовал корзину. В разработке оплата через UMoney." },
  { title: "Тг-Веб-приложение, мини-игра на случайного победителя", link: "", img: "https://sun9-78.userapi.com/impg/P_4UCwt6Zym51rRr1DJzaTOS3h7mmcvX3U1whw/u3RDJxz7IEU.jpg?size=998x2160&quality=95&sign=622b5b4efe6169e9bda612109dc108d0&type=album", descr: "Создал мини-игру для тг-веб-апп, в которой есть несколько комнат, и пользователь присоединяется к одной из них, далее через лонг-пуллинг ожидает заполнения комнаты и в конце запускается анимация на выбор победителя." },
  { title: "Тг-Веб-приложение, игра на запоминание карточек", link: "https://t.me/memory_match_dev_bot", img: "https://sun9-55.userapi.com/impg/CnOQfUy89e83RHk7LasfLhRxqjfk_aMcDonB0Q/4nbp_el93PI.jpg?size=998x2160&quality=95&sign=85c7b8f31abb9fec10ee5487f92245a6&type=album", descr: "В данном проекте я создал tg-web-app игру на запоминание карточеку с помощью react и redux. Авторизация происходит через куки, есть основное меню, карта игры, магазин и задания. Сама игра реализована как чисто на клиенте(1vs1), так и с серверным взаимодействие. Реализованы несколько вариантов стилей страниц в зависимости от уровня." },
  { title: "Лендинг для компании по банкротству", link: "https://bankrot-anicko.ru/", img: "https://sun9-72.userapi.com/impg/-ZX_Xb5tquIXrJ0c2ucH0jsnldQExlLSSoSZxg/zVrtZPtCpbU.jpg?size=2560x1474&quality=96&sign=7569eec834894d3ece78ce4fc74fa78c&type=album", descr: "Создал лендинг на React, включающий роутинг, добавил табсы, реализовал несколько страниц, добавил модалки для кейсов, сделал форму для отправки данных, добавил блок контактов с картой." },
  { title: "CRM-система для сбора данных клиентов", link: "https://github.com/EgorDyach/crm", img: img1, descr: `В рамках данного проекта я разработал CRM-систему. Проект реализован на ванильном JS, Html, css. Создал добавление клиентов, взаимодействие с бэкендом, поиск клиентов, возможность редактировать и удалять. Сделал адаптив. ` },
  { title: "Разработка чат-системы на react и firebase", link: "https://radiant-rugelach-51e2ec.netlify.app/", img: img7, descr: "Создал чат-систему с регистрацией, добавил поиск людей и разработал онлайн взаимодействие между людьми." },
  { title: "Разработка приложения по созданию активностей", link: "https://radiant-gumption-a710ce.netlify.app/", img: img9, descr: "В рамках данного проекта я разработал проект, с помощью React и Firebase. Добавил регистрацию и авторизацию, создал модальные окна, позволяющие создать активность, разработал вывод всех активностей, возможность бронировать место и вывод всех записавшихся на твое мероприятие." },
  { title: "Разработка frontend-части для сервиса по созданию статей в рамках хакатона", link: "https://github.com/EgorDyach/hackathon-frontend", img: img2, descr: "Разработал с помощью React Wysiwig для написания статей, создал отправку данных на бэк, добавил вывод на отедльные страницы отдельные статьи." },
  { title: "Музыкальное веб-приложение", link: "https://dulcet-sable-efe569.netlify.app/", img: img5, descr: "Разработал веб-приложение при помощи React (без взаимодействия с бэкендом), добавил вывод и поиск песен, создал плеер." },
  { title: "Лендинг для магазина одежды в рамках хакатона", link: "https://lovely-donut-53e8e1.netlify.app/", img: img6, descr: "Создал лендинг на React, включающий слайдер (slider.js), вывод товаров, возможность оставить заявку, добавил яндекс карту. " },
  { title: "Лендинг для строительной компании", link: "https://loquacious-melba-27b262.netlify.app/", img: img8, descr: "Разработал лендинг на ванильном html, css, js. Добавил слайдер (Slider.js), разработал табсы (переключение между данными), добавил блок часто задаваемых вопросов с помощью аккордеона." },
  { title: "Лендинг для компании по экологическим услугам", link: "https://ecoservices.netlify.app/", img: img3, descr: "Создал лендинг на React, включающий роутинг, добавил табсы, для переключения между услугами, сделал форму для отправки данных, добавил блок контактов с картой. " },
  { title: "Лендинг для художественной галереи", link: "https://velvety-cupcake-458532.netlify.app/", img: img10, descr: "Разработал лендинг, имеющий слайдер, реализовал адаптивную верстку, добавил модальное окно, добавил выбор художника и вывод инфо о нем." },
  { title: "Лендинг для компании по предоставлению психологических услуг", link: "https://успокойся.рус", img: img4, descr: "Создал многостраничный лендинг, добавил несколько анимаций, разработал тест для определения уровня счастья, создал отправку формы данных. " },
  { title: "Лендинг для школьного музея", link: "https://schoolmuseam.netlify.app/", img: img12, descr: "Создал лендинг, добавил слайдер-галерею, слайдер-анекеты, реализовал вывод с помощью табсов данных о предметах, сделал вывод новостей и возможность вывести несколько новостей. Добавил карту и контакты. " },
  { title: "Лендинг для абитуриентов", link: "https://postupash.netlify.app/", img: img11, descr: "Создал лендинг, добавил слайдер, добавил карту страны и возможность открывать модальные окна и анкеты абитуриентов, реализовал генератор анекдотов." },
  { title: "Лендинг для сайта по решению мат. задач", link: "https://math23.netlify.app/", img: img13, descr: "Создал лендинг, добавил слайдер, сделал несколько карточек, с анимацией вывода уровня знаний, добавил аккордеон с вопросами." },

];


function App() {
  const [numOfCard, setNumOfCard] = useState(null);
  return (
    <>
      <div>

        <h2 className='title'>
          Мои работы
        </h2>
        <div className='container' style={{ display: "flex", flexWrap: "wrap" }}>
          {content.map(e => {
            return (
              <div className={content.indexOf(e) === numOfCard ? 'item itemActive' : 'item'} key={content.indexOf(e)} onMouseOver={() => {
                setNumOfCard(content.indexOf(e))
              }} onMouseLeave={() => setNumOfCard(null)}>
                <a target="_blank" href={e.link} className='item__text'>{e.title}</a>
                <img className='item__img' src={e.img} alt="" />
                <p className='item__descr'>
                  {e.descr}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App
