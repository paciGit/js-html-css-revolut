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

    // La lista viene mostrata quando clicco sul link nel menu hamburger
    $('.with-dropdown-bm').click(
      function() {
        $(this).children('.dropdown-bm').slideToggle('active');
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
    $('.menu-hidden a').click(
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
