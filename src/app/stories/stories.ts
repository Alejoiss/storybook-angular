const Abas = { DASHBOARD: 'DASHBOARD', RECLAMACOES: 'RECLAMACOES', PERFIL: 'PERFIL' };

export const story1 = {
    selecaoDoMenu: Abas.RECLAMACOES,
    reclamacoes: [
        {
            titulo: 'Reclamacao 1',
            descricao: 'Lorem ipsum dolor sit amet, conse',
            foto: 'assets/img1.png',
        },
        {
            titulo: 'Reclamacao 2',
            descricao: 'Lorem ipsum dolor sit amet, conse asdf',
            foto: 'assets/img2.png',
        },
    ]
};

const list = () => {
    const lista = [];

    for (let i = 0; i < 50; i++) {
        lista.push({
            titulo: `Reclamacao ${i}`,
            descricao: `Lorem ipsum dolor sit amet, conse ${i}`,
            foto: 'assets/img2.png',
        });
    }

    return lista;
};

export const story2 = {
    selecaoDoMenu: Abas.DASHBOARD,
    reclamacoes: list()
};

export const story3 = {
    selecaoDoMenu: Abas.RECLAMACOES,
    reclamacao: {
        id: '',
        titulo: '',
        descricao: '',
        foto: '',
        latitude: -25.8566167,
        longitude: -52.5294107
    }
};
