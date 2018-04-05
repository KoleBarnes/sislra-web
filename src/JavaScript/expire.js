function expire() {

  var now = new Date();
  var success  = new Date('06/12/2017');
  var content = new Date('04/10/2018');
  var content2 = new Date('04/29/2018');
  
  // var expiry2 = new Date('04/22/2017 12:00 AM')

  if(now.getTime() < success.getTime() ) {
    $('#success').show();
  }
  
  //&& (now.getTime() < expiry2.getTime() )

  if(now.getTime() < content.getTime() ) {
    $('#content').show();
  }

  if (now.getTime() < content2.getTime() ) {
    $('#content2').show();
  }
  
};

$('#success').hide();
$('#content').hide();
$('#content2').hide();

expire();