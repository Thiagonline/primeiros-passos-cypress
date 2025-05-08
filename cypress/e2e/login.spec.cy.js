import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage'

const loginPage = new LoginPage()
const dashboardPage= new DashboardPage()

describe('Orange HRM Tests', () => {

    it('login - Success', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
        loginPage.checkAccessInvalid()
        dashboardPage.checkDashboardPage()
    })

    it('login - Fail', () => {

        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
        loginPage.checkAccessInvalid()
        
    })
    