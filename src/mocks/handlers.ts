import { http, delay, HttpResponse } from 'msw';

export const handlers = [
    http.get('**/users', async () => {
        await delay(2000);

        const users = new Array(1000).fill('').map((_, id) => ({
            items: {
                info: {
                    logo: 'MI Lorain',
                    name: 'Иванов Иван Петрович',
                    position: 'Директор',
                    companyName: 'Смарт Сервис',
                    description: 'Нача компания предоставляет лучшее обслуживаение в сфере IT технологий.',
                },
                items: [
                    {
                        name: '+79094676875',
                        url: './mobileImg.svg',
                        type: 'phone',
                    },
                    {
                        name: '+79725617548',
                        url: './phoneImg.svg',
                        type: 'phone',
                    },
                    {
                        name: '+79213678994',
                        url: './phoneImg.svg',
                        type: 'phone',
                    },
                    {
                        name: 'IvanPetr@gmail.com',
                        url: './mailImg.svg',
                        type: 'mail',
                    },
                    {
                        name: 'IvanPetr@gmail.com',
                        url: './urlImg.svg',
                        type: 'mail',
                    },
                    {
                        name: 'Санкт-Петербург, Аптекарская набережная, 20',
                        url: 'adressImg.svg',
                    },
                    {
                        name: '12.5.1978',
                        url: './dateImg.svg',
                    },
                    {
                        name: 'Доцент, Доцент кафедры информационной безопасности',
                        url: './personImg.svg',
                    },
                ],
                companyItems: [
                    {
                        name: '+79725617548',
                        url: './mobileImg.svg',
                        type: 'phone',
                    },
                    {
                        name: 'IvanPetr@gmail.com',
                        url: './mailImg.svg',
                        type: 'mail',
                    },
                    {
                        name: 'IvanPetr@gmail.com',
                        url: './urlImg.svg',
                        type: 'mail',
                    },
                    {
                        name: 'Санкт-Петербург, Аптекарская набережная, 20',
                        url: 'adressImg.svg',
                    },
                    {
                        name: '12.5.1978',
                        url: './dateImg.svg',
                    },
                    {
                        name: 'Гай Юлий Цезарь, Пантифик Саливан, Хаяо Миядзаки, Федор Бондарчук',
                        url: './personImg.svg',
                    },
                    {
                        name: 'Факс',
                        url: './print.svg',
                    },
                ],
                links: [
                    {
                        img: './Telegram.svg',
                        link: 'https://web.telegram.org/a/',
                    },
                    {
                        img: './Whatsapp.svg',
                        link: 'https://www.whatsapp.com/?lang=ru_RU',
                    },
                    {
                        img: './Viber.svg',
                        link: 'https://www.viber.com/ru/',
                    },
                    {
                        img: './Instagram.svg',
                        link: 'https://www.instagram.com/',
                    },
                    {
                        img: './Vk.svg',
                        link: 'https://vk.com/',
                    },
                    {
                        img: './Facebook.svg',
                        link: 'https://www.facebook.com/?locale=ru_RU',
                    },
                    {
                        img: './YouTube.svg',
                        link: 'https://www.youtube.com/',
                    },
                    {
                        img: './Ok.svg',
                        link: 'https://ok.ru/',
                    },
                    {
                        img: './Dzen.svg',
                        link: 'https://dzen.ru/?utm_referrer=www.google.com',
                    },
                    {
                        img: './Tiktok.svg',
                        link: 'https://www.tiktok.com/ru-RU/',
                    },
                    {
                        img: './Linked_in.svg',
                        link: 'https://ru.linkedin.com/',
                    },
                ],
                photo: [
                    {
                        link: './baseImg.png',
                        linkMobile: './mobileImg.png',
                        alt: 'фото сотрудника',
                    },
                    {
                        link: './baseImg.png',
                        linkMobile: './mobileImg.png',
                        alt: 'фото сотрудника',
                    },
                    {
                        link: './baseImg.png',
                        linkMobile: './mobileImg.png',
                        alt: 'фото сотрудника',
                    },
                    {
                        link: './baseImg.png',
                        linkMobile: './mobileImg.png',
                        alt: 'фото сотрудника',
                    },
                    {
                        link: './baseImg.png',
                        linkMobile: './mobileImg.png',
                        alt: 'фото сотрудника',
                    },
                    {
                        link: './baseImg.png',
                        linkMobile: './mobileImg.png',
                        alt: 'фото сотрудника',
                    },
                ],
            },
        }));

        return HttpResponse.json(users);
    }),
];
