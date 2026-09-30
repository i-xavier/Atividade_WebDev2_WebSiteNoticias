const logo = document.getElementById("logo"); //aponta para o logo
const navbar = document.getElementById("navbar"); //aponta pra barra de navegação
const noticia = document.getElementById("manchete"); //aponta para o espaço que fica a manchete
const ultimas = document.getElementById("ultimasNoticias"); //aponta pro espaço que carrega as últimas notícias
const inputFiltro = document.getElementById("search-bar"); //aponta pro serach bar
const btnUltimasNoticias = document.querySelectorAll(".btnUltimas"); //aponta pros botões que manipulam a aba de últimas notícias
const carregar = document.getElementById("carregar-mais"); //aponta pro botão que carrega mais notícias
const formNewsletter = document.querySelector("form"); //aponta pro formulário de newsletter
let carregarMais = 3; //contador que controla a quantidade máxima de notícias exibidas


const noticiasIniciais = [
    {
        id: 1,
        titulo: "O que aconteceria se a Terra parasse de girar por um segundo?",
        resumo: "A física explica o cenário catastrófico: ventos supersônicos, tsunamis globais e dias que durariam meses. Entenda as consequências extremas para a vida no planeta.",
        categoria: "Ciência",
        autor: "Marcos Nogueira",
        data: "29 set 2026",
        tempoLeitura: "6 min de leitura",
        //as imagens são aleatórias e pegas no picsum
        imagem: "https://picsum.photos/800/400?random=1",
        alt: "Ilustração do planeta Terra visto do espaço",
        destaque: true,
        posicaoDestaque: 0
    },
    {
        id: 2,
        titulo: "A cidade perdida sob a Amazônia finalmente revelada por lasers",
        resumo: "Arqueólogos utilizam tecnologia LiDAR para mapear pirâmides e estradas milenares escondidas sob a densa vegetação.",
        categoria: "História",
        autor: "Helena Ferraz",
        data: "28 set 2026",
        tempoLeitura: "4 min de leitura",
        imagem: "https://picsum.photos/400/250?random=2",
        alt: "Ruínas antigas cobertas por musgo e árvores",
        destaque: true,
        posicaoDestaque: 1
    },
    {
        id: 3,
        titulo: "Inteligência Artificial já consegue traduzir a linguagem dos golfinhos",
        resumo: "Pesquisadores treinam redes neurais avançadas para decodificar os complexos assobios e cliques dos cetáceos.",
        categoria: "Tecnologia",
        autor: "Lucas Mendes",
        data: "28 set 2026",
        tempoLeitura: "3 min de leitura",
        imagem: "https://picsum.photos/400/250?random=3",
        alt: "Golfinho nadando em mar cristalino",
        destaque: true,
        posicaoDestaque: 2
    },
    {
        id: 4,
        titulo: "Por que o seu cérebro apaga as memórias da infância?",
        resumo: "A 'amnésia infantil' tem uma explicação evolutiva surpreendente ligada ao desenvolvimento de novos neurônios.",
        categoria: "Mente",
        autor: "Beatriz Nunes",
        data: "27 set 2026",
        tempoLeitura: "5 min de leitura",
        imagem: "https://picsum.photos/400/250?random=4",
        alt: "Criança correndo em um campo borrado, simbolizando memórias",
        destaque: true,
        posicaoDestaque: 3
    },
    {
        id: 5,
        titulo: "O verdadeiro motivo pelo qual os gatos 'amassam pãozinhos'",
        resumo: "Descubra a origem evolutiva desse comportamento felino peculiar e o que ele diz sobre o bem-estar do seu pet.",
        categoria: "Cultura",
        autor: "Camila Rocha",
        data: "27 set 2026",
        tempoLeitura: "4 min de leitura",
        imagem: "https://picsum.photos/400/250?random=5",
        alt: "Gato amassando um cobertor macio",
        destaque: true,
        posicaoDestaque: 4
    },
    {
        id: 6,
        titulo: "Como os romanos faziam um concreto que dura até hoje (e os nossos racham)?",
        resumo: "O segredo de 2.000 anos envolve cal viva, cinzas vulcânicas e uma reação química que 'conserta' as próprias rachaduras.",
        categoria: "História",
        autor: "Rafael Costa",
        data: "26 set 2026",
        tempoLeitura: "6 min de leitura",
        imagem: "https://picsum.photos/400/250?random=6",
        alt: "Estrutura do Panteão Romano resistindo ao tempo",
        destaque: false
    },
    {
        id: 7,
        titulo: "O mistério do 'Sinal Wow!' e a busca por vida extraterrestre",
        resumo: "Quase 50 anos depois, astrônomos formulam uma nova e controversa teoria sobre o famoso sinal de rádio captado do espaço.",
        categoria: "Ciência",
        autor: "Marcos Nogueira",
        data: "26 set 2026",
        tempoLeitura: "5 min de leitura",
        imagem: "https://picsum.photos/400/250?random=7",
        alt: "Telescópio de rádio apontado para o céu estrelado",
        destaque: false
    },
    {
        id: 8,
        titulo: "Filmes de terror realmente ajudam a combater a ansiedade?",
        resumo: "Psicólogos explicam por que simular o medo em um ambiente controlado pode trazer alívio inesperado para o cérebro.",
        categoria: "Mente",
        autor: "Beatriz Nunes",
        data: "25 set 2026",
        tempoLeitura: "4 min de leitura",
        imagem: "https://picsum.photos/400/250?random=8",
        alt: "Pessoa assistindo filme no escuro iluminada apenas pela TV",
        destaque: false
    },
    {
        id: 9,
        titulo: "A primeira bateria movida a suor humano já é uma realidade",
        resumo: "Adesivos bioeletrônicos ultramodernos prometem carregar smartwatches enquanto você realiza exercícios físicos intensos.",
        categoria: "Tecnologia",
        autor: "Lucas Mendes",
        data: "25 set 2026",
        tempoLeitura: "3 min de leitura",
        imagem: "https://picsum.photos/400/250?random=9",
        alt: "Corredor suando com adesivo tecnológico no braço",
        destaque: false
    },
    {
        id: 10,
        titulo: "Por que a música pop está ficando cada vez mais triste e lenta?",
        resumo: "Uma análise feita por algoritmos revela que os andamentos caíram e as letras se tornaram mais melancólicas nas últimas duas décadas.",
        categoria: "Cultura",
        autor: "Gabriel Lima",
        data: "24 set 2026",
        tempoLeitura: "4 min de leitura",
        imagem: "https://picsum.photos/400/250?random=10",
        alt: "Discos de vinil ao lado de fones de ouvido modernos",
        destaque: false
    },
    {
        id: 11,
        titulo: "O que são 'Zumbis Espaciais' e por que a NASA está de olho neles?",
        resumo: "Estrelas mortas que ressuscitam ao roubar energia gravitacional de suas vizinhas estão intrigando as agências espaciais.",
        categoria: "Ciência",
        autor: "Helena Ferraz",
        data: "24 set 2026",
        tempoLeitura: "7 min de leitura",
        imagem: "https://picsum.photos/400/250?random=11",
        alt: "Concepção artística de duas estrelas orbitando muito próximas",
        destaque: false
    }
];

let noticias = noticiasIniciais; //variável de manipulação dos dados de notícia recebe algumas notícias como default de outro array
let filtroAtualUltimas = [];
let textoBusca; //texto escrito na barra de busca

document.addEventListener("DOMContentLoaded", () => {
    //carrega na variável os dados salvos em localStorage
    const dadosSalvos = JSON.parse(localStorage.getItem("noticias"));

    if (dadosSalvos) {
        //caso tenha dados salvos no localStorage a variável que guarda o array de noitícias é atualizada
        noticias = dadosSalvos;
    }
    //é carregado todas as últimas notícias como padrão
    const listaUltimas = gerenciarUltimas("todas");
    //adiciona as notícias na tela
    addNoticiasHome();
    addUltimasNoticias(listaUltimas);
})

//evento que controla o botão de carregar mais notícias
carregar.addEventListener("click", (e) => {
    //recebe o data id do botão
    //const click = e.target.dataset.id;
    const lista = filtroAtualUltimas;

    //se o total de notícias for maior que o valor da variável carregarMais, é somado mostrado mais 3 notícias e atualizado na tela
    if (carregarMais < lista.length) {
        carregarMais = carregarMais + 3;
        addUltimasNoticias(lista);
        atualizarCarregarBtn(lista);
        //caso todas as notícias tenhams ido mostradas, o botão some
    }
})

const atualizarCarregarBtn = (lista) =>{
    if (carregarMais >= lista.length) {
        carregar.style.display = 'none';
    }
}

//evento que controla a barra de navegação
navbar.addEventListener("click", (e) => {
    e.preventDefault();
    //recebe o data id do botão
    const click = e.target.dataset.id;
    if (!click) return;
    //filtra as notícias e cria uma nova lista apenas com as notícias destaques
    const destaquesCarrossel = noticias.filter(item => item.destaque === true);
    //passa o indície compatível com o assunto que foi clicado
    const indiceClicado = destaquesCarrossel.findIndex(n => n.id === Number(click));

    //arruma a ordem da notícia destaque e das notícias que ficam ao lado
    gerenciarCarrosel(indiceClicado);
    //adiciona na tela
    addNoticiasHome();
});

//evento que manipula os botões da aba últimas notícias
btnUltimasNoticias.forEach(botao => {
    //"ouve" cada um dos botões pra encontrar qual foi clicado
    botao.addEventListener("click", (e) => {
        e.preventDefault();
        const click = e.target.dataset.id;
        if (!click) return;

        //passa o tema que foi clicado para ser filtrado 
        const ult = gerenciarUltimas(click);
        //mostra na tela após o filtro
        addUltimasNoticias(ult);
    });
});

//evento que manipula o filtro da barra de pesquisa
inputFiltro.addEventListener('input', (e) => {
    e.preventDefault();

    //captura e trata o testo digitado
    textoBusca = e.target.value.toLowerCase();

    const tela = document.getElementById("ultimasNoticias");

    //apaga todos os filhos que estão na tela para carregar novos
    limparUltimasNoticias(tela);

    const lista = gerenciarUltimas();

    addUltimasNoticias(lista);
})

const addNoticiasHome = () => {

    //filtra as notícias destaque
    const destaquesCarrossel = noticias.filter(item => item.destaque === true);

    destaquesCarrossel.forEach(n => {
        //se estiver na posição principal (0) recebe um tratamento diferente
        if (n.posicaoDestaque == 0) {

            // Animação
            noticia.classList.remove("fade-in");
            void noticia.offsetWidth; // Força o reflow para a animação reiniciar
            noticia.classList.add("fade-in");
            // --------------------------

            //pega a lista de filhos do espaço que fica a manchete e do paragrafo que contem autor, data e tempo de leitura
            const filhos = noticia.children;
            const filhosParagrafo = filhos[4].children;

            filhos[0].src = n.imagem;
            filhos[0].alt = n.alt;

            filhos[1].innerText = n.categoria;
            filhos[1].className = "cat-" + formatarCategoria(n.categoria); //formata a categoria retirando os acentos

            filhos[2].innerText = n.titulo;

            filhos[3].innerText = n.resumo;

            filhosParagrafo[0].innerText = n.autor;
            filhosParagrafo[1].innerText = n.data;
            filhosParagrafo[2].innerText = n.tempoLeitura;

            //avalia se a noticia esta como destaque
        } else if (n.posicaoDestaque >= 1 && n.posicaoDestaque < 4) {
            //pega a posição do card
            const indice = n.posicaoDestaque;
            const noticia = document.getElementById("card" + indice);

            //  ANIMAÇÃO
            noticia.classList.remove("fade-in");
            void noticia.offsetWidth; // Força o reflow para a animação reiniciar
            noticia.classList.add("fade-in");
            // --------------------------

            const filhos = noticia.children;
            const filhosSpan = filhos[1].children;

            filhos[0].innerText = n.titulo;

            filhosSpan[0].innerText = n.categoria;
            filhosSpan[0].className = "cat-" + formatarCategoria(n.categoria);

            filhosSpan[1].innerText = n.data;
        }
    })
}

const addUltimasNoticias = (lista) => {
    limparUltimasNoticias();

    for (let i = 0; i < lista.length; i++) {
        //impede que o sistema ultrapasse o valor limite de notícias que devem ser carregadas
        if (i >= carregarMais) {
            break;
        }

        const imagem = lista[i].imagem;
        const categoria = lista[i].categoria;
        const titulo = lista[i].titulo;
        const autor = lista[i].autor;
        const data = lista[i].data;

        const div = document.createElement("div");
        div.id = lista[i].id;
        div.classList.add("cardUltimasNoticias", "fade-in");

        //Adiciona o span que vai conter a imagem
        const spanImg = document.createElement("span");
        spanImg.classList.add("imgUltimasNoticias");
        const contentImg = document.createElement("img");
        contentImg.setAttribute("alt", lista[i].alt);
        contentImg.setAttribute("src", imagem);
        spanImg.appendChild(contentImg);

        //Adiciona o span que vai conter a categoria
        const spanCategoria = document.createElement("span");
        const catFormatada = formatarCategoria(categoria); //chama a função de formatação do texto categoria
        // Adiciona a classe da categoria e a classe para formatar o botão
        spanCategoria.classList.add("categoriaUltimasNoticias", "cat-" + catFormatada);
        const contentCategoria = document.createTextNode(categoria);
        spanCategoria.appendChild(contentCategoria);

        //Adiciona o span que controla o titulo
        const spanTitulo = document.createElement("span");
        spanTitulo.classList.add("tituloUltimasNoticias");
        const contentTitulo = document.createTextNode(titulo);
        spanTitulo.appendChild(contentTitulo);

        //Adiciona o span que mostra o autor
        const spanAutor = document.createElement("span");
        spanAutor.classList.add("autorUltimasNoticias");
        const contentAutor = document.createTextNode(autor);
        spanAutor.appendChild(contentAutor);

        //Adiciona o span que mostra a data
        const spanData = document.createElement("span");
        spanData.classList.add("dataUltimasNoticias");
        const contentData = document.createTextNode(data);
        spanData.appendChild(contentData);

        //guarda os filhos na div que guardará a notiícia
        div.appendChild(spanImg);
        div.appendChild(spanCategoria);
        div.appendChild(spanTitulo);
        div.appendChild(spanAutor);
        div.appendChild(spanData);

        //guarda no espaço que ficará as notícias
        ultimas.appendChild(div);
    }
}

const limparUltimasNoticias = () => {

    //enquanto houver elementos filhos vai apagando um a um desse espaço 
    while (ultimas.firstChild) {
        ultimas.removeChild(ultimas.firstChild);
    }
}

const gerenciarUltimas = (click) => {

    // carrega apenas as últimas notícias
    let array = noticias.filter(item => item.destaque === false);

    // se click foi feito no botão de carregar mais notícias, o valor é resetado
    if (click !== 'carregar') {
        resetarCarregarMais();
    }

    //analisa se o click possui os valores de categoria
    if (click !== undefined && click !== "todas" && click !== "carregar") {
        switch (click) {
            case 'ciencia':
                array = noticias.filter(item => item.destaque === false && item.categoria === 'Ciência');
                break;
            case 'historia':
                array = noticias.filter(item => item.destaque === false && item.categoria === 'História');
                break;
            case 'tecnologia':
                array = noticias.filter(item => item.destaque === false && item.categoria === 'Tecnologia');
                break;
            case 'cultura':
                array = noticias.filter(item => item.destaque === false && item.categoria === 'Cultura');
                break;
            case 'mente':
                array = noticias.filter(item => item.destaque === false && item.categoria === 'Mente');
                break;
        }
    }
    //se houver texto na barra de buscas, cria uma nova lista já filtrada com o texto inputado
    if (textoBusca !== undefined && textoBusca !== "") {
        const busca = array.filter(n => n.titulo.toLowerCase().includes(textoBusca))
        filtroAtualUltimas = busca;
        atualizarCarregarBtn(busca);
        return busca;
    }
    atualizarCarregarBtn(array);
    filtroAtualUltimas = array;
    return array;
}

//O carrossel é gerenciado utilizando um array circular
const gerenciarCarrosel = (id) => {

    //filtra as notícias em destaque e coloca em uma lista
    const destaquesCarrossel = noticias.filter(item => item.destaque === true);
    let posicao;
    //O array começa a ser percorrido a partir do id da notícia que foi clicada
    let indice = id;
    //variavel que determina os novos valores das posições de cada notícia
    let total = 0;

    //Loopings são feitos enquanto há valores no array
    while (total < destaquesCarrossel.length) {

        //calcula o indice do array daquele elemento
        posicao = indice % destaquesCarrossel.length;

        destaquesCarrossel[posicao].posicaoDestaque = total;

        indice++
        total++;
    }
    //salva no localStorage
    localStorage.setItem("noticias", JSON.stringify(noticias));
}

//aponta pro botão que ativa o dark mode
const toggleButton = document.getElementById('theme-toggle');
const html = document.documentElement;

// Carregar tema salvo ou preferido pelo sistema
const temaSalvo = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

//Aplica o tema dark caso o tema salvo seva equivalente
if (temaSalvo === 'dark' || (!temaSalvo && systemPrefersDark)) {
    html.setAttribute('data-theme', 'dark');
    logo.setAttribute("src", "assets/logo-light.svg")
} else {
    logo.setAttribute("src", "assets/logo-light.svg")
}

// Alternar tema ao clicar
toggleButton.addEventListener('click', () => {

    const temaAtual = html.getAttribute('data-theme');

    const novoTema = temaAtual === 'dark' ? 'light' : 'dark';

    html.setAttribute('data-theme', novoTema);

    localStorage.setItem('theme', novoTema);


    //Gerencia qual logo mostrar dependendo do tema
    if (novoTema === "dark") {
        logo.setAttribute("src", "assets/logo-light.svg")
    } else {
        logo.setAttribute("src", "assets/logo-dark.svg")
    }
});

// Reseta a variável carregar mais
const resetarCarregarMais = () => {
    carregarMais = 3;
    carregar.style.display = 'block'
}

// ouve o envio de email no formulário do footer
formNewsletter.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;

    if (validarEmail(email)) {
        alert("E-mail válido.");
    } else {
        alert("E-mail inválido.")
    }
})

const validarEmail = function (email) {
    //avalia se a estrutura do input é a mesma do regex
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    //testa e retorna um booleano
    return regex.test(email);
}

//formata o texto da categoria retirando acentos
const formatarCategoria = (texto) => {
    return texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};