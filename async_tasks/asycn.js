
// https://codepen.io/flickque/pen/xxZjyeg


let result = '';
const values = Array.from(document.querySelectorAll('#values li'), value => value.textContent)
const URLs = Array.from(document.querySelectorAll('#urls li'), url => url.textContent)
document
  .querySelector('button')
  .addEventListener('click',
  async ({ target: t }) => { 
    let i = 0
    let requestList = URLs.map(
      () => new Function(
        'i', 
        "return fetch(`${URLs[i]}${values[i]}/${result}`).then(res => res.text())"
      )
    )
    for (let request of requestList) {
      let response = await request(i)
      const parser = new DOMParser();
      doc = parser.parseFromString(response, "text/html");
      result = doc.getElementsByTagName('span')[0].textContent;
      i += 1
      document.querySelector('#result').textContent += i + ': ' + result + '\n';
    }   
  }
); 