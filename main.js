$("body").css("overflow-x","hidden");
function otzuv_fo() {
    $('#ot_4com').addClass('active');
    $('#ot_2com').removeClass('active');
    $('#ot_3com').removeClass('active');
    $('#ot_1com').removeClass('active');
    $('#carousel').html('' +
        '<div id="carousel" class="carousel slide" data-ride="carousel">\n' +
        '    <div class="carousel-inner">\n' +
        '        <div class="item active">\n' +
        '            <img class="img-carusel" src="img/rabota/1.jpg" alt="...">\n' +
        '        </div>\n' +
        '        <div class="item">\n' +
        '            <img class="img-carusel" src="img/rabota/2.jpg" alt="...">\n' +
        '        </div>\n' +
        '        <div class="item">\n' +
        '            <img class="img-carusel" src="img/rabota/3.jpg" alt="...">\n' +
        '        </div>\n' +
        '        <div class="item">\n' +
        '            <img class="img-carusel" src="img/rabota/4.jpg" alt="...">\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <!-- Элементы управления -->\n' +
        '    <a class="left carousel-control" href="#carousel" role="button" data-slide="prev">\n' +
        '        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>\n' +
        '        <span class="sr-only">Предыдущий</span>\n' +
        '    </a>\n' +
        '    <a class="right carousel-control" href="#carousel" role="button" data-slide="next">\n' +
        '        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>\n' +
        '        <span class="sr-only">Следующий</span>\n' +
        '    </a>\n' +
        '</div>' +
        '');
    $('#title-otzuv').text('Отзыв');
    $('#content-otzuv').html('«Проживаю в частном доме постоянно, поэтому важна качественная связь.\n' +
        'Самостоятельно выбрал двойной репитер gsm + 3g интернет,\n' +
        'ну а вам спасибо за профессиональную аккуратную установку. (инженер Артем)»\n <br><br>' +
        // '     <button class="btn" data-toggle="modal" data-target="#myModalOtPer4" style="cursor: pointer;">\n' +
        // '                    Перечень работ </button>\n' +
        // '                <br><br>' +
        ' <strong>©Сергей, 46 лет, руководитель</strong> <br><br>\n' +
        // '<button class="btn" data-toggle="modal" data-target="#myModalVideo" style="cursor: pointer;">\n' +
        // 'Смотреть видео-обзор </button> ' +
        '');
    $('#price-otzuv').text('54 900р');
}
function otzuv_od() {
    $('#ot_1com').addClass('active');
    $('#ot_4com').removeClass('active');
    $('#ot_3com').removeClass('active');
    $('#ot_2com').removeClass('active');

    $('#carousel').html(
        '' +
        '<div class="carousel-inner">\n' +
        '                                <div class="item active">\n' +
        '                                    <img class="img-carusel" src="img/rabota/kv1/1.jpg" alt="...">\n' +
        '                                </div>\n' +
        '                                <div class="item">\n' +
        '                                    <img class="img-carusel" src="img/rabota/kv1/2.jpg" alt="...">\n' +
        '                                </div>\n' +
        '                                <div class="item">\n' +
        '                                    <img class="img-carusel" src="img/rabota/kv1/3.jpg" alt="...">\n' +
        '                                </div>\n' +
        '                                <div class="item">\n' +
        '                                    <img class="img-carusel" src="img/rabota/kv1/4.jpg" alt="...">\n' +
        '                                </div>\n' +
        '                            <!-- Элементы управления -->\n' +
        '                            <a class="left carousel-control" href="#carousel" role="button" data-slide="prev">\n' +
        '                                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>\n' +
        '                                <span class="sr-only">Предыдущий</span>\n' +
        '                            </a>\n' +
        '                            <a class="right carousel-control" href="#carousel" role="button" data-slide="next">\n' +
        '                                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>\n' +
        '                                <span class="sr-only">Следующий</span>\n' +
        '                            </a>' +
        '</div>'
    );
    $('#title-otzuv').text('Отзыв');
    $('#content-otzuv').html(
        '«Сотовая ловит в нашем поселке очень плохо. А ещё хотелось бы пользоваться интернетом.' +
        ' Морально был готов уже на установку двух антенн, спасибо, что посоветовали единую систему на основе репитера.' +
        ' Всё работает - рекомендую. Инженеры Дмитрий и Алексей.»<br><br>'+
        ' <strong>©Георгий Николаевич, 63 года, пенсионер</strong> <br>' +
        // '<button class="btn" data-toggle="modal" data-target="#myModalOtPer1" style="cursor: pointer;">\n' +
        // '                    Перечень работ </button>\n' +
        // '                <br><br>' +
        '');
    $('#price-otzuv').text('22 900  руб');
}
function otzuv_two() {
    $('#ot_2com').addClass('active');
    $('#ot_4com').removeClass('active');
    $('#ot_3com').removeClass('active');
    $('#ot_1com').removeClass('active');

    $('#carousel').html(
        '' +
        '<div class="carousel-inner">\n' +
        '      <div class="item active">\n' +
        '          <img class="img-carusel" src="img/rabota/kv2/1.jpg" alt="...">\n' +
        '      </div>\n' +
        '      <div class="item">\n' +
        '          <img class="img-carusel" src="img/rabota/kv2/2.jpg" alt="...">\n' +
        '      </div>\n' +
        '      <div class="item">\n' +
        '          <img class="img-carusel" src="img/rabota/kv2/3.jpg" alt="...">\n' +
        '      </div>\n' +
        '  </div>\n' +
        '  <!-- Элементы управления -->\n' +
        '  <a class="left carousel-control" href="#carousel" role="button" data-slide="prev">\n' +
        '      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>\n' +
        '      <span class="sr-only">Предыдущий</span>\n' +
        '  </a>\n' +
        '  <a class="right carousel-control" href="#carousel" role="button" data-slide="next">\n' +
        '      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>\n' +
        '      <span class="sr-only">Следующий</span>\n' +
        '  </a>' +
        '</div>'
    );
    $('#title-otzuv').text('Отзыв');
    $('#content-otzuv').html(
        '«Интернет очень нужен по работе, да и так посмотреть. Ваш менеджер пообещал,' +
        ' что с антенной будет работать в режиме 4G. С этим условием и вызвал инженера. Надо ' +
        'отдать должное - хоть и не сразу, но настроил 4G от Мегафона. ' +
        'Скорость отличная - спасибо! Инженер - Павел.»<br><br>'+
        '©Олег, 42 года, руководитель <br><br>' +
        // '     <button class="btn" data-toggle="modal" data-target="#myModalOtPer2" style="cursor: pointer;">\n' +
        // '                    Перечень работ </button>\n' +
        '                <br><br>');
    $('#price-otzuv').text('88 900 руб');
}
function otzuv_three() {
    $('#ot_3com').addClass('active');
    $('#ot_4com').removeClass('active');
    $('#ot_1com').removeClass('active');
    $('#ot_2com').removeClass('active');

    $('#carousel').html(
        '' +
        '<div class="carousel-inner">\n' +
        '                                <div class="item active">\n' +
        '                                    <img class="img-carusel" src="img/rabota/kv3/1.jpg" alt="...">\n' +
        '                                </div>\n' +
        '                                <div class="item">\n' +
        '                                    <img class="img-carusel" src="img/rabota/kv3/2.jpg" alt="...">\n' +
        '                                </div>\n' +
        '                                <div class="item">\n' +
        '                                    <img class="img-carusel" src="img/rabota/kv3/3.jpg" alt="...">\n' +
        '                                </div>\n' +
        '                            </div>\n' +
        '                            <!-- Элементы управления -->\n' +
        '                            <a class="left carousel-control" href="#carousel" role="button" data-slide="prev">\n' +
        '                                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>\n' +
        '                                <span class="sr-only">Предыдущий</span>\n' +
        '                            </a>\n' +
        '                            <a class="right carousel-control" href="#carousel" role="button" data-slide="next">\n' +
        '                                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>\n' +
        '                                <span class="sr-only">Следующий</span>\n' +
        '                            </a>' +
        '</div>'
    );
    $('#title-otzuv').text('Отзыв');
    $('#content-otzuv').html('«На даче бываем время от времени, поэтому заказал самый недорогой комплект с WiFi.' +
        ' Инженер Павел приехал вовремя, померил скорость на разных операторах, ' +
        'подобрал лучшего. Обсудили некоторые нюансы по установке и вперед: через 3 часа всё было готово.' +
        ' Пользуюсь уже месяц, очень доволен. Надо было давно поставить интернет на дачу.»<br><br>' +
        ' <strong>©Алексей Иванович, 51 год, переехал жить загород</strong> <br><br><br> ' +
        // '<button class="btn" data-toggle="modal" data-target="#myModalPerech" style="cursor: pointer;">\n' +
        // '                    Перечень работ </button>\n' +
        // '                <br><br>' +
        '');

    $('#price-otzuv').text('44 900 руб ');
}
/*Слайдер*/
function serFoto(item) {

    if(item == 1){
        $("#carousel-ser .item").removeClass("active");
        $("#1-ser-img").addClass("active");
    }
    if(item == 2){
        $("#carousel-ser .item").removeClass("active");
        $("#2-ser-img").addClass("active");
    }
    if(item == 3){
        $("#carousel-ser .item").removeClass("active");
        $("#3-ser-img").addClass("active");
    }
    if(item == 4){
        $("#carousel-ser .item").removeClass("active");
        $("#4-ser-img").addClass("active");
    }
    if(item == 5){
        $("#carousel-ser .item").removeClass("active");
        $("#5-ser-img").addClass("active");
    }
}
/* Калькулятор*/
function tipRabotPress() {
    $('#calc').html(
        '<div class="col-sm-12">\n' +
        '                            <h2>Где усиливаем сигнал?</h2>\n' +
        '<hr><h4>(Выберете ваш объект)</h4><br>' +
        '                        </div>\n' +
        '                        <div class="col-sm-6 col-md-3 col-xs-12">\n' +
        '                            <div id="rabots_var_1" class="icons-block"\n' +
        '                                 onclick="Calc(\'spot\',1);document.location=\'#artCal\'">\n' +
        '                                <img class="img-icons-calc" src=\'img/icons_calc/cottedj.png\'>\n' +
        '                            </div>\n' +
        '                            <label for="rabots_var_1" onclick="Calc(\'spot\',1);document.location=\'#artCal\'"><p>\n' +
        '                                <strong>Дача</strong>\n' +
        '                            </p></label><br>\n' +
        '                            <br><br><br><br>\n' +
        '                        </div>\n' +
        '                        <div class="col-sm-6 col-md-3 col-xs-12">\n' +
        '                            <div id="rabots_var_2" class="icons-block"\n' +
        '                                 onclick="Calc(\'spot\',2);document.location=\'#artCal\'">\n' +
        '                                <img class="img-icons-calc" src=\'img/icons_calc/dom.png\'>\n' +
        '                            </div>\n' +
        '                            <label for="rabots_var_2" onclick="Calc(\'spot\',2);document.location=\'#artCal\'"><p>\n' +
        '                                <strong>Квартира</strong>\n' +
        '                            </p></label><br>\n' +
        '\n' +
        '                            <br><br><br><br>\n' +
        '                        </div>\n' +
        '                        <div class="col-sm-6 col-md-3 col-xs-12">\n' +
        '                            <div id="rabots_var_3" class="icons-block"\n' +
        '                                 onclick="Calc(\'spot\',3);document.location=\'#artCal\'">\n' +
        '                                <img class="img-icons-calc" src=\'img/icons_calc/of.png\'>\n' +
        '                            </div>\n' +
        '                            <label for="rabots_var_3" onclick="Calc(\'spot\',3);document.location=\'#artCal\'"><p>\n' +
        '                                <strong>Офис</strong>\n' +
        '                            </p></label><br>\n' +
        '\n' +
        '                            <br><br><br><br>\n' +
        '                        </div>\n' +
        '                        <div class="col-sm-6 col-md-3 col-xs-12">\n' +
        '                            <div id="rabots_var_4" class="icons-block "\n' +
        '                                 onclick="Calc(\'spot\',4);document.location=\'#artCal\'">\n' +
        '                                <img class="img-icons-calc ic-block-auto" src=\'img/icons_calc/auto.png\'>\n' +
        '                            </div>\n' +
        '                            <label for="rabots_var_4" onclick="Calc(\'spot\',4);document.location=\'#artCal\'">\n' +
        '                                <p>\n' +
        '                                    <strong class="proi-pom">Производственные помещения</strong>\n' +
        '                                </p>\n' +
        '                            </label><br>\n' +
        '\n' +
        '                            <br><br><br><br>\n' +
        '                        </div>'
    );
}

function tipStroenPress() {
    $('#calc').html(
        '<div class="col-sm-12" >\n' +
        '                    <h2>Выберите вид связи</h2>\n' +
        '                </div>\n' +
        '                <div class="col-sm-6 col-md-3 col-xs-12 svyz-block" onclick="Calc(\'communication\',\'GSM\')">\n' +
        '                    <div class="icons-block">\n' +
        '                        <img class="img-icons-calc" src=\'img/icons_calc/2p1.png\'>\n' +
        '                    </div>\n' +
        '                    <p>\n' +
        '                        <strong>УСИЛЕНИЕ СОТОВОЙ СВЯЗИ (GSM)</strong>\n' +
        '                    </p>\n' +
        '                </div>\n' +
        '                <div class="col-sm-6 col-md-3 col-xs-12 svyz-block" onclick="Calc(\'communication\',\'GSM+3G\')">\n' +
        '                    <div class="icons-block">\n' +
        '                        <img class="img-icons-calc" src=\'img/icons_calc/2p3.png\'>\n' +
        '                    </div>' +
        '                    <p>\n' +
        '                        <strong>УСИЛЕНИЕ СВЯЗИ (GSM+3G)</strong>\n' +
        '                    </p>\n' +
        '                </div>' +
        '                <div class="col-sm-6 col-md-3 col-xs-12 svyz-block" onclick="Calc(\'communication\',\'GSM+3G+4G\')">\n' +
        '                    <div class="icons-block">\n' +
        '                        <img class="img-icons-calc" src=\'img/icons_calc/2p3.png\'>\n' +
        '                    </div>' +
        '                    <p>\n' +
        '                        <strong> УСИЛЕНИЕ СОТОВОЙ СВЯЗИ И ИНТЕРНЕТА (GSM+3G+4G)</strong>\n' +
        '                    </p>\n' +
        '                </div>' +
        '                <div class="col-sm-6 col-md-3 col-xs-12 svyz-block" onclick="Calc(\'communication\',\'3G+4G\')">\n' +
        '                    <div class="icons-block">\n' +
        '                        <img class="img-icons-calc" src=\'img/icons_calc/2p2.png\'>\n' +
        '                    </div>' +
        '                    <p>\n' +
        '                        <strong> УСИЛЕНИЕ  ИНТЕРНЕТА (3G+4G)</strong>\n' +
        '                    </p>\n' +
        '                </div>' +
        '' +
        '<button class="btn-menu" onclick="tipRabotPress()">Вернуся назад</button>'
    );
}
function areaPress(pr1,pr2,pr3) {
    $('#calc').html(
        '<div class="col-sm-12">\n' +
        '                    <h2>Выберите площадь покрытия</h2>\n' +
        '                </div>\n' +
        '                <div class="col-sm-4" onclick="Calc(\'area\',100)">\n' +
        '                    <div class="icons-block">\n' +
        '                        <img class="img-icons-calc" src=\'img/icons_calc/101.png\'>\n' +
        '                    </div>\n' +
        '                    <p>\n' +
        '                        <strong>'+ pr1 +'</strong>\n' +
        '                    </p>\n' +
        '                </div>\n' +
        '                <div class="col-sm-4" onclick="Calc(\'area\',200)">\n' +
        '                    <div class="icons-block">\n' +
        '                        <img class="img-icons-calc" src=\'img/icons_calc/200.png\'>\n' +
        '                    </div>\n' +
        '                    <p>\n' +
        '                        <strong>' + pr2 +'</strong>\n' +
        '                    </p>\n' +
        '                </div>' +
        '                <div class="col-sm-4" onclick="Calc(\'area\',300)">\n' +
        '                    <div class="icons-block">\n' +
        '                        <img class="img-icons-calc" src=\'img/icons_calc/300.png\'>\n' +
        '                    </div>\n' +
        '                    <p>\n' +
        '                        <strong>'+ pr3 +'</strong>\n' +
        '                    </p>\n' +
        '                </div>' +
        '<button class="btn-menu" onclick="tipStroenPress()">Вернуся назад</button>'
    );
}
function plochadPress(){
    $('#calc').html(
        '<div id="error_calc"></div>' +
        '                <input id="calc-plochad" type="number" class="form-control" min="0" placeholder="Площадь">\n' +
        '                <br><input id="name-calc" type="text" class="form-control" placeholder="Имя">\n' +
        '                <br><input id="calc-tel" type="tel" class="form-control" placeholder="Телефон">\n' +
        '                <br><button type="submit" class="btn-menu"  onclick="Calc(\'ploshad\',0);yaCounter52739278.reachGoal(\'kulk\')" >Узнать стоимость</button> ' +
        '<button class="btn-menu" onclick="areaPress()">Вернуся назад</button>'
    );
}
function Calc(tip, cal_value) {
    if(tip == 'spot'){
        $('#spot').val(cal_value);
        tipStroenPress();

    }
    if(tip == 'communication'){
        $('#communication').val(cal_value);
        if($('#spot').val()=='1'){
            areaPress('100  м2','200  м2','300  м2');
        }
        if($('#spot').val()=='2'){
            areaPress('50  м2','100  м2','150+  м2');
        }
        if($('#spot').val()=='3'){
            areaPress('100  м2','200  м2','300  м2');
        }
        if($('#spot').val()=='4'){
            areaPress('100  м2','200  м2','300  м2');
        }

    }
    if(tip == 'area'){
        $('#area').val(cal_value);
        // plochadPress();
        outputResult();
    }
    if(tip == 'ploshad'){
        var calc_plochad = $('#calc-plochad').val();
        var name = $('#name-calc').val();
        var tel = $('#tel_calc').val();

        var r = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

        if(!r.test(tel)){
            $('#error_calc').html(
                "Неправильно введен номер телефона!"
            );
            return 0;
        }
        if(name =='' || name == null){
            $('#error_calc').html(
                "Введите имя!"
            );
            return 0;
        }
        $('#name_calc').val(name);
        $('#tel_calc').val(tel);
        calcPodschet();
    }
    // updeitCalcResult();
}
function outputResult() {
    var communication = $('#communication').val();
    var spot = $('#spot').val();
    var area = $('#area').val();
    // var installation;
    // if((spot == 1 && area == '100')||spot == 2 || spot ==3){
    //     installation = 5000;
    // }
    $.getJSON('information.json', function (data) {
        if (data != undefined) {
            if(spot == '1' || spot == '4'){
                if(area == '100'){
                    for (var i in data['bower']['square100']) {
                        var row = data['bower']['square100'][i];
                        if(row['communication']==communication){
                            pressPaket(row['name'],row['price'],row['installation']);
                        }
                    }
                }
                if(area == '200'){
                    for (var i in data['bower']['square200']) {
                        var row = data['bower']['square200'][i];
                        pressPaket(row['name'],row['price'],row['installation']);
                    }
                }
                if(area == '300'){
                    for (var i in data['bower']['square300']) {
                        var row = data['bower']['square300'][i];
                        pressPaket(row['name'],row['price'],row['installation']);
                    }
                }
            }
            if(spot == '2'){
                if(area == '100'){
                    for (var i in data['apartment']['square100']) {
                        var row = data['apartment']['square100'][i];
                        if(row['communication']==communication){
                            pressPaket(row['name'],row['price'],row['installation']);
                        }
                    }
                }
                if(area == '200'){
                    for (var i in data['apartment']['square200']) {
                        var row = data['apartment']['square200'][i];
                        pressPaket(row['name'],row['price'],row['installation']);
                    }
                }
                if(area == '300'){
                    for (var i in data['apartment']['square300']) {
                        var row = data['apartment']['square300'][i];
                        pressPaket(row['name'],row['price'],row['installation']);
                    }
                }
            }
            if(spot == '3'){
                if(area == '100'){
                    for (var i in data['office']['square100']) {
                        var row = data['office']['square100'][i];
                        if(row['communication']==communication){
                            pressPaket(row['name'],row['price'],row['installation']);
                        }
                    }
                }
                if(area == '200'){
                    for (var i in data['office']['square200']) {
                        var row = data['office']['square200'][i];
                        pressPaket(row['name'],row['price'],row['installation']);
                    }
                }
                if(area == '300'){
                    for (var i in data['office']['square300']) {
                        var row = data['office']['square300'][i];
                        pressPaket(row['name'],row['price'],row['installation']);
                    }
                }
            }
        }
    });
}
function pressPaket(name, price, montaj) {
    $('#price_form').val(price);
    $('#name_form').val(name);
    $('#montaj_form').val(montaj);
    $('#calc').html(
        '<div class="row">' +
        '<div class="col-sm-6">' +

        '<div class="form_calc">' +
        '<h3>Оставьте заявку для получения консультации</h3>' +
        '<hr><h5 id="res-form-ot" class="text-info"></h5>'+
        '   <div id="error_calc"></div>' +
        '                <br><input id="name-calc" type="text" class="form-control" placeholder="Имя">\n' +
        '                <br><input id="tel_calc" type="tel" class="form-control" placeholder="Телефон">\n' +
        '                <br><button type="submit" class="btn-menu"  onclick="Calc(\'ploshad\',0);yaCounter52739278.reachGoal(\'kulk\')" >Проконсультироваться</button> ' +
        '   </div>' +
        '</div>' +
        '<div class="col-sm-6">' +
        '   <div id="res">\n' +
        '                <div class="row-res">' +
        '                   <table class="table table-bordered table-striped table-hover">\n' +
        '                    <tr>\n' +
        '                        <td><span>Название:</span></td>\n' +
        '                        <td><span>'+name+'р.</span></td>\n' +
        '                    </tr>\n' +
        '                    <tr>\n' +
        '                        <td><span>Цена: </span></td>\n' +
        '                        <td><span>' + price + 'р.</span></td>\n' +
        '                    </tr>\n' +
        '                    <tr>\n' +
        '                        <td>Цена монтажа:</td>\n' +
        '                        <td>'+ montaj + 'р.</td>\n' +
        '                    </tr>\n' +
        '                    <tr>\n' +
        '                        <td>Всего:</td>\n' +
        '                        <td>' + (montaj+price) +'р.</td>\n' +
        '                    </tr>\n' +
        '                </table>'+
        // '                    <div class="res-col">\n' +
        // '                        <h4 id="price">Название: <br> '+name+'р.</h4>\n' +
        // '                    </div>\n' +
        // '                    <div class="res-col">\n' +
        // '                        <h4 id="price_posle">Цена: ' + price + 'р.</h4>\n' +
        // '                    </div>\n' +
        // '                    <div class="res-col">\n' +
        // '                        <h4 id="price_posle">Цена монтажа: ' + montaj + 'р.</h4>\n' +
        // '                    </div>\n' +
        // '                    <div class="res-col">\n' +
        // '                        <h4 id="price_posle">Всего: ' + (montaj+price) + 'р.</h4>\n' +
        // '                    </div>\n' +
        '<button class="btn-menu" onclick="tipRabotPress()">Посчитать заново    </button>' +
        '                </div>\n' +
        '            </div>' +
        '</div>'

    );
}
function calcPodschet() {
    var price = $('#price_form').val();
    var name = $('#name_form').val();
    var montaj = $('#montaj_form').val();
    var spot = $('#spot').val();
    var communication = $('#communication').val();
    var area = $('#area').val();
    var name_calc = $('#name_calc').val();
    var tel_calc = $('#tel_calc').val();
    if(spot == 0 ||communication == 0 ||area == 0 ||name_calc == 0 ||tel_calc == 0){
        $('#error_calc').html(
            "Неправельно введены данные"
        );
    }
    else{
        updeitCalcResult();
        $.ajax({
            type: "POST",
            url: 'mail.php',
            data: {
                name: name_calc,
                tel: tel_calc,
                spot: spot,
                price: price,
                montaj: montaj,
                communication: communication,
                area: area,
                submit_calc: "calc",
            },
            success: function (data) {
                $('#name-calc').val('');
                $('#tel_calc').val('');
                $('#res-form-ot').text('Мы перезвоним вам в ближайшее время');
                $('#error_calc').text('');
            },
            error: function (jqXHR, text, error) {
            }
        });
    }
}
function updeitCalcResult() {
    var spot = $('#spot').val();
    var communication = $('#communication').val();
    var area = $('#area').val();
    var plochad = $('#plochad').val();
    var email_calc = $('#email_calc').val();
    var name_calc = $('#name_calc').val();
    var tel_calc = $('#tel_calc').val();

    if(spot != 0){
        $('#result-calc').addClass('result-calc');
        $('#title_result').html('<h3>Вы выбрали:</h3><hr>');
        switch(spot) {
            case '1':
                $('#spot_result').html('<h4>1) Дача</h4>');
                break;
            case '2':
                $('#spot_result').html('<h4>1) Квартира</h4>');
                break;
            case '3':
                $('#spot_result').html('<h4>1) Офис</h4>');
                break;
            case '4':
                $('#spot_result').html('<h4>1) Производственное помещение</h4>');
                break;
        }
    }
    if(communication != 0){
        switch(communication) {
            case 'GSM':
                $('#communication_result').html('<h4>2) УСИЛЕНИЕ СОТОВОЙ СВЯЗИ</h4>');
                break;
            case 'GSM+3G':
                $('#communication_result').html('<h4>2) УСИЛЕНИЕ СВЯЗИ (GSM+3G)</h4>');
                break;
            case 'GSM+3G+4G':
                $('#communication_result').html('<h4>2) УСИЛЕНИЕ СОТОВОЙ СВЯЗИ И ИНТЕРНЕТА (GSM+3G+4G)</h4>');
                break;
            case '3G+4G':
                $('#communication_result').html('<h4>2) УСИЛЕНИЕ  ИНТЕРНЕТА (3G+4G)</h4>');
                break;
            default:
                break;
        }
    }
    if(area != 0){
        switch(area) {
            case '100':
                $('#area_result').html('<h4>3) ПЛОЩАДЬ ПОКРЫТИЯ: 100</h4>');
                break;
            case '200':
                $('#area_result').html('<h4>3) ПЛОЩАДЬ ПОКРЫТИЯ: 200</h4>');
                break;
            case '300':
                $('#area_result').html('<h4>3) ПЛОЩАДЬ ПОКРЫТИЯ: 300</h4>');
                break;
            default:
                break;
        }
    }
}
/*Карточки товара*/
function updaitImage(item){
    if(item == 1){
        $('#main-cart-image').html('<img src="img/cart/1.jpg" alt="" class="cart-tovars-main">');
    }
    if(item == 2){
        $('#main-cart-image').html('<img src="img/cart/2.jpg" alt="" class="cart-tovars-main">');
    }
    if(item == 5){
        $('#main-cart-image').html('<img src="img/cart/2v2.png" alt="" class="cart-tovars-main">');
    }
    if(item == 3){
        $('#main-cart-image').html('<img src="img/cart/3.jpg" alt="" class="cart-tovars-main">');
    }
    if(item == 4){
        $('#main-cart-image').html('<img src="img/cart/4.jpg" alt="" class="cart-tovars-main">');
    }

}