[void][System.Reflection.Assembly]::LoadWithPartialName("System.Drawing")
Get-ChildItem -Path "c:\Users\bruta\Downloads" -Filter *.png | ForEach-Object {
    $img = [System.Drawing.Image]::FromFile($_.FullName)
    Write-Output "$($_.Name) : $($img.Width)x$($img.Height)"
    $img.Dispose()
}
Get-ChildItem -Path "c:\Users\bruta\Downloads" -Filter *.jpg | ForEach-Object {
    $img = [System.Drawing.Image]::FromFile($_.FullName)
    Write-Output "$($_.Name) : $($img.Width)x$($img.Height)"
    $img.Dispose()
}
