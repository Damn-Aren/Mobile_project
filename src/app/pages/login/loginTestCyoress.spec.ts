describe('Testeo Inicio Sesion', () => {
    beforeEach (()=> {
      cy.visit('/login')
    });
    it ('Visitar Pagina Alumno',()=>{
        cy.get('ion-input[name="ingreso"]').should('be.visible')
        cy.get('ion-input[name="ingreso"]').type('sdomingues@institucion.edu')
        cy.get('ion-input[name="contraseña"]').type('12345')
        cy.get('ion-button[name="iniciar_sesion"]').click()
        cy.url().should('include','/home-alum')
    })
    it ('Visitar Pagina Profesor',()=>{
        cy.get('ion-input[name="ingreso"]').should('be.visible')
        cy.get('ion-input[name="ingreso"]').type('Email.Martinez@institucion.edu')
        cy.get('ion-input[name="contraseña"]').type('OrangweRabbut77')
        cy.get('ion-button[name="iniciar_sesion"]').click()
        cy.url().should('include','/home')
    })

});
describe('Testeo Profesor', () => {
    beforeEach (()=> {
      cy.visit('/home')
    });
    it ('Generacion QR', () => {
        cy.get('ion-button[name="GenerarQR"]').click()
        cy.url().should('include','/gen-qrcls')
        cy.get('ion-button[name="BotonGenerador"]').click()
        
    })
    describe('Testeo 404', () => {
        beforeEach (()=> {
          cy.visit('/INGRESO')
        });
        it ('Visita 404 y Vuelve', () => {
            cy.get('ion-button[name="Volver"]').click()
        })
    });
    /*describe('Testeo Joke', () => {
        beforeEach (()=> {
          cy.visit('/login')
        });
        it ('visita pagina chistosa', () => {
            cy.get('ion-button[name="404"]').click()
            cy.url().should('include','/pepe')
            cy.get('ion-button[name="sorpresa"]').click()
        })
    });*/
});


