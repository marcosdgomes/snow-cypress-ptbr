#language: pt
Funcionalidade: Realiza login e cria chamados de serviços de rh

    Contexto:
        Dado que usuário visita a página inicial e realiza login 
    Cenário: Acessa site e valida conteúdo carregado
        Quando carregamento da página inicial é finalizado
        Então página inicial deve ser apresentada

    Esquema do Cenário: Usuário abre diferentes tipos de Chamado Classificado
        E esteja no formulário de serviços de RH
        E inserir "<categoria>", "<subcategoria>", "<unidadeprodutora>" e "<Grupo solucionador>"
        Quando preencher todos os campos string e submeter
        Então deve ser exibida página de 'Acompanhamento do Chamado'
    Exemplos:
        | categoria | subcategoria | unidadeprodutora |
        | Admissão | Admissão Compass | BARRA FILIAL CSC |
        | Admissão | Admissão Compass | COSAN MATRIZ |
        | Adm. Pessoal | Suspensão / Advertência | Comgás |
        | Adm. Pessoal - Rescisão | Solicitação de Desligamento | RUMO |
        | Adm. Pessoal - Cadastro | Solicitação de Atualização de Cadastro |  Moove Global |
        | Adm. Pessoal - Ponto | Justificativa de ausências - Atestados / Declarações / Maternidade | COMBUSTÍVEIS |

    Cenário: Usuário abre formulário de serviços de RH e abre chamado rápido
        E usuário clica em 'Solicitar Algo' no 'Serviços de RH' 
        Quando seleciona tipo 'Abrir chamado rápido' preenche todos os campos e submete
        Então a página de Acompanhamento do chamado é exibida

    Cenário: Usuário clica no botão 'Serviços de RH' e acessa outros sistemas
        Quando usuário clica em "<sistema>" disponibilizado na seção 'Acessar outros sistemas' 
        Então link "<url>" do "<sistema>" deverá ser apresentado
        | sistema | url |
        | Férias | https://portalrh.minhati.com.br/Ferias/programacao/ |
        | Reembolso | http://portalreembolso.raizen.com/Pages/Default.aspx |
        | Atração e Seleção | https://genteraizen.gupy.io/ |
        | Holerite |  http://intranet2.raizen.com/PortalRH/PaginasSite/NovoHolerite/holerite.aspx?guid=327dcbef-a635-4ea1-b264-a6bf1b2b30b6&paramsSPPropertyBag=CS342326;CS342326#no-back-button |
        | Treinamento | https://raizen.csod.com/ui/lms-learner-home/home?tab_page_id=-200300006&tab_id=-2 |
        | Workflow RH | https://workflowrh.raizen.com/ |
        | Gestão de Desempenho | https://ciclogestaogente.raizen.com/ |
        | Portal do Gestor | https://portalrh.minhati.com.br/Desligamento/Home/Default |
        | Informe de Rendimentos | http://informerendimentos.raizen.com/Pages/Login.aspx |
        | Controle de Ponto | http://intranet2.raizen.com/PortalRH/PontoPorExcecao/default.aspx |
        | Estrutura Organizacional | https://portalrh.minhati.com.br/estruturaorganizacional/ |        

    Esquema do Cenário: Usuário clica no tipo de serviço desejado e seleciona formulário de solicitação
        Quando usuário seleciona "<tipodeserviço>", "<formulariodesolicitacao>" e "<linkformulário>"
        Então formulário e URL "<linkformulário>" devem ser apresentados
    Exemplos:
        | tipodeserviço | formulariodesolicitacao | linkformulário |
        | Serviços de RH | Solicitar Algo | https://raizendev.service-now.com/sp?id=sc_cat_item&sys_id=7b72d4091bfdd110edbd87bfe54bcb40&sysparm_category=d17103081bbb0590edbd87bfe54bcb97&catalog_id=08ba31521b7fcd90f61c0dcbe54bcbfc |
        | Serviços de TI | Requisições Servicenow - Alpar | https://raizendev.service-now.com/sp?id=sc_cat_item&sys_id=01fe9985dbfe4490d0fecf241496195c&sysparm_category=340e09f3dba1f30017a25c4bf396191f&catalog_id=e0d08b13c3330100c8b837659bba8fb4 |
        | Serviços de TI | Alterar Modelos de Mudança | https://raizendev.service-now.com/sp?id=modify_change_template |
        | Serviços de TI | Sistema Corporativos | https://raizendev.service-now.com/sp?id=sc_category&sys_id=507099091b04ad50edbd87bfe54bcb60&sysparm_category=340e09f3dba1f30017a25c4bf396191f&catalog_id=e0d08b13c3330100c8b837659bba8fb4 |
        | Serviços de TI | Sistemas e Aplicações | https://raizendev.service-now.com/sp?id=sc_category&sys_id=6b2ffae9dbeffb005b43b11ba396190b&sysparm_category=340e09f3dba1f30017a25c4bf396191f&catalog_id=e0d08b13c3330100c8b837659bba8fb4 |
        | Serviços de TI | Equipamentos e Telefonia | https://raizendev.service-now.com/sp?id=sc_category&sys_id=98d28d7a1bc08990edbd87bfe54bcb2d&sysparm_category=340e09f3dba1f30017a25c4bf396191f&catalog_id=e0d08b13c3330100c8b837659bba8fb4 |
        | Serviços de TI | Tecnologia Operacional Agrícola | https://raizendev.service-now.com/sp?id=sc_category&sys_id=6574893e1bc08990edbd87bfe54bcb85&sysparm_category=340e09f3dba1f30017a25c4bf396191f&catalog_id=e0d08b13c3330100c8b837659bba8fb4 |
        | Reportar problema | Incidentes Servicenow - Alpar | https://raizendev.service-now.com/sp?id=sc_cat_item&sys_id=882f3685db768490d0fecf24149619e0&sysparm_category=bf4ec9f3dba1f30017a25c4bf3961978&catalog_id=-1 |
        | Reportar problema | Segurança da Informação | https://raizendev.service-now.com/sp?id=sc_cat_item&sys_id=b7502e471baf8d50f61c0dcbe54bcb98&sysparm_category=bf4ec9f3dba1f30017a25c4bf3961978&catalog_id=-1 |

    Cenário: Usuário abre formulário de serviços de RH e registra atendimento (Admissão Compass)
        Quando usuário clica em 'Serviços de RH', seleciona tipo 'Abrir um Chamado Classificado', seleciona subcategoria 'Admissão Compass' preenche todos os campos e submete
        Então deve ser exibida página de 'Acompanhamento do Chamado'

