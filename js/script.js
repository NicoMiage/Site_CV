$(function() {
    var card_school = $('.card-school');
    var school_height = 0;
    var card_pro = $('.card-pro');
    var pro_height = 0;

    // On récupère la carte la plus grande des .card-school
    for(var i = 0; i < card_school.length; i++) {
        if($(card_school.get(i)).height() > school_height) school_height = $(card_school.get(i)).height();
    }
    // On modifie la hauteur de toutes les cartes
    $('.card-school').height(school_height);
    
    // On récupère la carte la plus grande des .card-pro
    for(var j = 0; j < card_pro.length; j++) {
        if($(card_pro.get(j)).height() > pro_height) pro_height = $(card_pro.get(j)).height();
    }
    // On modifie la hauteur de toutes les cartes
    $('.card-pro').height(pro_height);
});