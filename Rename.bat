@ECHO OFF
REM �����ӳ�
SETLOCAL ENABLEDELAYEDEXPANSION

REM File List
SET LIST=list.txt

REM Log File
SET LOG=exec.log

REM Get file list
IF EXIST "%LIST%" (
  del %LIST%  >> %LOG%
)
dir/b/o-d/a *.jpg >> %LIST%

FOR /F "tokens=1,2 delims=."  %%a IN (%LIST%) DO (

  SET /a x=!x!+1
  SET nm=00000!x!

  REM file rename
  ren %%a.%%b PIC!nm:~-3!.JPG
  ECHO ren %%a.%%b PIC2!nm:~-3!.jpg >> %LOG%

)

ECHO Success!!! >> %LOG%