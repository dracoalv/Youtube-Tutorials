const listItem = document.querySelectorAll('.list-item')
const menuBtn = document.querySelector('[data-js="menu-btn"]')
const headerUl = document.querySelector('[data-js="header-list"]')
const main = document.querySelector('main')

listItem.forEach(li => {
  li.addEventListener('click', () => {
    if (!li.classList.contains('active')) {
      listItem.forEach(lis => {
        lis.classList.remove('active')
      })

      li.classList.add('active')
    }
  })
})

menuBtn.addEventListener('click', () => {
  headerUl.classList.toggle('show')
  main.classList.toggle('hidden')
  menuBtn.classList.toggle('active')
})
