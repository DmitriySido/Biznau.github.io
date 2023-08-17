const burgerButton = document.querySelector('.burger-button')
const headerNavigation = document.querySelector('.header__navigation')

burgerButton.addEventListener('click', function(e){
  e.preventDefault()
  burgerButton.classList.toggle('burger-button--active')

  headerNavigation.style.height = 0 + 'px';
  headerNavigation.classList.toggle('header__navigation--active')
  if(headerNavigation.classList.contains('header__navigation--active')){
    headerNavigation.style.height = 'auto';
  }else{
    headerNavigation.style.height = 0 + 'px';
  }
})