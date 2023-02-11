<template>
    <header class="header">
        <nav class="nav">
            <div class="nav-logo">
                <button><i class="bx bx-laptop box-lap"></i>Компьютерный сервис</button>
            </div>
            <div class="nav-menu">
                <button class="addres">Все районы города | +7 (812) 409-42-65</button>
                <button class="call">Вызвать специалиста</button>
                <button class="menu">
                    <i class="bx bx-dots-horizontal-rounded box-dot"></i>Меню
                </button>
            </div>
        </nav>
        <nav class="nav2">
            <div class="nav-logo2">
                <button onclick="document.querySelector('.nav-menu2').classList.toggle('active')
        document.querySelector('.menu').classList.toggle('active')
        " class="menu">
                    <i class="bx bx-dots-horizontal-rounded"></i>Меню
                </button>
            </div>
        </nav>
        <div class="nav-menu2">
            <div class="nav-fixed">
                <button id="addres">
                    <i class="bx bx-laptop box-lap"></i>Компьютерный сервис
                </button>
                <button id="addres" class="addres">
                    Все районы города | +7 (812) 409-42-65
                </button>
                <button id="addres" class="call">Вызвать специалиста</button>
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
            <span class="carousel-control-prev-icon" aria-hidden="true"><i class='bx bx-chevron-left box-carousel-left'></i></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"><i class='bx bxs-chevron-right box-carousel-left'></i></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    <div class="n-all-partner">
        <div class="n-all-partner-p">
            <p>Ремонтируем более 20 различных брендов компьютерной техники.
                <br> Вы точно найдете среди них свой
            </p>
        </div>
        <div class="n-all-partner-p">
            <button>Посмотреть все бренды</button>
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