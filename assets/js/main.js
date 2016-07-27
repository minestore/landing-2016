$( document ).ready(function() {
  $(document).foundation();

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
  
});
