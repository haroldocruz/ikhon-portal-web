# LAYOUT

_03 de Jun. de 2022._

**Este módulo organiza os _layouts_ do projeto de forma que, sempre que for preciso, o _layout_ atual possa ser trocado pela aplicação.**


O layout seguirá o mesmo do template _Admin PRO_, que foi adquirido sob a licença #####. Ele está dividido em 4 partes principais: _nav_, _top_, _content_ e _footer_. A _UI_ deste _template_ foi construída usando a biblioteca _Bootstrap 5_, a qual trabalha com conceitos de _grid layout_ e _breakpoints_.

_Breakpoints_ são medidas retiradas da largura de uma _viewport_ e usadas para quebra do _layout_, contribuindo com uma visualização _UI_ responsiva. As medidas padrão dos _breakpoints_, são estas:

>**Medidas padrão:**
XS < 576px 
SM >= 576px
MD >= 768px
LG >= 992px
XL >= 1200px
XXL > 1400px

**Para _viewports_ de largura SM (_>=576px_):**

- _nav_ ficará logo abaixo de _top_ ocupando toda a lateral esquerda com largura aproximada de 20% e fixa na tela, podendo ser "minimizada", reduzindo sua visualização para exibir apenas os ícones de cada item de menu.
- _top_ ficará na parte de cima ocupando desde a margem esquerda até a margem direita da _viewport_, com altura aproximada de 15%.
- _footer_ ficará na parte de baixo ocupando desde a margem direita de _nav_ até a margem direita da _viewport_, com altura aproximada de 15% e sem posição fixa.
- _content_ ficará com todo o restante da _viewport_.

**Para _viewports_ de largura XS (_<576px_):**
- _nav_ ficará oculta. Quando visível, sobreporá os demais conteúdos, ocupando toda a lateral esquerda com largura aproximada de 70% (_portrait mode_) ou 40% (_landscape mode_).
- _top_ ficará ocupando toda a parte superior, com altura aproximada de 15%.
- _footer_ ficará ocupando toda a parte inferior, com altura aproximada de 15% sem posição fixa.
- _content_ ficará com todo o restante da _viewport_, posicionado entre _top_ e _footer_.


Materia de apoio: https://getbootstrap.com/docs/5.0/layout/breakpoints/