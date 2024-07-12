'use strict'

$(function () {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        speed: 1000,
        responsive: [

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    })

});



let redbuts = document.querySelectorAll('.red_button');

for (let redbut of redbuts) {
    redbut.addEventListener('click', function onClick() {
        redbut.firstChild.classList.toggle("redd");
        let card = redbut.parentNode.parentNode.parentNode;
        let clone = card.cloneNode(true);
        clone.classList.add('cl');


        if (redbut.firstChild.classList.contains('redd')) {
            document.querySelector('.fav').append(clone);


        }

    });

};

let bar = document.querySelector('.fa-bars');
let menu = document.querySelector('.buttons_list');
bar.addEventListener('click', function barr() {
    //menu.classList.toggle('gg');
    $('.buttons_list').toggle();
});



let log = document.querySelector('#log');
let ll = document.querySelector('.reg');
log.addEventListener('click', function login() {
    ll.classList.toggle('reg_click');
});

let favbut = document.querySelector('#fav-but');
let fav1 = document.querySelector('.fav1');
favbut.addEventListener('click', function favo() {
    fav1.classList.toggle('fav_click');
});


$(window).scroll(function () {
    if ($(window).scrollTop() > 250) {
        $('.main_catalog_first_foto').show('slow');
    };
});

$(window).scroll(function () {
    if ($(window).scrollTop() > 550) {
        $('.main_catalog_second_foto').show('slow');
    };
});

$(window).scroll(function () {
    if ($(window).scrollTop() > 1300) {
        $('.container').show('slow');
    };
});

$(".catalog_button_first").click(function () { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: $(".main_new_title").offset().top  // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
});


//--------------------------
$(function () {
    $('.smart-basket__wrapper').smbasket({
        productElement: 'card_wrapper',
        buttonAddToBasket: 'buy_button',
        productPrice: 'product__price-number',
        productSize: 'product__size-element',

        productQuantityWrapper: 'product__quantity',
        smartBasketMinArea: 'busket',
        countryCode: '+38',
        smartBasketCurrency: '₴',
        smartBasketMinIconPath: './smartbasket/img/shopping-basket-wight.svg',

        agreement: {
            isRequired: true,
            isChecked: true,
            isLink: 'https://artstranger.ru/privacy.html',
        },
        nameIsRequired: false,
    });
});













