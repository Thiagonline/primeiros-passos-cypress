class MyInfoPage {

    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            middleNameField:"[name='middleName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            dateCloseButton: ".--close",
            submitButton: "[type='submit']",
            submitButton1: ".oxd-select-text--arrow"    
            
        }

        return selectors
    }

    fillPersonalDetails(firstName, middleName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }

    fillEmployeeDetails(employeeId, otherId, driversLicenseDate, dateOfBirth) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().dateField).eq(0).clear().type(driversLicenseDate)
        cy.get(this.selectorsList().dateCloseButton).eq(0).click()
        cy.get(this.selectorsList().dateField).eq(1).clear().type(dateOfBirth)    
        cy.get(this.selectorsList().submitButton1).eq(0).click()//nacionalidade
        cy.contains('.oxd-select-dropdown > *, .oxd-select-option', 'Brazilian').click()
    }

    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click({ force: true })//salvar
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')

    }

      

    
}

export default MyInfoPage