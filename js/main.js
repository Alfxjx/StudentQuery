// const d = document.getElementById('dropdown');
const input = document.getElementById('prov');
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

// 选择对应的城市
const items = document.querySelectorAll('li');
for (let i = 0; i < items.length; i++) {
	items[i].addEventListener('click', () => {
		input.value = items[i].innerText;
	});
}


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

// JQuery in here
$(document).ready(function() {
  console.log('欢迎使用天津大学新生查询系统')
  // 显示下拉菜单
  $('#show').click(function(e){
    e.stopPropagation();
    let d = $('#dropdown');
    if(d.css('display') === 'block'){
      d.css('display','none');
    } else {
      d.css('display','block');
    }
  });

  // 点击页面其他位置收起下拉菜单
  $('#root').click(function(){
    if($('#dropdown').css('display') === 'block'){
      console.log('close');
      $('#dropdown').css('display','none');
    }
  });

  // 选择对应的城市
  // $('.dropdown-list').children().each(function(){
  //   let value = $(this).text();
  //   $('#prov').attr('value',value);
  // })
  // 点击触发查询按钮
  $('#btn-ani').click(function(){
    $('#btn-ani').css('animation','input-shadow 0.2s linear');
    $('#btn-ani').css('box-shaow','0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2)');
    setTimeout(() => {
      $('#btn-ani').css('animation','none');
    }, 200);
    var province = $('#prov').val();
    var number = $('#Qnum').val();
    console.log(province+number);
    // show query result
    $('.result').slideToggle('normal');
  });

  // clear the input
  $('.cancel-btn').click(function(){
    $('#Qnum').val('');
  });
});
