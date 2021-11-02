/**
 * Documentor : Jithendiran
 * Date       : 26-10-21
 * 
 * mimickBlockscope
 */

let outputNumbers = function (count) {
    for (var i = 0; i < count; i++) {
        console.log(i);
    }
    console.log("cn", i);   //it is accessable
}

outputNumbers(2)

outputNumbers = function (count) {

    (function () {
        for (var i = 0; i < count; i++) {
            console.log(i);
        }
    })()
    //console.log("cn",i);   //it is not accessable now it looks like c,java,...
}

outputNumbers(2)