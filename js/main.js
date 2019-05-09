// const d = document.getElementById('dropdown');
// const button = document.querySelector('#show');
// 显示下拉菜单
// button.addEventListener('click', event => {
// 	event.stopPropagation();
// 	if (d.style.display === 'block') {
// 		d.style.display = 'none';
// 	} else {
// 		d.style.display = 'block';
// 	}
// });
// 点击页面其他位置收起下拉菜单
// const root = document.querySelector('#root');
// root.addEventListener('click', event => {
// 	// console.log('close');
// 	if (d.style.display === 'block') {
// 		d.style.display = 'none';
// 	}
// });

// 点击触发查询按钮
// function query() {
// 	let province = document.getElementById('prov');
// 	let number = document.getElementById('Qnum');
// 	let btn = document.getElementById('btn-ani');
// 	btn.style.animation = 'input-shadow 0.2s linear';
// 	btn.style.boxShadow = `0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2)`;
// 	setTimeout(() => {
// 		btn.style.animation = `none`;
// 	}, 200);
// 	// alert(`${province.value}+${number.value}`);
// 	console.log(province.value);
// 	// console.log(number.value);
// 	// let btnStyle = document.getElementsByClassName('btn')[0].style;
// 	// btnStyle.backgroundColor = 'red';
// }

// 选择对应的城市
// const input = document.getElementById('prov');
// const items = document.querySelectorAll('li');
// for (let i = 0; i < items.length; i++) {
// 	items[i].addEventListener('click', () => {
// 		input.value = items[i].innerText;
// 	});
// }

// JQuery in here
// 设置列表
$(function() {
	//province list
	const provinceList = [
		'北京市',
		'天津市',
		'上海市',
		'重庆市',
		'河北省',
		'山西省',
		'吉林省',
		'辽宁省',
		'黑龙江省',
		'陕西省',
		'甘肃省',
		'青海省',
		'山东省',
		'福建省',
		'浙江省',
		'台湾省',
		'河南省',
		'湖北省',
		'湖南省',
		'江西省',
		'江苏省',
		'安徽省',
		'广东省',
		'海南省',
		'四川省',
		'贵州省',
		'云南省',
		'内蒙古自治区',
		'新疆维吾尔自治区',
		'宁夏回族自治区',
		'广西壮族自治区',
		'西藏自治区',
		'香港特别行政区',
		'澳门特别行政区',
	];
	provinceList.forEach(function(e) {
		$('<li class="city"></li>')
			.text(e)
			.appendTo('.dropdown-list')
			.click(function() {
				$('#prov').attr('value', e);
			});
	});
});

$(document).ready(function() {
	console.log('欢迎使用天津大学新生查询系统');
	// 显示下拉菜单
	$('#show').click(function(e) {
		e.stopPropagation();
		let d = $('#dropdown');
		if (d.css('display') === 'block') {
			d.css('display', 'none');
		} else {
			d.css('display', 'block');
		}
	});

	// 点击页面其他位置收起下拉菜单
	$('#root').click(function() {
		if ($('#dropdown').css('display') === 'block') {
			console.log('close');
			$('#dropdown').css('display', 'none');
		}
	});

	// 选择对应的城市 TODO

	// 点击触发查询按钮
	$('#btn-ani').click(function() {
		// 添加按钮动画
		$('#btn-ani').css('animation', 'input-shadow 0.2s linear');
		$('#btn-ani').css(
			'box-shaow',
			'0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2)'
		);
		setTimeout(() => {
			$('#btn-ani').css('animation', 'none');
		}, 200);

		// ajax查询
		var province = $('#prov').val();
		var number = $('#Qnum').val();
		console.log(province + number);
		$.post(
			'link',
			{
				province: province,
				num: number,
			},
			function(status, title, name, college, subject, classNum) {
				if (status === 1) {
					// 未录取
					$('table').css('display', 'none');
					$('.res-title').text('未录取');
				} else if (status === 0) {
					$('.res-title').text(title);
					$('#name')
						.next()
						.text(name);
					$('#college')
						.next()
						.text(college);
					$('#subject')
						.next()
						.text(subject);
					$('#classNum')
						.next()
						.text(classNum);
				} else {
					console.log('error');
					$('.res-title').text('查询错误');
				}
			}
		);
		// show query result
		$('.result').slideToggle('normal');
	});

	// clear the input
	$('.cancel-btn').click(function() {
		$('#Qnum').val('');
	});
});
