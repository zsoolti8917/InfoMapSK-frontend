import React from 'react'
import bgGraph1 from '../../../assets/bg-pattern-about-2-contact-1.svg'
import bgGraph2 from '../../../assets/bg-pattern-home-4-about-3.svg'
const Content = () => {
  return (
    <section className='bg-secondary-700 font-livvic text-primary-100 relative overflow-hidden'>
        <div className='md:max-w-[500px] lg:max-w-[800px] desktop:max-w-container mx-auto pt-20 pb-28 px-6 text-center md:pt-12 md:pb-12 lg:text-left lg:pb-20 flex flex-col gap-8 md:px-0'>
            <div>
                <h3 className='text-xl text-primary-300'>
                O InfoMapSK
                </h3>
                <p className='pt-4'>
                V InfoMapSK je našou misiou priblížiť silu vizualizácie dát každému, kto sa zaujíma o bohatú škálu otvorených dát Slovenska. V dobe, kedy sú dáta hojné, ale často nedostatočne využívané, naša platforma stojí ako most medzi surovými dátami a akčnými podnetmi, posilňujúc jednotlivcov, výskumníkov a rozhodovatele nástrojmi, ktoré potrebujú na pochopenie a využitie informácií ako nikdy predtým.
                </p>
            </div>

            <div>
                <h3 className='text-xl text-primary-300'>
                Naša vízia                </h3>
                <p className='pt-4'>
                Predstavujeme si svet, kde dáta nie sú len čísla a štatistiky, ale príbeh, ktorý čaká na rozprávanie. InfoMapSK využíva špičkové techniky vizualizácie na rozprávanie týchto príbehov, čím robí komplexné dátové sady zrozumiteľnými a zaujímavými pre všetkých. Naša platforma je viac než len nástroj; je katalyzátorom zmeny, ktorý poháňa inovácie a informované rozhodovanie naprieč rôznymi sektormi na Slovensku a ďalej.                </p>
            </div>

            <div>
                <h3 className='text-xl text-primary-300'>
                Náš prístup                </h3>
                <p className='pt-4'>
                Náš prístup je zakorenený v jednoduchosti a zrozumiteľnosti. Vytváraním intuitívnych a interaktívnych vizualizácií si kladieme za cieľ, aby bol prieskum dát osvietenským zážitkom. Či už ide o odhalenie demografických zmien, ekonomických trendov alebo spoločenských zmien, InfoMapSK poskytuje užívateľsky prívetivé rozhranie, ktoré prekladá kvantitatívne informácie do kvalitatívneho porozumenia.                </p>
            </div>

            <div>
                <h3 className='text-xl text-primary-300'>
                Technológia a inovácia                </h3>
                <p className='pt-4'>
                InfoMapSK využíva najnovšie technológie vo webovom vývoji a dátovej vede. Náš frontend je postavený na robustnom frameworku React.js, ktorý je známy svojou agilnosťou a výkonom. Táto voľba odráža naše odhodlanie poskytovať plynulý a responzívny užívateľský zážitok. TailwindCSS nám dáva flexibilitu vytvoriť jedinečnú estetiku, ktorá je krásna a funkčná súčasne, v súlade s našou základnou hodnotou robienia dátových vizualizácií nielen informatívnych, ale aj vizuálne príťažlivých.

Na backende Node.js poskytuje škálovateľné a efektívne serverové prostredie, ktoré nám umožňuje ľahko zvládať veľké dátové súbory. Používame MongoDB pre jeho nereľačnú štruktúru, ktorá je ideálna pre dáta vo formáte JSON-stat, s ktorými pracujeme. Táto voľba databázy súvisí s naším cieľom uľahčiť dynamické interakcie s dátami a rýchle doručovanie obsahu.

Analýzu a čistenie dát vykonávame v Jupyter Notebookoch – rozhodnutie, ktoré odráža naše odhodlanie k transparentnosti a reprodukovateľnosti vo vede o dátach. Toto prostredie tiež podporuje náš iteratívny vývojový proces, čo nám umožňuje zdokonaľovať naše vizualizácie na základe spätnej väzby od používateľov a vyvíjajúcej sa krajiny dát.                </p>
            </div>

            <div>
                <h3 className='text-xl text-primary-300'>
                Užívateľsky zameraný dizajn                </h3>
                <p className='pt-4'>
                Každý aspekt InfoMapSK bol vytvorený s používateľom na mysli. Od interaktívnej mapy Slovenska, ktorá je kľúčovým prvkom našej úvodnej stránky, po podrobné regionálne vizualizácie, každé kliknutie odhaľuje vrstvy starostlivo kurátovaných informácií. Integrujeme D3.js pre dátami riadené transformácie, ktoré oživujú vzory skryté v číslach.                </p>
            </div>

            <div>
                <h3 className='text-xl text-primary-300'>
                Záväzok k vzdelávaniu a posilneniu                </h3>
                <p className='pt-4'>
                InfoMapSK nie je len pasívnou platformou; je to vzdelávací nástroj. Naším cieľom je zvýšiť verejné porozumenie a gramotnosť v oblasti dát tým, že ponúkneme pohľady na to, ako dáta formujú náš svet. Naša platforma je svedectvom presvedčenia, že informovaní občania sú základom progresívnej spoločnosti.                </p>
            </div>

            <div>
                <h3 className='text-xl text-primary-300'>
                Pohľad do budúcnosti                </h3>
                <p className='pt-4'>
                Ako budeme rásť, naším cieľom je rozšíriť rozsah InfoMapSK, integrovať viac dátových súborov, zlepšovať naše vizualizácie a neustále zlepšovať naše užívateľské rozhranie. Sme odhodlaní zostať v popredí hnutia otvorených dát, neustále hľadať nové spôsoby, ako oživiť príbehy za dátami.

InfoMapSK je viac než len názov – je to sľub doručenia neporovnateľného vhľadu do otvorených dát Slovenska. Je to cesta, na ktorú sme poctení vyraziť spolu s našimi používateľmi, a pozývame vás, aby ste sa k nám pripojili na tejto neustálej ceste objavovania.
                </p>
            </div>
        </div>

        <img src={bgGraph1} alt="" className='absolute top-[-100px] left-[-100px]'/>
        <img src={bgGraph2} alt="" className='absolute bottom-0 right-0'/>
    </section>
  )
}

export default Content