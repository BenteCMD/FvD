# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>Ik ben Bente, woon in Amsterdam en ben 22 jaar oud. Ik houd van muziek luisteren, longboarden en vrienden zien.
  Het eerste jaar CMD vond ik erg leuk, met name de vormgevingsvakken. Internetstandaarden vond ik ook leuk, CSS/HTML ging mij redelijk goed af. Het vak inleiding programmeren was uitdagend voor mij, maar wel leuk. Uitdagend omdat ik het nog lastig vind overzicht te creëeren in mijn code, maar wel leuk als het uiteindelijk lukte om het gewenste resultaat te krijgen. </summary>

  ### Auteur:
 Bente van der Zeijden

  #### Je startniveau:
  Rood

  #### Je focus:
  Surface Plane
 
</details>





## Je website

<details open>
  <summary>Ik ga de website van Dopper namaken. Dopper is een Nederlands bedrijf dat het gebruik van plastic wegwerpflesjes tegengaat door plastic hervulbare waterflessen te verkopen.</summary>

  ### Je opdracht:
  https://dopper.com/nl
  
  #### Screenshot(s) van de eerste pagina (small screen): 
  Landing page (mobile)
  
  <img src="readme-images/landingpage_dopper_mobile1.jpeg" width="156px" height="321px" alt="landingpage-mobile">
  <img src="readme-images/landingpage_dopper_mobile2.jpeg" width="156px" height="321px" alt="landingpage-mobile">
  <img src="readme-images/landingpage_dopper_mobile3.jpeg" width="156px" height="321px" alt="landingpage-mobile">
  <img src="readme-images/landingpage_dopper_mobile4.jpeg" width="156px" height="321px" alt="landingpage-mobile">

  Landing page (laptop)
  
  <img src="readme-images/landingpage_dopper1.png" width="375px" alt="landingpage">
  <img src="readme-images/landingpage_dopper2.png" width="375px" alt="landingpage">
  <img src="readme-images/landingpage_dopper3.png" width="375px" alt="landingpage">
  

  #### Screenshot(s) van de tweede pagina (small screen):
    Shop page (mobile)
  
  <img src="readme-images/shop_dopper_mobile1.jpeg" width="156px" height="321px" alt="shoppage-mobile">
  
  Shop page (laptop)
  
  <img src="readme-images/shop_dopper1.png" width="375px" alt="shoppage">
  
  Footer
  
  <img src="readme-images/footer_dopper_mobile.jpeg" width="156px" height="321px" alt="footer">
  <img src="readme-images/footer_dopper.png" width="375px" alt="footer">
  
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details open>
  <summary>uitwerken na test in 1e werkgroep</summary>
  In de les heb ik de toegankelijkheid van de Dopper site getest door mij in te leven in verschillende beperkingen.
  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:

  #### Screenreader
 Het was een vrij frustrerende ervaring om de screenreader te gebruiken. Een robotstem bleef maar alle inhoud op het scherm voorlezen, zonder dat ik er controle over had. Bij de Dopper site viel mij het volgende op:
 - Je moest eerst door alle navigatie tabben, voordat je bij de inhoud van de pagina terecht kwam. Er waren geen shortcut links, waardoor het lang duurde om de eerste pagina te lezen.
 - Tijdens het voorlezen van het submenu, hoorde ik alleen maar "koplink, koplink, koplink". De titel van de link werd niet genoemd.
 - Sommige tekst wordt dubbel voorgelezen. 
 - Hij leest de html voor afbeeldingen voor ipv. een alternatieve tekst


  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)
- shortcut links toevoegen ("ga door naar inhoud")
- kopjes goed coderen, altijd een duidelijke titel
- images een alt geven

  #### Muis en Toetsenbord 
  Hier korte omschrijving (met indien nodig afbeeldingen)
  Ik heb geprobeerd door de site te navigeren zonder mijn muis te gebruiken. 
  - Erdoorheen tabben duurde lang; geen shortcuts, eerst door alle navigatielinks heen
  - Niet duidelijk aangegeven welk element je op gefocust bent
  - Wanneer je door het menu navigeert, blijft het submenu onzichtbaar

  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)
- shortcut link
- duidelijke focus states
- submenu in beeld brengen met focus ipv alleen hover

  #### Motoriek (shocks, elastiekjes)
  Hier korte omschrijving (met indien nodig afbeeldingen)
  Ik had een shockapparaatje op mijn onderarm geplakt waardoor mijn arm ongecontroleerde bewegingen maakte.
  - moeilijk om te typen
  - moeilijk op de gewenste knop te drukken
  

  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)
- knoppen groter, groter klikbaar veld
- content ietsje dichterbij elkaar zodat je niet ver met je muis hoeft te reizen
- makkelijker maken voor 1 hand bediening

  #### Visueel (brillen, contrast, kleurenblind, dark/light). 
  Hier korte omschrijving (met indien nodig afbeeldingen)
  Ik heb een bril opgedaan waardoor mijn zichtveld beperkt was tot slechts een klein gaatje (peripheral field loss).
  - kan mijn eigen cursor niet meer zien
  - tekst lezen is moeilijk, smalle stukken tekst is wat beter te doen
  
Vervolgens heb ik een bril opgedaan met vlekken in mijn zichtveld (diabetis) 
- kleine letters moeilijk te lezen
- kleurcontrast vermindert. Witte tekst op lichtblauwe vlakken moeilijk te lezen.

  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)
- kleurcontrast omhoog
- groot lettertype
</details>



## Breakdownschets (week 1)

<details open>
  <summary>Mijn breakdownschets.</summary>

  ### de hele eerste pagina: 
  <img src="readme-images/breakdown_homebreakdownschets.jpg" width="375px" alt="breakdown van de hele pagina">
  
   ### de hele tweede pagina: 
   <img src="readme-images/breakdown_shopbreakdownschets.jpg" width="375px" alt="breakdown van de hele pagina">
</details>





## Voortgang 1 (week 2)

<details open>
  <summary>Week 1 en 2 gingen goed. De eerste pagina (van de mobiele verise) is bijna af. </summary>

  ### Stand van zaken
  Het stylen van de elementen met CSS ging vrij goed. Het positioneren vond ik wel wat lastiger, ik neig vaak margins 
  te gebruiken terwijl er betere oplossingen zijn.
  
  Daarnaast vond ik het af en toe lastig de juiste semantiek van de HTML te gebruiken. Inmiddels weet ik nu wel het verschil
  tussen sections en articles. Ook realiseer ik nu beter dat het van belang is om je HTML eerst goed op orde te hebben voordat
  je aan de CSS styling begint, scheelt heel wat tijd..
  
  Daarnaast heb ik geprobeerd mijn HTML toegankelijk te maken voor screen-readers. Dit gaf wel een uitdaging: ik wilde een hele article
  klikbaar maken, zonder dat de screen-reader de hele <a> inhoud voor zou lezen. Inmiddels weet ik dat ik daar ::before en position absolute voor kan gebruiken.

  <img src="readme-images/site-totnutoe.png" width="75px" alt="website tot nu toe">

  ### Verslag van meeting

  - geen <.hr> gebruiken waar het niet hoort
  - ::before en position absolute gebruiken voor klikbaar veld 
  - <a> in <h3> ipv. andersom, want <a> is inline
  - section heeft altijd een kopje

</details>





## Voortgang 2 (week 3)

<details open>
  <summary>In week 2 heb ik mij vooral bezig gehouden met het responsive maken van mijn website. Voor klein schermformaat heb ik een hamburgermenu toegvoegd en verder heb ik gewerkt met grid om elementen in de secties goed te positioneren. Dit weekend wil ik meer animaties aan mijn website toevoegen.</summary>

  ### Stand van zaken
  Mijn CSS bestaat nu uit vrij veel regels. Ik vond het daardoor wel lastig het overzicht te bewaren. Vandaag ging bijv. mijn site "stuk", doordat ik iets op de verkeerde plek had gezet, maar niet meer wist waar. Inmiddels heb ik het opgelost. Ik ben nu bezig mijn CSS overzichtelijker te maken door o.a. comments toe te voegen.

  ### Verslag van meeting

  - CSS overzichtelijker maken door o.a. comments toe te voegen
  - Bij het responsive maken goed letten op alle breakpoints

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details open>
  <summary>Deze werkgroep hebben we de toegankelijkheid van onze eigen websites getest.</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

  #### Screenreader
  Bij de Dopper site viel mij het volgende op:
 - Je moest eerst door alle navigatie tabben, voordat je bij de inhoud van de pagina terecht kwam. Er waren geen shortcut links, waardoor het lang duurde om de eerste pagina te lezen.
 - Tijdens het voorlezen van het submenu, hoorde ik alleen maar "koplink, koplink, koplink". De titel van de link werd niet genoemd.
 - Sommige tekst wordt dubbel voorgelezen. 
 - Hij leest de html voor afbeeldingen voor ipv. een alternatieve tekst
  
  In mijn site heb ik het volgende verbeterd:
  - Ik heb de juiste semantiek toegpast voor de headings en linkjes, zodat die op logische volgorde worden voorgelezen.
  - Afbeeldingen hebben een duidelijke alt en afbeeldingen die niet essentieel zijn hebben een aria-hidden="true"
  - Tekst wordt niet dubbel voorgelezen

  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)


  #### Muis en Toetsenbord 
 Bij de Dopper site viel mij het volgende op:
  - Erdoorheen tabben duurde lang; geen shortcuts, eerst door alle navigatielinks heen
  - Niet duidelijk aangegeven welk element je op gefocust bent
  - Wanneer je door het menu navigeert, blijft het submenu onzichtbaar
  
  In mijn site heb ik verbeterd:
  - Ik heb de focus state een duidelijke dikke felle gele border gegeven
  - Ik heb shortcuts toegevoegd, die je secties laat skippen.


  #### Motoriek (shocks, elastiekjes)
   Bij de Dopper site viel mij het volgende op:
  - Moeilijk om op gewenste knop te drukken, knoppen zijn vrij klein.
  
  In mijn site heb ik verbeterd:
  - In mijn site heb ik de klikvelden groot gemaakt, maar wel genoeg ruimte tussen de knoppen gehouden.


  #### Visueel (brillen, contrast, kleurenblind, dark/light). 
  
  <img src="readme-images/contrastbril.jpeg" width="375px" alt="contrastbrilletje">
  
  Bij de Dopper site viel mij het volgende op:
  - Kleurcontrast was af en toe te laag. Vb: witte tekst op lichtblauwe vlakken.
  - Bij een groot schermgrootte, wordt de tekst nogal klein.
  
   In mijn site heb ik verbeterd:
  - Kleurcontrast altijd hoog op alle onderdelen.
  - Lekker grote tekst. Font-size niet kleiner dan 1em.

</details>





## Voortgang 3 (week 4)

<details open>

  ### Stand van zaken
  Het gaat vrij goed, mijn site is bijna af. Afgelopen week heb ik mijn site beter responsive gemaakt en alle states vormgegeven.
  Ik ben van plan om nog wat meer animaties toe te voegen en verder de puntjes op de i te zetten.

  ### Verslag van meeting
  - Geen <br> gebruiken
  - :focus-within kan je op hamburger menu toepassen

</details>





## Eindgesprek (week 5)

<details open>
  <summary>Ik heb de afgelopen weken veel geleerd en ben vrij enthousiast geworden over front-end. CSS is nu wat tastbaarder voor mij geworden.</summary>

  ### Je uitkomst - karakteristiek screenshots:
  
  Eerste pagina:
  
  <img src="readme-images/site_mobiel.png" width="156px"  alt="uitomst opdracht 1">
  <img src="readme-images/site-middel.png" width="375px" alt="uitomst opdracht 1">
  <img src="readme-images/site_desktop.png" width="375px" alt="uitomst opdracht 1">

  Tweede pagina:
  
  <img src="readme-images/site_shop_mobiel.png" width="156px" alt="uitomst opdracht 1">
  <img src="readme-images/site_shop_groot.png" width="375px" alt="uitomst opdracht 1">

  ### Dit ging goed/Heb ik geleerd: 
  Ik heb veel geleerd deze weken. Wat ik vooral mee neem is de kennis om een website toegankelijk te maken d.m.v. semantsiche html te gebruiken en aria-labels en skiplinks toe te voegen.
  Ook weet ik nu ook een beetje hoe grid werkt en hoe je daar een website responsive mee kan maken, zonder al te veel media queries te hoeven gebruiken.
  Daarnaast begrijp ik nu beter hoe je animaties levendiger kan maken, door met de curve en timing van een animatie te spelen.


  ### Dit was lastig/Is niet gelukt:
  Ik vind het nog wel moeilijk om het mooi responsive te maken, zodat het op elke schermgrootte mooi blijft. Het is wel aardig gelukt om
  dit te doen, maar ik denk dat mijn manier misschien een beetje te omslachtig is, omdat ik ook veel met margins zit te schuiven.
  Ik wil nog groeien in het bondiger maken van mijn code.

</details>





## Bronnenlijst

<details open>
  
  - Alle afbeeldingen en tekst zijn van www.dopper.nl,
  behalve: foto plastic flesje: https://nl.pinterest.com/pin/597501075537331108/
  
  - Alle iconen heb ik zelf met Adobe illustrator gemaakt

 
</details>
