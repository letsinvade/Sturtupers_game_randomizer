const listNames = [
    'technologyCondition',
    'audienceCondition'
]

let conditions = {}
const trigger = document.getElementById('js-trigger');
const content = document.getElementById('js-results');

initConditions();

trigger.onclick = () => {
    let innerList = '';
    for (let i = 0; i < 9; i++) {
        innerList += generateResultItem(prepareItemInfo(), i);
    }

    content.innerHTML = innerList;

    initConditions();
}

function generateResultItem(data, index) {
    return `<li class="results__item">
                <h3 class="results__team">Команда ${index + 1}</h3>
                <div class="results__row">
                    <h4 class="results__title">Условие 1:</h4>
                    <p class="results__text">${data.technologyConditions[0]}</p>
                </div>
                <div class="results__row">
                    <h4 class="results__title">Условие 2:</h4>
                    <p class="results__text">${data.technologyConditions[1]}</p>
                </div>
                <div class="results__row">
                    <h4 class="results__title">Аудитория:</h4>
                    <p class="results__text">${data.audienceCondition}</p>
                </div>
            </li>`;
}

function prepareItemInfo() {
    let result = {
        technologyConditions: [],
        audienceCondition: null
    };

    for (let i = 0; i < 2; i++) {
        const index = Math.floor(Math.random() * Math.floor(conditions.technologyCondition.length));
        result.technologyConditions.push(conditions.technologyCondition[index]);
        conditions.technologyCondition.splice(index, 1);
    }

    const index = Math.floor(Math.random() * Math.floor(conditions.audienceCondition.length));
    result.audienceCondition = conditions.audienceCondition[index];
    conditions.audienceCondition.splice(index, 1);

    return result;
}

function initConditions() {
    conditions = {
        technologyCondition: [
            'Социальная сеть',
            'Мобильное приложение',
            'Интернет-сервис (браузерный)',
            'Для личной безопасности',
            'С применением 3D печати',
            'Образовательный проект',
            'Облачное хранилище данных',
            'Встроенная обработка фотографий',
            'Над контентом одновременно могут работать несколько пользователей',
            'VR',
            'Дополненная реальность',
            'Искусственный интеллект',
            'С привязкой к геолокации',
            'Связан с защитой окружающей среды',
            'Пользователи выкладывают видео',
            'Статистика использования в личном кабинете',
            'Голосовое управление',
            'Платная подписка',
            'Используется при перелетах',
            'Возможность отправлять сообщения другим пользователям',
            'Возможность совершать покупки',
            'Связь со стриминговыми сервисами',
            'Встроенная карта Земли',
            'Дистанционное управление',
            'Использование роботов',
            'Звуковой контент',
            'Измеряет температуру',
            'Связано с едой',
            'Управление летающим дроном',
            'Связано с музыкой',
            'Для здоровья',
            'Спорт',
            'Кинотеатры',
            'Связано с дорожным движением',
            'Транспорт',
            'Доставка',
            'Ежедневное применение',
            'Внутренняя валюта',
            'Умный дом',
            'Управление силой мысли (нейроинтерфейсы)'
        ],
        audienceCondition: [
            'Для родителей',
            'Педагоги',
            'Представители гос. учреждений',
            'Программисты',
            'Студенты',
            'Для тех, кто делает ремонт',
            'Для использования на концерте',
            'Для биологов',
            'Для туристов',
            'Для дальнобойщиков',
            'Для детей',
            'Основные пользователи – бабушки',
            'Основные пользователи – врачи',
            'Основные заказчики – школы',
            'Для офисных сотрудников',
            'Для социально незащищенных групп',
        ]
    }
}


