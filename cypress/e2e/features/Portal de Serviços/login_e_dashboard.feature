#language: pt
Funcionalidade: Login e dashboard inicial

    Esquema do Cenário: Tentar realizar login com informações incorretas
        Dado que eu cliquei no sistema "<usuario>" e a senha "<senha>"
        Quando aciono o botão Login
        Então eu vejo a mensagem de erro
    Exemplos:
        | usuario | senha |
        | wronguser  | 123 |
        | tr98455 | password12 |
        | usercorreto | senhacorreta |

    Cenário: Usuário visualiza e clica em elementos do dashboard
        Dado que o usuário esteja no dashboard
        Quando usuário clica nos botões visiveis em tela
        Então ações devem ser executadas e elementos devem estar presentes em tela

    Esquema do Cenário: Acessa dashboard, valida textos e imagens carregadas
        Dado que usuário visita a página inicial e realiza login 
        Quando carregamento da página inicial é finalizado
        Então "<textos>" com "<tipo>" deverão ser apresentados
    Exemplos:
        | textos | tipo |
        | Serviços de RH | b |
        | Serviços de TI | b |
        | Reportar Problema | b |
        | Itens recentes | b |    
        | Meus Chamados | b |
        | Acesso Rápido | b |
        | Minhas Aprovações | span |
        | Meus Chamados | span |
        | Olá, | span |

    Esquema do Cenário: Usuário visita página inicial e clica em plataforma do 'Acesso Rápido'
        Quando usuário visita página inicial e visualiza a seção Acesso Rápido e o "<sistema>" e "<url>"
        Então "<sistema>" e link com "<url>" deverão ser apresentados
    Exemplos:
        | sistema | url |
        | Universidade Raízen | http://universidade.raizen.com/ |
        | Netlex | https://hom-raizen.netlex.com.br/nl-app/login |
        | Autoatendimento | https://novoautoatendimentocsc.minhati.com.br |
        | Citrix | https://mf.cosan.com.br/logon/LogonPoint/tmindex.html |
        | Portal RH | https://portalrh.raizen.com/ |
        | SAP Concur | https://eu1.concursolutions.com/home.asp |
        | WorkSpace | https://csc-hub.deskbee.app/ |