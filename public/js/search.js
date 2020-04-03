(function(){const onInput=debounce((e)=>{const query=e.target.value
  const url=document.querySelector('[data-search-form]').getAttribute('action')
  history.replaceState({},'','/search?query='+query)
  fetch(url+'?query='+query+'&async=true').then(res=>res.text()).then(html=>{document.querySelector('ul').innerHTML=html})},250)
  document.querySelector('[data-search-input]').addEventListener('input',onInput)