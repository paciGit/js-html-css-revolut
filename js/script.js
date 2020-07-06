$(document).ready(
  function() {

    // Il menù viene mostrato quando col muouse passo sopra il link
    // e viene aggiunta la classe active alla lista che contiene la classe dropdown
    $('.with-dropdown').mouseenter(
      function() {
        $(this).children('.dropdown').addClass('active');
      }
    );

    // Quando tolgo il mouse dal menu che si viene creato, tolgo la classe active
    // tolgo la classe active
    $('.with-dropdown').mouseleave(
      function() {
        $(this).children('.dropdown').removeClass('active');
      }
    );

  }
);
