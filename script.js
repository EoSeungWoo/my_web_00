// 날짜 표시
function updateDate() {
    const dateElem = document.getElementById('date');
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    dateElem.textContent = today.toLocaleDateString('ko-KR', options);
}

// 한마디 목록
const quotes = [
    '오늘도 힘내세요!',
    '작은 성공이 큰 변화를 만듭니다.',
    '포기하지 마세요.',
    '당신은 할 수 있습니다!',
    '매일 조금씩 성장하세요.',
    '웃음은 최고의 명약입니다.',
    '도전은 언제나 가치 있습니다.',
    '실패는 성공의 어머니입니다.',
    '긍정적인 마음을 가지세요.',
    '행복은 가까이에 있습니다.'
];

// 랜덤 한마디 출력
function showRandomQuote() {
    console.log('showRandomQuote 함수가 호출되었습니다.'); // 함수 호출 로그
    const quoteElem = document.getElementById('quote');
    console.log('quoteElem:', quoteElem); // quoteElem 요소 확인
    const idx = Math.floor(Math.random() * quotes.length);
    console.log('랜덤 인덱스:', idx); // 생성된 랜덤 인덱스 출력
    quoteElem.textContent = quotes[idx];
    console.log('선택된 한마디:', quotes[idx]); // 선택된 한마디 출력
}

// 다크/라이트 모드 토글
function toggleMode() {
    const body = document.body;
    const btn = document.getElementById('modeToggle');
    body.classList.toggle('dark');
    btn.textContent = body.classList.contains('dark') ? '라이트모드' : '다크모드';
}

// 이벤트 연결
window.onload = function() {
    updateDate();
    document.getElementById('randomBtn').onclick = showRandomQuote;
    document.getElementById('modeToggle').onclick = toggleMode;
};
