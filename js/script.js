$(document).ready(function () {

    new WOW({
        animateClass: 'animate__animated'
    }).init();


    $('.product-image').magnificPopup({
        type: 'image'
    });

    $('.single-item').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000
    });

    $("#accordion").accordion();

    $(function () {

        $(".ui-state-default").on("click", function (e) {

            e.preventDefault();
            var $this = $(this);

            if (!$this.hasClass("ui-state-active")) {
                // $(".accordion__content").slideUp(400);
                $(".ui-state-default").removeClass("ui-state-active");
                $('.accordion__arrow').removeClass('accordion__rotate');
            }

            $this.toggleClass("ui-state-active");
            $this.next().slideToggle();
            $('.accordion__arrow', this).toggleClass('accordion__rotate');
        });
    });

    let inputName = $('#inputName');
    let inputLastName = $('#inputLastName');
    let inputPhone = $('#inputPhone');
    let inputCountry = $('#inputCountry');
    let inputZip = $('#inputZip');
    let inputAddress = $('#inputAddress');
    let myForm = $('#myForm');
    let order = $('#order');
    let formControl = $('.form-control');


    inputZip.bind("change keyup input click", function () {
        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, '');
        }
    });

    inputZip.keydown = (e) => {
        let number = parseInt(e.key);
        if (isNaN(number)) {
            e.preventDefault();
        }
    }

    let timeout;

    function myFunction() {
        timeout = setTimeout(formBack, 5000);
    }

    function formBack() {
        order.text('Сделать заказ');
        formControl.val('');
        myForm.show();
    }

    $('#send').click(function () {

        if (!inputName.val()) {
            alert('Заполните имя');
            return;
        }
        if (!inputLastName.val()) {
            alert('Заполните фамилию');
            return;
        }
        if (!inputPhone.val()) {
            alert('Заполните телефон');
            return;
        }
        if (!inputCountry.val()) {
            alert('Заполните страну');
            return;
        }
        if (!inputZip.val()) {
            alert('Заполните индекс');
            return;
        }
        if (inputZip.val().length !== 6) {
            alert('Индекс должен содержать 6 символов.');
            return;
        }
        if (!inputAddress.val()) {
            alert('Заполните адрес');
            return;
        }
        myForm.hide();
        order.text('Спасибо за заказ! Мы свяжемся с вами в ближайшее время!');
        myFunction();
    });
})