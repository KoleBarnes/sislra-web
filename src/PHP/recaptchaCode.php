<?php 
if (isset($_POST['submit'])) {
    $secret = '6LdL_hgUAAAAAFQvWs1d3NzRGYswjDbuJoKMa5Tn';
    $response = $_POST['g-recaptcha-response'];
    $remoteip = $_SERVER['REMOTE_ADDR'];
    
    $url = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=$response&remoteip=$remoteip");
    $result = json_decode($url, TRUE);
    if ($result['success'] == 1) {
        echo $_POST['myreq'];
        
    }
}
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Google reCAPTCHA</title>
</head>

<body>
    <br>
    <form action="" method="post">
        <input type="text" name="myreq"><br>
        <div class="g-recaptcha" data-sitekey="6LdL_hgUAAAAAKTHbHpl-WDhxJERT-45CSuCm1Vm"></div>
        <input type="submit" name="submit" value="Send Request!">
    </form>
</body>
<script src='https://www.google.com/recaptcha/api.js'></script>
</html>