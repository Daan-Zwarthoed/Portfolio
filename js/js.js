/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/
// Start variablen nodig
var overMij = document.querySelector('.overMij');
var skills = document.querySelector('.skills');
var goals = document.querySelector('.goals')
var contact = document.querySelector('.contact');

var linkOverMij = document.querySelector('.linkOverMij');
var linkSkills = document.querySelector('.linkSkills');
var linkGoals = document.querySelector('.linkGoals');
var linkContact = document.querySelector('.linkContact');

var currentPage = linkOverMij;
var i;
var k;
var goDown = document.querySelector('.goDown');

var navigatie = document.querySelector('.navigatie');
var kleurenArray = ['.kleurOverMij', 'kleurSkills', 'kleurGoals', 'kleurContact'];
var veranderenArray = [goDown, linkOverMij, linkSkills, linkGoals, linkContact];
var gekozenKleur;


// Einde variablen nodig

// Start pagina updaten
function updatePage() {
  currentPage.classList.remove('actief')
  for (k = 0; k < kleurenArray.length; k++) {
    goDown.classList.remove(kleurenArray[k]);
    linkOverMij.classList.remove(kleurenArray[k]);
    linkSkills.classList.remove(kleurenArray[k]);
    linkGoals.classList.remove(kleurenArray[k]);
    linkContact.classList.remove(kleurenArray[k]);
  }
  if (scrollY < 789) {
    currentPage = linkOverMij;
    gekozenKleur = 'kleurOverMij'
    goDown.innerHTML = 'Go down'

  } else if (scrollY < 1578) {
    currentPage = linkSkills
    gekozenKleur = 'kleurSkills'
    goDown.innerHTML = 'Go down'

  } else if (scrollY < 2367) {
    currentPage = linkGoals;
    gekozenKleur = 'kleurGoals'

    goDown.innerHTML = 'Go down'


  } else {
    currentPage = linkContact;
    gekozenKleur = 'kleurContact'
    goDown.innerHTML = 'To top'
  }
  for (var i = 0; i < veranderenArray.length; i++) {
    veranderenArray[i].classList.add(gekozenKleur)
  }
  currentPage.classList.add('actief')

}
updatePage();
window.addEventListener('scroll', updatePage);
// Einde pagina updaten


// Begin scrollen met knopjes bovenin
function scroll(link) {
    if (link.classList[0] == 'linkOverMij') {
      overMij.scrollIntoView({
        behavior: 'smooth'
      });
    } else if (link.classList[0] == 'linkSkills') {
      skills.scrollIntoView({
        behavior: 'smooth'
      });
    } else if (link.classList[0] == 'linkGoals') {
      goals.scrollIntoView({
        behavior: 'smooth'
      });
    } else if (link.classList[0] == 'linkContact') {
      contact.scrollIntoView({
        behavior: 'smooth'
      });
  }
  updatePage();

}

function triggerScroll() {
  scroll(this);
}
var t;


function navigatieUpdaten() {

  li = document.querySelectorAll('li');
  for (t = 0; t < li.length; t++) {
    result = li[t];
    result.addEventListener('click', triggerScroll);
  }

}
navigatieUpdaten();

// Einde scrollen met knopjes bovenin


// Begin pagedown onderin
function pageDown(page) {
  if (page.classList[0] == 'linkOverMij') {
    skills.scrollIntoView({
      behavior: 'smooth'
    });
  } else if (page.classList[0] == 'linkSkills') {
    goals.scrollIntoView({
      behavior: 'smooth'
    });
  } else if (page.classList[0] == 'linkGoals') {
    contact.scrollIntoView({
      behavior: 'smooth'
    });
  } else if (page.classList[0] == 'linkContact') {
    overMij.scrollIntoView({
      behavior: 'smooth'
    });
  }
  updatePage();
}

goDown.addEventListener('click', function() {
  pageDown(currentPage);
})

// Einde pagedown onderin
