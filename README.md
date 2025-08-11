# Teste Front-End Cakto - Henrique Lima

## Decisões Técnicas

Para atuar no desafio proposto, optei por utilizar Next.js para aproveitar ao máximo a performance, garantindo que o SEO esteja sempre otimizado. Também escolhi Next.js por facilitar a manutenção, permitir a construção de componentes reutilizáveis e manter as páginas dinâmicas e interativas

Pensando na arquitetura decidi utilizar a Feature-based architecture. Escolhi essa abordagem porque ela permite organizar toda a lógica relacionada a cada página ou funcionalidade de forma separada, garantindo melhor controle e isolamento. Isso me assegura que, futuramente, não terei problemas com conflitos ou dificuldades para escalar o projeto

Usei React Hook Form para controlar os formulários de forma leve e eficiente, evitando renderizações desnecessárias. Para validação, escolhi Zod porque permite criar schemas claros e garantir que os dados estejam corretos antes do envio. Juntos, facilitam a organização e manutenção do código.

## Como Executar

```bash
npm install
npm run dev

Após a instalação e execução, abra o navegador em:

http://localhost:3000/checkout


##Se tivesse mais tempo, o que você faria para aumentar a conversão deste checkout?
- Implementaria testes unitários e end-to-end para garantir a qualidade do código e evitar que alterações futuras quebrem a aplicação. Isso me daria a segurança de que não estarei tomando decisões no escuro.

- Usaria testes A/B para validar mudanças no checkout, assegurando que qualquer melhoria seja baseada em dados concretos e aumente a conversão.

##Resposta Bônus
- Criaria uma estratégia de abandono de carrinho para todos aqueles que tiverem cartão rejeitado ou gerarem o PIX e não finalizarem o pagamento, implementando remarketing para incentivar a compra.

- Adicionaria elementos visuais na tela, como banners, contagem regressiva e depoimentos para trabalhar gatilhos mentais que aumentem a conversão.
```
