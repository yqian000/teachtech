/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

function randint(max) {
  // random integer between 0 and max-1
  return Math.floor(Math.random() * max);
}

function setup() {
  /* setup game when the Start Game button is pressed */
  
  // clear and reset globals
  window.localStorage.setItem("story_text", "");
  
  // randomize icons
  const NUM_ICONS = 3;
  var icon_array = [
    "https://cdn.glitch.com/657c802a-cd26-4b29-aa9b-c73e5b811187%2Fghost2.png?v=1607227545063",
    "https://cdn.glitch.com/657c802a-cd26-4b29-aa9b-c73e5b811187%2Fcrown2.png?v=1607227559489",
    "https://cdn.glitch.com/657c802a-cd26-4b29-aa9b-c73e5b811187%2Ftree.png?v=1607227567808",
    "https://cdn.glitch.com/657c802a-cd26-4b29-aa9b-c73e5b811187%2Fboat.png?v=1607227573467",
    "https://cdn.glitch.com/657c802a-cd26-4b29-aa9b-c73e5b811187%2Fstars.png?v=1607227579114",
    "https://cdn.glitch.com/657c802a-cd26-4b29-aa9b-c73e5b811187%2Fsword.png?v=1607227584805",
    "https://cdn.glitch.com/657c802a-cd26-4b29-aa9b-c73e5b811187%2Fspiderweb.png?v=1607227591162",
    "https://cdn.glitch.com/657c802a-cd26-4b29-aa9b-c73e5b811187%2Fcat.png?v=1607273243995",
    "https://cdn.glitch.com/657c802a-cd26-4b29-aa9b-c73e5b811187%2Fpenguin.png?v=1607273255832",
    "https://cdn.glitch.com/657c802a-cd26-4b29-aa9b-c73e5b811187%2Fcastle.png?v=1607273260933",
    "https://cdn.glitch.com/657c802a-cd26-4b29-aa9b-c73e5b811187%2Farrow.png?v=1607273266323"
  ]
  
  var icon_combinations = [];
  for (var i=0; i<NUM_ICONS; i++) {
    var icon_ind = randint(icon_array.length);
    while (icon_combinations.includes(icon_ind)) {
      var icon_ind = randint(icon_array.length);  // don't repeat icons
    }
    icon_combinations.push(icon_ind);  // push the image filenames
  }
  // export globals
  window.localStorage.setItem("icon_one", icon_array[icon_combinations[0]]);
  window.localStorage.setItem("icon_two", icon_array[icon_combinations[1]]);
  window.localStorage.setItem("icon_three", icon_array[icon_combinations[2]]);
  
  window.location='inner_game1.html';
}

function submit(textbox_id) {
  // append  text from the input to the global story_text (with some spaces or separator in between)
  // in the future - protect against submitting multiple times?
  var update = " ".concat($(textbox_id).val());
  window.localStorage.setItem("story_text", window.localStorage.story_text.concat(update));
}

function main() {
  // set #icon img sources correctly
  $("#icon1").attr("src", window.localStorage.icon_one);
  $("#icon2").attr("src", window.localStorage.icon_two);
  $("#icon3").attr("src", window.localStorage.icon_three);
  
  $("#final_icon1").attr("src", window.localStorage.icon_one);
  $("#final_icon2").attr("src", window.localStorage.icon_two);
  $("#final_icon3").attr("src", window.localStorage.icon_three);
  
  $("#complete_story").text(window.localStorage.story_text);
  
  $("#start").click(setup);
  $("#submit1").click(function() {
    submit("#story1");
    window.location='inner_game2.html';
  });
  $("#submit2").click(function() {
    submit("#story2");
    window.location='inner_game3.html';
  });
  $("#submit3").click(function() {
    submit("#story3");
    window.location='completion.html';
  });
}

$(document).ready(main)