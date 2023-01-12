// Created by Grigore Stefan <g_stefan@yahoo.com>
// Public domain (Unlicense) <http://unlicense.org>
// SPDX-FileCopyrightText: 2022 Grigore Stefan <g_stefan@yahoo.com>
// SPDX-License-Identifier: Unlicense

messageAction("installer");

Shell.mkdirRecursivelyIfNotExists("release");
Shell.mkdirRecursivelyIfNotExists("temp");

Shell.setenv("PRODUCT_NAME", "installer-hypertext-preprocessor");
Shell.setenv("PRODUCT_VERSION", Project.version);
Shell.setenv("PRODUCT_BASE", "hypertext-preprocessor");

exitIf(Shell.system("makensis.exe /NOCD \"source\\hypertext-preprocessor-installer.nsi\""));
exitIf(Shell.system("grigore-stefan.sign \"Hypertext Preprocessor\" \"release\\hypertext-preprocessor-" + Project.version + "-installer.exe\""));

var fileName = "hypertext-preprocessor-" + Project.version + "-installer.exe";
var jsonName = "hypertext-preprocessor-" + Project.version + "-installer.json";

var json = {};
json[fileName] = SHA512.fileHash("release/" + fileName);
Shell.filePutContents("release/" + jsonName, JSON.encodeWithIndentation(json));
