const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

let lang = localStorage.getItem('greenLang') || 'zh';
let chosen = '—';

const I18N = {
  zh: {
    heroEyebrow: 'A PERSONAL COLOR ARCHIVE / 个人绿色档案',
    heroTitle: 'HOW DO<br><em>YOU</em> SEE<br>GREEN?',
    heroSub: '我亲手拍下的绿色，不只是一种颜色。<br>它是一种观看、记忆和生活的方式。',
    enterBtn: 'ENTER / 进入',

    observeH2: '先不要定义它。<br><em>Just look.</em>',
    observeQ: '你在生活中什么时候<br>第一次注意到绿色？',
    observeHint: '移动你的鼠标 / MOVE YOUR CURSOR',
    lookLabel: 'LOOK / 看',
    observeFootL: '01 / 竹林',
    observeFootR: '靠近看，画面会自己打开。',

    defineH2: '你觉得绿色是<br><em>哪一种感觉？</em>',
    moodSoft: '柔软',
    moodSoftI: '像雨后的叶子',
    moodWild: '野',
    moodWildI: '没有被整理过的绿色',
    moodQuiet: '安静',
    moodQuietI: '一个人站在树之间',
    moodHeavy: '沉',
    moodHeavyI: '潮湿、深、靠近黑色',
    modeLabel: '选择一种感觉 / CHOOSE A FEELING',

    pickH2: '先别带走颜色。<br><em>先问问自己。</em>',
    pickLead: '绿色不会自己跳出来认领你。回答几个很短的问题，一种绿色会慢慢靠近。',
    resultKicker: '一种绿色找到了你 / A GREEN FOUND YOU',
    keepGreen: '留下这种绿色',
    retryQuiz: '再测一次',
    yourGreenLabel: 'YOUR GREEN / 你的绿色',

    talkH2: '现在轮到你了。<br><em>Tell me your green.</em>',
    talkQ: '如果绿色是一种记忆，<br>你的绿色会是什么？',
    talkQEn: 'If green were a memory, what would yours be?',
    leaveMemory: '留下一句记忆 →',
    wallTitle: '别人的绿色 / OTHER PEOPLE\'S GREEN',

    archiveH2: '7 photographs.<br>One color.<br>Many ways of seeing.',
    credit: 'ALL PHOTOGRAPHS / PERSONAL ARCHIVE<br>所有照片均由我亲自拍摄',
    footerMid: 'MADE FROM THINGS I NOTICED.',
    placeholder: '写下一句话……',
    yourMemory: '你的绿色',
    kept: '已留下'
  },

  en: {
    heroEyebrow: 'A PERSONAL COLOR ARCHIVE',
    heroTitle: 'HOW DO<br><em>YOU</em> SEE<br>GREEN?',
    heroSub: 'The green I photographed is not just a color.<br>It is a way of looking, remembering, and living.',
    enterBtn: 'ENTER',

    observeH2: 'Don\'t name it yet.<br><em>Just look.</em>',
    observeQ: 'When did you first<br>notice green in your life?',
    observeHint: 'MOVE YOUR CURSOR',
    lookLabel: 'LOOK',
    observeFootL: '01 / BAMBOO',
    observeFootR: 'THE IMAGE OPENS WHEN YOU LOOK CLOSER.',

    defineH2: 'What kind of feeling<br><em>is green to you?</em>',
    moodSoft: 'soft',
    moodSoftI: 'like leaves after rain',
    moodWild: 'wild',
    moodWildI: 'green that has not been arranged',
    moodQuiet: 'quiet',
    moodQuietI: 'standing alone between trees',
    moodHeavy: 'heavy',
    moodHeavyI: 'damp, deep, almost black',
    modeLabel: 'CHOOSE A FEELING',

    pickH2: 'Don\'t take a color yet.<br><em>Ask yourself first.</em>',
    pickLead: 'Green will not claim you on its own. Answer a few short questions, and a green will come closer.',
    resultKicker: 'A GREEN FOUND YOU',
    keepGreen: 'KEEP THIS GREEN',
    retryQuiz: 'TRY AGAIN',
    yourGreenLabel: 'YOUR GREEN',

    talkH2: 'Now it is your turn.<br><em>Tell me your green.</em>',
    talkQ: 'If green were a memory,<br>what would yours be?',
    talkQEn: 'Write one sentence. Leave it on the wall.',
    leaveMemory: 'LEAVE A MEMORY →',
    wallTitle: 'OTHER PEOPLE\'S GREEN',

    archiveH2: '7 photographs.<br>One color.<br>Many ways of seeing.',
    credit: 'ALL PHOTOGRAPHS / PERSONAL ARCHIVE<br>shot by me',
    footerMid: 'MADE FROM THINGS I NOTICED.',
    placeholder: 'Write one sentence...',
    yourMemory: 'YOUR GREEN',
    kept: 'KEPT'
  }
};


const modeText = {
  zh: {
    soft: 'SOFT / 柔软 — 像雨后的叶子',
    wild: 'WILD / 野 — 没有被整理过的绿色',
    quiet: 'QUIET / 安静 — 一个人站在树之间',
    heavy: 'HEAVY / 沉 — 潮湿、深、靠近黑色'
  },

  en: {
    soft: 'SOFT — like leaves after rain',
    wild: 'WILD — green that has not been arranged',
    quiet: 'QUIET — standing alone between trees',
    heavy: 'HEAVY — damp, deep, almost black'
  }
};


/* =====================================================
   GREEN RESULTS
   注意：
   你的图片和 index.html 在同一个根目录，
   所以这里不能写 images/
===================================================== */

const GREENS = {

  mist: {
    hex: '#7A9480',
    img: 'green_quiz_bamboo.jpg',
    zh: {
      name: '竹雾',
      meaning: '今天的你需要一点被风穿过的空间。这种绿不鲜亮，它停在竹林里，像还没说完的话。'
    },
    en: {
      name: 'BAMBOO MIST',
      meaning: 'You need a little space for the wind to pass through. This green is not bright. It waits in the bamboo, like a sentence not finished.'
    }
  },

  water: {
    hex: '#6B8A52',
    img: 'green_quiz_lake.jpg',
    zh: {
      name: '莲水',
      meaning: '你想把速度放下来。这种绿贴着湖面，远看是山，近看是叶子，适合不想被催促的一天。'
    },
    en: {
      name: 'LOTUS WATER',
      meaning: 'You want to slow down. This green sits on the lake — mountain from afar, leaf up close. It belongs to a day that refuses to be rushed.'
    }
  },

  window: {
    hex: '#536B45',
    img: 'green_quiz_window.jpg',
    zh: {
      name: '漏窗',
      meaning: '你没有把所有心情摊开。这种绿隔着一扇窗看过去，近，但有一层白墙。秘密也可以是温柔的。'
    },
    en: {
      name: 'LEAKY WINDOW',
      meaning: 'You are not showing everything. This green is seen through a window: close, but with a white wall between. A secret can still be gentle.'
    }
  },

  bloom: {
    hex: '#8EAE86',
    img: 'green_quiz_hydrangea.jpg',
    zh: {
      name: '绣球',
      meaning: '你更想被柔软的东西接住。这种绿围着花，围着一小圈竹篱，像把今天轻轻放下。'
    },
    en: {
      name: 'HYDRANGEA',
      meaning: 'You want to be met by something soft. This green gathers around flowers and a small bamboo fence, as if setting the day down.'
    }
  },

  deep: {
    hex: '#3A4A32',
    img: 'green_quiz_courtyard.jpg',
    zh: {
      name: '月洞',
      meaning: '你想走进更深一点的地方。这种绿靠近阴影，像院子尽头的门洞，让人把脚步放轻。'
    },
    en: {
      name: 'MOON GATE',
      meaning: 'You want to go a little deeper. This green leans into shadow, like a gate at the end of a courtyard that asks you to walk softly.'
    }
  },

  shade: {
    hex: '#5A6F48',
    img: 'green_quiz_garden.jpg',
    zh: {
      name: '花荫',
      meaning: '你需要一点陪伴，但不必热闹。这种绿停在亭子下面，花在旁边开着，人可以只是站一会儿。'
    },
    en: {
      name: 'GARDEN SHADE',
      meaning: 'You need company, but not noise. This green waits under a pavilion. Flowers stay nearby. You can simply stand.'
    }
  }
};


/* =====================================================
   QUIZ
===================================================== */

const QUESTIONS = [

  {
    zh: '此刻你的心情更接近哪一种？',
    en: 'Which mood is closest to you right now?',
    options: [
      { zh: '平静得像湖面', en: 'Calm, like a lake', key: 'water' },
      { zh: '有一点乱，想被风穿过', en: 'A little messy, wanting wind', key: 'mist' },
      { zh: '想慢慢走，不想被催', en: 'Wanting to walk slowly', key: 'bloom' },
      { zh: '想躲进阴影里待一会儿', en: 'Wanting to hide in shade', key: 'deep' }
    ]
  },

  {
    zh: '如果绿色会发出声音，它更像？',
    en: 'If green made a sound, it would be…',
    options: [
      { zh: '雨打在叶子上', en: 'Rain on leaves', key: 'mist' },
      { zh: '几乎没有声音的水面', en: 'Water with almost no sound', key: 'water' },
      { zh: '远处有人轻轻说话', en: 'Someone talking far away', key: 'shade' },
      { zh: '漏窗里漏进来的风', en: 'Wind through a garden window', key: 'window' }
    ]
  },

  {
    zh: '你更想靠近哪一种绿？',
    en: 'Which green do you want to stand closer to?',
    options: [
      { zh: '近处的叶子和花', en: 'Leaves and flowers nearby', key: 'bloom' },
      { zh: '远处的山和湖', en: 'Hills and lake in the distance', key: 'water' },
      { zh: '从墙边长出来的藤', en: 'Vines growing from a wall', key: 'window' },
      { zh: '竹林深处几乎发灰的绿', en: 'Grey-green deep in bamboo', key: 'mist' }
    ]
  },

  {
    zh: '今天你需要绿色给你什么？',
    en: 'What do you need green to give you today?',
    options: [
      { zh: '休息', en: 'Rest', key: 'bloom' },
      { zh: '清醒', en: 'Clarity', key: 'water' },
      { zh: '陪伴', en: 'Company', key: 'shade' },
      { zh: '一个暂时不必说的秘密', en: 'A secret you need not tell yet', key: 'window' }
    ]
  }

];


const SAMPLE_MEMORIES = [
  {
    text: '雨停之后，路边那一小片叶子。',
    date: '09.18',
    color: '#7A9480',
    sample: true
  },
  {
    text: 'The quiet between two trees.',
    date: '09.22',
    color: '#3A4A32',
    sample: true
  },
  {
    text: '湖对面那一层几乎看不清的山。',
    date: '09.28',
    color: '#6B8A52',
    sample: true
  },
  {
    text: 'A window, and green on the other side.',
    date: '10.01',
    color: '#536B45',
    sample: true
  }
];


function t(key) {
  return I18N[lang][key];
}


/* =====================================================
   LANGUAGE
===================================================== */

function applyI18n() {

  document.documentElement.lang =
    lang === 'en' ? 'en' : 'zh-CN';

  document.body.classList.toggle(
    'english',
    lang === 'en'
  );

  const langBtn = $('#langBtn');

  if (langBtn) {
    langBtn.textContent =
      lang === 'en' ? 'EN / 中文' : '中文 / EN';
  }

  $$('[data-i18n]').forEach(el => {

    const value = t(el.dataset.i18n);

    if (el.dataset.i18nHtml === '1') {
      el.innerHTML = value;
    } else {
      el.textContent = value;
    }

  });

  const answer = $('#greenAnswer');

  if (answer) {
    answer.placeholder = t('placeholder');
  }

  const activeMood = $('.mood.active');

  if (activeMood) {

    $('#modeLabel').textContent =
      modeText[lang][activeMood.dataset.mode];

  } else {

    $('#modeLabel').textContent =
      t('modeLabel');

  }

  if ($('#quizResult') && !$('#quizResult').hidden) {
    renderResultCopy();
  } else {
    renderQuestion();
  }
}


if ($('#langBtn')) {

  $('#langBtn').addEventListener('click', () => {

    lang = lang === 'zh' ? 'en' : 'zh';

    localStorage.setItem(
      'greenLang',
      lang
    );

    applyI18n();

  });

}


/* =====================================================
   TIMER
===================================================== */

let seconds = 0;

if ($('#timer')) {

  setInterval(() => {

    seconds++;

    const h =
      String(Math.floor(seconds / 3600))
      .padStart(2, '0');

    const m =
      String(Math.floor(seconds % 3600 / 60))
      .padStart(2, '0');

    const s =
      String(seconds % 60)
      .padStart(2, '0');

    $('#timer').textContent =
      `${h}:${m}:${s}`;

  }, 1000);

}


/* =====================================================
   CURSOR
===================================================== */

document.addEventListener('mousemove', e => {

  const dot = $('.cursor-dot');

  if (!dot) return;

  dot.style.left =
    e.clientX + 'px';

  dot.style.top =
    e.clientY + 'px';

});


/* =====================================================
   SCROLL
===================================================== */

$$('[data-scroll]').forEach(btn => {

  btn.addEventListener('click', () => {

    const target =
      $(btn.dataset.scroll);

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }

  });

});


$$('.topbar nav a').forEach(a => {

  a.addEventListener('click', e => {

    e.preventDefault();

    const target =
      document.querySelector(
        a.getAttribute('href')
      );

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }

  });

});


/* =====================================================
   01 / OBSERVE — MAGNIFIER
===================================================== */

const mw = $('.magnify-wrap');
const mag = $('#magnifier');
const obsImg = $('#observeImage');

if (mw && mag && obsImg) {

  mw.addEventListener('mousemove', e => {

    const r =
      mw.getBoundingClientRect();

    const x =
      e.clientX - r.left;

    const y =
      e.clientY - r.top;

    const px =
      (x / r.width) * 100;

    const py =
      (y / r.height) * 100;

    mag.style.left =
      x + 'px';

    mag.style.top =
      y + 'px';

    mag.style.backgroundImage =
      `url("${obsImg.src}")`;

    mag.style.backgroundPosition =
      `${px}% ${py}%`;

  });

  mw.addEventListener(
    'mouseleave',
    () => mag.style.display = 'none'
  );

  mw.addEventListener(
    'mouseenter',
    () => mag.style.display = 'flex'
  );

}


/* =====================================================
   02 / DEFINE
===================================================== */

$$('.mood').forEach(btn => {

  btn.addEventListener('click', () => {

    const mode =
      btn.dataset.mode;

    document.body.classList.remove(
      'mode-soft',
      'mode-wild',
      'mode-quiet',
      'mode-heavy'
    );

    document.body.classList.add(
      'mode-' + mode
    );

    $$('.mood').forEach(
      x => x.classList.remove('active')
    );

    btn.classList.add('active');

    $('#modeLabel').textContent =
      modeText[lang][mode];

  });

});


/* =====================================================
   03 / PICK
===================================================== */

let quizIndex = 0;
const votes = [];
let foundGreen = null;


function renderQuestion() {

  const q =
    QUESTIONS[quizIndex];

  if (!q) return;

  $('#quizStep').textContent =
    `${String(quizIndex + 1).padStart(2, '0')} / 0${QUESTIONS.length}`;

  $('#quizBar').style.width =
    `${((quizIndex) / QUESTIONS.length) * 100}%`;

  $('#quizQuestion').textContent =
    q[lang];

  const box =
    $('#quizOptions');

  box.innerHTML = '';

  q.options.forEach((opt, i) => {

    const b =
      document.createElement('button');

    b.type = 'button';

    b.className =
      'quiz-opt';

    b.innerHTML =
      `<b>${String(i + 1).padStart(2, '0')}</b>
       <span>${opt[lang]}</span>`;

    b.addEventListener(
      'click',
      () => chooseOption(opt.key)
    );

    box.appendChild(b);

  });

}


function chooseOption(key) {

  votes.push(key);

  if (
    quizIndex <
    QUESTIONS.length - 1
  ) {

    quizIndex++;

    renderQuestion();

    return;

  }

  const tally = {};

  votes.forEach(k => {

    tally[k] =
      (tally[k] || 0) + 1;

  });

  const winner =
    Object.keys(tally)
      .sort(
        (a, b) =>
          tally[b] - tally[a] ||
          GREENS[a].hex.localeCompare(
            GREENS[b].hex
          )
      )[0];

  foundGreen =
    GREENS[winner];

  showResult();

}


function renderResultCopy() {

  if (!foundGreen) return;

  const copy =
    foundGreen[lang];

  $('#resultName').textContent =
    copy.name;

  $('#resultHex').textContent =
    foundGreen.hex;

  $('#resultMeaning').textContent =
    copy.meaning;

}


function showResult() {

  $('#quizPanel').hidden = true;

  $('#quizResult').hidden = false;

  $('#resultPhoto').src =
    foundGreen.img;

  $('#resultSwatch').style.background =
    foundGreen.hex;

  $('#quizBar').style.width =
    '100%';

  renderResultCopy();

}


function resetQuiz() {

  quizIndex = 0;

  votes.length = 0;

  foundGreen = null;

  $('#quizPanel').hidden = false;

  $('#quizResult').hidden = true;

  renderQuestion();

}


if ($('#keepColor')) {

  $('#keepColor').addEventListener(
    'click',
    () => {

      if (!foundGreen) return;

      chosen =
        foundGreen.hex;

      $('#pickedHex').textContent =
        chosen;

      document.documentElement
        .style
        .setProperty(
          '--accent',
          chosen
        );

      $('#keepColor').textContent =
        t('kept');

      $('#pickedResult').animate(
        [
          {
            transform: 'scale(.98)'
          },
          {
            transform: 'scale(1)'
          }
        ],
        {
          duration: 350
        }
      );

    }
  );

}


if ($('#retryQuiz')) {

  $('#retryQuiz').addEventListener(
    'click',
    () => {

      $('#keepColor').textContent =
        t('keepGreen');

      resetQuiz();

    }
  );

}


/* =====================================================
   04 / TALK
===================================================== */

const ta =
  $('#greenAnswer');

const count =
  $('#charCount');

if (ta && count) {

  ta.addEventListener(
    'input',
    () => {

      if (ta.value.length > 120) {
        ta.value =
          ta.value.slice(0, 120);
      }

      count.textContent =
        `${ta.value.length} / 120`;

    }
  );

}


const wall =
  $('#memoryWall');


function renderWall() {

  if (!wall) return;

  const arr =
    JSON.parse(
      localStorage.getItem(
        'greenMemories'
      ) || '[]'
    );

  const all =
    [...SAMPLE_MEMORIES, ...arr]
      .slice(-12)
      .reverse();

  wall.innerHTML = '';

  all.forEach(item => {

    const card =
      document.createElement('div');

    card.className =
      'wall-card';

    card.style.borderTop =
      `3px solid ${item.color || '#536B45'}`;

    card.innerHTML =
      `<p>${escapeHtml(item.text)}</p>
       <span>${item.date} · ${item.color || ''}</span>`;

    wall.appendChild(card);

  });

}


function escapeHtml(s) {

  return s.replace(
    /[&<>"']/g,
    c =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
      }[c])
  );

}


if ($('#submitAnswer')) {

  $('#submitAnswer').addEventListener(
    'click',
    () => {

      const text =
        ta.value.trim();

      if (!text) {

        ta.focus();

        return;

      }

      const arr =
        JSON.parse(
          localStorage.getItem(
            'greenMemories'
          ) || '[]'
        );

      const color =
        $('#pickedHex').textContent === '—'
          ? '#536B45'
          : $('#pickedHex').textContent;

      const item = {
        text,
        date:
          new Date().toLocaleDateString(),
        color
      };

      arr.push(item);

      localStorage.setItem(
        'greenMemories',
        JSON.stringify(
          arr.slice(-20)
        )
      );

      $('#answerDisplay').style.display =
        'block';

      $('#answerDisplay').textContent =
        `“ ${text} ”  —  ${t('yourMemory')}`;

      ta.value = '';

      count.textContent =
        '0 / 120';

      renderWall();

    }
  );

}


/* =====================================================
   05 / TRACE
===================================================== */

const traceBoard =
  document.getElementById(
    'traceBoard'
  );

const traceCanvas =
  document.getElementById(
    'traceCanvas'
  );

const clearTrace =
  document.getElementById(
    'clearTrace'
  );


if (
  traceBoard &&
  traceCanvas
) {

  const traceCtx =
    traceCanvas.getContext('2d');

  let drawing = false;
  let lastPoint = null;


  function resizeTraceCanvas() {

    const rect =
      traceBoard.getBoundingClientRect();

    const dpr =
      Math.min(
        window.devicePixelRatio || 1,
        2
      );

    traceCanvas.width =
      rect.width * dpr;

    traceCanvas.height =
      rect.height * dpr;

    traceCanvas.style.width =
      rect.width + 'px';

    traceCanvas.style.height =
      rect.height + 'px';

    traceCtx.setTransform(
      dpr,
      0,
      0,
      dpr,
      0,
      0
    );

    traceCtx.lineCap =
      'round';

    traceCtx.lineJoin =
      'round';

  }


  resizeTraceCanvas();

  window.addEventListener(
    'resize',
    resizeTraceCanvas
  );


  function getTracePoint(e) {

    const rect =
      traceBoard.getBoundingClientRect();

    return {
      x:
        e.clientX - rect.left,
      y:
        e.clientY - rect.top
    };

  }


  traceBoard.addEventListener(
    'pointerdown',
    e => {

      drawing = true;

      lastPoint =
        getTracePoint(e);

      traceBoard.setPointerCapture(
        e.pointerId
      );

    }
  );


  traceBoard.addEventListener(
    'pointermove',
    e => {

      if (!drawing) return;

      const point =
        getTracePoint(e);

      if (!lastPoint) {

        lastPoint =
          point;

        return;

      }


      const chosenGreen =
        getComputedStyle(
          document.documentElement
        )
        .getPropertyValue(
          '--accent'
        )
        .trim() ||
        '#b9d38a';


      /* 细线 */

      traceCtx.globalAlpha =
        .9;

      traceCtx.strokeStyle =
        chosenGreen;

      traceCtx.lineWidth =
        1.5;

      traceCtx.beginPath();

      traceCtx.moveTo(
        lastPoint.x,
        lastPoint.y
      );

      traceCtx.lineTo(
        point.x,
        point.y
      );

      traceCtx.stroke();


      /* 光晕 */

      traceCtx.globalAlpha =
        .12;

      traceCtx.lineWidth =
        18;

      traceCtx.beginPath();

      traceCtx.moveTo(
        lastPoint.x,
        lastPoint.y
      );

      traceCtx.lineTo(
        point.x,
        point.y
      );

      traceCtx.stroke();


      lastPoint =
        point;

    }
  );


  traceBoard.addEventListener(
    'pointerup',
    () => {

      drawing = false;

      lastPoint = null;

    }
  );


  traceBoard.addEventListener(
    'pointerleave',
    () => {

      if (!drawing) {
        lastPoint = null;
      }

    }
  );


  if (clearTrace) {

    clearTrace.addEventListener(
      'click',
      () => {

        traceCtx.clearRect(
          0,
          0,
          traceCanvas.clientWidth,
          traceCanvas.clientHeight
        );

      }
    );

  }

}


/* =====================================================
   06 / AFTERIMAGE
===================================================== */

const afterimage =
  document.getElementById(
    'afterimage'
  );

const growField =
  document.getElementById(
    'growField'
  );

const growBtn =
  document.getElementById(
    'growBtn'
  );


if (
  afterimage &&
  growField &&
  growBtn
) {


  function createSeed(
    x,
    y,
    delay = 0
  ) {

    const seed =
      document.createElement(
        'span'
      );

    seed.className =
      'seed';

    seed.style.left =
      x + 'px';

    seed.style.top =
      y + 'px';

    seed.style.animationDelay =
      delay + 'ms';

    growField.appendChild(
      seed
    );

    setTimeout(
      () => {
        seed.remove();
      },
      2200 + delay
    );

  }


  afterimage.addEventListener(
    'pointermove',
    e => {

      if (
        Math.random() > .72
      ) {

        const rect =
          afterimage.getBoundingClientRect();

        createSeed(
          e.clientX - rect.left,
          e.clientY - rect.top
        );

      }

    }
  );


  growBtn.addEventListener(
    'click',
    () => {

      const rect =
        afterimage.getBoundingClientRect();

      for (
        let i = 0;
        i < 30;
        i++
      ) {

        createSeed(
          Math.random() *
            rect.width,

          Math.random() *
            rect.height,

          i * 35
        );

      }

    }
  );

}


/* =====================================================
   START
===================================================== */

applyI18n();
renderQuestion();
renderWall();
