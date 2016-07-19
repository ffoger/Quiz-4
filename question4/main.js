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
      for(var i = 0; i < data.companies.length; i++) {
        var company = data.companies[i];
        var rendered = Mustache.render(template, company);
        $("#companies").prepend(rendered);
        for(var j = 0; j < data.companies[i].products.length; j++) {
          var product = data.companies[i].products[j];
          var rendered = Mustache.render(template, product);
          $("#company-details").prepend(rendered);
        }
      }
    }
  });
});
