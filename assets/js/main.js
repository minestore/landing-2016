$( document ).ready(function() {
  $(document).foundation();

/* JS menu burguer paginas internas */
document.getElementById( "#nav-toggle" ).addEventListener( "click", function() {
  this.classList.toggle( "active" );
});

/* JS criar a loja */
  $('#create-store').on("click", function(event){
    event.preventDefault();

    createStore($('#email').val());
  });

  $('#create-store-box').on("click", function(event){
    event.preventDefault();

    createStore($('#email-box').val());
  });

  function createStore(email) {
    var payload = {
      email: email,
      type: 'lead'
    }

    $.post("https://app.minestore.com.br/leads.json", payload)
    .done(function(data) {
      window.location.href = "https://app.minestore.com.br/criar-loja?email=" + data.email;
    });
  }
 
 /* JS ebook */
  $('#download-header').on("click", function(event){
    event.preventDefault();

    downloadEbook($('#email-header').val());
  });

  $('#download-footer').on("click", function(event){
    event.preventDefault();

    downloadEbook($('#email-footer').val());
  });

  function downloadEbook(email) {
    var payload = {
      email: email,
      type: 'ebook-divulgar-facebook'
    }

    $.post("https://app.minestore.com.br/leads.json", payload)
    .done(function(data) {
        $('#cta-header-form').fadeOut();
        setTimeout(function() {
          $('#success-cta-header').fadeIn();
        }, 400);

        $('#cta-footer-form').fadeOut();
        setTimeout(function() {
          $('#success-cta-footer').fadeIn();
        }, 400);
    });
  }

  $('.create-store-header').on("click", function(event){
    event.preventDefault();

    window.location.href = "https://app.minestore.com.br/criar-loja";
  });
});
