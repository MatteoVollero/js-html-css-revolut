$("#aiuto").click(
  function(){
    if($(".off").hasClass("off")){
      console.log("Ha la classe off");
      $("#menu").removeClass("off");
    }else{
      console.log("Non ha la class off");
      $("#menu").addClass("off");
    }
  }
);
