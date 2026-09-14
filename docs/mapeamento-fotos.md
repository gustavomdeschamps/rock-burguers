# Mapeamento das fotos reais

Todas as 234 fotos dos três pacotes foram inspecionadas antes da seleção. As fotos abaixo são únicas no site; a imagem social também é exclusiva e não aparece no conteúdo da página.

| Origem no pacote                               | Arquivo final                                             | Uso                                                  | Conteúdo visível                                                 | Motivo da escolha                                                                                               |
| ---------------------------------------------- | --------------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `instagram/04-loja-ambiente/instagram-017.jpg` | `public/img/ambiente/salao-parede-vermelha-guitarra.webp` | Fundo do hero — `src/components/site/Hero.tsx:26`    | Salão, parede vermelha, guitarra, quadros e mesas de madeira     | É a foto que melhor concentra a identidade visual real da casa e tem leitura forte no primeiro impacto.         |
| `instagram/01-lanches/instagram-079.jpg`       | `public/img/lanches/hamburguer-camadas-bacon.webp`        | Plano 3D do hero — `src/components/site/Hero.tsx:79` | Hambúrguer alto em camadas, com queijo, presunto, bacon e cebola | É a imagem de lanche mais expressiva e o formato vertical funciona no recorte sobreposto do hero.               |
| `instagram/04-loja-ambiente/instagram-003.jpg` | `public/img/ambiente/forno-lenha-aceso.webp`              | Seção “A casa” — `src/components/site/Sobre.tsx:15`  | Forno preto aceso, chamas e brasas                               | O fogo e o equipamento estão nítidos; comunica preparo e ambiente sem depender de texto promocional.            |
| `facebook/04-loja-ambiente/facebook-062.jpg`   | `public/img/ambiente/deck-mesas-madeira-vista.webp`       | Seção “A casa” — `src/components/site/Sobre.tsx:38`  | Deck, mesa, bancos de madeira, vista do bairro e gato laranja    | É a melhor visão do espaço externo e acrescenta um detalhe espontâneo, sem aparência de foto de banco.          |
| `instagram/01-lanches/instagram-005.jpg`       | `public/img/lanches/torrada-frango-molho.webp`            | Galeria — `src/components/site/Galeria.tsx:3`        | Torrada com cubos de frango e molho cremoso                      | O recheio é legível e apetitoso; a legenda permanece genérica para não atribuir um sabor exato sem confirmação. |
| `instagram/02-porcoes/instagram-060.jpg`       | `public/img/porcoes/fritas-cheddar-bacon.webp`            | Galeria — `src/components/site/Galeria.tsx:11`       | Fritas com cheddar e bacon                                       | É a associação visual mais inequívoca entre foto e item do cardápio.                                            |
| `instagram/01-lanches/instagram-097.jpg`       | `public/img/lanches/lanche-cestinha-salada.webp`          | Galeria — `src/components/site/Galeria.tsx:19`       | Lanche com alface, tomate, cebola e milho em cestinha            | Mostra a apresentação real, mas recebe nome genérico porque o item exato não pôde ser confirmado.               |
| `instagram/02-porcoes/instagram-022.jpg`       | `public/img/porcoes/frango-passarinho-fritas.webp`        | Galeria — `src/components/site/Galeria.tsx:27`       | Frango à passarinho, fritas e alface                             | É a foto mais clara do conjunto servido e corresponde visualmente ao item listado.                              |
| `google/03-bebidas/google-001.jpg`             | `public/img/bebidas/milkshake-chocolate-chantilly.webp`   | Galeria — `src/components/site/Galeria.tsx:35`       | Milkshake, chocolate, chantilly, granulado e cereja              | Tem foco limpo, leitura imediata e composição quadrada adequada ao mosaico.                                     |
| `instagram/02-porcoes/instagram-095.jpg`       | `public/img/porcoes/carne-acebolada.webp`                 | Galeria — `src/components/site/Galeria.tsx:43`       | Cubos de carne e cebola sobre pão                                | A textura e os ingredientes estão nítidos; a legenda descreve somente o que é visível.                          |
| `instagram/01-lanches/instagram-088.jpg`       | `public/img/lanches/hot-dog-tomate-cebola.webp`           | Galeria — `src/components/site/Galeria.tsx:51`       | Hot dog com salsicha, tomate e cebola                            | É uma identificação visual segura e mostra a apresentação real em cestinha.                                     |
| `facebook/02-porcoes/facebook-039.jpg`         | `public/img/porcoes/polenta-frita-molho.webp`             | Galeria — `src/components/site/Galeria.tsx:59`       | Palitos de polenta frita e molho verde                           | Prato inequívoco, enquadramento limpo e cor coerente com o restante da galeria.                                 |
| `instagram/03-bebidas/instagram-085.jpg`       | `public/img/bebidas/drink-vermelho-limao.webp`            | Galeria — `src/components/site/Galeria.tsx:67`       | Drink vermelho, gelo e limão                                     | É a bebida com melhor leitura do copo e a cor conversa naturalmente com a parede vermelha da casa.              |
| `facebook/04-loja-ambiente/facebook-034.jpg`   | `public/img/ambiente/rock-burguers-compartilhamento.webp` | Open Graph/Twitter — `index.html:22`                 | Salão escuro com parede vermelha                                 | Foi reservada para compartilhamento social, em proporção 1200 × 630, sem repetir uma foto exibida na página.    |

## Conversão

Comando reproduzível usado no projeto:

```powershell
py scripts\prepare_images.py --source .photo-audit --output public\img
```

Equivalente com `sharp-cli` para uma foto individual:

```powershell
npx sharp-cli --input ".photo-audit/instagram/01-lanches/instagram-079.jpg" --output "public/img/lanches/hamburguer-camadas-bacon.webp" --format webp --quality 80 resize 1600
```

O script aplica orientação EXIF, limita a maior dimensão a 1600 px (2000 px no hero), converte para WebP e gera a imagem social em 1200 × 630.
