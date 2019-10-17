function expire() {

  var currentTime = new Date();
  var expiry  = new Date('10/6/2019');
  var SilentAuctionEnd = new Date('12/08/2019');
  var expiry2 = new Date('04/08/2019');
  
  // var expiry2 = new Date('04/22/2017 12:00 AM')

  /*  if(currentTime.getTime() < expiry.getTime() ) {
    $('#success').show();
  } */
  
/*   if((expiry.getTime() < currentTime.getTime() ) && (currentTime.getTime() < expiry2.getTime() )) {
    $('#content').show();
  }  */

  if (currentTime.getTime() < SilentAuctionEnd.getTime() ) {
    $('#SilentAuctionEnd').show();
  }
  
};

$('#success').hide();
$('#content').hide();
$('#SilentAuctionEnd').hide();

expire();