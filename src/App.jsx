import { useState } from 'react';
import './App.css'
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'
import img4 from './assets/img4.jpg'
import img5 from './assets/img5.jpg'
import img6 from './assets/img6.jpg'
import img7 from './assets/img7.jpg'
import img8 from './assets/img8.jpg'
import img9 from './assets/img9.jpg'
import img10 from './assets/img10.jpg'
const content = [
  { title: "Дизайн лендинга для сервиса по поиску единомышленников", link: "https://www.figma.com/file/E4DTM0AooeogVryjqKnXqu/LikeMind-Landing?type=design&node-id=0%3A1&mode=design&t=eEtBemElrXK3nDlM-1", img: img2, descr: `В рамках данного проекта я разработал дизайн для сервиса по поиску единомышленников под названием "LikeMind". Отрисовал элементы фирменного стиля и использовал их в дизайне. Создал несколько тем и создал адаптивный дизайн для 3 разрешений.` },
  { title: "Дизайн лендинга для компании по предоставлению экологических услуг", link: "https://www.figma.com/file/RMhXPAISua54XzXTDtgSrj/Eco-Landing?type=design&node-id=0%3A1&mode=design&t=dVir9bC44IYlF4ND-1", img: img3, descr: "В рамках данного проекта я разработал дизайн для главной страницы сайта компании по предоставлению экологических услуг. Провёл бриф с заказчиком и выявил его пожелания и предпочтения." },
  { title: "Дизайн лендинга для проекта по представлению психологических услуг", link: "https://www.figma.com/file/wTfv395lZ8V6IfKoKUXlqk/%D0%A3%D1%81%D0%BF%D0%BE%D0%BA%D0%BE%D0%B9%D1%81%D1%8F.%D1%80%D1%83%D1%81-%D0%BB%D0%B5%D0%BD%D0%B4%D0%B8%D0%BD%D0%B3?type=design&node-id=444%3A47&mode=design&t=Uu7zj76Rml9ibPSg-1", img: img4, descr: "По итогам данного проекта я разработал дизайн лендинга для компании, отрисовал элементы фирменного стиля и применил их в проекте. После изменения направления компании, по просьбе заказчика, отрисовал дизайн для сайта в новом стиле. Также мною был разработан дизайн для сертификата и адаптив под мобильные устройства." },
  { title: "Дизайн лендинга для сервиса предназначенного для созвонов, конференций и т.д.", link: "https://www.figma.com/file/lYUDvQGJgjDo1mqb0aDDt4/Meeting-%D0%BB%D0%B5%D0%BD%D0%B4%D0%B8%D0%BD%D0%B3?type=design&node-id=0%3A1&mode=design&t=ZKcAffGCm4rCYPnq-1", img: img5, descr: "В этом проекте я разработал дизайн лендинга для сервиса по осуществлению групповых звонков, конференций и т.д. Мною были разработаны элементы фирменного стиля и применены в дизайне." },
  { title: " Разработка фирменного стиля для компании по предоставлению психологических услуг", link: "https://drive.google.com/drive/folders/1Klq1wg-r2LOKmwEmSfSp_CBILsmgkYMo?usp=sharing", img: img6, descr: "В рамках данного проекта я разработал фирменный стиль для компании. Мною был разработан логотип, множество вариантов использования логотипа, фирменные цвета компании, паттерн и подобран шрифт. Также был разработан дизайн для бланка и письма. Предоставлены варианты использования логотипа в реальной жизни, например на карточке или на футболке." },
  { title: "Презентация для команды на хакатоне", link: "https://1drv.ms/p/s!AhX7vequkTOzgtdKyOnLcsY8LjkJ1Q?e=lkG3tc&nav=eyJzSWQiOjI1NiwiY0lkIjo4NjQyMzY4NjN9", img: img7, descr: "По итогам хакатона мною была создана презентация, описывающая всю суть нашего командного проекта и предоставляющая информацию о ходе разработки, используемых технологиях и так далее." },
  { title: "Презентация для команды на хакатоне", link: "https://1drv.ms/p/s!AhX7vequkTOzgtdLbv0MlrArMN1oqw?e=x6GOOH&nav=eyJzSWQiOjI1NiwiY0lkIjozMDM5MTU1NDU3fQ", img: img1, descr: "По итогам хакатона мною была создана презентация, описывающая всю суть нашего командного проекта и предоставляющая информацию о ходе разработки, используемых технологиях и так далее." },
  { title: "Сайт по продаже бургеров", link: "https://d4non.github.io/burgers/", img: img8, descr: "В данном проекте я создал сайт по уже имеющемуся шаблону дизайна. Сайт реализован при помощи фреймворка Angular. С полной работой можно ознакомиться на моём GitHub: https://github.com/D4non/burgers" },
  { title: "Веб-приложение по поиску активностей", link: "https://github.com/D4non/Activities_project", img: img9, descr: "В рамках данного учебного проекта я создал веб-приложение, в котором люди могут находить и записываться на активности, и добавлять свои. Веб-приложение реализовано при помощи React и FireBase." },
  { title: "Приложение для расчёта индекса массы тела", link: "https://github.com/D4non/BMI-calculator", img: img10, descr: "В рамках проекта для Всероссийского IT-раунда я создал приложение для расчёта индекса массы тела. Приложение реализована при помощи библиотеки PyQt5 И языка программировfyия Python." }
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
