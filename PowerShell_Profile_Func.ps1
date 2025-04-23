# Place this file in your powershell profile

# Define the function
function pgrepvitest {
	$node_processes = Get-Process -Name node -ErrorAction SilentlyContinue
	$vitest_pids = @()

	
	foreach ($process in $node_processes) {
		$commandLine = (Get-CimInstance Win32_Process | Where-Object { $_.ProcessId -eq $process.Id }).CommandLine
		if ($commandLine -match "vitest") {
			$vitest_pids += [PSCustomObject]@{
				Id          = $process.Id
				CommandLine = $commandLine
			}
		}
	}
 
	Clear-Host

	if (-not $vitest_pids) {
		Write-Host "No vitest running"
	}
	else {
		$processes = $vitest_pids | ForEach-Object {
			$process = Get-Process -Id $_.Id
			[PSCustomObject]@{
				Name        = $process.Name
				Id          = $process.Id
				CPU         = $process.CPU
				PM          = $process.PM
				CommandLine = $_.CommandLine
			}
		}
		$processes | ForEach-Object {
			$_ | Add-Member -MemberType NoteProperty -Name "PM_MB" -Value ($_.PM / 1MB)
		}
		$processes | Format-Table Name, Id, CPU, @{Name = "PM_MB"; Expression = { "{0:N2}" -f $_.PM_MB } }, CommandLine -AutoSize
	}

}

# Define the watchvitest function
function watchvitest {
	param (
		[int]$interval = 1
	)
	while ($true) {
		pgrepvitest
		Start-Sleep -Seconds $interval
	}
}
