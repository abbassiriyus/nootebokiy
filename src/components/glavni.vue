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
                    <button class="vizrat">Вызвать мастера</button>
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
                    <button class="vizrat">Вызвать мастера</button>
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
    <div class="n-macc">
        <div class="n-monoblock">
            <div class="n-textabu">
                <h2>Ноутбуки</h2>
                <p>Множество брендов
                    и моделей</p>
            </div>
            <img src="./image/image 85 (1).png" alt="">
        </div>
        <div class="n-monoblock">
            <div class="n-textabu">
                <h2>Ноутбуки</h2>
                <p>Множество брендов
                    и моделей</p>
            </div>
            <img src="./image/image 85 (1).png" alt="">
        </div>
        <div class="n-monoblock">
            <div class="n-textabu">
                <h2>Ноутбуки</h2>
                <p>Множество брендов
                    и моделей</p>
            </div>
            <img src="./image/image 85 (1).png" alt="">
        </div>
    </div>
    <hr>
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
        <div class="bg">
            <div class="cards">
                <center class="cent">
                    <h1 class="h11"><span> Порядок работы </span>при ремонте<br>
                        компьютероной техники</h1>
                </center>
            </div>
            <div class="kta">
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
            </div>
            <center>
                <div class="mini">
                    <p>Оставьте заявку на сайте и наш менеджер<br>
                        сразу же с Вами свяжется!</p>
                    <div class="dum">Оставить
                        заявку</div>
                </div>
            </center>
            <div class="mnca">

                <div class="orta-kicj">
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
                </div>

                <div class="maxx">
                    <div class="mini01">
                    </div>
                    <div class="halilov">
                        <center>
                            <h1 class="bole">Более 200 отзывов <br>
                                от <span> реальных клиентов</span></h1>
                        </center>
                    </div>

                    <swiper style="width:70%;margin:auto" :slidesPerView="2" :spaceBetween="0" :loop="true" :pagination="{
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
                    </swiper>
                    <swiper :pagination="{
                        type: 'progressbar',
                    }" :navigation="true" :modules="modules" class="mySwiper2">
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
                    </swiper>

                    <center class="pasd">
                        <p class="pro">Прочитайте отзывы на сторонних ресурсах<br>
                            и убедитесь в качестве нашей работы</p>
                    </center>
                    <div class="iconka">
                        <img src="./image/Frame 31.png" alt="">
                        <img src="./image/Frame 32.png" alt="">
                        <img src="./image/Frame 36.png" alt="">
                        <img src="./image/Frame 35.png" alt="">
                    </div>
                    <div class="cardla">
                        <h1 class="nma"><span>Наши работы</span> по ремонту<br>
                            компьюетрной техники</h1>
                        <div class="btnla">
                            <button>Ноутбуки</button>
                            <button>Моноблоки</button>
                            <button>Компьютеры</button>
                        </div>

                        <div class="phon">
                            <swiper style="width:80%;margin:auto" :slidesPerView="1" :spaceBetween="0" :loop="true" :pagination="{
                                clickable: true,
                            }" :navigation="true" :breakpoints="{
    1600: {
        slidesPerView: 2
    },
}" :modules="modules" class="mySwiper">
                                <swiper-slide>
                                    <div class="abdurahim">
                                        <div class="jadks">
                                            <h1>Ремонт материнской платы различных<br>
                                                брендов и моделей ноутбуков</h1>
                                            <p>Ремонт ноутбуков</p>
                                        </div>
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="abdurahim">
                                        <div class="jadks">
                                            <h1>Ремонт материнской платы различных<br>
                                                брендов и моделей ноутбуков</h1>
                                            <p>Ремонт ноутбуков</p>
                                        </div>
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="abdurahim">
                                        <div class="jadks">
                                            <h1>Ремонт материнской платы различных<br>
                                                брендов и моделей ноутбуков</h1>
                                            <p>Ремонт ноутбуков</p>
                                        </div>
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="abdurahim">
                                        <div class="jadks">
                                            <h1>Ремонт материнской платы различных
                                                брендов и моделей ноутбуков</h1>
                                            <p>Ремонт ноутбуков</p>
                                        </div>
                                    </div>
                                </swiper-slide><swiper-slide>
                                    <div class="abdurahim">
                                        <div class="jadks">
                                            <h1>Ремонт материнской платы различных<br>
                                                брендов и моделей ноутбуков</h1>
                                            <p>Ремонт ноутбуков</p>
                                        </div>
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="abdurahim">
                                        <div class="jadks">
                                            <h1>Ремонт материнской платы различных<br>
                                                брендов и моделей ноутбуков</h1>
                                            <p>Ремонт ноутбуков</p>
                                        </div>
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="abdurahim">
                                        <div class="jadks">
                                            <h1>Ремонт материнской платы различных<br>
                                                брендов и моделей ноутбуков</h1>
                                            <p>Ремонт ноутбуков</p>
                                        </div>
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="abdurahim">
                                        <div class="jadks">
                                            <h1>Ремонт материнской платы различных<br>
                                                брендов и моделей ноутбуков</h1>
                                            <p>Ремонт ноутбуков</p>
                                        </div>
                                    </div>
                                </swiper-slide><swiper-slide>

                                    <div class="abdurahim">
                                        <div class="jadks">
                                            <h1>Ремонт материнскойплаты различных<br>
                                                брендов и моделейноутбуков</h1>
                                            <p>Ремонт ноутбуков</p>
                                        </div>
                                    </div>
                                </swiper-slide>
                            </swiper>
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
                            <div class="mini01">
                                <img src="./image/free-icon-quote-565703 1 (Traced).png" alt="">
                                <p class="p6">Все работы, которые мы выполняем, требуют неограниченного доступа персонала компании к
                                    современному оборудованию и инструменту, что не является проблемой, поскольку ремонтная база мастерской безупречно оснащена. Кроме того, в распоряжении сотрудников сервис-центра имеется небольшой склад оригинальных запчастей, благодаря которому удается существенно сократить время починки компьютера. Наши специалисты постоянно повышают собственную квалификацию и накапливают полезные знания и опыт в сфере ремонта компьютерной техники</p>
                            </div>
                            <div class="latta" style="margin-top: 100px;">
                                <center>
                                    <h1 class="qoch">Вызовите специалиста на дом<br>
                                        <span>Приедем в любой район</span> Санкт-Петербурга
                                    </h1>
                                    <p class="poch" style="margin-top: 30px;">Мы приедем, починим Ваше устройство или заберем
                                        его в сервисный центр для дальнейшего ремонта</p>
                                </center>
                                <div class="bosh">
                                    <div class="kalla2">
                                        <div class="pta">
                                            <img src="./image/Metro_Sankt-Petersburg 9.png" alt="">
                                            <br>
                                            <h4>Крaсная ветка</h4>
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
                                </div>
                            </div>
                            <div class="page-nechi">
                                <center><span class="page-span">Принимаем к оплате</span>
                                    <h1>наличные, карты и переводы</h1>
                                </center>
                                <div class="necicard">
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
                                </div>
                            </div>
                        </div>
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
                                </div> -->
</template>
<style scoped>
* {
    padding: 0px;
    margin: 0px;
    font-family: 'Mulish', sans-serif;
}


.main-4 {
    position: relative;
}

.main-4 h1 {
    text-align: center;
    font-family: 'Mulish', sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;
    margin-left: 10%;
    margin-bottom: 30px;
    margin-top: 30px;
    color: #FFFFFF;
}

.er {
    position: absolute;
    top: 30%;
    width: 100%;
    left: 0px;
}

.main-4 h1 span {

    border-radius: 5px;
    padding-left: 5px;
    padding-right: 5px;
}

.acards3 {
    display: flex;
    justify-content: center;
    gap: 30px;
    /* flex-wrap:wrap; */
    width: 100vw;

}

#ere {
    position: relative;
    top: -100px
}

@media(max-width:650px) {
    #ere {
        position: relative;
        top: 0px
    }

    .acards3 {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 30px;
        /* flex-wrap:wrap; */
        width: 100vw;

    }
}

.acard3 {
    flex-direction: column;
    align-items: flex-start;
    padding: 30px;
    margin-bottom: 20px;
    width: 300px;
    /* height: 211px; */
    /* Белый */
    background: #FFFFFF;
    border-radius: 30px;
}

.acard3 h5 {
    /* Десктоп/h3 New 24px */
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 29px;

    /* Черный */
    color: #000000;


    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;
}

.acards31 {
    position: relative;
}






/* .main-3 */
.main-3 h1 {
    text-align: center;
    font-family: 'Mulish', sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;
    margin-left: 10%;
    margin-bottom: 30px;
    margin-top: 30px;
    color: #FFFFFF;
}

.main-3 h1 span {
    background-color: #4047FF;
    border-radius: 5px;
    padding-left: 5px;
    padding-right: 5px;
}

.acards2 {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

}

.acard2 {
    width: 27%;
    display: flex;
    min-width: 300px;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
    isolation: isolate;
    background: #FFFFFF;
    border-radius: 30px;
    margin-bottom: 20px;
}

.card2 h6 {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 29px;
    color: #000000;
}

.card2 p {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 140%;
    color: #949494;
}

.acards3 {
    display: flex;
    justify-content: space-around;
    min-width: 300px;
    width: 60%;
    max-width: 450px;
    margin: auto;
    margin-top: 70px;
}



/* .main-2 */
.main-2 {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    /*margin-top: 150px;
    margin-bottom: 100px; */

}

.main-2 p {
    width: 80%;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    text-align: justify;
    /* or 35px */
    font-feature-settings: 'pnum' on, 'lnum' on;

    /* Белый */
    color: #FFFFFF;
}

.main-2 img {
    width: 5%;
    min-width: 15px;
    max-width: 40px;
    margin-right: 20px;
}

@media(max-width:991px) {
    .main-2 p {
        font-size: 15px;
    }
}



/* main-1 */
.main-1 {
    margin-bottom: 40px;
}

.main-1 h1 {

    font-family: 'Mulish', sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;
    margin-left: 10%;
    margin-bottom: 30px;
    margin-top: 30px;
    color: #FFFFFF;
}

.main-1 h1 span {
    background-color: #4047FF;
    border-radius: 5px;
    padding-left: 5px;
    padding-right: 5px;
}

.main-1k {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    /* align-items: center; */
}

.main-1b {

    width: 40%;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: #FFFFFF;
    border-radius: 30px;
    margin-bottom: 30px;
}

.main-1m {
    /* background-color: red; */
    border-radius: 30px;
    overflow: hidden;
    width: 40%;
    min-height: 200px;
    min-width: 300px;
    margin-bottom: 30px;
}

.main-1b h6 {
    padding-top: 30px;
    padding-left: 10%;
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 29px;

    /* Белый */
    color: black;
}

.main-1b span {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 140%;
    color: #fff;
    font-weight: 700;
    margin-left: 10%;
    margin-top: 20px;
}

.main-1b h2 {
    font-style: normal;
    padding-top: 20px;
    font-weight: 800;
    font-size: 44px;
    line-height: 110%;
    padding-left: 10%;
    color: black;
}

.acards {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    width: 80%;
    max-width: 500px;
    margin-left: 10%;
}

.acard p {
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    color: black;
}

.acard h4 {
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 29px;
    color: black;
}

.acontacts {
    display: flex;
    /* justify-content: space-around; */
    flex-wrap: wrap;
    margin-left: 10%;
    /* width: 100%; */
    margin-top: 20px;

}

.aimg {
    background: linear-gradient(203.2deg, #37AEE2 21.67%, #1E96C8 70%);
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    margin: auto;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
}

.aimg img {
    margin: auto;
}

.acontact {
    margin-right: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 12px;
    background: #ECECEC;
    border-radius: 20px;
    margin-bottom: 10px;
}

.divhr {
    width: 80%;
    border: 1px solid rgb(22, 22, 22);
    margin: auto;
    margin-top: 20px;
}

.acontact img {
    margin-right: 10px;
}

.main-1b button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 30px;
    background: #4047FF;
    border: none;
    border-radius: 20px;
    margin-left: 10%;
    margin-top: 20px;
    margin-bottom: 20px;
    font-style: normal;
    font-weight: 800;
    font-size: 15px;
    line-height: 18px;


    color: #FFFFFF;
}

@media(max-width:991px) {
    .acard p {
        font-size: 8px;
    }

    .main-1b h2 {
        font-size: 24px;
    }

    .main-1b span {
        font-size: 8px;
    }

    .acard h4 {
        font-size: 13px;
    }

    .main-1b h6 {
        font-size: 13px;
    }
}


@media (max-width:600px) {
    .main-1 h1 {
        font-size: 24px;
    }
}

/* footer */
footer {
    background-color: white;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
}

footer ul li:hover {
    color: #4047FF;
    text-align: center;
    font-family: 'Mulish', sans-serif;
}

footer h6 {
    font-family: 'Mulish', sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 22px;
    color: #000000;
}

footer ul li {
    transition: 1s;
    font-family: 'Mulish', sans-serif;
    color: #000000;
    min-width: 200px;
    text-align: center;
}

footer ul {
    margin-top: 30px;
    margin-bottom: 30px;
    list-style: none;
    display: flex;
    justify-content: space-around;
    width: 100%;
    flex-wrap: wrap;

}

footer a {
    text-decoration: none;
}

footer p {
    text-align: center;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 140%;
    color: #949494;
}

.footer-logo h6 {
    width: auto;
    margin-left: 20px;
}

footer .footer-logo {
    width: 280px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: auto;
}

footer .flogo {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #4047FF;
    border-radius: 20px;
}

footer {
    padding-top: 50px;
    padding-bottom: 50px;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.mip {
    width: 100%;
    margin-top: 80px;
    text-align: center;
}

span {
    background: #4047FF;
    padding-left: 10px;
    padding-right: 3px;
    border-radius: 10px;
}

.cent {
    color: white;
    font-weight: 600;
}

main {
    /*background: #000;*/
}

.bg {
    width: 100%;
    height: 100%;
    /*background: #000;*/
    padding-top: 60px;
}

.card {
    width: 390px;
    background: #fff;
    margin-top: 20px;
    padding-left: 20px;
    border-radius: 20px;
    margin-left: 20px;
}

.card img {
    width: 30%;
}

.p01 {
    margin-top: 100px;
    font-weight: 900;
    padding-bottom: 10px;
    color: #4047FF;
}

.p02 {
    margin-top: 30px;
    width: 90%;
    color: #949490;
}

.h03 {
    margin-top: 10px;
    width: 80%;
    color: black;
}

.cs {
    display: block;
}

.kta {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    flex-wrap: wrap;
    padding-bottom: 20px;
}

.ss {
    margin-top: 30px;
}

.mini {
    width: 70%;
    height: 20%;
    color: white;
    padding-bottom: 30px;
}

.mini p {
    padding-top: 20px;
    font-size: 17px;
    font-weight: 700;
}

.dum {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    padding-top: 30px;
    background: #4047FF;
    color: white;
    margin-top: 10px;
    font-weight: 700;
}

.mnca {
    width: 100%;
    height: 10vh;

    padding-top: 50px;
}

.spn1 {
    color: #4047ff;
    background: none;
}

.pp1 {
    margin-top: 20px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: gray;
}

.asd {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 900;
}

.orta-kicj {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    background: #FFF;
    padding-top: 10px;
    padding-bottom: 10px;

}

.kicik {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    flex-wrap: wrap;
}

.kicik .kam {
    margin-left: 25px;
    margin-top: 10px;
}

.kam img {
    border-radius: 30px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.114);
    width: 170px;
}

.kotta {
    width: 100%;
    height: 100vh;
    background: #fff;
}

.kicik2 {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    flex-wrap: wrap;
}

.kicik2 .kam {
    margin-left: 25px;
    margin-top: 20px;
}

.clci {
    width: 230px;
    height: 50px;
    border-radius: 20px;
    border: none;
    background: #4047FF;
    font-size: 13px;
    color: white;
    margin-top: 30px;
    font-weight: 700;
}

.clci:hover {
    background: #fff;
    color: #4047ff;
    border: 1px solid #4047ff;
}

center {
    padding-bottom: 60px;
}

.maxx {
    width: 100%;
    /* height: 100vh; */
    /*background: #000;*/
    padding-top: 30px;
    padding-bottom: 40px !important;
    /* margin-top: 30px; */
}

.p6 {
    width: 70%;
    color: white;
    font-size: 22px;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
}

.mini01 {
    width: 80%;
    display: flex;
    justify-content: center;
    margin-top: 120px;
}

.mini01 img {
    width: 30px;
    height: 30px;
}

.bole {
    color: white;
    font-weight: 700;
    font-family: 'Gilroy';
    font-style: normal;
    margin-top: 30px;
}

.halilov {
    width: 100%;
    /* height: 100%; */
    /*background: #000;/*
    padding-top: 70px;
    /* margin-top: 100px; */
}

.mgi {
    width: 80%;
    padding-left: 20px;
    padding-top: 20px;
    min-width: 300px;
    border-radius: 30px;
    background: #3575e4f1;
    color: white;
    margin-top: 20px;
}

.otl {
    width: 90%;
    padding-bottom: 20px;
}

.p001 {
    margin-top: 8px;
    /* width: 1px; */
    font-size: 20px;
    color: rgba(0, 0, 0, 0.15);
    ;
    padding-left: 10px;
    padding-right: 10px;
}

.mgi h3 {
    display: flex;
    align-items: center;
}

.mgi2 {
    width: 70%;
    min-width: 300px;
    /* height: 340px; */
    padding-left: 20px;
    padding-top: 20px;
    border-radius: 30px;
    background: #FC3F1D;
    color: white;
    margin-left: 30px;
    margin-top: 20px;
}

.mxmgi {
    display: flex;
    justify-content: center;
    /* margin-top: 100px; */
    padding-bottom: 20px;
    flex-wrap: wrap;
    /*background: #000;*/
}

.aass {
    display: flex;
}

.aass i {
    margin-top: 5px;
    padding-right: 15px;
}

@media(max-width: 376px) {
    .card {
        width: 80%;
        margin: auto;
        margin-top: 20px;
        /* height: 390px; */
    }

    .p01 {
        margin-top: 10px;
    }

    .h03 {
        font-size: 17px;
    }

    .p02 {
        font-size: 11px;
    }

    .pro {
        font-size: 13 px;
    }

    .h11 {
        font-size: 20px;
    }

    .asd {
        font-size: 18px;
    }

    .mini01 img {
        width: 13px;
        height: 13px;
    }

    hr {
        margin-top: 30px;
    }

    .poch {
        width: 280px;
        font-size: 17px;
    }

    .mgi {
        margin: 0 auto;
    }
}

@media(max-width: 717px) {
    .p6 {
        font-size: 3vw;
    }

    .mini01 {
        margin-top: 7px;
    }

    hr {
        margin-top: 70px;
    }

    .iconka img {
        width: 50px;
    }
}

@media(max-width:458px) {
    .mgi {
        margin: 0 auto;
        width: 80%;
    }

    .mgi2 {
        margin: 0;
        width: 80%;
        height: auto;
        margin-top: 10px;
    }

    .otl {
        font-size: 13px;
    }

    .mgi2 h3,
    .mgi h3 {
        font-size: 17px;
    }


    .pro {
        color: white;
    }

    .iconka {
        display: flex;
        justify-content: center;
    }

    .pasd {
        height: 10px;
        padding-top: 3%;
    }

    .iconka img {
        /* width: 200px; */
        margin-left: 10px;
        margin-top: 10px;
        border-radius: 50%;
    }
}

@media(max-width: 422px) {
    .iconka {
        flex-wrap: wrap;
        margin-top: 10px;
    }
}

.iconka img:hover {
    box-shadow: 0 0 10px white, inset 0 10px 0 white;
    scale: .9;
}

.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    font-size: 18px;
    /* background: #000; */

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

@media(max-width:1328px) {

    .swiper-slide .mgi,
    .mgi2 {
        width: 200px;
        margin-left: 12%;
        height: 400px;
        font-size: 12px;
    }
}

.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    /* text-align: center; */
    font-size: 18px;
    /* background: #000; */
    color: white;
    background: url("https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg");
    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.swiper-pagination-bullet-active {
    color: #fff;
    background: #007aff;
}

.mySwiper3 {
    width: 100%;
}

.swiper-wrapper {
    display: flex;
    justify-content: center;
}

.mySwiper2 {
    width: 100%;
    display: none;
}

@media(max-width: 988px) {
    .mySwiper2 {
        width: 100%;
        display: flex;
        margin-left: -15px;
        padding-bottom: 30px;
    }

    .mySwiper {
        width: 100%;
        display: flex;
    }

    .mySwiper0 {
        display: none;
    }

    .otl {
        font-size: 12px;
    }
}

.nma {
    color: white;
    font-weight: 700;
    margin-left: 10%;
    margin-top: 110px;
}

.btnla button {
    /* width: 240px; */
    height: 50px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 20px;
    font-weight: 700;
    margin-left: 7px;
}

.btnla {
    margin-left: 9%;
    margin-top: 30px;
}

.btnla button:active {
    color: #4047FF;
}

.phon {
    width: 100%;
    margin-top: 30px;
}

.mgi3 {
    margin-top: 340px;
    width: 100%;
    height: 300px;
    background: url("https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg");
}

.mgi img {
    width: 100%;
    height: 200px;
}

.abdurahim {
    width: 630px;
    height: 400px;
    background-image: url("/src/components/image/IMG_5451\ 1.png");
    padding-top: 150px;
}

center .poch,
.qoch {
    color: white;
}

.qoch {
    font-weight: 700;
}

.poch {
    width: 500px;
    font-weight: 700;
}

.bosh {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background: url("./Vector\ 1.png");
    width: 100%;
}

.kalla {
    margin-left: 2%;
}

.n-ost:hover {
    background: #fff;
    color: #4047ff;
    border: 1px solid #4047ff;
}

.pta {
    width: 400px;
    margin-left: 2%;
    background: #fff;
    padding-left: 20px;
    padding-top: 20px;
    padding-bottom: 10px;
    margin-top: 30px;
    border-radius: 20px;
}

.kalla {
    margin-top: 30px;
}

.jadks {
    width: 100%;
    margin-top: 150px;
    margin-left: 10px;
}

.jadks h1 {
    width: 90%;
    font-size: 22px;
}

.mySwiper3 {
    width: 80%;
    display: none;
    justify-content: center;
}

@media(max-width: 1600px) {
    .mySwiper3 {
        display: flex;
        width: 630px;
    }

    .phon .cardcami {
        width: 100%;
        height: 400px;
        /*margin-left: 20%*/
    }

    .cardcami h1 {
        margin-top: 30px;
    }


}

@media(max-width: 804px) {
    .mySwiper3 {
        width: 530px;
        height: 300px;
        border-radius: 22px;
    }

    .cardcami h1 {
        padding-top: 100px;
    }

    .mini01 {
        margin-top: 30px;
    }

    .nma {
        font-size: 23px;
    }

    .btnla button {
        width: 100px;
        text-align: center;
        height: 30px;
        padding-right: 120px;
    }
}

@media(max-width: 640px) {
    .abdurahim {
        width: 90%;
        margin-left: 10px;
    }

    .mySwiper3 .abdurahim h3 {
        margin-top: 90px;
    }
}

.cardcami {
    width: 100%;
    height: 200px;
    padding-top: 100px;
    color: white;
    padding-left: 10px;
    background-image: url("/src/components/image/IMG_5451\ 1.png");
}

.cardcami h1 {
    width: 300px;
    font-size: 23px;
}

@media(max-width: 718px) {
    .mySwiper3 {
        width: 630px;
    }
}

@media(max-width: 646px) {
    .mySwiper3 {
        width: 430px;
    }

    .pta {
        width: 100%;
    }

    .btnla button {
        margin-top: 20px;
    }

    .qoch {
        width: 100%;
        font-size: 17px;
    }

    .poch {
        width: 90%;
        font-size: 15px;
    }


    .poch,
    .qoch {
        color: white;
    }
}

@media(max-width: 466px) {
    .mySwiper3 {
        width: 100%;
    }

    .pta {
        width: 100%;
        padding-right: 10px;
    }

    .pta h4 {
        font-size: 16px;
    }

    .pta p {
        width: 100%;
        font-size: 13px;
    }
}

.page-nechi {
    margin-top: 10%;
}

.page-span {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;
    color: #FFFFFF;
}

.page-nechi h1 {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;
    color: #FFFFFF;
}

.necicard {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 70%;
    margin: 0 auto;
    flex-wrap: wrap;
}

.ant {
    display: flex;
    background: #fff;
    padding: 20px;
    margin-top: 20px;
    border-radius: 20px;
}

.anm h3 {
    font-size: 23px;
    font-weight: 700;
    color: black;
}

.anm {
    margin-top: 10px;
}

.anm p {
    color: #949494;
}

.ant img {
    margin-left: 20px;
    align-items: center;
}

.n-ost {
    width: 70%;
    background: #000;
    margin-right: 50px;
}

@media(max-width: 334px) {
    .page-span {
        font-size: 20px;
    }

    .page-nechi center h1 {
        font-size: 20px;
    }
}

@media(max-width: 536px) {
    .anm h3 {
        font-size: 17px;
    }

    .anm p {
        font-size: 13px;
    }

    .ant img {
        width: 70px;
    }
}

@media(max-width: 410px) {
    .ant {
        width: 80%;
    }

    .necicard {
        width: 100%;
    }

    .anm h3 {
        font-size: 13px;
    }

    .mip img {
        width: 100%;
    }

    .main-1 h1 {
        font-size: 17px;
    }

    .jadks h1 {
        font-size: 13px;
    }
}

@media(max-width: 790px) {
    .phon .abdurahim {
        width: 540px;
        height: 200px;
        margin-left: 5px;
        border-radius: 20px;
    }

    .jadks {
        margin-top: -60px;
        text-shadow: 0 0 10px black;
    }
}

.n-macc {
    width: 100%;
    background: #fff;
    display: flex;
    justify-content: space-evenly;
    padding-top: 100px;
    padding-bottom: 100px;
    flex-wrap: wrap;
}

.n-monoblock {
    display: flex;
    background: #E6E7FF;
    width: 400px;
    height: 150px;
    padding: 10px;
    border-radius: 10px;
    margin-top: 10px;
}

.n-macc img {
    width: 35%;
    height: 100px;
    padding: 10px;
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
