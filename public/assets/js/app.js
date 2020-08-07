$(document).ready(function() {

  // createPage();
  // 
  // // load the page initially with articles
  // function createPage() {
  //   location.window.href = '/';
  // };


  // when the save button is clicked, get the article ID and set its saved property to true
  $(".save-btn").on("click", function(event) {
    var newSavedArticle = $(this).data();
    newSavedArticle.saved = true;
    console.log("saved was clicked");
    var id = $(this).attr("data-articleid");
    $.ajax("/saved/" + id, {
      type: "PUT",
      data: newSavedArticle
    }).then(
      function(data) {
        location.reload();
      }
    );
  });

// next-stage set
$(".scrape-new").on("click", function(event) {
  event.preventDefault();
  $.get("/scrape", function(data) {
    window.location.reload();
  });
});

// The astral force set
$(".scrape-new-2").on("click", function(event) {
event.preventDefault();
$.get("/scrape2", function(data) {
  window.location.reload();
});
});

// Team dragons vanity
$(".scrape-new-3").on("click", function(event) {
event.preventDefault();
$.get("/scrape3", function(data) {
  window.location.reload();
});
});

      // Crystal melody
$(".scrape-new-4").on("click", function(event) {
event.preventDefault();
$.get("/scrape4", function(data) {
window.location.reload();
});
});

// The mysterious fortune
$(".scrape-new-5").on("click", function(event) {
event.preventDefault();
$.get("/scrape5", function(data) {
window.location.reload();
});
});
// The raging tactic
$(".scrape-new-6").on("click", function(event) {
event.preventDefault();
$.get("/scrape6", function(data) {
window.location.reload();
});
});

// The raging tactic
$(".scrape-new-7").on("click", function(event) {
event.preventDefault();
$.get("/scrape7", function(data) {
  window.location.reload();
});
});
// next-stage set
$(".scrape-new-8").on("click", function(event) {
event.preventDefault();
$.get("/scrape8", function(data) {
  window.location.reload();
});
});

// The astral force set
$(".scrape-new-9").on("click", function(event) {
event.preventDefault();
$.get("/scrape9", function(data) {
window.location.reload();
});
});

// Team dragons vanity
$(".scrape-new-10").on("click", function(event) {
event.preventDefault();
$.get("/scrape10", function(data) {
window.location.reload();
});
});

    // Crystal melody
$(".scrape-new-11").on("click", function(event) {
event.preventDefault();
$.get("/scrape11", function(data) {
window.location.reload();
});
});

// The mysterious fortune
$(".scrape-new-12").on("click", function(event) {
event.preventDefault();
$.get("/scrape12", function(data) {
window.location.reload();
});
});
// The raging tactic
$(".scrape-new-13").on("click", function(event) {
event.preventDefault();
$.get("/scrape13", function(data) {
window.location.reload();
});
});

// The raging tactic
$(".scrape-new-14").on("click", function(event) {
event.preventDefault();
$.get("/scrape14", function(data) {
window.location.reload();
});
});

// next-stage set
$(".scrape-new-15").on("click", function(event) {
event.preventDefault();
$.get("/scrape15", function(data) {
  window.location.reload();
});
});

// The astral force set
$(".scrape-new-16").on("click", function(event) {
event.preventDefault();
$.get("/scrape16", function(data) {
window.location.reload();
});
});

// Team dragons vanity
$(".scrape-new-17").on("click", function(event) {
event.preventDefault();
$.get("/scrape17", function(data) {
window.location.reload();
});
});

    // Crystal melody
$(".scrape-new-18").on("click", function(event) {
event.preventDefault();
$.get("/scrape18", function(data) {
window.location.reload();
});
});

// The mysterious fortune
$(".scrape-new-19").on("click", function(event) {
event.preventDefault();
$.get("/scrape19", function(data) {
window.location.reload();
});
});
// The raging tactic
$(".scrape-new-20").on("click", function(event) {
event.preventDefault();
$.get("/scrape20", function(data) {
window.location.reload();
});
});

// The raging tactic
$(".scrape-new-21").on("click", function(event) {
event.preventDefault();
$.get("/scrape21", function(data) {
window.location.reload();
});
});
// next-stage set
$(".scrape-new-22").on("click", function(event) {
event.preventDefault();
$.get("/scrape22", function(data) {
window.location.reload();
});
});

// The astral force set
$(".scrape-new-23").on("click", function(event) {
event.preventDefault();
$.get("/scrape23", function(data) {
window.location.reload();
});
});

// Team dragons vanity
$(".scrape-new-24").on("click", function(event) {
event.preventDefault();
$.get("/scrape24", function(data) {
window.location.reload();
});
});

  // Crystal melody
$(".scrape-new-25").on("click", function(event) {
event.preventDefault();
$.get("/scrape25", function(data) {
window.location.reload();
});
});

// The mysterious fortune
$(".scrape-new-26").on("click", function(event) {
event.preventDefault();
$.get("/scrape26", function(data) {
window.location.reload();
});
});
// The raging tactic
$(".scrape-new-27").on("click", function(event) {
event.preventDefault();
$.get("/scrape13", function(data) {
window.location.reload();
});
});

// The raging tactic
$(".scrape-new-28").on("click", function(event) {
event.preventDefault();
$.get("/scrape14", function(data) {
window.location.reload();
});
});

// next-stage set
$(".scrape-new-29").on("click", function(event) {
event.preventDefault();
$.get("/scrape29", function(data) {
  window.location.reload();
});
});

// The astral force set
$(".scrape-new-30").on("click", function(event) {
event.preventDefault();
$.get("/scrape30", function(data) {
window.location.reload();
});
});

// Team dragons vanity
$(".scrape-new-31").on("click", function(event) {
event.preventDefault();
$.get("/scrape31", function(data) {
window.location.reload();
});
});

    // Crystal melody
$(".scrape-new-32").on("click", function(event) {
event.preventDefault();
$.get("/scrape32", function(data) {
window.location.reload();
});
});

// The mysterious fortune
$(".scrape-new-33").on("click", function(event) {
event.preventDefault();
$.get("/scrape33", function(data) {
window.location.reload();
});
});
// The raging tactic
$(".scrape-new-34").on("click", function(event) {
event.preventDefault();
$.get("/scrape34", function(data) {
window.location.reload();
});
});

// The raging tactic
$(".scrape-new-35").on("click", function(event) {
event.preventDefault();
$.get("/scrape35", function(data) {
window.location.reload();
});
});
// next-stage set
$(".scrape-new-36").on("click", function(event) {
event.preventDefault();
$.get("/scrape36", function(data) {
window.location.reload();
});
});

// The astral force set
$(".scrape-new-37").on("click", function(event) {
event.preventDefault();
$.get("/scrape37", function(data) {
window.location.reload();
});
});

// Team dragons vanity
$(".scrape-new-38").on("click", function(event) {
event.preventDefault();
$.get("/scrape38", function(data) {
window.location.reload();
});
});

  // Crystal melody
$(".scrape-new-39").on("click", function(event) {
event.preventDefault();
$.get("/scrape39", function(data) {
window.location.reload();
});
});

// The mysterious fortune
$(".scrape-new-40").on("click", function(event) {
event.preventDefault();
$.get("/scrape40", function(data) {
window.location.reload();
});
});
// The raging tactic
$(".scrape-new-41").on("click", function(event) {
event.preventDefault();
$.get("/scrape41", function(data) {
window.location.reload();
});
});

// The raging tactic
$(".scrape-new-42").on("click", function(event) {
event.preventDefault();
$.get("/scrape42", function(data) {
window.location.reload();
});
});

// next-stage set
$(".scrape-new-43").on("click", function(event) {
event.preventDefault();
$.get("/scrape43", function(data) {
window.location.reload();
});
});

// The astral force set
$(".scrape-new-44").on("click", function(event) {
event.preventDefault();
$.get("/scrape44", function(data) {
window.location.reload();
});
});

// Team dragons vanity
$(".scrape-new-45").on("click", function(event) {
event.preventDefault();
$.get("/scrape45", function(data) {
window.location.reload();
});
});

  // Crystal melody
$(".scrape-new-46").on("click", function(event) {
event.preventDefault();
$.get("/scrape46", function(data) {
window.location.reload();
});
});

// The mysterious fortune
$(".scrape-new-47").on("click", function(event) {
event.preventDefault();
$.get("/scrape47", function(data) {
window.location.reload();
});
});
// The raging tactic
$(".scrape-new-48").on("click", function(event) {
event.preventDefault();
$.get("/scrape48", function(data) {
window.location.reload();
});
});

// The raging tactic
$(".scrape-new-49").on("click", function(event) {
event.preventDefault();
$.get("/scrape49", function(data) {
window.location.reload();
});
});
// next-stage set
$(".scrape-new-50").on("click", function(event) {
event.preventDefault();
$.get("/scrape50", function(data) {
window.location.reload();
});
});

// The astral force set
$(".scrape-new-51").on("click", function(event) {
event.preventDefault();
$.get("/scrape51", function(data) {
window.location.reload();
});
});

// Team dragons vanity
$(".scrape-new-52").on("click", function(event) {
event.preventDefault();
$.get("/scrape52", function(data) {
window.location.reload();
});
});

// Crystal melody
$(".scrape-new-53").on("click", function(event) {
event.preventDefault();
$.get("/scrape53", function(data) {
window.location.reload();
});
});

// The mysterious fortune
$(".scrape-new-54").on("click", function(event) {
event.preventDefault();
$.get("/scrape54", function(data) {
window.location.reload();
});
});
// The raging tactic
$(".scrape-new-55").on("click", function(event) {
event.preventDefault();
$.get("/scrape55", function(data) {
window.location.reload();
});
});

// The raging tactic
$(".scrape-new-56").on("click", function(event) {
event.preventDefault();
$.get("/scrape56", function(data) {
window.location.reload();
});
});
// next-stage set
$(".scrape-new-57").on("click", function(event) {
  event.preventDefault();
  $.get("/scrape57", function(data) {
    window.location.reload();
  });
});

// The astral force set
$(".scrape-new-58").on("click", function(event) {
event.preventDefault();
$.get("/scrape58", function(data) {
  window.location.reload();
});
});

// Team dragons vanity
$(".scrape-new-59").on("click", function(event) {
event.preventDefault();
$.get("/scrape59", function(data) {
  window.location.reload();
});
});

      // Crystal melody
$(".scrape-new-60").on("click", function(event) {
event.preventDefault();
$.get("/scrape60", function(data) {
window.location.reload();
});
});

// The mysterious fortune
$(".scrape-new-61").on("click", function(event) {
event.preventDefault();
$.get("/scrape62", function(data) {
window.location.reload();
});
});
// The raging tactic
$(".scrape-new-63").on("click", function(event) {
event.preventDefault();
$.get("/scrape63", function(data) {
window.location.reload();
});
});

// The raging tactic
$(".scrape-new-64").on("click", function(event) {
event.preventDefault();
$.get("/scrape64", function(data) {
  window.location.reload();
});
});
// next-stage set
$(".scrape-new-65").on("click", function(event) {
event.preventDefault();
$.get("/scrape65", function(data) {
  window.location.reload();
});
});

// The astral force set
$(".scrape-new-66").on("click", function(event) {
event.preventDefault();
$.get("/scrape66", function(data) {
window.location.reload();
});
});

// Team dragons vanity
$(".scrape-new-67").on("click", function(event) {
event.preventDefault();
$.get("/scrape67", function(data) {
window.location.reload();
});
});

    // Crystal melody
$(".scrape-new-68").on("click", function(event) {
event.preventDefault();
$.get("/scrape68", function(data) {
window.location.reload();
});
});

// The mysterious fortune
$(".scrape-new-69").on("click", function(event) {
event.preventDefault();
$.get("/scrape69", function(data) {
window.location.reload();
});
});
// The raging tactic
$(".scrape-new-70").on("click", function(event) {
event.preventDefault();
$.get("/scrape70", function(data) {
window.location.reload();
});
});

// The raging tactic
$(".scrape-new-71").on("click", function(event) {
event.preventDefault();
$.get("/scrape71", function(data) {
window.location.reload();
});
});

// next-stage set
$(".scrape-new-72").on("click", function(event) {
event.preventDefault();
$.get("/scrape72", function(data) {
  window.location.reload();
});
});

// The astral force set
$(".scrape-new-73").on("click", function(event) {
event.preventDefault();
$.get("/scrape73", function(data) {
window.location.reload();
});
});

// Team dragons vanity
$(".scrape-new-74").on("click", function(event) {
event.preventDefault();
$.get("/scrape74", function(data) {
window.location.reload();
});
});

    // Crystal melody
$(".scrape-new-75").on("click", function(event) {
event.preventDefault();
$.get("/scrape75", function(data) {
window.location.reload();
});
});

// The mysterious fortune
$(".scrape-new-76").on("click", function(event) {
event.preventDefault();
$.get("/scrape76", function(data) {
window.location.reload();
});
});
// The raging tactic
$(".scrape-new-77").on("click", function(event) {
event.preventDefault();
$.get("/scrape77", function(data) {
window.location.reload();
});
});

// The raging tactic
$(".scrape-new-78").on("click", function(event) {
event.preventDefault();
$.get("/scrape78", function(data) {
window.location.reload();
});
});
// next-stage set
$(".scrape-new-79").on("click", function(event) {
event.preventDefault();
$.get("/scrape79", function(data) {
window.location.reload();
});
});

// The astral force set
$(".scrape-new-80").on("click", function(event) {
event.preventDefault();
$.get("/scrape80", function(data) {
window.location.reload();
});
});

// Team dragons vanity
$(".scrape-new-81").on("click", function(event) {
event.preventDefault();
$.get("/scrape81", function(data) {
window.location.reload();
});
});

  // Crystal melody
$(".scrape-new-82").on("click", function(event) {
event.preventDefault();
$.get("/scrape82", function(data) {
window.location.reload();
});
});

// The mysterious fortune
$(".scrape-new-83").on("click", function(event) {
event.preventDefault();
$.get("/scrape83", function(data) {
window.location.reload();
});
});
// The raging tactic
$(".scrape-new-84").on("click", function(event) {
event.preventDefault();
$.get("/scrape84", function(data) {
window.location.reload();
});
});

// The raging tactic
$(".scrape-new-85").on("click", function(event) {
event.preventDefault();
$.get("/scrape85", function(data) {
window.location.reload();
});
});

// next-stage set
$(".scrape-new-86").on("click", function(event) {
event.preventDefault();
$.get("/scrape86", function(data) {
  window.location.reload();
});
});

// The astral force set
$(".scrape-new-87").on("click", function(event) {
event.preventDefault();
$.get("/scrape87", function(data) {
window.location.reload();
});
});

// Team dragons vanity
$(".scrape-new-88").on("click", function(event) {
event.preventDefault();
$.get("/scrape88", function(data) {
window.location.reload();
});
});

    // Crystal melody
$(".scrape-new-89").on("click", function(event) {
event.preventDefault();
$.get("/scrape89", function(data) {
window.location.reload();
});
});

// The mysterious fortune
$(".scrape-new-90").on("click", function(event) {
event.preventDefault();
$.get("/scrape90", function(data) {
window.location.reload();
});
});
// The raging tactic
$(".scrape-new-91").on("click", function(event) {
event.preventDefault();
$.get("/scrape91", function(data) {
window.location.reload();
});
});

// The raging tactic
$(".scrape-new-92").on("click", function(event) {
event.preventDefault();
$.get("/scrape92", function(data) {
window.location.reload();
});
});
// next-stage set
$(".scrape-new-93").on("click", function(event) {
event.preventDefault();
$.get("/scrape93", function(data) {
window.location.reload();
});
});

// The astral force set
$(".scrape-new-94").on("click", function(event) {
event.preventDefault();
$.get("/scrape94", function(data) {
window.location.reload();
});
});

// Team dragons vanity
$(".scrape-new-95").on("click", function(event) {
event.preventDefault();
$.get("/scrape95", function(data) {
window.location.reload();
});
});

  // Crystal melody
$(".scrape-new-96").on("click", function(event) {
event.preventDefault();
$.get("/scrape96", function(data) {
window.location.reload();
});
});

// The mysterious fortune
$(".scrape-new-97").on("click", function(event) {
event.preventDefault();
$.get("/scrape97", function(data) {
window.location.reload();
});
});
// The raging tactic
$(".scrape-new-98").on("click", function(event) {
event.preventDefault();
$.get("/scrape98", function(data) {
window.location.reload();
});
});

// The raging tactic
$(".scrape-new-99").on("click", function(event) {
event.preventDefault();
$.get("/scrape99", function(data) {
window.location.reload();
});
});

// next-stage set
$(".scrape-new-100").on("click", function(event) {
event.preventDefault();
$.get("/scrape100", function(data) {
window.location.reload();
});
});

// The astral force set
$(".scrape-new-101").on("click", function(event) {
event.preventDefault();
$.get("/scrape101", function(data) {
window.location.reload();
});
});

// Team dragons vanity
$(".scrape-new-102").on("click", function(event) {
event.preventDefault();
$.get("/scrape102", function(data) {
window.location.reload();
});
});

  // Crystal melody
$(".scrape-new-103").on("click", function(event) {
event.preventDefault();
$.get("/scrape103", function(data) {
window.location.reload();
});
});

// The mysterious fortune
$(".scrape-new-104").on("click", function(event) {
event.preventDefault();
$.get("/scrape104", function(data) {
window.location.reload();
});
});
// The raging tactic
$(".scrape-new-105").on("click", function(event) {
event.preventDefault();
$.get("/scrape105", function(data) {
window.location.reload();
});
});

// The raging tactic
$(".scrape-new-106").on("click", function(event) {
event.preventDefault();
$.get("/scrape106", function(data) {
window.location.reload();
});
});
// next-stage set
$(".scrape-new-107").on("click", function(event) {
event.preventDefault();
$.get("/scrape107", function(data) {
window.location.reload();
});
});

// The astral force set
$(".scrape-new-108").on("click", function(event) {
event.preventDefault();
$.get("/scrape108", function(data) {
window.location.reload();
});
});

// Team dragons vanity
$(".scrape-new-109").on("click", function(event) {
event.preventDefault();
$.get("/scrape109", function(data) {
window.location.reload();
});
});

// Crystal melody
$(".scrape-new-110").on("click", function(event) {
event.preventDefault();
$.get("/scrape110", function(data) {
window.location.reload();
});
});

// The mysterious fortune
$(".scrape-new-111").on("click", function(event) {
event.preventDefault();
$.get("/scrape111", function(data) {
window.location.reload();
});
});
// The raging tactic
$(".scrape-new-112").on("click", function(event) {
event.preventDefault();
$.get("/scrape112", function(data) {
window.location.reload();
});
});

// The raging tactic
$(".scrape-new-113").on("click", function(event) {
event.preventDefault();
$.get("/scrape113", function(data) {
window.location.reload();
});
});

$(".scrape-new-114").on("click", function(event) {
  event.preventDefault();
  $.get("/scrape114", function(data) {
  window.location.reload();
  });
  });
  
  // The astral force set
  $(".scrape-new-115").on("click", function(event) {
  event.preventDefault();
  $.get("/scrape115", function(data) {
  window.location.reload();
  });
  });
  
  // Team dragons vanity
  $(".scrape-new-116").on("click", function(event) {
  event.preventDefault();
  $.get("/scrape116", function(data) {
  window.location.reload();
  });
  });
  
  // Crystal melody
  $(".scrape-new-117").on("click", function(event) {
  event.preventDefault();
  $.get("/scrape117", function(data) {
  window.location.reload();
  });
  });
  
  // The mysterious fortune
  $(".scrape-new-118").on("click", function(event) {
  event.preventDefault();
  $.get("/scrape118", function(data) {
  window.location.reload();
  });
  });
  // The raging tactic
  $(".scrape-new-119").on("click", function(event) {
  event.preventDefault();
  $.get("/scrape119", function(data) {
  window.location.reload();
  });
  });
  
  // The raging tactic
  $(".scrape-new-120").on("click", function(event) {
  event.preventDefault();
  $.get("/scrape120", function(data) {
  window.location.reload();
  });
  });
  // next-stage set
  $(".scrape-new-121").on("click", function(event) {
    event.preventDefault();
    $.get("/scrape121", function(data) {
      window.location.reload();
    });
  });
  
  // The astral force set
  $(".scrape-new-122").on("click", function(event) {
  event.preventDefault();
  $.get("/scrape122", function(data) {
    window.location.reload();
  });
  });
  
  // Team dragons vanity
  $(".scrape-new-123").on("click", function(event) {
  event.preventDefault();
  $.get("/scrape123", function(data) {
    window.location.reload();
  });
  });
  
        // Crystal melody
  $(".scrape-new-124").on("click", function(event) {
  event.preventDefault();
  $.get("/scrape124", function(data) {
  window.location.reload();
  });
  });
  
  // The mysterious fortune
  $(".scrape-new-125").on("click", function(event) {
  event.preventDefault();
  $.get("/scrape125", function(data) {
  window.location.reload();
  });
  });
  // The raging tactic
  $(".scrape-new-126").on("click", function(event) {
  event.preventDefault();
  $.get("/scrape126", function(data) {
  window.location.reload();
  });
  });
  
  // The raging tactic
  $(".scrape-new-127").on("click", function(event) {
  event.preventDefault();
  $.get("/scrape127", function(data) {
    window.location.reload();
  });
  });
  // next-stage set
  $(".scrape-new-128").on("click", function(event) {
  event.preventDefault();
  $.get("/scrape128", function(data) {
    window.location.reload();
  });
  });
  
  // The astral force set
  $(".scrape-new-129").on("click", function(event) {
  event.preventDefault();
  $.get("/scrape129", function(data) {
  window.location.reload();
  });
  });
  
  // Team dragons vanity
  $(".scrape-new-130").on("click", function(event) {
  event.preventDefault();
  $.get("/scrape130", function(data) {
  window.location.reload();
  });
  });
  
      // Crystal melody
  $(".scrape-new-131").on("click", function(event) {
  event.preventDefault();
  $.get("/scrape131", function(data) {
  window.location.reload();
  });
  });
  
  // The mysterious fortune
  $(".scrape-new-132").on("click", function(event) {
  event.preventDefault();
  $.get("/scrape132", function(data) {
  window.location.reload();
  });
  });
  // The raging tactic
  $(".scrape-new-133").on("click", function(event) {
  event.preventDefault();
  $.get("/scrape133", function(data) {
  window.location.reload();
  });
  });
  
  // The raging tactic
  $(".scrape-new-134").on("click", function(event) {
  event.preventDefault();
  $.get("/scrape134", function(data) {
  window.location.reload();
  });
  });
  
  // next-stage set
  $(".scrape-new-135").on("click", function(event) {
  event.preventDefault();
  $.get("/scrape135", function(data) {
    window.location.reload();
  });
  });
  
  // The astral force set
  $(".scrape-new-136").on("click", function(event) {
  event.preventDefault();
  $.get("/scrape136", function(data) {
  window.location.reload();
  });
  });
  
  // Team dragons vanity
  $(".scrape-new-137").on("click", function(event) {
  event.preventDefault();
  $.get("/scrape137", function(data) {
  window.location.reload();
  });
  });
  
      // Crystal melody
  $(".scrape-new-138").on("click", function(event) {
  event.preventDefault();
  $.get("/scrape138", function(data) {
  window.location.reload();
  });
  });
  
  // The mysterious fortune
  $(".scrape-new-139").on("click", function(event) {
  event.preventDefault();
  $.get("/scrape139", function(data) {
  window.location.reload();
  });
  });
  // The raging tactic
  $(".scrape-new-140").on("click", function(event) {
  event.preventDefault();
  $.get("/scrape140", function(data) {
  window.location.reload();
  });
  });
  
  // The raging tactic
  $(".scrape-new-141").on("click", function(event) {
  event.preventDefault();
  $.get("/scrape141", function(data) {
  window.location.reload();
  });
  });
  // next-stage set
  $(".scrape-new-142").on("click", function(event) {
  event.preventDefault();
  $.get("/scrape142", function(data) {
  window.location.reload();
  });
  });
  
  // The astral force set
  $(".scrape-new-143").on("click", function(event) {
  event.preventDefault();
  $.get("/scrape143", function(data) {
  window.location.reload();
  });
  });
  
  // Team dragons vanity
  $(".scrape-new-144").on("click", function(event) {
  event.preventDefault();
  $.get("/scrape144", function(data) {
  window.location.reload();
  });
  });
  
    // Crystal melody
  $(".scrape-new-145").on("click", function(event) {
  event.preventDefault();
  $.get("/scrape145", function(data) {
  window.location.reload();
  });
  });
  
  // The mysterious fortune
  $(".scrape-new-146").on("click", function(event) {
  event.preventDefault();
  $.get("/scrape146", function(data) {
  window.location.reload();
  });
  });
  // The raging tactic
  $(".scrape-new-147").on("click", function(event) {
  event.preventDefault();
  $.get("/scrape147", function(data) {
  window.location.reload();
  });
  });
  
  // The raging tactic
  $(".scrape-new-148").on("click", function(event) {
  event.preventDefault();
  $.get("/scrape148", function(data) {
  window.location.reload();
  });
  });
  
  // next-stage set
  $(".scrape-new-149").on("click", function(event) {
  event.preventDefault();
  $.get("/scrape149", function(data) {
    window.location.reload();
  });
  });
  
  // The astral force set
  $(".scrape-new-150").on("click", function(event) {
  event.preventDefault();
  $.get("/scrape150", function(data) {
  window.location.reload();
  });
  });
    // Team dragons vanity
    $(".scrape-new-151").on("click", function(event) {
      event.preventDefault();
      $.get("/scrape151", function(data) {
      window.location.reload();
      });
      });
  // Team dragons vanity
  $(".scrape-new-152").on("click", function(event) {
  event.preventDefault();
  $.get("/scrape152", function(data) {
  window.location.reload();
  });
  });
  
      // Crystal melody
  $(".scrape-new-153").on("click", function(event) {
  event.preventDefault();
  $.get("/scrape153", function(data) {
  window.location.reload();
  });
  });
  
  // The mysterious fortune
  $(".scrape-new-154").on("click", function(event) {
  event.preventDefault();
  $.get("/scrape154", function(data) {
  window.location.reload();
  });
  });
  // The raging tactic
  $(".scrape-new-155").on("click", function(event) {
  event.preventDefault();
  $.get("/scrape155", function(data) {
  window.location.reload();
  });
  });
  
  // The raging tactic
  $(".scrape-new-156").on("click", function(event) {
  event.preventDefault();
  $.get("/scrape156", function(data) {
  window.location.reload();
  });
  });
  // when the button to removed a saved article from the saved list, get the article ID and set its saved property back to false

  $(".unsave-btn").on("click", function(event) {
    var newUnsavedArticle = $(this).data();
    var id = $(this).attr("data-articleid");
    newUnsavedArticle.saved = false;
    $.ajax("/saved/" + id, {
      type: "PUT",
      data: newUnsavedArticle
    }).then(
      function(data) {
        location.reload();
      }
    );
  });

  // generate the text inside the notes modal
  function createModalHTML(data) {
    var modalText = data.title;
    $("#note-modal-title").text("Notes for article: " + data.title);
    var noteItem;
    var noteDeleteBtn;
    console.log("data notes legnth ", data.notes.length)
    for (var i = 0; i < data.notes.length; i++) {
      noteItem = $("<li>").text(data.notes[i].body);
      noteItem.addClass("note-item-list");
      noteItem.attr("id", data.notes[i]._id);
      //  noteItem.data("id", data.notes[i]._id);
      noteDeleteBtn = $("<button> Delete </button>").addClass("btn btn-danger delete-note-modal");
      noteDeleteBtn.attr("data-noteId", data.notes[i]._id);
      noteItem.prepend(noteDeleteBtn, " ");
      $(".notes-list").append(noteItem);
    }
  }

  // when the add note button is clicked on the saved articles page, show a modal. Empty the contents first.
  $(".note-modal-btn").on("click", function(event) {
    var articleId = $(this).attr("data-articleId");
    $("#add-note-modal").attr("data-articleId", articleId);
    $("#note-modal-title").empty();
    $(".notes-list").empty();
    $("#note-body").val("");
    $.ajax("/notes/article/" + articleId, {
      type: "GET"
    }).then(
      function(data) {
        createModalHTML(data);
      }
    );

    // show the modal
    $("#add-note-modal").modal("toggle");
  });

  // save a note into the database
  // TODO: add better form validation
  $(".note-save-btn").on("click", function(event) {
    event.preventDefault();
    var articleId = $("#add-note-modal").attr("data-articleId")
    var newNote = {
      body: $("#note-body").val().trim()
    }
    console.log(newNote);
    $.ajax("/submit/" + articleId, {
      type: "POST",
      data: newNote
    }).then(
      function(data) {}
    );
  });

  // delete the note that was clicked and remove the whole <li> because the text and delete button are included
  $(document).on("click", ".delete-note-modal", function(event) {
    var noteID = $(this).attr("data-noteId");

    $.ajax("/notes/" + noteID, {
      type: "GET"
    }).then(
      function(data) {
        $("#" + noteID).remove();
      })
  });

});