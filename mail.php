<?

if (isset($_POST['submit_form_os'])) {
    if ((isset($_POST['name']) && $_POST['name'] != "") && (isset($_POST['tel']) && $_POST['tel'] != "")) { //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'useinov.sh.i14@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Новая заявка  с лендинга msk-gsmrep.ru'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>' . $subject . '</title>
                    </head>
                    <body>
                        <p>Данные клиента: </p>
                        <p>Имя: ' . $_POST['name'] . '</p>
                        <p>Телефон: ' . $_POST['tel'] . '</p>';
        $message = $message . '</body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Заявка с сайта msk-gsmrep.ru <from@example.com>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
    }
}
if (isset($_POST['submit_tel'])) {
    if (isset($_POST['name']) && $_POST['name'] != "" && isset($_POST['tel']) && $_POST['tel'] != "") {
        $to = 'useinov.sh.i14@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Новая заявка  с лендинга msk-gsmrep.ru'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>' . $subject . '</title>
                    </head>
                    <body>
                        <p>Данные клиента: </p>
                        <p>Имя: ' . $_POST['name'] . '</p>
                        <p>Телефон: ' . $_POST['tel'] . '</p>';

        $message = $message . '<p>Клиент хочет проконсультироваться и узнать примерную стоимость заказа по телефону</p>';

        $message = $message . '</body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Заявка с сайта msk-gsmrep.ru <from@example.com>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
    }
}
if (isset($_POST['submit_ot_smet'])) {
    if (isset($_POST['name']) && $_POST['name'] != "" && isset($_POST['tel']) && $_POST['tel'] != "") {
        $to = 'useinov.sh.i14@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Новая заявка  с лендинга msk-gsmrep.ru'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>' . $subject . '</title>
                    </head>
                    <body>
                        <p>Данные клиента: </p>
                        <p>Имя: ' . $_POST['name'] . '</p>
                        <p>Телефон: ' . $_POST['tel'] . '</p>';

        $message = $message . '<p>Клиент хочет вызвать специалиста компании для личной консультации и расчета точной
                                        стоимости заказа на месте</p>';

        $message = $message . '</body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Заявка с сайта msk-gsmrep.ru <from@example.com>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
    }
}
if (isset($_POST['submit_calc'])) {
    if (isset($_POST['name']) && $_POST['name'] != "" && isset($_POST['tel']) && $_POST['tel'] != "") {
        switch ($_POST['spot']) {
            case '1':
                $spot = 'Дача';
                break;
            case '2':
                $spot = 'Квартира';
                break;
            case '3':
                $spot = 'Офис';
                break;
            case '4':
                $spot = 'Производственное помещение';

                break;
        }
        $to = 'useinov.sh.i14@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Новая заявка с калькулятора на лендинге, версия 2'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>' . $subject . '</title>
                    </head>
                    <body>
                        <p>Данные клиента: </p>
                        <p>Имя: ' . $_POST['name'] . '</p>
                        <p>Телефон: ' . $_POST['tel'] . '</p>
                        <p>Где: ' . $spot . '</p> 
                        <p>Цена: ' . $_POST['price'] . '</p> 
                        <p>Коммуникатор: ' . $_POST['communication'] . '</p> 
                        <p>Площадь покрытия: ' . $_POST['area'] . '</p> 
                        <p>Цена монтажа: ' . $_POST['montaj'] . '</p> 
                        <p>Общая сумма: ' . ($_POST['price']+$_POST['montaj']). '</p> 
                        ';

        $message = $message . '<p>Клиент заполнил форму с калькулятора</p>';

        $message = $message . '</body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Заявка с сайта msk-gsmrep.ru <from@example.com>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
    }
}