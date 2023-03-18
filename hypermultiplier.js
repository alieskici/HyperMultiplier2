/*

	HYPER MULTIPLIER 2
	
	[x10 times faster than Hyper Multiplier 1]
	
	Multiples very large numbers (thousand digits)
	
	Written by Ali Eskici
	23.02.2023
	github.com/alieskici
	alieskici@hotmail.com

    use:
    1) include in your html: hypermultiplier.js
    <script src="hypermultiplier.js"></script>

    2) Insert Mul function into html:
    function Mul(){
        var s1 = document.getElementById(numberArea1).value;
        var s2 = document.getElementById(numberArea2).value;
        document.getElementById(resultArea).value = Multiply(s1,s2);
    }

    3) get s1 = number 1, s2 = number 2 values and send them Multiply function as:
    Multiply(s1, s2) -> this func returns a string value as result of multiply process.
	
*/

function Clean(a) {
    var gecerli = "0123456789";
    var met = "";
    var m = "";
    for (let i = 0; i < a.length; i++) {
        m = a.charAt(i);
        
        if (gecerli.indexOf(m) > -1) {
            met += m;
        }
    }

    return met;
}

function Multiply(a1, a2) {
    var c1 = Clean(a1); var c2 = Clean(a2);
    var sonuc = "";
    var t1 = 0;
    var toplam = "";
    var elde = 0;
    var sifir = "";

    //#region make equal lengths
    if (c1.length > c2.length) {
        for (let i = 0; i < c1.length - c2.length; i++) {
            sifir += "0";
        }
        c2 = sifir + c2;
    }
    else if (c2.length > c1.length) {
        for (let i = 0; i < c2.length - c1.length; i++) {
            sifir += "0";
        }
        c1 = sifir + c1;
    }
    //#endregion

    //MULTIPLE PROCESS BEGIN

    //less to lot
    for (let i = 0; i < c1.length; i++) {
        for (let j = 0; j <= i; j++) {
            t1 += Number(c1.charAt(c1.length - 1 - i + j)) * Number(c2.charAt(c2.length - 1 - j));
        }

        toplam = (t1 + elde).toString();
        elde = parseInt((t1+elde)/10);

        sonuc = toplam.charAt(toplam.length - 1) + sonuc;
        t1 = 0;
    }

    //lot to less
    if (c1.length > 1) {
        for (let i = c1.length - 2; i >= 0; i--) {
            for (let j = i; j >= 0; j--) {
                t1 += Number(c1.charAt(i - j)) * Number(c2.charAt(j));
            }

            toplam = (t1 + elde).toString();
            elde = parseInt((t1+elde)/10);

            sonuc = toplam.charAt(toplam.length - 1) + sonuc;
            t1 = 0;
        }
    }

    //remove left zeros
    for (let i = 0; i < sonuc.length; i++) {
        if (sonuc.charAt(i)!="0") {
            sonuc = sonuc.substring(i,sonuc.length);
            break;
        }
    }

    if (elde > 0) {
        sonuc = elde.toString() + sonuc;
    }

    return sonuc;
}