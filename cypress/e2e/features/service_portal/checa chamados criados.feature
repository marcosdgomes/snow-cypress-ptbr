#language: pt
Funcionalidade: Realiza login e cria chamados de serviços de rh
    Contexto:
        Dado usuário visita a página inicial do portal de serviços
    Cenário: Acessa site e valida conteúdo carregado
        Então página de login deve ser exibida

    Cenário: usuário insere credenciais de login corretos
        Quando usuário insere login e senha e clica em Sign In
        Então página inicial do Portal de Serviços deve ser apresentada

    Cenário: usuário abre formulário de serviços de RH e registra atendimento (Admissão Compass)
        Quando usuário clica em 'Serviços de RH', seleciona tipo 'Abrir um Chamado Classificado', selecione subcategoria 'Admissão Compass' preenche todos os campos e submete
        Então deve ser exibida página de 'Acompanhamento do Chamado'


    Cenário: usuário abre formulário de serviços de RH e abre chamado rápido
        Quando usuário clica em 'Serviços de RH' seleciona tipo 'Abrir chamado' e preenche todos os campos e submete
        Então a página de Acompanhamento do chamada é exibida