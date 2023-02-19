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
        <div class="main">
            <div class="main-p">
                <p>
                    <span>Скидка 10%</span> на ремонт <br />
                    компьютерной техники при <br />
                    заявке через сайт
                </p>
            </div>
            <div class="main-none2">
                <img src="../nimg/gift-dynamic-color.png" alt="" />
            </div>
        </div>
        <div class="main-card">
            <div class="room-card1">
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
            <div class="room-card1">
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
        <center class="cent">
        <h1 class="h11"><span class="span-01"> Порядок работы </span>при ремонте<br>
            компьютероной техники</h1>
    </center>
    <div class="uch-3">
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
</div></div>

<center>
    <div class="mini">
        <p>Оставьте заявку на сайте и наш менеджер<br>
            сразу же с Вами свяжется!</p>
        <div class="dum">Оставить
            заявку</div>
    </div>
</center>
<div class="tor-4">
    <center><h1 class="h1-01">Более 200 отзывов<br>
    от <span class="span-01">реальных клиентов</span></h1></center>
</div>
<swiper style="width:80%;margin:auto" :slidesPerView="2" :spaceBetween="2" :loop="true" :pagination="{
    clickable: true,
}" :navigation="true" :modules="modules" class="mySwiper0">
    <swiper-slide>
        <div class="kotta-mgi">
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
        <div class="kic-mgi">
            <h3><i class='bx bxl-google'></i>
                <p class="p001">|</p> Егор Панов
            </h3><br>
            <p class="otl">Отличный сервисный центр! Взялись за
                работу, от которой отказывались в авторизованных сервисных центрах, ссылаясь на неремонтопригодность.
                По нелепой случайности разбился глазок основной камеры iPhone 12 и соответсвенно пришла в не</p>
        </div>
    </div>
    </swiper-slide>
    <swiper-slide>
        <div class="kotta-mgi">
        <div class="mgi2">
            <h3 class="aass"><i class='bx bxl-google'></i> Егор Панов
            </h3><br>
            <p class="otl">Отличный сервисный центр! Взялись за
                работу, от которой отказывались в авторизованных сервисных центрах, ссылаясь на неремонтопригодность.
                По нелепой случайности разбился глазок основносказать, что с телефоном производились какие-то манипуляции в плане ремонта.
                Спасибо огромное ребятам за качественный ремонт!
                Хоть и есть сервисные центры ближе к дому, но теперь однозначно буду ездить только сюда!</p>
        </div>
        <div class="kic-mgi2">
            <h3><i class='bx bxl-google'></i>
                <p class="p001">|</p> Егор Панов
            </h3><br>
            <p class="otl">Отличный сервисный центр! Взялись за
                работу, от которой отказывались в авторизованных сервисных центрах, ссылаясь на неремонтопригодность.
                По нелепой случайности разбился глазок основной камеры iPhone 12 и соответсвенно пришла в не</p>
        </div>
    </div>
    </swiper-slide>
    <swiper-slide>
        <div class="kotta-mgi">
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
            <div class="kic-mgi">
                <h3><i class='bx bxl-google'></i>
                    <p class="p001">|</p> Егор Панов
                </h3><br>
                <p class="otl">Отличный сервисный центр! Взялись за
                    работу, от которой отказывались в авторизованных сервисных центрах, ссылаясь на неремонтопригодность.
                    По нелепой случайности разбился глазок основной камеры iPhone 12 и соответсвенно пришла в не</p>
            </div>
        </div>
    </swiper-slide>
    <swiper-slide>
        <div class="kotta-mgi">
            <div class="mgi2">
                <h3 class="aass"><i class='bx bxl-google'></i> Егор Панов
                </h3><br>
                <p class="otl">Отличный сервисный центр! Взялись за
                    работу, от которой отказывались в авторизованных сервисных центрах, ссылаясь на неремонтопригодность.
                    По нелепой случайности разбился глазок основносказать, что с телефоном производились какие-то манипуляции в плане ремонта.
                    Спасибо огромное ребятам за качественный ремонт!
                    Хоть и есть сервисные центры ближе к дому, но теперь однозначно буду ездить только сюда!</p>
            </div>
            <div class="kic-mgi2">
                <h3><i class='bx bxl-google'></i>
                    <p class="p001">|</p> Егор Панов
                </h3><br>
                <p class="otl">Отличный сервисный центр! Взялись за
                    работу, от которой отказывались в авторизованных сервисных центрах, ссылаясь на неремонтопригодность.
                    По нелепой случайности разбился глазок основной камеры iPhone 12 и соответсвенно пришла в не</p>
            </div>
        </div>
    </swiper-slide><swiper-slide>
        <div class="kotta-mgi">
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
            <div class="kic-mgi">
                <h3><i class='bx bxl-google'></i>
                    <p class="p001">|</p> Егор Панов
                </h3><br>
                <p class="otl">Отличный сервисный центр! Взялись за
                    работу, от которой отказывались в авторизованных сервисных центрах, ссылаясь на неремонтопригодность.
                    По нелепой случайности разбился глазок основной камеры iPhone 12 и соответсвенно пришла в не</p>
            </div>
        </div>
    </swiper-slide>
    <swiper-slide>
        <div class="kotta-mgi">
            <div class="mgi2">
                <h3 class="aass"><i class='bx bxl-google'></i> Егор Панов
                </h3><br>
                <p class="otl">Отличный сервисный центр! Взялись за
                    работу, от которой отказывались в авторизованных сервисных центрах, ссылаясь на неремонтопригодность.
                    По нелепой случайности разбился глазок основносказать, что с телефоном производились какие-то манипуляции в плане ремонта.
                    Спасибо огромное ребятам за качественный ремонт!
                    Хоть и есть сервисные центры ближе к дому, но теперь однозначно буду ездить только сюда!</p>
            </div>
            <div class="kic-mgi2">
                <h3><i class='bx bxl-google'></i>
                    <p class="p001">|</p> Егор Панов
                </h3><br>
                <p class="otl">Отличный сервисный центр! Взялись за
                    работу, от которой отказывались в авторизованных сервисных центрах, ссылаясь на неремонтопригодность.
                    По нелепой случайности разбился глазок основной камеры iPhone 12 и соответсвенно пришла в не</p>
            </div>
        </div>
    </swiper-slide>
</swiper>
<swiper style="width:70%;margin:auto" :slidesPerView="1" :spaceBetween="0" :loop="true" :pagination="{
    clickable: true,
}" :navigation="true" :modules="modules" class="mySwiper02">
    <swiper-slide>
        <div class="kotta-mgi">
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
            <div class="kic-mgi">
                <h3><i class='bx bxl-google'></i>
                    <p class="p001">|</p> Егор Панов
                </h3><br>
                <p class="otl">Отличный сервисный центр! Взялись за
                    работу, от которой отказывались в авторизованных сервисных центрах, ссылаясь на неремонтопригодность.
                    По нелепой случайности разбился глазок основной камеры iPhone 12 и соответсвенно пришла в не</p>
            </div>
        </div>
    </swiper-slide>
    <swiper-slide>
        <div class="kotta-mgi">
            <div class="mgi2">
                <h3 class="aass"><i class='bx bxl-google'></i> Егор Панов
                </h3><br>
                <p class="otl">Отличный сервисный центр! Взялись за
                    работу, от которой отказывались в авторизованных сервисных центрах, ссылаясь на неремонтопригодность.
                    По нелепой случайности разбился глазок основносказать, что с телефоном производились какие-то манипуляции в плане ремонта.
                    Спасибо огромное ребятам за качественный ремонт!
                    Хоть и есть сервисные центры ближе к дому, но теперь однозначно буду ездить только сюда!</p>
            </div>
            <div class="kic-mgi2">
                <h3><i class='bx bxl-google'></i>
                    <p class="p001">|</p> Егор Панов
                </h3><br>
                <p class="otl">Отличный сервисный центр! Взялись за
                    работу, от которой отказывались в авторизованных сервисных центрах, ссылаясь на неремонтопригодность.
                    По нелепой случайности разбился глазок основной камеры iPhone 12 и соответсвенно пришла в не</p>
            </div>
        </div>
    </swiper-slide>
    <swiper-slide>
        <div class="kotta-mgi">
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
            <div class="kic-mgi">
                <h3><i class='bx bxl-google'></i>
                    <p class="p001">|</p> Егор Панов
                </h3><br>
                <p class="otl">Отличный сервисный центр! Взялись за
                    работу, от которой отказывались в авторизованных сервисных центрах, ссылаясь на неремонтопригодность.
                    По нелепой случайности разбился глазок основной камеры iPhone 12 и соответсвенно пришла в не</p>
            </div>
        </div>
    </swiper-slide>
    <swiper-slide>
        <div class="kotta-mgi">
            <div class="mgi2">
                <h3 class="aass"><i class='bx bxl-google'></i> Егор Панов
                </h3><br>
                <p class="otl">Отличный сервисный центр! Взялись за
                    работу, от которой отказывались в авторизованных сервисных центрах, ссылаясь на неремонтопригодность.
                    По нелепой случайности разбился глазок основносказать, что с телефоном производились какие-то манипуляции в плане ремонта.
                    Спасибо огромное ребятам за качественный ремонт!
                    Хоть и есть сервисные центры ближе к дому, но теперь однозначно буду ездить только сюда!</p>
            </div>
            <div class="kic-mgi2">
                <h3><i class='bx bxl-google'></i>
                    <p class="p001">|</p> Егор Панов
                </h3><br>
                <p class="otl">Отличный сервисный центр! Взялись за
                    работу, от которой отказывались в авторизованных сервисных центрах, ссылаясь на неремонтопригодность.
                    По нелепой случайности разбился глазок основной камеры iPhone 12 и соответсвенно пришла в не</p>
            </div>
        </div>
    </swiper-slide><swiper-slide>
        <div class="kotta-mgi">
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
            <div class="kic-mgi">
                <h3><i class='bx bxl-google'></i>
                    <p class="p001">|</p> Егор Панов
                </h3><br>
                <p class="otl">Отличный сервисный центр! Взялись за
                    работу, от которой отказывались в авторизованных сервисных центрах, ссылаясь на неремонтопригодность.
                    По нелепой случайности разбился глазок основной камеры iPhone 12 и соответсвенно пришла в не</p>
            </div>
        </div>
    </swiper-slide>
    <swiper-slide>
        <div class="kotta-mgi">
            <div class="mgi2">
                <h3 class="aass"><i class='bx bxl-google'></i> Егор Панов
                </h3><br>
                <p class="otl">Отличный сервисный центр! Взялись за
                    работу, от которой отказывались в авторизованных сервисных центрах, ссылаясь на неремонтопригодность.
                    По нелепой случайности разбился глазок основносказать, что с телефоном производились какие-то манипуляции в плане ремонта.
                    Спасибо огромное ребятам за качественный ремонт!
                    Хоть и есть сервисные центры ближе к дому, но теперь однозначно буду ездить только сюда!</p>
            </div>
            <div class="kic-mgi2">
                <h3><i class='bx bxl-google'></i>
                    <p class="p001">|</p> Егор Панов
                </h3><br>
                <p class="otl">Отличный сервисный центр! Взялись за
                    работу, от которой отказывались в авторизованных сервисных центрах, ссылаясь на неремонтопригодность.
                    По нелепой случайности разбился глазок основной камеры iPhone 12 и соответсвенно пришла в не</p>
            </div>
        </div>
    </swiper-slide>
</swiper>
<swiper style="margin:auto" :slidesPerView="1" :spaceBetween="30" :loop="true" :pagination="{
    clickable: true,
}" :navigation="true" :modules="modules" class="mySwiper03">
<swiper-slide>
            <div class="mgi">
                <h3><i class='bx bxl-google'></i>
                    <p class="p001">|</p> Егор Пановaaa
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
        <div class="kic-mgi">
            <h3><i class='bx bxl-google'></i>
                <p class="p001">|</p> Егор Пановsss
            </h3><br>
            <p class="otl">Отличный сервисный центр! Взялись за
                работу, от которой отказывались в авторизованных сервисных центрах, ссылаясь на неремонтопригодность.
                По нелепой случайности разбился глазок основной камеры iPhone 12 и соответсвенно пришла в не</p>
        </div>
    </swiper-slide>
    <swiper-slide>
            <div class="mgi2">
                <h3 class="aass"><i class='bx bxl-google'></i> Егор Пановddd
                </h3><br>
                <p class="otl">Отличный сервисный центр! Взялись за
                    работу, от которой отказывались в авторизованных сервисных центрах, ссылаясь на неремонтопригодность.
                    По нелепой случайности разбился глазок основносказать, что с телефоном производились какие-то манипуляции в плане ремонта.
                    Спасибо огромное ребятам за качественный ремонт!
                    Хоть и есть сервисные центры ближе к дому, но теперь однозначно буду ездить только сюда!</p>
            </div>
    </swiper-slide>
    <swiper-slide>
    <div class="kic-mgi2">
    <h3><i class='bx bxl-google'></i>
        <p class="p001">|</p> Егор Пановfff
    </h3><br>
    <p class="otl">Отличный сервисный центр! Взялись за
        работу, от которой отказывались в авторизованных сервисных центрах, ссылаясь на неремонтопригодность.
        По нелепой случайности разбился глазок основной камеры iPhone 12 и соответсвенно пришла в не</p>
    </div>
    </swiper-slide>
</swiper>
<div class="big-card1">
<center class="center-01"><h2>Прочитайте отзывы на сторонних ресурсах <br>
и убедитесь в качестве нашей работы</h2></center>
<div class="imageee">
    <img src="./image/Frame 31.png" alt="">
    <img src="./image/Frame 31.png" alt="">
    <img src="./image/Frame 31.png" alt="">
    <img src="./image/Frame 31.png" alt="">
</div>
</div>
        <main class="main-1">
            <h1>
                Наши <span> контактные данные</span><br>
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
                    <span>Вы всегда можете связаться с нами <br>
                        через мессенджеры!</span>
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
                    <span>Оставьте заявку на сайте и на <br>
                        Ваш адрес приедет наш специалист</span>
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

</template>
<style>
.h1-01{
    color: white;
    font-weight: 700;
}
.uch-3{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
.span-01{
background: #4047FF;
border-radius: 10px;
padding-left: 10px;
font-weight: 700;
}
.swiper {
    width: 100%;
    height: 100%;
}

.kotta-mgi{
    width: 100%;
    display: block;
}
.mgi{
    height: 550px;
    text-align: start;
        padding-left: 20px;
}
.mgi2{
    text-align: start;
        padding-left: 20px;
        /*margin-left: 0px;*/
    background: #29B24A;
}
.kic-mgi{
    color: black;
    width: 80%;
    background: #FC3F1D;
    margin-top: 30px;
    border-radius: 20px;
    text-align: start;
        padding-left: 20px;
}
.swiper-slide {
    font-size: 18px;
    /* background: #000; */

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}
.kic-mgi2{
    width: 70%;
    margin-left: 5%;
    background: #ED484A;
    border-radius: 30px;
    text-align: start;
    padding-left: 20px;
    margin-top: 2px;
    /*margin-left: 0px;*/
}
.kic-mgi2 h3,
.kic-mgi h3{
color: black;
display: flex;
margin-left: 20px;
padding-top: 40px;
}
.footer-logo h6{
    width: 300px;
}
.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.imageee{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
.imageee img {
    margin-left: 2%;
}
.big-card1{
    margin-top: 100px;
    width: 100%;
}
.center-01 h2{
    color: white;
    font-size: 20px;
    /*margin-top: 20px;*/
    font-weight: 300;
}
.mySwiper02{
    display: none;
}
@media(max-width: 1536px){
    .mySwiper0{
        display: none;
    }
    .mySwiper02{
        display: flex;
        width: 90%;
        text-align: center;
        margin: auto;
        justify-content: center;
    }
    .mySwiper02 .mgi{
    width: 70%;
    margin: auto;
    }
}
@media(max-width: 948px){
    .mgi{
        height: auto;
    }
    .mgi2{
        margin-left: 20%;
    }
}
@media(max-width: 610px){
    .mgi2{
        margin-left: 0px;
    }
    .kic-mgi2{
        width: 100%;
        height: 250px;
        margin-left: 0px;
    }
}
.mySwiper03{
    display: none;
}
@media(max-width: 710px){
    .mySwiper02{
        display: none;
    }
    .mySwiper03{
        display: flex;
    }
}
@media(max-width: 406px){
    .center-01 h2{
        font-size: 15px;
    }
    .imageee img{
        width: 50px;
    }
    .kic-mgi2{
        width: 100%;
        font-size: 1px;
    }
    .mySwiper03{
        border-radius: 50px; 
    }
    .mySwiper03 h3{
        font-size: 14px;
        padding-bottom: -10px;
    }
    .otl{
        width: 100%;
        font-size: 10px;
    }
    .mgi{
        margin-left: 10px;
    }
    .kic-mgi{
        height: 200px;
    }
}
@media(max-width: 364px){
    .mgi{
        width: 300px;
    }
}
</style>

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