// Created by Grigore Stefan <g_stefan@yahoo.com>
// Public domain (Unlicense) <http://unlicense.org>
// SPDX-FileCopyrightText: 2022 Grigore Stefan <g_stefan@yahoo.com>
// SPDX-License-Identifier: Unlicense

messageAction("vendor");

Shell.mkdirRecursivelyIfNotExists("vendor");
                                
var vendor = "php-"+Project.version+"-Win32-vs16-x64.zip";
if (!Shell.fileExists("vendor/"+vendor)) {
	var webLink = "https://windows.php.net/downloads/releases/"+vendor;
	var cmd = "curl --insecure --location "+webLink+" --output vendor/"+vendor;
	Console.writeLn(cmd);
	exitIf(Shell.system(cmd));
};

var vendor = "cacert.pem";
if (!Shell.fileExists("vendor/"+vendor)) {
	var webLink = "https://curl.haxx.se/ca/"+vendor;
	var cmd = "curl --insecure --location "+webLink+" --output vendor/"+vendor;
	Console.writeLn(cmd);
	exitIf(Shell.system(cmd));
};

var vendor = "php_mailparse-3.1.3-8.1-ts-vs16-x64.zip";
if (!Shell.fileExists("vendor/"+vendor)) {
	var webLink = "https://windows.php.net/downloads/pecl/releases/mailparse/3.1.3/"+vendor;
	var cmd = "curl --insecure --location "+webLink+" --output vendor/"+vendor;
	Console.writeLn(cmd);
	exitIf(Shell.system(cmd));
};

var vendor = "composer.phar";
if (!Shell.fileExists("vendor/"+vendor)) {
	var webLink = "https://getcomposer.org/download/2.5.1/"+vendor;
	var cmd = "curl --insecure --location "+webLink+" --output vendor/"+vendor;
	Console.writeLn(cmd);
	exitIf(Shell.system(cmd));
};
