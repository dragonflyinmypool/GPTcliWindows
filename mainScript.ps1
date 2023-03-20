
$theFulltext = ""

foreach ($arg in $args) {
    $theFulltext += $arg + " "
}

$CapitalizedText = "node C:\Users\jhein\Desktop\powerShell\index.js $theFulltext"
$Output = Invoke-Expression $CapitalizedText

Write-Host "$Output" -ForegroundColor Green