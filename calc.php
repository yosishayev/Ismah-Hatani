<?php
$date = $_GET['date'];

// Function to calculate remaining time
function calculateRemainingTime($weddingDate)
{
    // Get today's date
    $today = new DateTime();

    // Calculate the remaining time
    $remainingTime = $today->diff($weddingDate);

    return $remainingTime;
}

// Wedding date input
$weddingDate = new DateTime($date);

// Check if the entered date is before today
if ($weddingDate < new DateTime()) {
    echo "yay you already married.";
} else {
    // Calculate remaining time
    $remainingTime = calculateRemainingTime($weddingDate);

    // Define an array of time units
    $timeUnits = array(
        'Years' => $remainingTime->y,
        'Months' => $remainingTime->m,
        'Days' => $remainingTime->d,
        'Hours' => $remainingTime->h,
        'Minutes' => $remainingTime->i,
        'Seconds' => $remainingTime->s
    );

    // Display the remaining time for each time unit
    echo "Time remaining to your dream Wedding:\n";
    foreach ($timeUnits as $unit => $value) {
        echo $unit . ': ' . $value . "\n";
    }
}

?>
