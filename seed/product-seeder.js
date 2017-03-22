var Product = require('../models/product');

var mongoose = require('mongoose');

<<<<<<< HEAD
mongoose.connect(process.env.MONGO_DB_URI);

var products = [
  new Product({
    imagePath: 'https://images-submarino.b2w.io/produtos/01/00/sku/10633/1/10633182_1GG.jpg',
    title: 'Jogo Pes 2016 - Ps4',
    description: 'Juntamente Com Todos Os Novos Recursos Inclusos No Pes 2016, A Série De Futebol Terá Pela Primeira Vez O Sistema De Clima Dinâmico. Essa Nova Implementação Não Apenas Aperfeiçoará Graficamente Os Efeitos De Tempo No Jogo, Mas Também Afetará A Jogabilidade Em Si, Tendo Papel Importante Na Reformulação Do Modo Liga Master E Nas Partidas Off-Line.Além Desta Novidade O Game Apresenta Um Novo Modo De Câmera,Novos Recursos De Comemoração. Título: Pes 16 Plataforma: Ps4 Produtora: Konami Características: Gênero: Esporte Faixa Etária: Livre Jogadores: 1-4 Offline / 2-22 Online Idioma Jogo: Audio Em Português-Br Com Narração De Mauro Beting E Silvio Luis Idioma Manual: Português Sac: 4003-7669 Para Capitais E Regiões Metropolitanas 0800-880-7669 Demais Localidades. Nem Todos Os Recursos Estão Disponíveis Para Todas As Plataformas De Jogo.',
    price: 269
  }),
  new Product({
    imagePath: 'https://images-submarino.b2w.io/produtos/01/00/item/21014/3/21014382_1SZ.jpg',
    title: 'Game Tom Clancys Ghost Recon Wildlands Ps4',
    description: 'Estamos Todos Acostumados Com A Enorme Quantidade De Games De 3 Pessoa Que Existem No Mundo Virtual. Por Causa Disso, Um Jogo Que Possui Um Diferencial Chama Muito Mais A Atenção. Tom Clancys Ghost Recon Wildlands Traz Muito Mais Do Que Uma Ou Outra Novidade. O Game Traz Uma Experiência Totalmente Nova Que Vai Mudar Sua Maneira De Ver Jogos De Tiro.',
    price: 209
  }),
  new Product({
    imagePath: 'https://images-submarino.b2w.io/produtos/01/00/item/127373/6/127373656SZ.jpg',
    title: 'Game Lego Star Wars: O Despertar Da Força - PS4',
    description: 'LEGO® Star Wars: O Despertar da Força marca o retorno incrível da série de videogames LEGO número 1 e leva os fãs para a nova aventura de Star Wars de forma inédita. Os jogadores podem reviver a ação épica do sucesso dos cinemas de uma forma que só LEGO pode oferecer, com todo o enredo de Star Wars: O Despertar da Força recontado sob a ótica inteligente e divertida de LEGO. O jogo também trará conteúdo exclusivo que levará os jogadores a aventuras entre Star Wars: Episódio VI: O Retorno de Jedi e Star Wars: O Despertar da Força, oferecendo uma nova visão sobre o recente filme e seus personagens.',
    price: 169
  }),
  new Product({
    imagePath: 'https://images-submarino.b2w.io/produtos/01/00/item/122163/8/122163887SZ.jpg',
    title: 'Game Mortal Kombat X - PS4',
    description: 'Mortal Kombat X é o próximo capítulo da esperada, lendária e aclamada franquia de jogos de luta da NetherRealm Studios, marcando a estreia da icônica série na nova geração. O jogo combina apresentação cinematográfica com jogabilidade inédita, oferecendo a mais brutal experiência de combate de todos os tempos, trazendo uma nova experiência completamente conectada que arremessa jogadores em uma competição online persistente, na qual toda luta conta na batalha global pela supremacia.',
    price: 79
  }),
  new Product({
    imagePath: 'https://images-submarino.b2w.io/produtos/01/00/item/124776/7/124776759_1GG.jpg',
    title: "Game - Uncharted 4: A Thief's End - PS4",
    description: "Todo tesouro tem seu preço Vários anos após sua última aventura, o aposentado caçador de tesouros, Nathan Drake, é forçado a voltar para o mundo dos ladrões. Agora com sua vida pessoal em jogo, Drake embarca em uma jornada pelo mundo em busca de uma conspiração histórica por trás de um famoso tesouro pirata.",
    price: 108
  }),
  new Product({
    imagePath: 'https://images-submarino.b2w.io/produtos/01/00/item/126036/2/126036287SZ.jpg',
    title: "Game - The Witcher 3: Wild Hunt - PS4",
    description: "The Witcher 3: Wild Hunt é um jogo de RPG em um mundo amplo e dinâmico, não linear e de fantasia sombria baseado em uma história conduzida pelo próprio personagem, pelas escolhas do jogador e com combates estratégicos. O terceiro capítulo desta saga premiada aprimora todos os aspectos da série, com um sistema de combate mais fluido, novos Witcher Senses e Monster Hunting, alquimia aperfeiçoada, sinais mágicos, sistemas de habilidades e muitas outras inovações.",
    price: 99
  })
=======
mongoose.connect('localhost:27017/shopping');

var products = [
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title: 'Gothic Video Game',
        description: 'Awesome Game!!!!',
        price: 10
    }),
    new Product({
        imagePath: 'http://eu.blizzard.com/static/_images/games/wow/wallpapers/wall2/wall2-1440x900.jpg',
        title: 'World of Warcraft Video Game',
        description: 'Also awesome? But of course it was better in vanilla ...',
        price: 20
    }),
    new Product({
        imagePath: 'https://support.activision.com/servlet/servlet.FileDownload?file=00PU000000Rq6tz',
        title: 'Call of Duty Video Game',
        description: 'Meh ... nah, it\'s okay I guess',
        price: 40
    }),
    new Product({
        imagePath: 'https://pmcdeadline2.files.wordpress.com/2014/02/minecraft__140227211000.jpg',
        title: 'Minecraft Video Game',
        description: 'Now that is super awesome!',
        price: 15
    }),
    new Product({
        imagePath: 'https://d1r7xvmnymv7kg.cloudfront.net/sites_products/darksouls3/assets/img/DARKSOUL_facebook_mini.jpg',
        title: 'Dark Souls 3 Video Game',
        description: 'I died!',
        price: 50
    })
>>>>>>> 003e6fe65f576188320d858e8b718b7ae6b2f80d
];

var done = 0;
for (var i = 0; i < products.length; i++) {
<<<<<<< HEAD
  products[i].save(function(err, result) {
    done++;
    if (done === products.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
=======
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
>>>>>>> 003e6fe65f576188320d858e8b718b7ae6b2f80d
}