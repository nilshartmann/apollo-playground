// https://jaspervdj.be/lorem-markdownum/
const lorems = [
	`
Lorem markdownum faciemque dum adsimilare vultus cupies,
[patresque](http://www.undis-minorque.org/saxo.php), Lycaona. Erat **pariter**
dare similem, dictis sunt; ille patebat quicquam amorem, et. Soror pro hos
tendentem feremur saevum lacrimaeque annos nascentia cum quoque pectore. Lingua
de letum erat quae loquor et rescindere *altis*, scelus
[vitta](http://capitiinnocuos.org/qualia-nec): circumspicit simul formosior
dixit latent Hylaeusque.

1. Ales Arethusa pectora quos roboris
2. Labor illo annis potuit vota murmur
3. Alto sed
4. Est herba suo dea aquis quo astu
5. Te trabes fruitur
6. Et erat
`,
	`
Petisses aequor longum hunc in ventis perque traxit Minoa precantia mala
interdumque *Scythiam* huc, est sit. Ait racemis ante. Dixit illis quid hic
auctor pharetra: fecisse abstulerat Cephalus errant Saturno. Meae nefas; abundet
nostrasque barbara, natantibus tamen ceratis, hunc vallis agrestes si erat
udaeque.

- Sororum et ulla corpora subsedit lavere inani
- Atque iuratus
- Subiectis paternum me acutae matertera solus deus

`,
	`
Stygia cadunt compressit rubuerunt *miseroque*, luce numen, est potentem, sua
inferiusque minor: **missus**. Coniunx iactor. Hic viriles pavet mihi est
manuque ambrosia: tua ibi nisi. Inarimen **levibus alterius**!

- Reclusit in levi aequore nam videret publica
- Inopi aditumque bis habebat ergo patietur perdere
- Mora ulnis creatis venientis
- Dirusque diramque in hoc nempe poplite Sardibus
- Fuit sed Lotis parvae verborum
- Heros ubi

Spatium mors quoque sibi colebat idque. Non imae etiamnum *adversum inportuna
et* sinunt ad habuit, in fortuna illa nec faventum inpune at **anguis**.
**Pluvialibus vestri**, adsonat paenitet nam pectebant; puppe diu, [opus et
quamvis](http://mihi.net/suco.html). Litore classi ceperat; alterius una
olorinis, mei sermone nervi quaerant mater comites, moras, iuga aere! Sciat
humana supplice in adfectas inter parientibus validi; litora.
`,
	`
Confessam fabrilis opemque, adversum. Et si occupat laborum silentibus voce
quaerebatque Amor tactu, [propositumque ille](http://iolequi.org/crimine): hoc
haec, est iunctisque sanguine, saepe. Toto sperantemque vices dinumerat erat
grave at ulciscitur semper, eandem otia?

Mater flammas huius profecisse nulla Picus furor sine amictae; illo cum illic
[gelidas](http://est-nec.net/suum-cura.html). Taurum matris!

- Pectora petit Aethon habent tenebrosa et postera
- Crinibus rapit intellecta Cyllenius soporem rabiem gemitus
- Armiger innixus sternuntur utroque sicut

`,
	`
Sub male sumpserat quoque mille crines, foret perfundere ripae? Creamur hic
manus cui liberat. Tempore liberiore equi plumis vivusque quoque silvae.
`,
	`
Est aquis rex! Quo [fecerat campum](http://www.orastam.com/) cras micant
speciosaque certa harenam magno. Opus qui cibis excutis iuvencam iactura
fumantia; fama quae; quo ineo frutices manat, reliquit. Frons exiguus montes.
Mihi nuper, aut verbis ferrum, per viscera audita, vacuas, expositum frequentat
solvi una diverso lignum.
`,
	`
Praesignis verbis iura defenderet summaque, uda satis ursa et pallidaque genus
custodia lacusque; in. Quem hoc sitim placerent tamen gerit genitor, ut et
despectare. Accedere altismunera custos capit ametur. Mole in genuisse iamque
finem quod, erat ausus Satyri [acrior](http://in.io/). Fugam tibi, manu est aqua
armis in carent *fides*, aut quam visceraque, nulla.
`,
	`
Coniugis fratri Cecropidis veluti, quae Tyrium, cum arma excipit! In illi
precatus in erat miserere postquam cultores forma si qualis, *nec*.

Lacertis subederat et quantum illud mugitus ni
----------------------------------------------

Est et ipsosque sacra Lyncides Atlantiades dissipat adnuit: exiguo Aeolia
laniaverat laevo genitas flebat presserat spectata. Est similis fulget
inmurmurat libet, nec, et retexi *posce hunc* signa, ieiunia diversorum
quoscumque tamen placido. Viaeque absumitur loqui, illa eque Aeolon clamor.

*Modo cerae* vidit populari laudant nomenque invenies gemit instruit solque, et.
Iubent et femineis summos, quem, Aeolon trunca, bracchia Mater fessa formae
mecumque.
`,
	`
Lorem markdownum incompta, vos iacit palpitat isset! Revexit huic caudaque, sed
fugit ignarus, sacrilega ille [ego](http://www.adspicit.net/), nec! Perspicuus
consultaque, ignoto cum fetibus Autolycus, volucrem do luctus funduntque,
inritamen vivunt desiluit vada! Casuque indignanda umeri toris vestra, ipsa mihi
flammas quoque; fessa. Iram rigorem, verba, magis servavique Ericthonium
spectansque insequitur.

- Gerens peti unda
- In nec
- Sumus fuit
- Passura ruere admonita aures et dum moratus
- Ille deducitur adspirate annis

`,
`
Sibique nunc iacet vidisse
--------------------------

Coniugis fratri Cecropidis veluti, quae Tyrium, cum arma excipit! In illi
precatus in erat miserere postquam cultores forma si qualis, *nec*.

Lacertis subederat et quantum illud mugitus ni
----------------------------------------------

Est et ipsosque sacra Lyncides Atlantiades dissipat adnuit: exiguo Aeolia
laniaverat laevo genitas flebat presserat spectata. Est similis fulget
inmurmurat libet, nec, et retexi *posce hunc* signa, ieiunia diversorum
quoscumque tamen placido. Viaeque absumitur loqui, illa eque Aeolon clamor.

*Modo cerae* vidit populari laudant nomenque invenies gemit instruit solque, et.
Iubent et femineis summos, quem, Aeolon trunca, bracchia Mater fessa formae
mecumque.
`,
`
Lorem markdownum medicamine sociis portantes volucris deorum. Petraeum cinctam:
mille sensit mala omen decent Horamque.

1. Oscula cruentatus mea
2. Silva qui haec illuc esse lacrimas
3. Mane alumno veste alto percutit

`,
`
Se si dies ore haud quam ubi Diomede **fundunt decurrere squalere** obscura.
Italiae infusa, nec sumit [corpora](http://te-comae.org/sinistra-in) Stheneleia
fecere volucresque numeros cedunt, Cumaea **dixit**. Inde magos de ausorum
ponto, et est arctos venatu?

- Viribus minorque natam fugamque nomina et quodque
- Argolicae sine matutinaeque Theron
- Positisque laeta praerupta senserat potuit mei navalibus
- Ferit fortes
- Astu est imperat caelo
- Rosarum me inmania
`,
`
Effervescere opto, vellera, ut metuam celer, omnia. Populique patens huius
tetigere et pavetque zephyris, nisi potius reges causa, cur vultus inmanis,
[est](http://virtus.org/). **Mihi cum** super cuius in viget resolvent pulvere
quod cunctos innumeris.

Quae licet, quos qui silva! Experiensque illa revellit defensore tanti, *humano
abit*.
`,

];

export const lorem = (ix: number) => {
	if (ix < lorems.length) {
		return lorems[ix];
	}

	throw new Error(`Only ${lorems.length} lorems available`);
}
