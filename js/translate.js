$(function () {

    var set_lang;

    dictionary = {
        "en": {
            "minute": 'm',
            "hour": 'h',
            "day": ' day',

            "piece": ' pieces',
            "showall": "Show All",
            "spring": "Spring",
            "summer": "Summer",
            "autumn": "Autumn",
            "winter": "Winter",
            
            "tohum" : "Seed",
            "ekme" : "Planting",
            "hasat" : "Harvest",
            "sure" : "Duration",
            "ekilebilir" : "Cultivable",
            "maaliyet" : "Cost",
            "kazanc" : "Earning",

            "ekinler" : "Crops",
            "cicekler" : "Flowers",
            "hayvanlar" : "Animals",
            "baliklar" : "Fishes",
            "eventler" : "Events"
        },
        "tr": {
            "minute": 'dk',
            "hour": ' saat',
            "day": ' gun'
            ,
            "piece": '  adet',
            "showall": "Hepsini Göster",
            "spring": "Ilkbahar",
            "summer": "Yaz",
            "autumn": "Sonbahar",
            "winter": "Kış",

            "tohum" : "Tohum",
            "ekme" : "Ekme",
            "hasat" : "Hasat",
            "sure" : "Süre",
            "ekilebilir" : "Ekilebilir",
            "maaliyet" : "Maaliyet",
            "kazanc" : "Kazanç",
            
            "ekinler" : "Ekinler",
            "cicekler" : "Cicekler",
            "hayvanlar" : "Hayvanlar",
            "baliklar" : "Baliklar",
            "eventler" : "Eventler"
        },
        "de": {
            "minute": 'min',
            "hour": ' htunde',
            "day": 'tag',

            "piece": '  nummer',
            "showall": "Zeige alles",
            "spring": "Feder",
            "summer": "Sommer",
            "autumn": "Herbst",
            "winter": "Winter",

            "tohum" : "Samen",
            "ekme" : "Pflanzen",
            "hasat" : "Ernte",
            "sure" : "Dauer",
            "ekilebilir" : "Acker",
            "maaliyet" : "Kosten",
            "kazanc" : "Verdienst",
            
            "ekinler" : "Pflanzen",
            "cicekler" : "Blumen",
            "hayvanlar" : "Tiere",
            "baliklar" : "Fische",
            "eventler" : "Ereignisr"
        }
    };

    set_lang = function (dictionary) {
        $("[data-translate]").text(function () {
            var key = $(this).data("translate");
            if (dictionary.hasOwnProperty(key)) {
                return dictionary[key];
            }
        });
    };

    $("#locale").on("change", function () {
        var language = $(this).val().split('-')[0].toLowerCase();
        if (dictionary.hasOwnProperty(language)) {
            set_lang(dictionary[language]);
        }
    });

    set_lang(dictionary.en);

});



