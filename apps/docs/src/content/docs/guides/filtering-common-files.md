---
title: Filtering common files Guide
description: A guide about filtering in cli.
---

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


## Further reading

- Read [about how-to guides](https://github.com/mikefarah/yq) in the Diátaxis framework

- Read [about how-to guides](https://github.com/mikefarah/yq) in the Diátaxis framework


- Read [about how-to guides](https://github.com/mikefarah/yq) in the Diátaxis framework
- Read [about how-to guides](https://github.com/mikefarah/yq) in the Diátaxis framework
