export const ELEMENTS = {
    FORMTITLE: 'h2',
    USERNAME: '#name',
    EMAIL: '#email',
    PASSWORD: '#password',
    LOGINBTN: () => cy.get('#register'),
    DELETEBTN: '#removeUser1',
    VALIDATIONRESPONSE: ':nth-child(1) > .error',
    VALIDATIONRESPONSEEMAIL: ':nth-child(2) > .error',
    VALIDATIONRESPONSEPASSWORD: ':nth-child(3) > .error',
    PAGETITLE: 'Cadastro de usuários',
    ID1:'#tdUserId1',
    ID2:'#tdUserId2'

};