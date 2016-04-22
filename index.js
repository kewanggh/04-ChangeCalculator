$(document).ready(function(){
	$("#calc").click(function(){
		var x = $("#saleTotal").val();
		var y = $("#totalReceived").val();
		if(x !== "" && y !== ""){
		x = parseFloat(x);
		y = parseFloat(y);
		var changeAmount = (x - y).toFixed(2);
		var quarter = 0.25;
		var dime = 0.10;
		var nickel = 0.05;
		var penny = 0.01;

		var decimalPart = parseInt(parseFloat(changeAmount).toString().split('.')[1], 10);
		var dollarPart = parseInt(parseFloat(changeAmount).toString().split('.')[0], 10);
		
		var remAmount;
		var remainingDec;
		
		var quarterRolls = Math.trunc(decimalPart / 25);
		remAmount = changeAmount - (quarterRolls * 0.25);
		remainingDec = decimalPart - (quarterRolls * 25);
		
		var dimeRolls = Math.trunc(remainingDec/10);
		remAmount -= dimeRolls * 0.10;
		remainingDec -=dimeRolls * 10;

		var nickelRolls = Math.trunc(remainingDec/5);
		remAmount -= nickelRolls * 0.05;
		remainingDec -= nickelRolls * 5;

		var pennyRolls = Math.trunc(remainingDec/1);
		

		$("#secondContainer p").text(dollarPart.toString());
		$("#left p").text(quarterRolls);
		$("#middle2 p").text(nickelRolls);
		$("#middle p").text(dimeRolls);
		$("#right p").text(pennyRolls);
		}
	
	});

	$("#clear").click(function(){
		$("#saleTotal").val("");
		$("#totalReceived").val("");
		$("#secondContainer p").text(0);
		$("#left p").text(0);
		$("#middle2 p").text(0);
		$("#middle p").text(0);
		$("#right p").text(0);
	});

	$("input").on("change keyup click paste", function(){
		
		var x = $("#saleTotal").val();
		var y = $("#totalReceived").val();
		if(x !== "" && y !== "") {
		x = parseFloat(x);
		y = parseFloat(y);
		var changeAmount = (x - y).toFixed(2);
	
		var quarter = 0.25;
		var dime = 0.10;
		var nickel = 0.05;
		var penny = 0.01;
		var decimalPart;
		
		var dollarPart = parseInt(parseFloat(changeAmount).toString().split('.')[0], 10);
			decimalPart = parseInt(parseFloat(changeAmount).toString().split('.')[1], 10);
			if(isNaN(decimalPart)) {
			$("#secondContainer p").text(dollarPart.toString());
			$("#left p").text(0);
			$("#middle2 p").text(0);
			$("#middle p").text(0);
			$("#right p").text(0);
		} else {
		decimalPart = parseInt(parseFloat(changeAmount).toString().split('.')[1], 10);
		var remAmount;
		var remainingDec;
		
		var quarterRolls = Math.trunc(decimalPart / 25);
		remAmount = changeAmount - (quarterRolls * 0.25);
		remainingDec = decimalPart - (quarterRolls * 25);
		
		var dimeRolls = Math.trunc(remainingDec/10);
		remAmount -= dimeRolls * 0.10;
		remainingDec -=dimeRolls * 10;

		var nickelRolls = Math.trunc(remainingDec/5);
		remAmount -= nickelRolls * 0.05;
		remainingDec -= nickelRolls * 5;

		var pennyRolls = Math.trunc(remainingDec/1);
		
		
		$("#left p").text(quarterRolls);
		$("#middle2 p").text(nickelRolls);
		$("#middle p").text(dimeRolls);
		$("#right p").text(pennyRolls);
		$("#secondContainer p").text(dollarPart.toString());
		} 
		}
	});

	
	 $('#numpad').click(function(){
          $('#n_keypad').fadeToggle('fast');
      });
      $('.done').click(function(){
          $('#n_keypad').hide('fast');
      });
      $('.numero').click(function(){
        if (!isNaN($('#saleTotal').val())) {
           if (parseInt($('#saleTotal').val()) == 0) {
             $('#saleTotal').val($(this).text());
           } else {
             $('#saleTotal').val($('#saleTotal').val() + $(this).text());
           }
        }
      });
      $('.neg').click(function(){
          if (!isNaN($('#saleTotal').val()) && $('#saleTotal').val().length > 0) {
            if (parseInt($('#saleTotal').val()) > 0) {
              $('#saleTotal').val(parseInt($('#saleTotal').val()) - 1);
            }
          }
      });
      $('.pos').click(function(){
          if (!isNaN($('#saleTotal').val()) && $('#saleTotal').val().length > 0) {
            $('#saleTotal').val(parseInt($('#saleTotal').val()) + 1);
          }
      });
      $('.del').click(function(){
          $('#saleTotal').val($('#saleTotal').val().substring(0,$('#saleTotal').val().length - 1));
      });
      $('.clear').click(function(){
          $('#saleTotal').val('');
      });
      $('.zero').click(function(){
        if (!isNaN($('#saleTotal').val())) {
          if (parseInt($('#saleTotal').val()) != 0) {
            $('#saleTotal').val($('#myInput').val() + $(this).text());
          }
        }
      });
    $('#clear_input').click(function () {
    $('#saleTotal').focus();
    $('#saleTotal').val('');
	}); 
   
});
