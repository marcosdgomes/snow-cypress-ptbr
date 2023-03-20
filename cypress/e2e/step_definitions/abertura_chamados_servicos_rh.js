import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
//Importa PageModels do ServicePortal (SP)
import servicePortal_Pages from "../pages/ServicePortal_Page";

//#region .: Visita a página inicial e realiza login :.
Given("que usuário visita a página inicial e realiza login", () => {
    servicePortal_Pages.typeLogin();
});

When("carregamento da página inicial é finalizado", () => {
    cy.visit('/sp')
});

Then("página inicial deve ser apresentada", () => {
    servicePortal_Pages.verifyDashboardTexts('Serviços de RH', 'b');
});
//#endregion

//#region .: Usuário seleciona tipo de serviço e então clica no formulário:.

When("usuário seleciona {string}, {string} e {string}", (tipodeserviço, formulariodesolicitacao, url) => {
    cy.visit('/sp');
    servicePortal_Pages.selectServiceType(tipodeserviço, formulariodesolicitacao, url);
});

Then("formulário e URL {string} devem ser apresentados", (urlForm) => {
    return true;
});

//#endregion

//#region .: Usuário abre formulário de serviços de RH e abre chamado rápido :.
When("usuário clica em 'Solicitar Algo' no 'Serviços de RH'", () => {
    cy.visit('/sp?id=sc_cat_item&sys_id=7b72d4091bfdd110edbd87bfe54bcb40&sysparm_category=d17103081bbb0590edbd87bfe54bcb97&catalog_id=08ba31521b7fcd90f61c0dcbe54bcbfc')
});

When("seleciona tipo 'Abrir chamado rápido' preenche todos os campos e submete", () => {
    servicePortal_Pages.openSimpleTicket();
});

Then("a página de Acompanhamento do chamada é exibida", () => {
    servicePortal_Pages.verifySTFCallForm();              
});
//#endregion

//#region .: Usuário abre formulário de serviços de RH e abre chamado classificado :.
When("usuário clica em 'Serviços de RH', seleciona tipo 'Abrir um Chamado Classificado', seleciona subcategoria 'Admissão Compass' preenche todos os campos e submete", (registerFullAttendance) => {
    cy.visit('/sp')
    servicePortal_Pages.typeFullRegisterAttendance(registerFullAttendance);
    cy.wait(1000)
    servicePortal_Pages.submitForm();
});

Then("a página de Acompanhamento do chamado é exibida", () => {
    servicePortal_Pages.verifySTFCallForm();
});

When("Quando usuário clica em 'Serviços de RH' seleciona tipo 'Abrir chamado' e preenche todos os campos e submete", (registerFullAttendance) => {
    cy.visit('/sp')
    servicePortal_Pages.typeFullRegisterAttendance(registerFullAttendance);
});

Then("deve ser exibida página de 'Acompanhamento do Chamado'", () => {
    servicePortal_Pages.verifySTFCallForm()
});

When("esteja no formulário de serviços de RH", () => { 
    cy.visit('/sp?id=sc_cat_item&sys_id=7b72d4091bfdd110edbd87bfe54bcb40&sysparm_category=d17103081bbb0590edbd87bfe54bcb97&catalog_id=08ba31521b7fcd90f61c0dcbe54bcbfc')
});

When("inserir {string}, {string}, {string} e {string}", (categoryField, subcategoryField, productionunitField,solvergroupField) => {
    servicePortal_Pages.typeDefaultFormRHParams(categoryField, subcategoryField, productionunitField, solvergroupField );
});

When("preencher todos os campos string e submeter", () => {
    servicePortal_Pages.typeFullStrings();
    servicePortal_Pages.submitForm(); 
});
//#endregion


//#region .: Usuário acessa demais sistemas disponibilizados em Serviços de RH :.
When("usuário clica em {string} disponibilizado na seção 'Acessar outros sistemas'", () => {
    cy.visit('/sp?id=hr_services')
    servicePortal_Pages.accessOtherSystems();
});

Then("link {string} do {string} deverá ser apresentado", () => {
    return true;
});
//#endregion