// Smooth Scrolling
$('#navbar a, .btn').on('click', function(event) {
    if(this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 80
            },
            800 //800ms
        );
    }
});

$(document).ready(function() {
    $('.submit').click(function (event) {
      event.preventDefault()
      console.log('Clicked Button')
      
      var email = $('.email').val()
      var firstname = $('.firstname').val()
      var lastname = $('.lastname').val()
      var message = $('.message').val()
      var statusElm = $('.status')
      statusElm.empty()
      
      if (email.length > 5 && email.includes('@') && email.includes('.')) {
        statusElm.append('<div>Email is valid</div>')
      } else {
        event.preventDefault()
        statusElm.append('<div>Email is not valid</div>')
      }
      
      if(message.length >= 2) {
        statusElm.append('<div>Subject is valid</div>')
      } else {
        event.preventDefault()
        statusElm.append('<div>Subject is not valid</div>')
      }
      
      if(firstname.length >= 1) {
        statusElm.append('<div>First Name is valid</div>')
      } else {
        event.preventDefault()
        statusElm.append('<div>First Name is not valid</div>')
      }

      if(lastname.length >= 1) {
        statusElm.append('<div>Last Name is valid</div>')
      } else {
        event.preventDefault()
        statusElm.append('<div>last Name is not valid</div>')
      }
    })
  })
