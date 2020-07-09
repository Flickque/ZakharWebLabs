document.querySelector('#reader').addEventListener('note', e => e.target.textContent += e.target.title);
document.querySelector('#writer').addEventListener('click',() => document.querySelector('#reader').dispatchEvent(new CustomEvent('note')));
document.querySelector('#writer').addEventListener('response', e => e.target.textContent += e.target.title);
document.querySelector('#reader').addEventListener('note', () => document.querySelector('#writer').dispatchEvent(new CustomEvent('response')));