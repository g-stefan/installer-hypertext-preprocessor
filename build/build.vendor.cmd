@echo off
rem Public domain
rem http://unlicense.org/
rem Created by Grigore Stefan <g_stefan@yahoo.com>

call build\build.config.cmd

echo -^> vendor %PRODUCT_NAME%

if not exist vendor\ mkdir vendor

set VENDOR=php-%PRODUCT_VERSION%-Win32-vs16-x64.zip
set WEB_LINK=https://windows.php.net/downloads/releases/%VENDOR%
if not exist vendor\%VENDOR% curl --insecure --location %WEB_LINK% --output vendor\%VENDOR%

set VENDOR=cacert.pem
set WEB_LINK=https://curl.haxx.se/ca/%VENDOR%
if not exist vendor\%VENDOR% curl --insecure --location %WEB_LINK% --output vendor\%VENDOR%

set VENDOR=php_mailparse-3.1.1-8.0-ts-vs16-x64.zip
set WEB_LINK=https://windows.php.net/downloads/pecl/releases/mailparse/3.1.1/%VENDOR%
if not exist vendor\%VENDOR% curl --insecure --location %WEB_LINK% --output vendor\%VENDOR%

set VENDOR=composer.phar
set WEB_LINK=https://getcomposer.org/download/2.0.13/composer.phar
if not exist vendor\%VENDOR% curl --insecure --location %WEB_LINK% --output vendor\%VENDOR%
