$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
  });

  $(document).ready(function(){
    $("#submit").click(function(){
      $('.toast').toast('show');
    });
  });