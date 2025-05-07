class MenuPage {

    selectorsList() {
        const selectors = {
            myinfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
            performanceButton: '[href="/web/index.php/performance/viewPerformanceModule"]',
            
        }

        return selectors
    }

    accessMyInfo() {
        cy.get(this.selectorsList().myinfoButton).click()
    }

    accessPerformance() {  
        cy.get(this.selectorsList().performanceButton).click()      
    }

    
}

export default MenuPage