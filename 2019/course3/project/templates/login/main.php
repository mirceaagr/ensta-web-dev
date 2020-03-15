<div class="row">
    <div class="col-md-4 col-md-offset-4">
        <div class="well">
            <form action="<?=htmlspecialchars($_SERVER['PHP_SELF'])?>" method="POST">
                <h2>Login</h2>
                <div class="form-group">
                    <label for="username">Username:</label>
                    <input type="text" name="username" id="username" class="form-control"/>    
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" name="password" id="password" class="form-control"/>    
                </div>
               
                
                <input class="btn btn-info" type="submit" value="Sign In"/>
            </form>
          
             <?php if (isset($_SESSION['err'])): ?>
                     <div class="space-10"></div>
                    <div class="alert alert-danger">
                        <?=$_SESSION['err']?>
                    </div>
                <?php endif; ?>
        </div>
    </div>
</div>
