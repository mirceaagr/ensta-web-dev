
				<!-- Sidebar -->
				<div class="col-md-3 col-sm-12 sidebar" >
					<div data-spy="affix" id="sidebar-content">
						<?php if (isset($_SESSION['username'])): ?>
							<form action="<?=htmlspecialchars($_SERVER['PHP_SELF'])?>" method="GET">
							
										<div class="form-group col-md-8" style="padding:0">
										<select class="form-control" name="theme" id="theme">
											<?php foreach ($availableThemes as $th): ?>
												<option value="<?=$th?>" <?=$theme == $th? 'selected=selected':'' ?> ><?=$th?></option>
											<?php endforeach; ?>
										</select>	
									</div>
									<div class="col-md-4" style="padding:0">
										<input type="submit" class="btn btn-block" value="Change"/>	
									</div>
										
							
								
							</form>
						
						<?php endif; ?>
						
						<h1>Mircea Agrigoroaie</h1>
						<span id="person-title"><i class="fa fa-code"></i> Web Developer</span>
						<div class="image">
							<img class="img img-responsive img-circle img-thumbnail" src="https://picsum.photos/g/200/200" alt="me" />
						</div><!-- /.image -->
						<ul class="list-group">
							  <li class="list-group-item list-group-item-warning">Address: Bdv. de Paris</li>
							  <li class="list-group-item list-group-item-warning">Phone: +33 055 555 555</li>
							  <li class="list-group-item list-group-item-warning">Job: Web Developer</li>
							  <li class="list-group-item list-group-item-warning">Email: some@email.com</li>
							  <li class="list-group-item list-group-item-warning">Skype: mySkype</li>
						</ul>
						
						<button class="btn btn-danger">Download Resume &nbsp;<i class="fa fa-download"></i></button>
						
						
					</div>
					
				</div><!-- /.col-md-3 col-sm-12 -->