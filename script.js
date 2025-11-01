  // Task 0. Setup
$(document).ready(function() {
  console.log("jQuery is ready!");

  
  // Task 1. Selectors & CSS
  // by tag changes with css
  $("h1").css({
    "background-color": "lightyellow",
    "color": "black",
    "padding": "10px",
    "border-radius": "8px"
  });

  // by id changes with text
  $("#test").text("How are you?");

  // by class changes with html
  $(".highlight").html("I'm from group MT-2406");


  // Task 2. Visibility Methods
  $("#hideBtn").click(function() {
    $("#text").hide();
  });

  $("#showBtn").click(function() {
    $("#text").show();
  });

  $("#toggleBtn").click(function() {
    $("#text").toggle();
  });

  // Task 3. Fade Methods
  $("#fadeOutBtn").click(function() {
    $("#photo").fadeOut();
  });

  $("#fadeInBtn").click(function() {
    $("#photo").fadeIn();
  });

  $("#fadeToggleBtn").click(function() {
    $("#photo").fadeToggle();
  });

  // Task 4. Slide Methods
  $("#slideUpBtn").click(function() {
    $("#panel").slideUp();
  });

  $("#slideDownBtn").click(function() {
    $("#panel").slideDown();
  });

  $("#slideToggleBtn").click(function() {
    $("#panel").slideToggle();
  });

  // Task 5. Add & Remove Elements
  $("#addItemBtn").click(function() {
    $("#myList").append("<li>Grapefruit</li>");
  });

  $("#removeItemBtn").click(function() {
    $("#myList li:last").remove();
  });

  // Task 6. Modifying Attributes
  $("#changeImgBtn").click(function() {
    $("#phones").attr("src", "samsung.jpg");
  });

  $("#changeLinkBtn").click(function() {
    $("#myLink")
      .attr("href", "https://www.samsung.com/kz_ru/?srsltid=AfmBOooGCWKodlTpCjZs-tcUGgWzrkev_KYvJQqaQHLsmkvXOIh_Zk8U")
      .text("Visit Samsung store");    
  });

  // Task 7. Form Interaction
  $("#nameInput, #emailInput").on("keyup", function() {
    const name = $("#nameInput").val();
    const email = $("#emailInput").val();
    $("#output").text(`Name: ${name} | Email: ${email}`);
  });

  // Task 8. Basic Animation
  $("#animateBtn").click(function() {
  $("#box1").animate({
    width: "200px",
    height: "200px",
    left: "100px"
  }, 1000);
});

// Task 9. Sequential Animations 
  $("#sequenceBtn").click(function() {
    $("#box2")
      .animate({ left: "150px" }, 800)
      .animate({ top: "150px" }, 800)
      .animate({ width: "50px", height: "50px" }, 800)
      .animate({ left: "0px", top: "0px", width: "100px", height: "100px" }, 800);
  });

  // Task 10. Combined Animation 
  $("#comboBtn").click(function() {
    $("#box3").animate({
      left: "100px",
      opacity: 0.5,
      width: "150px",
      height: "150px"
    }, 1500);
  });


  
  // Task 11. Bouncing Ball
  $(document).ready(function() {
  let bouncing = false; // to track if bouncing is active

  // Function to make the ball move up and down
  function bounceBall() {
    if (!bouncing) return; // stop if not active
    $("#ball").animate({ top: "200px" }, 600)
              .animate({ top: "0px" }, 600, bounceBall); 
  }

  // Start the bouncing motion
  $("#startBounce").click(function() {
    if (!bouncing) {
      bouncing = true;
      bounceBall();
    }
  });

  // Stop the bouncing motion
  $("#stopBounce").click(function() {
    bouncing = false;
    $("#ball").stop(true);
  });
});

});




  
