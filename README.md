Sources do site do PHP.rio
==========================

Descritivo dessa treta
----------------------

>TL;DR: aqui fica o _source_, os _statics_ ficam no [phprio.github.io][statics].
 
Este repositório contém os sources do [php.rio](http://php.rio).
O site é hospedado pelo próprio [GitHub Pages](https://pages.github.com). Para tanto, tínhamos duas opções:
 
1. Fazer o site com [Jekyll](https://jekyllrb.com) e forçar a galera a se virar com Ruby e similares :mask:, mas tendo a build sendo gerada
automaticamente
2.  Fazer o site com um primo PHP do Jekyll, o [Sculpin](https://sculpin.io), que não faz build automática mas é PHPRio-friendly.

Obviamente, fomos pela segunda opção. Para tanto, é necessário que o site seja publicado na raiz de um repositório com
o nome correto e, pra não misturar os _statics_ com todo o _source_ do site, dividimos o projeto em dois repositórios.  
Assim, o conteúdo final do site gerado fica em `/output_prod`, que é um submódulo desse aqui.
 
> *Disclaimer:* esse projeto foi baseado no exemplo de Blog Skeleton que tem no [Get Started deles](https://sculpin.io/getstarted).


Instalação
----------

_muidifício_.

1. Clonar o repositório: `git clone git@github.com:PHPRio/site.git phprio-site`
2. Entre na pasta, e prepare o submódulo: `git submodule init; git submodule update`
3. Dependências: `composer install` (espero que você tenha o Composer instalado, né? Senão, veja [a seguir](#Composer))
4. _[opcional]_ Se você for mexer no layout, você vai precisar do `node-sass` ou algum outro compilador de SASS. 
Instale-o pelo NPM ou Yarn: `npm install --global node-sass` ou `yarn global add node-sass`.

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

[![Build Status](https://travis-ci.org/PHPRio/site.svg?branch=master)](https://travis-ci.org/PHPRio/site)  
A build está sendo feita automaticamente no Travis. Veja os [detalhes e instruções](https://github.com/PHPRio/site/pull/16).

1. Para fazer a compilação, use `composer prod`. Isso limpa a pasta, re-gera o SASS, e compila com configurações de
 produção.
2. Para fazer o deploy, `composer deploy` entra na pasta de produção, faz o commit para o submódulo e faz o push.
3. Se você quiser fazer os dois passos de uma vez, use `composer prod-deploy` :smirk:

> Não esqueça de, ao finalizar tudo, fazer um commit que inclua a pasta `output_prod`!  
> A dica é fazer o deploy antes do commit final da última modificação, assim a gente não polui o histórico do
repositório de source com commits "atualizando build do site" :wink:


Desenvolvimento e como contribuir
---------------------------------
Veja o `CONTRIBUTING.md` para detalhes sobre como desenvolver e contribuir com o site.


[statics]: https://github.com/PHPRio/phprio.github.io
