function imccalculator() {
  let peso = document.getElementById('peso');
  let nPeso = Number(peso.value);
  let altura = document.querySelector('input#altura');
  let nAltura = Number(altura.value);
  let radAlt = document.getElementsByName('radalt');
  if (nPeso == 0 || nAltura == 0) {
    window.alert(`[ERRO] insira dados válidos.`);
  }
  else {
    if (radAlt[0].checked) {

      let nAlturaCm = Number(altura.value);
      nAlturaCm = nAlturaCm / 100;

      let imc = nPeso / (nAlturaCm * nAlturaCm);

      let imcPreRes = imc.toFixed(2).replace('.', ',');

      let res = document.getElementById('res');
      let preRes = document.getElementById('preres');

      preRes.innerText = `Seu índice de massa corporal é de: ${imcPreRes}.`;

      if (imc < 18.5) {
        res.innerHTML = `Magreza!`;
        document.body.style.background = 'linear-gradient(90deg, #30bc11 60%, #9fff58 100%)';
      }
      else if (imc >= 18.5 && imc <= 24.99) {
        res.innerHTML = "Normal!";
        document.body.style.background = 'linear-gradient(90deg, rgba(199,255,170,1) 0%, rgba(122,255,133,1) 50%, rgba(92,217,100,1) 100%)';
      }
      else if (imc >= 25 && imc <= 29.99) {
        res.innerHTML = "Sobrepeso!";
        document.body.style.background = 'linear-gradient(90deg, #FFE53B 60%, #b8ff25 100%)';
      }
      else if (imc >= 30 && imc <= 34.99) {
        res.innerHTML = "Obesidade Grau 1!";
        document.body.style.background = 'linear-gradient(90deg, #ff873d 60%, #fff225 100%)';
      }
      else if (imc >= 35 && imc <= 39.99) {
        res.innerHTML = "Obesidade Grau 2!";
        document.body.style.background = 'linear-gradient(90deg, #ff3d3d 60%, #ff4600 100%)';
      } else {
        res.innerHTML = "Obesidade Grau 3!";
        document.body.style.background = 'linear-gradient(90deg, #bc1111 60%, #ff0000 100%)';
      }
    }
    else if (radAlt[1].checked) {
      let imc = nPeso / (nAltura * nAltura);

      let imcPreRes = imc.toFixed(2).replace('.', ',');

      var res = document.getElementById('res');
      var preRes = document.getElementById('preres');

      preRes.innerText = `Seu índice de massa corporal é de: ${imcPreRes}.`;

      if (imc < 18.5) {
        res.innerHTML = `Magreza!`;
        document.body.style.background = 'linear-gradient(90deg, #30bc11 60%, #9fff58 100%)';
      }
      else if (imc >= 18.5 && imc <= 24.99) {
        res.innerHTML = "Normal!";
        document.body.style.background = 'linear-gradient(90deg, rgba(199,255,170,1) 0%, rgba(122,255,133,1) 50%, rgba(92,217,100,1) 100%)';
      }
      else if (imc >= 25 && imc <= 29.99) {
        res.innerHTML = "Sobrepeso!";
        document.body.style.background = 'linear-gradient(90deg, #FFE53B 60%, #b8ff25 100%)';
      }
      else if (imc >= 30 && imc <= 34.99) {
        res.innerHTML = "Obesidade Grau 1!";
        document.body.style.background = 'linear-gradient(90deg, #ff873d 60%, #fff225 100%)';
      }
      else if (imc >= 35 && imc <= 39.99) {
        res.innerHTML = "Obesidade Grau 2!";
        document.body.style.background = 'linear-gradient(90deg, #ff3d3d 60%, #ff4600 100%)';
      } else {
        res.innerHTML = "Obesidade Grau 3!";
        document.body.style.background = 'linear-gradient(90deg, #bc1111 60%, #ff0000 100%)';
      }
    }
  }
}