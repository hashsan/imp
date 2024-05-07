
async function imp(text,template,replaceString){
  replaceString = replaceString||'{{imp}}'
  let html = ''
  template = await _get(template)
  //console.log(template)
  html = template.replace(replaceString,text)
  let blob = textToBlob(html)
  return {html,blob}
}

function isUrl(url){
  return /^http/.test(url)
}
function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

async function _get(template){
  if(isUrl(template)){
    template = await fetch(template).then(d=>d.text())
  }
  return template
}

function textToBlob(text, mimeType) {
  mimeType = mimeType || 'text/html';
  return new Blob([text], { type: mimeType });
}

window.imp = imp; /////////////////////////////////////////////

/*
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
*/
