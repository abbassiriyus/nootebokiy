<template>
<div>
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
        <swiper class="mySwiper" 
        :slidesPerView="2"
    :spaceBetween="10"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    style="background: #000; width: 80%;"
        >
    <swiper-slide><img src="./image/image 39.png" alt=""></swiper-slide>
    <swiper-slide><img src="./image/IMG_5764 2.png" alt=""></swiper-slide>
    <swiper-slide><img src="./image/image 39.png" alt=""></swiper-slide>
    <swiper-slide><img src="./image/IMG_5764 2.png" alt=""></swiper-slide>
    <swiper-slide><img src="./image/image 39.png" alt=""></swiper-slide>
    <swiper-slide><img src="./image/IMG_5764 2.png" alt=""></swiper-slide>
    <swiper-slide><img src="./image/image 39.png" alt=""></swiper-slide>
    <swiper-slide><img src="./image/IMG_5764 2.png" alt=""></swiper-slide>
    <swiper-slide><img src="./image/image 39.png" alt=""></swiper-slide>
  </swiper>
  <swiper class="mySwiper002" 
        :slidesPerView="1"
    :spaceBetween="10"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    style="background: #000; width: 80%;display: none;"
        >
    <swiper-slide><img src="./image/image 39.png" alt=""></swiper-slide>
    <swiper-slide><img src="./image/IMG_5764 2.png" alt=""></swiper-slide>
    <swiper-slide><img src="./image/image 39.png" alt=""></swiper-slide>
    <swiper-slide><img src="./image/IMG_5764 2.png" alt=""></swiper-slide>
    <swiper-slide><img src="./image/image 39.png" alt=""></swiper-slide>
    <swiper-slide><img src="./image/IMG_5764 2.png" alt=""></swiper-slide>
    <swiper-slide><img src="./image/image 39.png" alt=""></swiper-slide>
    <swiper-slide><img src="./image/IMG_5764 2.png" alt=""></swiper-slide>
    <swiper-slide><img src="./image/image 39.png" alt=""></swiper-slide>
  </swiper>
    <div class="orta-kicj" style="background: #000; color: white;">
                    <center>
                        <h1 class="asd">Наши мастера и курьеры<br>
                            всегда готовы <span class="spn1"> приехать на помощь</span></h1>
                        <p class="pp1">Вызовите мастера или курьера в любой<br>
                            район Санкт-Петербурга</p>
                    </center>
                    <div class="kicik">
                        <div class="kam" style="position: relative;">
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
    <div>
        <center class="cent-h01"><h1>Работаем официально и имеем необходимые <br>
       <span class="sert-01">сертификаты соответствия</span> </h1></center>
        <div class="mini-cards">
            <div class="mini-card01"><img src="./image/image 17.png" alt=""></div>
            <div class="mini-card01"><img src="./image/image 17.png" alt=""></div>
        </div>
        <center>
            <div class="mini">
                <p>Оставьте заявку на сайте и наш менеджер<br>
                    сразу же с Вами свяжется!</p>
                <div class="dum">Оставить
                    заявку</div>
            </div>
        </center>
        <center>
            <h1 class="brabota">В работес ипользуем <span class="span-01"> профессиональные</span> <br>
            иструменты и оборудование</h1>
        </center>
        <swiper :slidesPerView="1" :navigation="true" :modules="modules" class="mySwiper2">
            <swiper-slide> <img  class="ima-ge" src="./image/Group 323.png" alt="">
                <p class="imgm">asdsadfadfds шлефов матринцы на ноутбуке</p>
            </swiper-slide>
            <swiper-slide> <img  class="ima-ge" src="./image/Mask group.png" alt="">
                <p class="imgm">Ремонт шлефов матринцы на ноутбуке</p>
            </swiper-slide><swiper-slide> <img class="ima-ge" src="./image/Group 323.png" alt="">
                <p class="imgm">Ремонт шлефов матринцы на ноутбуке</p>
            </swiper-slide>
            <swiper-slide> <img  class="ima-ge" src="./image/Mask group.png" alt="">
                <p class="imgm">Ремонт шлефов матринцы на ноутбуке</p>
            </swiper-slide><swiper-slide> <img class="ima-ge" src="./image/Group 323.png" alt="">
                <p class="imgm">Ремонт шлефов матринцы на ноутбуке</p>
            </swiper-slide>
            <swiper-slide> <img  class="ima-ge" src="./image/Mask group.png" alt="">
                <p class="imgm">Ремонт шлефов матринцы на ноутбуке</p>
            </swiper-slide><swiper-slide> <img class="ima-ge" src="./image/Group 323.png" alt="">
                <p class="imgm">Ремонт шлефов матринцы на ноутбуке</p>
            </swiper-slide>
            <swiper-slide> <img  class="ima-ge" src="./image/Mask group.png" alt="">
                <p class="imgm">Ремонт шлефов матринцы на ноутбуке</p>
            </swiper-slide><swiper-slide> <img class="ima-ge" src="./image/Group 323.png" alt="">
                <p class="imgm">Ремонт шлефов матринцы на ноутбуке</p>
            </swiper-slide>
        </swiper>
        <swiper :slidesPerView="2" :spaceBetween="30" :keyboard=" {
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
        <div class="mini01">
            <img src="./image/free-icon-quote-565703 1 (Traced).png" alt="">
            <p class="p6">Все работы, которые мы выполняем, требуютванию и инструменту, что не является проблемой, поскольку ремонтикацию и накапливают полезные знания и опыт в сфере ремонта компьютерной техники</p>
        </div>
        <div class="bosh">
            <div class="kalla2">
                <div class="pta">
                    <img src="./image/Frame 703.png" alt="">
                    <br>
                    <h4>Красная ветка</h4>
                    <p>Все станции красной ветки метрополитена <br>
                        и районы вокруг</p>
                </div>
                <div class="pta">
                    <img src="./image/Frame 703 (1).png" alt="">
                    <br>
                    <h4>Зеленая ветка</h4>
                    <p>Все зеленый красной ветки метрополитена <br>
                        и районы вокруг</p>
                </div>
                <div class="pta">
                    <img src="./image/Frame 703 (2).png" alt="">
                    <br>
                    <h4>Фиолетвый ветка</h4>
                    <p>Все станции фиолетвый ветки метрополитена <br>
                        и районы вокруг</p>
                </div>
            </div>
            <div class="kalla">
                <div class="pta">
                    <img src="./image/Frame 703 (3).png" alt="">
                    <br>
                    <h4>Синия ветка</h4>
                    <p>Все станции синий ветки метрополитена <br>
                        и районы вокруг</p>
                </div>
                <div class="pta">
                    <img src="./image/Frame 703 (4).png" alt="">
                    <br>
                    <h4>Оранжевая</h4>
                    <p>Все станции оранжевой ветки метрополитена <br>
                        и районы вокруг</p>
                </div>
                <div class="pta">
                    <img src="./image/Frame 703 (5).png" alt="">
                    <br>
                    <h4>Красная ветка</h4>
                    <p>Все станции красной ветки метрополитена <br>
                        и районы вокруг</p>
                </div>
            </div>
            <div class="mini02">
        
            </div>
        </div>
        <center class="cent">
            <h1 class="h11"><span class="span-01"> Порядок работы </span>при ремонте<br>
                компьютероной техники</h1>
        </center>
        <hr style="margin-bottom: 30px;">
        <div class="tor-4">
            <center>
                <h1 class="h1-01">Более 200 отзывов<br>
                    от <span class="span-01">реальных клиентов</span></h1>
            </center>
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
            <center class="center-01">
                <h2>Прочитайте отзывы на сторонних ресурсах <br>
                    и убедитесь в качестве нашей работы</h2>
            </center>
            <div class="imageee">
                <img src="./image/Frame 31.png" alt="">
                <img src="./image/Frame 31.png" alt="">
                <img src="./image/Frame 31.png" alt="">
                <img src="./image/Frame 31.png" alt="">
            </div>
            <div class="mini01">
                <img src="./image/free-icon-quote-565703 1 (Traced).png" alt="">
                <p class="p6">Все работы, которые мы выполняем, требуютванию и инструменту, что не является проблемой, поскольку ремонтикацию и накапливают полезные знания и опыт в сфере ремонта компьютерной техники</p>
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
</template>

<style>
@media(max-width: 740px){
    .mySwiper002{
        display: flex !important;
    }
}
@media(max-width: 380px){
    .mini-card01 img{
        width: 40% !important;
        margin-left: 5px;
    }
    .mini-card01{
        margin: auto !important;
    }
    ul{
        text-align: center !important;
    }
    .cent-h01 h1{
        font-size: 15px !important;
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
