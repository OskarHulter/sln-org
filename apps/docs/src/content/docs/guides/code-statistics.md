---
title: Code Statistics Guide
description: A guide in my new Starlight docs site.
---

## scc [files or directories...]
Sloc, Cloc and Code. Count lines of code in a directory with complexity estimation

--avg-wage <int>	Average salary value used for COCOMO calculations
--binary	Disable binary file detection
--by-file	Display output for every file
--ci	Enable CI output settings where stdout is ASCII
--cocomo-project-type <string>	Change the COCOMO model type (allows custom models, eg. "name,1,1,1,1")
--count-as <string>	Count a file extension as a language (comma-separated key:value list, eg. jst:js,tpl:Markdown)
--debug	Enable debug output
--exclude-dir <strings>	Directories to exclude
--file-gc-count <int>	Number of files to parse before turning the GC on
-f, --format <string>	Set output format
--format-multi <string>	Multiple outputs with different formats (comma-separated key:value list, eg. tabular:stdout,csv:scc.csv)
--gen	Identify generated files
--generated-markers <strings>	Identify generated files by the presence of a string (comma-separated list)
-h, --help	Help for scc
-i, --include-ext <strings>	Limit to these file extensions (comma-separated list)
--include-symlinks	Count symbolic links
-l, --languages	Print supported languages and extensions
--large-byte-count <int>	Number of bytes a file can contain before being omitted
--large-line-count <int>	Number of lines a file can contain before being omitted
--min	Identify minified files
-z, --min-gen	Identify minified or generated files
--min-gen-line-length <int>	Number of bytes per average line for file to be considered minified or generated
--no-cocomo	Skip COCOMO calculation
-c, --no-complexity	Skip code complexity calculation
-d, --no-duplicates	Remove duplicate files from stats and output
--no-gen	Ignore generated files in output (implies --gen)
--no-gitignore	Disables .gitignore file logic
--no-ignore	Disables .ignore file logic
--no-large	Ignore files over certain byte and line size set by --max-line-count and --max-byte-count
--no-min	Ignore minified files in output (implies --min)
--no-min-gen	Ignore minified or generated files in output (implies --min-gen)
--no-size	Remove size calculation output
-M, --not-match <regex>	Ignore files and directories matching regular expression
-o, --output <string>	Output filename (defaults to stdout if not provided)
--remap-all <string>	Inspect every file and set its type by checking for a string (comma-separated key:value list, eg. "-*- C++ -*-":"C Header")
--remap-unknown <string>	Inspect files of unknown type and set its type by checking for a string (comma-separated key:value list, eg. "-*- C++ -*-":"C Header")
--size-unit <string>	Set the unit used for file size output
-s, --sort <string>	Column to sort by
--sql-project <string>	Use supplied name as the project identifier for the current run. Only valid with the '--format sql' or '--format sql-insert' option
-t, --trace	Enable trace output (not recommended when processing multiple files)
-v, --verbose	Verbose output
--version	Version for scc
-w, --wide	Wider output with additional statistics (implies --complexity)


## git-quick-stats
Git quick statistics is a simple and efficient way to access various statistics in git repository,

--help, -h	Show help for git-quick-stats
--suggest-reviewers, -r	Show the best people to contact to review code
--detailed-git-stats, -T	Give a detailed list of git stats
---git-stats-by-branch, -R	Show detailed list of git stats by branch
--changelogs, -c	Show changelogs
--changelogs-by-author, -L	Show changelogs by author
--my-daily-stats, -S	Show your current daily stats
--my-csv-output-by-branch-stats, -V	Output daily stats by branch in CSV format
--json-output, -j	Save git log as a JSON formatted file to a specified area
--branch-tree, -b	Show an ASCII graph of the git repo branch history
--branches-by-date, -D	Show branches by date
--contributors, -C	See a list of everyone who contributed to the repo
--commits-per-author, -a	Displays a list of commits per author
--commits-per-day, -d	Displays a list of commits per day
--commits-by-month, -m	Displays a list of commits per month
--commits-by-year, -Y	Displays a list of commits per year
--commits-by-weekday, -w	Displays a list of commits per weekday
--commits-by-hour, -o	Displays a list of commits per hour
--commits-by-author-by-hour, -A	Displays a list of commits per hour by author
--commits-by-timezone, -z	Displays a list of commits per timezone
--commits-by-author-by-timezone, -Z	Displays a list of commits per timezone by author


## Further reading

- Read [about how-to guides](https://diataxis.fr/how-to-guides/) in the Diátaxis framework
