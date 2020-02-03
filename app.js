$(document).ready(function () {
    console.log('dziala');
    var courage = 0;
    var affectionate = 0;
    var joyful = 0;
    var sporty = 0;
    var funny = 0;


    $("input[type='submit']").click(function () {
        var radio1ID = $("input[name='question1']:checked").attr('id');
        var radio2ID = $("input[name='question2']:checked").attr('id');
        var radio3ID = $("input[name='question3']:checked").attr('id');
        var radio4ID = $("input[name='question4']:checked").attr('id');
        var radio5ID = $("input[name='question5']:checked").attr('id');
        console.log(radio1ID, radio2ID, radio3ID, radio4ID, radio5ID);
//        function checkAnswer(cor, aff, joy, sport,fun, idnumber) {
//            if (idnumber === cor) {
//                courage += 1
//            } else if (idnumber === aff) {
//                affectionate += 1
//            } else if (idnumber === joy) {
//                joyful += 1
//            } else if (idnumber === sport) {
//                sporty += 1
//            } else if (idnumber === fun) {
//                funny += 1
//            }
//        }
            if (radio1ID === 'courage1') {
                courage += 1
            } else if (radio1ID === 'affect1') {
                affectionate += 1
            } else if (radio1ID === 'funny1') {
                funny += 1
            }
            if (radio2ID === 'jubilant2') {
                joyful += 1
            } else if (radio2ID === 'sporty2') {
                sporty += 1
            } else if (radio2ID === 'funny2') {
                funny += 1
            }
            if (radio3ID === 'affect3') {
                affectionate += 1
            } else if (radio3ID === 'sporty3') {
                sporty += 1
            } else if (radio3ID === 'courage3') {
                courage += 1
            }
            if (radio4ID === 'jubilant4') {
                joyful += 1
            } else if (radio4ID === 'sporty4') {
                sporty += 1
            } else if (radio4ID === 'courage4') {
                courage += 1
            }
            if (radio5ID === 'jubilant5') {
                joyful += 1
            } else if (radio5ID === 'affect5') {
                affectionate += 1
            } else if (radio5ID === 'funny5') {
                funny += 1
            }
//        checkAnswer('courage1', 'affect1', 'funny1', radio1ID);
//        checkAnswer('jubilant2', 'sporty2', 'funny2', radio2ID);
//        checkAnswer('affect3', 'sporty3', 'courage3', radio3ID);
//        checkAnswer('courage4', 'jubilant4', 'sporty4', radio4ID);
//        checkAnswer('affect5', 'jubilant5', 'funny5', radio5ID);
        console.log("Odwaga: " + courage + " Przychlastowość: " + affectionate + " Radość: " + joyful + " Sportowość: " + sporty + " Figlarność: " + funny)
        if (courage > affectionate && courage > joyful && courage > sporty && courage > funny) {
            $("div[id='migtyContainer']").addClass('visible')
        } else if (affectionate > courage && affectionate > joyful && affectionate > sporty && affectionate > funny) {
            $("div[id='affectionateContainer']").addClass('visible')
        } else if (joyful > courage && joyful > affectionate && joyful > sporty && joyful > funny) {
            $("div[id='joyfulContainer']").addClass('visible')
        } else if (sporty > courage && sporty > affectionate && sporty > joyful && sporty > funny) {
            $("div[id='sportyContainer']").addClass('visible')
        } else if (funny > courage && funny > affectionate && funny > joyful && funny > sporty) {
            $("div[id='funnyContainer']").addClass('visible')
        } else {
            $("div[id='heartContainer']").addClass('visible')
        }
    });


});
