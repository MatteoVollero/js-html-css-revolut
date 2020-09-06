$(document).ready(
  function(){


    $("#tariffazione").mouseenter(
      function(){
        console.log("mouse entra");
        $("#tariffazione-menu").removeClass("off");
      });


    $("#tariffazione").mouseleave(
      function(){
        console.log("mouse esce");
        $("#tariffazione-menu").addClass("off");
      });


      $("#conti").mouseenter(
        function(){
          console.log("mouse entra");
          $("#conti-menu").removeClass("off");
        });


      $("#conti").mouseleave(
        function(){
          console.log("mouse esce");
          $("#conti-menu").addClass("off");
        });


      $("#prodotti").mouseenter(
        function(){
          console.log("mouse entra");
          $("#prodotti-menu").removeClass("off");
        });


      $("#prodotti").mouseleave(
        function(){
          console.log("mouse esce");
          $("#prodotti-menu").addClass("off");
        });

        $("#azienda").mouseenter(
          function(){
            console.log("mouse entra");
            $("#azienda-menu").removeClass("off");
          });


        $("#azienda").mouseleave(
          function(){
            console.log("mouse esce");
            $("#azienda-menu").addClass("off");
          });

          $("#aiuto").mouseenter(
            function(){
              console.log("mouse entra");
              $("#aiuto-menu").removeClass("off");
            });


          $("#aiuto").mouseleave(
            function(){
              console.log("mouse esce");
              $("#aiuto-menu").addClass("off");
            });

  });
