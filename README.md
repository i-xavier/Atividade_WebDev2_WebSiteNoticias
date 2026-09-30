# CuriosaMente — Portal de Ciência e Curiosidades

Portal de notícias fictício sobre ciência, história, tecnologia, mente e cultura, feito com **HTML, CSS e JavaScript puro** (sem frameworks ou bibliotecas externas) para a atividade de Desenvolvimento Web 2.

- **Autor:** Igor Xavier dos Santos SP3212181
- **Link publicado:** https://github.com/i-xavier/Atividade_WebDev2_WebSiteNoticias

---

## Estrutura do projeto

```
├── index.html      # estrutura da página (HTML semântico)
├── style.css       # estilos, variáveis de cor e responsividade
├── index.js        # dados das notícias e interatividade
└── assets/         # logos usadas no cabeçalho (logo-light.svg e logo-dark.svg)
```

## Design

### Paleta de cores

As cores são definidas como variáveis CSS (`:root`), o que permite trocar o tema claro/escuro alterando só o atributo `data-theme`.

**Cores base**

| Variável   | Hex (claro) | Hex (escuro) | Uso                                        |
|------------|-------------|--------------|--------------------------------------------|
| `--paper`  | `#FFFFFF`   | `#121212`    | Fundo da página                            |
| `--ink`    | `#15171C`   | `#F4F4F5`    | Texto principal                            |
| `--slate`  | `#5A6472`   | `#A1A1AA`    | Texto secundário e etiquetas padrão        |
| `--mist`   | `#EEF0F3`   | `#27272A`    | Superfícies suaves (busca, botões, rodapé) |
| `--line`   | `#E2E5EA`   | `#3F3F46`    | Linhas e bordas                            |
| `--signal` | `#E5372A`   | `#E5372A`    | Destaque: "AO VIVO", hover, botão Assinar  |

**Cores das editorias** (etiquetas das notícias)

| Editoria   | Hex       |
|------------|-----------|
| Tecnologia | `#2F6BEB` |
| Ciência    | `#0F8C7E` |
| Cultura    | `#B8348F` |
| História   | `#C07A12` |
| Mente      | `#5A6472` |

As editorias **História** e **Mente** recebem as cores de Negócios e Opinião, que estão definidas no requisitos de CSS.

### Tipografia

Duas famílias do Google Fonts, com papéis distintos:

- **Newsreader** (serifada): títulos das notícias, da seção "Últimas" e do rodapé. Dá o tom editorial de jornal.
- **Inter** (sem serifa): navegação, corpo do texto, metadados e botões. Foca na legibilidade em tela.

### Fontes das imagens

- **Lorem Picsum** — <https://picsum.photos>: imagens de teste aleatórias usadas nas notícias (ex.: `https://picsum.photos/400/250?random=2`).
- Todas as imagens têm o atributo `alt` descritivo, definido no array de notícias.
- **Logos:** Gerados com Google Gemini.

## Recursos de JavaScript

Todo o conteúdo dinâmico é montado a partir de um **array de objetos** e inserido no DOM.

- **Tema claro/escuro:** o botão alterna o atributo `data-theme`, respeita a preferência do sistema (`matchMedia`) e **salva a escolha no `localStorage`**.
- **Filtro por editoria:** os botões da seção "Últimas" filtram as notícias por categoria.
- **Busca em tempo real:** o campo de busca filtra as notícias da seção "Últimas" pelo título enquanto o usuário digita.
- **Carregar mais:** mostra 3 notícias por vez; o botão some quando todas já foram exibidas.
- **Destaques rotativos:** ao clicar em um item do menu, a notícia correspondente vira a manchete e as demais mudam de posição (lógica de array circular). A ordem também é salva no `localStorage`.
- **Newsletter:** validação do e-mail com expressão regular e mensagem de retorno.
- **Animações:** fade-in ao trocar/carregar notícias e bolinha pulsante no "AO VIVO".

## Estrutura da página

- **Cabeçalho fixo:** selo "AO VIVO", botão de tema, logo, menu de navegação e busca.
- **Destaque (hero):** manchete principal + 3 notícias secundárias na lateral.
- **Últimas:** filtros por editoria + grade de cards (3 colunas no desktop, 1 no celular).
- **Newsletter:** formulário de assinatura.
- **Rodapé:** copyright e links institucionais.

## Requisitos da atividade

- **HTML semântico:** `header`, `nav`, `main`, `section`, `article`, `aside`, `footer`.
- **Conteúdo:** 11 notícias, cada uma com título, categoria, autor, data e imagem com `alt`.
- **CSS:** paleta e 2 fontes com variáveis/`font-family`, layout com Flexbox e Grid, media query em `850px`, estados de hover nos elementos interativos.
- **JavaScript:** mais de 2 recursos interativos, com DOM puro.

## Como rodar

Não precisa instalar nada. Baixe os arquivos e abra o `index.html` no navegador.