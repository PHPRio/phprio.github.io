---
layout: with_header
title: Empresas parceiras do PHPRio
---

<style>
#parceiros {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
a.parceira {
    display: flex;
    flex-basis: calc(33% - 40px);
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
	margin: 50px 20px;
	border-bottom: 0;
	font-weight: bold;
}
</style>

Nossos meetups são apoiados por algumas empresas presentes no Rio de Janeiro.
Os patrocínios costumam vir em forma de espaço para organizar nossos meetups, custeio do coffee break entre as palestras, entre outras formas.

Quer ajudar o PHPRio a crescer? Entre em contato conosco pelo [Telegram]({{site.links.telegram}}), [Meetup]({{site.links.meetup}}) ou pela [Lista]({{site.links.groups}})!

<div id="parceiros">
    {% for empresa in site.parceiras %}
        <a href="{{ empresa.url }}" target="_blank" class="parceira">
            <img src="{{ empresa.logo }}" alt="{{ empresa.nome }}"/>
            <span>{{ empresa.nome }}</span>
        </a>
    {% endfor %}
</div>
