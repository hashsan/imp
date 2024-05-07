# imp
imp is template importer


## default replace
```
{{imp}}
```

## let {html,blob} = await imp(body,template,replaceName) 
```
import "https://hashsan.github.io/imp/imp.js"

imp('<a href="#">test</a>',
    'https://hashsan.github.io/imp/test.html',
    '{{imp}}').then(d=>{
  //d.html, d.blob

  let iframe = document.createElement('iframe')
  let url = URL.createObjectURL(d.blob)
  iframe.onload = () =>URL.revokeObjectURL(url)
  iframe.src = url
  document.body.append(iframe)

})

```
