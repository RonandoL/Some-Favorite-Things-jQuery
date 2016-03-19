$(function() {
  $('form').submit(function(event) {
    event.preventDefault();

    var things = ['car', 'pet', 'home', 'number'];
    var secondArray = [];
    var finalOutput = [];

    things.forEach(function(thing) {
      var thingie = $('input#' + thing).val();
      secondArray.push(thingie);
    });

    // output in specific order: 2ns, 1st then 3rd item
    finalOutput.push(secondArray[1], secondArray[0], secondArray[2]);

    $('.results').show();
    finalOutput.forEach(function(i) {
      $('.items').append('<li>' + i + '</li>');

    });


    //  Jumbotron background image - goes inside UI Logic
    var jumboHeight = $('.jumbotron').outerHeight();
      function parallax(){
          var scrolled = $(window).scrollTop();
          $('.bg').css('height', (jumboHeight-scrolled) + 'px');
      }

      $(window).scroll(function(e){
          parallax();
      });
  });
});
