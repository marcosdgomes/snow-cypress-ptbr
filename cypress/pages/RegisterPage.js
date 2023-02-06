import { faker } from '@faker-js/faker';
const elem = require('./RegisterElements');
const randomName = faker.name.fullName();
const randomEmail = faker.internet.email();
const randomPassword = faker.internet.password();
const randomUsername = faker.internet.userName();

class registerPages{

  visitBaseUrl() {
    cy.visit('/');
  }

  verifyPageTitle() {
    return cy.title().should('eq', elem.ELEMENTS.PAGETITLE);
  }

  typeName(){
    cy.get(elem.ELEMENTS.USERNAME)
    .type(randomName);
  }

  typeEmail(){
    cy.get(elem.ELEMENTS.EMAIL)
    .type(randomEmail);
  }

  typePassword(){
    cy.get(elem.ELEMENTS.PASSWORD)
    .type(randomPassword);
  }

  typeUsername(){
    cy.get(elem.ELEMENTS.USERNAME)
    .type(randomUsername);
  }

  typeIncorretEmail(){
    cy.get(elem.ELEMENTS.EMAIL)
    .type(randomUsername);
  }

  typeIncorretPassword(){
    cy.get(elem.ELEMENTS.PASSWORD)
    .type('1234');
  }

  deleteRegister(){
    cy.get(elem.ELEMENTS.DELETEBTN)
    .click()
  }

  clickLogin() {
    elem.ELEMENTS.LOGINBTN().click();
  }

  validadeErrorName(){
    cy.contains('O campo Nome é obrigatório');
  }

  validadeErrorEmail(){
    cy.contains('O campo E-mail é obrigatório');
  }

  validadeErrorPassword(){
    cy.contains('O campo Senha é obrigatório');
  }

  validadeErrorIncompleteName(){
    cy.contains('Por favor, insira um nome completo');
  }

  validateInvalidEmail(){
    cy.contains('Por favor, insira um e-mail válido.');
  }

  validateInvalidPassword(){
    cy.contains('A senha deve conter ao menos 8 caracteres.');
  }

  validateFirstUser(){
    cy.contains('1');
  }
}

export default new registerPages();