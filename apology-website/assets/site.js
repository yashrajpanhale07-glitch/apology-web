(() => {
  const data = window.APLOGY_SITE || {};
  document.querySelectorAll('[data-recipient]').forEach(el => el.textContent = data.recipient || 'you');
  document.querySelectorAll('[data-sender]').forEach(el => el.textContent = data.sender || 'Your name');
  const apology = document.querySelector('[data-apology-message]'); if (apology) apology.textContent = data.apology || '';
  const grid = document.querySelector('[data-memory-grid]');
  if (grid) (data.memories || []).forEach((memory, i) => { const card = document.createElement('button'); card.className = 'memory-card'; card.style.setProperty('--delay', `${i * 90}ms`); card.innerHTML = `<span class="memory-icon">${memory.icon}</span><strong>${memory.title}</strong><small>${memory.text}</small><span class="tap">tap me ♡</span>`; card.addEventListener('click', () => card.classList.toggle('open')); grid.appendChild(card); });
  const promises = document.querySelector('[data-promises]');
  if (promises) (data.promises || []).forEach(p => { const li = document.createElement('li'); li.textContent = p; promises.appendChild(li); });
  const yes = document.getElementById('yes-button'), no = document.getElementById('not-yet-button'), note = document.getElementById('choice-note');
  if (yes) yes.addEventListener('click', () => { document.body.classList.add('celebrate'); note.textContent = 'Thank you ♡ I’ll treat this chance with care.'; yes.textContent = 'I promise ♡'; });
  if (no) no.addEventListener('click', () => { note.textContent = 'Of course. Take all the time you need — I’ll be here.'; no.textContent = 'Take your time ♡'; });
})();
