function addCss(name) {
  const link = document.createElement('link')
  link.rel = "stylesheet"
  link.href = `/assets/styles/${name}.css`
  const head = document.getElementsByTagName('head')
  head[0].appendChild(link)
}