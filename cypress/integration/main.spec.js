/// <reference types="cypress" />
import * as loginFuncs from './pages/loginPage'
import * as foretagFuncs from './pages/foretagPage'

describe("Testsuite",()=>{

    const KAKOR_BTN = '#onetrust-accept-btn-handler'
   
    it('Open home page and accept cookies.',() =>{  
         cy.log('start login')
         cy.visit ('www.qliro.com/sv-se')
         cy.get (KAKOR_BTN).click()
         loginFuncs.checkLoginPageTitle()

    });

    it('Verify typeEmailAddress',() =>{ 
        cy.log('Email Address')        
        loginFuncs.typeEmailAddress('qliro123@test.com')
        foretagFuncs.checkForetagPage()

        
    })

    

})
         
    