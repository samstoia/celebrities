$(document).ready(function() {
  $("#celebrities").submit(function(event) {
    event.preventDefault();

    var animal = parseInt($("input:radio[name=animal]:checked").val());

    var food = parseInt($("input:radio[name=food]:checked").val());

    var socialmedia = parseInt($("input:radio[name=socialmedia]:checked").val());

    var outdoors = parseInt($("input:radio[name=outdoors]:checked").val());

    var friends = parseInt($("input:radio[name=friends]:checked").val());

    var total = animal + food + socialmedia + outdoors + friends;

    match(total);

    console.log(animal, food, socialmedia, outdoors, friends);
  });
});

function match(total) {
  if (total <= 7) {
  $("#crissy").show();
  }

  else if (total > 7) {
    $("#taylor").show();
  };
};
