param (
    [string[]]$InputArgs
)

# $CapitalizedText = $InputText.ToUpper()
$CapitalizedText = "node C:\Users\jhein\Desktop\powerShell\index.js $InputText"
$Output = Invoke-Expression $CapitalizedText


Write-Host "$Output"