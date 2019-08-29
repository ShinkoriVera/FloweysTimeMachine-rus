var items = [
    "Пусто",
    "Монстроконфета",
    "Крокет Ролл",
    "Палка",
    "Бинт",
    "Каменная Конфета",
    "Тыквенные Кольца",
    "Паучий Пончик",
    "Твёрдый Лук",
    "Призрачный Фрукт",
    "Паучий Сидр",
    "Ирисково-коричный пирог",
    "Потускневшая Лента",
    "Игрушечный Нож",
    "Грубая Перчатка",
    "Мужицкая Бандана",
    "Кусочек Снеговика",
    "Доброженое",
    "Мороженое с тестом щенка",
    "Дваскимо",
    "Одинскимо",
    "Коричный Зайка",
    "Хлопья Темми",
    "Брошенный Киш",
    "Старая Балетная Пачка",
    "Пуанты",
    "Ударная Карта",
    "Надоедливый Пёс",
    "Собачий Салат",
    "Собачьи Остатки (1)",
    "Собачьи Остатки (2)",
    "Собачьи Остатки (3)",
    "Собачьи Остатки (4)",
    "Собачьи Остатки (5)",
    "Собачьи Остатки (6)",
    "Еда Астронавтов",
    "Лапша Быстрого Приготовления",
    "Крабовое Яблоко",
    "Хот Дог...?",
    "Хот Кэт",
    "Гламбургер",
    "Морской Чай",
    "Старфе",
    "Легендарный Герой",
    "Мутные Очки",
    "Порванная Тетрадь",
    "Запачканный Фартук",
    "Подгоревшая Сковорода",
    "Ковбойская Шляпа",
    "Пустой Пистолет",
    "Медальон в Форме Сердца",
    "Изношенный Кинжал",
    "Настоящий Нож",
    "Медальон",
    "Плохое Воспоминание",
    "Мечта",
    "Письмо Андайн",
    "Бывшее письмо Андайн",
    "Картофельные Чипсы",
    "Вредная Еда",
    "Загадочный Ключ",
    "Стейк в форме МТТ",
    "Тихий Щенок",
    "Улиточный пирог",
    "браня теми",
    "<invalid>"
];

var cellOpts = {
    "0": "Пусто",
    "201": "Сказать \"Привет\"",
    "202": "Помощь с головоломкой",
    "203": "Спросить о ней",
    "204": "Назвать ее \"Мамой\"",
    "205": "Флирт",
    "206": "Номер Ториэль",
    "210": "Номер Папируса",
    "220": "Пространственный Ящик A",
    "221": "Пространственный Ящик B"
};

var weaponAts = {
    "3": 0, // stick
    "13": 3,
    "16": 5,
    "52": 99,
    "47": 10,
    "25": 7,
    "45": 2,
    "49": 12,
    "51": 15
};

var ArmorDfs = {
    "4": 0, // bandage
    "12": 3, // faded ribbon
    "15": 7, // manly bandana
    "44": 5, // clouded glasses
    "46": 11, // stained apron
    "50": 15, // heart locket
    "53": 99, // The Locket
    "64": 20 // temy armor
};

var rooms = {
    "4": "Руины - Начало игры",
    "5": "Руины - Флауи",
    "6": "Руины - Вход [СОХР]",
    "7": "Руины - Головоломка с нажимными плитами",
    "8": "Руины - Головоломка с переключателями",
    "9": "Руины - Манекен",
    "10": "Руины - Головоломка с Шипами",
    "11": "Руины - Длинный корридор",
    "12": "Руины - Куча листьев [СОХР]",
    "13": "Руины - Комната с конфетами",
    "14": "Руины - Обязательное падение сквозь пол",
    "15": "Руины - Головоломка с первым двигаемым камнем",
    "16": "Руины - Головоломка со сломанным полом",
    "17": "Руины - Говорящий камень",
    "18": "Руины - Мышиная нора [СОХР]",
    "19": "Руины - Напстаблук",
    "20": "Руины - Распродажа паучьей выпечки",
    "21": "Руины - 2 лягушки",
    "22": "Руины - Головоломка со спрятанным переключателем",
    "23": "Руины - 3 колонны комната 1",
    "24": "Руины - 3 колонны комната 2",
    "25": "Руины - 3 колонны комната 3",
    "26": "Руины - 3 колонны комната 4",
    "27": "Руины - Яма комнат с колоннами",
    "28": "Руины - Перекрёсток трёх путей",
    "29": "Руины - Лягушка рассказывает о Ториэль",
    "30": "Руины - Комната с Игрушечным ножом",
    "31": "Руины - Дом [СОХР]",
    "32": "Дом Ториэль: Вход",
    "33": "Дом Ториэль: Комната для чтения",
    "34": "Дом Ториэль: Коридор",
    "35": "Дом Ториэль: Комната Ториэль",
    "36": "Дом Ториэль: Ваша комната",
    "37": "Дом Ториэль: Кухня",
    "38": "Подвал Ториэль 1",
    "39": "Подвал Ториэль 2",
    "40": "Подвал Ториэль 3",
    "41": "Подвал Ториэль: Битва с Ториэль",
    "42": "Подвал Ториэль: Коридор, ведущий к Флауи",
    "43": "Подвал Ториэль: Флауи",
    "44": "Сноудин - Выход из руин",
    "45": "Сноудин - Тёмная лесная тропа",
    "46": "Сноудин - Дорога с Ящиком [СОХР]",
    "47": "Сноудин - Удочка",
    "48": "Сноудин - Сторожевой пункт Папируса",
    "49": "Сноудин - Догго",
    "50": "Сноудин - Знак компаса",
    "51": "Сноудин - Снеговик",
    "52": "Сноудин - Электрический лабиринт",
    "53": "Сноудин - Снежный гольф",
    "54": "Сноудин - Два дома собачьих стражей",
    "55": "Сноудин - Детская монстро-путаница",
    "56": "Сноудин - Спагетти [СОХР]",
    "57": "Сноудин - Внимание: собачья свадьба",
    "58": "Сноудин - XO головоломка 1",
    "59": "Сноудин - XO головоломка 2",
    "60": "Сноудин - Головоломка с цветными плитками",
    "61": "Сноудин - Собачий дом [СОХР]",
    "62": "Сноудин - Снежный Папирус и Санс",
    "63": "Сноудин - Скользящая XO головоломка",
    "64": "Сноудин - Телепортирующийся Санс",
    "65": "Сноудин - Вход в ледяную пещеру",
    "66": "Сноудин - Кучки снега (Пёс Побольше)",
    "67": "Сноудин - Вызов настоящего ужаса",
    "68": "Сноудин - Город [СОХР]",
    "69": "Сноудин (Город): Ледяной волк",
    "70": "Сноудин (Город): Лодочная гавань",
    "71": "Сноудин (Город): Лобби гостиницы",
    "73": "Сноудин (Город): Гриллби",
    "74": "Сноудин (Город): Библиотека",
    "81": "Сноудин - Битва с Папирусом",
    "82": "Ватерфол - Вход",
    "83": "Ватерфол - Контрольная точка [СОХР]",
    "84": "Ватерфол - Падающие камни",
    "86": "Ватерфол - Коридор [СОХР]",
    "87": "Ватерфол - Цветочный мост",
    "88": "Ватерфол - Вертикальный цветочный мост",
    "90": "Ватерфол - Телескоп",
    "91": "Ватерфол - Лодочная доска",
    "92": "Ватерфол - Уворот от копьев Андайн 1",
    "93": "Ватерфол - После уворота от копьев",
    "94": "Ватерфол - Кристалл [СОХР]",
    "95": "Ватерфол - Телескоп санса",
    "96": "Ватерфол - Стойка с доброженным",
    "97": "Ватерфол - Дорожка через разрывы",
    "98": "Ватерфол - Пуанты",
    "99": "Ватерфол - Утка",
    "100": "Ватерфол - Онион-сан",
    "101": "Ватерфол - Развилка у артефакта",
    "102": "Ватерфол - Пианино",
    "103": "Ватерфол - Легендарный артефакт",
    "104": "Ватерфол - Дождливая статуя",
    "105": "Ватерфол - Зонтики",
    "106": "Ватерфол - Дождливый путь 1",
    "107": "Ватерфол - Дождливый ауть 2",
    "108": "Ватерфол - Вид Столицы",
    "109": "Ватерфол - Зонты у выступа",
    "110": "Ватерфол - Мост [СОХР]",
    "111": "Ватерфол - Уворот от копьев на мосту",
    "112": "Ватерфол - Падение моста",
    "113": "Ватерфол - Ковёр из цветов на свалке",
    "114": "Ватерфол - Свалка [СОХР]",
    "115": "Ватерфол - Месть тренировочного манекена",
    "116": "Ватерфол - Тихая зона [СОХР]",
    "117": "Ватерфол - Вход в дом Андайн",
    "119": "Ватерфол - Дома призраков",
    "124": "Ватерфол - Магазин черепахи",
    "125": "Ватерфол - Речная лодка",
    "126": "Ватерфол - 2 водопада",
    "127": "Ватерфол - Лабиринт с грибами",
    "128": "Ватерфол - Деревня Темми [СОХР]",
    "129": "Ватерфол - Лабиринт с лампами",
    "130": "Ватерфол - Позади тебя",
    "131": "Ватерфол - Больше цветов",
    "132": "Ватерфол - Пещерный мост",
    "133": "Ватерфол - Выход из пещеры",
    "134": "Ватерфол - Арена Андайн",
    "135": "Ватерфол - Арена Андайн + 1",
    "136": "Ватерфол - Приветственное табло Хотленда",
    "137": "Хотленд - Вход",
    "138": "Хотленд - Кулер с водой",
    "139": "Хотленд - Вход в лабораторию [СОХР]",
    "140": "Хотленд - Лодочная гавань",
    "141": "Хотленд - Комната Лаборатории",
    "142": "Хотленд - Верхний этаж Лаборатории",
    "143": "Хотленд - Выход из лаборатории",
    "144": "Хотленд - Конвейер 1",
    "145": "Хотленд - Магмические камеры [СОХР]",
    "146": "Хотленд - Подгоревшая сковорода",
    "147": "Хотленд - Лазеры 1",
    "148": "Хотленд - Ворота с головоломкой 1",
    "149": "Хотленд - Вход в левую головоломку",
    "150": "Хотленд - Левая головоломка",
    "151": "Хотленд - Вход в правую головоломку",
    "152": "Хотленд - Правая головоломка",
    "153": "Хотленд - Паровой мост",
    "154": "Хотленд - Кухня",
    "155": "Хотленд - Вид Ядра [СОХР]",
    "156": "Хотленд - Лифт П1",
    "157": "Хотленд - Лифт П2",
    "158": "Хотленд - Стойка с хот-догами",
    "159": "Хотленд - Вход в Арт-клуб",
    "160": "Хотленд - Арт-клуб",
    "161": "Хотленд - Запачканный фартук",
    "162": "Хотленд - Переключатели на конвейере",
    "163": "Хотленд - Паровая головоломка",
    "164": "Хотленд - Зона плохого мнения [СОХР]",
    "165": "Хотленд - Братаны охранники",
    "166": "Хотленд - Бомбическая передача новостей",
    "167": "Хотленд - Вид Ядра выше",
    "168": "Хотленд - Лифт Л2",
    "169": "Хотленд - Лифт Л3",
    "170": "Хотленд - Паучья распродажа выпечки",
    "171": "Хотленд - F3 ворота с головоломкой",
    "172": "Хотленд - F3 вход в южную головоломку",
    "173": "Хотленд - F3 южная головоломка",
    "174": "Хотленд - F3 вход в северную головоломку",
    "175": "Хотленд - F3 северная головоломка",
    "176": "Хотленд - Вход пауков [СОХР]",
    "177": "Хотленд - Паучья комната",
    "178": "Хотленд - Постер Меттатона",
    "179": "Хотленд - Тетральная сцена",
    "180": "Хотленд - Головоломка с цветными плитками 2",
    "181": "Хотленд - Стойка с Доброженым",
    "182": "Хотленд - Вход в отель",
    "183": "Хотленд - Лобби отеля [СОХР]",
    "184": "Хотленд - Ресторан отеля",
    "185": "Хотленд - Коридор отеля",
    "186": "Хотленд - Аллея отеля",
    "187": "Хотленд - Лифт П3",
    "188": "Хотленд - Вход в Ядро",
    "189": "Хотленд - Лифт Ядра",
    "190": "Хотленд - Яма Ядра",
    "191": "Хотленд - Ядро К северу от лифта",
    "192": "Хотленд - Ядро Неправильный порядок лазеров",
    "193": "Хотленд - Перекрёсток Ядра",
    "194": "Хотленд - Ядро Тупик",
    "195": "Хотленд - Ядро Задача с питанием лазеров",
    "196": "Хотленд - Ядро Разветвление [СОХР]",
    "197": "Хотленд - Ядро Депозит льда",
    "198": "Хотленд - Ядро Вход западной головоломки",
    "199": "Хотленд - Ядро Вход западной головоломки + 1",
    "200": "Хотленд - Ядро Вход западной головоломки + 2",
    "202": "Хотленд - Конец Ядра - 3",
    "201": "Хотленд - Южная Мусорка с 100G",
    "203": "Хотленд - Конец Ядра - 4",
    "204": "Хотленд - Ядро Потерялся",
    "205": "Хотленд - Ядро Западная головоломка",
    "206": "Хотленд - Ядро Мусорка с Гламбургером",
    "207": "Хотленд - Ядро Мусорка с 100G",
    "208": "Хотленд - Ядро Мост битв",
    "209": "Хотленд - Конец Ядра - 1",
    "210": "Хотленд - Конец Ядра [СОХР]",
    "211": "Хотленд - Ядро Комната Меттатона",
    "212": "Хотленд - Вход в последний лифт Ядра",
    "214": "Хотленд - Лифт Л1",
    "215": "Хотленд - Последний лифт Ядра",
    "216": "Лифт Замка [СОХР]",
    "217": "Замок - Другой лифт",
    "218": "Замок - Темная тропа",
    "219": "Новый Дом [СОХР]",
    "220": "Новый Дом - Вход",
    "221": "Новый Дом - Комната для чтения",
    "222": "Новый Дом - Коридор",
    "223": "Новый Дом - Комната Азгора",
    "224": "Новый Дом - Твоя комната",
    "225": "Новый Дом - Кухня",
    "226": "Новый Дом - Подвал 1",
    "227": "Новый Дом - Подвал 2",
    "228": "Новый Дом - Подвал 3",
    "229": "Новый Дом - Подвал 4",
    "230": "Новый Дом - Лифт",
    "231": "Последний коридор [СОХР]",
    "232": "Вход в Тронный зал [СОХР]",
    "233": "Вход в Тронный зал - Лестница вниз",
    "234": "Вход в Тронный зал - Гробы",
    "235": "Тронный Зал [СОХР]",
    "236": "Конец [СОХР]",
    "237": "Барьер",
    "241": "Поверхность",
    "242": "Лифт Лаборатории",
    "243": "Истинная Лаборатория - Лифт",
    "244": "Истинная Лаборатория - Вход в лифт",
    "245": "Истинная Лаборатория - Южный коридор",
    "246": "Истинная Лаборатория [СОХР]",
    "247": "Истинная Лаборатория - Западный коридор 1",
    "248": "Истинная Лаборатория - Западные раковины",
    "249": "Истинная Лаборатория - Западный слот красного ключа",
    "250": "Истинная Лаборатория - Северный коридор 1",
    "251": "Истинная Лаборатория - Спальня [СОХР]",
    "252": "Истинная Лаборатория - Северо-восточный коридор",
    "253": "Истинная Лаборатория - Северо-восточный слот синего ключа",
    "254": "Истинная Лаборатория - Северный коридор 2",
    "255": "Истинная Лаборатория - Зелёный ключ",
    "256": "Истинная Лаборатория - Северо-западный череп",
    "257": "Истинная Лаборатория - Слот жёлтого ключа + ТВ",
    "258": "Истинная Лаборатория - Северо-западные холодильники",
    "259": "Истинная Лаборатория - Слот зелёного ключа",
    "260": "Истинная Лаборатория- Вентиляторы",
    "261": "Истинная Лаборатория - Лифт 2",
    "262": "Истинная Лаборатория - Коридор комнаты питания",
    "263": "Истинная Лаборатория - Комната электропитания",
    "265": "Сноудин - Ледяная Пещера 1",
    "331": "Комната Азриэля",
    "123": "Недоступные - Ловля жуков в траве",
    "264": "Недоступные - Запись №17",
    "267": "Недоступные - Три Фроггита",
    "268": "Недоступные - Коридор с серой дверью",
    "269": "Недоступные - Серая комната",
    "272": "Недоступные - отредактировано",
    "273": "Недоступные - Трава и цветочный мост",
    "274": "Недоступные - Тест npc",
    "276": "Недоступные - Тест пуль",
    "287": "Недоступные - Просмотр спрайтов",
    "296": "Недоступные - Коридор с паровыми плитами",
    "297": "Недоступные - Коридор с конвейером 1",
    "298": "Недоступные - Коридор с конвейером 2",
    "299": "Недоступные - Ледовая комната",
    "300": "Недоступные - Чаша с каменными конфетами",
    "301": "Недоступные - Снежный ком",
    "302": "Недоступные - Водопад и мост",
    "303": "Недоступные - Встреча с Андайн",
    "304": "Недоступные - Гриб",
    "305": "Недоступные - Мэморихэд",
    "326": "Недоступные - Комната ошибки сохранения",
    "327": "Недоступные - Викторина",
    "328": "Недоступные - Тест сцены перед битвой Азриэля 1",
    "329": "Недоступные - Тест сцены перед битвой Азриэля 2",
    "333": "Недоступные - Тест анимации битвы Азриэля 1",
    "334": "Недоступные - Тест анимации битвы Азриэля 2"
};

var floweyStates = {
    "0": "Нет (Начальное состояние)",
    "1": "Голубая (Начало битвы)",
    "2": "Оранжевая",
    "3": "Синяя",
    "4": "Пурпурная",
    "5": "Зеленая",
    "6": "Желтая",
    "7": "Нет (Битва закончена)",
};

var torielStates = {
    "0": "Начальное состояние",
    "3": "Неизвестно",
    "4": "Убита",
    "5": "Пощажена"
};

var comedianStates = {
    "0": "Начальное состояние",
    "1": "Неизвестно",
    "2": "Убит"
};

var doggoStates = {
    "0": "Начальное состояние",
    "1": "Убит",
    "2": "Поиграть (Пощажён)"
};

var dogamyDogaressaStates = {
    "0": "Начальное состояние",
    "1": "Убиты",
    "2": "Поиграть (Пощажён)"
};

var greaterDogStates = {
    "0": "Начальное состояние",
    "1": "Убит",
    "2": "Поиграть (Пощажён)",
    "3": "Проигнорирован"
};

var papyrusStates = {
    "0": "Начальное состояние",
    "1": "Убит"
};

var plotValues = {
    "2": "Не сражаться с Папирусом",
    "101": "Сражался с Папирусом",
    "119": "Неизвестно",
    "164": "Геноцид Хотлэнда",
    "199": "Неизвестно",
    "999": "Пацифист эпилог"
};

var trainingDummyStates = {
    "0": "Начальное состояние",
    "1": "Убит",
    "2": "Поговорить",
    "3": "Устал от твоих действий"
};

var shyrenStates = {
    "0": "Начальное состояние",
    "1": "Убита",
    "2": "Неизвестно"
};

var madDummyStates = {
    "0": "Начальное состояние",
    "1": "Убит"
};

var undyneStates1 = {
    "0": "Начальное состояние",
    "1": "Убита"
};

var undyneStates2 = {
    "0": "Начальное состояние",
    "1": "Убита"
};

var broGuardsStates = {
    "0": "Начальное состояние",
    "1": "Убиты"
};

var mettatonStates = {
    "0": "Начальное состояние",
    "1": "Убит"
};

var muffetStates = {
    "0": "Начальное состояние",
    "1": "Убита"
};

function parseIniFromText(text) {
    "use strict";
    var lines = text.match(/[^\r\n]+/g);
    var section = null;
    var ini = {};
    lines.forEach(function(line) {
        // Ignore empty lines
        if (line === "") {
            return;
        }
        // If line starts with [, it is a section header
        var lbracket = line.indexOf("[");
        if (lbracket !== -1) {
            var rbracket = line.slice(lbracket).indexOf("]") + lbracket;
            if (rbracket !== -1) {
                section = line.slice(lbracket + 1, rbracket);
                ini[section] = {};
            }
        } else { // Otherwise, it is assumed to be an assignment
            if (section === null) {
                throw "Assignment outside of a section";
            }
            var eq = line.indexOf("=");
            if (eq === -1) {
                throw "Expected '='";
            }
            var lquot = line.indexOf('"');
            if (lquot === -1) {
                throw "Expected '\"'";
            }
            var rquot = line.slice(lquot + 1).indexOf('"') + lquot + 1;
            if (rquot === -1) {
                throw "Unterminated value string";
            }
            var value = line.slice(lquot + 1, rquot);
            var key = line.slice(0, eq);
            ini[section][key] = value;
        }
    });
    return ini;
}

function flowey_laugh_once() {
    "use strict";
    if (localStorage.getItem("laughed") !== "true") {
        document.getElementById("floweyimg").src = "res/flowey_evil.png";
        setTimeout(function() {
            document.getElementById("floweyimg").src = "res/flowey_nice.png"
        },7000);
        if(!document.getElementById("mute").checked) {
            var audio = new Audio("res/flowey_laugh.mp3");
            audio.play();
        }
        localStorage.setItem("laughed", "true");
    }
}

function insert_inv_lists() {
    "use strict";
    function insert(node, i) {
        var newOption = document.createElement("option");
        newOption.setAttribute("value", i);
        var newContent = document.createTextNode(items[i]);
        newOption.appendChild(newContent);
        var select = document.getElementById(node);
        select.appendChild(newOption);
    }
    for (var i = 0; i < items.length; i++) {
        for (var j = 1; j <= 8; j++) {
            insert("sav-invslot" + j, i);
        }
        insert("sav-weapon", i);
        insert("sav-armor", i);
    }
}

function insert_cell_lists() {
    "use strict";
    for (var i = 1; i <= 8; i++) {
        loadSelectFromObj("sav-cellslot" + i, cellOpts);
    }
}

function loadSelectFromObj(selectId, obj) {
    "use strict";
    var select = document.getElementById(selectId);

    for (var key in obj) {
        var newOption = document.createElement("option");
        newOption.setAttribute("value", key);
        var newContent = document.createTextNode(obj[key]);
        newOption.appendChild(newContent);
        select.appendChild(newOption);
    }
}

// Load undertale.ini data into an ini object and execute a closure on it.
function loadIniFromFile(file, closure) {
    "use strict";
    var reader = new FileReader();
    reader.onload = function(e) {
        var text = e.target.result;
        try {
            closure(parseIniFromText(text));
        } catch (err) {
            window.alert("Error parsing undertale.ini: " + err);
        }
    };
    reader.readAsText(file);
}

// Load save data from a file into an array of values, and execute a closure on it.
function loadSaveFromFile(file, closure) {
    "use strict";
    var reader = new FileReader();
    reader.onload = function(e) {
        var text = e.target.result;
        closure(text.match(/[^\r\n]+/g));
    };
    reader.readAsText(file);
}

// Update the persistent data form from an ini object.
function updatePersistentDataForm(iniobj) {
    "use strict";
    document.getElementById("ini-name").value = iniobj.General.Name;
    document.getElementById("ini-location").value = parseInt(iniobj.General.Room.trim());
    document.getElementById("ini-kills").value = parseInt(iniobj.General.Kills.trim());
    document.getElementById("ini-love").value = parseInt(iniobj.General.Love.trim());
    if (iniobj.FFFFF) {
        if (iniobj.FFFFF.F) {
            if (parseInt(iniobj.FFFFF.F.trim()) === 1) {
                document.getElementById("ini-omega-flowey-trapped").checked = true;
            } else {
                document.getElementById("ini-omega-flowey-trapped").checked = false;
            }
        }
        if (iniobj.FFFFF.P) {
            document.getElementById("ini-omega-flowey-soul").value = parseInt(iniobj.FFFFF.P.trim());
        }
        if (iniobj.FFFFF.D) {
            document.getElementById("ini-omega-flowey-deaths").value = parseInt(iniobj.FFFFF.D.trim());
        }
    } else {
        document.getElementById("ini-omega-flowey-trapped").checked = false;
    }
    if (iniobj.reset) {
        if (iniobj.reset.s_key) {
            if (parseInt(iniobj.reset.s_key.trim()) === 1) {
                document.getElementById("ini-dodged-all-special-thanks").checked = true;
            } else {
                document.getElementById("ini-dodged-all-special-thanks").checked = false;
            }
        }
    } else {
        document.getElementById("ini-dodged-all-special-thanks").checked = false;
    }
    if (iniobj.fun) {
        document.getElementById("ini-fun").value = parseInt(iniobj.fun.trim());
    }
}

// Update an ini object from the persistent data form.
function updateIniFromForm(ini) {
    "use strict";
    ini.General.Name = document.getElementById("ini-name").value;
    ini.General.Room = document.getElementById("ini-location").value;
    ini.General.Kills = document.getElementById("ini-kills").value;
    ini.General.Love = document.getElementById("ini-love").value;
    if (document.getElementById("ini-omega-flowey-trapped").checked) {
        if (!ini.FFFFF) {
            ini.FFFFF = {};
        }
        ini.FFFFF.F = "1";
    } else {
        if (ini.FFFFF) {
            ini.FFFFF.F = "0";
        }
    }
    var upcomingSoul = parseInt(document.getElementById("ini-omega-flowey-soul").value);
    if (upcomingSoul) {
        if (!ini.FFFFF) {
            ini.FFFFF = {};
        }
        ini.FFFFF.P = upcomingSoul;
    }
    var timesDied = parseInt(document.getElementById("ini-omega-flowey-deaths").value);
    if (timesDied) {
        if (!ini.FFFFF) {
            ini.FFFFF = {};
        }
        if (ini.FFFFF) {
            ini.FFFFF.D = timesDied;
        }
    }
    if (document.getElementById("ini-dodged-all-special-thanks").checked) {
        if (!ini.reset) {
            ini.reset = {};
        }
        ini.reset.s_key = "1";
    } else {
        if (ini.reset) {
            ini.reset.s_key = "0";
        }
    }
    var fun = parseInt(document.getElementById("ini-fun").value);
    if (fun) {
        ini.General.fun = fun;
    }
}

function updateSelection(id, values, index, list) {
    "use strict";
    var value = parseInt(values[index].trim());
    if (!list[value]) {
        list[value] = "Unrecognized (" + value + ")";
        loadSelectFromObj(id, list);
    }
    document.getElementById(id).value = value;
}

// Update the save data form from an array of values.
function updateSaveDataForm(values) {
    "use strict";
    document.getElementById("sav-name").value = values[0];
    document.getElementById("sav-kills").value = values[11];
    document.getElementById("sav-love").value = values[1];
    document.getElementById("sav-hp").value = values[2];
    document.getElementById("sav-exp").value = values[9];
    document.getElementById("sav-gold").value = values[10];
    document.getElementById("sav-at").value = values[4];
    document.getElementById("sav-weaponat").value = values[5];
    document.getElementById("sav-df").value = values[6];
    document.getElementById("sav-armordf").value = values[7];
    for (var i = 0; i < 8; i++) {
        updateSelection("sav-invslot" + (i + 1), values, 12 + (i * 2), items);
        updateSelection("sav-cellslot" + (i + 1), values, 13 + (i * 2), cellOpts);
    }
    updateSelection("sav-weapon", values, 28, items);
    updateSelection("sav-armor", values, 29, items);
    updateSelection("sav-trainingdummystate", values, 44, trainingDummyStates);
    updateSelection("sav-torielstate", values, 75, torielStates);
    updateSelection("sav-doggostate", values, 82, doggoStates);
    updateSelection("sav-dogamydogaressastate", values, 83, dogamyDogaressaStates);
    updateSelection("sav-greaterdogstate", values, 84, greaterDogStates);
    updateSelection("sav-comedianstate", values, 87, comedianStates);
    updateSelection("sav-papyrusstate", values, 97, papyrusStates);
    updateSelection("sav-shyrenstate", values, 111, shyrenStates);
    document.getElementById("sav-unkkills").value = values[231];
    document.getElementById("sav-ruinskills").value = values[232];
    document.getElementById("sav-snowdinkills").value = values[233];
    document.getElementById("sav-waterfallkills").value = values[234];
    document.getElementById("sav-hotlandkills").value = values[235];
    updateSelection("sav-undynestate1", values, 281, undyneStates1);
    updateSelection("sav-maddummystate", values, 282, madDummyStates);
    updateSelection("sav-undynestate2", values, 380, undyneStates2);
    updateSelection("sav-muffetstate", values, 427, muffetStates);
    updateSelection("sav-broguardsstate", values, 432, broGuardsStates);
    updateSelection("sav-mettatonstate", values, 455, mettatonStates);
    if (parseInt(values[523].trim()) === 12) {
        document.getElementById("sav-exitedtruelab").checked = true;
    } else {
        document.getElementById("sav-exitedtruelab").checked = false;
    }
    if (parseInt(values[37].trim()) === 1) {
        document.getElementById("sav-defeatedasriel").checked = true;
    } else {
        document.getElementById("sav-defeatedasriel").checked = false;
    }
    updateSelection("sav-plotvalue", values, 542, plotValues);
    if (parseInt(values[545].trim()) === 1) {
        document.getElementById("sav-havecell").checked = true;
    } else {
        document.getElementById("sav-havecell").checked = false;
    }
    document.getElementById("sav-location").value = parseInt(values[547].trim());
    document.getElementById("sav-fun").value = parseInt(values[35].trim());
}

// Update an array of values from the save data form.
function updateSaveValuesFromForm(values) {
    "use strict";
    values[0] = document.getElementById("sav-name").value;
    values[1] = document.getElementById("sav-love").value;
    values[2] = document.getElementById("sav-hp").value;
    values[4] = document.getElementById("sav-at").value;
    values[5] = document.getElementById("sav-weaponat").value;
    values[6] = document.getElementById("sav-df").value;
    values[7] = document.getElementById("sav-armordf").value;
    values[9] = document.getElementById("sav-exp").value;
    values[10] = document.getElementById("sav-gold").value;
    values[11] = document.getElementById("sav-kills").value;
    values[12] = document.getElementById("sav-invslot1").value;
    values[13] = document.getElementById("sav-cellslot1").value;
    values[14] = document.getElementById("sav-invslot2").value;
    values[15] = document.getElementById("sav-cellslot2").value;
    values[16] = document.getElementById("sav-invslot3").value;
    values[17] = document.getElementById("sav-cellslot3").value;
    values[18] = document.getElementById("sav-invslot4").value;
    values[19] = document.getElementById("sav-cellslot4").value;
    values[20] = document.getElementById("sav-invslot5").value;
    values[21] = document.getElementById("sav-cellslot5").value;
    values[22] = document.getElementById("sav-invslot6").value;
    values[23] = document.getElementById("sav-cellslot6").value;
    values[24] = document.getElementById("sav-invslot7").value;
    values[25] = document.getElementById("sav-cellslot7").value;
    values[26] = document.getElementById("sav-invslot8").value;
    values[27] = document.getElementById("sav-cellslot8").value;
    values[28] = document.getElementById("sav-weapon").value;
    values[29] = document.getElementById("sav-armor").value;
    values[44] = document.getElementById("sav-trainingdummystate").value;
    values[75] = document.getElementById("sav-torielstate").value;
    values[82] = document.getElementById("sav-doggostate").value;
    values[83] = document.getElementById("sav-dogamydogaressastate").value;
    values[84] = document.getElementById("sav-greaterdogstate").value;
    values[87] = document.getElementById("sav-comedianstate").value;
    values[97] = document.getElementById("sav-papyrusstate").value;
    values[111] = document.getElementById("sav-shyrenstate").value;
    values[231] = document.getElementById("sav-unkkills").value;
    values[232] = document.getElementById("sav-ruinskills").value;
    values[233] = document.getElementById("sav-snowdinkills").value;
    values[234] = document.getElementById("sav-waterfallkills").value;
    values[235] = document.getElementById("sav-hotlandkills").value;
    values[281] = document.getElementById("sav-undynestate1").value;
    values[282] = document.getElementById("sav-maddummystate").value;
    values[380] = document.getElementById("sav-undynestate2").value;
    values[427] = document.getElementById("sav-muffetstate").value;
    values[432] = document.getElementById("sav-broguardsstate").value;
    values[455] = document.getElementById("sav-mettatonstate").value;
    if (document.getElementById("sav-exitedtruelab").checked) {
        values[523] = "12";
    } else {
        values[523] = "0";
    }
    if (document.getElementById("sav-defeatedasriel").checked) {
        values[37] = "1";
    } else {
        values[37] = "0";
    }
    values[542] = document.getElementById("sav-plotvalue").value;
    if (document.getElementById("sav-havecell").checked) {
        values[545] = "1";
    } else {
        values[545] = "0";
    }
    values[547] = document.getElementById("sav-location").value;
    values[35] = document.getElementById("sav-fun").value;
}

function saveIniToFile(ini) {
    "use strict";
    var string = "";
    for (var section in ini) {
        string += "[" + section + "]\r\n";
        for (var key in ini[section]) {
            string += key + "=\"" + ini[section][key] + "\"\r\n";
        }
    }
    var blob = new Blob([string], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "undertale.ini", true);
    flowey_laugh_once();
}

function saveSaveValuesToFile(values) {
    "use strict";
    var string = "";
    for (var i = 0; i < values.length; i++) {
        string += values[i] + "\r\n";
    }
    var blob = new Blob([string], {type: "application/octet-stream"});
    saveAs(blob, "file0", true);
    flowey_laugh_once();
}

function loadPresetSelect() {
    "use strict";
    var selectNode = document.getElementById("builtinpresetselect");
    for (var k in presets) {
        var newOption = document.createElement("option");
        var newContent = document.createTextNode(k);
        newOption.appendChild(newContent);
        selectNode.appendChild(newOption);
    }
}

function start() {
    "use strict";
    var userPresets = localStorage.getItem("userPresets");
    if (userPresets === null) {
        localStorage.setItem("userPresets", JSON.stringify({}));
    } else {
        for (var key in JSON.parse(userPresets)) {
            var presetSelect2 = document.getElementById("userpresetselect");
            var option2 = document.createElement("option");
            var text2 = document.createTextNode(key);
            option2.appendChild(text2);
            presetSelect2.appendChild(option2);
        }
    }
    if (localStorage.getItem("laughed") === "true") {
        document.getElementById("floweyimg").src = "res/flowey_evil.png";
    }
    var ini, saveLines;
    function loadPreset(name) {
        ini = presets[name].ini;
        saveLines = presets[name].lines;
        updateSaveDataForm(saveLines);
        updatePersistentDataForm(ini);
    }
    loadSelectFromObj("sav-location", rooms);
    loadSelectFromObj("ini-location", rooms);
    loadSelectFromObj("ini-omega-flowey-soul", floweyStates);
    loadSelectFromObj("sav-torielstate", torielStates);
    loadSelectFromObj("sav-comedianstate", comedianStates);
    loadSelectFromObj("sav-doggostate", doggoStates);
    loadSelectFromObj("sav-dogamydogaressastate", dogamyDogaressaStates);
    loadSelectFromObj("sav-greaterdogstate", greaterDogStates);
    loadSelectFromObj("sav-papyrusstate", papyrusStates);
    loadSelectFromObj("sav-plotvalue", plotValues);
    loadSelectFromObj("sav-trainingdummystate", trainingDummyStates);
    loadSelectFromObj("sav-shyrenstate", shyrenStates);
    loadSelectFromObj("sav-maddummystate", madDummyStates);
    loadSelectFromObj("sav-undynestate1", undyneStates1);
    loadSelectFromObj("sav-undynestate2", undyneStates2);
    loadSelectFromObj("sav-broguardsstate", broGuardsStates);
    loadSelectFromObj("sav-muffetstate", muffetStates);
    loadSelectFromObj("sav-mettatonstate", mettatonStates);
    insert_inv_lists();
    insert_cell_lists();
    loadPresetSelect();
    loadPreset("Ruins Start");
    var iniFile, saveFile;
    var iniInput = document.getElementById("ini-file");
    iniInput.addEventListener("change", function(evt) {
        iniFile = evt.target.files[0];
        if (iniFile) {
            document.getElementById("ini-loadbutton").disabled = false;
        } else {
            document.getElementById("ini-loadbutton").disabled = true;
        }
    }, false);
    var saveInput = document.getElementById("sav-file");
    saveInput.addEventListener("change", function (evt) {
        saveFile = evt.target.files[0];
        if (saveFile) {
            document.getElementById("sav-loadbutton").disabled = false;
        } else {
            document.getElementById("sav-loadbutton").disabled = true;
        }
    }, false);
    var iniLoadButton = document.getElementById("ini-loadbutton");
    iniLoadButton.addEventListener("click", function() {
        if (!iniFile) {
            window.alert("Вам нужно сперва выбрать файл!");
            return;
        }
        loadIniFromFile(iniFile, function(iniobj) {
            updatePersistentDataForm(iniobj);
            ini = iniobj;
        });
    }, false);
    var file0LoadButton = document.getElementById("sav-loadbutton");
    file0LoadButton.addEventListener("click", function() {
        if (!saveFile) {
            window.alert("Вам нужно сперва выбрать файл!");
            return;
        }
        loadSaveFromFile(saveFile, function(lines) {
            updateSaveDataForm(lines);
            saveLines = lines;
        });
    }, false);
    var saveIniButton = document.getElementById("ini-savebutton");
    saveIniButton.addEventListener("click", function() {
        updateIniFromForm(ini);
        saveIniToFile(ini);
    }, false);
    var saveXButton = document.getElementById("sav-savebutton");
    saveXButton.addEventListener("click", function() {
        updateSaveValuesFromForm(saveLines);
        saveSaveValuesToFile(saveLines);
    }, false);
    document.getElementById("savesi2").addEventListener("click", function() {
        var blob = new Blob([], {type: "application/octet-stream"});
        saveAs(blob, "system_information_962", true);
        flowey_laugh_once();
    }, false);
    document.getElementById("savesi3").addEventListener("click", function() {
        var blob = new Blob([], {type: "application/octet-stream"});
        saveAs(blob, "system_information_963", true);
        flowey_laugh_once();
    }, false);
    var weaponSelect = document.getElementById("sav-weapon");
    weaponSelect.onchange = function() {
        var at = weaponAts[weaponSelect.value];
        if (typeof at !== "undefined") {
            document.getElementById("sav-weaponat").value = at;
        }
    };
    var armorSelect = document.getElementById("sav-armor");
    armorSelect.onchange = function() {
        var df = ArmorDfs[armorSelect.value];
        if (typeof df !== "undefined") {
            document.getElementById("sav-armordf").value = df;
        }
    };
    document.getElementById("builtinpresetload").addEventListener("click", function() {
        var name = document.getElementById("builtinpresetselect").value;
        loadPreset(name);
    }, false);
    function saveUserPreset(name) {
        updateIniFromForm(ini);
        updateSaveValuesFromForm(saveLines);
        var obj = {
            "ini": ini,
            "lines": saveLines,
        };
        var presets = JSON.parse(localStorage.getItem("userPresets"));
        presets[name] = obj;
        localStorage.setItem("userPresets",JSON.stringify(presets));
    }
    document.getElementById("userpresetnew").addEventListener("click", function() {
        var name = window.prompt("Введите название вашего новой предустановки.");
        if (name === null || name === "") {
            window.alert("Вы не ввели действительное имя, предустановка не была создана.");
        } else {
            saveUserPreset(name);
            var presetSelect = document.getElementById("userpresetselect");
            var option = document.createElement("option");
            var text = document.createTextNode(name);
            option.appendChild(text);
            presetSelect.appendChild(option);
            presetSelect.value = name;
            document.getElementById("userpresetload").disabled = false;
            document.getElementById("userpresetsave").disabled = false;
            document.getElementById("userpresetdelete").disabled = false;
            document.getElementById("userpresetexport").disabled = false;
        }
    }, false);
    document.getElementById("userpresetsave").addEventListener("click", function() {
        var name = document.getElementById("userpresetselect").value;
        if (name !== null && name !== "") {
            saveUserPreset(name);
        } else {
            window.alert("Вы должны сперва выбрать действительную предустановку!");
        }
    }, false);
    document.getElementById("userpresetload").addEventListener("click", function() {
        var name = document.getElementById("userpresetselect").value;
        if (name !== null && name !== "") {
            var item = localStorage.getItem("userPresets");
            var presets = JSON.parse(item);
            var obj = presets[name];
            ini = obj.ini;
            saveLines = obj.lines;
            updateSaveDataForm(saveLines);
            updatePersistentDataForm(ini);
        } else {
            window.alert("Вы должны сперва выбрать действительную предустановку!");
        }
    }, false);
    document.getElementById("userpresetdelete").addEventListener("click", function() {
        var selection = document.getElementById("userpresetselect");
        var name = selection.value;
        var children = selection.childNodes;
        for (var i = 0; i < children.length; i++) {
            if (children[i].value === name) {
                selection.removeChild(children[i]);
            }
        }
        var item = localStorage.getItem("userPresets");
        var presets = JSON.parse(item);
        delete presets[name];
        localStorage.setItem("userPresets", JSON.stringify(presets));
        if (document.getElementById("userpresetselect").value === "") {
            document.getElementById("userpresetload").disabled = true;
            document.getElementById("userpresetsave").disabled = true;
            document.getElementById("userpresetdelete").disabled = true;
            document.getElementById("userpresetexport").disabled = true;
        }
    }, false);
    if (document.getElementById("userpresetselect").value !== "") {
        document.getElementById("userpresetload").disabled = false;
        document.getElementById("userpresetsave").disabled = false;
        document.getElementById("userpresetdelete").disabled = false;
        document.getElementById("userpresetexport").disabled = false;
    }
    document.getElementById("userpresetexport").addEventListener("click", function() {
        var presets = JSON.parse(localStorage.getItem("userPresets"));
        var name = document.getElementById("userpresetselect").value;
        saveUserPreset(name);
        var preset = presets[name];
        var string = "presets[\"" + name + "\"] = " + JSON.stringify(preset) + ";";
        var blob = new Blob([string], {type: "application/octet-stream"});
        saveAs(blob, name + ".js", true);
    }, false);
    document.getElementById("floweyimg").addEventListener("click", function() {
        document.getElementById("floweyimg").src = "res/flowey_wink.png";
        localStorage.setItem("laughed", false);
    }, false);
}

document.addEventListener("DOMContentLoaded", start);
