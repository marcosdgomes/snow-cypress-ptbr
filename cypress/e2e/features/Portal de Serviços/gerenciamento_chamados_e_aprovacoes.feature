#language: pt
Funcionalidade: Gerenciamento de chamados e aprovações em aberto (Minhas Aprovações/Meus Chamados)

    Esquema do Cenário: usuário abre 'Meus chamados' e realiza filtragem por status
        Dado usuário visita a página inicial do portal de serviços
        Quando usuário clica em 'Meus chamados' e insere um "<status>" de filtragem
        Então devem ser apresentados dados que estejam com o "<status>"
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

