//#region .: Importação de bibliotecas e elementos :.
import { faker } from "@faker-js/faker/locale/pt_BR";
import { expect } from "chai";

//Gera dados aleatórios do faker em cada const
const randomName = faker.name.fullName();
const randomEmail = faker.internet.email();
const randomPassword = faker.internet.password();
const randomUsername = faker.internet.userName();
const randomPhone = faker.phone.number();

//Importa elementos/seletores css do Service Portal
const elem = require("./ServicePortal_Elements");

//#endregion

class servicePortal_Pages {
  //#region .: Verifica textos e elementos do dashboard do portal de serviços :.
  //Valida somente textos visiveis na tela
  verifyDashboardTexts(textos, tipo) {
    // Valida título da página
    cy.title().should("contains", "Portal de Serviço");
    // verifica se elementos das imagens estão visiveis e se estão carregando corretamente
    cy.get("img#stf-banner-home-desktop")
      .should("be.visible")
      .should(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
    cy.contains(tipo, textos).should("be.visible");
  }
  validateDashboardElements() {
    //Clica 6 vezes no botão de next e prev
    Cypress._.times(6, () => {
      cy.get(".next-arrow").click();
    });
    Cypress._.times(6, () => {
      cy.get(".prev-arrow").click();
    });
    cy.get(elem.ELEMENTS.PROFILEDROPDOWNBUTTON).click();
    cy.get(elem.ELEMENTS.CARTDROPDOWNBUTTON).click();
    cy.url().should("contains", "https://raizendev.service-now.com/sp");
  }
  //#endregion

  //#region .: Prenche campos default do formulário serviços de RH :.
  typeDefaultFormRHParams(category, subcategory, productionunit, solvergroup) {
    cy.get(elem.ELEMENTS.FORMRHTELEFONE).type(randomPhone);
    cy.get(elem.ELEMENTS.FORMRHTIPO).click();
    cy.get(elem.ELEMENTS.FORMRHTIPOPESQUISA)
      .type("Abrir um Chamado Classificado")
      .type("{enter}");
    cy.get(elem.ELEMENTS.FORMRHCATEGORY).click();
    cy.get(elem.ELEMENTS.FORMRHCATEGORYSEARCH)
      .click()
      .type(category)
      .wait(800)
      .type("{enter}");
    cy.get(elem.ELEMENTS.FORMRHSUBCATEGORY).click();
    cy.get(elem.ELEMENTS.FORMRHSUBCATEGORYSEARCH)
      .click()
      .type(subcategory)
      .wait(800)
      .type("{enter}");
    cy.get(elem.ELEMENTS.FORMRHPRODUCTIONUNIT).click();
    cy.get(elem.ELEMENTS.FORMRHPRODUCTIONUNITSEARCH)
      .type(productionunit)
      .wait(800)
      .type("{enter}");
    cy.get(elem.ELEMENTS.FORMRHASSUNTO).click().type("Teste de automação");
    cy.get(elem.ELEMENTS.FORMRHDESCRICAO).click().type(elem.ELEMENTS.LOREMDESCRIPTION);
  }
  //#endregion

  //#region .: Realiza login criando uma sessão :.
  typeLogin() {
    cy.session("mysession", () => {
      cy.visit("/");
      cy.get(elem.ELEMENTS.USERNAMEINPUT).type(elem.ELEMENTS.USERNAMELOGIN);
      cy.get(elem.ELEMENTS.PASSWORDINPUT).type(elem.ELEMENTS.PASSWORDLOGIN);
      cy.get(elem.ELEMENTS.LOGINBUTTON).click();
    });
  }
  //#endregion

  //#region .: Realiza login com sessão inserindo parametros:.
  typeLoginParameters(username, password) {
    cy.visit("/");
    cy.get(elem.ELEMENTS.USERNAMEINPUT).type(username);
    cy.get(elem.ELEMENTS.PASSWORDINPUT).type(password);
    cy.get(elem.ELEMENTS.LOGINBUTTON).click();
  }

  //#endregion

  //#region .: Seleciona tipo Registrar Atendimento, seleciona Admissão Compass e preenche todos os campos com dados aleatórios :.
  typeFullRegisterAttendance() {
    cy.contains("b", "Serviços de RH").should("be.visible").click();
    cy.contains("h4", "Solicitar Algo").should("be.visible").click();
    cy.wait(4000);
    cy.get(elem.ELEMENTS.FORMRHEMAIL).click();
    cy.get(elem.ELEMENTS.FORMRHTELEFONE).type(randomPhone);
    cy.get(elem.ELEMENTS.FORMRHTIPO).click();
    cy.get(elem.ELEMENTS.FORMRHTIPOPESQUISA)
      .type("Abrir um Chamado Classificado")
      .type("{enter}");
    cy.get(elem.ELEMENTS.FORMRHCATEGORY).click();
    cy.get(elem.ELEMENTS.FORMRHCATEGORYSEARCH)
      .click()
      .wait(800)
      .type("Admissão")
      .wait(800)
      .type("{enter}");
    cy.get(elem.ELEMENTS.FORMRHSUBCATEGORY).click();
    cy.get(elem.ELEMENTS.FORMRHSUBCATEGORYSEARCH)
      .click()
      .type("Admissão Compass")
      .wait(800)
      .type("{enter}");
    cy.get(elem.ELEMENTS.FORMRHPRODUCTIONUNIT).click();
    cy.get(elem.ELEMENTS.FORMRHPRODUCTIONUNITSEARCH)
      .type("Barra Filial CSC")
      .wait(800)
      .type("{enter}");
    cy.get("#sp_formfield_data_de_admisso").click();
    cy.get(elem.ELEMENTS.ADMISSIONESTAG).select("Sim");
    cy.get(elem.ELEMENTS.ADMISSIONPERIC).select("Não");
    cy.get(elem.ELEMENTS.ADMISSIONPCD).select("Sim");
    cy.get(elem.ELEMENTS.ADMISSIONPOSIC).type("Supervisão");
    cy.get(elem.ELEMENTS.ADMISSIONINSAL).select("Substituição por outra CONPS");
    cy.get(elem.ELEMENTS.ADMISSIONCEL).click().type(randomPhone);
    cy.get(elem.ELEMENTS.ADMISSIONCAND).click().type(randomName);
    cy.get(elem.ELEMENTS.ADMISSIONGEST).click().type("Stefanini Brasil");
    cy.get(elem.ELEMENTS.ADMISSIONCARG).click().type("Mid-level QA Analyst");
    cy.get(elem.ELEMENTS.ADMISSIONEMAIL).click().type(randomEmail);
    cy.get(elem.ELEMENTS.ADMISSIONCONPS).click().type(randomPassword);
    cy.get(elem.ELEMENTS.FORMRHASSUNTO)
      .click()
      .type("Automated Subject Test")
      .tab()
      .type(elem.ELEMENTS.LOREMDESCRIPTION);
    cy.contains(
      "Solte seus arquivos aqui ou clique para fazer o upload"
    ).selectFile("cypress/fixtures/data.json");
  }
  //#endregion

  //#region .: Seleciona tipo de serviço (Serviços de TI, Serviços de RH e reportar problemas) :.
  selectServiceType(serviceType, serviceTypeForm, expectedHref) {
    cy.contains("b", serviceType).should("be.visible").click();
    cy.contains("h2, h4", serviceTypeForm).then(($title) => {
      // Encontrar o elemento pai <a> que contém o título
      const $link = $title.closest("a");
      // Obter o atributo href do elemento <a>
      const href = $link.prop("href");
      // Comparar o href com o valor esperado
      expect(href).to.equal(expectedHref);
      // Clicar no link
      $link.click({ force: true });
    });
  }
  //#endregion

  //#region .: Botão submit dos formulários (Serviços de TI, Serviços de RH e reportar problemas)
  submitForm() {
    cy.get(elem.ELEMENTS.FORMSUBMITBUTTON).click();
  }
  //#endregion

  //#region .: Abre chamado simples :.
  openSimpleTicket() {
    cy.get(elem.ELEMENTS.FORMRHTELEFONE).type(randomPhone);
    cy.get(elem.ELEMENTS.FORMRHTIPO).click();
    cy.get(elem.ELEMENTS.FORMRHTIPOPESQUISA).click().type("Abrir um Chamado Simples").type("{enter}");
    cy.get(elem.ELEMENTS.FORMRHASSUNTO).click().type("Automated Subject Test").tab().type(elem.ELEMENTS.LOREMDESCRIPTION);
    this.submitForm();
    }
  //#endregion

  //#region .: Usuário clica no botão 'Serviços de RH' e acessa outros sistemas :.
  accessOtherSystems() {
    //objetos contendo os valores buttonText e expectedUrl
    const buttons = [
      {
        buttonText: "Férias",
        expectedUrl: "https://portalrh.minhati.com.br/Ferias/programacao/",
      },
      {
        buttonText: "Reembolso",
        expectedUrl: "http://portalreembolso.raizen.com/Pages/Default.aspx",
      },
      {
        buttonText: "Atração e Seleção",
        expectedUrl: "https://genteraizen.gupy.io/",
      },
      {
        buttonText: "Holerite",
        expectedUrl:
          "http://intranet2.raizen.com/PortalRH/PaginasSite/NovoHolerite/holerite.aspx?guid=327dcbef-a635-4ea1-b264-a6bf1b2b30b6&paramsSPPropertyBag=CS342326;CS342326#no-back-button",
      },
      {
        buttonText: "Treinamento",
        expectedUrl:
          "https://raizen.csod.com/ui/lms-learner-home/home?tab_page_id=-200300006&tab_id=-2",
      },
      {
        buttonText: "Workflow RH",
        expectedUrl: "https://workflowrh.raizen.com/",
      },
      {
        buttonText: "Gestão de Desempenho",
        expectedUrl: "https://ciclogestaogente.raizen.com/",
      },
      {
        buttonText: "Portal do Gestor",
        expectedUrl: "https://portalrh.minhati.com.br/Desligamento/Erro/AcessoNegado",
      },
      {
        buttonText: "Informe de Rendimentos",
        expectedUrl:
          "http://informerendimentos.raizen.com/Pages/Login.aspx",
      },
      {
        buttonText: "Controle de Ponto",
        expectedUrl:
          "http://intranet2.raizen.com/PortalRH/PontoPorExcecao/default.aspx",
      },
      {
        buttonText: "Estrutura Organizacional",
        expectedUrl: "https://portalrh.minhati.com.br/estruturaorganizacional/",
      },
    ];

    // Itere sobre o array e execute o código de teste para cada objeto
    buttons.forEach(({ buttonText, expectedUrl }) => {
      cy.contains(".text-form", buttonText).then(($buttonTextElement) => {
        const $itemContainer = $buttonTextElement.closest(".item-container");
        cy.wrap($itemContainer)
          .find("a")
          .should("have.attr", "href", expectedUrl);
      });
    });
  }
  //#endregion

  //#region .: Preenche todos os campos personalizados do tipo string do formulário :.
  typeFullStrings() {
    cy.get('[data-cy="string"]').each(($el, index) => {
      // Pega todos os elementos com data-cy="string" e itera sobre eles
      const text = `${randomName}${index}`; // Declara texto a preencher com index
      cy.wrap($el).type(text); // Preenche o elemento com o texto
    });
  }
  //#endregion

  //#region .: Verifica STF Call Form (Acompanhamento do chamado)
  verifySTFCallForm() {
    cy.title().should('contains', 'Portal de Serviço')
    cy.contains('span', 'Acompanhamento do Chamado').should('be.visible')
  }
  //#endregion


}

export default new servicePortal_Pages();
