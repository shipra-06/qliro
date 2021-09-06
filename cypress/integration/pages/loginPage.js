/// <reference types="cypress" />

// web-elements
const LOGIN_BTN = '.sc-fzXfNg'
const MAIL_BTN = '.sc-LzLqE > h4'
const USEReMAILAD_TEXTFIELD = '.sc-fzXfQY'
const NEXTBUTTON = '.sc-LzLqE'
const FORETAG = '.sc-LzLtm > [href="/sv-se/foretag"] > .sc-fzXfPb'


// Actions/ Methods / functions
function checkLoginPageTitle() {
   cy.get(LOGIN_BTN).click()
   cy.get(MAIL_BTN).click()
}

function typeEmailAddress(userEmailAddress) {
   cy.get(USEReMAILAD_TEXTFIELD).type(userEmailAddress)
   cy.get(USEReMAILAD_TEXTFIELD).focus().clear()
   cy.get(NEXTBUTTON).click()
   cy.get(FORETAG).click()
}




// Exporting the functions
module.exports = {
   checkLoginPageTitle,
   typeEmailAddress


}
