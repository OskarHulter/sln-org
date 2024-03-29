---
title: Filtering common files Guide
description: A guide about filtering in cli.
---

## touch <file...>
Change file access and modification times

Arguments
NAME	DESCRIPTION
file	folders
Options
NAME	DESCRIPTION
-A <time>	Adjust the access and modification time stamps for the file by the specified value
-a	Change the access time of the file
-c	Do not create the file if it does not exist
-f	Attempt to force the update, even if the file permissions do not currently permit it
-h	If the file is a symbolic link, change the times of the link itself rather than the file that the link points to
-m	Change the modification time of the file
-r <file>	Use the access and modifications times from the specified file instead of the current time of day
-t <timestamp>	Change the access and modification times to the specified time instead of the current time of day


## flexible filters

Cut out parts of data
```sh
cat data.txt | cut -d ' ' -f 1

cat data.txt | cut -d ' ' -f 1,3
```

conditional value printing
```sh
awk '{print $1, $2}' text.txt

awk '$2 >= 200 {print $1}' text.txt
```

## JSON
To parse and filter json you can use the following tools:
- jq
- yq
- yqp
- fx

## Installation
```sh
brew install jq yq fx noahgorstein/tap/jqp
```

Keybindings
Keybinding	Action
tab	cycle through sections
shift-tab	cycle through sections in reverse
ctrl-y	copy query to system clipboard1
ctrl-s	save output to file (copy to clipboard if file not specified)
ctrl-c	quit program / kill long running query
Query Mode
Keybinding	Action
enter	execute query
↑/↓	cycle through query history
ctrl-a	go to beginning of line
ctrl-e	go to end of line
←/ctrl-b	move cursor one character to left
→/ctrl-f	move cursor one character to right
ctrl-k	delete text after cursor line
ctrl-u	delete text before cursor
ctrl-w	delete word to left
ctrl-d	delete character under cursor
Input Preview and Output Mode
Keybinding	Action
↑/k	up
↓/j	down
ctrl-u	page up
ctrl-d	page down

```sh
curl "https://api.github.com/repos/stedolan/jq/issues?per_page=2" | yq 'status.storageSize=10'

curl "https://api.github.com/repos/stedolan/jq/issues?per_page=2" | jqp 
```

```sh
yq -Poy my.json | cat
```

```sh
| yq 'status.storageSize=10'


```

```sh
cat data.json | fx
fx data.json
```

jq <filter> [files...]
Command-line JSON processor

Arguments
NAME	DESCRIPTION
filter	Must be enclosed in single quotes
files	filepaths
Options
NAME	DESCRIPTION
--version	Output the jq version and exit with zero
--seq	Use the application/json-seq MIME type scheme for separating JSON texts in jq's input and output
--stream	Parse the input in streaming fashion, outputting arrays of path and leaf values
--slurp, -s	Instead of running the filter for each JSON object in the input, read the entire input stream into a large array and run the filter just once
--raw-input, -R	Don't parse the input as JSON. Instead, each line of text is passed to the filter as a string
--null-input, -n	Don't read any input at all! Instead, the filter is run once using null as the input
--compact-output, -c	By default, jq pretty-prints JSON output. Using this option will result in more compact output by instead putting each JSON object on a single line
--tab	Use a tab for each indentation level instead of two spaces
--indent <n>	Use the given number of spaces for indentation
--color-output, -C	By default, jq outputs colored JSON if writing to a terminal. You can force it to produce color even if writing to a pipe or a file using -C
--monochrome-output, -M	Disable color
--ascii-output, -a	Jq usually outputs non-ASCII Unicode codepoints as UTF-8, even if the input specified them as escape sequences
--unbuffered	Flush the output after each JSON object is printed
--sort-keys, -S	Output the fields of each object with the keys in sorted orde
--raw-output, -r	If the filter's result is a string then it will be written directly to standard output rather than being formatted as a JSON string with quotes
--join-output, -j	Like -r but jq won't print a newline after each output
-f, --from-file <filename>	Read filter from the file rather than from a command line
-L <directory>	Prepend directory to the search list for modules
-e, --exit-status	Sets the exit status of jq to 0 if the last output values was neither false nor null, 1 if the last output value was either false or null, or 4 if no valid result was ever produced
--arg <name> <value>	This option passes a value to the jq program as a predefined variable
--argjson <name> <JSON-text>	This option passes a JSON-encoded value to the jq program as a predefined variable
--slurpfile <variable name> <filename>	This option reads all the JSON texts in the named file and binds an array of the parsed JSON values to the given global variable
--rawfile <variable name> <filename>	This option reads in the named file and binds its contents to the given global variable
--args	Remaining arguments are positional string arguments. These are available to the jq program as $ARGS.positional[]
--jsonargs	Remaining arguments are positional JSON text arguments. These are available to the jq program as $ARGS.positional[]
--run-tests [filename]	Runs the tests in the given file or standard input. This must be the last option given and does not honor all preceding options

## json-log-viewer
https://github.com/hedhyw/json-log-viewer

## tailspin
https://github.com/bensadeh/tailspin 

```sh
jlv tsconfig.json
# Read from file and view in `less`
tspin application.log

# Read from file and print to stdout
tspin application.log --print

# Read from stdin and print to stdout
echo "2021-01-01 12:00:00 [INFO] This is a log message" | tspin 

# Read from another command and print to stdout
kubectl logs [pod name] --follow | tspin
```

## Gron

https://github.com/tomnomnom/gron

```sh
gron testdata/two.json 
gron http://headers.jsontest.com/
curl -s http://headers.jsontest.com/ | gron
gron testdata/two.json | grep twitter
diff <(gron two.json) <(gron two-b.json)
gron testdata/two.json > tmp.js
echo "console.log(json);" >> tmp.js
nodejs tmp.js
# { contact: { email: 'mail@tomnomnom.com', twitter: '@TomNomNom' },
#   github: 'https://github.com/tomnomnom/',
#   likes: [ 'code', 'cheese', 'meat' ],
#   name: 'Tom' }

#This means you use can use gron with grep and other tools to modify JSON:
▶ gron testdata/two.json | grep likes | gron --ungron
# {
#   "likes": [
#     "code",
#     "cheese",
#     "meat"
#   ]
# }

▶ gron --json testdata/two.json | grep likes | gron  --json --ungron
# {
#   "likes": [
#     "code",
#     "cheese",
#     "meat"
#   ]
# }

```

## Further reading

- Read [about how-to guides](https://github.com/mikefarah/yq) in the Diátaxis framework

- Read [about how-to guides](https://github.com/purpleclay/dns53) in the Diátaxis framework


- Read [about how-to guides](https://github.com/mikefarah/yq) in the Diátaxis framework
- Read [about how-to guides](https://github.com/mikefarah/yq) in the Diátaxis framework
