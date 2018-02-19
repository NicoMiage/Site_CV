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

$(document).ready(function(){
    $('.modal').modal();

    $('#contact').click(function() {
        var name = '&#110;&#105;&#99;&#111;&#108;&#97;&#115;&#46;&#107;&#105;&#114;&#99;&#117;&#110;'
        var domain = '&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;'
        var tel = '&#43;&#51;&#51;&#54;&#49;&#49;&#49;&#48;&#48;&#52;&#54;&#50;';
        var mail = $('#mail');
        var telButton = $('#tel');
        mail.attr('href', 'mailto:' + name + '@' + domain);
        mail.html(name + '@' + domain);
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            telButton.attr('href', 'tel:' + tel);
        } else {
            telButton.attr('style', 'cursor: context-menu');
        }
        telButton.html(tel);
    });

    var options = [
        {selector: '.technos', offset: 0, callback: function() {
            Materialize.showStaggeredList('.technos');
        } },
    ];
    Materialize.scrollFire(options);
});