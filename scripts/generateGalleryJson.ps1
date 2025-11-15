# Script to generate gallery JSON files organized by folders

function GenerateCategoryJson {
    param(
        [string]$CategoryName,
        [string]$BasePath,
        [string]$OutputFile
    )
    
    $folders = Get-ChildItem -Path $BasePath -Directory
    $result = @()
    
    foreach ($folder in $folders) {
        $images = Get-ChildItem -Path $folder.FullName -Include *.jpg,*.JPG,*.jpeg,*.JPEG,*.png,*.PNG | Sort-Object Name
        if ($images.Count -gt 0) {
            $thumbnail = "/gallery/" + $BasePath.Replace("public/gallery/", "") + "/" + $folder.Name + "/" + $images[0].Name
            $imageList = $images | ForEach-Object { "/gallery/" + $BasePath.Replace("public/gallery/", "") + "/" + $folder.Name + "/" + $_.Name }
            
            $result += @{
                folderName = $folder.Name
                thumbnail = $thumbnail
                images = $imageList
            }
        }
    }
    
    $result | ConvertTo-Json -Depth 10 | Out-File -FilePath $OutputFile -Encoding UTF8
    Write-Host "Generated: $OutputFile"
}

# Generate JSON files
GenerateCategoryJson -CategoryName "Workshop Sessions" -BasePath "public/gallery/drone workshop" -OutputFile "data/Workshop-Sessions.json"
GenerateCategoryJson -CategoryName "Competition Winners" -BasePath "public/gallery/Hackathon-23" -OutputFile "data/Competition-Winners.json"
GenerateCategoryJson -CategoryName "Team Building" -BasePath "public/gallery/Hackathon-24" -OutputFile "data/Team-Building.json"
GenerateCategoryJson -CategoryName "Innovation Lab" -BasePath "public/gallery/Collab with WROB" -OutputFile "data/Innovation-Lab.json"
GenerateCategoryJson -CategoryName "Project Showcase" -BasePath "public/gallery/robotics show" -OutputFile "data/Project-Showcase.json"

# Award Ceremony - combine Arduino/prize and Arduino-24/Prize
$arduinoPrize = Get-ChildItem -Path "public/gallery/Arduino/prize" -Include *.jpg,*.JPG,*.jpeg,*.JPEG,*.png,*.PNG | Sort-Object Name
$arduino24Prize = Get-ChildItem -Path "public/gallery/Arduino-24/Prize" -Include *.jpg,*.JPG,*.jpeg,*.JPEG,*.png,*.PNG | Sort-Object Name

$awardResult = @()
if ($arduinoPrize.Count -gt 0) {
    $awardResult += @{
        folderName = "Arduino/prize"
        thumbnail = "/gallery/Arduino/prize/" + $arduinoPrize[0].Name
        images = ($arduinoPrize | ForEach-Object { "/gallery/Arduino/prize/" + $_.Name })
    }
}
if ($arduino24Prize.Count -gt 0) {
    $awardResult += @{
        folderName = "Arduino-24/Prize"
        thumbnail = "/gallery/Arduino-24/Prize/" + $arduino24Prize[0].Name
        images = ($arduino24Prize | ForEach-Object { "/gallery/Arduino-24/Prize/" + $_.Name })
    }
}
$awardResult | ConvertTo-Json -Depth 10 | Out-File -FilePath "data/Award-Ceremony.json" -Encoding UTF8
Write-Host "Generated: data/Award-Ceremony.json"

# Hands-on Learning - combine Arduino (excluding prize) and Arduino-24 (excluding Prize)
$handsOnResult = @()

# Arduino folders (excluding prize)
$arduinoFolders = Get-ChildItem -Path "public/gallery/Arduino" -Directory | Where-Object { $_.Name -ne "prize" }
foreach ($folder in $arduinoFolders) {
    $images = Get-ChildItem -Path $folder.FullName -Include *.jpg,*.JPG,*.jpeg,*.JPEG,*.png,*.PNG | Sort-Object Name
    if ($images.Count -gt 0) {
        $handsOnResult += @{
            folderName = "Arduino/" + $folder.Name
            thumbnail = "/gallery/Arduino/" + $folder.Name + "/" + $images[0].Name
            images = ($images | ForEach-Object { "/gallery/Arduino/" + $folder.Name + "/" + $_.Name })
        }
    }
}

# Arduino-24 folders (excluding Prize)
$arduino24Folders = Get-ChildItem -Path "public/gallery/Arduino-24" -Directory | Where-Object { $_.Name -ne "Prize" }
foreach ($folder in $arduino24Folders) {
    $images = Get-ChildItem -Path $folder.FullName -Include *.jpg,*.JPG,*.jpeg,*.JPEG,*.png,*.PNG | Sort-Object Name
    if ($images.Count -gt 0) {
        $handsOnResult += @{
            folderName = "Arduino-24/" + $folder.Name
            thumbnail = "/gallery/Arduino-24/" + $folder.Name + "/" + $images[0].Name
            images = ($images | ForEach-Object { "/gallery/Arduino-24/" + $folder.Name + "/" + $_.Name })
        }
    }
}

$handsOnResult | ConvertTo-Json -Depth 10 | Out-File -FilePath "data/Hands-on-Learning.json" -Encoding UTF8
Write-Host "Generated: data/Hands-on-Learning.json"

Write-Host "All gallery JSON files generated successfully!"

