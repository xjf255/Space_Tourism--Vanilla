const navList = ['home', 'destination', 'crew', 'technology']
const $fragment = document.createDocumentFragment()
const pageInit = 0

navList.map((element, index) => {
  const $li = document.createElement('li')
  $li.innerHTML = `<strong>0${index}</strong> ${element}`
  if (index === pageInit) $li.className = 'li--active'
  $fragment.appendChild($li)
})
document.getElementById('navbar').appendChild($fragment)

const itemNav = document.querySelectorAll('li')

document.addEventListener('click', (e) => {
  if (e.target.matches('li')) {
    itemNav.forEach(li => {
      if (e.target === li || li.classList.value === 'li--active') {
        li.classList.toggle('li--active')
      }
    })
  }
})

async function getData() {
  try {
    const res = await fetch('./src/home.html')
    const json = await res.text()

    if(!res.ok)throw {statusText : res.statusText, status: res.status}
    document.querySelector('main').innerHTML = json
  } catch (error) {
    document.querySelector('main').innerHTML = error
  }
}

getData()

