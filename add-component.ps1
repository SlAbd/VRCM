# Script pour ajouter des composants shadcn
# Usage: .\add-component.ps1 button

param(
    [Parameter(Mandatory=$true)]
    [string]$ComponentName
)

Write-Host " Installation du composant shadcn: $ComponentName" -ForegroundColor Cyan
npx shadcn@latest add $ComponentName

if ($LASTEXITCODE -eq 0) {
    Write-Host " Composant $ComponentName installé avec succès !" -ForegroundColor Green
} else {
    Write-Host " Erreur lors de l'installation" -ForegroundColor Red
}
