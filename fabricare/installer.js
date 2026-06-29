// Created by Grigore Stefan <g_stefan@yahoo.com>
// Public domain (Unlicense) <http://unlicense.org>
// SPDX-FileCopyrightText: 2022 Grigore Stefan <g_stefan@yahoo.com>
// SPDX-License-Identifier: Unlicense

messageAction("installer");

Shell.mkdirRecursivelyIfNotExists("release");
Shell.mkdirRecursivelyIfNotExists("temp");

Shell.setenv("PRODUCT_NAME", "installer-php");
Shell.setenv("PRODUCT_VERSION", Project.version);
Shell.setenv("PRODUCT_BASE", "php");

exitIf(Shell.system("makensis.exe /NOCD \"source\\php-installer.nsi\""));
exitIf(Shell.system("grigore-stefan.sign \"PHP\" \"release\\xyo-php-" + Project.version + "-installer.exe\""));

var fileName = "xyo-php-" + Project.version + "-installer.exe";
var jsonName = "xyo-php-" + Project.version + "-installer.json";

var json = {};
json[fileName] = SHA512.fileHash("release/" + fileName);
Shell.filePutContents("release/" + jsonName, JSON.encodeWithIndentation(json));
