describe('Testeo Inicio Sesion', () => {
    beforeEach (()=> {
      cy.visit('/login')
    });
    it ('Visitar Pagina Alumno',()=>{
        cy.get('ion-input[name="ingreso"]').should('be.visible')
        cy.wait(1000)
        cy.get('ion-input[name="ingreso"]').type('sdomingues@institucion.edu')
        cy.wait(2000)
        cy.get('ion-input[name="contraseña"]').type('12345')
        cy.wait(1000)
        cy.get('ion-button[name="iniciar_sesion"]').click()
        cy.wait(2000)
        cy.url().should('include','/home-alum')
        cy.wait(3000)
    })
    it ('Visitar Pagina Profesor',()=>{
        cy.get('ion-input[name="ingreso"]').should('be.visible')
        cy.wait(1000)
        cy.get('ion-input[name="ingreso"]').type('Email.Martinez@institucion.edu')
        cy.wait(2000)
        cy.get('ion-input[name="contraseña"]').type('OrangweRabbut77')
        cy.wait(1000)
        cy.get('ion-button[name="iniciar_sesion"]').click()
        cy.wait(2000)
        cy.url().should('include','/home')
        cy.wait(3000)
    })

});
describe('Testeo Profesor', () => {
    beforeEach (()=> {
      cy.visit('/home')
    });
    it ('Generacion QR', () => {
        cy.wait(2000)
        cy.get('ion-button[name="GenerarQR"]').click()
        cy.wait(2000)
        cy.url().should('include','/gen-qrcls')
        cy.wait(2000)
        cy.get('ion-button[name="BotonGenerador"]').click({ multiple: true, force: true} )
        cy.wait(2000)
        cy.contains('11/09/2024').click()
        cy.wait(60000)
        })
    });

    describe('Testeo Profesor', () => {
        beforeEach (()=> {
          cy.visit('/home')
        });
        it ('Revision alumno', () => {
            cy.wait(2000)
            cy.get('ion-button[name="lista_secciones"]').click()
            cy.wait(2000)
            cy.url().should('include','/list-cur-docen')
            cy.wait(2000)
            cy.get('ion-button[name="Asistencia"]').click({ multiple: true, force: true} )
            cy.wait(3000)
        });
    })

    describe('Testeo Busqueda', () => {
    beforeEach (()=> {
      cy.visit('/ver')
    });
    it ('Buscar alumno',()=>{
        cy.get('select').select('Sección')
        cy.wait(1000)
        cy.get('input[name="buscarAlumnos"]').should('be.visible')
        cy.wait(1000)
        cy.get('input[name="buscarAlumnos"]').type('003D')
        cy.wait(1000)
        cy.get('ion-button[name="botonBuscar"]').click()
        cy.wait(3000)
    })
    });

    describe('Testeo 404', () => {
        beforeEach (()=> {
          cy.visit('/INGRESO')
        });
        it ('Visita 404 y Vuelve', () => {
            cy.wait(2000)
            cy.get('ion-button[name="Volver"]').click()
            cy.wait(3000)
        })
    });

    describe('Testeo Joke', () => {
        beforeEach (()=> {
          cy.visit('/login')
        });
        it ('visita pagina chistosa', () => {
            cy.get('ion-button[name="404"]').click()
            cy.url().should('include','/pepe')
            cy.get('ion-button[name="sorpresa"]').click()
        })
    });