const listNames = [
    'sphereCondition',
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
                    <h4 class="results__title">Сфера:</h4>
                    <p class="results__text">${data.sphereCondition}</p>
                </div>
                <div class="results__row">
                    <h4 class="results__title">Технология:</h4>
                    <p class="results__text">${data.technologyCondition}</p>
                </div>
                <div class="results__row">
                    <h4 class="results__title">Аудитория:</h4>
                    <p class="results__text">${data.audienceCondition}</p>
                </div>
            </li>`;
}

function prepareItemInfo() {
    let result = {
        sphereCondition: null,
        technologyCondition: null,
        audienceCondition: null
    };

    listNames.forEach(name => {
        const index = Math.floor(Math.random() * Math.floor(conditions[name].length));
        result[name] = conditions[name][index];
        conditions[name].splice(index, 1);
    })

    return result;
}

function initConditions() {
    conditions = {
        sphereCondition: [
            'Медицина',
            'Образование',
            'Еда',
            'Геолокация',
            'Доставка',
            'Для работы',
            'Для отдыха',
            'Социально направленный проект',
            'Эмоциональное состояние',
            'Планирование жизни',
            'Финансы'
        ],
        technologyCondition: [
            'VR',
            'AR',
            'AI',
            'Геолокация',
            'Рекомендательная система',
            'Маркетплейс',
            'Тулза',
            'Наличие собственной валюты',
            'Уникальный девайс',
            'Датчики для сбора данных',
            'Совместное использование',
            'Голосовое управление',
            'Дроны'
        ],
        audienceCondition: [
            'Молодые родители',
            'Педагоги',
            'Полицейские',
            'Боксеры',
            'Пожилые люди',
            'Родители школьников',
            'Представители гос. учреждений',
            'Программисты',
            'Студенты',
            'Автомобильные туристы'
        ]
    }
}
