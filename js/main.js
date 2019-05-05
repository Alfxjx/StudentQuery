const d = document.getElementById('dropdown');
const input = document.getElementById('prov');
const button = document.querySelector('#show');
// 飞入效果
button.addEventListener('click', event => {
	event.stopPropagation();
	if (d.style.display === 'block') {
		d.style.display = 'none';
	} else {
		d.style.display = 'block';
	}
});
const root = document.querySelector('#root');
root.addEventListener('click', event => {
	// console.log('close');
	if (d.style.display === 'block') {
		d.style.display = 'none';
	}
});

const items = document.querySelectorAll('li');
for (let i = 0; i < items.length; i++) {
	items[i].addEventListener('click', event => {
		input.value = items[i].innerText;
	});
}
// 点击触发查询按钮
function query() {
	let province = document.getElementById('prov');
	let number = document.getElementById('Qnum');
	let btn = document.getElementById('btn-ani');
	btn.style.animation = 'input-shadow 0.5s linear';
	btn.style.boxShadow = `0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2)`;
	setTimeout(() => {
		btn.style.animation = `none`;
	}, 500);
	// alert(`${province.value}+${number.value}`);
	console.log(province.value);
	// console.log(number.value);
	// let btnStyle = document.getElementsByClassName('btn')[0].style;
	// btnStyle.backgroundColor = 'red';
}

$(document).ready(function() {
	$('#btn-ani').click(function() {
		$('.result').slideToggle('normal');
	});
});
