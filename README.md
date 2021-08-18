Sources do site do PHP.rio
==========================

[![Status do build](https://github.com/PHPRio/site/actions/workflows/deploy.yml/badge.svg)](https://github.com/PHPRio/site/actions/workflows/deploy.yml)  
 
Este repositório contém os sources do [php.rio](http://php.rio).
O site é hospedado pelo próprio [GitHub Pages](https://pages.github.com). Para tanto, tínhamos duas opções:
 
1. Fazer o site com [Jekyll](https://jekyllrb.com) e forçar a galera a se virar com Ruby e similares :mask:
2. Fazer o site com um primo PHP do Jekyll, o [Sculpin](https://sculpin.io), que é PHPRio-friendly.

Obviamente, fomos pela segunda opção.

Também habilitamos uma extensão do Markdown. [Os detalhes do que é possível fazer a mais está disponível na página do processador em PHP usado](https://michelf.ca/projects/php-markdown/extra).
 
> *Disclaimer:* esse projeto foi baseado no exemplo de Blog Skeleton que tem no [Get Started deles](https://sculpin.io/getstarted).


Instalação
----------

_muidifício_.

1. Clonar o repositório: `git clone git@github.com:PHPRio/site.git phprio-site`
2. Dependências: `composer install` (espero que você tenha o Composer instalado, né? Senão, veja [a seguir](#Composer))
3. _[opcional]_ Se você for mexer no layout, você vai precisar do `node-sass` ou algum outro compilador de SASS. 
Instale-o pelo NPM: `npm install --global node-sass`.

> Não tente seguir as instruções do site do Sculpin. Elas estão bem desatualizadas (mandando usar um phar, por exemplo).

### Composer

Método prático pra instalar o Composer globalmente no seu PC: `curl -sS https://getcomposer.org/installer | sudo php -- --filename=composer --install-dir=/usr/local/bin`


Compilação do site
------------------

### Desenvolvimento

- Para testar o site durante o desenvolvimento você pode executar `composer watch` e acessar em `localhost:8000`.
- Para compilar ele uma única vez e servir, `composer serve`.
- Há também como compilar estaticamente e só, com o `composer generate`.
- Para o layout, nós usamos SASS. Se você for mexer nisso, é importante subir também o watcher de SASS:
`composer sass-watch`. Se quiser compilar uma única vez, `composer sass`.

### Produção

A build está sendo feita automaticamente usando [Github Actions](https://docs.github.com/pt/actions). Para não misturar os _statics_ com todo o _source_ do site, usamos a branch [`gh-pages`](https://github.com/PHPRio/site/tree/gh-pages) para armazenar os _statics_.


Desenvolvimento e como contribuir
---------------------------------
Veja o `CONTRIBUTING.md` para detalhes sobre como desenvolver e contribuir com o site.
