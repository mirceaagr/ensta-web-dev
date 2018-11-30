
					<section class="row" id="contact">
						<h2>Contact</h2>
						<?php if(isset($_SESSION['mailSent']) AND $_SESSION['mailSent']):?>
							<div class="alert alert-success">
								Mail has been sent succesfully
							</div>
						<?php endif;?>
						<div class="col-md-6 col-sm-12">
							<form action="<?=htmlspecialchars($_SERVER['PHP_SELF'])?>" method="POST">
								<div class="form-group">
									<input type="hidden" name="contactForm"/>
								    <label for="email">Email address</label>
								    <input type="email" class="form-control" name="email" id="email" placeholder="Email">
								  </div>
								<div class="form-group">
									<label for="name">Your Name</label>
									<input type="text" name="name" class="form-control" required/>
								</div><!-- /.form-group -->
								
						</div><!-- /.col-md-6 col-sm-12 -->
						<div class="col-md-6 col-sm-12">
							<div class="form-group">
									<label for="message">Message</label>
									<textarea name="message" id="message" cols="30" rows="3" class="form-control"></textarea>
								</div><!-- /.form-group -->
								<div class="form-group">
									<div class="checkbox">
								    <label for="checkRobot">
								      <input type="checkbox" id="checkRobot"> Not a robot
								    </label>
								  </div>
								</div><!-- /.form-group -->
								<input type="submit" class="btn btn-default" value="Send" />
							</form>
						</div><!-- /.col-md-6 col-sm-12 -->
					</section><!-- /#contact.row -->