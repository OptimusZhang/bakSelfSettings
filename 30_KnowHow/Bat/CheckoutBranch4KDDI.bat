@echo off
echo Start!
set CURRENT_DIR=%~dp0
cd/d %CURRENT_DIR%

:inputBranchName
echo Please input the branchName:
set/p BRANCH_NAME=
if exist "%CURRENT_DIR%%BRANCH_NAME%" (
	echo=
	echo ==============================================
	echo ERROR! 
	echo 	>Folder [%BRANCH_NAME%] has existed,
	echo	>please confirm!
	echo ==============================================
	echo=
	goto inputBranchName
) else (
	md %BRANCH_NAME%
	
	pause;
) 
