const translations = {
	en: {
		title: "YUMMY ME",
		nav: {
			about: "About",
			partners: "Partners",
			contacts: "Contacts"
		},
		hero: {
			heading: "DISTRIBUTION COMPANY FROM UKRAINE"
		},
		about: {
			title: "ABOUT US",
			text1: "YUMMY ME is an exclusive distributor of world-famous organic babies brands in Ukraine.",
			text2: "Introducing to Ukrainian market new organic kids brands. Products that we sell must be organic & plant-based.",
			text3: "We carefully select the brands that we will popularize in our country and take care about our babies & kids.",
			text4: "Cooperation with us always means favorable working conditions and personalization in working with your company."
		},
		philosophy: {
			title: "OUR PHILOSOPHY",
			text1: "Bringing high quality baby products on our market and promote world brands not only like a part of our company, but also each of them individually by creating websites and so on.",
			text2: "Our mission is raising the standard with the best food and baby care products for all families in our country.",
			text3: "High standards of work. Reliability. The possibility of promoting a new brand."
		},
		brand: {
			title: "WE WORK WITH SUCH BRAND",
			subtitle: "We are constantly looking for new brands to work with"
		},
		footer: {
			contacts: "CONTACTS"
		}
	},
	uk: {
		title: "YUMMY ME",
		nav: {
			about: "Про нас",
			partners: "Партнери",
			contacts: "Контакти"
		},
		hero: {
			heading: "ДИСТРИБУЦІЙНА КОМПАНІЯ З УКРАЇНИ"
		},
		about: {
			title: "ПРО НАС",
			text1: "YUMMY ME - ексклюзивний дистриб'ютор всесвітньо відомих органічних брендів для дітей в Україні.",
			text2: "Введення нових органічних дитячих брендів на український ринок. Продукти, які ми продаємо, повинні бути органічними та на рослинній основі.",
			text3: "Ми ретельно обираємо бренди, які будемо популяризувати в нашій країні та дбаємо про наших малюків.",
			text4: "Співпраця з нами завжди означає вигідні умови роботи та персоналізацію в роботі з вашою компанією."
		},
		philosophy: {
			title: "НАША ФІЛОСОФІЯ",
			text1: "Надання високоякісних дитячих продуктів на наш ринок та просування світових брендів не лише як частину нашої компанії, але й кожного окремо, створюючи вебсайти та інше.",
			text2: "Наша місія – підвищення стандартів з найкращими продуктами харчування та догляду за дітьми для всіх сімей у нашій країні.",
			text3: "Високі стандарти роботи. Надійність. Можливість просування нового бренду."
		},
		brand: {
			title: "МИ ПРАЦЮЄМО З ТАКИМИ БРЕНДАМИ",
			subtitle: "Ми постійно шукаємо нові бренди для співпраці"
		},
		footer: {
			contacts: "КОНТАКТИ"
		}
	}
};

function switchLanguage(language) {
	document.querySelector('title').innerText = translations[language].title;

	// Оновлюємо всі навігаційні посилання
	document.querySelectorAll('header nav a[href="#about"], .hero nav a[href="#about"]').forEach(link => link.innerText = translations[language].nav.about);
	document.querySelectorAll('header nav a[href="#partners"], .hero nav a[href="#partners"]').forEach(link => link.innerText = translations[language].nav.partners);
	document.querySelectorAll('header nav a[href="#contacts"], .hero nav a[href="#contacts"]').forEach(link => link.innerText = translations[language].nav.contacts);

	document.querySelector('.hero h1').innerHTML = translations[language].hero.heading;
	document.querySelector('.about h2').innerText = translations[language].about.title;
	document.querySelectorAll('.about p')[0].innerText = translations[language].about.text1;
	document.querySelectorAll('.about p')[1].innerText = translations[language].about.text2;
	document.querySelectorAll('.about p')[2].innerText = translations[language].about.text3;
	document.querySelectorAll('.about p')[3].innerText = translations[language].about.text4;
	document.querySelector('.philosophy h2').innerText = translations[language].philosophy.title;
	document.querySelectorAll('.philosophy__wrapper p')[0].innerText = translations[language].philosophy.text1;
	document.querySelectorAll('.philosophy__wrapper p')[1].innerText = translations[language].philosophy.text2;
	document.querySelectorAll('.philosophy__wrapper p')[2].innerText = translations[language].philosophy.text3;
	document.querySelector('.brand h2').innerText = translations[language].brand.title;
	document.querySelector('.brand p').innerText = translations[language].brand.subtitle;
	document.querySelector('.footer__contacts h2').innerText = translations[language].footer.contacts;

	document.querySelectorAll('.language-switcher button').forEach(btn => btn.classList.remove('active'));
	if (language === 'en') {
		document.querySelectorAll('#en-btn').forEach(btn => btn.classList.add('active'));
	} else {
		document.querySelectorAll('#uk-btn').forEach(btn => btn.classList.add('active'));
	}
}

document.querySelectorAll('#en-btn').forEach(btn => btn.addEventListener('click', () => switchLanguage('en')));
document.querySelectorAll('#uk-btn').forEach(btn => btn.addEventListener('click', () => switchLanguage('uk')));