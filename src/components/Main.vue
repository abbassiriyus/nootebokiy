<template>
  <header class="header">
    <nav class="nav">
      <div class="nav-logo">
        <button><i class="bx bx-laptop box-lap"></i>Компьютерный сервис</button>
      </div>
      <div class="nav-menu">
        <button class="addres">Все районы города | +7 (812) 409-42-65</button>
        <button class="call">Вызвать специалиста</button>
        <button
          onclick="document.querySelector('.menu').classList.toggle('active')
        document.querySelector('.menu-absolute').classList.toggle('active')
        document.querySelector('body').classList.toggle('active')"
          class="menu"
        >
          <i class="bx bx-dots-horizontal-rounded box-dot"></i>Меню
        </button>
      </div>
    </nav>
    <div class="menu-absolute">
      <div class="menu-absolute-fixsed">
        <div class="menu-absolute-call">
          <div class="absolute-num">
            <h3>Все районы Санкт-Петербурга</h3>
            <h1>+7 (812) 333-70-75</h1>
          </div>

          <hr />
          <div class="absolute-time">
            <p>
              Выезд матеров<br />
              <span>с 10:00 до 21:00</span>
            </p>
            <p>
              Выезд матеров<br />
              <span>с 10:00 до 21:00</span>
            </p>
          </div>
          <hr />
          <div class="absolute-locate">
            <img src="../nimg/Metro_Sankt-Petersburg 8.png" alt="" />
            <img src="../nimg/Metro_Sankt-Petersburg 8.png" alt="" />
            <img src="../nimg/Metro_Sankt-Petersburg 8.png" alt="" />
            <img src="../nimg/Metro_Sankt-Petersburg 8.png" alt="" />
            <img src="../nimg/Metro_Sankt-Petersburg 8.png" alt="" />
            <p>Приедем на любой <br />указанный адрес</p>
          </div>
        </div>
        <div class="menu-absolute-seti">
          <div class="absolute-num">
            <h3>Мессенджеры</h3>
            <p>
              Пишите нам в мессенджеры или на <br />электронную почту. Ждем
              Ваших обращений!
            </p>
          </div>

          <div class="absolute-sot-seti">
            <div class="absolute-telegram">
              <button><i class="bx bxl-telegram box-tel"></i>Telegram</button>
              <button><i class="bx bxl-telegram box-tel"></i>Telegram</button>
            </div>
            <div class="absolute-gmail">
              <button>
                <i class="bx bxl-gmail box-tel"></i>3771404@gmail.com
              </button>
            </div>
          </div>
          <div class="border"></div>
          <div class="absolute-zakaz">
            <button
              class="zayavka"
              onclick="document.querySelector('.coment-absolute').style='display: block;'"
            >
              Оставить заявку
            </button>
          </div>
        </div>
        <div class="menu-absolute-modal">
          <div class="menu-absolute-modal-h3">
            <h3>Меню</h3>
          </div>
          <div class="menu-absolute-modal-ul">
            <ul class="menu-ul">
              <li><a href="#">Главная</a></li>
              <li><a href="#">Устройства</a></li>
              <li><a href="#">Бренды</a></li>
              <li><a href="#">Районы обслуживания</a></li>
              <li><a href="#">Оставить заявку</a></li>
              <li><a href="#">О компании</a></li>
              <li><a href="#">Контакты</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="coment-absolute">
      <div class="coment-fixsed">
        <div class="zayavka-coment">
          <div class="coment-h3-and-x">
            <h3>Оставить<span> заявку</span></h3>
            <button
              onclick="document.querySelector('.coment-absolute').style='display: none;'"
            >
              <i class="bx bx-x bx-flashing bx-rotate-90 box-x"></i>
            </button>
          </div>
          <div class="coment-p">
            <p>Пожалуйста, запонилните форму обратной связи</p>
          </div>
          <div class="coment-p2">
            <p>Тип устройства</p>
          </div>
          <div class="coment-button">
            <button>Ноутбуки</button>
            <button>Моноблоки</button>
            <button>Компьютеры</button>
          </div>
          <div class="coment-input">
            <div class="coment-input-p">
              <p>Ваше имя</p>
              <input placeholder="Введите имя" type="text" />
            </div>
            <div class="coment-input-p">
              <p>Ваш телефон</p>
              <input placeholder="+7" type="text" />
            </div>
          </div>
          <div class="coment-button2">
            <button onclick="document.querySelector('.prinita-absolite').style='display: flex;'" >Отправить заявку</button>
            <div class="coment-checkbox">
              <input type="checkbox" />
              <p>Обработка персональныхданных</p>
            </div>
          </div>
          <div class="coment-checkbox2">
            <div class="coment-checkbox">
              <input type="checkbox" />
              <p>Обработка персональныхданных</p>
            </div>
            <button>Отправить заявку</button>
          </div>
        </div>
      </div>
    </div>
    <div class="prinita-absolite">
      <div class="prinita-fixed">
          <div class="prinita-flex">
            <div class="prinita-img">
          <button onclick="document.querySelector('.prinita-absolite').style='display: none;'" class="prinita-x-absolute"><i class="bx bx-x bx-flashing bx-rotate-90 box-x"></i></button>
          <img src="../nimg/fire-dynamic-color.png" alt="" />
        </div>
        <div class="prinita-text">
          <h2>Ваша заявка<span> принята</span></h2>
          <p>
            Больше спасибо, что оставили заявку. <br />
            Совсем скоро наш менеджер Вам перезвонит!
          </p>
        </div>
        <div class="prinita-btn">
          <button>Хорошо!</button>
        </div>
      </div>
      </div>
    
    </div>
    <nav class="nav2">
      <div class="nav-logo2">
        <div
          onclick="document.querySelector('.nav-menu2').classList.toggle('active')
        document.querySelector('.menu').classList.toggle('active')
        "
          id="menuToggle"
          class="menu"
        >
          <input type="checkbox" />
          <span id="span1"></span>
          <span id="span2"></span>
          <span id="span3"></span>
        </div>
      </div>
    </nav>
    <div class="nav-menu2">
      <div class="nav-fixed">
        <button
          onclick="document.querySelector('.menu').classList.toggle('active')
        document.querySelector('.menu-absolute').classList.toggle('active')
        document.querySelector('body').classList.toggle('active')"
          id="addres"
        >
          <i class="bx bx-dots-horizontal-rounded box-dot"></i>Меню
        </button>
        <button id="addres">
          <i class="bx bx-laptop box-lap"></i>Компьютерный сервис
        </button>
        <button id="addres" class="addres">
          Все районы города | +7 (812) 409-42-65
        </button>
        <button
          id="addres"
          onclick="document.querySelector('.coment-absolute').classList.toggle('active')
        document.querySelector('.call').classList.toggle('active')
        "
          class="call"
        >
          Вызвать специалиста
        </button>
      </div>
    </div>
    <div class="main">
      <div class="main-p">
        <p>
          <span>Скидка 10%</span> на ремонт <br />
          компьютерной техники при <br />
          заявке через сайт
        </p>
      </div>
      <div class="main-none">
        <img src="../nimg/gift-dynamic-color.png" alt="" />
      </div>
    </div>
    <div class="main-card">
      <div class="room-card">
        <div class="room-p">
          <div class="room-p2">
            <h3>Ремонт на дому</h3>
            <p>
              Почините свой неисправный ноутбук <br />
              не выходя из квартиры
            </p>
          </div>
          <button>Вызвать мастера</button>
        </div>
        <div class="room-img">
          <img src="../nimg/Frame 668.png" alt="" />
        </div>
      </div>
      <div class="room-card">
        <div class="room-p">
          <div class="room-p2">
            <h3>Ремонт на дому</h3>
            <p>
              Почините свой неисправный ноутбук <br />
              не выходя из квартиры
            </p>
          </div>
          <button>Вызвать мастера</button>
        </div>
        <div class="room-img">
          <img src="../nimg/Frame 668.png" alt="" />
        </div>
      </div>
    </div>
  </header>
  <div class="n-kotegory">
    <div class="n-kotegory-flex">
      <div class="n-laptop">
        <div class="n-laptop-p">
          <h1>Ноутбуки</h1>
          <p>
            Множество брендов <br />
            и моделей
          </p>
        </div>
        <div class="n-laptop-img">
          <img src="../nimg/image 85.png" alt="" />
        </div>
      </div>
      <div class="n-laptop">
        <div class="n-laptop-p">
          <h2>Ноутбуки</h2>
          <p>
            Множество брендов <br />
            и моделей
          </p>
        </div>
        <div class="n-laptop-img">
          <img src="../nimg/image 85.png" alt="" />
        </div>
      </div>
      <div class="n-laptop">
        <div class="n-laptop-p">
          <h1>Ноутбуки</h1>
          <p>
            Множество брендов <br />
            и моделей
          </p>
        </div>
        <div class="n-laptop-img">
          <img src="../nimg/image 85.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  <div class="n-text">
    <p>
      Наш сервисный центр ремонтирует <br />
      множество <span>различных брендов</span>
    </p>
  </div>
  <div class="n-partner">
    <div class="n-partner-flex">
      <div class="n-partner-logo">
        <img src="../nimg/image 72 (Traced).png" alt="" />
      </div>
      <div class="n-partner-logo">
        <img src="../nimg/image 72 (Traced).png" alt="" />
      </div>
      <div class="n-partner-logo">
        <img src="../nimg/image 72 (Traced).png" alt="" />
      </div>
      <div class="n-partner-logo">
        <img src="../nimg/image 72 (Traced).png" alt="" />
      </div>
      <div class="n-partner-logo">
        <img src="../nimg/image 72 (Traced).png" alt="" />
      </div>
    </div>
    <div class="n-partner-flex2">
      <div class="n-partner-logo">
        <img src="../nimg/image 72 (Traced).png" alt="" />
      </div>
      <div class="n-partner-logo">
        <img src="../nimg/image 72 (Traced).png" alt="" />
      </div>
      <div class="n-partner-logo">
        <img src="../nimg/image 72 (Traced).png" alt="" />
      </div>
      <div class="n-partner-logo">
        <img src="../nimg/image 72 (Traced).png" alt="" />
      </div>
      <div class="n-partner-logo">
        <img src="../nimg/image 72 (Traced).png" alt="" />
      </div>
      <div class="n-partner-logo">
        <img src="../nimg/image 72 (Traced).png" alt="" />
      </div>
    </div>
  </div>
  <div
    id="carouselExampleControls"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="n-corusel">
          <img src="../nimg/Frame 551.png" alt="" />
        </div>
      </div>
      <div class="carousel-item">
        <div class="n-corusel">
          <img src="../nimg/Frame 551.png" alt="" />
        </div>
      </div>
      <div class="carousel-item">
        <div class="n-corusel">
          <img src="../nimg/Frame 551.png" alt="" />
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"
        ><i class="bx bx-chevron-left box-carousel-left"></i
      ></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"
        ><i class="bx bxs-chevron-right box-carousel-left"></i
      ></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <div class="n-all-partner">
    <div class="n-all-partner-p">
      <p>
        Ремонтируем более 20 различных брендов компьютерной техники. <br />
        Вы точно найдете среди них свой
      </p>
    </div>
    <div class="n-all-partner-p">
      <button>Посмотреть все бренды</button>
    </div>
  </div>
  <div class="n-footer">
    <div class="n-footer-card-p">
      <div class="n-footer-p-card">
        <h4>Почему <br />клиенты выбирают</h4>
        <h4 class="h4-span">именно нас?</h4>
        <p>Главные приемущества нашего <br />сервисного центра</p>
      </div>
      <div class="n-footer-card-card">
        <div class="n-card-footer">
          <div class="n-footer-card-about">
            <h4>Склад запчастей</h4>
            <p>Оригинальные запчасти или <br />аналог на нашем складе</p>
          </div>
          <div class="n-footer-card-img">
            <img src="../nimg/setting-dynamic-color.png" alt="" />
          </div>
        </div>
        <div class="n-card-footer">
          <div class="n-footer-card-about">
            <h4>Склад запчастей</h4>
            <p>Оригинальные запчасти или <br />аналог на нашем складе</p>
          </div>
          <div class="n-footer-card-img">
            <img src="../nimg/setting-dynamic-color.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="n-footer-card">
      <div class="n-card-footer">
        <div class="n-footer-card-about">
          <h4>Склад запчастей</h4>
          <p>Оригинальные запчасти или <br />аналог на нашем складе</p>
        </div>
        <div class="n-footer-card-img">
          <img src="../nimg/setting-dynamic-color.png" alt="" />
        </div>
      </div>
      <div class="n-card-footer">
        <div class="n-footer-card-about">
          <h4>Склад запчастей</h4>
          <p>Оригинальные запчасти или <br />аналог на нашем складе</p>
        </div>
        <div class="n-footer-card-img">
          <img src="../nimg/setting-dynamic-color.png" alt="" />
        </div>
      </div>
    </div>
    <div class="mini01">
      <img src="../nimg/free-icon-quote-565703 1 (Traced).png" alt="" />
      <p class="p6">
        Все работы, которые мы выполняем, требуют неограниченного доступа
        персонала компании к современному оборудованию и инструменту, что не
        является проблемой, поскольку ремонтная база мастерской безупречно
        оснащена. Кроме того, в распоряжении сотрудников сервис-центра имеется
        небольшой склад оригинальных запчастей, благодаря которому удается
        существенно сократить время починки компьютера. Наши специалисты
        постоянно повышают собственную квалификацию и накапливают полезные
        знания и опыт в сфере ремонта компьютерной техники
      </p>
    </div>
  </div>
</template>


<style scoped></style>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';

import '../assets/main.css';

// import required modules
import { Navigation } from 'swiper';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Navigation],
        };
    },
};
</script>

