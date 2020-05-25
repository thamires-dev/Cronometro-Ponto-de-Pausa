document.getElementById("formulario").style.display = "none";
document.getElementById("buttonParar").style.display = "none";

var cronometro = 0;
var hr = 0;
var min = 0;
var seg = 1;

function iniciarCronometro() {

	document.getElementById("buttonParar").style.display = "inline-flex";
	document.getElementById("buttonIniciar").style.display = "none";

	var horas = document.getElementById('horas');
	var minutos = document.getElementById('minutos');
	var segundos = document.getElementById('segundos');

	cronometro = setInterval(function () {
		horas.innerHTML = hr < 10 ? '0' + hr : hr;
		minutos.innerHTML = min < 10 ? '0' + min : min;
		segundos.innerHTML = seg < 10 ? '0' + seg : seg;

		if (seg < 59) {
			seg += 1
		}
		else if (min < 59) {
			seg = 0
			min += 1
		}
		else if (hr < 23) {
			seg = 0
			min = 0
			hr += 1
		}
		else {
			alert("Limite de 24h atingido!");
		}
	}, 1000);
};

const senha = 123;

function pararCronometro() {

	var tempoSalvo = `${hr < 10 ? '0' + hr : hr}:${min < 10 ? '0' + min : min}:${seg < 10 ? '0' + (seg - 1) : (seg - 1)}`;

	document.getElementById("formulario").style.display = "inline-flex";

	const form = document.getElementById('formulario');
	form.addEventListener('submit', function (e) {
		e.preventDefault();
		const inputSenha = ['inputSenha'].map(
			name => form.querySelector(`[name="${name}"]`).value
		);

		if (senha == inputSenha) {
			document.getElementById('msgAutenticacao').innerText = `Cronômetro parado com sucesso às ${tempoSalvo}!`;
			clearInterval(cronometro);
			document.getElementById('horas').innerHTML = "00";
			document.getElementById('minutos').innerHTML = "00";
			document.getElementById('segundos').innerHTML = "00";
		}

		else {
			document.getElementById('msgAutenticacao').innerHTML = "Senha errada!";
			pararCronometro();
		}
	});
};