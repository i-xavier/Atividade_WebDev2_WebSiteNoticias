const navbar = document.getElementById("navbar");
const ultimas = document.getElementById("ultimasNoticias");
const inputFiltro = document.getElementById("search-bar");
const btn = document.getElementsByClassName("btnUltimas");
const u = document.getElementById("ultimas");


const noticiasIniciais = [
    // -------------------------------------------------------------
    // DESTAQUE PRINCIPAL (HERO)
    // -------------------------------------------------------------
    {
        id: 1,
        titulo: "Padrões da web em 2026: o que muda para quem desenvolve interfaces",
        resumo: "Novas APIs de layout e recursos nativos do navegador prometem reduzir a dependência de bibliotecas externas e mudar a rotina de quem trabalha com front-end.",
        categoria: "tecnologia",
        autor: "Marina Alves",
        data: "21 set 2026",
        tempoLeitura: "6 min de leitura",
        imagem: "assets/imagem.jpg",
        alt: "Ilustração representativa da editoria de Tecnologia",
        destaque: true,
        posicaoDestaque: 0
    },

    // -------------------------------------------------------------
    // DESTAQUES SECUNDÁRIOS (LATERAL DO HERO / RANKING 1, 2, 3)
    // -------------------------------------------------------------
    {
        id: 2,
        titulo: "Startups brasileiras de software crescem 18% no primeiro semestre",
        resumo: "Aumento nos investimentos em inteligência artificial impulsiona o ecossistema nacional de tecnologia.",
        categoria: "negocios",
        autor: "Diego Prado",
        data: "20 set 2026",
        tempoLeitura: "3 min de leitura",
        imagem: "assets/imagem.jpg",
        alt: "Gráfico de crescimento de startups de software",
        destaque: true,
        posicaoDestaque: 1
    },
    {
        id: 3,
        titulo: "Pesquisadores criam método mais eficiente para comprimir dados de sensores",
        resumo: "Novo algoritmo reduz a largura de banda necessária sem perda de precisão em dispositivos IoT.",
        categoria: "ciencia",
        autor: "Lucas Mendes",
        data: "20 set 2026",
        tempoLeitura: "4 min de leitura",
        imagem: "assets/imagem.jpg",
        alt: "Representação visual de sensores e transmissão de dados",
        destaque: true,
        posicaoDestaque: 2
    },
    {
        id: 4,
        titulo: "Museus digitais ganham espaço e repensam a experiência de visitação",
        resumo: "Exposições interativas e imersivas atraem público jovem e transformam o papel dos acervos históricos.",
        categoria: "cultura",
        autor: "Beatriz Nunes",
        data: "19 set 2026",
        tempoLeitura: "5 min de leitura",
        imagem: "assets/imagem.jpg",
        alt: "Pessoas interagindo com projeções digitais em um museu",
        destaque: true,
        posicaoDestaque: 3
    },
    {
        id: 5,
        titulo: "Museus digitais ganham espaço e repensam a experiência de visitação",
        resumo: "Exposições interativas e imersivas atraem público jovem e transformam o papel dos acervos históricos.",
        categoria: "opinião",
        autor: "Beatriz Nunes",
        data: "19 set 2026",
        tempoLeitura: "5 min de leitura",
        imagem: "assets/imagem.jpg",
        alt: "Pessoas interagindo com projeções digitais em um museu",
        destaque: true,
        posicaoDestaque: 4
    },

    // -------------------------------------------------------------
    // SEÇÃO "ÚLTIMAS NOTÍCIAS" (GRADE DE CARDS)
    // -------------------------------------------------------------
    {
        id: 6,
        titulo: "CSS ganha novos recursos de container queries que simplificam a responsividade",
        resumo: "Desenvolvedores agora podem estilizar elementos com base no tamanho do seu contêiner pai, e não apenas na viewport.",
        categoria: "tecnologia",
        autor: "Rafael Costa",
        data: "21 set 2026",
        tempoLeitura: "4 min de leitura",
        imagem: "assets/imagem.jpg",
        alt: "Código CSS sendo editado em uma tela de computador",
        destaque: false
    },
    {
        id: 7,
        titulo: "JavaScript: o que esperar da próxima versão da linguagem",
        resumo: "Propostas avançadas no TC39 trazem novidades em imutabilidade e novos métodos auxiliares para coleções.",
        categoria: "tecnologia",
        autor: "Beatriz Nunes",
        data: "21 set 2026",
        tempoLeitura: "5 min de leitura",
        imagem: "assets/imagem.jpg",
        alt: "Logotipo estilizado da linguagem JavaScript",
        destaque: false
    },
    {
        id: 8,
        titulo: "Empresas aceleram transição para modelos sustentáveis no setor de tecnologia",
        resumo: "Relatórios apontam redução na emissão de carbono em data centers com adoção de energias limpas.",
        categoria: "negocios",
        autor: "Diego Prado",
        data: "20 set 2026",
        tempoLeitura: "3 min de leitura",
        imagem: "assets/imagem.jpg",
        alt: "Servidores em um data center iluminado com luz verde",
        destaque: false
    },
    {
        id: 9,
        titulo: "Baterias de estado sólido avançam em testes de laboratório",
        resumo: "Nova química promete dobrar a densidade energética de veículos elétricos mantendo a segurança.",
        categoria: "ciencia",
        autor: "Camila Rocha",
        data: "20 set 2026",
        tempoLeitura: "5 min de leitura",
        imagem: "assets/imagem.jpg",
        alt: "Células de bateria sendo analisadas em um laboratório",
        destaque: false
    },
    {
        id: 10,
        titulo: "Podcasts independentes batem recorde de audiência no país",
        resumo: "Produções focadas em ciência, história e reflexões sociais ganham destaque nas plataformas de áudio.",
        categoria: "cultura",
        autor: "Gabriel Lima",
        data: "19 set 2026",
        tempoLeitura: "4 min de leitura",
        imagem: "assets/imagem.jpg",
        alt: "Microfone profissional em um estúdio de gravação de áudio",
        destaque: false
    },
    {
        id: 11,
        titulo: "Acessibilidade digital vira exigência em novos projetos públicos",
        resumo: "Diretrizes de WCAG tornam-se critério obrigatório em portais de serviços essenciais ao cidadão.",
        categoria: "opiniao",
        autor: "Helena Ferraz",
        data: "19 set 2026",
        tempoLeitura: "6 min de leitura",
        imagem: "assets/imagem.jpg",
        alt: "Pessoa utilizando leitor de tela em um notebook",
        destaque: false
    }
];

let noticias = noticiasIniciais;
let textoBusca;

// Array temporário só com os destaques para o carrossel
const destaquesCarrossel = noticias.filter(item => item.destaque === true);
const outrasNoticias = noticias.filter(item => item.destaque === false);

document.addEventListener("DOMContentLoaded", () => {

    const dadosSalvos = JSON.parse(localStorage.getItem("noticias"));
    const listaUltimas = gerenciarUltimas();

    if (dadosSalvos) {
        noticias = dadosSalvos;
    }



    addNoticiasHome();
    addUltimasNoticias(listaUltimas);

})


// Para pegar a primeira notícia (ou notícia principal atual):
//const noticiaPrincipal = noticias.find(item => item.posicaoDestaque === 0);

navbar.addEventListener("click", (e) => {

    e.preventDefault();

    const click = e.target.dataset.id;
    const indiceClicado = destaquesCarrossel.findIndex(n => n.id === Number(click));

    // console.log("indice: " + indiceClicado)

    gerenciarCarrosel(indiceClicado);
    addNoticiasHome();
    //mostrarManchete(click);


    /*
        1 - apontar pro local que o sistema vai capturar o evento
        2 - capturar evento
        3 - capturar a tag/categoria do botão
        4 - buscar no array (analisar quais são destaque e possuem a tag exata do botão clicado)
        5 - após encontrar a notícia, reescrever dom
    
    */
})

inputFiltro.addEventListener('input', (e) => {
    e.preventDefault();

    textoBusca = e.target.value.toLowerCase();

    // console.log(textoBusca);
    const tela = document.getElementById("ultimasNoticias");
    limparUltimasNoticias(tela);

    const lista = gerenciarUltimas();

    //lista.forEach(noticia => {

    //console.log(noticia.titulo);
    //const indice = lista.findIndex(n => n.id === noticia.id);
    addUltimasNoticias(lista);

    //})


})

const mostrarManchete = function (id) {

    noticias.find(function (n) {
        // console.log("Entrou no find")

        if (n.id == id) {
            addManchete(n);
        }
    })
}

const addNoticiasHome = (/*indice*/) => {

    // console.log("entrou");

    /*destaquesCarrossel.forEach(n => {
        if (noticias[indice].posicaoDestaque == 0) {

            const noticia = document.getElementById("manchete");
            const filhos = noticia.children;
            const filhosParagrafo = filhos[4].children;

            filhos[0].src = noticias[indice].imagem;

            filhos[1].innerText = noticias[indice].categoria;

            filhos[2].innerText = noticias[indice].titulo;

            filhos[3].innerText = noticias[indice].resumo;


            filhosParagrafo[0].innerText = noticias[indice].autor;
            filhosParagrafo[1].innerText = noticias[indice].data;
            filhosParagrafo[2].innerText = noticias[indice].tempoLeitura;

        } else if (noticias[indice].posicaoDestaque >= 1 && noticias[indice].posicaoDestaque < 4) {
            const indice = noticias[indice].posicaoDestaque;
            const noticia = document.getElementById(indice);
            const filhos = noticia.children;
            const filhosSpan = filhos[1].children;

            filhos[0].innerText = noticias[indice].titulo;
            filhosSpan[0].innerText = noticias[indice].categoria;
            filhosSpan[1].innerText = noticias[indice].data;
        }
    })*/

    destaquesCarrossel.forEach(n => {
        if (n.posicaoDestaque == 0) {

            const noticia = document.getElementById("manchete");
            const filhos = noticia.children;
            const filhosParagrafo = filhos[4].children;

            filhos[0].src = n.imagem;

            filhos[1].innerText = n.categoria;

            filhos[2].innerText = n.titulo;

            filhos[3].innerText = n.resumo;


            filhosParagrafo[0].innerText = n.autor;
            filhosParagrafo[1].innerText = n.data;
            filhosParagrafo[2].innerText = n.tempoLeitura;

        } else if (n.posicaoDestaque >= 1 && n.posicaoDestaque < 4) {
            const indice = n.posicaoDestaque;
            const noticia = document.getElementById("card" + indice);
            const filhos = noticia.children;
            const filhosSpan = filhos[1].children;

            filhos[0].innerText = n.titulo;
            filhosSpan[0].innerText = n.categoria;
            filhosSpan[1].innerText = n.data;
        }
    })
}


u.addEventListener("click", (e) => {
    e.preventDefault();

    const click = e.target.dataset.id;
    //const indiceClicado = [];
    //outrasNoticias.findIndex(n => n.id === Number(click));
    const ult = gerenciarUltimas(click);

    const tela = document.getElementById("ultimasNoticias");
    limparUltimasNoticias(tela);

    //console.log(quantidade);



    //ult.forEach(noticia => {

    // console.log(noticia.categoria);
    //const indice = ult.findIndex(n => n.id === noticia.id);
    addUltimasNoticias(ult);

    //})


    // console.log(click);
    //console.log(indiceClicado);



})

const addUltimasNoticias = (lista) => {

    lista.forEach(noticia => {

        const imagem = noticia.imagem;
        const categoria = noticia.categoria;
        const titulo = noticia.titulo;
        const autor = noticia.autor;
        const data = noticia.data;

        const div = document.createElement("div");
        div.id = noticia.id;
        div.classList.add("cardUltimasNoticias");

        const spanImg = document.createElement("span");
        const contentImg = document.createElement("img");
        contentImg.setAttribute("src", imagem);
        spanImg.appendChild(contentImg);

        const spanCategoria = document.createElement("span");
        const contentCategoria = document.createTextNode(categoria);
        spanCategoria.appendChild(contentCategoria);

        const spanTitulo = document.createElement("span");
        const contentTitulo = document.createTextNode(titulo);
        spanTitulo.appendChild(contentTitulo);

        const spanAutor = document.createElement("span");
        const contentAutor = document.createTextNode(autor);
        spanAutor.appendChild(contentAutor);

        const spanData = document.createElement("span");
        const contentData = document.createTextNode(data);
        spanData.appendChild(contentData);

        div.appendChild(spanImg);
        div.appendChild(spanCategoria);
        div.appendChild(spanTitulo);
        div.appendChild(spanAutor);
        div.appendChild(spanData);

        ultimas.appendChild(div);
    })
}

const limparUltimasNoticias = (elemento) => {
    //div.remove();

    while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
    }
}

const gerenciarUltimas = (click) => {

    let array = noticias.filter(item => item.destaque === false);

    console.log(click)

    if (click !== undefined) {
        //array = noticias.filter(item => item.destaque === false && item.categoria === click);

        switch (click) {
            case 'tecnologia':
                array = noticias.filter(item => item.destaque === false && item.categoria === 'tecnologia'); break;
            case 'negocios':
                array = noticias.filter(item => item.destaque === false && item.categoria === 'negocios'); break;
            case 'ciencia':
                array = noticias.filter(item => item.destaque === false && item.categoria === 'ciencia'); break;
            case 'cultura':
                array = noticias.filter(item => item.destaque === false && item.categoria === 'cultura'); break;
            case 'opiniao':
                array = noticias.filter(item => item.destaque === false && item.categoria === 'opiniao'); break;
        }
    } 

    if (textoBusca != undefined) {
        const busca = array.filter(n => n.titulo.toLowerCase().includes(textoBusca))
        return busca;
    }

    return array;
}

const gerenciarCarrosel = (id) => {


    //console.log("antes");
    destaquesCarrossel.forEach(n => {
        //console.log(n.posicaoDestaque);
    })


    let posicao;
    let indice = id;
    let total = 0;


    while (total < destaquesCarrossel.length) {

        posicao = indice % destaquesCarrossel.length;

        /*destaquesCarrossel.find(n =>{
            if(n.id == (posicao + 1)){
                n.posicaoDestaque = total;
            }
        })*/

        destaquesCarrossel[posicao].posicaoDestaque = total;

        indice++
        total++;
    }


    //Colocar localStorage depois
    localStorage.setItem("noticias", JSON.stringify(noticias));
}


const toggleButton = document.getElementById('theme-toggle');
const html = document.documentElement;

// Carregar tema salvo ou preferido pelo sistema
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
  html.setAttribute('data-theme', 'dark');
}

// Alternar tema ao clicar
toggleButton.addEventListener('click', () => {
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});   