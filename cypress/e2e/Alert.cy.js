describe('ALerts', () => {

    //es gibt 3 verschiedene alerts.
    // 1. JS Alert: mit einer eingabe 'OK'
    // 2. JS Confirm: mit zwei auswahlmoeglichkeiten. 'OK' und 'Abbrechen'
    // 3. JS Prompt: Meldung mit Texteingabe und anschliessend 'OK' und 'Abbruch'
    // 4. JS Authenticator: Username und Passwort anmeldung um Seite zu besuchen

    //1.
    it('JS Alert', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click();

        //methode window:alert wird in t gespeichert
        cy.on('window:alert', (t) => {
            //t muss enthalten 'I am a JS Alert'
            expect(t).to.contains('I am a JS Alert')
        })
        //Dieser text sollte bei Result stehen
        cy.get('#result').should('have.text', 'You successfully clicked an alert')
    })

    //2. OK-Button
    it('JS Confirm - OK-Button', () => {

        //methode window:confirm wird in t gespeichert
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click();

        cy.on('window:confirm', (t) => {
            expect(t).to.contains('I am a JS Confirm')
        })
        //Dieser text sollte bei Result stehen
        cy.get('#result').should('have.text', 'You clicked: OK')
    })

    //2. Cancel-Button
    it('JS Confirm - Cancel-Button', () => {

        //methode window:confirm wird in t gespeichert
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click();

        cy.on('window:confirm', (t) => {
            expect(t).to.contains('I am a JS Confirm')
        })

        //cypress klickt auf Cancel Button
        cy.on('window:confirm', () => false);
        //Dieser text sollte bei Result stehen
        cy.get('#result').should('have.text', 'You clicked: Cancel')
    })

    //3. OK-Button mit Texteingabe
    it('JS Prompt - Ok-Button', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((win) => {

            cy.stub(win, 'prompt').returns('welcome');

        })
        cy.get("button[onclick='jsPrompt()']").click();
        cy.get('#result').should('have.text', 'You entered: welcome')

    })

    //4. Authenticator Alert
    it('Athenticator', () => {

        //möglichkeit 1: 'auth:{username: 'xyz', password: 'xyz'}'
        cy.visit('https://the-internet.herokuapp.com/basic_auth', {
            auth: {
                username: 'admin',
                password: 'admin'
            }
        })

        //Text soll enthalten: Congratulation!
        cy.get("div[class='example'] p").should('have.contain','Congratulations!')
    })

    it.only('Athenticator', () => {

        //möglichkeit 2: direkt im Link möglich: 'admin:admin@'
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        //Text soll enthalten: Congratulation!
        cy.get("div[class='example'] p").should('have.contain','Congratulations!')
    })

})