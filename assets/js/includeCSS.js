function addCss(path) {
  const link = document.createElement('link')
  link.rel = "stylesheet"
  link.href = `/assets/styles/${path}.css`
  const head = document.getElementsByTagName('head')
  head[0].appendChild(link)
}

// const addCss = (path) => {
//   const link = document.createElement('link')
//   link.rel = "stylesheet"
//   link.href = `/assets/styles/${path}.css`
//   const head = document.getElementsByTagName('head')
//   head[0].appendChild(link)
// }