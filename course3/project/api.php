<?php
    require("lib/functions.php");
    $allowedRoutes = [
        'sessions',
        'services',
        'skills',
        'resumes',
        'portfolios',
        'contacts'
    ];
    header('Content-Type: application/json');
    echo json_encode($_SESSION);


?>