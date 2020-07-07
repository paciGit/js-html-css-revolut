$(document).ready(
  function() {

    // Il menù viene mostrato quando col muouse passo sopra il link
    // e viene aggiunta la classe active alla lista che contiene la classe dropdown
    $('.with-dropdown').mouseenter(
      function() {
        $(this).children('.dropdown').addClass('active');
      }
    );

    // Al passaggio del mouse aggiungo la classe fa-angle-up
    // all'elemento che contiene l'id "lang"
    $('#lang').mouseenter(
      function() {
        $('i').removeClass('fa-angle-down');
        $('i').addClass('fa-angle-up');
      }
    );

    // Quando tolgo il mouse dal menu che si viene creato, tolgo la classe active
    // tolgo la classe active
    $('.with-dropdown').mouseleave(
      function() {
        $(this).children('.dropdown').removeClass('active');
      }
    );

    // Al passaggio del mouse reinserisco la classe fa-angle-down
    // all'elemento che contiene l'id "lang"
    $('#lang').mouseleave(
      function() {
        $('i').removeClass('fa-angle-up');
        $('i').addClass('fa-angle-down');
      }
    );

    // Quando si clicca sul menu hamburger si apre la finestra con la lista
    $('.burger-menu a').click(
      function() {
        $('.toggle_menu').slideDown();
      }
    );

    // Quando si clicca su un link del menu il testo cambia colore
    // e viene aggiunt la classe 'active'
    $('.menu-tot a').click(
      function() {
        $(this).toggleClass('active');
      }
    );

    // Quando si clicca sulle icone della x scompare la finestra con la lista
    $('.close').click(
      function() {
        $('.toggle_menu').slideUp();
      }
    );

  }
);
