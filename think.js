(function () {
  "use strict";

  /* ================= CONTENT (edit the text here) ================= */
  const DATES = { g4: "2027-01-10", gate: "2027-02-20" };

  const FACTS = {
    gate: {
      title: "GATE DA 2027 (IIT Madras)",
      list: [
        "65 questions, 100 marks, 3 hours, on a computer.",
        "10 General Aptitude questions (15 marks) plus 55 Data Science and AI questions (85 marks).",
        "Wrong MCQ answers cost 1/3 mark (1-mark question) or 2/3 mark (2-mark question). MSQ and NAT have no negative marking.",
        "Exam days are 6, 7, 13, 14, 20 and 21 Feb 2027. One site lists DA for Sat 20 Feb, forenoon. Treat that as expected and confirm on your admit card.",
        "Your syllabus has 7 sections: Probability and Statistics, Linear Algebra, Calculus and Optimization, Programming/DSA, DBMS and Warehousing, Machine Learning, AI."
      ]
    },
    g4: {
      title: "TNPSC Group 4 (Notification 11/2026)",
      list: [
        "One OMR paper: 200 questions, 300 marks (1.5 each), 3 hours, SSLC standard.",
        "Part A Tamil: 100 questions (150 marks). Score at least 60 here or Parts B and C are not evaluated. Overall minimum is 90 of 300.",
        "Part B General Studies: 75 questions. Part C Aptitude and Mental Ability: 25 questions.",
        "Exam on 10 Jan 2027, 9:30 AM to 12:30 PM. Online applications were reported to close on 5 Nov 2026, so check tnpsc.gov.in today if you have not applied.",
        "There is no interview."
      ]
    }
  };

  // marks per section, counted from the three official DA papers (2024, 2025, 2026): average of the three years
  const GATE_W = [["Probability and Statistics", 18.3], ["Programming, DS and Algorithms", 16], ["Machine Learning", 13.3],
                  ["DBMS and Warehousing", 12], ["Linear Algebra", 10], ["AI", 8], ["Calculus and Optimization", 7.3]];
  const G4_PARTS = [["Part A: Tamil", 100], ["Part B: General Studies", 75], ["Part C: Aptitude and Mental Ability", 25]];
  const G4_GS = [["Unit I: General Science", 5], ["Unit II: Geography of India", 5], ["Unit III: History, Culture, National Movement", 10],
                 ["Unit IV: Indian Polity", 15], ["Unit V: Economy and Development in TN", 20], ["Unit VI: TN History, Culture, Heritage", 20]];

  const PEOPLE = {
    musk: {
      name: "Elon Musk", tag: "First principles",
      idea: "Do not study the syllabus as a pile of topics. Boil it down to the few big branches that carry the marks, master those first, then hang the details on them.",
      pattern: [
        ["First principles", "Break a problem into facts you are sure of and rebuild from there, instead of copying what everyone else does."],
        ["Knowledge tree", "Learn the trunk and big branches before the leaves, so every detail has something to stick to."],
        ["The five-step algorithm", "Question the requirement, delete, simplify, speed up, then automate, in that order."],
        ["Hard deadlines", "A short, real deadline forces you to cut what does not matter."]
      ],
      moves: {
        gate: [
          "Rank the 7 sections by marks, not by interest. Probability, Programming/DSA and DBMS add up to about 46 of the 85 subject marks.",
          "Delete: keep one main source per section and drop the extra videos once you understand a topic.",
          "Simplify: make one formula page per section. That page is your revision in the last weeks.",
          "Accelerate: solve about 10 past questions right after reading each topic, not at the end."
        ],
        g4: [
          "Tamil is the trunk: 150 of 300 marks and a 60-mark gate. Make it safe first.",
          "In General Studies, Units IV, V and VI carry 55 of the 75 questions (Polity 15, Economy 20, TN history 20).",
          "Delete: do not read whole textbooks line by line. Use your Where to Study table and read only the named lessons.",
          "Automate: let your C Track, GS and Tamil pages decide what you study today, so you never waste time choosing."
        ]
      },
      ask: ["Which three things, if I mastered them, would earn most of the marks?", "If I had half the time, what would I delete?", "Am I studying this because it is on the syllabus, or because it scores?"],
      watch: ["Cutting too hard. Calculus gave 3 marks in 2026 but 11 in 2025, so small sections still pay.", "The numbers come from only three papers. They are a guide, not a promise."],
      extra: "tree"
    },
    zuck: {
      name: "Mark Zuckerberg", tag: "Ship, measure, repeat",
      idea: "Do not wait until you feel ready. Ship a first attempt now, measure what broke, fix it, and repeat every week.",
      pattern: [
        ["Ship early", "A rough first version beats a perfect plan that never starts. Facebook was known for the 'done is better than perfect' attitude."],
        ["Measure everything", "Test two versions and keep the one the numbers favour."],
        ["Short cycles", "Weekly releases and one-day hackathons: small bets, fast feedback."],
        ["Focus on impact", "Spend your time on the change that moves the number most."]
      ],
      moves: {
        gate: [
          "This week, take one full GATE DA past paper before finishing the syllabus. That is your version 1.",
          "Run a weekly sprint: learn Monday to Thursday, practise Friday, full mock Saturday, review Sunday.",
          "Tag every wrong answer as concept gap, silly mistake or time loss, and fix the biggest tag first.",
          "Hackathon day: pick your weakest section and solve only its questions for a whole day."
        ],
        g4: [
          "In the first week, attempt a full 200-question Group 4 mock to find your starting score.",
          "From December, take two mocks a week and split the time like the paper: Tamil 100, GS 75, Aptitude 25.",
          "After each mock, record the marks per part below and see which part moves the total most.",
          "Ship daily: 25 Tamil and 25 GS questions every day, even on busy days."
        ]
      },
      ask: ["What did my last mock tell me that I am ignoring?", "What can I finish today instead of perfecting?", "Which number am I tracking this week?"],
      watch: ["Moving fast without reviewing mistakes is just guessing quickly.", "Mocks without analysis only measure. They do not teach."],
      extra: "mock"
    },
    bezos: {
      name: "Jeff Bezos", tag: "Work backwards",
      idea: "Start from result day and walk back. Write the result you want, then find the daily inputs you control that lead there.",
      pattern: [
        ["Working backwards", "Write the headline first (Amazon calls it the press release), then build the plan."],
        ["Input metrics", "You cannot control your rank. You can control questions solved, mocks analysed and revision rounds."],
        ["Two-way doors", "Reversible choices should be made fast with about 70% of the information. Slow down only for one-way doors."],
        ["Day 1 and regret", "Start each day as if it is day one, and ask what you would regret not trying."]
      ],
      moves: {
        gate: [
          "Write your result-day headline: the score you want and the college or job it opens.",
          "Pick three input metrics: past questions solved per day, mocks per week, mistakes re-solved.",
          "Choosing a book or video series is a two-way door. Decide in one day and switch if it fails.",
          "Exam strategy is a one-way door: fix your attempt order (for example 1-mark questions first) in mocks and keep it."
        ],
        g4: [
          "Write your headline: 'I scored X of 300 and cleared the Tamil gate.' Use the calculator below.",
          "Input metrics: questions per part per day, mocks per week, Tamil lessons revised.",
          "Day-1 ritual: every morning open your tracker and pick today's three tasks.",
          "Apply the regret test to the two-exam overlap: Group 4 is 10 Jan and GATE is about 20 Feb. Decide the split now (see My Blend)."
        ]
      },
      ask: ["If I got the result I want, what did I do every day to get it?", "Which inputs can I control this week?", "Is this decision reversible?"],
      watch: ["Planning forever. The plan is only a start.", "Tracking what is easy to count instead of what matters."],
      extra: "back"
    },
    sci: {
      name: "A Scientist", tag: "Hypothesis, test, learn",
      idea: "Treat your preparation as an experiment. Guess what will raise your score, test it, record the result and keep only what works.",
      pattern: [
        ["The scientific method", "Observe, form a hypothesis, test it, then decide."],
        ["Control the variables", "Change one thing at a time, or you cannot tell what worked."],
        ["Teach it simply", "Richard Feynman's method: explain the idea in plain words. Where you get stuck is what you have not understood."],
        ["Do not fool yourself", "Record honest results, including failures, and re-solve before you trust an answer."]
      ],
      moves: {
        gate: [
          "Hypothesis: 'Solving 20 probability past questions will lift my accuracy from 50% to 70%.' Test it with a timed set.",
          "Feynman a topic: explain Bayes theorem or the SVM margin in plain words without notes. The gaps become your study list.",
          "Keep an error log: question, why it was wrong, rule learned. Re-solve each after 7 days.",
          "Change one variable per week (for example morning or night study) and compare mock scores."
        ],
        g4: [
          "Hypothesis: 'Reading a lesson then answering 10 questions beats only reading.' Test it on one GS unit.",
          "Feynman a Tamil grammar rule by writing your own examples.",
          "Keep an error log per part (Tamil, GS, Aptitude) and mark each error as memory or concept.",
          "Replicate: retake the same mock after three weeks. The change shows how much you retained."
        ]
      },
      ask: ["What is my hypothesis for this week?", "What is the evidence, not the feeling?", "What would prove my method wrong?"],
      watch: ["Experiments with no record teach nothing.", "Changing many things at once hides what worked."],
      extra: "lab"
    }
  };

  const COMPARE = [
    ["Elon Musk", "What are the fundamental parts?", "Deciding what to study", "Cutting too much"],
    ["Mark Zuckerberg", "What can I ship today?", "Building the habit and running mocks", "Speed without review"],
    ["Jeff Bezos", "What result do I want and which inputs get it?", "Planning and tracking", "Over-planning"],
    ["A scientist", "What does the evidence say?", "Fixing weak areas", "Over-analysing"]
  ];
  const PHASES = [
    ["2026-10-31", "2026-11-05", "Lock in", "Confirm your Group 4 application (reported to close 5 Nov). Take one Group 4 mock and one GATE DA past paper as your baseline."],
    ["2026-11-06", "2026-12-15", "Build the trunk", "Group 4: Tamil first, then GS Units IV to VI. GATE: probability, programming and DBMS basics, about 1 to 2 hours a day."],
    ["2026-12-16", "2027-01-09", "Group 4 sprint", "Two mocks a week, Tamil safely above 60, error log. Keep GATE to light revision."],
    ["2027-01-10", "2027-01-14", "Exam, then reset", "Group 4 on 10 Jan. Rest, then switch fully to GATE."],
    ["2027-01-15", "2027-02-12", "GATE sprint", "Past papers 2024 to 2026 section by section, then mocks twice a week. One formula page per section."],
    ["2027-02-13", "2027-02-20", "Final week", "No new topics. Error log, formula pages, sleep. Check your admit card and exam centre (admit cards were reported for early January)."]
  ];
  const RHYTHM = [
    ["Mon to Thu", "Musk and Scientist", "Learn the heavy branches first. After each topic, explain it aloud and solve about 10 past questions."],
    ["Fri", "Zuckerberg", "Ship: a timed practice set on the week's topics."],
    ["Sat", "Zuckerberg and Bezos", "A full mock or half paper. Record the marks in the log (your input metric)."],
    ["Sun", "Scientist and Bezos", "Update the error log, state one hypothesis for next week, write next week's three input targets."]
  ];
  const FEYNMAN = ["Pick one concept.", "Explain it in plain words, as if to a friend.", "Note where you got stuck or used jargon.", "Go back to the source, then explain it again, shorter."];
  const LOGS = {
    mock: { title: "Mock log", cols: [["date", "Date", "date"], ["exam", "Exam", "select", ["GATE DA", "Group 4"]], ["score", "Marks", "number"], ["mist", "Biggest mistake type", "text"]] },
    lab: { title: "Experiment log", cols: [["hyp", "Hypothesis", "text"], ["test", "How I tested it", "text"], ["res", "Result", "text"], ["dec", "Decision", "select", ["Keep", "Change", "Drop"]]] }
  };
  const TABS = [["start", "Start here"], ["musk", "Elon Musk"], ["zuck", "Mark Zuckerberg"], ["bezos", "Jeff Bezos"], ["sci", "A Scientist"], ["blend", "My Blend"]];

  /* ================= STATE ================= */
  const KEY = "think-v1";
  let S = { exam: "both", adopt: {}, logs: { mock: [], lab: [] }, calc: { gate: 75, ga: 10, g4: 225, perday: 30 } };
  try {
    const s = JSON.parse(localStorage.getItem(KEY) || "null");
    if (s) { S = Object.assign(S, s); S.logs = Object.assign({ mock: [], lab: [] }, s.logs); S.calc = Object.assign({ gate: 75, ga: 10, g4: 225, perday: 30 }, s.calc); }
  } catch (e) { /* ignore */ }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* ignore */ } };
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const shown = () => (S.exam === "both" ? ["gate", "g4"] : [S.exam]);
  const daysTo = (d) => Math.ceil((new Date(d + "T00:00:00") - new Date(new Date().toDateString())) / 864e5);
  const dayText = (d) => { const n = daysTo(d); return n > 0 ? n + " days to go" : n === 0 ? "today" : "done"; };

  /* ================= PIECES ================= */
  const bars = (list, max, unit) => `<div class="bars">${list.map(([l, v]) =>
    `<div class="bar"><span class="bl">${esc(l)}</span><span class="bt"><i style="width:${(v / max) * 100}%"></i></span><b>${v}${unit}</b></div>`).join("")}</div>`;

  function movesHTML(pid, p) {
    return shown().map((ex) => `<div class="card"><h4>${ex === "gate" ? "GATE DA 2027" : "TNPSC Group 4"}</h4><ul class="moves">${
      p.moves[ex].map((m, i) => { const id = pid + "-" + ex + i;
        return `<li><label><input type="checkbox" data-adopt="${id}" ${S.adopt[id] ? "checked" : ""}><span>${esc(m)}</span></label></li>`; }).join("")}</ul></div>`).join("");
  }

  function logHTML(k) {
    const L = LOGS[k], rows = S.logs[k];
    const cell = (c, r, i) => {
      const [f, , type, opts] = c, v = r[f] == null ? "" : r[f];
      if (type === "select") return `<select data-f="${f}">${opts.map((o) => `<option ${o === v ? "selected" : ""}>${o}</option>`).join("")}</select>`;
      return `<input type="${type}" data-f="${f}" value="${esc(v)}">`;
    };
    const pct = (r) => Math.max(0, Math.min(100, (Number(r.score) / (r.exam === "Group 4" ? 300 : 100)) * 100)) || 0;
    const body = rows.map((r, i) => `<tr data-log="${k}" data-i="${i}">${L.cols.map((c) => `<td data-l="${c[1]}">${cell(c, r, i)}</td>`).join("")}${
      k === "mock" ? `<td data-l="Of full marks"><span class="bt"><i class="fill" style="width:${pct(r)}%"></i></span></td>` : ""}
      <td><button class="del" data-del="${k}:${i}" type="button" title="Remove">x</button></td></tr>`).join("");
    return `<h3 class="sub">${L.title}</h3>
    <div class="wrap"><table class="tbl"><thead><tr>${L.cols.map((c) => `<th>${c[1]}</th>`).join("")}${k === "mock" ? "<th>Of full marks</th>" : ""}<th></th></tr></thead><tbody>${body}</tbody></table></div>
    ${rows.length ? "" : `<p class="hint">Nothing logged yet.</p>`}<button type="button" data-add="${k}">Add a row</button>`;
  }

  const EXTRAS = {
    tree() {
      let h = `<h3 class="sub">The trunk and big branches</h3>`;
      if (shown().includes("gate")) h += `<div class="card"><h4>GATE DA: average marks per section (of 85)</h4>${bars(GATE_W, 20, "")}
        <p class="hint">Counted from the three official DA papers (2024 to 2026) by ProSyllabus. GATE publishes no official weightage, and other sites count a little differently. DBMS rose from 7 to 11 to 18 marks. Calculus went 8, 11, 3.</p></div>`;
      if (shown().includes("g4")) h += `<div class="card"><h4>Group 4: questions per part (of 200)</h4>${bars(G4_PARTS, 100, "")}
        <h4>General Studies: questions per unit (of 75)</h4>${bars(G4_GS, 20, "")}</div>`;
      return h;
    },
    back() {
      const c = S.calc; let h = `<h3 class="sub">Work backwards: what does your target need?</h3>`;
      if (shown().includes("g4")) h += `<div class="card"><h4>TNPSC Group 4</h4>
        <label>Target marks (of 300) <input type="number" min="0" max="300" data-calc="g4" value="${c.g4}"></label>
        <p class="out" id="outg4"></p></div>`;
      if (shown().includes("gate")) h += `<div class="card"><h4>GATE DA</h4>
        <label>Target marks (of 100) <input type="number" min="0" max="100" data-calc="gate" value="${c.gate}"></label>
        <label>Marks you expect from General Aptitude (of 15) <input type="number" min="0" max="15" data-calc="ga" value="${c.ga}"></label>
        <p class="out" id="outgate"></p></div>`;
      h += `<div class="card"><h4>Your input metric</h4><label>Practice questions per day <input type="number" min="0" data-calc="perday" value="${c.perday}"></label><p class="out" id="outvol"></p></div>`;
      return h;
    },
    mock() { return logHTML("mock"); },
    lab() { return `<h3 class="sub">The Feynman check</h3><ol class="steps">${FEYNMAN.map((s) => `<li>${s}</li>`).join("")}</ol>` + logHTML("lab"); }
  };

  function drawCalc() {
    const c = S.calc, n = (v) => Number(v) || 0;
    if ($("outg4")) { const need = Math.ceil(n(c.g4) / 1.5);
      $("outg4").textContent = `${n(c.g4)} marks needs ${need} of 200 questions right (${Math.round((need / 200) * 100)}%). The Tamil gate needs at least 40 of 100 right (60 marks).`; }
    if ($("outgate")) { const need = Math.max(0, n(c.gate) - n(c.ga));
      $("outgate").textContent = `A score of ${n(c.gate)} needs about ${need} of the 85 subject marks (${Math.round((need / 85) * 100)}%). A wrong 1-mark MCQ costs 1/3 mark and a wrong 2-mark MCQ costs 2/3 mark, so guess only when you can drop two options.`; }
    if ($("outvol")) $("outvol").innerHTML = shown().map((ex) => { const d = Math.max(0, daysTo(DATES[ex]));
      return `${ex === "gate" ? "GATE DA" : "Group 4"}: ${n(c.perday)} a day for ${d} days is about ${n(c.perday) * d} questions before the exam.`; }).join("<br>");
  }

  /* ================= VIEWS ================= */
  function vStart() {
    const cards = ["gate", "g4"].map((k) => `<div class="card"><h4>${FACTS[k].title}</h4><ul>${FACTS[k].list.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div>`).join("");
    const rows = COMPARE.map((r) => `<tr><td class="tp">${r[0]}</td><td data-l="Core question">${r[1]}</td><td data-l="Best for">${r[2]}</td><td data-l="Watch out for">${r[3]}</td></tr>`).join("");
    return `<h2 class="pt">Two exams, four minds <span>start here</span></h2>
    <p class="idea">Group 4 is on 10 Jan and GATE DA about six weeks later. Each tab below shows how one famous way of thinking would attack both. Tick the moves you like, and they collect in My Blend.</p>
    <div class="grid">${cards}</div>
    <h3 class="sub">Four lenses side by side</h3>
    <div class="wrap"><table class="tbl"><thead><tr><th>Thinker</th><th>Core question</th><th>Best for</th><th>Watch out for</th></tr></thead><tbody>${rows}</tbody></table></div>`;
  }
  function vPerson(id) {
    const p = PEOPLE[id];
    return `<h2 class="pt">${p.name} <span>${p.tag}</span></h2><p class="idea">${esc(p.idea)}</p>
    <h3 class="sub">Their pattern</h3><div class="grid">${p.pattern.map(([t, d]) => `<div class="card"><h4>${esc(t)}</h4><p>${esc(d)}</p></div>`).join("")}</div>
    <h3 class="sub">Use it on your exam</h3><div class="grid">${movesHTML(id, p)}</div>
    ${EXTRAS[p.extra]()}
    <div class="grid"><div class="card"><h4>Ask yourself</h4><ul>${p.ask.map((q) => `<li>${esc(q)}</li>`).join("")}</ul></div>
    <div class="card"><h4>Watch out</h4><ul>${p.watch.map((q) => `<li>${esc(q)}</li>`).join("")}</ul></div></div>`;
  }
  function vBlend() {
    const today = new Date().toISOString().slice(0, 10);
    const text = {}; Object.keys(PEOPLE).forEach((pid) => ["gate", "g4"].forEach((ex) => PEOPLE[pid].moves[ex].forEach((m, i) => { text[pid + "-" + ex + i] = m; })));
    const picked = Object.keys(PEOPLE).map((pid) => {
      const ids = Object.keys(text).filter((id) => id.startsWith(pid + "-") && S.adopt[id]);
      return ids.length ? `<div class="card"><h4>${PEOPLE[pid].name}</h4><ul>${ids.map((id) => `<li>${esc(text[id])}</li>`).join("")}</ul></div>` : "";
    }).join("");
    const total = Object.keys(S.adopt).filter((k) => S.adopt[k]).length;
    const ph = PHASES.map(([a, b, t, d]) => `<div class="card phase ${a <= today && today <= b ? "now" : ""}"><h4>${t}</h4><div class="hint">${a} to ${b}${a <= today && today <= b ? " (you are here)" : ""}</div><p>${esc(d)}</p></div>`).join("");
    const rh = RHYTHM.map((r) => `<tr><td class="tp">${r[0]}</td><td data-l="Mind">${r[1]}</td><td data-l="What you do">${r[2]}</td></tr>`).join("");
    return `<h2 class="pt">My Blend <span>one plan from four minds</span></h2>
    <p class="idea">Musk picks what matters, Bezos sets the targets, Zuckerberg keeps you shipping and measuring, the scientist keeps you honest. Together they make one rhythm.</p>
    <h3 class="sub">Moves you picked (${total})</h3>${picked ? `<div class="grid">${picked}</div>` : `<p class="hint">Tick moves in the other tabs and they will appear here.</p>`}
    <h3 class="sub">From now to the exams</h3><div class="grid">${ph}</div>
    <h3 class="sub">A week with four minds</h3><div class="wrap"><table class="tbl"><thead><tr><th>Days</th><th>Mind</th><th>What you do</th></tr></thead><tbody>${rh}</tbody></table></div>
    <p class="hint">This is a starting suggestion. If Tamil is your weak part, give it more of November. If probability is, move it earlier.</p>`;
  }

  function tabs(active) { $("tabs").innerHTML = TABS.map(([id, l]) => `<button type="button" class="tab" data-go="${id}" ${id === active ? 'aria-current="page"' : ""}>${l}</button>`).join(""); }
  function seg() { document.querySelectorAll("[data-exam]").forEach((b) => b.setAttribute("aria-pressed", b.dataset.exam === S.exam)); }
  function counts() {
    $("count").innerHTML = `<span class="chip">TNPSC Group 4: 10 Jan 2027 &middot; ${dayText(DATES.g4)}</span><span class="chip">GATE DA (expected): 20 Feb 2027 &middot; ${dayText(DATES.gate)}</span>`;
  }
  function route(keep) {
    const h = location.hash.slice(1), id = TABS.some((t) => t[0] === h) ? h : "start";
    tabs(id); seg();
    $("view").innerHTML = id === "start" ? vStart() : id === "blend" ? vBlend() : vPerson(id);
    drawCalc(); if (!keep) window.scrollTo(0, 0);
  }

  /* ================= EVENTS ================= */
  document.addEventListener("click", (e) => {
    const go = e.target.closest("[data-go]"); if (go) { location.hash = go.dataset.go; return; }
    const ex = e.target.closest("[data-exam]"); if (ex) { S.exam = ex.dataset.exam; save(); route(true); return; }
    const add = e.target.closest("[data-add]");
    if (add) { const k = add.dataset.add, r = {}; LOGS[k].cols.forEach((c) => { r[c[0]] = c[2] === "select" ? c[3][0] : ""; });
      if (k === "mock") r.date = new Date().toISOString().slice(0, 10); S.logs[k].push(r); save(); route(true); return; }
    const del = e.target.closest("[data-del]");
    if (del) { const [k, i] = del.dataset.del.split(":"); S.logs[k].splice(Number(i), 1); save(); route(true); }
  });
  document.addEventListener("input", (e) => {
    const t = e.target;
    if (t.dataset.calc) { S.calc[t.dataset.calc] = t.value; save(); drawCalc(); return; }
    const tr = t.closest("tr[data-log]"); if (!tr || !t.dataset.f) return;
    const k = tr.dataset.log, r = S.logs[k][Number(tr.dataset.i)]; r[t.dataset.f] = t.value; save();
    if (k === "mock") { const f = tr.querySelector(".fill"); if (f) f.style.width = Math.max(0, Math.min(100, (Number(r.score) / (r.exam === "Group 4" ? 300 : 100)) * 100)) + "%"; }
  });
  document.addEventListener("change", (e) => {
    const t = e.target;
    if (t.dataset.adopt) { t.checked ? (S.adopt[t.dataset.adopt] = 1) : delete S.adopt[t.dataset.adopt]; save(); return; }
    const tr = t.closest("tr[data-log]"); if (tr && t.tagName === "SELECT") { S.logs[tr.dataset.log][Number(tr.dataset.i)][t.dataset.f] = t.value; save(); if (tr.dataset.log === "mock") route(true); }
  });
  window.addEventListener("hashchange", () => route());
  counts(); route();
})();
