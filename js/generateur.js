$(function () {
    let valeur1 = Array("Ils", "Elles", "Les humains", "Les Français", "Les Italiens", "Les Espagnols", "Les Robots");

    let valeur2 = Array("volent aussi bien que", "mangent autant de poissons que");

    let valeur3 = Array("Les humains", "Les Français", "Les Italiens", "Les Espagnols", "Les Robots");

    let valeur4 = Array(", ce qui a déclanché cette guerre", ", ce qui a créé cet amour", ", c'est pourquoi leur extinction a été créée");

    let valeur5 = Array(".", "!", "!!!", "...", ":D", ":P");

    let valeur6 = Array("Pourquoi", "Comment");

    let valeur7 = Array("sont devenus comme ça", "font ça", "en sont arrivés là", "arrivent à faire ça", "sont morts");

    let valeur8 = Array("?", "?!", "??");

    let nb_generation = 1;

    init();

    let element_citation = 1;

    let type = "phrase";

    $('.generateur .champ .bouton').click(function () {
        creer_citation();
    })

    $('.plus').click(function () {
        if (nb_generation != 5) {
            nb_generation++;
        }

        $('.total p').replaceWith('<p>' + nb_generation + '</p>');
    })

    $('.moins').click(function () {
        if (nb_generation != 1) {
            nb_generation--;
        }
        $('.total p').replaceWith('<p>' + nb_generation + '</p>');
    })

    $('.suppr').click(function () {
        vider_citation()
    })

    $('.phrase').click(function () {
        if ($(this).hasClass("select") == false) {
            $(this).addClass('select');
            $('.question').removeClass('select');
            type = "phrase";
        }
    })

    $('.question').click(function () {
        if ($(this).hasClass("select") == false) {
            $(this).addClass('select');
            $('.phrase').removeClass('select');
            type = "question";
        }
    })


    function init() {
        if ($('.generateur').length == 0) {
            alert("il manque une div avec comme class generateur !!")
        } else {
            $('.generateur').append('<div class=champ></div>');
            $('.generateur .champ').append('<div class=bouton><h2>Générer</h2></div><div class="test"><h4 class="moins"><p>-</p></h4><div class="total"><p>1</p></div><h4 class="plus"><p>+</p></h4><h3 class="select phrase"><p class="">Phrase</p></h3><h3 class="question"><p class="">Question</p></h3><div class="suppr"></div></div>');
        }
    }

    function chiffre_aleatoire(min, max) {
        return Math.random() * (max - min) + min;
    }

    function mot_alea_valeur(valeur) {
        return valeur[parseInt(chiffre_aleatoire(0, valeur.length - 0.00001))];
    }

    function generation_texte(valeur1, valeur2, valeur3, valeur4, valeur5) {
        let mot_valeur1 = mot_alea_valeur(valeur1);
        let mot_valeur2 = mot_alea_valeur(valeur2);
        let mot_valeur3 = mot_alea_valeur(valeur3);
        let mot_valeur4 = mot_alea_valeur(valeur4);
        let mot_valeur5 = mot_alea_valeur(valeur5);

        if (mot_valeur1 == mot_valeur3) {
            mot_valeur3 = mot_alea_valeur(valeur3);
        }

        let texte = mot_valeur1 + " " + mot_valeur2 + " " + mot_valeur3.toLowerCase() + " " + mot_valeur4 + " " + mot_valeur5;
        return texte;
    }

    function generation_question(valeur1, valeur2, valeur3, valeur4) {
        let mot_valeur1 = mot_alea_valeur(valeur1);
        let mot_valeur2 = mot_alea_valeur(valeur2);
        let mot_valeur3 = mot_alea_valeur(valeur3);
        let mot_valeur4 = mot_alea_valeur(valeur4);

        let question = mot_valeur1 + " " + mot_valeur2.toLowerCase() + " " + mot_valeur3 + " " + mot_valeur4;
        return question;
    }

    function creer_citation() {
        for (var i = 0; i < nb_generation; i++) {
            if ($('.generateur .citation_box').length == 0) {
                $('.generateur').append('<div class=citation_box></div>');

            }
            $('.generateur .champ').css('top', '10%');
            if (type == "phrase") {
                let texte_alea = generation_texte(valeur1, valeur2, valeur3, valeur4, valeur5);
                $('.generateur .citation_box').prepend('<div class=citation id="' + element_citation + '"><p>' + texte_alea + '</p></div>');
            }

            if (type == "question") {
                let texte_alea = generation_question(valeur6, valeur3, valeur7, valeur8);
                $('.generateur .citation_box').prepend('<div class=citation id="' + element_citation + '"><p>' + texte_alea + '</p></div>');
            }

            if (element_citation == 6) {
                element_citation = 1;
            } else {
                element_citation++;
            }

        }
    }

    function vider_citation() {
        $('.generateur .citation_box').replaceWith('<div class=citation_box></div>');
        $('.generateur .champ').css('top', '50%');
    }
})
