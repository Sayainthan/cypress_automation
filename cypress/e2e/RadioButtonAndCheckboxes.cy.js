describe("Check UI Elements", () => {

    //bei radio buttoons ist nur eine auswahl moeglich
    it('Checking Radio Buttons', () => {

        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        //werden angezeigt
        cy.get("#female").should('be.visible')
        cy.get("#male").should('be.visible')

        //Male wird ausgewaehlt, Female wird nicht ausgewaehlt
        cy.get("#male").check().should('be.checked')
        cy.get("#female").should('not.be.checked')

        //Female wird ausgewaehlt, Male wird nicht ausgewaehlt
        cy.get("#female").check().should('be.checked')
        cy.get("#male").should('not.be.checked')

    })

   //bei checkboxen sind mehrere auswahlmoeglichkeiten moeglich, daher auch check() und uncheck()
    it('Checking Checkboxes Mo-Su', () => {

        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        //alle CHeckboxen auswaehlen Variante 1: einzeln
        cy.get("#monday").check().should('be.checked')
        cy.get("#tuesday").check().should('be.checked')
        cy.get("#wednesday").check().should('be.checked')
        cy.get("#thursday").check().should('be.checked')
        cy.get("#friday").check().should('be.checked')
        cy.get("#saturday").check().should('be.checked')
        cy.get("#sunday").check().should('be.checked')

        //alle Checkboxen auswaehlen Variante 2: alle auf einmal
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
        //alle CHeckboxen abweahlen
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')

        //erste Checkbox auswaehlen
        cy.get("input.form-check-input[type='checkbox']").first().check()

        //letzte Checkbox auswaehlen
        cy.get("input.form-check-input[type='checkbox']").last().check()

    })

    //1. Radio Button 'Years of experience in test automation'
    //2. checkbox 'Which automation tools/ frameworks do you use?'
    it.only('Radio button experience & Checking Checkboxes automation tool/frameworks', () => {

        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        //1.
        cy.get("label[for='2years']").click()

        //2.
        cy.get("label[for='serenity']").click()

    })
})