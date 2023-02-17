#language: pt
Funcionalidade: Realiza login e cria chamados de serviços de rh

    Contexto:
        Dado usuário visita a página inicial do portal de serviços
    Cenário: Acessa site e valida conteúdo carregado
        Então página de login deve ser exibida

    Cenário: usuário insere credenciais de login corretos
        Quando usuário insere login e senha e clica em Sign In
        Então página inicial do Portal de Serviços deve ser apresentada

    Esquema do Cenário: usuário visita página inicial e clica em plataforma do 'Acesso Rápido'
        Quando usuário visita página inicial e visualiza a seção Acesso Rápido e o "<sistema>" e "<url>"
        Então "<sistema>" e link com "<url>" deverão ser apresentados
    Exemplos:
        | sistema | url |
        | Universidade Raízen | http://universidade.raizen.com/  |
        | Netlex | https://hom-raizen.netlex.com.br/nl-app/login |
        | Autoatendimento | https://novoautoatendimentocsc.minhati.com.br |
        | Citrix | https://mf.cosan.com.br/logon/LogonPoint/tmindex.html  |
        | Portal RH | https://portalrh.raizen.com/ |
        | SAP Concur | https://eu1.concursolutions.com/home.asp |
        | WorkSpace | https://csc-hub.deskbee.app/ |
    

    Cenário: usuário clica no botão 'Serviços de RH' e acessa outros sistemas
        Quando usuário clica em "<sistema>" disponibilizado na seção "Acessar outros sistemas" 
        Então página do "<sistema>" deverá ser apresentado
        | sistema |
        | Férias |
        | Reembolso |
        | Atração e Seleção |
        | Holerite |
        | Treinamento |
        | Workflow RH |
        | Gestão de Desempenho |
        | Portal do Gestor |
        | Informe de Rendimentos |
        | Controle de Ponto |
        | Estrutura Organizacional |
        

    Cenário: usuário abre formulário de serviços de RH e registra atendimento (Admissão Compass)
        Quando usuário clica em 'Serviços de RH', seleciona tipo 'Abrir um Chamado Classificado', selecione subcategoria 'Admissão Compass' preenche todos os campos e submete
        Então deve ser exibida página de 'Acompanhamento do Chamado'


    Cenário: usuário abre formulário de serviços de RH e abre chamado rápido
        Quando usuário clica em 'Serviços de RH' seleciona tipo 'Abrir chamado' e preenche todos os campos e submete
        Então a página de Acompanhamento do chamada é exibida

    Esquema do Cenário: Tentar realizar login com informações incorretas
        Dado que eu cliquei no sistema "<usuário>" e a senha "<senha>"
        Quando aciono a opção Login
        Então eu vejo a mensagem de erro "<erro>"
    Exemplos:
        | Header 1 | Header 2 | Header 3 |
        | Value 1  | Value 2  | Value 3  |


    Esquema do Cenário: usuário abre 'Meus chamados' e realiza filtragem por status
        Quando usuário clica em 'Meus chamados' e insere um 'status' de filtragem
        Então devem ser apresentados dados que estejam com o 'status'
    Exemplos:
        | status | ativo |
        | Aberto | empty |
        | Novo(a) | not empty |
        | Em aprovação |  |
        | Em espera |  |
        | Em andamento |  |
        | Resolvido |  |
        | Fechado |  |
        | Encerrado Totalmente |  |
        | Encerrado Incompleto |  |
        | Cancelado |  |


    Esquema do Cenário: usuário visita página inicial e clica em plataforma do 'Acesso Rápido'
        Quando usuário visita página inicial e clica no "<sistema>" disponível no Acesso Rápido
        Então "<sistema>" deverá ser apresentada
    Exemplos:
        | sistema | url |
        | Universidade Raízen | http://universidade.raizen.com/ |
        | Netlex | https://hom-raizen.netlex.com.br/nl-app/login |
        | Autoatendimento | https://novoautoatendimentocsc.minhati.com.br |
        | Citrix | https://mf.cosan.com.br/logon/LogonPoint/tmindex.html  |
        | Portal RH | https://portalrh.raizen.com/ |
        | SAP Concur | https://eu1.concursolutions.com/home.asp |
        | WorkSpace | https://csc-hub.deskbee.app/ |