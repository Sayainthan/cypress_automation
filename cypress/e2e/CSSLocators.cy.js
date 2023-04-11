describe('CSSLocators', () => {
    it('should find the content "type"', () => {
        cy.visit("https://example.cypress.io")
        cy.contains('type')
        cy.contains('submit')
    });

    it('should find the content "submit"', () => {
        cy.visit("https://example.cypress.io")
        cy.contains('submit')
    });
    it.only('finds the link "Quering"', () => {

        cy.visit("https://example.cypress.io")
        cy.contains("get").click()

    })

})
