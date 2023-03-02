/*

	HYPER MULTIPLIER 2
	
	[x6 times faster than Hyper Multiplier 1]
	
	Multiples very large numbers (thousand digits)
	(recommended houndred digits for JS)
	
	Written by Ali Eskici
	23.02.2023
	github.com/alieskici
	alies76@gmail.com
	
*/

function Clean(a) {
    var gecerli = "0123456789";
    var met = "";
    var m = "";
    for (let i = 0; i < a.length; i++) {
        m = a.substring(i, i+1);
        
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
            t1 += Number(c1.substring(c1.length - 1 - i + j, c1.length - i + j)) * Number(c2.substring(c2.length - 1 - j, c2.length - j));
        }

        toplam = (t1 + elde).toString();
        elde = parseInt((t1+elde)/10);

        sonuc = toplam.substring(toplam.length - 1, toplam.length) + sonuc;
        t1 = 0;
    }

    //lot to less
    if (c1.length > 1) {
        for (let i = c1.length - 2; i >= 0; i--) {
            for (let j = i; j >= 0; j--) {
                t1 += Number(c1.substring(i - j, i - j + 1)) * Number(c2.substring(j, j+1));
            }

            toplam = (t1 + elde).toString();
            elde = parseInt((t1+elde)/10);

            sonuc = toplam.substring(toplam.length - 1, toplam.length) + sonuc;
            t1 = 0;
        }
    }

    //remove left zeros
    for (let i = 0; i < sonuc.length; i++) {
        if (sonuc.substring(i,i+1)!="0") {
            sonuc = sonuc.substring(i,sonuc.length);
            break;
        }
    }

    if (elde > 0) {
        sonuc = elde.toString() + sonuc;
    }

    return sonuc;
}