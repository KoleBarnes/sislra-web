function expire() {

  var current = new Date();
  var expiry  = new Date('10/01/2018');
  var expiry2 = new Date('04/10/2018');
  var expiry3 = new Date('04/29/2018');
  
  // var expiry2 = new Date('04/22/2017 12:00 AM')

  if(current.getTime() < expiry.getTime() ) {
    $('#success').show();
  }
  
  if((expiry.getTime() < current.getTime() ) && (current.getTime() < expiry2.getTime() )) {
    $('#content').show();
  }

  if (current.getTime() < expiry3.getTime() ) {
    $('#content2').show();
  }
  
};

$('#success').hide();
$('#content').hide();
$('#content2').hide();

expire();