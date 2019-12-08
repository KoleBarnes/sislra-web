function expire() {
  // Add One Day To The Date
  var currentTime = new Date();
  var success  = new Date('10/6/2019');
  var content = new Date('04/08/2019');
  var content2 = new Date('04/06/2020');
  var SilentAuctionEnd = new Date('12/08/2019');

  /*  if(currentTime.getTime() < success.getTime() ) {
    $('#success').show();
  } */
  
/*   if((success.getTime() < currentTime.getTime() ) && (currentTime.getTime() < content.getTime() )) {
    $('#content').show();
  }  */

  if(currentTime.getTime() < content2.getTime() ) {
    $('#content2').show();
  }

  /* if (currentTime.getTime() < SilentAuctionEnd.getTime() ) {
    $('#SilentAuctionEnd').show(); //SilentAuction divs are in index and events. Check both! 
  } */
  
};

$('#success').hide();
$('#content').hide();
$('#content2').hide();
$('#SilentAuctionEnd').hide();

expire();