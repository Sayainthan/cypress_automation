describe("Assertions demo", () => {


    it("Implicit assertions", () => {

        //URL der Internetseite
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        // implicit keywords: ---> should & and

        //include ---> enthält den Pfad
        //eq ---> vergleicht
        //contain ---> enthält den String
        //exist ---> ueberprueft ob das Element existiert
        //have.length ---> Element wird mit der Anzahl verglichen
        //etc.

        //1. Schreibweise mit 'cy.url()'
        cy.url().should('include', 'in')
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('contain', 'orangehrmlive.com')

        //2. Schreibweise mit '.should'
        cy.url().should('include', 'in')
            .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            .should('contain', 'orangehrmlive.com')

        //3. Schreibweise mit 'and'
        cy.url().should('include', 'in')
            .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            .and('contain', 'orangehrmlive.com')

        //negative Assertions
        cy.url().should('not.include', 'idfdfn')
            .and('not.eq', 'https://opensource-demo.orangehrmlive.com/fdfdweb/index.php/auth/login')
            .and('not.contain', 'orangdsfdfdsfehrmlive.com')
        //Titel wird getestet
        // cy.title().should('include','Orange')
        //     .and('eq','OrangeHRM')
        //     .and('contain','HRM')

        //'be.visible' ---> Element wird angezeigt
        //'exist' ---> Element existiert
        cy.get('.orangehrm-login-branding > img').should('be.visible')
            .and('exist')

        //'have.length' ---> Anzahl der Elemente
        cy.get('a').should('have.length', '5')

        //greife auf Username Fleache zu und schreibe "Admin" hinein
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        // soll ueberpruefen ob der Wert in der Flaeche mit dem was reingeschrieben uebereinstimmt
        // cy.get("input[placeholder='Username']").should('have.value',"Admin")
        // cy.get("input[placeholder='Password']").should('have.value',"admin123")

    })


    it.only("explicit assertions", () => {

        // BBD Assertions ---> 'expect'
        // TDD Assertions ---> 'assert'
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        //schreibe in Username Flaeche 'Admin'
        cy.get("input[placeholder='Username']").type("Admin")
        //schreibe in Passwort Flaeche 'admin123'
        cy.get("input[placeholder='Password']").type("admin123")
        //klicke auf den Login Button
        cy.get("button[type='submit']").click()

        //deklaliere expName und weise den Wert 'Max Mustername' zu
        let expName = "Max Mustermann";

        //userdropdown-name wird in x uebergeben
        cy.get(".oxd-userdropdown-name").then((x) => {

            //x wird an actName zugewiesen
            let actName = x.text()

            //BDD
            expect(actName).to.equal(expect)
            expect(actName).not.to.equal(expect)

            //TDD
            assert.equal(actName, expName)
            assert.notEqual(actName, expName)

        })
    })
})
