// 드로잉 웹앱 JS 파일

const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
const colorPicker = document.getElementById('colorPicker');
const lineWidth = document.getElementById('lineWidth');
const clearBtn = document.getElementById('clearBtn');

let drawing = false;
let lastX = 0;
let lastY = 0;

// 그리기 시작
canvas.addEventListener('mousedown', (e) => {
	drawing = true;
	[lastX, lastY] = [e.offsetX, e.offsetY];
});

// 그리기 중
canvas.addEventListener('mousemove', (e) => {
	if (!drawing) return;
	ctx.strokeStyle = colorPicker.value;
	ctx.lineWidth = lineWidth.value;
	ctx.lineCap = 'round';
	ctx.beginPath();
	ctx.moveTo(lastX, lastY);
	ctx.lineTo(e.offsetX, e.offsetY);
	ctx.stroke();
	[lastX, lastY] = [e.offsetX, e.offsetY];
});

// 그리기 종료
canvas.addEventListener('mouseup', () => {
	drawing = false;
});
canvas.addEventListener('mouseleave', () => {
	drawing = false;
});

// 초기화 버튼 기능
clearBtn.addEventListener('click', () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// 모바일 터치 지원
canvas.addEventListener('touchstart', (e) => {
	e.preventDefault();
	drawing = true;
	const rect = canvas.getBoundingClientRect();
	const touch = e.touches[0];
	lastX = touch.clientX - rect.left;
	lastY = touch.clientY - rect.top;
});
canvas.addEventListener('touchmove', (e) => {
	e.preventDefault();
	if (!drawing) return;
	const rect = canvas.getBoundingClientRect();
	const touch = e.touches[0];
	const x = touch.clientX - rect.left;
	const y = touch.clientY - rect.top;
	ctx.strokeStyle = colorPicker.value;
	ctx.lineWidth = lineWidth.value;
	ctx.lineCap = 'round';
	ctx.beginPath();
	ctx.moveTo(lastX, lastY);
	ctx.lineTo(x, y);
	ctx.stroke();
	lastX = x;
	lastY = y;
});
canvas.addEventListener('touchend', () => {
	drawing = false;
});
