const filmsTab = [
    {
        id: 1,
        title: "Nausicaä de la Vallée du Vent",
        original_title: "風の谷のナウシカ",
        image: "https://m.media-amazon.com/images/M/MV5BZTI3NmJmYTQtNDg4NS00M2VlLTgzZDAtZWIwZDcyOWY5YzIzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        description: "Sur une Terre ravagée par la folie des hommes durant les 'sept jours de feu', une poignée d'humains a réussi à survivre dans une vallée protégée par le vent. Ce peuple agricole est pourtant menacé par une forêt toxique qui ne cesse de prendre de l'ampleur, forêt où seuls survivent des insectes géants et mutants.",
        director: "Hayao Miyazaki",
        release_date: "1984",
        running_time: "116",
        characters: [
            {
                id: 11,
                name: "Nausicaä",
                gender: "Femme",
                age: 16,
                image: "https://static.wikia.nocookie.net/studio-ghibli/images/b/be/Nausicaa.jpg"
            },
            {
                id: 12,
                name: "Kushana",
                gender: "Femme",
                age: 25,
                image: "https://www.nautiljon.com/images/perso/00/35/kushana_4553.webp",
            },
            {
                id: 13,
                name: "Yupa",
                gender: "Male",
                age: "Inconnu",
                image: "https://ghiblishop.fr/wp-content/uploads/2021/11/H-QYYoiK_400x400-1.jpeg",
            }
        ],
    },
    {
        id: 2,
        title: "Le Château dans le ciel",
        original_title: "天空の城ラピュタ",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg",
        description: " Qui est vraiment Sheeta, la petite fille porteuse d'un médaillon aux pouvoirs magiques qui suscite bien des convoitises ? Retenue prisonnière à bord d'un dirigeable, l'enfant affronte une bande de pirates de l'air dirigés par la très pittoresque Dora, puis une armée de militaires à la solde de Muska, un gentleman machiavélique trop poli pour être honnête. Réfugiée dans un village de mineurs où elle rencontre le jeune Pazu, Sheeta va découvrir le secret de ses origines. Et elle prouvera que l'histoire de Laputa, l'île merveilleuse flottant dans les airs, n'était pas une légende...",
        director: "Hayao Miyazaki",
        release_date: "1986",
        running_time: "124",
        characters: [
            {
                id: 21,
                name: "Sheeta",
                gender: "Femme",
                age: 16,
                image: "https://static.wikia.nocookie.net/studio-ghibli/images/b/bb/Sheeta_3.png",
            },
            {
                id: 22,
                name: "Pazu",
                gender: "Homme",
                age: 13,
                image: "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg"
            },
            {
                id: 23,
                name: "Muska",
                gender: "Male",
                age: 33,
                image: "https://static.wikia.nocookie.net/studio-ghibli/images/d/d5/Muska.jpg"
            }
        ],
    },
    {
        id: 3,
        title: "Le Tombeau des lucioles",
        original_title: "火垂るの墓",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qG3RYlIVpTYclR9TYIsy8p7m7AT.jpg",
        description: "Japon, été 1945. Les bombardiers américains arrosent Kobé de plusieurs milliers de tonnes de bombes incendiaires. Un jeune adolescent et sa petite sœur perdent leurs parents. Ils se réfugient dans leur famille proche mais cruelle. Leur quête désespérée d'un monde meilleur les amènera à traverser autant les ruines du Japon ensanglanté par la fin de cette guerre qu'à affronter l'indifférence et la cruauté des adultes...",
        director: "Isao Takahata",
        release_date: "1988",
        running_time: "89",
        characters: [
            {
                id: 31,
                name: "Seita",
                gender: "Homme",
                age: 14,
                image: "https://i.pinimg.com/736x/3e/6a/18/3e6a181a972e08bbd25f37835c77b007.jpg",
            },
            {
                id: 32,
                name: "Setsuko",
                gender: "Femme",
                age: 4,
                image: "https://static.wikia.nocookie.net/studio-ghibli/images/a/a8/Setsuko_Yokokawa.jpg",
            },      
        ],
    },
    {
        id: 4,
        title: "Mon voisin Totoro",
        original_title: "となりのトトロ",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/rtGDOeG9LzoerkDGZF9dnVeLppL.jpg",
        description: "Par un jour ensoleillé, Tatsuo Kusakabe emménage dans une maison de campagne non habitée depuis longtemps située près d'une forêt avec ses deux filles, Satsuki et Mei. Ces dernières, heureuses d'arriver dans leur nouvelle maison, découvrent que celle-ci semble hantée et habitée par des noiraudes, autrement appelées les susuwatari, qui une fois écrasées deviennent de la suie. Les filles font également la connaissance de Kanta, un enfant qui semble ne pas les apprécier et assez intimidé par rapport à leur venue. En attendant l'arrivée de leur mère, hospitalisée, les filles vont découvrir cette nouvelle vie à la campagne et feront la connaissance de leur nouveau voisin...",
        director: "Hayao Miyazaki",
        release_date: "1988",
        running_time: "86",
        characters: [
            {
                id: 41,
                name: "Totoro",
                gender: "Male",
                age: "Très très vieux",
                image: "https://i.pinimg.com/736x/bc/87/33/bc8733fb65d84a0559c16537c9d51842.jpg",
            }, 
            {
                id: 42,
                name: "Satsuki Kusakabe",
                gender: "Femme",
                age: 10,
                image: "https://static.wikia.nocookie.net/studio-ghibli/images/f/f2/Satsuki_Kusakabe.jpg",
            },  
            {
                id: 43,
                name: "Mei Kusakabe",
                gender: "Femme",
                age: 4,
                image: "https://assets.mycast.io/actor_images/actor-mei-kusakabe-174276_large.jpg",
            },  
            {
                id: 44,
                name: "Chat-Bus",
                gender: "Inconnu",
                age: "Inconnu",
                image: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F02%2Ftw-ghibli-park-toyota-ridable-catbus-development-info.jpg",
            },             
        ],
    },
    {
        id: 5,
        title: "Kiki la petite sorcière",
        original_title: "魔女の宅急便",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/7nO5DUMnGUuXrA4r2h6ESOKQRrx.jpg",
        description: "Dans la famille de KIKI, on est sorcière de mère en fille. Mais pour avoir droit à ce titre, il faut partir faire son apprentissage dans une ville inconnue durant un an.Un soir, accompagnée de son chat JIJI, après avoir embrassé ses parents, KIKI enfourche le vieux balai de sa mère et met le cap vers le Sud, 'pour voir la mer'... Commence alors l'apprentissage de notre jeune et espiègle KIKI, qui décroche un emploi de livreuse chez une sympathique boulangère... ",
        director: "Hayao Miyazaki",
        release_date: "1989",
        running_time: "102",
        characters: [
            {
                id: 51,
                name: "Kiki",
                gender: "Femme",
                age: 13,
                image: "https://static.wikia.nocookie.net/studio-ghibli/images/5/59/Kiki.jpg",
            },  
            {
                id: 52,
                name: "Jiji",
                gender: "Male",
                age: 13,
                image: "https://static.wikia.nocookie.net/studio-ghibli/images/b/b4/Jiji.jpg",
            }, 
            {
                id: 53,
                name: "Osono",
                gender: "Femme",
                age: "Inconnu",
                image: "https://static.wikia.nocookie.net/studio-ghibli/images/3/3a/Osono.jpg",
            },  
        ],
    },
    {
        id: 6,
        title: "Porco Rosso",
        original_title: "紅の豚",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/byKAndF6KQSDpGxp1mTr23jPbYp.jpg",
        description: "En Italie, à la fin des années 20. Refusant de devenir un héros de la nation, Marco, un pilote hors pair, accepte volontairement de subir un mauvais sort qui le transforme en cochon. A la même période, bon nombre de pilotes désoeuvrés ont formé un gang de pirates de l'air, pour mieux pouvoir détrousser les riches vacanciers amateurs de croisières nautiques.",
        director: "Hayao Miyazaki",
        release_date: "1992",
        running_time: "93",
        characters: [
            {
                id: 61,
                name: "Porco Rosso / Marco Pagot",
                gender: "Homme",
                age: 37,
                image: "https://static.tvtropes.org/pmwiki/pub/images/porco_rosso2_800x_9.jpg",
            },  
            {
                id: 62,
                name: "Fio Piccolo",
                gender: "Femme",
                age: 17,
                image: "https://static.wikia.nocookie.net/studio-ghibli/images/c/c2/Fio_Piccolo.jpg",
            }, 
            {
                id: 63,
                name: "Donald Curtis",
                gender: "Homme",
                age: "Inconnu",
                image: "https://static.wikia.nocookie.net/studio-ghibli/images/6/61/Donald_Curtis.jpg",
            },
            {
                id: 64,
                name: "Madame Gina",
                gender: "Femme",
                age: 24,
                image: "https://static.wikia.nocookie.net/studio-ghibli/images/e/eb/Gina.jpg",
            },
        ],
    },
    {
        id: 7,
        title: "Pompoko",
        original_title: "平成狸合戦ぽんぽこ",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/kowo9E1e1JcWLXj9cCvAOFZcy5n.jpg",
        movie_banner: "https://image.tmdb.org/t/p/original/jScPd0u0jeo66l8gwDl7W9hDUnM.jpg",
        description: "Dans une montagne située à Tama, au sud de Tokyo, les Tanukis mènent une vie tranquille au côté des paysans humains sans les ennuyer. Un jour, une dispute éclate entre deux clans autour de la nourriture qui se raréfie. La cause de cette pénurie est la déforestation de la montagne de Tama causée par les humains pour l’aménagement d’une nouvelle ville, suite à leur forte expansion démographique. Commence alors le combat des Tanukis pour protéger leur espace vital : ils décident de s’unir et de résister aux Hommes en utilisant leur pouvoir de métamorphose.",
        director: "Isao Takahata",
        release_date: "1994",
        running_time: "119",
        characters: [
            {
                id: 71,
                name: "Shōkichi ",
                gender: "Male",
                age: "Inconnu",
                image: "https://static.wikia.nocookie.net/studio-ghibli/images/5/59/Shoukichi_1.jpg",
            },  
            {
                id: 72,
                name: "Okiyo",
                gender: "Male",
                age: "inconnu",
                image: "https://static.wikia.nocookie.net/studio-ghibli/images/b/bd/Okiyo.jpg",
            }, 
            {
                id: 73,
                name: "Gonta",
                gender: "Homme",
                age: "Inconnu",
                image: "https://cdn.anisearch.fr/images/character/cover/82/82907_400.webp",
            },
        ],
    },
    {
        id: 8,
        title: "Princesse Mononoke",
        original_title: "もののけ姫",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/jHWmNr7m544fJ8eItsfNk8fs2Ed.jpg",
        description: "Ashitaka, un jeune guerrier japonais, affronte un sanglier géant et furieux qui attaque son village. Il tue la bête, mais se retrouve atteint par un mal mystérieux. Sur le conseil des sages, il part vers l'Ouest, à la recherche de ce qui a transformé l'animal en démon. Au cours de son périple, il rencontre San, une jeune fille qui vit avec les loups. Ashitaka apprend que les humains sont à l'origine de tous ces maux, car ils détruisent la forêt, qu'ils exploitent pour alimenter leurs forges.",
        director: "Hayao Miyazaki",
        release_date: "1997",
        running_time: "134",
        characters: [
            {
                id: 81,
                name: "San  (Mononoke)",
                gender: "Femme",
                age: 16,
                image: "https://static.wikia.nocookie.net/studio-ghibli/images/3/3f/San.jpg",
            },  
            {
                id: 82,
                name: "Ashitaka",
                gender: "Male",
                age: 17,
                image: "https://static.wikia.nocookie.net/studio-ghibli/images/4/49/Ashitaka.jpg",
            }, 
            {
                id: 83,
                name: "Moro",
                gender: "Femelle",
                age: 300,
                image: "https://www.superherodb.com/pictures2/portraits/10/050/27653.jpg",
            },
        ],
    },
    {
        id: 9,
        title: "Le Voyage de Chihiro",
        original_title: "千と千尋の神隠し",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
        description: "Au cours d'un voyage en voiture, la famille de Chihiro,10 ans, fait une halte dans un parc à thème qui semble abandonné. Ses parents découvrent des mets succulents dans un restaurant et commencent à manger. Ils se retrouvent alors transformés en cochons. Prise de panique, Chihiro s'enfuit et rencontre l'énigmatique Haku, qui lui explique le fonctionnement de l'univers dans lequel elle vient de pénétrer. Pour sauver ses parents, la fillette va devoir faire face à la terrible sorcière Yubaba.",
        director: "Hayao Miyazaki",
        release_date: "2001",
        running_time: "124",
        characters: [
            {
                id: 91,
                name: "Chihiro",
                gender: "Femme",
                age: 10,
                image: "https://static.wikia.nocookie.net/studio-ghibli/images/8/8e/Chihiro_Ogino.jpg/",
            },  
            {
                id: 92,
                name: "Haku",
                gender: "Homme",
                age: 12,
                image: "https://static.wikia.nocookie.net/studio-ghibli/images/8/89/Haku-2.png",
            }, 
            {
                id: 93,
                name: "Yubaba",
                gender: "Femme",
                age: 60,
                image: "https://static.wikia.nocookie.net/movie-villains/images/3/3a/Yubaba.JPG",
            },
            {
                id: 94,
                name: "Sans-visage",
                gender: "Inconnu",
                age: "Inconnu",
                image: "https://static.wikia.nocookie.net/studio-ghibli/images/9/9d/No-Face_infobox.png",
            },
        ],
    },
    {
        id: 10,
        title: "Le Royaume des chats",
        original_title: "猫の恩返し",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/avPMO5cnaGHgLaNiAIhy33WoQLm.jpg",
        description: "Une lycéenne nommée Haru sauve un chat qui a été renversé par un camion. Le chat s'avère être le prince du royaume des chats, et Haru se voit offrir de nombreux cadeaux en échange de son heroïsme, y compris une demande en mariage.",
        director: "Hiroyuki Morita",
        release_date: "2002",
        running_time: "75",
        characters: [
            {
                id: 1001,
                name: "Haru Yoshioka",
                gender: "Femme",
                age: 17,
                image: "https://static.wikia.nocookie.net/studio-ghibli/images/2/27/Haru_Yoshioka.jpg",
            },  
            {
                id: 1002,
                name: "Humbert von Gikkingen",
                gender: "Homme",
                age: "Inconnu",
                image: "https://static.wikia.nocookie.net/studio-ghibli/images/4/4f/Humbert_von_Gikkingen.jpg",
            }, 
        ],
    },
    {
        id: 11,
        title: "Le Château ambulant",
        original_title: "ハウルの動く城",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/TkTPELv4kC3u1lkloush8skOjE.jpg",
        description: "Sophie, une orpheline de 18 ans, travaille dur dans la boutique de chapelier que lui a laissée son père. Un jour, en ville, elle croise Hauru, un magicien très séduisant, mais faible de caractère. Une sorcière, se méprenant sur leurs sentiments, change Sophie en une vieille femme de 90 ans. Désespérée, Sophie erre dans la campagne quand elle aperçoit un étrange château qui se déplace sur d'immenses pattes.",
        director: "Hayao Miyazaki",
        release_date: "2004",
        running_time: "119",
        characters: [
            {
                id: 1011,
                name: "Hauru",
                gender: "Homme",
                age: 18,
                image: "https://www.anime-planet.com/images/characters/howl-1838.jpg",
            },  
            {
                id: 1012,
                name: "Sophie Hatter-Pendragon",
                gender: "Femme",
                age: "Inconnu",
                image: "https://s4.anilist.co/file/anilistcdn/character/large/b508-ONXMgE281eHe.jpg",
            }, 
            {
                id: 1013,
                name: "Marco",
                gender: "Homme",
                age: 10,
                image: "https://static.wikia.nocookie.net/studio-ghibli/images/5/5d/Markl.jpg",
            }, 
            {
                id: 1014,
                name: "Calcifer",
                gender: "Male",
                age: "Inconnu",
                image: "https://i.pinimg.com/736x/c3/13/8b/c3138bc5831545e058d0fb46adce1d34.jpg",
            }, 
        ],
    },
    {
        id: 12,
        title: "Ponyo sur la falaise",
        original_title: "崖の上のポニョ",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/mikKSEdk5kLhflWXbp4S5mmHsDo.jpg",
        description: "Le petit Sosuke, cinq ans, habite un village construit au sommet d'une falaise qui surplombe la mer intérieure. Un beau matin, alors qu'il joue sur la plage en contrebas, il découvre une petite fille poisson rouge nommée Ponyo, piégée dans un pot de confiture. Sosuke la sauve, et décide de la garder avec lui dans un seau. Ponyo est aussi fascinée par Sosuke que ce dernier l'est par elle.",
        director: "Hayao Miyazaki",
        release_date: "2008",
        running_time: "100",
        characters: [
            {
                id: 1021,
                name: "Ponyo",
                gender: "Femme",
                age: 5,
                image: "https://www.nautiljon.com/images/perso/00/12/ponyo_7321.webp",
            },  
            {
                id: 1022,
                name: "Sōsuke",
                gender: "Homme",
                age: 5,
                image: "https://pbs.twimg.com/media/EYUgdZNWAAUbrbp?format=jpg",
            },
        ],
    },
    {
        id: 13,
        title: "Le vent se lève",
        original_title: "風立ちぬ",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/jfwSexzlIzaOgxP9A8bTA6t8YYb.jpg",
        description: "Au Japon, dans les années 1910, le jeune Jiro Horikoshi est fasciné par les réalisations du concepteur d'avions Giovanni Caproni. Dans ses rêves, il s'envole dans l'azur et le rencontre. Il voudrait devenir pilote, mais il sait que sa vue déficiente ne le lui permettra jamais. Le temps venu, il décide d'entreprendre des études en génie aéronautique et les réussit brillamment. En 1927, il est engagé dans une prestigieuse entreprise d'ingénierie.",
        director: "Hayao Miyazaki",
        release_date: "2013",
        running_time: "126",
        characters: [
            {
                id: 1031,
                name: "Jiro Horikoshi",
                gender: "Homme",
                age: 30,
                image: "https://static.wikia.nocookie.net/studio-ghibli/images/d/d7/Jirou_Horikoshi.jpg",
            },  
            {
                id: 1032,
                name: "Naoko Satomi",
                gender: "Femme",
                age: "Inconnu",
                image: "https://static.wikia.nocookie.net/studio-ghibli/images/d/d9/Nahoko_Satomi.jpg",
            },
        ],
    },
];

module.exports = filmsTab;