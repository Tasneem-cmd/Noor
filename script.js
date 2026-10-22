(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const stages = [...document.querySelectorAll('.stage')];
  const dots = [...document.querySelectorAll('#dots i')];
  let cur = 0;
  function go(n) {
    stages[cur].classList.remove('active'); cur = n; stages[cur].classList.add('active');
    dots.forEach((d, i) => d.classList.toggle('on', i === cur));
    if (cur === 4) burst(60);
  }
  document.querySelectorAll('.btn.next').forEach(b => b.addEventListener('click', () => go(cur + 1)));
  go(0);

  // canvases
  const sky = document.getElementById('sky'), fx = document.getElementById('fx');
  const sc = sky.getContext('2d'), fc = fx.getContext('2d');
  let W, H, stars = [], bits = [];
  function size() {
    W = innerWidth; H = innerHeight;
    [sky, fx].forEach(c => { c.width = W; c.height = H; });
    stars = Array.from({ length: Math.min(70, W / 6) }, () => ({
      x: Math.random() * W, y: Math.random() * H, r: Math.random() * 1.4 + .3, s: Math.random() * .25 + .05,
      p: Math.random() * 6, c: Math.random() < .25 ? '#FF3CAC' : '#F8F7FF' }));
  }
  addEventListener('resize', size); size();
  function burst(n) {
    if (reduce) return;
    for (let i = 0; i < n; i++) bits.push({ x: W / 2, y: H * .45, vx: (Math.random() - .5) * 9, vy: -Math.random() * 10 - 2,
      s: Math.random() * 6 + 3, c: ['#8B5CF6', '#FF3CAC', '#F8F7FF'][i % 3], l: 110 });
  }
  function frame(t) {
    sc.clearRect(0, 0, W, H);
    stars.forEach(s => {
      if (!reduce) { s.y -= s.s; if (s.y < 0) s.y = H; }
      sc.globalAlpha = .35 + .35 * Math.sin(t / 900 + s.p);
      sc.fillStyle = s.c; sc.beginPath(); sc.arc(s.x, s.y, s.r, 0, 7); sc.fill();
    });
    fc.clearRect(0, 0, W, H);
    bits = bits.filter(b => b.l-- > 0);
    bits.forEach(b => {
      b.x += b.vx; b.y += b.vy; b.vy += .25; b.vx *= .99;
      fc.globalAlpha = Math.min(1, b.l / 40); fc.fillStyle = b.c; fc.fillRect(b.x, b.y, b.s, b.s * .6);
    });
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  // cake
  const cake = document.getElementById('cake');
  cake.addEventListener('click', () => {
    if (cake.classList.contains('out')) return;
    cake.classList.add('out'); burst(80);
    document.getElementById('cakeMsg').innerHTML = 'Wish locked in. 😌<br>No refunds on wishes.';
    document.getElementById('cakeNext').hidden = false;
  });

  // gift
  const gift = document.getElementById('gift');
  const lines = ['19 October came and went… birthday wishes received, gift still missing. 😂🎁',
    "Anyway, today's your day. I'll let you enjoy it first. 😌", "But I haven't forgotten, Aunty. 😂"];
  gift.addEventListener('click', () => {
    if (gift.classList.contains('open')) return;
    gift.classList.add('open'); burst(40);
    document.getElementById('giftHint').hidden = true;
    lines.forEach((l, i) => {
      const el = document.getElementById('g' + (i + 1)); el.textContent = l;
      setTimeout(() => el.classList.add('show'), 700 + i * 1700);
    });
    setTimeout(() => { document.getElementById('giftNext').hidden = false; }, 700 + 2 * 1700 + 600);
  });

  document.getElementById('party').addEventListener('click', () => { burst(120); });
})();
