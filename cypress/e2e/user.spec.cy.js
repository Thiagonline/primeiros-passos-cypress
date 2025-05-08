import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {

  const selectorsList = {    
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",    
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',   
    
  }

  it.skip('User Info Update', () => {

    cy.visit('/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard')
  })
  it.skip('login - Fail', () => {

    cy.visit('/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Test')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Test')
    cy.get('.oxd-button').click()
    cy.get('.oxd-alert')
  })
  it('login - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()    

    myInfoPage.fillPersonalDetails(chance.first(), chance.last(), chance.last())
    myInfoPage.fillEmployeeDetails('EmployId', 'otherId', '2025-07-29', '1979-10-10')
    myInfoPage.saveForm()  
       
    
   
  })
    
})