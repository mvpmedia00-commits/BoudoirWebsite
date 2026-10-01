@echo off
rem MVP MEDIA RAW to JPEG converter: double-click to start.
where py >nul 2>nul
if %errorlevel%==0 (py -3 "%~dp0mvp_raw_convert.py" %*) else (python "%~dp0mvp_raw_convert.py" %*)
pause
