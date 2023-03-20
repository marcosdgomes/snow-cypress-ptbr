export const ELEMENTS = {
    
    //Elementos tela de login
    USERNAMEINPUT: '#userNameInput',
    PASSWORDINPUT: '#passwordInput',
    SUBMITFORMBUTTON: '.text-right > #submit-btn',
    USERNAMELOGIN: 'TR041328',
    PASSWORDLOGIN: '45204520@RAIZEN',
    LOGINBTN: () => cy.get('#submitButton'),
    LOGINBUTTON: '#submitButton',
    PAGETITLE: 'Portal de Serviço - Portal de Serviço',

    //Elementos Dashboard
    SERVICOSRHBUTTON: '#hr_services > .iconlink > :nth-child(2) > .col-xs-12 > .cardTittle > .ng-binding',
    ITSERVICESBUTTON: '#it_services',
    PRSERVICEBUTTON: '#pr_services',
    DLSERVICEBUTTON: '#dl_services',
    PROFILEDROPDOWNBUTTON: '#profile-dropdown',
    CARTDROPDOWNBUTTON: '#cart-dropdown',

    //Elementos formulário serviços de RH - Default/Abrir um chamado simples
    FORMRHEMAIL: '#sp_formfield_hr_email',
    FORMRHTELEFONE: '#sp_formfield_hr_contact_phone',
    FORMRHTIPO: '#select2-chosen-1',
    FORMRHTIPOPESQUISA:'#s2id_autogen1_search',
    FORMRHASSUNTO: '#sp_formfield_subject',
    FORMRHDESCRICAO: '#sp_formfield_vs_description',
    LOREMDESCRIPTION: 'Short description to tests',
    FORMSUBMITBUTTON: '#submit-btn',

    // Elementos formulário serviços de RH - Tipo Abrir um chamado classificado
    FORMRHCATEGORY: '#s2id_sp_formfield_u_category',
    FORMRHCATEGORYSEARCH: '#s2id_autogen14_search',
    FORMRHSUBCATEGORY: '#s2id_sp_formfield_u_subcategory',
    FORMRHSUBCATEGORYSEARCH: '#s2id_autogen15_search',
    FORMRHPRODUCTIONUNIT: '#s2id_sp_formfield_u_production_unit',
    FORMRHPRODUCTIONUNITSEARCH: '#s2id_autogen32_search',
    FORMRHSOLVERGROUP: '#s2id_sp_formfield_u_solver_group',
    FORMRHSOLVERGROUPSEARCH: '#s2id_autogen33_search',
    ADMISSIONCONPS: '#sp_formfield_u_conps',   
    ADMISSIONCARG: '#sp_formfield_u_cargo',
    ADMISSIONCAND: '#sp_formfield_u_nome_do_candidato',
    ADMISSIONDATE: '#sp_formfield_data_de_admisso',

    //Elementos personalizados formulário serviços de RH - Fluxo Subcategoria 'Admissão Compass'
    ADMISSIONESTAG: ':nth-child(2) > .col-sm-6 > .form-control',
    ADMISSIONPERIC: ':nth-child(3) > .col-sm-6 > .form-control',
    ADMISSIONPCD: ':nth-child(4) > .col-sm-6 > .form-control',
    ADMISSIONPOSIC: ':nth-child(11) > .form-group > .form-control',
    ADMISSIONINSAL: ':nth-child(6) > .col-sm-6 > .form-control',
    ADMISSIONPEND: ':nth-child(7) > .col-sm-6 > .form-control',
    ADMISSIONFINPROC: ':nth-child(8) > .col-sm-6 > .form-control',
    ADMISSIONCEL: ':nth-child(9) > .form-group > .form-control',
    ADMISSIONGEST: ':nth-child(8) > .form-group > .form-control',
    ADMISSIONREQ: ':nth-child(12) > .form-group > .form-control',
    ADMISSIONEMAIL: ':nth-child(10) > .form-group > .form-control',
    ADMISSIONALTPOS: ':nth-child(15) > .form-group > .form-control',
    
    //Elementos fluxo de Admissão

};