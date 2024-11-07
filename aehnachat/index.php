<?php

$credentials = array(
    'IFDoop' => 'grrg', // Replace with your desired username and password combinations
    'Roy' => 'roy',
    'Mama' => 'mama',
    'admin'=> 'adm1n'

    // Add more username and password combinations as needed
);

//we should add pings, like @IFDoop
  session_start(); 
 
if(isset($_GET['logout'])){    
     
    //Simple exit message
    $logout_message = "<div class='msgln'><span class='left-info'><b class='user-name-left'>". $_SESSION['name'] ."</b> has left the chat</span><br></div>";
    file_put_contents("log.html", $logout_message, FILE_APPEND | LOCK_EX);
     
    session_destroy();
    header("Location: index.php"); //Redirect the user
}
 
if (isset($_POST['enter'])) {
    $username = $_POST['name'];
    $password = $_POST['password'];

    if (array_key_exists($username, $credentials) && $credentials[$username] === $password) {
        $_SESSION['name'] = htmlspecialchars($username, ENT_QUOTES, 'UTF-8');
    } else {
        echo '<span class="error">Invalid credentials</span>';
    }
}

 
function loginForm(){
    echo
    ' <div class=loginform>   <h2>Please Login to continue</h2>
    <br>
    <form action="index.php" method="post">
      <label for="name">Username &mdash;</label>
      <input type="text" name="name" id="name" required />
      <label for="password">Password &mdash;</label>
      <input type="password" name="password" id="password" required />
      <input type="submit" name="enter" id="enter" value="Login" />
    </form>
  </div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div>';
} function family(){
  echo
  '<a href="/family/index.php"><button>FAMILY CHAT</button></a>';
}
 
?>
 

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[ANO] Aehnaland</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <nav class="navbar"> 
        <ul class="navbar-list"> 
            <li class="navbar-item">
                <a href="../">Home</a>
            </li> 
            <li class="navbar-item dropdown"> 
                <a href="javascript:void(0)" class="dropdown-toggle">Nation Info</a> 
                <ul class="dropdown-menu"> 
                    <li class="dropdown-item">
                        <a href="../undercave">(UCA) Undercave</a>
                    </li>
                    <li class="dropdown-item">
                        <a href="/">(ANO) Anorca</a>
                    </li>
                    
                </ul>
            </li>
            <li class="navbar-item dropdown">
                <a href="javascript:void(0)" class="dropdown-toggle">User Info</a>
                <ul class="dropdown-menu">
                    <li class="dropdown-item">
                        <a href="../bio">Bio</a>
                    </li>
                    <li class="dropdown-item">
                        <a href="../proj">Projects</a>
                    </li>
                </ul>
            </li>
            <li class="navbar-item">
                <a href="../contact">Contact</a>
            </li>
        </ul>
    </nav>
    <h1>Aehnachat/aehnachat [BETA]</h1>
</body>
</html>
