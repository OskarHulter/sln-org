---
title: Recon Guide
description: A guide in my new Starlight docs site.
---

## Glow

Markdown reader with encrypted stashing.

https://github.com/charmbracelet/glow

```sh
# Read from file
glow README.md

# Read from stdin
echo "[Glow](https://github.com/charmbracelet/glow)" | glow -

# Fetch README from GitHub / GitLab
glow github.com/charmbracelet/glow

# Fetch markdown from HTTP
glow https://host.tld/file.md

# when you run glow without arguments will you can browse through your stashed documents. This is a great way to keep track of things that you need to reference often.
glow stash README.md

```

## Further reading

- Read [about how-to guides](https://diataxis.fr/how-to-guides/) in the Diátaxis framework
