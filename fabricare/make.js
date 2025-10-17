// Created by Grigore Stefan <g_stefan@yahoo.com>
// Public domain (Unlicense) <http://unlicense.org>
// SPDX-FileCopyrightText: 2022 Grigore Stefan <g_stefan@yahoo.com>
// SPDX-License-Identifier: Unlicense

Fabricare.include("vendor");

// ---

messageAction("make");

if (Shell.fileExists("temp/build.done.flag")) {
	return;
};

Shell.removeDirRecursivelyForce("output");
Shell.removeDirRecursivelyForce("temp");

Shell.mkdirRecursivelyIfNotExists("temp");
Shell.system("7z x \"vendor/php-"+Project.version+"-Win32-vs17-x64.zip\" -aoa -otemp");
Shell.rename("temp","output");

Shell.mkdirRecursivelyIfNotExists("temp");
Shell.system("7z x \"vendor/php_mailparse-3.1.9-8.4-ts-vs17-x64.zip\" -aoa -otemp");
Shell.rename("temp/php_mailparse.dll","output/ext/php_mailparse.dll");
Shell.removeDirRecursivelyForce("temp");

Shell.copyFile("vendor/cacert.pem","output/cacert.pem");
Shell.copyFile("vendor/composer.phar","output/composer.phar");
Shell.copyFile("source/installer.php.ini.php","output/installer.php.ini.php");
Shell.copyFile("source/composer.phar.cmd","output/composer.phar.cmd");

Shell.removeDirRecursivelyForce("output/dev");

Shell.copyFile("vendor/vc-2022-redist.x64.exe","output/vc-2022-redist.x64.exe");

Shell.filePutContents("temp/build.done.flag", "done");
