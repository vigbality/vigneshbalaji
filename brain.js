$(function() {

    $(window).scroll(function() {
  
      // var mass = Math.min(20, 1+0.005*$(this).scrollTop());
      var mass = 1+0.005*$(this).scrollTop();
      $('#expandable').css('transform', 'scale(' + mass + ')');
      
      

      if(mass>8){
        $("#expandable").hide();
        $("#expandable").css("visibility", "hidden");
      }
      else{
        $("#expandable").show();
        $("#expandable").css("visibility", "visible");
      }
      
      if(mass>11 && mass<16){
        var heading = 1+0.0013*$(this).scrollTop();
        $('.t5').css('transform', 'scale(' + heading + ')');
        console.log("visi");
      }
      else if(mass>16){
        $('.t5').css('transform', 'scale(' + 1 + ')');
      }
      else{
        $('.t5').css('transform', 'scale(' + 1 + ')');
      }

      if(mass>16 && mass<21){
        var heading = 1+0.0008*$(this).scrollTop();
        $('.t7').css('transform', 'scale(' + heading + ')');
        console.log("visi");
      }
      else if(mass>22){
        $('.t7').css('transform', 'scale(' + 1 + ')');
      }
      else{
        $('.t7').css('transform', 'scale(' + 1 + ')');
      }


    });
  });