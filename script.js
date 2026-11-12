/* =========================================================
   K-LEARN 🇰🇷 - JavaScript Interaktiv Mantiqlari
   ========================================================= */

// --- DATA: HANGUL HARFLARI ---
const consonants = [
    { char: 'ㄱ', latin: 'G / K', ex: '가구 (Mebel)' },
    { char: 'ㄴ', latin: 'N', ex: '나무 (Daraxt)' },
    { char: 'ㄷ', latin: 'D / T', ex: '다리 (Ko\'prik/Oyoq)' },
    { char: 'ㄹ', latin: 'R / L', ex: '라디오 (Radio)' },
    { char: 'ㅁ', latin: 'M', ex: '마음 (Yurak)' },
    { char: 'ㅂ', latin: 'B / P', ex: '바다 (Dengiz)' },
    { char: 'ㅅ', latin: 'S', ex: '사람 (Odam)' },
    { char: 'ㅇ', latin: 'Ng / Bosh', ex: '아침 (Ertalab)' },
    { char: 'ㅈ', latin: 'J', ex: '지도 (Xarita)' },
    { char: 'ㅊ', latin: 'Ch', ex: '차 (Choy/Mashina)' },
    { char: 'ㅋ', latin: 'Kh', ex: '카메라 (Kamera)' },
    { char: 'ㅌ', latin: 'Th', ex: '타조 (Tuyuqush)' },
    { char: 'ㅍ', latin: 'Ph', ex: '파도 (To\'lqin)' },
    { char: 'ㅎ', latin: 'H', ex: '하늘 (Osmon)' }
];

const vowels = [
    { char: 'ㅏ', latin: 'A', ex: '아버지 (Ota)' },
    { char: 'ㅑ', latin: 'Ya', ex: '야구 (Beysbol)' },
    { char: 'ㅓ', latin: 'O (o\')', ex: '어머니 (Ona)' },
    { char: 'ㅕ', latin: 'Yo (yo\')', ex: '여우 (Tulkining)' },
    { char: 'ㅗ', latin: 'O', ex: '오빠 (Aka)' },
    { char: 'ㅛ', latin: 'Yo', ex: '요리 (Taom)' },
    { char: 'ㅜ', latin: 'U', ex: '우유 (Sut)' },
    { char: 'ㅠ', latin: 'Yu', ex: '유리 (Oyna)' },
    { char: 'ㅡ', latin: 'I (y)', ex: '으뜸 (Bosh)' },
    { char: 'ㅣ', latin: 'I', ex: '이름 (Ism)' }
];

// --- DATA: LUG'AT ---
const vocabularyList = [
    { kr: '안녕하세요', pron: 'Annyeonghaseyo', uz: 'Salom', ex: '안녕하세요, 반갑습니다!' },
    { kr: '감사합니다', pron: 'Gamsahamnida', uz: 'Rahmat', ex: '도와주셔서 감사합니다.' },
    { kr: '학교', pron: 'Hakgyo', uz: 'Maktab', ex: '저는 학교에 갑니다.' },
    { kr: '친구', pron: 'Chingu', uz: 'Do\'st', ex: '내 친구는 친절해요.' },
    { kr: '물', pron: 'Mul', uz: 'Suv', ex: '물 주세요.' },
    { kr: '책', pron: 'Chaek', uz: 'Kitob', ex: '책을 읽습니다.' },
    { kr: '사랑해요', pron: 'Saranghaeyo', uz: 'Sizni sevaman', ex: '한국을 사랑해요.' },
    { kr: '네 / 아니요', pron: 'Ne / Aniyo', uz: 'Ha / Yo\'q', ex: '네, 알겠습니다.' },
    { kr: '음식', pron: 'Eumsik', uz: 'Taom / Ovqat', ex: '한국 음식은 맛있어요.' },
    { kr: '집', pron: 'Jip', uz: 'Uy', ex: '지금 집에 있어요.' }
];

// --- DATA: GRAMMATIKA ---
const grammarTopics = [
    {
        tag: 'Qoida 1',
        title: '은 / 는 — Mavzu Qo\'shimchalari',
        desc: 'Gapdagi asosiy mavzuni ajratib ko\'rsatish uchun ishlatiladi. Unli bilan tugasa <b>는</b>, undosh bilan tugasa <b>은</b> qo\'shiladi.',
        examples: [
            '저<b>는</b> 학생입니다. (Men talabaman.)',
            '이것<b>은</b> 책입니다. (Bu kitobdir.)'
        ],
        quizQuestion: 'Olim (올림) so\'ziga qaysi qo\'shimcha qo\'shiladi?',
        options: ['은', '는'],
        correctIndex: 0
    },
    {
        tag: 'Qoida 2',
        title: '이 / 가 — Ega Qo\'shimchalari',
        desc: 'Gapdagi harakat bajaruvchisini (egani) bildiradi. Undosh bilan tugasa <b>이</b>, unli bilan tugasa <b>가</b> qo\'shiladi.',
        examples: [
            '비<b>가</b> 오고 있어요. (Yomg\'ir yog\'moqda.)',
            '물<b>이</b> 차가워요. (Suv sovuq.)'
        ],
        quizQuestion: '친구 (do\'st) so\'ziga qaysi ega qo\'shimchasi to\'g\'ri keladi?',
        options: ['이', '가'],
        correctIndex: 1
    },
    {
        tag: 'Qoida 3',
        title: '을 / 를 — To\'ldiruvchi Qo\'shimchalari',
        desc: 'Harakat obyektini (tushum kelishigini) bildiradi. Undoshga <b>을</b>, unliga <b>를</b>.',
        examples: [
            '밥<b>을</b> 먹습니다. (Ovqat yeyapman.)',
            '커피<b>를</b> 마셔요. (Kofe ichyapman.)'
        ],
        quizQuestion: '책 (kitob) so\'ziga tushum kelishigi qo\'shing:',
        options: ['책을', '책를'],
        correctIndex: 0
    },
    {
        tag: 'Qoida 4',
        title: '입니다 / 이에요 /예요 — "...dir" Shakli',
        desc: 'Odam yoki narsa-buyumning kim/nima ekanligini rasmiy va xushmuomala aytish shakli.',
        examples: [
            '저는 우즈베키스탄 사람<b>입니다</b>. (Men o\'zbekistonlikman.)',
            '이것은 사과<b>예요</b>. (Bu olma.)'
        ]
    },
    {
        tag: 'Qoida 5',
        title: 'Koreys Tilida Gap Tuzish Tartibi (SOV)',
        desc: 'O\'zbek tili kabi koreys tilida ham fe\'l har doim gapning <b>oxirida</b> keladi. <br><b>Ega + To\'ldiruvchi + Fe\'l</b>',
        examples: [
            '저는 (Ega) + 빵을 (To\'ldiruvchi) + 먹어요 (Fe\'l). = Men non yeyapman.'
        ]
    }
];

// --- DATA: 10 TA TEST SAVOLLARI ---
const quizQuestions = [
    {
        q: "Koreys alifbosi rasman nima deb ataladi?",
        img: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&w=600&q=80",
        options: ["Kanji", "Hangul", "Hiragana", "Pinyin"],
        correct: 1,
        exp: "Koreys alifbosi 'Hangul' (한글) deb ataladi va 1446-yilda Sejong Buyuk tomonidan yaratilgan."
    },
    {
        q: "'안녕하세요' (Annyeonghaseyo) so'zining o'zbekcha tarjimasi qaysi?",
        img: "https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=600&q=80",
        options: ["Rahmat", "Xayr", "Salom", "Afsus"],
        correct: 2,
        exp: "'안녕하세요' koreys tilida eng keng tarqalgan salomlashish iborasidir."
    },
    {
        q: "Koreys tilida 'Rahmat' qanday aytiladi?",
        img: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=600&q=80",
        options: ["미안합니다", "감사합니다", "죄송합니다", "괜찮아요"],
        correct: 1,
        exp: "'감사합니다' (Gamsahamnida) rasmiy ravishda rahmat xushmuomalalik bilan aytilishidir."
    },
    {
        q: "Koreyscha '하나' (Hana) qaysi sonni bildiradi?",
        img: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=600&q=80",
        options: ["1 (Bir)", "2 (Ikki)", "3 (Uch)", "5 (Besh)"],
        correct: 0,
        exp: "Tub koreys sanoq tizimida: 1 - 하나 (Hana), 2 - 둘 (Dul), 3 - 셋 (Set)."
    },
    {
        q: "'학교' (Hakgyo) so'zining ma'nosi nima?",
        img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80",
        options: ["Shifoxona", "Maktab", "Kutubxona", "Bozor"],
        correct: 1,
        exp: "'학교' so'zi maktab yoki ta'lim muassasasini anglatadi."
    },
    {
        q: "'먹다' (Meokda) fe'li o'zbek tilida qanday tarjima qilinadi?",
        img: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=600&q=80",
        options: ["Ichmoq", "Yemoq", "Uxlamoq", "Yozmoq"],
        correct: 1,
        exp: "'먹다' - yemoq, ovqatlanmoq fe'lidir."
    },
    {
        q: "Koreys tilida 'Men' oldoshi (kamtarin/rasmiy) qaysi?",
        img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
        options: ["너 (Neo)", "저 (Jeo)", "우리 (Uri)", "그 (Geu)"],
        correct: 1,
        exp: "'저' (Jeo) kamtarin shakldagi 'Men' degan xushmuomala olmoshdir."
    },
    {
        q: "Qaysi qo'shimcha to'ldiruvchi (tushum kelishigi) qo'shimchasi hisoblanadi?",
        img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80",
        options: ["은 / 는", "이 / 가", "을 / 를", "에서"],
        correct: 2,
        exp: "To'ldiruvchi qo'shimchalari unli harfdan so'ng '를', undoshdan so'ng '을' bo'ladi."
    },
    {
        q: "'Men suv ichaman' gapining to'g'ri koreyscha tartibi qaysi?",
        img: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=600&q=80",
        options: [
            "저는 물을 마셔요.",
            "저는 마셔요 물을.",
            "물을 저는 마셔요.",
            "마셔요 저는 물을."
        ],
        correct: 0,
        exp: "Koreys tilida SOV tartibi ishlatiladi: Ega (저는) + To'ldiruvchi (물을) + Fe'l (마셔요)."
    },
    {
        q: "'주세요' (Juseyo) iborasi qanday ma'noni anglatadi?",
        img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
        options: ["Xayrli tush", "Iltimos, bering", "Qanchadan?", "Kechirasiz"],
        correct: 1,
        exp: "'...주세요' biron narsani surashda 'Iltimos, bering' iborasi hisoblanadi (masalan: 물 주세요 - Suv bering)."
    }
];

// --- TEST DAVOMIYLIK SHOTLARI ---
let currentQ = 0;
let score = 0;

// --- ILOVA ISHGA TUSHISHI ---
document.addEventListener('DOMContentLoaded', () => {
    renderHangul();
    renderVocab(vocabularyList);
    renderGrammar();
    loadQuiz();
    updateDashboard();
});

// --- MENYU VA SAHIFA ALASHTIRISH ---
function showSection(sectionId) {
    document.querySelectorAll('.page-section').forEach(sec => sec.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));

    const targetSec = document.getElementById(sectionId);
    if (targetSec) targetSec.classList.add('active');

    // Nav-item faolligi
    const activeNav = Array.from(document.querySelectorAll('.nav-item')).find(a => a.getAttribute('onclick')?.includes(sectionId));
    if (activeNav) activeNav.classList.add('active');

    // Mobil menyuni yopish
    document.getElementById('navLinks').classList.remove('show');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function navigateTo(sectionId, event) {
    event.preventDefault();
    showSection(sectionId);
}

function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('show');
}

// --- AUDIO TALAFFUZ (Text to Speech) ---
function speakKorean(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ko-KR';
        utterance.rate = 0.85;
        window.speechSynthesis.speak(utterance);
    } else {
        alert("Brauzeringizda ovozli talaffuz qo'llab-quvvatlanmaydi.");
    }
}

// --- HANGUL RENDERING ---
function renderHangul() {
    const cGrid = document.getElementById('consonantsGrid');
    const vGrid = document.getElementById('vowelsGrid');

    cGrid.innerHTML = consonants.map(c => `
        <div class="hangul-card" onclick="speakKorean('${c.char}')">
            <div class="h-char">${c.char}</div>
            <div class="h-latin">${c.latin}</div>
            <div class="h-ex">${c.ex}</div>
        </div>
    `).join('');

    vGrid.innerHTML = vowels.map(v => `
        <div class="hangul-card" onclick="speakKorean('${v.char}')">
            <div class="h-char">${v.char}</div>
            <div class="h-latin">${v.latin}</div>
            <div class="h-ex">${v.ex}</div>
        </div>
    `).join('');
}

// --- LUG'AT RENDERING VA QIDIRUV ---
function renderVocab(list) {
    const grid = document.getElementById('vocabGrid');
    if (list.length === 0) {
        grid.innerHTML = `<p class="no-data">So'z topilmadi.</p>`;
        return;
    }

    grid.innerHTML = list.map(v => `
        <div class="vocab-card">
            <div>
                <div class="v-kr">${v.kr}</div>
                <div class="v-pron">[ ${v.pron} ]</div>
                <div class="v-uz">${v.uz}</div>
                <div class="v-ex">Misol: ${v.ex}</div>
            </div>
            <button class="v-audio-btn" onclick="speakKorean('${v.kr}')" title="Ovozli eshitish">
                <i class="fa-solid fa-volume-high"></i>
            </button>
        </div>
    `).join('');
}

function filterVocab() {
    const query = document.getElementById('vocabSearch').value.toLowerCase();
    const filtered = vocabularyList.filter(v => 
        v.kr.toLowerCase().includes(query) ||
        v.pron.toLowerCase().includes(query) ||
        v.uz.toLowerCase().includes(query)
    );
    renderVocab(filtered);
}

// --- GRAMMATIKA RENDERING ---
function renderGrammar() {
    const list = document.getElementById('grammarList');
    list.innerHTML = grammarTopics.map((g, idx) => `
        <div class="grammar-card">
            <div class="g-header">
                <span class="g-tag">${g.tag}</span>
                <h3 class="g-title">${g.title}</h3>
            </div>
            <p class="g-desc">${g.desc}</p>
            <div class="g-examples">
                <strong>Misollar:</strong>
                ${g.examples.map(ex => `<div class="g-ex-item">• ${ex}</div>`).join('')}
            </div>
            ${g.quizQuestion ? `
                <div class="g-practice">
                    <div class="g-practice-title"><i class="fa-solid fa-pen-clip"></i> Kichik amaliy mashq:</div>
                    <p style="margin-bottom:0.5rem; font-size:0.95rem;">${g.quizQuestion}</p>
                    <div>
                        ${g.options.map((opt, oIdx) => `
                            <button class="g-btn-option" onclick="checkGrammarMiniQuiz(${idx}, ${oIdx}, this)">${opt}</button>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
        </div>
    `).join('');
}

function checkGrammarMiniQuiz(gIdx, optionIdx, btn) {
    const topic = grammarTopics[gIdx];
    const parent = btn.parentElement;
    const allBtns = parent.querySelectorAll('.g-btn-option');
    allBtns.forEach(b => b.style.background = 'white');

    if (optionIdx === topic.correctIndex) {
        btn.style.background = '#10B981';
        btn.style.color = 'white';
    } else {
        btn.style.background = '#DC2626';
        btn.style.color = 'white';
    }
}

// --- TEST MANTIQLARI (10 TA SAVOL) ---
function loadQuiz() {
    if (currentQ >= quizQuestions.length) {
        showQuizResults();
        return;
    }

    const q = quizQuestions[currentQ];
    
    // Progress
    document.getElementById('currentQNum').innerText = currentQ + 1;
    document.getElementById('liveScore').innerText = score;
    document.getElementById('quizProgress').style.width = `${((currentQ + 1) / quizQuestions.length) * 100}%`;

    // Visual
    const imgEl = document.getElementById('qImage');
    const fallback = document.getElementById('qFallbackIcon');
    imgEl.src = q.img;
    imgEl.onerror = () => {
        imgEl.style.display = 'none';
        fallback.style.display = 'block';
    };
    imgEl.onload = () => {
        imgEl.style.display = 'block';
        fallback.style.display = 'none';
    };

    // Text & Options
    document.getElementById('qText').innerText = q.q;
    const optionsGrid = document.getElementById('optionsGrid');
    optionsGrid.innerHTML = '';

    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `<span>${opt}</span> <i class="fa-regular fa-circle"></i>`;
        btn.onclick = () => selectOption(idx, btn);
        optionsGrid.appendChild(btn);
    });

    // Reset Box & Next Button
    document.getElementById('explanationBox').style.display = 'none';
    document.getElementById('nextBtn').disabled = true;
}

function selectOption(selectedIdx, btnEl) {
    const q = quizQuestions[currentQ];
    const allBtns = document.querySelectorAll('.option-btn');

    // Tugmalarni bloklash
    allBtns.forEach(b => b.disabled = true);

    const expBox = document.getElementById('explanationBox');
    const expText = document.getElementById('expText');
    expBox.style.display = 'block';

    if (selectedIdx === q.correct) {
        btnEl.classList.add('correct');
        btnEl.querySelector('i').className = 'fa-solid fa-circle-check';
        score += 1;
        document.getElementById('liveScore').innerText = score;
        expText.innerText = `To'g'ri! ${q.exp}`;
    } else {
        btnEl.classList.add('wrong');
        btnEl.querySelector('i').className = 'fa-solid fa-circle-xmark';
        
        // To'g'ri javobni ko'rsatish
        allBtns[q.correct].classList.add('correct');
        allBtns[q.correct].querySelector('i').className = 'fa-solid fa-circle-check';

        expText.innerText = `Noto'g'ri. ${q.exp}`;
    }

    document.getElementById('nextBtn').disabled = false;
}

function nextQuestion() {
    currentQ++;
    if (currentQ < quizQuestions.length) {
        loadQuiz();
    } else {
        showQuizResults();
    }
}

function showQuizResults() {
    document.getElementById('quizCard').classList.add('hidden');
    document.getElementById('quizResultBox').classList.remove('hidden');

    const percent = Math.round((score / quizQuestions.length) * 100);
    document.getElementById('finalScore').innerText = score;
    document.getElementById('correctCount').innerText = score;
    document.getElementById('wrongCount').innerText = quizQuestions.length - score;
    document.getElementById('percentScore').innerText = `${percent}%`;

    // Motivatsion Xabarlar va Emojilar
    let msg = "";
    let emoji = "🎉";
    if (score === 10) {
        emoji = "🏆";
        msg = "Mukammal natija! Siz koreys tili boshlang'ich darajasini a'lo darajada egallabsiz!";
    } else if (score >= 7) {
        emoji = "🌟";
        msg = "Juda yaxshi natija! Koreys tilida yaxshi poydevorga egasiz.";
    } else if (score >= 4) {
        emoji = "👍";
        msg = "Yomon emas! Yana biroz amaliyot va lug'at ustida ishlasangiz yanada yaxshilanadi.";
    } else {
        emoji = "📚";
        msg = "Hali o'rganishingiz kerak bo'lgan mavzular bor. Alifbo va lug'at bo'limini qayta ko'rib chiqing!";
    }

    document.getElementById('resEmoji').innerText = emoji;
    document.getElementById('motivationMsg').innerText = msg;

    // Natijani LocalStorage ga saqlash
    saveResultToStorage(score);
    updateDashboard();
}

function restartQuiz() {
    currentQ = 0;
    score = 0;
    document.getElementById('quizCard').classList.remove('hidden');
    document.getElementById('quizResultBox').classList.add('hidden');
    loadQuiz();
}

// --- LOCALSTORAGE VA NATIJALAR DASHBOARDI ---
function saveResultToStorage(finalScore) {
    let history = JSON.parse(localStorage.getItem('klearn_history') || '[]');
    const newRecord = {
        score: finalScore,
        date: new Date().toLocaleDateString('uz-UZ'),
        time: new Date().toLocaleTimeString('uz-UZ', { hour: '2-digit', minute: '2-digit' })
    };
    history.unshift(newRecord);
    if (history.length > 5) history.pop();

    localStorage.setItem('klearn_history', JSON.stringify(history));
}

function updateDashboard() {
    const history = JSON.parse(localStorage.getItem('klearn_history') || '[]');
    
    if (history.length === 0) return;

    const totalAttempts = history.length;
    const bestScore = Math.max(...history.map(h => h.score));
    const lastScore = history[0].score;

    document.getElementById('dashBestScore').innerText = `${bestScore} / 10`;
    document.getElementById('dashTotalAttempts').innerText = totalAttempts;
    document.getElementById('dashLastScore').innerText = `${lastScore} / 10`;

    const historyList = document.getElementById('historyList');
    historyList.innerHTML = history.map(item => `
        <div class="history-item">
            <span><i class="fa-regular fa-calendar"></i> ${item.date} (${item.time})</span>
            <strong>${item.score} / 10 ball</strong>
        </div>
    `).join('');
}