import image from './assets/image.jpg'
import {Block} from './classes/blocks'
const text = `
Ссылка на мой GitHub: <a href = "https://github.com/pavlogang" target = "_blank" > Павел Баранов </a>. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, doloribus. Omnis consectetur ab id itaque.`

export const model = [
	new Block('title', 'Конструктор сайта на чистом JavaScript', {
		tag: 'h2',
		styles: 'background: linear-gradient(to right, #ff0099, #493240);color: #fff;padding: 1.5rem;text-align: center;'
	}),
	new Block('image', image, {
		styles: 'padding: 2rem 0; display: flex; justify-content: center',
		alt: 'my image',
		imageStyles: 'width: 300px; height: auto;'
	}),
	new Block('textColumns', [
		'Приложение на чистом JavaScript, без использования библиотек',
		'Написанно опираясь на принципы SOLID и ООП',
		'JavaScript - это просто, интересно. Научись создавать любые UI своими руками',
	], {
		styles: 'padding: 2rem 0; color: #fff;background: linear-gradient(to bottom, #8e2de2, #4a00e0);font-weight: bold; text-align: center;'
	}),
	new Block('text', text, {
		styles: 'background: #84A2F7; color: #27304A; text-align: center; padding: 1.3rem;'
	})
]