
  document.querySelector('#add').addEventListener('click', e => {
        let count = document.getElementById("cinputs").value;
      	document.querySelector('#custom_inputs').innerHTML = '';
    	for (var i=1; i<=count; i++){
          console.log(i);
          document.querySelector('#custom_inputs').innerHTML  += '<input type="number" value="0" class="f3" name="f'+i+'" />';
        }
  	}
  );

  document.querySelector('#start').addEventListener('click', e => {
        funcpsst();
	});
  async function funcpsst () {
    const URL = 'https://3336.kodaktor.ru/funcpsst';
    const myHeader = { 'Content-Type': 'application/json' };
    let getFunc = await fetch(
    	URL, 
    	{
    		method: 'POST', headers: myHeader
    	}
    	).then(response => response.json());
    const arrayFunc = await getFunc.g.map(x => new Function('...x', x));
     const f0Inputs = document.querySelectorAll(".f0");
     f0Array = [];
     f0Inputs.forEach(x => f0Array.push(Number(x.value)));
     const f1Inputs = document.querySelectorAll(".f1");
     let f1Array = [];
     f1Inputs.forEach(x => f1Array.push(Number(x.value)));
     const f3Inputs = document.querySelectorAll(".f3");
     let f3Array = [];
     f3Inputs.forEach(x => f3Array.push(Number(x.value)));
     document.querySelector('#answer').innerHTML  += '1ый массив: ' + f0Array;
     document.querySelector('#answer').innerHTML  += '<br>2ой массив: ' + f1Array;
     document.querySelector('#answer').innerHTML  += '<br>1ая функция: ' + arrayFunc[0];
     document.querySelector('#answer').innerHTML  += '<br>2ая функция: ' + arrayFunc[1];
     document.querySelector('#answer').innerHTML  += '<br>Результат 2: ' + arrayFunc[0].apply(null, f0Array);
     document.querySelector('#answer').innerHTML  += '<br>Результат 1: ' + arrayFunc[1].apply(null, f1Array);
     document.querySelector('#answer').innerHTML  += '<br>Результат 3: ' + arrayFunc[1].apply(null, f3Array);
  };
      
