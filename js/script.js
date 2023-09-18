const prev = document.querySelector(".offer__slider-prev");
const next = document.querySelector(".offer__slider-next");
const slides = document.querySelectorAll(".offer__slide");
const currentView = document.querySelector("#current");
const totalView = document.querySelector("#total");
let slideIndex = 0;

totalView.innerHTML = slides.length >= 10 ? slides.length : `0${slides.length}`;

function slideShow(n) {
	if (n > slides.length - 1) {
		slideIndex = 0;
	}
	if (n < 0) {
		slideIndex = slides.length - 1;
	}
	slides.forEach((slide) => slide.classList.add("fade", "hide"));
	slides[slideIndex].classList.remove("hide");
	currentView.innerHTML =
		slideIndex + 1 >= 10 ? slideIndex + 1 : `0${slideIndex + 1}`;
}

slideShow();

prev.onclick = () => {
	slideIndex--;
	slideShow(slideIndex);
};
next.onclick = () => {
	slideIndex++;
	slideShow(slideIndex);
};

const mw = document.querySelector(".modal");
const mw_close = document.querySelector("[data-close]");
const btns = document.querySelectorAll("[data-modal]");
const inps = document.querySelectorAll(".modal__input");

btns.forEach((btn) => {
	btn.onclick = () => {
		mw.classList.remove("hide", "fade");
		mw.classList.add("show", "fade");
	};
});
mw_close.onclick = () => {
	mw.classList.remove("show", "fade");
	mw.classList.add("hide", "fade");
	inps.forEach((inp) => (inp.value = ""));
};
document.body.onkeydown = (e) => {
	if (mw.classList.contains("show")) {
		if (e.keyCode === 27) {
			mw.classList.remove("show", "fade");
			mw.classList.add("hide", "fade");
			inps.forEach((inp) => (inp.value = ""));
		}
	}
};

let tabContents = document.querySelectorAll(".tabcontent");
let tabHeader_items = document.querySelectorAll(".tabheader__item");
let indexTabContent = 0;

let clickedItem = 0

tabContents.forEach(el => el.classList.add('fade', 'hide'))
tabContents[0].classList.remove('hide')

tabHeader_items.forEach((tab, idx) => {
	tab.onclick = () => {
		tabHeader_items[clickedItem].classList.remove('tabheader__item_active')
		tabContents[clickedItem].classList.add('hide')
		tab.classList.add('tabheader__item_active')
		tabContents[idx].classList.remove('hide')
		
		clickedItem = idx
	}
})


const nameInput = document.querySelector('input[name="name"]');
const phoneInput = document.querySelector('input[name="phone"]');

nameInput.addEventListener('input', function() {
  const nameValue = this.value;
  
  if (/\d/.test(nameValue)) {
	nameInput.style.color = 'red';
  } else {
	nameInput.style.color = '';
  }
});



phoneInput.addEventListener('input', function() {
  const phoneNumber = this.value;
  
  if (/[a-zA-Z]/.test(phoneNumber)) {
	phoneInput.style.color = 'red';
  } else {
	phoneInput.style.color = '';
  }
});

let userData = {
	gender: "woman"
}

let genderBtns = document.querySelectorAll('[data-gender]')
let constitution = document.querySelectorAll('.calculating__choose_medium input')
let activity = document.querySelectorAll('.calculating__choose_big div')
let resultView = document.querySelector('#result')

genderBtns.forEach(btn => {
	btn.onclick = () => {
		genderBtns.forEach(el => el.classList.remove('calculating__choose-item_active'))
		btn.classList.add('calculating__choose-item_active')

		userData.gender = btn.getAttribute('data-gender')
	}
})

constitution.forEach(inp => {
	inp.onkeyup = () => {
		userData[inp.id] = inp.value
	}
})


activity.forEach(btn => {
	btn.onclick = () => {
		activity.forEach(el => el.classList.remove('calculating__choose-item_active'))
		btn.classList.add('calculating__choose-item_active')
		let act = +btn.getAttribute('data-act')

		if(userData.gender === 'woman') {
			let result = 655.1 + (9.563 * userData.weight) + (1.85 * userData.height) - (4.676 * userData.age);

			result *= act

			resultView.innerHTML = Math.round(result)
		} else {
			let result = 66.5 + (13.75 * userData.weight) + (5.003 * userData.height) - (6.775 * userData.age)

			result *= act

			resultView.innerHTML = Math.round(result)
		}
	}
})




function startTimer(duration, display) {
	let timer = duration;
	let minutes, seconds;
  
	const timerInterval = setInterval(function () {
	  minutes = parseInt(timer / 60, 10);
	  seconds = parseInt(timer % 60, 10);
  
	  minutes = minutes < 10 ? "0" + minutes : minutes;
	  seconds = seconds < 10 ? "0" + seconds : seconds;
  
	  display.querySelector("#minutes").textContent = minutes;
	  display.querySelector("#seconds").textContent = seconds;
  
	  if (--timer < 0) {
		clearInterval(timerInterval);
		displayConfetti();
	  }
	}, 1000);
  }
  
  function displayConfetti() {
	const confettiSettings = { target: "confetti" };
	confetti(confettiSettings);
  }
  
  window.addEventListener("DOMContentLoaded", function () {
	const countdown = document.querySelector(".timer");
	const minutes = parseInt(countdown.querySelector("#minutes").textContent, 10);
	const seconds = parseInt(countdown.querySelector("#seconds").textContent, 10);
  
	const duration = minutes * 60 + seconds;
	const display = document.querySelector(".timer");
  
	startTimer(duration, display);
  });