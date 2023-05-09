import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";
//Importa PageModels do ServicePortal (SP)
import servicePortal_Pages from "../pages/ServicePortal_Page";

//#region .: Visita a página inicial e realiza login :.
Given("usuário visita a página inicial e realiza login", () => {
    servicePortal_Pages.typeLogin();
});

//#endregion

When("eu seleciono o tipo de formulário 'Requisições Servicenow - Alpar'", () => {
    cy.visit('/sp?id=sc_category&sys_id=340e09f3dba1f30017a25c4bf396191f&catalog_id=e0d08b13c3330100c8b837659bba8fb4');
    cy.contains('Requisições Servicenow - Alpar').click();
});

And("eu preencho os campos obrigatórios", () => {
    
});



