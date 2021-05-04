

/*Contador de veces de la pagina*/



$('#nVeces').text(
  'Has hecho click ' + sessionStorage.contador + ' veces en esta sesión.'
);

function clickCounter() {
  if (sessionStorage.contador) {
    sessionStorage.contador = Number(sessionStorage.contador) + 1;
  } else {
    sessionStorage.setItem('contador', 1);
  }

  $('#nVeces').text(
    'Has hecho click ' + sessionStorage.contador + ' veces en esta sesión.'
  );
}

$('.migas b').text(document.location.href.match(/[^\/]+$/)[0].split('.')[0]);
