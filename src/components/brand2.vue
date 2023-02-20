<template>
  <header class="header1">
    <nav class="n-nav">
      <div class="nav-logo">
        <button><i class="bx bx-laptop box-lap"></i>Компьютерный сервис</button>
      </div>
      <div class="nav-menu">
        <button class="addres">Все районы города | +7 (812) 409-42-65</button>
        <button class="call">Вызвать специалиста</button>
        <button onclick="document.querySelector('.menu').classList.toggle('active')
                document.querySelector('.menu-absolute').classList.toggle('active')
                document.querySelector('body').classList.toggle('active')" class="menu">
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
            <button class="zayavka" onclick="document.querySelector('.coment-absolute').style='display: block;'">
              Оставить заявку
            </button>
          </div>
        </div>
        <div class="menu-absolute-modal">
          <button onclick="document.querySelector('.menu-absolute').style = 'display: none;'"><i class='bx bx-x bx-spin box-x'></i></button>
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
            <button onclick="document.querySelector('.coment-absolute').style='display: none;'">
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
            <button onclick="document.querySelector('.prinita-absolite').style='display: flex;'">Отправить заявку</button>
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
        <div onclick="document.querySelector('.nav-menu2').classList.toggle('active')
                document.querySelector('.menu').classList.toggle('active')
                " id="menuToggle" class="menu">
          <input type="checkbox" />
          <span id="span1"></span>
          <span id="span2"></span>
          <span id="span3"></span>
        </div>
      </div>
    </nav>
    <div class="nav-menu2">
      <div class="nav-fixed">
        <button onclick="document.querySelector('.menu').classList.toggle('active')
                document.querySelector('.menu-absolute').classList.toggle('active')
                document.querySelector('body').classList.toggle('active')" id="addres">
          <i class="bx bx-dots-horizontal-rounded box-dot"></i>Меню
        </button>
        <button id="addres">
          <i class="bx bx-laptop box-lap"></i>Компьютерный сервис
        </button>
        <button id="addres" class="addres">
          Все районы города | +7 (812) 409-42-65
        </button>
        <button id="addres" onclick="document.querySelector('.coment-absolute').classList.toggle('active')
                document.querySelector('.call').classList.toggle('active')
                " class="call">
          Вызвать специалиста
        </button>
      </div>
    </div>
    <div class="n-main-product">
      <div class="n-main-text-product">
        <h1>Ремонтируем <br>
          <span>компьютерную</span> технику
        </h1>
        <p>Выберите тип техники, который хотите починить</p>
      </div>
       <div id="n-partner" class="n-partner">
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
      <div class="n-main-text2-product">
        <p>Не нашли свой тип техники?
          <br> Оставьте заявку и мы Вам поможем
        </p>
      </div>
      <div class="n-main-button-product">
        <button>Оставить
          <br> заявку</button>
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
  <div class="n-kotegory2">
    <div class="n-kotegory2-text">
      <h1><span>Стоимость и виды работ</span> по
        <br> ремонту компьютеров
      </h1>
      <p>Если Вы не нашли свою неисправность - оставьте
        <br>заявку и мы поможем!
      </p>
    </div>
    <div class="n-kotegory2-card">
      <div class="n-kotegory2-card-card">
        <img src="../nimg/Rectangle 39391.png" alt="">
        <div class="n-kotegoty-card-text">
          <h4>Чистка,
            <br> замена термопасты
          </h4>
          <p>от 2000 ₽</p>
        </div>
        <i class='bx bxs-chevron-right box-right'></i>
      </div>
      <div class="n-kotegory2-card-card">
        <img src="../nimg/Rectangle 39391.png" alt="">
        <div class="n-kotegoty-card-text">
          <h4>Чистка,
            <br> замена термопасты
          </h4>
          <p>от 2000 ₽</p>
        </div>
        <i class='bx bxs-chevron-right box-right'></i>
      </div>
      <div class="n-kotegory2-card-card">
        <img src="../nimg/Rectangle 39391.png" alt="">
        <div class="n-kotegoty-card-text">
          <h4>Чистка,
            <br> замена термопасты
          </h4>
          <p>от 2000 ₽</p>
        </div>
        <i class='bx bxs-chevron-right box-right'></i>
      </div>
      <div class="n-kotegory2-card-card">
        <img src="../nimg/Rectangle 39391.png" alt="">
        <div class="n-kotegoty-card-text">
          <h4>Чистка,
            <br> замена термопасты
          </h4>
          <p>от 2000 ₽</p>
        </div>
        <i class='bx bxs-chevron-right box-right'></i>
      </div>
      <div class="n-kotegory2-card-card">
        <img src="../nimg/Rectangle 39391.png" alt="">
        <div class="n-kotegoty-card-text">
          <h4>Чистка,
            <br> замена термопасты
          </h4>
          <p>от 2000 ₽</p>
        </div>
        <i class='bx bxs-chevron-right box-right'></i>
      </div>
      <div class="n-kotegory2-card-card">
        <img src="../nimg/Rectangle 39391.png" alt="">
        <div class="n-kotegoty-card-text">
          <h4>Чистка,
            <br> замена термопасты
          </h4>
          <p>от 2000 ₽</p>
        </div>
        <i class='bx bxs-chevron-right box-right'></i>
      </div>
    </div>
    <hr>
    <div class="n-kotegory2-btn">
      <button>Показать полностью</button>
    </div>

  </div>

  <div class="n-text">
    <p>
      Выберите один из множества <span>различных <br>
        брендов компьтеров,</span> которых мы ремонтируем

    </p>
  </div>

  <div class="n-partner2">
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
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
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
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"><i class="bx bx-chevron-left box-carousel-left"></i></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"><i class="bx bxs-chevron-right box-carousel-left"></i></span>
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
  <div>
    <center>
      <h1 class="qoch">Вызовите специалиста на дом<br>
        <span class="ob-span">Приедем в любой район</span> Санкт-Петербурга
      </h1>
      <p class="poch" style="margin-top: 30px;">Мы приедем, починим Ваше устройство или заберем
        его в сервисный центр для дальнейшего ремонта</p>
    </center>
    <div class="bosh">

      <img src="./aimg/Vector 1.png" alt="" class="fonline">
      <div class="kalla2">

        <div class="pta">
          <img src="./image/Metro_Sankt-Petersburg 9.png" alt="">
          <br>
          <h4>Красная ветка</h4>
          <p>Все станции красной ветки метрополитена <br>
            и районы вокруг</p>
          <div class="pta1">
            <img class="img-img" src="./image/Metro_Sankt-Petersburg 9.png" alt="">
            <br>
            <div class="br-br">
              <h4 class="img-ost">Оставить завявку</h4>
              <p>Оставьте заявку и наш специалист <br>
                отправится на указанный Вами адрес</p>
              <div class="btns">
                <button class="pta-btn">Вызвать специалиста</button>
                <button class="pta-btn1"><img src="./image/phone-end-dynamic-color.png" alt=""></button>
              </div>
            </div>
          </div>
        </div>
        <div class="pta">
          <img src="./image/Metro_Sankt-Petersburg 10.png" alt="">
          <br>
          <h4>Зеленая ветка</h4>
          <p>Все зеленый красной ветки метрополитена <br>
            и районы вокруг</p>
          <div class="pta1">
            <img class="img-img" src="./image/Metro_Sankt-Petersburg 9.png" alt="">
            <br>
            <div class="br-br">
              <h4 class="img-ost">Оставить завявку</h4>
              <p>Оставьте заявку и наш специалист <br>
                отправится на указанный Вами адрес</p>
              <div class="btns">
                <button class="pta-btn">Вызвать специалиста</button>
                <button class="pta-btn1"><img src="./image/phone-end-dynamic-color.png" alt=""></button>
              </div>
            </div>
          </div>
        </div>
        <div class="pta">
          <img src="./image/Metro_Sankt-Petersburg 8 (2).png" alt="">
          <br>
          <h4>Фиолетвый ветка</h4>
          <p>Все станции фиолетвый ветки метрополитена <br>
            и районы вокруг</p>
          <div class="pta1">
            <img class="img-img" src="./image/Metro_Sankt-Petersburg 9.png" alt="">
            <br>
            <div class="br-br">
              <h4 class="img-ost">Оставить завявку</h4>
              <p>Оставьте заявку и наш специалист <br>
                отправится на указанный Вами адрес</p>
              <div class="btns">
                <button class="pta-btn">Вызвать специалиста</button>
                <button class="pta-btn1"><img src="./image/phone-end-dynamic-color.png" alt=""></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="kalla">
        <div class="pta">
          <img src="./image/Metro_Sankt-Petersburg 7.png" alt="">
          <br>
          <h4>Синия ветка</h4>
          <p>Все станции синий ветки метрополитена <br>
            и районы вокруг</p>
          <div class="pta1">
            <img class="img-img" src="./image/Metro_Sankt-Petersburg 9.png" alt="">
            <br>
            <div class="br-br">
              <h4 class="img-ost">Оставить завявку</h4>
              <p>Оставьте заявку и наш специалист <br>
                отправится на указанный Вами адрес</p>
              <div class="btns">
                <button class="pta-btn">Вызвать специалиста</button>
                <button class="pta-btn1"><img src="./image/phone-end-dynamic-color.png" alt=""></button>
              </div>
            </div>
          </div>
        </div>
        <div class="pta">
          <img src="./image/Metro_Sankt-Petersburg 11.png" alt="">
          <br>
          <h4>Оранжевая</h4>
          <p>Все станции оранжевой ветки метрополитена <br>
            и районы вокруг</p>
          <div class="pta1">
            <img class="img-img" src="./image/Metro_Sankt-Petersburg 9.png" alt="">
            <br>
            <div class="br-br">
              <h4 class="img-ost">Оставить завявку</h4>
              <p>Оставьте заявку и наш специалист <br>
                отправится на указанный Вами адрес</p>
              <div class="btns">
                <button class="pta-btn">Вызвать специалиста</button>
                <button class="pta-btn1"><img src="./image/phone-end-dynamic-color.png" alt=""></button>
              </div>
            </div>
          </div>
        </div>
        <div class="pta">
          <img src="./image/Metro_Sankt-Petersburg 11.png" alt="">
          <br>
          <h4>Оранжевая</h4>
          <p>Все станции оранжевой ветки метрополитена <br>
            и районы вокруг</p>
          <div class="pta1">
            <img class="img-img" src="./image/Metro_Sankt-Petersburg 9.png" alt="">
            <br>
            <div class="br-br">
              <h4 class="img-ost">Оставить завявку</h4>
              <p>Оставьте заявку и наш специалист <br>
                отправится на указанный Вами адрес</p>
              <div class="btns">
                <button class="pta-btn">Вызвать специалиста</button>
                <button class="pta-btn1"><img src="./image/phone-end-dynamic-color.png" alt=""></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mini02">

      </div>
    </div>
    <!-- <swiper :slidesPerView="2" :spaceBetween="30" :keyboard="{
        enabled: true,
    }" :pagination="{
        clickable: true,
    }" :navigation="true" :modules="modules" class="mySwiper">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
        <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
    </swiper> -->

    <!-- <div class="mini01">
        <img src="./image/free-icon-quote-565703 1 (Traced).png" alt="">
        <p class="p6">Все работы, которые мы выполняем, требуют неограниченного доступа персонала компании ксовременному оборудованию и инструменту, что не является проблемой, поскольку ремонтная база мастерской безупречно оснащена. Кроме того, в распоряжении сотрудников сервис-центра имеется небольшой склад оригинальных запчастей, благодаря которому удается существенно сократить время починки компьютера. Наши специалисты постоянно повышают собственную квалификацию и накапливают полезные знания и опыт в сфере ремонта компьютерной техники</p>
    </div> -->
    <div class="bg">
      <!-- <div class="cards">
                    <! <center class="cent">
                        <h1 class="h11"><span> Порядок работы </span>при ремонте<br>
                            компьютероной техники</h1>
                    </center> -->
      <!-- </div> -->
      <!-- <div class="kta">
                    <div class="cs">
                        <div class="card">
                            <img src="./image/phone-ringing-dynamic-color.png" alt="">
                            <h3 class="h03">Ваша заявка на сайте
                                или по телефону</h3>
                            <p class="p02">С вами по телефону согласовывают
                                дату и время выезда специалиста</p>
                            <p class="p01">1 шаг</p>
    </div>
                        <div class="card">
                            <img src="./image/phone-ringing-dynamic-color.png" alt="">
                            <h3 class="h03">Ваша заявка на сайте
                                или по телефону</h3>
                            <p class="p02">С вами по телефону согласовывают
                                дату и время выезда специалиста</p>
                            <p class="p01">1 шаг</p>
    </div>
    </div>
                    <div class="ss">
                        <div class="card">
                            <img src="./image/phone-ringing-dynamic-color.png" alt="">
                            <h3 class="h03">Ваша заявка на сайте
                                или по телефону</h3>
                            <p class="p02">С вами по телефону согласовывают
                                дату и время выезда специалиста</p>
                            <p class="p01">2 шаг</p>
    </div>
                        <div class="card">
                            <img src="./image/phone-ringing-dynamic-color.png" alt="">
                            <h3 class="h03">Ваша заявка на сайте
                                или по телефону</h3>
                            <p class="p02">С вами по телефону согласовывают
                                дату и время выезда специалиста</p>
                            <p class="p01">2 шаг</p>
    </div>
    </div>
    </div> -->
      <!-- <center>
                    <div class="mini">
                        <p>Оставьте заявку на сайте и наш менеджер<br>
                            сразу же с Вами свяжется!</p>
                        <div class="dum">Оставить
                            заявку</div>
    </div>
                </center> -->
      <div class="mnca">

        <!-- <div class="orta-kicj">
                        <center>
                            <h1 class="asd">Наши мастера и курьеры<br>
                                всегда готовы <span class="spn1"> приехать на помощь</span></h1>
                            <p class="pp1">Вызовите мастера или курьера в любой<br>
                                район Санкт-Петербурга</p>
    </center>
                        <div class="kicik">
                            <div class="kam">
                                <img src="./image/IMG_5730.png" alt="">
    </div>
                            <div class="kam">
                                <img src="./image/Frame 596.png" alt="">
    </div>
                            <div class="kam">
                                <img src="./image/IMG_5729 2.png" alt="">
    </div>
                            <div class="kam">
                                <img src="./image/IMG_5734.png" alt="">
    </div>
                            <div class="kam">
                                <img src="./image/изображение 1.png" alt="">
    </div>
    </div>
                        <div class="kicik2">
                            <div class="kam">
                                <img src="./image/IMG_5735.png" alt="">
    </div>
                            <div class="kam">
                                <img src="./image/IMG_5737.png" alt="">
    </div>
                            <div class="kam">
                                <img src="./image/IMG_5731.png" alt="">
    </div>
    </div>
                        <center><button class="clci">Вызвать мастера на дом</button></center>
    </div> -->

        <div class="maxx">
          <!-- <div class="mini01">
                            <img src="./image/free-icon-quote-565703 1 (Traced).png" alt="">
                            <p class="p6">Все работы, которые мы выполняем, требуют неограниченного доступа персонала компании ксовременному оборудованию и инструменту, что не является проблемой, поскольку ремонтная база мастерской безупречно оснащена. Кроме того, в распоряжении сотрудников сервис-центра имеется небольшой склад оригинальных запчастей, благодаря которому удается существенно сократить время починки компьютера. Наши специалисты постоянно повышают собственную квалификацию и накапливают полезные знания и опыт в сфере ремонта компьютерной техники</p>
    </div> -->
          <!-- <div class="halilov"> -->
          <!-- <center>
                                <h1 class="bole">Более 200 отзывов <br>
                                    от <span> реальных клиентов</span></h1>
    </center> -->
          <!-- </div> -->
          <!-- <center class="pasd">
                            <p class="pro">Прочитайте отзывы на сторонних ресурсах<br>
                                и убедитесь в качестве нашей работы</p>
    </center> -->
          <div class="iconka">
            <img src="./image/Frame 31.png" alt="">
            <img src="./image/Frame 32.png" alt="">
            <img src="./image/Frame 36.png" alt="">
            <img src="./image/Frame 35.png" alt="">
          </div>
          <div class="cardla">
            <h1 class="nma"><span class="ob-span">Наши работы</span> по ремонту<br>
              компьюетрной техники</h1>
            <div class="btnla">
              <button>Ноутбуки</button>
              <button>Моноблоки</button>
              <button>Компьютеры</button>
            </div>
            <swiper :slidesPerView="1" :navigation="true" :modules="modules" class="mySwiper2">
              <swiper-slide> <img class="ima-ge" src="./image/Group 323.png" alt="">
                <p class="imgm">asdsadfadfds шлефов матринцы на ноутбуке</p>
              </swiper-slide>
              <swiper-slide> <img class="ima-ge" src="./image/Group 323.png" alt="">
                <p class="imgm">Ремонт шлефов матринцы на ноутбуке</p>
              </swiper-slide><swiper-slide> <img class="ima-ge" src="./image/Group 323.png" alt="">
                <p class="imgm">Ремонт шлефов матринцы на ноутбуке</p>
              </swiper-slide>
              <swiper-slide> <img class="ima-ge" src="./image/Group 323.png" alt="">
                <p class="imgm">Ремонт шлефов матринцы на ноутбуке</p>
              </swiper-slide><swiper-slide> <img class="ima-ge" src="./image/Group 323.png" alt="">
                <p class="imgm">Ремонт шлефов матринцы на ноутбуке</p>
              </swiper-slide>
              <swiper-slide> <img class="ima-ge" src="./image/Group 323.png" alt="">
                <p class="imgm">Ремонт шлефов матринцы на ноутбуке</p>
              </swiper-slide><swiper-slide> <img class="ima-ge" src="./image/Group 323.png" alt="">
                <p class="imgm">Ремонт шлефов матринцы на ноутбуке</p>
              </swiper-slide>
              <swiper-slide> <img class="ima-ge" src="./image/Group 323.png" alt="">
                <p class="imgm">Ремонт шлефов матринцы на ноутбуке</p>
              </swiper-slide><swiper-slide> <img class="ima-ge" src="./image/Group 323.png" alt="">
                <p class="imgm">Ремонт шлефов матринцы на ноутбуке</p>
              </swiper-slide>
            </swiper>

            <swiper :slidesPerView="2" :spaceBetween="30" :keyboard="{
              enabled: true,
            }" :pagination="{
  clickable: true,
}" :navigation="true" :modules="modules" class="mySwiper">
              <swiper-slide class="swiperabu">
                <img class="ima-ge" src="./image/Group 323.png" alt="">
                <p class="imgm">Ремонт шлефов матринцы на ноутбуке</p>
              </swiper-slide>
              <swiper-slide class="swiperabu">

                <p class="imgm">Ремонт материнской платы различных брендов и моделей ноутбуков</p>
                <img class="ima-ge" src="./image/Mask group.png" alt="">
              </swiper-slide>
              <swiper-slide class="swiperabu">
                <p class="imgm">Ремонт блока питания в системном блоке персонального компьюетра</p>
                <img class="ima-ge" src="./image/Mask group (1).png" alt="">

              </swiper-slide>
              <swiper-slide class="swiperabu">
                <p class="imgm">Ремонт шлефов матринцы на ноутбуке</p>
                <img class="ima-ge" src="./image/Group 323.png" alt="">
              </swiper-slide>
              <swiper-slide class="swiperabu">
                <p class="imgm">Ремонт материнской платы различных брендов и моделей ноутбуков</p>
                <img class="ima-ge" src="./image/Mask group.png" alt="">
              </swiper-slide>
              <swiper-slide class="swiperabu">

                <p class="imgm">Ремонт блока питания в системном блоке персонального компьюетра</p>
                <img class="ima-ge" src="./image/Mask group (1).png" alt="">

              </swiper-slide>
              <swiper-slide class="swiperabu">
                <p class="imgm">Ремонт шлефов матринцы на ноутбуке</p>
                <img class="ima-ge" src="./image/Group 323.png" alt="">
              </swiper-slide>
              <swiper-slide class="swiperabu">

                <p class="imgm">Ремонт материнской платы различных брендов и моделей ноутбуков</p>
                <img class="ima-ge" src="./image/Mask group.png" alt="">
              </swiper-slide>
              <swiper-slide class="swiperabu">
                <p class="imgm">Ремонт блока питания в системном блоке персонального компьюетра</p>
                <img class="ima-ge" src="./image/Mask group (1).png" alt="">

              </swiper-slide>
            </swiper>
            <div class="phon">
              <!-- <swiper :slidesPerView="1" :spaceBetween="10" :loop="true" :pagination="{
            clickable: true,
        }" :navigation="true" :modules="modules" class="mySwiper3">
            <swiper-slide>
                <div class="cardcami">
                    <h1>Lorem ipsum dolor sit.</h1>
                    <p>Lorem, ipsum.</p>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="cardcami">
                    <h1>Lorem ipsum dolor sit.</h1>
                    <p>Lorem, ipsum.</p>
                </div>
            </swiper-slide><swiper-slide>
                <div class="cardcami">
                    <h1>Lorem ipsum dolor sit.</h1>
                    <p>Lorem, ipsum.</p>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="cardcami">
                    <h1>Lorem ipsum dolor sit.</h1>
                    <p>Lorem, ipsum.</p>
                </div>
            </swiper-slide><swiper-slide>
                <div class="cardcami">
                    <h1>Lorem ipsum dolor sit.</h1>
                    <p>Lorem, ipsum.</p>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="cardcami">
                    <h1>Lorem ipsum dolor sit.</h1>
                    <p>Lorem, ipsum.</p>
                </div>
            </swiper-slide><swiper-slide>
                <div class="cardcami">
                    <h1>Lorem ipsum dolor sit.</h1>
                    <p>Lorem, ipsum.</p>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="cardcami">
                    <h1>Lorem ipsum dolor sit.</h1>
                    <p>Lorem, ipsum.</p>
                </div>
            </swiper-slide><swiper-slide>
                <div class="cardcami">
                    <h1>Lorem ipsum dolor sit.</h1>
                    <p>Lorem, ipsum.</p>
                </div>
            </swiper-slide>
        </swiper> -->
              <!-- <div class="mini01">
            <img src="./image/free-icon-quote-565703 1 (Traced).png" alt="">
            <p class="p6">Все работы, которые мы выполняем, требуют неограниченного доступа персонала компании к
                современному оборудованию и инструменту, что не является проблемой, поскольку ремонтная база мастерской безупречно оснащена. Кроме того, в распоряжении сотрудников сервис-центра имеется небольшой склад оригинальных запчастей, благодаря которому удается существенно сократить время починки компьютера. Наши специалисты постоянно повышают собственную квалификацию и накапливают полезные знания и опыт в сфере ремонта компьютерной техники</p>
        </div> -->
              <div class="mini01">
                <img src="./image/free-icon-quote-565703 1 (Traced).png" alt="">
                <p class="p6">Все работы, которые мы выполняем, требуют неограниченного доступа персонала компании ксовременному оборудованию и инструменту, что не является проблемой, поскольку ремонтная база мастерской безупречно оснащена. Кроме того, в распоряжении сотрудников сервис-центра имеется небольшой склад оригинальных запчастей, благодаря которому удается существенно сократить время починки компьютера. Наши специалисты постоянно повышают собственную квалификацию и накапливают полезные знания и опыт в сфере ремонта компьютерной техники</p>
              </div>
              <center class="cent">
                <h1 class="h11"><span class="ob-span"> Порядок работы </span>при ремонте<br>
                  компьютероной техники</h1>
              </center>
              <div class="kta">
                <img class="fonline" src="./aimg/Vector 1.png" alt="">
                <div class="cs">
                  <div class="card">
                    <img src="./image/phone-ringing-dynamic-color.png" alt="">
                    <h3 class="h03">Ваша заявка на сайте
                      или по телефону</h3>
                    <p class="p02">С вами по телефону согласовывают
                      дату и время выезда специалиста</p>
                    <p class="p01">1 шаг</p>
                  </div>
                  <div class="card">
                    <img src="./image/map-pin-dynamic-color.png" alt="">
                    <h3 class="h03">Выезд курера
                      или мастера на адрес</h3>
                    <p class="p02">Наш мастер или курьер выезжает
                      на указанный Вами адрес</p>
                    <p class="p01">2 шаг</p>
                  </div>
                </div>
                <div class="ss">
                  <div class="card">
                    <img src="./image/zoom-dynamic-color.png" alt="">
                    <h3 class="h03">Диагностика техники
                      и согласование стоимости</h3>
                    <p class="p02">Инженер диагностирует неисправность
                      устройства и согласовывает с Вами
                      стоимость его ремонта</p>
                    <p class="p01">3 шаг</p>
                  </div>
                  <div class="card">
                    <img src="./image/tool-dynamic-color.png" alt="">
                    <h3 class="h03end">Наш мастер или курьер выезжает
                      на указанный Вами адрес</h3>
                    <p class="p02">Мастер производит ремонт техники
                      или забирает его для дальнейшего ремонта
                      в сервисном центре</p>
                    <p class="p01">4 шаг</p>
                  </div>
                </div>
              </div>
              <center>
                <div class="mini">
                  <p>Оставьте заявку на сайте и наш менеджер<br>
                    сразу же с Вами свяжется!</p>
                  <div class="dum">Оставить
                    заявку</div>
                </div>
              </center>
              <div class="mini01">
                <img src="./image/free-icon-quote-565703 1 (Traced).png" alt="">
                <p class="p6">Все работы, которые мы выполняем, требуют неограниченного доступа персонала компании ксовременному оборудованию и инструменту, что не является проблемой, поскольку ремонтная база мастерской безупречно оснащена. Кроме того, в распоряжении сотрудников сервис-центра имеется небольшой склад оригинальных запчастей, благодаря которому удается существенно сократить время починки компьютера. Наши специалисты постоянно повышают собственную квалификацию и накапливают полезные знания и опыт в сфере ремонта компьютерной техники</p>
              </div>
              <!-- <div class="latta" style="margin-top: 100px;"> -->
              <!-- <center>
                                        <h1 class="qoch">Вызовите специалиста на дом<br>
                                            <span>Приедем в любой район</span> Санкт-Петербурга
                                        </h1>
                                        <p class="poch" style="margin-top: 30px;">Мы приедем, починим Ваше устройство или заберем
                                            его в сервисный центр для дальнейшего ремонта</p>
                                    </center> -->
              <!-- <div class="bosh">
                                        <div class="kalla2">
                                            <div class="pta">
                                                <img src="./image/Metro_Sankt-Petersburg 9.png" alt="">
                                                <br>
                                                <h4>Красная ветка</h4>
                                                <p>Все станции красной ветки метрополитена <br>
                                                    и районы вокруг</p>
                                            </div>
                                            <div class="pta">
                                                <img src="./image/Metro_Sankt-Petersburg 9.png" alt="">
                                                <br>
                                                <h4>Красная ветка</h4>
                                                <p>Все станции красной ветки метрополитена <br>
                                                    и районы вокруг</p>
                                            </div>
                                            <div class="pta">
                                                <img src="./image/Metro_Sankt-Petersburg 9.png" alt="">
                                                <br>
                                                <h4>Красная ветка</h4>
                                                <p>Все станции красной ветки метрополитена <br>
                                                    и районы вокруг</p>
                                            </div>
                                        </div>
                                        <div class="kalla">
                                            <div class="pta">
                                                <img src="./image/Metro_Sankt-Petersburg 9.png" alt="">
                                                <br>
                                                <h4>Красная ветка</h4>
                                                <p>Все станции красной ветки метрополитена <br>
                                                    и районы вокруг</p>
                                            </div>
                                            <div class="pta">
                                                <img src="./image/Metro_Sankt-Petersburg 9.png" alt="">
                                                <br>
                                                <h4>Красная ветка</h4>
                                                <p>Все станции красной ветки метрополитена <br>
                                                    и районы вокруг</p>
                                            </div>
                                            <div class="pta">
                                                <img src="../components/image/Metro_Sankt-Petersburg 9.png" alt="">
                                                <br>
                                                <h4>Красная ветка</h4>
                                                <p>Все станции красной ветки метрополитена <br>
                                                    и районы вокруг</p>
                                            </div>
                                        </div>
                                        <div class="mini02">

                                        </div>
                                    </div> -->
              <!-- <swiper style="width:70%;margin:auto" :slidesPerView="2" :spaceBetween="0" :loop="true" :pagination="{
                                                            clickable: true,
                                                        }" :navigation="true" :modules="modules" class="mySwiper0">
                                                            <swiper-slide>
                                                                <div class="mgi">
                                                                    <h3><i class='bx bxl-google'></i>
                                                                        <p class="p001">|</p> Егор Панов
                                                                    </h3><br>
                                                                    <p class="otl">Отличный сервисный центр! Взялись за
                                                                        работу, от которой отказывались в авторизованных сервисных центрах, ссылаясь на неремонтопригодность.
                                                                        По нелепой случайности разбился глазок основной камеры iPhone 12 и соответсвенно пришла в негодность и сама камера.
                                                                        Вечером сдал - днём следующего дня забрал. Все сделано просто идеально! Со стороны вообще не сказать, что с телефоном производились какие-то манипуляции в плане ремонта.
                                                                        Спасибо огромное ребятам за качественный ремонт!
                                                                        Хоть и есть сервисные центры ближе к дому, но теперь однозначно буду ездить только сюда!</p>
                                                                </div>
    </swiper-slide>
    <swiper-slide>
                                                                <div class="mgi2">
                                                                    <h3 class="aass"><i class='bx bxl-google'></i> Егор Панов
                                                                    </h3><br>
                                                                    <p class="otl">Отличный сервисный центр! Взялись за
                                                                        работу, от которой отказывались в авторизованных сервисных центрах, ссылаясь на неремонтопригодность.
                                                                        По нелепой случайности разбился глазок основносказать, что с телефоном производились какие-то манипуляции в плане ремонта.
                                                                        Спасибо огромное ребятам за качественный ремонт!
                                                                        Хоть и есть сервисные центры ближе к дому, но теперь однозначно буду ездить только сюда!</p>
                                                                </div>
    </swiper-slide>
    <swiper-slide>
                                                                <div class="mgi">
                                                                    <h3><i class='bx bxl-google'></i>
                                                                        <p class="p001">|</p> Егор Панов
    </h3><br>
                                                                    <p class="otl">Отличный сервисный центр! Взялись за
                                                                        работу, от которой отказывались в авторизованных сервисных центрах, ссылаясь на неремонтопригодность.
                                                                        По нелепой случайности разбился глазок основной камеры iPhone 12 и соответсвенно пришла в негодность и сама камера.
                                                                        Вечером сдал - днём следующего дня забрал. Все сделано просто идеально! Со стороны вообще не сказать, что с телефоном производились какие-то манипуляции в плане ремонта.
                                                                        Спасибо огромное ребятам за качественный ремонт!
                                                                        Хоть и есть сервисные центры ближе к дому, но теперь однозначно буду ездить только сюда!</p>
    </div>
    </swiper-slide>
    <swiper-slide>
                                                                <div class="mgi2">
                                                                    <h3 class="aass"><i class='bx bxl-google'></i> Егор Панов
                                                                    </h3><br>
                                                                    <p class="otl">Отличный сервисный центр! Взялись за
                                                                        работу, от которой отказывались в авторизованных сервисных центрах, ссылаясь на неремонтопригодность.
                                                                        По нелепой случайности разбился глазок основносказать, что с телефоном производились какие-то манипуляции в плане ремонта.
                                                                        Спасибо огромное ребятам за качественный ремонт!
                                                                        Хоть и есть сервисные центры ближе к дому, но теперь однозначно буду ездить только сюда!</p>
    </div>
    </swiper-slide><swiper-slide>
                                                                <div class="mgi2">
                                                                    <h3 class="aass"><i class='bx bxl-google'></i> Егор Панов
    </h3><br>
                                                                    <p class="otl">Отличный сервисный центр! Взялись за
                                                                        работу, от которой отказывались в авторизованных сервисных центрах, ссылаясь на неремонтопригодность.
                                                                        По нелепой случайности разбился глазок основносказать, что с телефоном производились какие-то манипуляции в плане ремонта.
                                                                        Спасибо огромное ребятам за качественный ремонт!
                                                                        Хоть и есть сервисные центры ближе к дому, но теперь однозначно буду ездить только сюда!</p>
    </div>
    </swiper-slide>
                                                            <swiper-slide>
                                                                <div class="mgi">
                                                                    <h3><i class='bx bxl-google'></i>
                                                                        <p class="p001">|</p> Егор Панов
                                                                    </h3><br>
                                                                    <p class="otl">Отличный сервисный центр! Взялись за
                                                                        работу, от которой отказывались в авторизованных сервисных центрах, ссылаясь на неремонтопригодность.
                                                                        По нелепой случайности разбился глазок основной камеры iPhone 12 и соответсвенно пришла в негодность и сама камера.
                                                                        Вечером сдал - днём следующего дня забрал. Все сделано просто идеально! Со стороны вообще не сказать, что с телефоном производились какие-то манипуляции в плане ремонта.
                                                                        Спасибо огромное ребятам за качественный ремонт!
                                                                        Хоть и есть сервисные центры ближе к дому, но теперь однозначно буду ездить только сюда!</p>
    </div>
    </swiper-slide>
                                                            <swiper-slide>
                                                                <div class="mgi2">
                                                                    <h3 class="aass"><i class='bx bxl-google'></i> Егор Панов
    </h3><br>
            <p class="otl">Отличный сервисный центр! Взялись заработу, от которой отказывались в авторизованных сервисных центрах, ссылаясь на неремонтопригодность.По нелепой случайности разбился глазок основносказать, что с телефоном производились какие-то манипуляции в плане ремонта.
    Спасибо огромное ребятам за качественный ремонт!
    Хоть и есть сервисные центры ближе к дому, но теперь однозначно буду ездить только сюда!</p>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="mgi">
                    <h3><i class='bx bxl-google'></i>
                        <p class="p001">|</p> Егор Панов
                    </h3><br>
                    <p class="otl">Отличный сервисный центр! Взялись за
                        работу, от которой отказывались в авторизованных сервисных центрах, ссылаясь на неремонтопригодность.
                                                                        По нелепой случайности разбился глазок основной камеры iPhone 12 и соответсвенно пришла в негодность и сама камера.
                                                                        Вечером сдал - днём следующего дня забрал. Все сделано просто идеально! Со стороны вообще не сказать, что с телефоном производились какие-то манипуляции в плане ремонта.
                                                                        Спасибо огромное ребятам за качественный ремонт!
                                                                        Хоть и есть сервисные центры ближе к дому, но теперь однозначно буду ездить только сюда!</p>
                                                                </div>
                                                            </swiper-slide><swiper-slide>
                                                        
                                                                <div class="mgi2">
                                                                    <h3 class="aass"><i class='bx bxl-google'></i> Егор Панов
                                                                    </h3><br>
                                                                    <p class="otl">Отличный сервисный центр! Взялись за
                                                                        работу, от которой отказывались в авторизованных сервисных центрах, ссылаясь на неремонтопригодность.
                                                                        По нелепой случайности разбился глазок основносказать, что с телефоном производились какие-то манипуляции в плане ремонта.
                                                                        Спасибо огромное ребятам за качественный ремонт!
                                                                        Хоть и есть сервисные центры ближе к дому, но теперь однозначно буду ездить только сюда!</p>
                                                                </div>
                                                            </swiper-slide>
                                                        </swiper> -->
              <!-- </div> -->
              <div class="page-nechi">
                <!-- <center><span class="page-span">Принимаем к оплате</span>
                                        <h1>наличные, карты и переводы</h1>
                                    </center> -->
                <!-- <div class="necicard">
                                        <div class="ant">
                                            <div class="anm">
                                                <h3>Наличный рассчет</h3>
                                                <p>Оплата услуг наличными</p>
                                            </div>
                                            <img src="./image/money-dynamic-color.png" alt="">
                                        </div>
                                        <div class="ant">
                                            <div class="anm">
                                                <h3>Наличный рассчет</h3>
                                                <p>Оплата услуг наличными</p>
                                            </div>
                                            <img src="./image/money-dynamic-color.png" alt="">
                                        </div>
                                        <div class="ant">
                                            <div class="anm">
                                                <h3>Наличный рассчет</h3>
                                                <p>Оплата услуг наличными</p>
                                            </div>
                                            <img src="./image/money-dynamic-color.png" alt="">
                                        </div>
                                    </div>
                                    <div class="mip">
                                        <img src="./image/Frame 631.png" alt="">
                                    </div>
                                    <div class="mini01">
                                        <img src="./image/free-icon-quote-565703 1 (Traced).png" alt="">
                                        <p class="p6">Все работы, которые мы выполняем, требуют неограниченного доступа персонала компании к
                                            современному оборудованию и инструменту, что не является проблемой, поскольку ремонтная база мастерской безупречно оснащена. Кроме того, в распоряжении сотрудников сервис-центра имеется небольшой склад оригинальных запчастей, благодаря которому удается существенно сократить время починки компьютера. Наши специалисты постоянно повышают собственную квалификацию и накапливают полезные знания и опыт в сфере ремонта компьютерной техники</p>
                                    </div> -->
              </div>
            </div>
          </div>
        </div>
        <div class="all">

          <div class="divhr" style="margin-bottom:100px"></div>

          <main class="main-1">
            <h1>
              Наши <span class="ob-span"> контактные данные</span><br>
              для быстрой связи
            </h1>
            <div class="main-1k">
              <div class="main-1b">
                <h6>Все районы Санкт-Петербурга</h6>
                <h2>+7 (812) 333-70-75</h2>
                <div class="acards">
                  <div class="acard">
                    <p>Выезд матеров</p>
                    <h4>с 10:00 до 21:00</h4>
                  </div>
                  <div class="acard">
                    <p>Ремонтная зона</p>
                    <h4>Ленинский пр, 136</h4>
                  </div>
                </div>
                <p class="vi01">Вы всегда можете связаться с нами <br>
                  через мессенджеры!</p>
                <div class="acontacts">
                  <div class="acontact">
                    <div class="aimg"><img style="margin:auto" src="./aimg/path2991.png" alt=""></div>
                    <div>Telegram</div>
                  </div>
                  <div class="acontact">
                    <img src="./aimg/Vector.png" alt="">
                    <div>WhatsApp</div>
                  </div>
                  <div class="acontact">
                    <div class="aimg1"><img class="aimg2" src="./aimg/Vector(1).png" alt=""><img src="./aimg/Vector(1).png" alt=""></div>
                    <div style="margin-left:10px;">3771404@gmail.com</div>
                  </div>
                </div>
                <div class="divhr"></div>
                <p class="vi01">Оставьте заявку на сайте и на <br>
                  Ваш адрес приедет наш специалист</p>
                <button class="n-ost">Оставить заявку на сайте</button>
              </div>
              <div class="main-1m">
                <div id="map" style="width: 100%; height: 100%">
                  <iframe style="margin-top: -60px;width:100%;height: calc(100% + 60px)" src="https://www.google.com/maps/d/embed?mid=1c-HNAs-_hh4f1WRfe-DGnbOPPAcQnZs&ehbc=2E312F"></iframe>
                </div>
              </div>

            </div>

          </main>
          <footer>
            <div class="footer-logo">
              <div class="flogo"><img src="./aimg/laptop-with-arrow 1.png" alt=""></div>
              <h6>Компьютерный сервис</h6>
            </div>
            <ul>
              <a href="">
                <li>Главная</li>
              </a>
              <a href="">
                <li>Устройства</li>
              </a>
              <a href="">
                <li>Бренды</li>
              </a>
              <a href="">
                <li>Районы обслуживания</li>
              </a>
              <a href="">
                <li>Оставить заявку</li>
              </a>
              <a href="">
                <li>О компании </li>
              </a>
              <a href="">
                <li>Контакты</li>
              </a>
            </ul>
            <p>©2023 Сервисный центр электроники webabbas9@gmail.com</p>
          </footer>

        </div>
      </div>
    </div>
  </div>
<!-- <div class="mxmgi">
                                    <div class="mgi">
                                        <h3><i class='bx bxl-google'></i>
                                            <p class="p001">|</p> Егор Панов
                                        </h3><br>
                                        <p class="otl">Отличный сервисный центр! Взялись за
                                            работу, от которой отказывались в авторизованных сервисных центрах, ссылаясь на неремонтопригодность.
                                            По нелепой случайности разбился глазок основной камеры iPhone 12 и соответсвенно пришла в негодность и сама камера.
                                            Вечером сдал - днём следующего дня забрал. Все сделано просто идеально! Со стороны вообще не сказать, что с телефоном производились какие-то манипуляции в плане ремонта.
                                            Спасибо огромное ребятам за качественный ремонт!
                                            Хоть и есть сервисные центры ближе к дому, но теперь однозначно буду ездить только сюда!</p>
                                    </div>
                                    <div class="mgi2">
                                        <h3 class="aass"><i class='bx bxl-google'></i> Егор Панов
                                        </h3><br>
                                        <p class="otl">Отличный сервисный центр! Взялись за
                                            работу, от которой отказывались в авторизованных сервисных центрах, ссылаясь на неремонтопригодность.
                                            По нелепой случайности разбился глазок основносказать, что с телефоном производились какие-то манипуляции в плане ремонта.
                                            Спасибо огромное ребятам за качественный ремонт!
                                            Хоть и есть сервисные центры ближе к дому, но теперь однозначно буду ездить только сюда!</p>
                                    </div>
                                </div> --></template>

<style>
.n-kotegory2 {
  display: none;
}

.n-text {
  display: none;
}
.n-partner2{
  display: none;
}
.n-partner {
  display: flex;
}

.carousel {
  display: none;
}

.n-all-partner {
  display: none;
}

.n-kotegory {
  width: 100%;
  border-top-left-radius: 60px;
  border-top-right-radius: 60px;
  padding-top: 10px;
  padding-bottom: 10px;
  display: none;
  align-items: center;
  justify-content: space-around;
  background: #FFF;
}
.n-kotegory2{
    display: flex;
}
.n-text{
    display: flex;
}
.n-partner{
  display: flex;
}

#n-partner{
    display: flex;
}
.n-all-partner{
    display: flex;
}
.n-footer{
    display: flex;
}

.n-footer {
    display: flex;
}
.n-footer {
  display: none;
}

.qoch {
  padding-top: 50px;
}
</style>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './note.css';

// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Keyboard, Pagination, Navigation],
    };
  },
};
</script>
