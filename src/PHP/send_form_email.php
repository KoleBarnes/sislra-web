<?php
if (isset($_POST['submit'])) { //email submit
    $secret = '6LdL_hgUAAAAAFQvWs1d3NzRGYswjDbuJoKMa5Tn';
    $response = $_POST['g-recaptcha-response'];
    $remoteip = $_SERVER['REMOTE_ADDR'];
    
    $url = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=$response&remoteip=$remoteip");
    $result = json_decode($url, TRUE);
    if ($result['success'] == 1) {
       
     /* // EDIT THE 2 LINES BELOW AS REQUIRED
      $email_to = "kbarnes261@gmail.com";
      $email_subject = "SISLRA Email Sign up Test";
   
      function died($error) {
          // your error code can go here
          echo "We are very sorry, but there were error(s) found with the form you submitted. ";
          echo "These errors appear below.<br /><br />";
          echo $error."<br /><br />";
          echo "Please go back and fix these errors.<br /><br />";
          die();
      }
   
      // validation expected data exists
      if(!isset($_POST['first_name']) ||  !isset($_POST['last_name']) ||  !isset($_POST['email'])) {
          died('We are sorry, but there appears to be a problem with the form you submitted.');       
      }
   
      $first_name = $_POST['first_name']; // required
      $last_name = $_POST['last_name']; // required
      $email_from = $_POST['email']; // required
   
      $error_message = "";
      $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
   
      if(!preg_match($email_exp,$email_from)) {
        $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
      }
     
        $string_exp = "/^[A-Za-z .'-]+$/";
     
      if(!preg_match($string_exp,$first_name)) {
        $error_message .= 'The First Name you entered does not appear to be valid.<br />';
      }
     
      if(!preg_match($string_exp,$last_name)) {
        $error_message .= 'The Last Name you entered does not appear to be valid.<br />';
      }
     
      if(strlen($error_message) > 0) {
        died($error_message);
      }
     
      $email_message = "Form details below.\n\n";

       
      function clean_string($string) {
        $bad = array("content-type","bcc:","to:","cc:","href");
        return str_replace($bad,"",$string);
      }

      $email_message .= "First Name: ".clean_string($first_name)."\n";
      $email_message .= "Last Name: ".clean_string($last_name)."\n";
      $email_message .= "Email: ".clean_string($email_from)."\n";
       
      // create email headers
      $headers = 'From: '.$email_from."\r\n".
      'Reply-To: '.$email_from."\r\n" .
      'X-Mailer: PHP/' . phpversion();
      @mail($email_to, $email_subject, $email_message, $headers); */
      
      echo $_POST['myreq'];
      header('Location: http://www.sislra.ca');
      die;
    }
  }
?>
 
<!doctype html>

<html lang="en">

<head>

  <title>SISLRA/Email Sign Up</title>
  <link rel="icon" href="/Favicon/16ChristmasTree.ico">

  <!-- CSS -->
  <link rel="stylesheet" href="/Bootstrap/css/bootstrap.css">
  <link rel="stylesheet" href="/Bootstrap/css/bootstrap.min.css">
  <link rel="stylesheet" href="/Bootstrap/css/bootstrap-theme.css">
  <link rel="stylesheet" href="/Bootstrap/css/bootstrap-theme.min.css">
  
  <link rel="stylesheet" href="/Glyphicons/glyphicons-social/web/html_css/css/glyphicons-social.css">
  <link rel="stylesheet" href="/Glyphicons/glyphicons-filetypes/web/html_css/css/glyphicons-filetypes.css">
  <link rel="stylesheet" href="/Glyphicons/glyphicons/web/html_css/css/glyphicons.css">

  <link rel="stylesheet" href="/CSS/SISLRA.css">
  
  <script src='https://www.google.com/recaptcha/api.js'></script>
  <script src="/Bootstrap/js/bootstrap.js"></script>
  <script src="/Bootstrap/js/bootstrap.min.js"></script>
  
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
  <script src='http://cdnjs.cloudflare.com/ajax/libs/bootstrap-validator/0.4.5/js/bootstrapvalidator.min.js'></script>

</head>

<body>

<div id="header">
<img src="/WebBanner/WebBanner.png" alt="SISLRA" width="350" style="margin-left: 48%; margin-top: 10%;">
<div>

<div id="center" style="text-align: center; margin-top: 2.5%; margin-left: 50%;">
  
  <form class="form-horizontal" method="post"  id="reg_form" action="" > <!-- action="/PHP/send_form_email.php" -->
    <fieldset>
    
      <legend style="color:#FFF;"> Email Sign Up </legend>
      
      <!-- Text input-->
      
      <div class="form-group">
        <div class="inputGroupContainer">
          <div class="input-group"> <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
            <input type="text" name="first_name" maxlength="20" placeholder="First Name (Required)" class="form-control">
          </div>
        </div>
      </div>
      
      <!-- Text input-->
      
      <!-- <div class="form-group">
        <div class="inputGroupContainer">
          <div class="input-group"> <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
            <input type="text" name="last_name" maxlength="20" placeholder="Last Name (Required)" class="form-control">
          </div>
        </div>
      </div>

      <!-- Text input-->
      <!-- <div class="form-group">
        <div class="inputGroupContainer">
          <div class="input-group"> <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
            <input type="text" name="email" maxlength="50" placeholder="E-Mail Address (Required)" class="form-control">
          </div>
        </div>
      </div> -->
     
      <div class="g-recaptcha" data-sitekey="6LdL_hgUAAAAAKTHbHpl-WDhxJERT-45CSuCm1Vm"></div>
  
      <br>
    
      <!-- Button -->
      <div class="form-group">
        <button type="submit" value="submit" class="btn btn-warning" >Send <span class="glyphicon glyphicon-send"></span></button>
      </div>
    </fieldset>
  </form>
  
  <script type="text/javascript">
 
   $(document).ready(function() {
    $('#reg_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            first_name: {
                validators: {
                        stringLength: {
                        min: 2,
                    },
                        notEmpty: {
                        message: 'Your First Name Is Required!'
                    }
                }
            },
             last_name: {
                validators: {
                     stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Your Last Name Is Required!'
                    }
                }
            },
	 email: {
                validators: {
                    notEmpty: {
                        message: 'Your Email Address Is Required!'
                    },
                    emailAddress: {
                        message: 'Invalid Email Address!'
                    }
                }
            },        
            }
        })
		
 	
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#reg_form').data('bootstrapValidator').resetForm();
 
            // Prevent form submission
            e.preventDefault();
 
            // Get the form instance
            var $form = $(e.target);
 
            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');
 
            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
});
 
</script>
  
</div> <!-- End Of -->

</body>

</html>