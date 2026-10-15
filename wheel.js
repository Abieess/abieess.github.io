(function () {
  "use strict";

  /* ---------- setup ---------- */
  const $ = (id) => document.getElementById(id);
  const cv = $("wheel"), ctx = cv.getContext("2d");
  const TAU = Math.PI * 2;
  const POINTER = 1.5 * Math.PI;            // the pin sits at the top (12 o'clock)
  const MAX_NAMES = 60;
  const KEY = "wheel-names-v1";
  // vintage slice colours: navy, mustard, olive, oxblood, teal, brown
  const COLORS = ["#1f3a5f", "#9a6a14", "#3f5d3a", "#7a2b2b", "#2f6a6a", "#6f4a2a"];
  const SAMPLE = ["Anbu", "Bala", "Catherine", "Dinesh", "Elango", "Fathima"];

  let names = [];          // the names on the wheel
  let rot = 0;             // current rotation of the wheel (radians)
  let spinning = false;
  let bulbs = 0;           // flips each tick so the rim lights "chase"
  let audio = null;

  const reduceMotion = () =>
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- helpers ---------- */
  function rand(n) {                         // fair random whole number 0..n-1
    if (window.crypto && crypto.getRandomValues) {
      return Math.floor((crypto.getRandomValues(new Uint32Array(1))[0] / 4294967296) * n);
    }
    return Math.floor(Math.random() * n);
  }
  function sliceColor(i, n) {
    let c = i % COLORS.length;
    if (n > 1 && i === n - 1 && c === 0) c = 3;   // last slice must differ from the first
    return COLORS[c];
  }
  function readNames() {
    return $("names").value.split("\n").map((s) => s.trim()).filter(Boolean);
  }
  function pointerIndex() {                  // which slice is under the pin right now
    const n = names.length; if (!n) return -1;
    const a = (((POINTER - rot) % TAU) + TAU) % TAU;
    return Math.min(n - 1, Math.floor(a / (TAU / n)));
  }

  /* ---------- drawing ---------- */
  function fitText(text, maxW) {
    if (ctx.measureText(text).width <= maxW) return text;
    while (text.length > 1 && ctx.measureText(text + "\u2026").width > maxW) text = text.slice(0, -1);
    return text + "\u2026";
  }

  function draw() {
    const size = cv.clientWidth || 600, dpr = window.devicePixelRatio || 1;
    const px = Math.round(size * dpr);
    if (cv.width !== px) { cv.width = px; cv.height = px; }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, size, size);

    const c = size / 2, R = c - 3, rim = size * 0.055, r = R - rim;

    // brass rim
    const g = ctx.createLinearGradient(0, 0, size, size);
    g.addColorStop(0, "#d9b25c"); g.addColorStop(0.5, "#8c6620"); g.addColorStop(1, "#d9b25c");
    ctx.beginPath(); ctx.arc(c, c, R, 0, TAU); ctx.fillStyle = g; ctx.fill();
    ctx.lineWidth = 2; ctx.strokeStyle = "#2a2018"; ctx.stroke();

    // rim lights
    const nb = 28;
    for (let k = 0; k < nb; k++) {
      const a = (k / nb) * TAU, x = c + Math.cos(a) * (R - rim / 2), y = c + Math.sin(a) * (R - rim / 2);
      ctx.beginPath(); ctx.arc(x, y, rim * 0.25, 0, TAU);
      ctx.fillStyle = (k + bulbs) % 2 ? "#fff3c4" : "#a98a45"; ctx.fill();
    }

    // slices
    const n = names.length;
    if (n === 0) {
      ctx.beginPath(); ctx.arc(c, c, r, 0, TAU); ctx.fillStyle = "#d3bf90"; ctx.fill();
      ctx.fillStyle = "#6f5d45"; ctx.textAlign = "center"; ctx.textBaseline = "middle";
      ctx.font = `italic ${size * 0.05}px "IM Fell English", serif`;
      ctx.fillText("Add some names", c, c - size * 0.12);
    } else {
      const seg = TAU / n;
      for (let i = 0; i < n; i++) {
        ctx.beginPath(); ctx.moveTo(c, c);
        ctx.arc(c, c, r, rot + i * seg, rot + (i + 1) * seg);
        ctx.closePath(); ctx.fillStyle = sliceColor(i, n); ctx.fill();
        ctx.lineWidth = 2; ctx.strokeStyle = "#f6ecd2"; ctx.stroke();

        // label, written along the radius
        ctx.save(); ctx.translate(c, c); ctx.rotate(rot + (i + 0.5) * seg);
        ctx.textAlign = "right"; ctx.textBaseline = "middle"; ctx.fillStyle = "#f6ecd2";
        let fs = Math.max(10, Math.min(r * 0.12, r * 0.7 * seg * 0.62));
        ctx.font = `${fs}px "IM Fell English","Noto Serif Tamil",serif`;
        ctx.fillText(fitText(names[i], r * 0.66), r - size * 0.035, 0);
        ctx.restore();
      }
    }

    // inner ring and hub
    ctx.beginPath(); ctx.arc(c, c, r, 0, TAU); ctx.lineWidth = 3; ctx.strokeStyle = "#2a2018"; ctx.stroke();
    const hr = r * 0.14, hg = ctx.createRadialGradient(c - hr * 0.3, c - hr * 0.3, hr * 0.1, c, c, hr);
    hg.addColorStop(0, "#f0d58a"); hg.addColorStop(1, "#8c6620");
    ctx.beginPath(); ctx.arc(c, c, hr, 0, TAU); ctx.fillStyle = hg; ctx.fill();
    ctx.lineWidth = 2.5; ctx.strokeStyle = "#2a2018"; ctx.stroke();
    ctx.fillStyle = "#2a2018"; ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.font = `${hr * 0.5}px "Special Elite", monospace`;
    ctx.fillText("SPIN", c, c + 1);
  }

  /* ---------- sound ---------- */
  function beep(freq, dur, vol) {
    if (!$("sound").checked || !audio) return;
    try {
      const o = audio.createOscillator(), g = audio.createGain(), t = audio.currentTime;
      o.type = "square"; o.frequency.value = freq;
      g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(g); g.connect(audio.destination); o.start(t); o.stop(t + dur + 0.01);
    } catch (e) { /* sound is optional */ }
  }
  function tick() {
    bulbs++;
    const pin = $("pin"); pin.classList.add("flick");
    setTimeout(() => pin.classList.remove("flick"), 70);
    beep(820, 0.035, 0.05);
  }

  /* ---------- spinning ---------- */
  function setBusy(b) {
    spinning = b;
    ["spin", "shuffle", "clear", "names", "remove"].forEach((id) => ($(id).disabled = b));
  }

  function spin() {
    if (spinning) return;
    if (names.length < 2) { showMessage("Add at least two names to spin the wheel."); return; }
    if (!audio) {
      try { audio = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { audio = null; }
    }
    if (audio && audio.state === "suspended") audio.resume();

    const n = names.length, seg = TAU / n;
    const win = rand(n);                                    // the winner is chosen first, fairly
    const inside = 0.15 + Math.random() * 0.7;              // land somewhere inside that slice
    const target = POINTER - (win + inside) * seg;
    const extra = (((target - rot) % TAU) + TAU) % TAU;
    const from = rot, to = rot + extra + (5 + rand(4)) * TAU;
    const dur = reduceMotion() ? 1200 : 4500 + Math.random() * 2500;
    const t0 = performance.now();
    let last = pointerIndex();
    setBusy(true); $("result").hidden = true;

    function frame(now) {
      const t = Math.min(1, (now - t0) / dur);
      rot = from + (to - from) * (1 - Math.pow(1 - t, 4));  // fast start, slow finish
      const idx = pointerIndex();
      if (idx !== last) { last = idx; tick(); }
      draw();
      if (t < 1) requestAnimationFrame(frame);
      else { rot = ((rot % TAU) + TAU) % TAU; draw(); finish(win); }
    }
    requestAnimationFrame(frame);
  }

  /* ---------- result and history ---------- */
  function showMessage(text) {
    const res = $("result"); res.className = "result"; res.textContent = text; res.hidden = false;
  }
  function showResult(name) {
    const res = $("result");
    res.className = "result"; res.textContent = "";
    const l = document.createElement("span"); l.className = "lbl"; l.textContent = "The wheel has chosen";
    const w = document.createElement("span"); w.className = "win"; w.textContent = name;
    res.append(l, w); res.hidden = false;
    void res.offsetWidth; res.classList.add("pop");
  }
  function addHistory(name) {
    const li = document.createElement("li"); li.textContent = name;
    $("history").prepend(li);
  }
  function finish(win) {
    const name = names[win];
    showResult(name); addHistory(name);
    beep(660, 0.12, 0.06); setTimeout(() => beep(990, 0.2, 0.06), 130);
    setBusy(false);
    if ($("remove").checked) {
      names.splice(win, 1);
      $("names").value = names.join("\n");
      onNames();
    }
  }

  /* ---------- names list ---------- */
  function save() { try { localStorage.setItem(KEY, JSON.stringify($("names").value)); } catch (e) { /* ignore */ } }
  function onNames() {
    let list = readNames();
    if (list.length > MAX_NAMES) { list = list.slice(0, MAX_NAMES); $("names").value = list.join("\n"); }
    names = list;
    $("count").textContent = names.length + (names.length === 1 ? " name" : " names");
    $("spin").disabled = names.length < 2 || spinning;
    cv.setAttribute("aria-label", "Wheel with " + names.length + " names");
    save(); draw();
  }

  /* ---------- events ---------- */
  $("names").addEventListener("input", onNames);
  $("spin").addEventListener("click", spin);
  cv.addEventListener("click", spin);
  $("shuffle").addEventListener("click", () => {
    const a = readNames();
    for (let i = a.length - 1; i > 0; i--) { const j = rand(i + 1); [a[i], a[j]] = [a[j], a[i]]; }
    $("names").value = a.join("\n"); onNames();
  });
  $("clear").addEventListener("click", () => {
    if (!$("names").value.trim() || confirm("Remove all the names?")) { $("names").value = ""; onNames(); }
  });
  $("clearHistory").addEventListener("click", () => { $("history").textContent = ""; $("result").hidden = true; });
  window.addEventListener("resize", draw);

  /* ---------- start ---------- */
  let start = SAMPLE.join("\n");
  try { const s = JSON.parse(localStorage.getItem(KEY)); if (typeof s === "string") start = s; } catch (e) { /* ignore */ }
  $("names").value = start;
  onNames();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(draw);
})();
