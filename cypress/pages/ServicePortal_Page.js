import { faker } from '@faker-js/faker/locale/pt_BR';
//Gera dados aleatórios do faker em cada const
const randomName = faker.name.fullName();
const randomEmail = faker.internet.email();
const randomPassword = faker.internet.password();
const randomUsername = faker.internet.userName();
const randomPhone = faker.phone.number();
//Importa elementos/seletores css do Service Portal
const elem = require('./ServicePortal_Elements');

class servicePortal_Pages{

    visitBaseUrl() {
      cy.visit('/sp');
    }
  
    verifyPageTitle() {
      cy.title().should('contains', elem.ELEMENTS.PAGETITLE);
    }

    verifyFormPageTitle() {
      cy.title().should('contains', 'Portal de Serviço');
    }
    // Realiza login
    typeLogin(){
      cy.get(elem.ELEMENTS.USERNAMEINPUT).click()
      .type(elem.ELEMENTS.USERNAMELOGIN);
      cy.get(elem.ELEMENTS.PASSWORDINPUT).click()
      .type(elem.ELEMENTS.PASSWORDLOGIN);
      cy.get(elem.ELEMENTS.LOGINBUTTON).click()
    }
    // Seleciona tipo Registrar Atendimento, seleciona Admissão Compass e preenche todos os campos com dados aleatórios
    typeFullRegisterAttendance(){
      cy.contains('b', 'Serviços de RH').should('be.visible').click();
      cy.contains('h4', 'Solicitar Algo').should('be.visible').click();
      cy.wait(4000);
      cy.get(elem.ELEMENTS.FORMRHEMAIL).click().type(randomEmail);
      cy.get(elem.ELEMENTS.FORMRHTELEFONE).type(randomPhone);
      cy.get(elem.ELEMENTS.FORMRHTIPO).click()
      cy.get(elem.ELEMENTS.FORMRHTIPOPESQUISA).type('Abrir um Chamado Classificado').type('{enter}');
      cy.get(elem.ELEMENTS.FORMRHCATEGORY).click();
      cy.get(elem.ELEMENTS.FORMRHCATEGORYSEARCH).click().type('Admissão').wait(800).type('{enter}');
      cy.get(elem.ELEMENTS.FORMRHSUBCATEGORY).click();
      cy.get(elem.ELEMENTS.FORMRHSUBCATEGORYSEARCH).click().type('Admissão Compass').wait(800).type('{enter}');
      cy.get(elem.ELEMENTS.FORMRHPRODUCTIONUNIT).click();
      cy.get(elem.ELEMENTS.FORMRHPRODUCTIONUNITSEARCH).type('Barra Filial CSC').wait(800).type('{enter}');
      cy.get('#startDate').click();
      cy.get(elem.ELEMENTS.ADMISSIONESTAG).select('Sim');
      cy.get(elem.ELEMENTS.ADMISSIONPERIC).select('Não');
      cy.get(elem.ELEMENTS.ADMISSIONPCD).select('Sim');
      cy.get(elem.ELEMENTS.ADMISSIONPOSIC).select('Não');
      cy.get(elem.ELEMENTS.ADMISSIONINSAL).select('20%');
      cy.get(elem.ELEMENTS.ADMISSIONPEND).select('11 Admissão Futura');
      cy.get(elem.ELEMENTS.ADMISSIONFINPROC).select('Substituição por outra CONPS');
      cy.get(elem.ELEMENTS.ADMISSIONCEL).click().type(randomPhone);
      cy.get(elem.ELEMENTS.ADMISSIONCAND).click().type(randomName);
      cy.get(elem.ELEMENTS.ADMISSIONGEST).click().type('Stefanini Brasil');
      cy.get(elem.ELEMENTS.ADMISSIONREQ).click().type('Requisição de testes');
      cy.get(elem.ELEMENTS.ADMISSIONCARG).click().type('Mid-level QA Analyst');
      cy.get(elem.ELEMENTS.ADMISSIONEMAIL).click().type(randomEmail);
      cy.get(elem.ELEMENTS.ADMISSIONCONPS).click().type(randomPassword);
      cy.get(elem.ELEMENTS.FORMRHASSUNTO).click().type('Automated Subject Test').tab().type(elem.ELEMENTS.LOREMDESCRIPTION);
      cy.contains('Solte seus arquivos aqui ou clique para fazer o upload').selectFile('cypress/fixtures/data.json');
    }

    openSimpleTicket(){
      cy.contains('b', 'Serviços de RH').should('be.visible').click().wait(4000);
      cy.get(elem.ELEMENTS.FORMRHEMAIL).click().type(randomEmail);
      cy.get(elem.ELEMENTS.FORMRHTELEFONE).type(randomPhone);
      cy.get(elem.ELEMENTS.FORMRHTIPO).click();
      cy.get(elem.ELEMENTS.FORMRHTIPOPESQUISA).click().type('Abrir um Chamado Simples').type('{enter}');
    }

    typePassword(){
      cy.get(elem.ELEMENTS.PASSWORDINPUT).click()
      .type(elem.ELEMENTS.PASSWORDLOGIN);
    }
  
    typeUsername(){
      cy.get(elem.ELEMENTS.USERNAME)
      .type(randomUsername);
    }
  
    submitForm() {
      cy.get(elem.ELEMENTS.SUBMITFORMBUTTON).click();
    }

  }
  
  export default new servicePortal_Pages();

  
