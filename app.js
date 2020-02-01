$(document).ready(function () {
    console.log('dziala');
    var courage = 0;
    var affectionate = 0;
    var scary = 0;


    $("input[type='submit']").click(function () {
        var radio1Value = $("input[name='question1']:checked").val();
        var radio1ID = $("input[name='question1']:checked").attr('id');
        var radio2Value = $("input[name='question2']:checked").val();
        var radio2ID = $("input[name='question2']:checked").attr('id');
        var radio3Value = $("input[name='question3']:checked").val();
        var radio3ID = $("input[name='question3']:checked").attr('id');
        console.log(radio1ID,radio2ID,radio3ID);
//        if (radio1Value) {
//            alert("Twój poro " + radioValue);
//        }

        function checkAnswer(cor, aff, sca, idnumber) {
            if (idnumber === cor) {
                courage += 1
            } else if (idnumber === aff) {
                affectionate += 1
            } else {
                scary += 1
            }
        }
        checkAnswer('courage1', 'affect1', 'scary1', radio1ID);
        checkAnswer('courage2', 'affect2', 'scary2', radio2ID);
        checkAnswer('courage3', 'affect3', 'scary3', radio3ID);
        console.log("Odwaga: " + courage + " Przychlastowość: " + affectionate + " Straszność: " + scary)
        if (courage >= affectionate && courage >= scary) {
            $("div[id='migtyContainer']").addClass('visible')
        } else if (affectionate > courage && affectionate > scary) {
            $("div[id='affectionateContainer']").addClass('visible')
        } else if (scary > courage && scary > affectionate) {
            $("div[id='scaryContainer']").addClass('visible')
        }
    });


});
