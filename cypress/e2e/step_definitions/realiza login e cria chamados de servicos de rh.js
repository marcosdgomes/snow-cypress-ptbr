import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";
//Importa PageModels do ServicePortal (SP)
import servicePortal_Pages from "../../pages/ServicePortal_Page";

Given("usuário visita a página inicial do portal de serviços", () => {
    servicePortal_Pages.visitBaseUrl()
});

Then("página de login deve ser exibida", () => {
    servicePortal_Pages.verifyPageTitle()
});

When("usuário insere login e senha e clica em Sign In", (loginSubmit) => {
    servicePortal_Pages.typeLogin(loginSubmit);
});

Then("página inicial do Portal de Serviços deve ser apresentada", (verifyPageTitleSP) => {
    servicePortal_Pages.verifyFormPageTitle(verifyPageTitleSP)
});

When('usuário visita página inicial e visualiza a seção Acesso Rápido e o {string} e {string}', (sistemaAcesso, url) => {
    cy.contains(sistemaAcesso).parents('.card-item').find('.categories-item-link a').should('have.attr', 'href', url)
});

  Then('{string} e link com {string} deverão ser apresentados', () => {
    return true;
  });

When("usuário clica em 'Serviços de RH', seleciona tipo 'Abrir um Chamado Classificado', selecione subcategoria 'Admissão Compass' preenche todos os campos e submete", (registerFullAttendance, clickSubmit) => {
    servicePortal_Pages.typeFullRegisterAttendance(registerFullAttendance);
    cy.wait(10000)
    servicePortal_Pages.submitForm(clickSubmit);
    cy.wait(10000);
    cy.reload()
});

Then("deve ser exibida página de 'Acompanhamento do Chamado'", (verifyTitleForm) => {
    servicePortal_Pages.verifyFormPageTitle(verifyTitleForm)
});

When("Quando usuário clica em 'Serviços de RH' seleciona tipo 'Abrir chamado' e preenche todos os campos e submete", (registerFullAttendance, clickSubmit) => {
    servicePortal_Pages.typeFullRegisterAttendance(registerFullAttendance);
});

Then("deve ser exibida página de 'Acompanhamento do Chamado'", (verifyTitleForm) => {
    servicePortal_Pages.verifyFormPageTitle(verifyTitleForm)
});

When('usuário visita página inicial e clica no {string} disponível no Acesso Rápido', (sistemaAcesso) => {
    cy.contains(sistemaAcesso).parents('.card-item').find('.categories-item-link a').click()
});

  Then('{string} e {string} deverá ser apresentada', (sistemaAcesso, url) => {
    cy.get('#search').should('contain.text', sistemaAcesso, url);
  });
