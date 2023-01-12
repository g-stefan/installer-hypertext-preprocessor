<?php
/*
// Created by Grigore Stefan <g_stefan@yahoo.com>
// Public domain (Unlicense) <http://unlicense.org>
// SPDX-FileCopyrightText: 2021-2023 Grigore Stefan <g_stefan@yahoo.com>
// SPDX-License-Identifier: Unlicense
*/

$config=file_get_contents("php.ini-production");

//--

$search="; Log errors to syslog (Event Log on Windows).\r\n";
$search.=";error_log = syslog\r\n\r\n";

$replace="; Log errors to syslog (Event Log on Windows).\r\n";
$replace.=";error_log = syslog\r\n";
$replace.="error_log = \"C:\\ProgramData\\php\\error.log\"\r\n";
$replace.="\r\n";

$config=str_replace ($search, $replace, $config);

//--

$search="; A default value for the CURLOPT_CAINFO option. This is required to be an\r\n";
$search.="; absolute path.\r\n";
$search.=";curl.cainfo =\r\n\r\n";

$replace="; A default value for the CURLOPT_CAINFO option. This is required to be an\r\n";
$replace.="; absolute path.\r\n";
$replace.="curl.cainfo =\"C:\\ProgramData\\php\\cacert.pem\"\r\n\r\n";

$config=str_replace ($search, $replace, $config);

//--

$search="; Defines the default timezone used by the date functions\r\n";
$search.="; http://php.net/date.timezone\r\n";
$search.=";date.timezone =\r\n\r\n";

$replace="; Defines the default timezone used by the date functions\r\n";
$replace.="; http://php.net/date.timezone\r\n";
$replace.="date.timezone =\"Europe/Bucharest\"\r\n\r\n";

$config=str_replace ($search, $replace, $config);

//--

$search="; On windows:\r\n";
$search.=";extension_dir = \"ext\"\r\n\r\n";

$replace="; On windows:\r\n";
$replace.="extension_dir = \"" . dirname(realpath(__FILE__)) . "\\ext"."\"\r\n\r\n";

$config=str_replace ($search, $replace, $config);

//--

$config=str_replace (";extension=bz2\r\n","extension=bz2\r\n", $config);
$config=str_replace (";extension=curl\r\n","extension=curl\r\n", $config);
$config=str_replace (";extension=fileinfo\r\n","extension=fileinfo\r\n", $config);
$config=str_replace (";extension=gd\r\n","extension=gd\r\n", $config);
$config=str_replace (";extension=gmp\r\n","extension=gmp\r\n", $config);
$config=str_replace (";extension=intl\r\n","extension=intl\r\n", $config);
$config=str_replace (";extension=imap\r\n","extension=imap\r\n", $config);
$config=str_replace (";extension=mbstring\r\n","extension=mbstring\r\n", $config);
$config=str_replace (";extension=exif","extension=exif", $config);
$config=str_replace (";extension=mysqli\r\n","extension=mysqli\r\n", $config);
$config=str_replace (";extension=openssl\r\n","extension=openssl\r\n", $config);
$config=str_replace (";extension=pdo_mysql\r\n","extension=pdo_mysql\r\n", $config);
$config=str_replace (";extension=pdo_odbc\r\n","extension=pdo_odbc\r\n", $config);
$config=str_replace (";extension=pdo_pgsql\r\n","extension=pdo_pgsql\r\n", $config);
$config=str_replace (";extension=pdo_sqlite\r\n","extension=pdo_sqlite\r\n", $config);
$config=str_replace (";extension=sockets\r\n","extension=sockets\r\n", $config);
$config=str_replace (";extension=sqlite3\r\n","extension=sqlite3\r\n", $config);
$config=str_replace (";extension=xmlrpc\r\n","extension=xmlrpc\r\n", $config);
$config=str_replace (";extension=xsl\r\n","extension=xsl\r\n", $config);
//
$config=str_replace ("extension=xsl\r\n","extension=xsl\r\nextension=mailparse\r\n", $config);

//--

$search="; Maximum amount of memory a script may consume\r\n";
$search.="; http://php.net/memory-limit\r\n";
$search.="memory_limit = 128M\r\n\r\n";

$replace="; Maximum amount of memory a script may consume\r\n";
$replace.="; http://php.net/memory-limit\r\n";
$replace.="memory_limit = 1024M\r\n\r\n";

$config=str_replace ($search, $replace, $config);

//--

$search="; Maximum size of POST data that PHP will accept.\r\n";
$search.="; Its value may be 0 to disable the limit. It is ignored if POST data reading\r\n";
$search.="; is disabled through enable_post_data_reading.\r\n";
$search.="; http://php.net/post-max-size\r\n";
$search.="post_max_size = 8M\r\n\r\n";

$replace="; Maximum size of POST data that PHP will accept.\r\n";
$replace.="; Its value may be 0 to disable the limit. It is ignored if POST data reading\r\n";
$replace.="; is disabled through enable_post_data_reading.\r\n";
$replace.="; http://php.net/post-max-size\r\n";
$replace.="post_max_size = 256M\r\n\r\n";

$config=str_replace ($search, $replace, $config);

//--

$search="; Maximum allowed size for uploaded files.\r\n";
$search.="; http://php.net/upload-max-filesize\r\n";
$search.="upload_max_filesize = 2M\r\n\r\n";

$replace="; Maximum allowed size for uploaded files.\r\n";
$replace.="; http://php.net/upload-max-filesize\r\n";
$replace.="upload_max_filesize = 128M\r\n\r\n";

$config=str_replace ($search, $replace, $config);

//--

file_put_contents("php.ini",$config);

