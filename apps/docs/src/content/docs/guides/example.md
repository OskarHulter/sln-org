---
title: Browser Events
description: A guide to useful browser events.
---

Using keyboard events for dynamic search? yt

```ts
document.addEventListener('keydown', function(e){
  document.getElementById('result').innerHTML = e.key;
})
```

## Further reading

- Read [about how-to guides](https://diataxis.fr/how-to-guides/) in the Diátaxis framework
