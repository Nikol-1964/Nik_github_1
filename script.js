// Массив с новостями, добавлено поле с датой
const news = [
    {
        title: "Новейшие системы автоматизации в умных домах 🛠️",
        content: "Системы автоматизации становятся всё более интеллектуальными. Сейчас на рынке появляются устройства, которые интегрируются с искусственным интеллектом, обеспечивая полный контроль за освещением, климатом и безопасностью вашего дома. 🏠",
        date: "01 октября 2024"
    },
    {
        title: "Голосовые ассистенты и их будущее в умных домах 🎤",
        content: "Amazon Alexa и Google Assistant всё глубже интегрируются в умные дома, предлагая пользователям новые возможности. В будущем ожидается ещё больше взаимодействия между устройствами и людьми, что сделает ваш дом умнее, чем когда-либо. 🤖",
        date: "05 октября 2024"
    },
    {
        title: "Искусственный интеллект управляет вашими бытовыми приборами 🤖",
        content: "Новые модели холодильников, стиральных машин и пылесосов с поддержкой ИИ уже появляются на рынке. Эти устройства способны учиться и адаптироваться к вашим привычкам, экономя время и ресурсы. ⚙️",
        date: "10 октября 2024"
    },
    {
        title: "Умные термостаты: экономия энергии и комфорт 🌡️",
        content: "Умные термостаты могут значительно снизить ваши счета за электроэнергию, автоматически регулируя температуру в зависимости от ваших предпочтений и привычек.",
        date: "15 октября 2024"
    },
    {
        title: "Безопасность с помощью умных камер 🎥",
        content: "Современные системы безопасности теперь включают в себя умные камеры, которые могут обнаруживать движение и уведомлять вас о подозрительной активности в вашем доме.",
        date: "20 октября 2024"
    }
];

// Индекс для отслеживания загруженных новостей
let newsIndex = 0;

// Функция для сортировки новостей
function sortNews() {
    const sortValue = document.getElementById('sort-select').value;
    if (sortValue === 'newest') {
        news.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else {
        news.sort((a, b) => new Date(a.date) - new Date(b.date));
    }
    newsIndex = 0; // Сброс индекса
    document.getElementById('news-container').innerHTML = ''; // Очистка контейнера
    loadMoreNews(); // Загрузка новостей
}

// Функция для загрузки новостей
function loadMoreNews() {
    const newsContainer = document.getElementById('news-container');

    for (let i = 0; i < 2; i++) { // Загружаем по 2 новости за раз
        if (newsIndex < news.length) {
            const newsItem = document.createElement('div');
            newsItem.className = 'news-item';
            newsItem.innerHTML = `
                <h2>${news[newsIndex].title}</h2>
                <p>${news[newsIndex].content}</p>
                <p class="date">${news[newsIndex].date}</p> <!-- Добавлена дата -->
                <a href="#">Читать далее &rarr;</a>
            `;
            newsContainer.appendChild(newsItem);
            newsIndex++;
        }
    }

    // Скрываем кнопку, если все новости загружены
    if (newsIndex >= news.length) {
        document.getElementById('load-more').style.display = 'none';
    }
}

// Загружаем первые 2 новости при загрузке страницы
window.onload = function() {
    loadMoreNews();
};
