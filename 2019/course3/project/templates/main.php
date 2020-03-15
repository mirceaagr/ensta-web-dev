
		<div class="container" id="main">
			<div class="row">
                <?php require("sections/sidebar.php")?>
				<div class="col-md-9 col-sm-12 mainbody">

                    <?php require("sections/carousel.php")?>
				    <?php require("sections/about.php")?>
					<?php require("sections/services.php")?>
					<?php require("sections/skills.php")?>
					<?php require("sections/resume.php")?>
					<?php require("sections/portfolio.php")?>
					<?php require("sections/contact.php")?>

					<hr />
					<footer>
						<p>Mircea Agrigoroaie &copy; <?=$year?> -> Visitor no.<?php echo $visitor?></p>
					</footer>

				</div><!-- /.col-md-9 col-sm-12 -->
			</div><!-- /.row -->
		</div>