// var BASE_URL = "http://localhost:3000/api/v1/";


$(document).ready(function(){
  $.ajax({
    method: "GET",
    url:    "http://localhost:3000/api/v1/companies",
    error: function(){
      alert("can't load companies");
    },
    success: function(data){
      var template = $('#company-template').html();
      Mustache.parse(template);
      for(var i = 0; i < data.length; i++) {
        var company = data[i];
        var rendered = Mustache.render(template, company);
        $("#companies").prepend(rendered);
      }
    }
  });
});
