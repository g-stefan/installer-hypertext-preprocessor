@echo off
rem Public domain
rem http://unlicense.org/
rem Created by Grigore Stefan <g_stefan@yahoo.com>

call build\build.config.cmd

echo -^> make %PRODUCT_NAME%

if exist temp\ rmdir /Q /S temp
if exist output\ rmdir /Q /S output

mkdir temp

7z x "vendor/php-%PRODUCT_VERSION%-Win32-vs16-x64.zip" -aoa -otemp
move /Y "temp" "output"

mkdir temp
7z x "vendor/php_mailparse-3.1.1-8.0-ts-vs16-x64.zip" -aoa -otemp
move /Y "temp\php_mailparse.dll" "output\ext\php_mailparse.dll"
rmdir /Q /S temp

pushd release
set PATH=%CD%;%PATH%
popd

copy /B "vendor\cacert.pem" "output\cacert.pem"
copy /B "vendor\composer.phar" "output\composer.phar"
copy /B "source\installer.php.ini.php" "output\installer.php.ini.php"
copy /B "source\composer.phar.cmd" "output\composer.phar.cmd"

rmdir /Q /S output\dev
