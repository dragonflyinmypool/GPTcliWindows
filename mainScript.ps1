
$theFulltext = ""

foreach ($arg in $args) {
    $theFulltext += $arg + " "
}

$dataFilePath = Join-Path -Path $PSScriptRoot -ChildPath "\index.js"


$CapitalizedText = "node $dataFilePath $theFulltext"
$Output = Invoke-Expression $CapitalizedText

Write-Host "$Output" -ForegroundColor Green