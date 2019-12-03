---
layout: with_header
title: (2019) Campanha de Arrecadação para os domínios
---

<style>
#botoes {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
#botoes a.button {
    display: inline-flex;
    margin: 10px;
    text-transform: none;
    letter-spacing: 0;
}
a.button img, button img {
    height: 1.5em;
    margin-right: 5px;
    align-self: center;
}
#picpay {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-wrap: wrap;
}
#picpay > div {
    flex: 1;
    margin: 10px;
}
input[type=number] {
    color: black;
    width: 100px;
}
#progresso {
    width: 100%;
    height: 2em;
}
table {
    max-width: 500px;
}
table th {
    text-align: right; /* fixing markdown extra issue with header alignment */
}
#obrigado {
    display: none;
    background-color: lightgreen;
    font-size: 2em;
    line-height: 1.5em;
    text-align: center;
}
</style>

<blockquote id="obrigado">Obrigado pela sua doação, em nome de toda a comunidade do PHPRio <i class="icon fa-smile"></i></blockquote>

De tempos em tempos organizamos uma nova campanha de arrecadação de fundos para manter os domínios do grupo.

[Em 2016 lançamos o _PHP.Rio_](/campanha-2016) e arrecadamos 3 anos de despesas pra manter tanto o domínio novo quanto o antigo _PHPRio.org_, que foi mantido pra transicionar o site para o novo domínio e manter os emails dos organizadores ativos.   
Além disso, também lançamos esse site novo pra comemorar o novo domínio - baseado no Sculpin, um gerador de sites estáticos. Com isso, a hospedagem pode ser movida para o GitHub Pages e ficamos somente com os custos anuais dos domínios.

Objetivos de 2019
-----------------

### 1. Manter os emails no _PHPRio.org_
Na época de criação do _PHPRio.org_ o domínio foi cadastrado no Google Apps, para que os mantenedores também tivessem acesso ao serviço de email com o domínio do grupo. **O email oficial foi e ainda é essencial para as comunicações oficiais do grupo**, pois traz credibilidade perante patrocinadores e empresas apoiadoras, além de outras questões administrativas do grupo.

No entanto, até o lançamento do _PHP.Rio_, esse serviço gratuito havia sido descontinuado, e mantido somente para cadastros antigos. Também não é possível trocar o domínio cadastrado, o que prendeu nossos emails ao domínio antigo. Não encontramos outro servidor gratuito de email que seja confiável e permita domínios personalizados, para que pudéssemos migrar nossos emails para o _PHP.Rio_. Portanto, até que encontremos uma solução melhor, será necessário manter o domínio antigo no ar.

### 2. Manter o _PHP.Rio_
O legado olímpico também é para a gente da web: o domínio `.rio` permite que tenhamos um endereço mais _catchy_ e fácil de compartilhar. Em 2016 criamos a campanha original e a recepção do novo domínio foi muito boa.


Custos
------
O .org está registrado pelo NameCheap, e a renovação anual custa $15.16, com um pequeno desconto pra renovar por mais de um ano de uma vez.

O .rio [varia bastante de acordo com o _registrar_](https://tld-list.com/tld/rio); atualmente usamos o Regtons, o mais em conta e "limpo" (sem prática de vendas casadas), no valor de $22.25 por ano. 

Estes são os custos - baseados num câmbio aproximado de R$4.10 e IOF de 6.38%:

|                          | Custos US$|  Custos R$ |
|--------------------------|----------:|-----------:|
|`PHPRio.org` por 3 anos   |    $44.88 |  R$195.75  |
|`PHP.Rio` por 3 anos      |    $66.75 |  R$291.14  |
|                **Total** |**$111.63**|**R$486.89**|

Contribua!
----------
As doações esse ano serão feitas preferencialmente através do **PicPay**, plataforma online de pagamentos que não gera taxas de transferência nem pra você, nem pra gente, e permite pagamento até com cartão de crédito. Se você não tem conta, [crie com esse link](http://www.picpay.com/convite?TM7H) - o bônus de indicação será revertido para a campanha, e você ganha R$10 em cashback no primeiro pagamento com cartão!

Adicionamos os dados de transferência pelo **Itaú** e **NuConta**. O **PayPal** também foi adicionado, mas uma [parte da doação será perdida com tarifas](https://www.paypal.com/br/webapps/mpp/merchant-fees#commercialpayments).

<!-- _momento Criança Esperança_ -->
<div id="botoes">
    <a class="button special" href="https://picpay.me/igorsantos07/1.00">
        <img alt="Uma bala" src="https://noto-website-2.storage.googleapis.com/emoji/emoji_u1f36c.png"/> Doar R$ 1
    </a>
    <a class="button special" href="https://picpay.me/igorsantos07/5.00">
        <img alt="Uma pipoca" src="https://noto-website-2.storage.googleapis.com/emoji/emoji_u1f37f.png"/> Doar R$ 5
    </a>
    <a class="button special" href="https://picpay.me/igorsantos07/10.00">
        <img alt="Um burger" src="https://noto-website-2.storage.googleapis.com/emoji/emoji_u1f354.png"/> Doar R$10
    </a>
    <a class="button special" href="https://picpay.me/igorsantos07/25.00">
        <img alt="Obrigado" src="https://noto-website-2.storage.googleapis.com/emoji/emoji_u2728.png"/> Doar R$25
    </a>
</div>

<div id="picpay">
    <div class="align-right">
        <span class="align-center" style="display: inline-block">
            <input id="custom" type="number" step="0.50" value="50.00" title="Outro valor" class="align-center"/><br/>
            <a class="button special" style="margin-top: 10px;" href="javascript:window.location='https://picpay.me/igorsantos07/'+document.querySelector('#custom').value">
                <i class="fas fa-gift"></i> Doar outro valor
            </a>
        </span>
    </div>
    <div class="align-center">
        <a href="https://picpay.me/igorsantos07" style="display: inline-block; text-align: center">
            <img alt="QR Code" src="https://chart.googleapis.com/chart?cht=qr&chl=https://picpay.me/igorsantos07&chs=100x100&chld=L|0"/><br/>
            Doar no app do PicPay
        </a>
    </div>
    <div>
        <span class="button special clear" style="pointer-events: none">
            <i class="fas fa-piggy-bank"></i>
            Itaú: Ag 5624, C/C 09071-7
        </span><br/>
        <a class="button special" href="https://nubank.com.br/pagar/5xo68/HfXCt7bBc4">
            <i class="fas fa-credit-card-blank"></i> NuConta
        </a><br/>
        <a class="button" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=8TE9Q5DZL5YCA&source=url">
            <i class="fab fa-paypal"></i> Paypal
        </a>
    </div>
</div>

> Estes valores serão depositados na conta do organizador da campanha, e sempre atualizaremos os resultados aqui.


### <label for="progresso">Progresso da Campanha: <span class="total"></span></label>
<progress id="progresso" max="486.89" value="425.89"><span class="total"></span></progress>
<script>
    const valor = 'R$'+document.querySelector('#progresso').value
    document.querySelectorAll('.total').forEach(e => e.innerText = valor)
    if (window.location.search == '?obrigado') {
        document.querySelector('#obrigado').style.display = 'block'
    }
</script>

### Para tirar quaisquer dúvidas sobre a campanha, entre em contato:

- Igor Santos ([email](mailto:igorsantos07+campanha@PHPRio.org), [Telegram](https://telegram.me/igorsantos07)), responsável pela campanha
- o grupo ([Telegram](https://telegram.me/PHPRio), [lista](https://groups.google.com/forum/#!forum/PHPRio-org))

## Muito Obrigado!
