Solaris Space Center
Beskrivning
Solaris Space Center är en interaktiv webbapplikation som ger användare möjlighet att utforska olika planeter i vårt solsystem. Användare kan se detaljerad information om varje planet och lägga till sina favoritplaneter i en personlig favoritlista. Projektet använder React för att bygga användargränssnittet och Axios för att hämta data från en extern API.

Funktioner
Hem: En översikt över alla planeter med möjlighet att navigera till detaljerad information för varje planet.
Planetdetaljer: En sida som visar detaljerad information om en specifik planet inklusive dess namn, latinska namn, beskrivning, avstånd från solen, omkrets, rotationstid, omloppstid, temperatur och månar.
Favoritplaneter: En sida som listar användarens favoritplaneter med möjlighet att ta bort dem från listan.
Hemknapp: En hemknapp placerad i det övre högra hörnet på favoritsidan för enkel navigering tillbaka till hemsidan.
Användning
Hem: Starta applikationen och se en lista över alla planeter.
Utforska: Klicka på en planet för att se detaljerad information.
Favoriter: Lägg till planeter i din favoritlista genom att klicka på en knapp på planets detaljsida.
Navigering: Använd hemknappen på favoritsidan för att enkelt navigera tillbaka till hemsidan.
Teknisk Information
React: Används för att bygga komponentbaserade användargränssnitt.
React Router: Används för att hantera navigeringen mellan olika sidor i applikationen.
Axios: Används för att göra API-anrop och hämta planetdata.
TypeScript: Används för typkontroll och bättre utvecklarupplevelse.
CSS: Anpassad CSS för att styla komponenterna.
Komponenter
App: Huvudkomponenten som innehåller routing-logiken och hanterar tillståndet för planeter och favoriter.
HomePage: Visar en lista över alla planeter och innehåller en länk till favoritsidan.
PlanetPage: Visar detaljerad information om en specifik planet och innehåller en knapp för att lägga till planeten i favoriter.
FavoritePlanets: Visar en lista över användarens favoritplaneter med deras namn.
PlanetList: En komponent som listar alla planeter.
Planet: En komponent som visar en planet med dess färg och storlek baserat på dess typ.
Installation och körning
Klona repositoriet: git clone <repository-url>
Navigera till projektmappen: cd solaris-space-center
Installera beroenden: npm install
Starta utvecklingsservern: npm start
API
Projektet använder en extern API för att hämta information om planeter. För att få tillgång till API:et, använd följande steg:

Gör en POST-förfrågan för att hämta en API-nyckel.
Använd API-nyckeln för att göra GET-förfrågningar för att hämta planetdata.
