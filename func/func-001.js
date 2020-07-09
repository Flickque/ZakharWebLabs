console.clear();
      let rgb = function(r = 255, g = 255, b = 255) {
        return 'rgb(' + r + ',' + g + ',' + b +')'
      };
      document.querySelector('button').addEventListener('click', e => {
        	document.querySelector('#answer').textContent = rgb(123,100,51);
          }
       );

