@echo off
rem Public domain
rem http://unlicense.org/
rem Created by Grigore Stefan <g_stefan@yahoo.com>

call build.config.cmd

echo -^> make %PRODUCT_NAME%

if exist build\ rmdir /Q /S build
if exist release\ rmdir /Q /S release

mkdir build

7z x "vendor/php-%PRODUCT_VERSION%-Win32-vs16-x64.zip" -aoa -obuild
move /Y "build" "release"

mkdir build
7z x "vendor/php_mailparse-3.1.1-8.0-ts-vs16-x64.zip" -aoa -obuild
move /Y "build\php_mailparse.dll" "release\ext\php_mailparse.dll"
rmdir /Q /S build

pushd release
set PATH=%CD%;%PATH%
popd

copy /B "vendor\cacert.pem" "release\cacert.pem"
copy /B "vendor\composer.phar" "release\composer.phar"
copy /B "port\installer.php.ini.php" "release\installer.php.ini.php"
copy /B "port\composer.phar.cmd" "release\composer.phar.cmd"

rmdir /Q /S release\dev
