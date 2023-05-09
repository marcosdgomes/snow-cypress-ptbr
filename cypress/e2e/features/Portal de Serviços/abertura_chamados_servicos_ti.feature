#language: pt
Funcionalidade: Realiza login e cria chamados de serviços de ti

    Contexto:
        Dado que usuário visita a página inicial e realiza login 
    Cenario: Abrir uma requisição no Service Now - Alpar
        Quando eu seleciono o tipo de formulário 'Requisições Servicenow - Alpar'
        E eu preencho os campos obrigatórios
        E eu clico no botão 'Abrir chamado'
        Então eu devo ver uma mensagem de confirmação de abertura do chamado

    Cenário: Alterar um modelo de mudança
        Dado que estou na tela de abertura de chamados
        Quando eu seleciono o tipo de formulário "Alterar Modelos de Mudança"
        E eu preencho os campos obrigatórios
        E eu clico no botão "Abrir chamado"
        Então eu devo ver uma mensagem de confirmação de abertura do chamado

    Cenário: Abrir um chamado de sistemas corporativos
        Dado que estou na tela de abertura de chamados
        Quando eu seleciono o tipo de formulário "Sistemas Corporativos"
        E eu preencho os campos obrigatórios
        E eu clico no botão "Abrir chamado"
        Então eu devo ver uma mensagem de confirmação de abertura do chamado

    Cenário: Solicitar acesso a um sistema ou aplicação
        Dado que estou na tela de abertura de chamados
        Quando eu seleciono o tipo de formulário "Acesso, Sistema e Aplicações"
        E eu preencho os campos obrigatórios
        E eu clico no botão "Abrir chamado"
        Então eu devo ver uma mensagem de confirmação de abertura do chamado

    Cenário: Abrir chamado para equipamentos
        Dado que estou na tela de abertura de chamados
        Quando eu seleciono o tipo de formulário "Equipamentos"
        E eu preencho os campos obrigatórios
        E eu clico no botão "Abrir chamado"
        Então eu devo ver uma mensagem de confirmação de abertura do chamado

    Cenário: Solicitar suporte de telefonia
        Dado que estou na tela de abertura de chamados
        Quando eu seleciono o tipo de formulário "Telefonia"
        E eu preencho os campos obrigatórios
        E eu clico no botão "Abrir chamado"
        Então eu devo ver uma mensagem de confirmação de abertura do chamado

    Cenário: Solicitar suporte de tecnologia operacional agrícola
        Dado que estou na tela de abertura de chamados
        Quando eu seleciono o tipo de formulário "Tecnologia Operacional Agrícola"
        E eu preencho os campos obrigatórios
        E eu clico no botão "Abrir chamado"
        Então eu devo ver uma mensagem de confirmação de abertura do chamado

