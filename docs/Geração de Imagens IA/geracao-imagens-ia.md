

# Documentação de Geração de Imagem IA

**Nota**: Para obter melhores resultados, recomenda-se escrever o prompt em inglês.

## Ferramentas Disponíveis

São as diferentes plataformas que você pode usar para gerar imagens:

- **OpenAI DALLE**: Vários modelos que geram imagens de alta qualidade.
    - OpenAI DALLE 3 HD
    - OpenAI DALLE 3
    - OpenAI DALLE 2
- **Stable Diffusion**: Outra plataforma popular para gerar imagens com diversas opções de estilo e resolução.
    - Stable Diffusion Ultra
    - Stable Diffusion Core
    - Stable Diffusion 3 Large
    - Stable Diffusion 3 Large Turbo
    - Stable Diffusion 3 Medium
    - SDXL v1.0
    - Stable Diffusion v1.6
- **FLUX**: Um modelo focado em realismo e estilos rápidos de geração de imagens.
    - FLUX Realism
    - FLUX.1 [pro]
    - FLUX.1 [schnell]
    - FLUX.1 [dev]

## Configurações de Imagem

### Número de Imagens

Defina quantas imagens deseja gerar. O intervalo é de 1 a 10.

### Resolução da Imagem

A resolução é o tamanho da imagem. Algumas ferramentas oferecem resoluções como 1024x1024px ou 512x512px. A resolução maior gera imagens mais detalhadas. Confira as resoluções disponíveis para cada ferramenta:

##### OpenAI DALLE

<div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '10px' }}>
    <div className="image-box" style={{ flex: '1 1 200px', height: '200px' }}>
        1024 x 1024px (Imagem Quadrada)
    </div>
    <div className="image-box" style={{ flex: '1 1 200px', height: '350px' }}>
        1024 x 1792px (Imagem Retrato)
    </div>
    <div className="image-box" style={{ flex: '1 1 350px', height: '200px' }}>
        1792 x 1024px (Imagem Paisagem)
    </div>
</div>

##### OpenAI DALLE 2

<div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '10px' }}>
    <div className="image-box" style={{ flex: '1 1 100px', height: '100px' }}>
        256 x 256px (Imagem Compacta)
    </div>
    <div className="image-box" style={{ flex: '1 1 200px', height: '200px' }}>
        512 x 512px (Imagem Média)
    </div>
    <div className="image-box" style={{ flex: '1 1 200px', height: '200px' }}>
        1024 x 1024px (Imagem Grande)
    </div>
</div>

##### Stable Diffusion Ultra

<div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '10px' }}>
    <div className="image-box" style={{ flex: '1 1 200px', height: '200px' }}>
        1:1 (Proporção Quadrada)
    </div>
    <div className="image-box" style={{ flex: '1 1 200px', height: '300px' }}>
        2:3 (Proporção Retrato)
    </div>
    <div className="image-box" style={{ flex: '1 1 300px', height: '200px' }}>
        3:2 (Proporção Paisagem)
    </div>
    <div className="image-box" style={{ flex: '1 1 200px', height: '250px' }}>
        4:5 (Proporção Retrato)
    </div>
    <div className="image-box" style={{ flex: '1 1 250px', height: '200px' }}>
        5:4 (Proporção Paisagem)
    </div>
    <div className="image-box" style={{ flex: '1 1 200px', height: '350px' }}>
        9:16 (Proporção Retrato)
    </div>
    <div className="image-box" style={{ flex: '1 1 350px', height: '200px' }}>
        16:9 (Proporção Paisagem)
    </div>
    <div className="image-box" style={{ flex: '1 1 200px', height: '450px' }}>
        9:21 (Proporção Retrato)
    </div>
</div>

##### SDXL v1.0

<div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '10px' }}>
    <div className="image-box" style={{ flex: '1 1 153px', height: '64px' }}>
        1536 x 640px
    </div>
    <div className="image-box" style={{ flex: '1 1 134px', height: '76px' }}>
        1344 x 768px
    </div>
    <div className="image-box" style={{ flex: '1 1 121px', height: '83px' }}>
        1216 x 832px
    </div>
    <div className="image-box" style={{ flex: '1 1 115px', height: '89px' }}>
        1152 x 896px
    </div>
    <div className="image-box" style={{ flex: '1 1 100px', height: '100px' }}>
        1024 x 1024px
    </div>
    <div className="image-box" style={{ flex: '1 1 89px', height: '115px' }}>
        896 x 1152px
    </div>
    <div className="image-box" style={{ flex: '1 1 83px', height: '121px' }}>
        832 x 1216px
    </div>
    <div className="image-box" style={{ flex: '1 1 76px', height: '134px' }}>
        768 x 1344px
    </div>
    <div className="image-box" style={{ flex: '1 1 64px', height: '153px' }}>
        640 x 1536px
    </div>
</div>

##### Stable Diffusion v1.6

<div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '10px' }}>
    <div className="image-box" style={{ flex: '1 1 200px', height: '100px' }}>
        1024 x 512px
    </div>
    <div className="image-box" style={{ flex: '1 1 179px', height: '100px' }}>
        896 x 512px
    </div>
    <div className="image-box" style={{ flex: '1 1 150px', height: '100px' }}>
        768 x 512px
    </div>
    <div className="image-box" style={{ flex: '1 1 100px', height: '100px' }}>
        512 x 512px
    </div>
    <div className="image-box" style={{ flex: '1 1 100px', height: '150px' }}>
        512 x 768px
    </div>
    <div className="image-box" style={{ flex: '1 1 100px', height: '179px' }}>
        512 x 896px
    </div>
    <div className="image-box" style={{ flex: '1 1 100px', height: '200px' }}>
        512 x 1024px
    </div>
</div>

##### FLUX Realism

<div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '10px' }}>
    <div className="image-box" style={{ flex: '1 1 200px', height: '200px' }}>
        Square HD
    </div>
    <div className="image-box" style={{ flex: '1 1 200px', height: '200px' }}>
        Square
    </div>
    <div className="image-box" style={{ flex: '1 1 200px', height: '267px' }}>
        Portrait 4:3
    </div>
    <div className="image-box" style={{ flex: '1 1 200px', height: '356px' }}>
        Portrait 16:9
    </div>
    <div className="image-box" style={{ flex: '1 1 267px', height: '200px' }}>
        Landscape 4:3
    </div>
    <div className="image-box" style={{ flex: '1 1 356px', height: '200px' }}>
        Landscape 16:9
    </div>
</div>

##### FLUX.1 [pro]

<div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '10px' }}>
    <div className="image-box" style={{ flex: '1 1 200px', height: '200px' }}>
        Square HD
    </div>
    <div className="image-box" style={{ flex: '1 1 200px', height: '200px' }}>
        Square
    </div>
    <div className="image-box" style={{ flex: '1 1 200px', height: '267px' }}>
        Portrait 4:3
    </div>
    <div className="image-box" style={{ flex: '1 1 200px', height: '356px' }}>
        Portrait 16:9
    </div>
    <div className="image-box" style={{ flex: '1 1 267px', height: '200px' }}>
        Landscape 4:3
    </div>
    <div className="image-box" style={{ flex: '1 1 356px', height: '200px' }}>
        Landscape 16:9
    </div>
</div>

##### FLUX.1 [schnell]

<div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '10px' }}>
    <div className="image-box" style={{ flex: '1 1 200px', height: '200px' }}>
        Square HD
    </div>
    <div className="image-box" style={{ flex: '1 1 200px', height: '200px' }}>
        Square
    </div>
    <div className="image-box" style={{ flex: '1 1 200px', height: '267px' }}>
        Portrait 4:3
    </div>
    <div className="image-box" style={{ flex: '1 1 200px', height: '356px' }}>
        Portrait 16:9
    </div>
    <div className="image-box" style={{ flex: '1 1 267px', height: '200px' }}>
        Landscape 4:3
    </div>
    <div className="image-box" style={{ flex: '1 1 356px', height: '200px' }}>
        Landscape 16:9
    </div>
</div>

##### FLUX.1 [dev]

<div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '10px' }}>
    <div className="image-box" style={{ flex: '1 1 200px', height: '200px' }}>
        Square HD
    </div>
    <div className="image-box" style={{ flex: '1 1 200px', height: '200px' }}>
        Square
    </div>
    <div className="image-box" style={{ flex: '1 1 200px', height: '267px' }}>
        Portrait 4:3
    </div>
    <div className="image-box" style={{ flex: '1 1 200px', height: '356px' }}>
        Portrait 16:9
    </div>
    <div className="image-box" style={{ flex: '1 1 267px', height: '200px' }}>
        Landscape 4:3
    </div>
    <div className="image-box" style={{ flex: '1 1 356px', height: '200px' }}>
        Landscape 16:9
    </div>
</div>


## Estilo de Imagem

Escolha o estilo da imagem. Pode ser:

- Nenhum
- Abstrato
- Realista
- Renderização 3D
- Desenho Animado
- Anime
- Arte Digital
- Moderno
- Art Déco
- Ilustração
- Origami
- Arte em Pixel
- Retrô
- Fotografia
- Arte em Linha
- Pop Art
- Vaporwave
- Desenho a Lápis
- Renascimento
- Minimalismo
- Adesivo
- Isométrico
- Cyberpunk
- Steampunk
- Glitchcore
- Bauhaus
- Vetor
- Low Poly
- Ukiyo-e
- Cubismo
- Contemporâneo
- Impressionismo
- Pontilhismo

## Estilo de Iluminação

Escolha como você quer que a luz apareça na imagem. Pode ser:

- Nenhum
- Quente
- Frio
- Hora Dourada
- Hora Azul
- Ambiente
- Estúdio
- Neon
- Dramático
- Cinematográfico
- Natural
- Nebuloso
- Contraluz
- Duro
- Suave
- Iridescente
- Fluorescente
- Decorativo
- Destaque
- Tarefa
- Halógeno
- LED

## Meio da Imagem

Defina o material da imagem. Pode ser:

- Nenhum
- Acrílico
- Tela
- Giz
- Carvão
- Óleo Clássico
- Giz de Cera
- Vidro
- Tinta
- Pastel
- Lápis
- Tinta Spray
- Aquarela
- Painel de Madeira

## Humor

Escolha o humor ou a emoção que a imagem deve transmitir, como:

- Nenhum
- Raivoso
- Agressivo
- Entediante
- Brilhante
- Calmo
- Alegre
- Relaxante
- Colorido
- Feliz
- Escuro
- Neutro
- Triste
- Chorando
- Desapontado
- Flerte

## Nome do Artista

Escolha um artista famoso para inspirar o estilo da imagem, como:

- Leonardo da Vinci
- Vincent van Gogh
- Pablo Picasso
- Salvador Dalí
- Banksy
- Takashi Murakami
- George Condo
- Tim Burton
- Norman Rockwell
- Andy Warhol
- Claude Monet
- Gustav Klimt
- Michelangelo
- Johannes Vermeer
- Entre outros

## Amostras de Difusão de Imagem

A amostra de difusão é o método que a IA usa para gerar a imagem. Diferentes métodos podem afetar a qualidade, o tempo de geração e os detalhes da imagem final. Aqui estão os métodos mais comuns:

- **Auto**: Método padrão que a IA escolhe automaticamente com base no modelo usado. Em geral, é uma escolha equilibrada entre velocidade e qualidade.
- **DDIM (Denoising Diffusion Implicit Models)**: Um método mais eficiente e rápido de gerar imagens, que consegue manter a qualidade visual enquanto reduz o tempo de processamento. É usado frequentemente para resultados mais rápidos e uma geração de imagem mais fluida.
- **DDPM (Denoising Diffusion Probabilistic Models)**: Método tradicional de difusão utilizado em muitas redes de geração de imagens. Ele é mais preciso e gera imagens de alta qualidade, mas geralmente é mais lento do que o DDIM.
- **K_DPMPP_2M**: Um algoritmo de difusão que tenta equilibrar qualidade e velocidade. Ele pode ser mais eficiente do que o DDPM em alguns casos, sendo útil para quem deseja gerar imagens com boa qualidade sem esperar muito tempo.
- **K_DPMPP_2S_ANCESTRAL**: Uma versão mais avançada do K_DPMPP_2M, com uma abordagem que favorece a preservação de detalhes, mas pode ser mais lenta. Ideal para quem busca imagens com maior fidelidade.
- **K_DPM_2**: Outro algoritmo de difusão com foco em imagens detalhadas, mas sem ser tão demorado quanto o K_DPMPP_2S. Ele oferece um bom equilíbrio entre qualidade e desempenho.
- **K_DPM_2_ANCESTRAL**: Variante do K_DPM_2 com uma técnica aprimorada para melhorar a qualidade das imagens, mas com maior tempo de processamento. Ideal para quem busca resultados mais refinados.
- **K_EULER**: Método de difusão baseado no algoritmo Euler, que pode gerar imagens com maior controle sobre a qualidade. É mais detalhado e preciso, mas pode ser mais lento que o Auto e DDIM.
- **K_EULER_ANCESTRAL**: Uma versão mais avançada do K_EULER, com foco na criação de imagens com muito mais detalhe e precisão. Esse método tende a gerar imagens de alta qualidade, mas com maior tempo de geração.
- **K_HEUN**: Método de difusão que usa o algoritmo de Heun. Ele pode gerar imagens com boa qualidade e velocidade, sendo uma boa opção quando se quer um equilíbrio entre os dois fatores.
- **K_LMS**: Um algoritmo de difusão baseado no método de mínimos quadrados (LMS). Ele tende a gerar imagens mais suaves e com boa preservação de detalhes, mas pode ser mais lento.

## Modelos com Opções Extras

Os seguintes modelos têm opções extras:

- **Stable Diffusion**
- **Stable Diffusion Ultra**
- **Stable Diffusion Core**
- **Stable Diffusion 3 Large**
- **Stable Diffusion 3 Large Turbo**
- **Stable Diffusion 3 Medium**
- **SDXL v1.0**
- **Stable Diffusion v1.6**

### Opções Extras

- **Prompts**
- **Prompt negativo**
- **Multi-prompt**
- **Pintura interna de imagem**
- **Aumento de escala de imagem**
- **Imagem para imagem**
