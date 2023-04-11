describe('handle dropdowns', () => {

    it('Dropdown with select', () => {

        cy.visit('https://itera-qa.azurewebsites.net/home/automation')

        //mit --- "type('{enter}')" --- kann man eine Eingabe erzeugen
        cy.get('#address').type('Hallo Adresse!').type('{enter}')
        cy.get('#address').should('have.text', '')

        /*cy.get(".custom-select")
            .select('Spain')
            .should('have.value','2')
*/
    })

    it('statische dropdowns', () => {

        cy.visit('https://www.wikipedia.org/')

        //in Suchfeld wird 'Deutschland' eingetippt und wenn die Vorschlaege mit dem
        //eingegebenem Wort uebereinstimmt wird diese angeklickt.
        cy.get("#searchInput").type('Deutschland')
        cy.get('.suggestion-text').contains('Deutschland').click()

    })

    //  .only ---> nur der it-block mit only wird ausgefuehrt
    it.only('dynamische Dropdowns', () => {

        cy.visit('https://www.google.com/')

        // ----------------------------------------------

        //alert wird akzeptiert
        cy.get("#L2AGLb").click()

        // -----------------------------------------------

        //in suchfeld wird 'cypress automation' eingetippt
        cy.get('.gLFyf').type('cypress automation')

        //tool soll 3 sekundne warten
        cy.wait(3000)

        //schauen, dass genau 12 suchvorschlaege aufgelistet werden
        cy.get('.wM6W7d>span').should('have.length', 12)

        //alle suchvorschlaege werden ausgewaehlt
        //$el: Elemente der Liste, index: Anzahl, $list: Array Liste
        cy.get('.wM6W7d>span').each(($el, index, $list) => {

            //wenn suchvorschlag gleich wie 'cypress automation tutorial'
            if ($el.text() === 'cypress automation tutorial') {
                //dann waehle den suchvorschlag
                cy.wrap($el).click()
            }
        })

        //nach der eingabe soll in suchfeld das eingetippte wort drinnen stehen
        cy.get('.gLFyf').should('have.value', 'cypress automation tutorial')

    })

})