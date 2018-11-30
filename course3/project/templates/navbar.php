
    	<div class="container-fluid">
			<div class="row">
				
				<nav class="navbar navbar-default navbar-fixed-top" id="main-navbar">
				  <div class="container">
				    <!-- Brand and toggle get grouped for better mobile display -->
				    <div class="navbar-header">
				      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
				        <span class="sr-only">Toggle navigation</span>
				        <span class="icon-bar"></span>
				        <span class="icon-bar"></span>
				        <span class="icon-bar"></span>
				      </button>
				      <a class="navbar-brand" href="#">Mircea</a>
				    </div>

				    <!-- Collect the nav links, forms, and other content for toggling -->
				    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				      <ul class="nav navbar-nav">
				  		<li class="active"><a href="#about-me" ><i class="fa fa-home"></i></a></li>
				  		<li><a href="#services">Services</a></li>
				  		<li><a href="#skills">Skills</a></li>
				        <li><a href="#resume">Resume</a></li>
				        <li><a href="#portfolio">Portfolio</a></li>
				        <li><a href="#contact">Contact</a></li>
				      </ul>

				       <ul class="nav navbar-nav navbar-right">
				       	<?php if (isset($_SESSION['username'])): ?>
					       <li> <a href=""><i class="fa fa-user"></i><span> &nbsp;<?=$_SESSION['username']?></span></a></li>
					       <li> <a href="<?=$_SERVER['PHP_SELF']?>?logout">Logout</a> </li>
					    <?php else:?>
					    	<li><a href="login.php">Login</a></li>
				       	<?php endif ?>
				       	
				        <li><a href=""><i class="fab fa-facebook"></i></a></li>
				        <li><a href=""><i class="fab fa-twitter"></i></a></li>
				        <li><a href=""><i class="fab fa-snapchat"></i></a></li>
				        <li><a class="btn btn-warning btn-hire">Hire me <i class="fa fa-paper-plane"></i></a></li>				       
				      </ul>
				    </div><!-- /.navbar-collapse -->
				  </div><!-- /.container-fluid -->
				</nav>

			</div><!-- /.row -->
		</div><!-- /.container-fluoid -->	
