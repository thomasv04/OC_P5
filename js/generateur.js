class Generateur {
    constructeur() {
        this.emplacement = null;
        this.tableau = null;
        this.nb_generation = null;
        this.max_generation = null;
        this.type_generation = null;
        this.couleur_citation = 1;
    }

    init(emplacement, tableau, nb_generation = 1, max_generation = 5) {
        this.emplacement = emplacement;
        this.tableau = tableau;
        this.nb_generation = nb_generation;
        this.max_generation = max_generation;
        this.type_generation = 1;
        this.couleur_citation = 1;

        this.creation_div();
        this.gestion_click();


    }

    creation_div() {
        if ($(this.emplacement).length == 0) {
            alert("il manque une div avec comme classe generateur !!")
        } else {
            $(this.emplacement).append('<div class=champ></div>');
            $(this.emplacement + ' .champ').append('<div class=bouton><h2>Générer</h2></div><div class="test"><h4 class="moins"><p>-</p></h4><div class="total"><p>' + this.nb_generation + '</p></div><h4 class="plus"><p>+</p></h4><h3 class="select phrase"><p class="">Phrase</p></h3><h3 class="question"><p class="">Question</p></h3><div class="suppr"></div></div>');
        }
    }

    gestion_click() {
        $(this.emplacement + ' .champ .bouton').click(() => {
            this.creer_citation();
        })

        $('.plus').click(() => {
            if (this.nb_generation != this.max_generation) {
                this.nb_generation++;
            }

            $('.total p').replaceWith(`<p>${this.nb_generation}</p>`);
        })

        $('.moins').click(() => {
            if (this.nb_generation != 1) {
                this.nb_generation--;
            }
            $('.total p').replaceWith(`<p>${this.nb_generation}</p>`);
        })

        $('.suppr').click(() => {
            this.vider_citation();
        })

        $('.phrase').click(() => {
            if ($('.phrase').hasClass("select") == false) {
                $('.phrase').addClass('select');
                $('.question').removeClass('select');
                this.type_generation = 1;
            }
        })

        $('.question').click(() => {
            if ($('.question').hasClass("select") == false) {
                $('.question').addClass('select');
                $('.phrase').removeClass('select');
                this.type_generation = 2;
            }
        })
    }

    vider_citation() {
        $(this.emplacement + ' .citation_box').replaceWith('<div class=citation_box></div>');
        $(this.emplacement + ' .champ').css('top', '50%');
    }

    chiffre_alea(min, max) {
        this.min = min;
        this.max = max;
        return Math.random() * (max - min) + min;
    }

    mot_alea_valeur(valeur) {
        let valeur_selec = valeur;
        let chiffre_texte_alea = parseInt(this.chiffre_alea(0, valeur.length - 0.00001));
        //alert(chiffre_texte_alea);
        return valeur_selec[chiffre_texte_alea];
    }

    generation_texte(valeur1, valeur2, valeur3, valeur4, valeur5) {
        let mot_valeur1 = this.mot_alea_valeur(valeur1);
        let mot_valeur2 = this.mot_alea_valeur(valeur2);
        let mot_valeur3 = this.mot_alea_valeur(valeur3);
        let mot_valeur4 = this.mot_alea_valeur(valeur4);
        let mot_valeur5 = this.mot_alea_valeur(valeur5);

        if (mot_valeur1 == mot_valeur3) {
            mot_valeur3 = this.mot_alea_valeur(valeur3);
        }


        let texte = `${mot_valeur1} ${mot_valeur2} ${mot_valeur3} ${mot_valeur4} ${mot_valeur5}`;
        return texte;
    }

    generation_question(valeur1, valeur2, valeur3, valeur4) {
        let mot_valeur1 = this.mot_alea_valeur(valeur1);
        let mot_valeur2 = this.mot_alea_valeur(valeur2);
        let mot_valeur3 = this.mot_alea_valeur(valeur3);
        let mot_valeur4 = this.mot_alea_valeur(valeur4);

        let question = `${mot_valeur1} ${mot_valeur2} ${mot_valeur3} ${mot_valeur4}`;
        return question;
    }

    creer_citation() {
        for (let i = 0; i < this.nb_generation; i++) {
            if ($(this.emplacement + ' .citation_box').length == 0) {
                $(this.emplacement).append('<div class=citation_box></div>');

            }

            $(this.emplacement + ' .champ').css('top', '10%');
            if (this.type_generation == 1) {
                let texte_alea = this.generation_texte(this.tableau.valeur1, this.tableau.valeur2, this.tableau.valeur3, this.tableau.valeur4, this.tableau.valeur5);
                $(this.emplacement + ' .citation_box').prepend(`<div class=citation id="${this.couleur_citation}"><p>${texte_alea}</p></div>`);
            }

            if (this.type_generation == 2) {
                let texte_alea = this.generation_question(this.tableau.valeur6, this.tableau.valeur3, this.tableau.valeur7, this.tableau.valeur8);
                $(this.emplacement + ' .citation_box').prepend(`<div class=citation id="${this.couleur_citation}"><p>${texte_alea}</p></div>`);
            }

            if (this.couleur_citation == 6) {
                this.couleur_citation = 1;
            } else {
                this.couleur_citation++;
            }

        }
        $(this.emplacement + ' .citation_box').prepend(`<div class=separateur></div>`);
    }


};
