/// <reference types="cypress" />

// web-elements
const PAGE_BTN = '.sc-LzLrm'
///const DOUBLECLICK_BTN = '.sc-fzXfPI'
const ENGLISH_BTN = '.sc-LzLtM > a > .sc-fzXfQX > picture > img'
const SIDEBAR_BTN = '.sc-fzXfOr'
const IR_BTN = ':nth-child(3) > a > .sc-fzXfPb > h3'


// Actions/ Methods / functions
function checkForetagPage() {
   cy.scrollTo("bottom",{duration:2000}) 
   cy.get(PAGE_BTN).click({force:true})
   cy.get(ENGLISH_BTN).click()
   cy.reload()
   cy.get('#onetrust-accept-btn-handler').click()
   cy.get(SIDEBAR_BTN).click()
   cy.get(IR_BTN).click()
}


// Exporting the functions
module.exports = {
    checkForetagPage


}