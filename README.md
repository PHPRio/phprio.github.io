# Sources do site do PHP.rio

[![Status do build](https://github.com/PHPRio/site/actions/workflows/deploy.yml/badge.svg)](https://github.com/PHPRio/site/actions/workflows/deploy.yml)  
 
Este repositório contém os sources do [php.rio](http://php.rio).
Utilizamos o [Sculpin](https://sculpin.io) para gerar o site estático e o hospedamos no [GitHub Pages](https://pages.github.com).

## Sobre o Sculpin

Para o desenvolvimento, tínhamos duas opções:
 
1. Fazer o site com [Jekyll](https://jekyllrb.com) e forçar a galera a se virar com Ruby e similares :mask:
2. Fazer o site com um primo PHP do Jekyll, o [Sculpin](https://sculpin.io), que é PHPRio-friendly.

Obviamente, fomos pela segunda opção. Esse projeto foi baseado no exemplo de Blog Skeleton disponível no [Get Started deles](https://sculpin.io/getstarted).

Também habilitamos uma extensão do Markdown. [Os detalhes do que é possível fazer a mais está disponível na página do processador em PHP usado](https://michelf.ca/projects/php-markdown/extra).

## Instalação

_muidifício_.

1. Clone o repositório.
   ```
   git clone git@github.com:PHPRio/phprio.github.io.git
   ```
2. Instale as dependências  
   (espero que você tenha o Composer instalado, né? Senão, veja [a seguir](#Composer)).
   ```sh
   composer install
   ```
3. _(opcional)_ Se você for mexer nos estilos SCSS, instale as dependências do Node.
   ```
   npm install
   ```

### Composer
Método prático pra instalar o Composer globalmente no seu PC, caso ainda não tenha instalado:
```
curl -sS https://getcomposer.org/installer | sudo php -- --filename=composer --install-dir=/usr/local/bin
```

## Compilação do site

### Desenvolvimento

Para testar o site durante o desenvolvimento:
```
composer watch
```
Após executar o comando acima, você poderá acessar o site em http://localhost:8000.

_(opcional)_ Se você for mexer nos estilos SCSS, é importante rodar também o watcher do sass:
`npm run sass-watch`.
Se quiser compilar uma única vez, `npm run sass`.

### Produção

A build está sendo feita automaticamente usando [Github Actions](https://docs.github.com/pt/actions) e é commitada na branch [`gh-pages`](https://github.com/PHPRio/site/tree/gh-pages).

### Desenvolvimento e como contribuir
Veja o `CONTRIBUTING.md` para detalhes sobre como desenvolver e contribuir com o site.
