class hal {
   constructor (magyar, latin, egyeb, url, kep){
    this.magyar= magyar;
    this.latin=latin;
    this.egyeb=egyeb;
    this.url=url;
    this.kep=kep;
   } 
}

const halak = [];
halak["balin"] = new hal("Balin","Leuciscus aspius","fenekeszeg, kapókeszeg, őnhal, ragadozó őn, villámkeszeg","https://hu.wikipedia.org/wiki/Balin_(halfaj)","balin.jpg")
halak ["bodorka"] = new hal("Bodorka","Rutilus rutilus","búzaszemű keszeg","https://hu.wikipedia.org/wiki/Bodorka","bodorka.jpg");
halak ["deverkeszeg"] = new hal("Dévérkeszeg", "Abramis brama", null, "https://hu.wikipedia.org/wiki/Dévérkeszeg","deverkeszeg.jpg");
halak ["karikakeszeg"] = new hal("Karikakeszeg","Blicca bjoerkna", null, "https://hu.wikipedia.org/wiki/Karikakeszeg","karikakeszeg.jpg");
halak ["ponty"] = new hal("Ponty","Cyprinus carpio","aranyhasú, babajkó, dunaponty, feketeponty, karcsúponty, nádiponty, nyurgaponty, pathal, potyka (= „pontyka”), nyurgaponty, pozsár, sodrófaponty","https://hu.wikipedia.org/wiki/Ponty","ponty.jpg");
halak ["fogassullo"] = new hal("Fogassüllő","Sander lucioperca","másfél kilósnál nagyobb példányok népies neve fogas, az ennél kisebbeké süllő","https://hu.wikipedia.org/wiki/Fogassüllő","fogassullo.jpg");
halak ["csuka"] = new hal("Csuka","Esox lucius","csukesz, közcsuka, mátyáscsuka (a Mátyás napján fogott példány), bicska, bugylicsuka","https://hu.wikipedia.org/wiki/Csuka","csuka.jpg");
halak ["compo"] = new hal("Compó","Tinca tinca","doktorhal, cigányhal","https://hu.wikipedia.org/wiki/Compó","compo.jpg");
halak ["fejes"] = new hal("Fejes domolykó","Squalius cephalus",null,"https://hu.wikipedia.org/wiki/Fejes_domolykó","fejes.jpg");
halak ["garda"] = new hal("Garda","Pelecus cultratus"," sugár kardos (némely forrásokban egybeírva), balatoni hering, kardkeszeg, karda, szabóhal, vezérgarda","https://hu.wikipedia.org/wiki/Garda_(halfaj)","garda.jpg");
halak ["harcsa"] = new hal("Európai harcsa","Silurus glanis", "harcsa, leső harcsa, pozsárharcsa, pumaharcsa, sárgaharcsa, tőkésharcsa, köves harcsa, sebes harcsa, szürke harcsa, szőke harcsa, parasztfaló, kupri, kupak, kuppancs","https://hu.wikipedia.org/wiki/Európai_harcsa","harcsa.jpg")

console.log(halak.harcsa.url)

function halinfo(hal) {
    document.getElementById("sugo").style.display="none";
    document.getElementById("halKep").src="halak/"+halak[hal].kep;
    document.getElementById("halNevek").innerHTML="<b>"+halak[hal].magyar +"</b>, <i>"+halak[hal].latin+"</i>";
    if (halak[hal].egyeb!=null) {
        document.getElementById("halNevek").innerHTML+=halak[hal].egyeb ;
    }
    document.getElementById("halURL").title=halak[hal].magyar+" wiki: "+halak[hal].url;
}