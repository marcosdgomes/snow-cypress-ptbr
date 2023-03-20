import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";
//Importa PageModels do ServicePortal (SP)
import servicePortal_Pages from "../pages/ServicePortal_Page";
//#region .: Visita a página inicial e realiza login :.
Given("usuário visita a página inicial e realiza login", () => {
    servicePortal_Pages.typeLogin();
});

Then("página inicial deve ser apresentada", () => {
    servicePortal_Pages.verifyPageTitle()
});

When("usuário insere login e senha e clica em Sign In", (loginSubmit) => {
    servicePortal_Pages.typeLogin(loginSubmit);
});

Then("página inicial do Portal de Serviços deve ser apresentada", (verifyPageTitleSP) => {
    servicePortal_Pages.verifyFormPageTitle(verifyPageTitleSP)
});
//#endregion

When("usuário clica em 'Serviços de RH', seleciona tipo 'Abrir um Chamado Classificado', selecione subcategoria 'Admissão Compass' preenche todos os campos e submete", (registerFullAttendance, clickSubmit) => {
    cy.visit('/sp')
    servicePortal_Pages.typeFullRegisterAttendance(registerFullAttendance);
    cy.wait(1000)
    servicePortal_Pages.submitForm(clickSubmit);
    cy.wait(1000);
    cy.reload()
});

Then("deve ser exibida página de 'Acompanhamento do Chamado'", (verifyTitleForm) => {
    servicePortal_Pages.verifyFormPageTitle(verifyTitleForm)
});

When("Quando usuário clica em 'Serviços de RH' seleciona tipo 'Abrir chamado' e preenche todos os campos e submete", (registerFullAttendance) => {
    cy.visit('/sp')
    servicePortal_Pages.typeFullRegisterAttendance(registerFullAttendance);
});

Then("deve ser exibida página de 'Acompanhamento do Chamado'", (verifyTitleForm) => {
    servicePortal_Pages.verifyFormPageTitle(verifyTitleForm)
});
