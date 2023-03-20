//#region .: Importa bibliotecas e PageModels :.
import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";
//Importa PageModels do ServicePortal (SP)
import servicePortal_Pages from "../pages/ServicePortal_Page";
//#endregion

//#region .: Acessa dashboard e valida textos e imagens carregadas :.
Given("que usuário visita a página inicial e realiza login", () => {
    servicePortal_Pages.typeLogin();
});

Then("{string} com {string} deverão ser apresentados", (textos, tipo) => {
    servicePortal_Pages.verifyDashboardTexts(textos, tipo);
});

//#endregion

//#region .: Visita página de login e tenta realizar login com parametros:.

Given("que eu cliquei no sistema {string} e a senha {string}", (username, password) => {
    servicePortal_Pages.typeLoginParameters(username, password);
});

When("aciono o botão Login", () => {
    return true;
});

Then("eu vejo a mensagem de erro", () => {
  cy.get('#errorText').should('be.visible');
});
//#endregion

//#region .: Visita Service portal e valida seção Acesso Rápido :.
When('usuário visita página inicial e visualiza a seção Acesso Rápido e o {string} e {string}', (sistemaAcesso, url) => {
  servicePortal_Pages.typeLogin();
  cy.visit('/sp');
  cy.contains(sistemaAcesso).parents('.card-item').find('.categories-item-link a').then(($link) => {
    const href = $link.prop('href');
    expect(href.startsWith(url)).to.be.true;
  });
});

Then('{string} e link com {string} deverão ser apresentados', () => {
  return true;
});

 // Then('{string} e {string} deverá ser apresentada', (sistemaAcesso, url) => {
 //   cy.get('#search').should('contain.text', sistemaAcesso, url);
 // });

 //#endregion

//#region .: Acessa dashboard e clica nos elementos visiveis :.

Given("que o usuário esteja no dashboard", () => {
  servicePortal_Pages.typeLogin();
  cy.visit('/sp');
});

When("usuário clica nos botões visiveis em tela", () => {
servicePortal_Pages.validateDashboardElements();



 // cy.visit('/sp?id=sc_cat_item&sys_id=7b72d4091bfdd110edbd87bfe54bcb40&sysparm_category=d17103081bbb0590edbd87bfe54bcb97&catalog_id=08ba31521b7fcd90f61c0dcbe54bcbfc');
 // servicePortal_Pages.typeDefaultFormRH();
 // servicePortal_Pages.typeFullStrings();
});

Then("ações devem ser executadas e elementos devem estar presentes em tela", () => {
  return true;
});

//#endregion