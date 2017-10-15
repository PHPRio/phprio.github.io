Contribua com o site do PHPRio
==============================

Há duas formas para contribuir com o site:

1. abrir uma issue sugerindo algum conteúdo novo
2. fazer um fork e nos enviar updates, atualizações ou correções - na verdade,
essa é a melhor forma de adicionar a sua palestra ao site!

Adicionar um post
-----------------

1. Crie um novo arquivo na pasta `/source/_posts`. O nome deve ser no formato
  `yyyy-mm-dd-slug.md`, onde "slug" é o que será a URL do post;
2. Adicione conteúdo, replicando o formato dos post pré-existentes. Exemplo:
    - é necessário um _frontmatter_ (bloco envolvido por 3 traços) com os campos
      `title` e `tags` e, opcionalmente, outros valores.
    - O corpo vem a seguir, com Markdown tradicional.
3. faça um commit com seu novo arquivo
4. envie um pull request com ele

Adicionar uma palestra
----------------------

Siga os mesmos passos para criar um novo post, mas na pasta `/source/_talks` ao invés.

Para as palestras, há diversos campos disponíveis para uso no _frontmatter_. Todos
são opcionais, e são utilizados para gerar a estrutura e links de exibição dos
dados da palestra:

- `title`: título principal da palestra
- `subtitle`: subtítulo da palestra
- `author`:
    - `name`: nome do autor
    - `link`: link para o site do autor
- `slides`: link para os slides
- `place`: nome do lugar onde a palestra se realizou
- `event`: link para o evento relacionado
- `gallery`: link para as fotos relacionadas
- `video`: link para o vídeo da palestra

Adicionar páginas independentes
-------------------------------

Para criar uma página nova você precisa criar o arquivo Markdown (ou twig) na
pasta correta (provavelmente, na `/source` mesmo), e linká-lo em algum lugar
(provavelmente, no menu em `/source/_layouts/_header.twig`).
