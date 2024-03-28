# library-api
Library Loan System
0. Summary
This software application offers a comprehensive solution for libraries to simplify the process of borrowing books. The RESTful architecture, the principles of clean code, and well-documented source code ensure the efficiency, maintainability, and ease of use of the system.

1. Introduction
This documentation outlines the purpose, technical description, technical prerequisites, and a brief overview of the use of the Library Loan System. The system enables libraries to manage book loans, user data, and track the availability of books.

2. Technical Description
2.1 Server-side Component
The server-side component provides a RESTful API that allows client-side applications to manage book, user, and loan data. The server uses Node.js and Express.js frameworks, with MariaDB as the database.

The use of MariaDB allows the utilization of relational database advantages, such as complex queries, transactions, and comprehensive data integrity management. This choice is well-suited for libraries to manage book, user, and loan data.

2.2 Client-side Components
Web Client: A React.js application that allows users and administrators to manage books, users, and loans.
Mobile Client: A React Native application that enables users to borrow and return books on mobile devices.
Desktop Client: An Electron.js application that allows administrators to manage library data in a desktop application format.
3. Technical Prerequisites
Server: Node.js 14.x or newer, Express.js 4.x or newer, MariaDB 10.x or newer.
Client-side Applications: Modern web browser (Chrome, Firefox, Safari), Node.js 14.x or newer for React.js and React Native development, Android Studio and Android SDK for React Native development, and Electron.js 13.x or newer for Electron.js development.
4. Usage
4.1 RESTful API
The RESTful API endpoints are used as follows:

Books:
GET /api/books: List all books.
POST /api/books: Add a new book.
PUT /api/books/:id: Modify book data.
DELETE /api/books/:id: Delete a book.
Users:
GET /api/users: List all users.
POST /api/users: Add a new user.
PUT /api/users/:id: Modify user data.
DELETE /api/users/:id: Delete a user.
Loans:
GET /api/loans: List all loans.
POST /api/loans: Add a new loan.
PUT /api/loans/:id: Modify loan data.
DELETE /api/loans/:id: Delete a loan.
4.2 Client-side Applications
Web Client: Open http://localhost:3000 in your web browser to use the web client.
Mobile Client: Install the application on your Android device or run it on an iOS device using the React Native CLI.
Desktop Client: Install and run the Electron.js application from the source code or the downloaded package.
4.3 Administration Interface
The administration interface allows managing books, users, and loans in a desktop application format.

5. Development and Testing
During development and testing, it's important that the code is clean, modular, and that tests cover all functionalities of the application. Tests can be run using the npm test command.


Könyvtárak Könyvkölcsönzési Rendszere
0. Összefoglalás
Ez a szoftveralkalmazás egy teljes körű megoldást kínál a könyvtárak számára a könyvek kölcsönzésének egyszerűsítésére. A RESTful architektúra, a tiszta kód elvei és a jól dokumentált forráskód biztosítják a rendszer hatékonyságát, karbantarthatóságát és könnyű használatát.

1. Bevezetés
Ez a dokumentáció a Könyvtárak Könyvkölcsönzési Rendszerének (Library Loan System) célját, technikai leírását, működésének műszaki feltételeit, és használatának rövid bemutatását tartalmazza. A rendszer lehetővé teszi a könyvtárak számára a könyvek kölcsönzésének, a felhasználói adatok kezelésének, és a könyvek elérhetőségének nyomon követését.

2. Technikai Leírás
2.1 Szerveroldali Komponens
A szerveroldali komponens egy RESTful API-t biztosít, amely lehetővé teszi a kliensoldali alkalmazások számára a könyvek, felhasználók és kölcsönzések adatainak kezelését. A szerver Node.js és Express.js keretrendszereket használja, adatbázisul pedig MariaDB-t.
A MariaDB használata lehetővé teszi a relációs adatbázis előnyeinek kihasználását, mint például a komplex lekérdezések, a tranzakciók, és a sokoldalú adatintegritás-kezelés. Ez a választás jól illik a könyvtárak számára a könyvek, felhasználók, és kölcsönzések adatainak kezelésére.

2.2 Kliensoldali Komponens
Webes Kliens: A webes kliens egy React.js alkalmazás, amely lehetővé teszi a felhasználóknak és az adminisztrátoroknak a könyvek, felhasználók és kölcsönzések kezelését.
Mobil Kliens: A mobil kliens egy React Native alkalmazás, amely lehetővé teszi a felhasználóknak a könyvek kölcsönzését és visszavételét mobil eszközökön.
Asztali Kliens: Az asztali kliens egy Electron.js alkalmazás, amely lehetővé teszi az adminisztrátoroknak a könyvtár adatainak kezelését asztali alkalmazás formájában.

3. Műszaki Feltételek
Szerver: Node.js 14.x vagy újabb, Express.js 4.x vagy újabb, MariaDB 10.x vagy újabb.
Kliensoldali Alkalmazások: Modern webböngésző (Chrome, Firefox, Safari), Node.js 14.x vagy újabb a React.js és React Native fejlesztéséhez, Android Studio és Android SDK a React Native fejlesztéséhez, valamint Electron.js 13.x vagy újabb az Electron.js fejlesztéséhez.

4. Használat
4.1 RESTful API
A RESTful API végpontokat a következők szerint használhatjuk:
Könyvek:
GET /api/books: Összes könyv listázása.
POST /api/books: Új könyv hozzáadása.
PUT /api/books/:id: Könyv adatainak módosítása.
DELETE /api/books/:id: Könyv törlése.
Felhasználók:
GET /api/users: Összes felhasználó listázása.
POST /api/users: Új felhasználó hozzáadása.
PUT /api/users/:id: Felhasználó adatainak módosítása.
DELETE /api/users/:id: Felhasználó törlése.
Kölcsönzések:
GET /api/loans: Összes kölcsönzés listázása.
POST /api/loans: Új kölcsönzés hozzáadása.
PUT /api/loans/:id: Kölcsönzés adatainak módosítása.
DELETE /api/loans/:id: Kölcsönzés törlése.

4.2 Kliensoldali Alkalmazások
Webes Kliens: A webes kliens használatához nyisd meg a böngésződben a http://localhost:3000 címet.
Mobil Kliens: Telepítsd az alkalmazást az Android eszközödre vagy futtasd egy iOS eszközön a React Native CLI segítségével.
Asztali Kliens: Telepítsd és futtasd az Electron.js alkalmazást a forráskódból vagy a letöltött csomagból.

4.3 Adminisztrációs Felület
Az adminisztrációs felület használatához nyisd meg az Electron.js alkalmazást, amely lehetővé teszi a könyvek, felhasználók és kölcsönzések kezelését asztali alkalmazás formájában.

5. Fejlesztés és Tesztelés
A fejlesztés és tesztelés során fontos, hogy a kód tiszta, moduláris legyen, és hogy a tesztek lefedjék az alkalmazás összes funkcióját. A npm test parancs segítségével futtathatók a tesztek.