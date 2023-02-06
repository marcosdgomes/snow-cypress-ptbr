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
      cy.visit('/sp')
    }
  
    verifyPageTitle() {
      return cy.title().should('contains', elem.ELEMENTS.PAGETITLE);
    }

    verifyFormPageTitle() {
      cy.title().should('contains', 'Portal de Serviço');
    }
    // Realiza login
    typeLogin(){
      cy.get('#userNameInput').click()
      .type(elem.ELEMENTS.USERNAMELOGIN);
      cy.get('#passwordInput').click()
      .type(elem.ELEMENTS.PASSWORDLOGIN);
      cy.get(elem.ELEMENTS.LOGINBUTTON).click()
    }
    // Seleciona tipo Registrar Atendimento, seleciona Admissão Compass e preenche todos os campos com dados aleatórios
    typeFullRegisterAttendance(){
      cy.contains('b', 'Serviços de RH').should('be.visible').click().wait(4000);
      cy.get('#sp_formfield_hr_email').click().type(randomEmail);
      cy.get('#sp_formfield_hr_contact_phone').type(randomPhone);
      cy.get('#select2-chosen-1').click();
      cy.get('#s2id_autogen1_search').click().type('Abrir um Chamado Classificado').type('{enter}');
      cy.get('#s2id_sp_formfield_u_category > .select2-choice').click();
      cy.get('#s2id_autogen12_search').click().type('Admissão').wait(500).tab();
      cy.get('#s2id_sp_formfield_u_subcategory > .select2-choice > .select2-arrow > b').click();
      cy.get('#s2id_autogen13_search').click().type('Admissão Compass').wait(500).tab();
      cy.get('#s2id_sp_formfield_u_production_unit > .select2-choice').click();
      cy.get('#s2id_autogen30_search').click().type('Barra Filial CSC').wait(500).type('{enter}');
      cy.get('#startDate').click().tab();
      cy.get(':nth-child(9) > .form-group > .form-control').click().type(randomPhone);
      cy.get(':nth-child(10) > .form-group > .form-control').click().type(randomName);
      cy.get(':nth-child(11) > .form-group > .form-control').click().type('Stefanini Brasil');
      cy.get(':nth-child(12) > .form-group > .form-control').click().type('Requisição de testes');
      cy.get(':nth-child(13) > .form-group > .form-control').click().type('Mid-level QA Analyst');
      cy.get(':nth-child(14) > .form-group > .form-control').click().type(randomEmail);
      cy.get(':nth-child(16) > .form-group > .form-control').click().type(randomPassword);
      cy.get('#sp_formfield_subject').click().type('Automated Subject Test').tab().type(elem.ELEMENTS.LOREMDESCRIPTION);
      cy.get(':nth-child(2) > .col-sm-6 > .form-control').select('Sim');
      cy.get(':nth-child(3) > .col-sm-6 > .form-control').select('Não');
      cy.get(':nth-child(4) > .col-sm-6 > .form-control').select('Sim');
      cy.get(':nth-child(5) > .col-sm-6 > .form-control').select('Não');
      cy.get(':nth-child(6) > .col-sm-6 > .form-control').select('20%');
      cy.get(':nth-child(7) > .col-sm-6 > .form-control').select('11 Admissão Futura');
    }

    typeTicket(){
      
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

