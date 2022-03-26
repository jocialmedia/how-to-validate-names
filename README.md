# How to validate names

  - [1. About](#1-about)
  - [2. Potential challenges for validation](#2-potential-reasons-for-failing-validation)
    - [2.1. Length of elements](#21-length-of-elements)
    - [2.2. Number of elements](#22-number-of-elements)
    - [2.3. Order of elements](#23-order-of-elements)
    - [2.4. Characters](#24-characters)
    - [2.5. Similarity to reserved words](#25-similarity-to-reserved-words)
    - [2.6. Similarity to profanity words](#26-similarity-to-profanity-words)
    - [2.7. Symbols or unusual terms as names](#27-symbols-or-unusual-terms-as-names)
    - [2.8. Spare whitespace at beginning or end](#28-spare-whitespace-at-beginning-or-end)
  - [3. Languages](#3-languages)
    - [3.1. Languages of the EU](#31-languages-of-the-eu)
    - [3.2. Alphabets of the EU languages](#32-alphabets-of-the-eu-languages)
    - [3.3. General Regex for all 24 EU languages](#33-general-regex-for-all-24-eu-languages)
    - [3.4. General Regex without Greek and Bulgarian](#34-general-regex-without-greek-and-bulgarian)
    - [3.5. Languages worldwide](#35-languages-worldwide)
  - [4. TLDR](#4-tldr)
    - [4.1. Languages and alphabets](#41-languages-and-alphabets)
    - [4.2. Checklist](#42-checklist)
    - [4.3. Test data](#43-test-data)
    - [4.4. Test data real cases](#44-test-data-real-cases)
    - [4.5. Website with analyzing features](#45-website-with-analyzing-features)
  - [5. Further Reading](#5-further-reading)
  - [6. Glossary](#6-glossary)
  - [7. Work in Progress Disclaimer](#7-work-in-progress-disclaimer)



## 1. About

[Disclaimer](#7-work-in-progress-disclaimer)


**TLDR:** You need information about name validation in online forms and software applications? After it is finished this project should contain amongst other things a list of suggestions, some prepared snippets and regex formulas for easy implementation.

**Long Read:** Software developers are powerful. A small decision in a online form can impact the lives of thousands of people. If the validation is to strict, it can prevent humans with a more complex name from traveling or accessing financial support from the state. If a shopping platform does not accept your name, you can choose another one. But the more essential services are managed online, the more often people have no alternative to apply for drivers licenses, passports or certificates and if the only available form tells them that their name is not valid they are stuck.

This whole issue is extremely complex because the factors why forms are like they are can be juridical, technical or sometimes simply based on human assumptions. In the everyday life of a software developer nobody has the time to dig into this whole issue. And also the existing articles and sources about this topic still demand some time to study and implement them.

So the idea of this collection is to create some specific technical patterns which are easy to adopt. Because what is missing - or at least I did not find it anywhere else - is an out-of-the-box solution. A framework of example regex to use and a set of test-cases to make sure your own application is compliant. Something which is as complete, tested and production ready as possible.

## 2. Potential reasons for failing validation

### 2.1. Length of elements

[Disclaimer](#7-work-in-progress-disclaimer)


This topic overlaps with [2.2. Number of elements](#22-number-of-elements) because when you talk about the accepted length of input it matters if you offer just one field for the whole name or two or more fields for first name, middle name and last name.

Let us first start with the allowed minimum length of an entry. In many cases developers expect at least two to three characters for a name input. It is indeed uncommon for legal names in western society to be shorter so is a good example of the cultural issue I mentioned above when somebody implements restrictions based on the own limited knowledge. 

The smallest common first names in western countries are written with 3 letters like "Jim", "Joe", "Max", "Sam", "Sue" or "Tom". But as countless examples over the years document especially online users with an asian background may have first or last names with just two letters like software developer [Charly Ho](https://dev.to/carlymho/whats-in-a-name-validation-4b41) or pro golfer [Lucy Li](https://en.wikipedia.org/wiki/Lucy_Li).

The issue with allowed maximum lengths is often linked to very practical reasons like technical limits in IT systems. For example until 2013 the infrastructure used by the authorities in the US state of Hawaii could only process names with up to 35 characters. Then Hawaiian woman [Janice "Lokelani" Keihanaikukauakahihulihe'ekahaunaele](https://www.npr.org/sections/thetwo-way/2013/12/31/258673819/hawaiian-woman-gets-ids-that-fit-her-36-character-last-name?t=1645876662579) had to take legal measures to make the state change this. Under the new policy, the state's cards will have room for 40 characters in "first and last names and 35 characters for middle names.

The [W3C is clear in its recommendation](https://www.w3.org/International/questions/qa-personal-names) "Bear in mind that names in some cultures can be quite a lot longer than your own. ... Avoid limiting the field size for names in your database."

Examples for length standards:
| Standard | Rules about names |
|-|-|
| [ISO/IEC 7813](https://en.m.wikipedia.org/wiki/ISO/IEC_7813), Defines properties of financial transaction cards, such as ATM or credit cards. | Name, 2 to 26 characters (including separators, where appropriate, between surname, first name etc.)|


**Suggestion:** Try to avoid any unnecessary minimum or maximum constraints.

### 2.2. Number of elements

[Disclaimer](#7-work-in-progress-disclaimer)

  
Did you know that the subject of proper human names is so broad that there is a whole scientific discipline called [anthroponymy](https://en.m.wikipedia.org/wiki/Anthroponymy)?

Next to the common names with two or more elements ([polynym](https://en.wiktionary.org/wiki/polynym)) there are also some with just one ([mononym](https://en.m.wikipedia.org/wiki/Mononymous_person)). In this case we are not talking about artistic pseudonyms like Cher, Prince, Bono, Otto but about people who really have just one legal name like [Wookey](http://wookware.org/name.html).

W3C's recommendation:
If designing a form or database that will accept names from people with a variety of backgrounds, you should ask yourself whether you really need to have separate fields for given name and family name.
https://www.w3.org/International/questions/qa-personal-names


| Possible elements of names | example |
|-|-|
| Title | . |
| **Given name** <br> aka First name<br> aka Forename <br> aka Christian name | . |
| **Middle name** | . |
| **Surname** <br> aka Last name <br> aka Family name <br><br> also <br> Maiden name <br> Birth name| . |
| **Pseudonym** <br>Nick name <br>Stage name <br>pen name <br>nom de plume <br>literary double| . |


**Suggested solution:** No matter if your form has fields for first, middle and last name or like some experts suggest just one field for full name: The best is that you do not validate or filter the number of elements. Als long as the whole name fits into the length limits described later. Also be prepared to allow either the first or last name to be empty.

### 2.3. Order of elements

[Disclaimer](#7-work-in-progress-disclaimer)

E.g. "Western Order" vs. "Eastern Order".

Suggested solution:
...

 

### 2.4. Characters

[Disclaimer](#7-work-in-progress-disclaimer)

... 

**Suggested solution:** ...

 

### 2.5. Similarity to reserved words

[Disclaimer](#7-work-in-progress-disclaimer)


Most common case of problems with reserved words in computer systems are people with the surname "Null". People like Jennifer Null (Baraniuk 2016) from Southern Virginia in the US have problems with online shopping, booking flights or entering details into online forms for taxes or utilities. Journalist Christopher Null (Null 2015) encounters problems receiving physical mail as well as digital email.

Jeff Sample (Name Validation For Developers 101, 2019) also has a problematic word as surname. He got stuck in digital hell at the Buenos Aires airport when the airline for his connecting flight could not find his ticket.

There are several possible technical reasons and also different ways to avoid them. Using delimiters in CSV files is an important principle (West 2017). [Testing fields for "null" and escaping them as CDATA values](https://stackoverflow.com/questions/4456438/how-to-pass-null-a-real-surname-to-a-soap-web-service-in-actionscript-3) is another one for Actionscript.


|Programming language |Reserved words |
|- |- |
|Go |- [Keywords](https://go.dev/ref/spec#Keywords)<br> **Result:** break, default, func, interface, select, case, defer, go, map, struct, chan, else, goto, package, switch, const, fallthrough, if, range, type, continue, for, import, return, var|
|Java |- [Keywords](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/_keywords.html) |
|Javascript |- [Reserved keywords](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_keywords_as_of_ecmascript_2015)<br>**Result:** break, case, catch, class, const, continue, debugger, default, delete, do, else, export,extends, finally, for, function, if, import, in, instanceof, new, return, super, switch, this, throw, try, typeof, var, void, while, with, yield |
|PHP |- [Reserved Keywords](https://www.php.net/manual/en/reserved.keywords.php)<br>- [Other reserved words](https://www.php.net/manual/en/reserved.other-reserved-words.php)|
|Python|- [Keywords and Softkeywords](https://docs.python.org/3/library/keyword.html)<br>Export with:<br><pre>import keyword<br>keyword.kwlist</pre>**Result:** False, await, else, import, pass, None, break, except, in, raise, True, class, finally, is, return, and, continue, for, lambda, try, as, def, from, nonlocal, while, assert, del, global, not, with, async, elif, if, or, yield|


**Suggested solution:** Implement systemtests to make sure that the obvious names are correctly handled during the whole business process.

### 2.6. Similarity to profanity words

[Disclaimer](#7-work-in-progress-disclaimer)

Whenever people discuss about the sense or nonsense of filtering out possibly obscene words in online communication sooner or later the name of the British town Scunthorpe comes up. Because the socalled [Scunthorpe problem](https://en.m.wikipedia.org/wiki/Scunthorpe_problem) became the central synonym for filter measures which perhaps started with good moral intentions but ended up causing trouble.

As it turned out citizens of Scunthorpe could not apply for a AOL connection in 1996 because the name of their town contains the substring "cunt". Similar examples can be found in practically any language. The French had similar issues with the town of [Bitche](https://fr.m.wikipedia.org/wiki/Problème_de_Scunthorpe). In [Germany](https://de.m.wikipedia.org/wiki/Scunthorpe-Problem) terms like "**anal**ysis" or „**Sex**tett“ or „Staat**sex**amen“ where victims of filtering.

A quite current and hilarious case happened in late 2020 at a paleontologists conference. Due to a - [like the Guardian calls it „overzealous“](https://www.theguardian.com/science/2020/oct/16/profanity-filter-bones-paleontologists-conference) - profanity filter terms like "bone", "pubic", and "stream" where censored from the conference online forum.

There are several commercial offers for such a kind of validation and I personally do not have any experience with the quality of such products. [The British company Data8 lets you try their filter product on their website](https://www.data-8.co.uk/data-validation/name-validation/). The American company Service Objects offers a free API key to test their product [DOTS Name Validation 2](https://www.serviceobjects.com/products-internal/lead-name-validation/name-validation/"). The [British company Melissa](https://www.melissa.com/uk/name-verification#:~:text=Melissa%20Global%20Name%20API%20recognizes,containing%20thousands%20of%20company%20names) lists [arguments for a commercial name validation in a blog post](https://melissa91.webnode.com/l/the-why-and-how-of-global-name-validation/).


**Suggested solution:** Do not even try to actively filter input in online forms based on lists because: You. Just. Can. Not. Win. This. The small number of people who want to trick such filters will understand them well enough to do so. And at the same time every such filter is potentially worsening the experience for regular users.

One alternative is not to block entries but to flag them so that support members can take a closer look afterwards.

### 2.7. Symbols or unusual terms as names

[Disclaimer](#7-work-in-progress-disclaimer)


One of the most recent examples is for sure singer Grimes and Elon Musk naming their son [X Æ A-XII](https://en.wikipedia.org/wiki/Grimes_(musician)#Personal_life). In comparison the name [Apple](https://en.wikipedia.org/wiki/Gwyneth_Paltrow#Relationships_and_children) for the daughter of Gwyneth Paltrow and even the names [North, Saint, Chicago and Palm](https://en.wikipedia.org/wiki/Kim_Kardashian#Health_and_pregnancies) for the children of Kim Kardashian are almost boring.

But also grown ups voluntarily change their names to [Tyrannosaurus Rex Joseph Gold](https://www.npr.org/sections/thetwo-way/2012/05/08/152251210/nebraska-man-changes-his-name-to-tyrannosaurus-rex) (2012) or [Beezow Doo-Doo Zopittybop-Bop-Bop](https://www.npr.org/sections/thetwo-way/2012/01/09/144933779/wisconsin-police-arrest-beezow-doo-doo-zopittybop-bop-bop) (2011). Then there is the case of David Fearn from Walsall who changed his name to a collection of all James Bond movies. His official name now is ["James Dr No From Russia with Love Goldfinger Thunderball You Only Live Twice On Her Majesty's Secret Service Diamonds Are Forever Live and Let Die The Man with the Golden Gun The Spy Who Loved Me Moonraker For Your Eyes Only Octopussy A View to a Kill The Living Daylights Licence to Kill Golden Eye Tomorrow Never Dies The World Is Not Enough Die Another Day Casino Royale Bond"](https://www.scotsman.com/news/uk-news/names-bond-times-21-2510485) (2006).

An aspect which should be mentioned as well is people with which are unintentionally similar to celebrities or fictional characters. Developers could try to avoid fake entries by filtering those out. But how do you want to distinguish between fake entries and people who are really named [Charlie Brown](https://www.linkedin.com/pub/dir?firstName=charly&lastName=brown&trk=guest_homepage-basic_people-search-bar_search-submit), 
[James Bond](https://www.linkedin.com/pub/dir?firstName=James&lastName=Bond&trk=people-guest_people-search-bar_search-submit) or [Peter Pan](https://www.linkedin.com/pub/dir?firstName=Peter&lastName=Pan&trk=people-guest_people-search-bar_search-submit)?


**Suggested solution:** As far as I know it is a really rare occasion that people use symbols as names. So nobody can expect forms to handle this. Another story are names which sound unusual because they are lent from cities, countries, celebrities or fictional characters. Who would we be to judge the name choices of other people no matter if we personally think it is esthetic or not? As long as letters from the regular alphabet are used, we should not filter names because we can not.


### 2.8. Redundant space at beginning or end

[Disclaimer](#7-work-in-progress-disclaimer)

Yes, of course this a point which should go without saying but let us look for a moment at the redundant space at the beginning or end of an input which could also trigger a negative validation. We do this not only for the sake of completeness but also because exactly such things have a tendency to cause behaviors which are the hardest to catch for the exact reason that they are so obvious. 

Good news: Here trouble is easy to avoid by trimming or stripping possible whitespace with the respectable functions.


| Language | Doc | Example |
| -- | -- | -- | 
| Javascript | [Docs](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/String/Trim) | ```let inputTrimmed = inputOriginal.trim(); ``` |
| Java | [Docs](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html#trim()) | ```String inputTrimmed = inputOriginal.trim(); ``` |
| PHP | [Docs](https://www.php.net/manual/de/function.trim.php) | ```$input_trimmed = trim($input_original); ``` |
| Python | [Docs](https://docs.python.org/3/library/stdtypes.html?highlight=strip#str.strip) | ```input_trimmed = input_original.strip() ``` |
| Go | [Docs](https://pkg.go.dev/strings#TrimSpace) | ```var inputTrimmed = strings.TrimSpace(inputOriginal) ``` |

Wikipedia features an even bigger list of [trimming examples in programming languages](https://en.wikipedia.org/wiki/Comparison_of_programming_languages_(string_functions)#trim) as well as some basic info about the subject of [trimming](https://en.wikipedia.org/wiki/Trimming_(computer_programming)).

Beware about the different kinds of whitespace ([25 examples for whitespace in Unicode on Wikipedia](https://en.wikipedia.org/wiki/Whitespace_character#Spaces_in_Unicode)) and that the interpretation of them can vary from method to method. Luckily our use case should be mostly about the spacebar whitespace ([U+0020](https://www.compart.com/de/unicode/U+0020)) which is part of the 128 characters of the Unicode Latin Basic block and should be covered by most of the methods as standard.

Suggested solution:
Using trim or strip functions with the input. 


## 3. Languages



### 3.1. Languages of the EU

[Disclaimer](#7-work-in-progress-disclaimer)

24 current EU languages in alphabetical order.

- [EU languages on the official EU website](https://european-union.europa.eu/principles-countries-history/languages_en)
- [EU languages on Wikipedia](https://en.m.wikipedia.org/wiki/Languages_of_the_European_Union)



|  | Language | [ISO_639-2](https://en.wikipedia.org/wiki/ISO_639-2) | National level | Subnational level |Since |
| - | - | -- |-- |-- |-- |
| 1 | [Bulgarian](https://en.wikipedia.org/wiki/Bulgarian_language) | bul | Bulgaria | - | 2007 |
| 2 | [Croatian](https://en.wikipedia.org/wiki/Croatian_language) | hrv | Croatia | Austria | 2013 |
| 3 | [Czech](https://en.wikipedia.org/wiki/Czech_language) | ces | Czech Republic | Slovakia | 2004 |
| 4 | [Danish](https://en.wikipedia.org/wiki/Danish_language) | dan | Denmark | Germany | 1973 |
| 5 | [Dutch](https://en.wikipedia.org/wiki/Dutch_language) | nld | Belgium, Netherlands | - | 1958 |
| 6 | [English](https://en.wikipedia.org/wiki/English_language) | eng | Ireland, Malta | - | 1973 |
| 7 | [Estonian](https://en.wikipedia.org/wiki/Estonian_language) | est | Estonia | - | 2004 |
| 8 | [Finnish](https://en.wikipedia.org/wiki/Finnish_language) | fin | Finland | Sweden | 1995 |
| 9 | [French](https://en.wikipedia.org/wiki/French_language) | fra | Belgium, France, Luxembourg | Italy | 1958 |
| 10 | [German](https://en.wikipedia.org/wiki/German_language) | deu | Austria, Belgium, Germany, Luxembourg | Denmark, Italy, Poland | 1958 |
| 11 | [Greek](https://en.wikipedia.org/wiki/Greek_language) | ell | Cyprus, Greece | - | 1981 |
| 12 | [Hungarian](https://en.wikipedia.org/wiki/Hungarian_language) | hun | Hungary | Austria, Romania, Slovakia, Slovenia | 2004|
| 13 | [Irish](https://en.wikipedia.org/wiki/Irish_language) | gle | Ireland | - | 2007 |
| 14 | [Italian](https://en.wikipedia.org/wiki/Italian_language) | ita | Italy | Croatia, Slovenia | 1958 |
| 15 | [Latvian](https://en.wikipedia.org/wiki/Latvian_language) | lav | Latvia | - | 2004 |
| 16 | [Lithuanian](https://en.wikipedia.org/wiki/Lithuanian_language) | lit | Lithuania | Poland | 2004 |
| 17 | [Maltese](https://en.wikipedia.org/wiki/Maltese_language) | mlt | Malta | - | 2004 |
| 18 | [Polish](https://en.wikipedia.org/wiki/Polish_language) | pol | Poland | - | 2004 |
| 19 | [Portugese](https://en.wikipedia.org/wiki/Portuguese_language) | por | Portugal | - | 1986 |
| 20 | [Romanian](https://en.wikipedia.org/wiki/Romanian_language) | ron | Romania | - | 2007 |
| 21 | [Slovak](https://en.wikipedia.org/wiki/Slovak_language) | slk | Slovakia | Czech Republic, Hungary | 2004 |
| 22 | [Slovene](https://en.wikipedia.org/wiki/Slovene_language) | slv | Slovenia | Austria, Hungary, Italy | 2004 |
| 23 | [Spanish](https://en.wikipedia.org/wiki/Spanish_language) | spa | Spain | - | 1986 |
| 24 | [Swedish](https://en.wikipedia.org/wiki/Swedish_language) | swe | Sweden, Finland | - | 1995 |



### 3.2. Alphabets of the EU languages

[Disclaimer](#7-work-in-progress-disclaimer)


|  | Language | Letters | Alphabet / Regex patterns | 
| ---- | ---- | ---- | ---- |
| 1 | [Bulgarian](https://en.wikipedia.org/wiki/Bulgarian_alphabet) | 30 | ```а,б,в,г,д,е,ж,з,и,й,к,л,м,н,о,п,р,с,т,у,ф,х,ц,ч,ш,щ,ъ,ь,ю,я```<br>```А,Б,В,Г,Д,Е,Ж,З,И,Й,К,Л,М,Н,О,П,Р,С,Т,У,Ф,Х,Ц,Ч,Ш,Щ,Ъ,Ь,Ю,Я``` <br><br> ```Regex: ^[A-Za-z -абвгдежзийклмнопрстуфхцчшщъьюяАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЬЮЯ]+$ ```|
| 2 | [Croatian](https://en.wikipedia.org/wiki/Gaj%27s_Latin_alphabet) | 30 |```a,b,c,č,ć,d,dž,đ,e,f,g,h,i,j,k,l,lj,m,n,nj,o,p,r,s,š,t,u,v,z,ž```<br>```A,B,C,Č,Ć,D,Dž,Đ,E,F,G,H,I,J,K,L,Lj,M,N,Nj,O,P,R,S,Š,T,U,V,Z,Ž```<br><br> ```Regex: ^[A-Za-z -čćžđšžČĆžĐŠŽ]+$ ``` |
| 3 | [Czech](https://en.wikipedia.org/wiki/Czech_orthography#Alphabet) | 42 | ```a,á,b,c,č,d,ď,e,é,ě,f,g,h,ch,i,í,j,k,l,m,n,ň,o,ó,p,q,r,ř,s,š,t,ť,u,ú,ů,v,w,x,y,ý,z,ž``` <br>```A,Á,B,C,Č,D,Ď,E,É,Ě,F,G,H,CH,I,Í,J,K,L,M,N,Ň,O,Ó,P,Q,R,Ř,S,Š,T,Ť,U,Ú,Ů,V,W,X,Y,Ý,Z,Ž```<br><br> ```Regex: ^[A-Za-z -áčďéěíňóřšťúůýžÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$ ``` |
| 4 | [Danish](https://en.wikipedia.org/wiki/Danish_and_Norwegian_alphabet) | 29 | ```a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,æ,ø,å```<br>```A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,Æ,Ø,Å```<br><br> ```Regex: ^[A-Za-z -æøåÆØÅ]+$ ``` |
| 5 | [Dutch](https://en.wikipedia.org/wiki/Dutch_orthography) | 26 | ```a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z``` <br> ```A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z``` <br><br> ```Regex: ^[A-Za-z -]+$ ``` |
| 6 | [English](https://en.wikipedia.org/wiki/English_alphabet) | 26 | ```a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z``` <br> ```A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z```<br><br> ```Regex: ^[A-Za-z -]+$ ``` |
| 7 | [Estonian](https://en.wikipedia.org/wiki/Estonian_orthography) | 32 | ```a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,š,z,ž,t,u,v,w,õ,ä,ö,ü,x,y```<br>```A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,Š,Z,Ž,T,U,V,W,Õ,Ä,Ö,Ü,X,Y```<br><br> ```Regex: ^[A-Za-z -šžõäöüŠŽÕÄÖÜ]+$ ``` |
| 8 | [Finnish](https://en.wikipedia.org/wiki/Finnish_orthography) | 29 | ```a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,å,ä,ö```<br>```A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,Y,Y,Z,Å,Ä,Ö```<br><br> ```Regex: ^[A-Za-z -åäöÅÄÖ]+$ ``` |
| 9 | [French](https://en.wikipedia.org/wiki/French_orthography#Alphabet) | 26 | ```a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z``` <br> ```A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z``` <br><br> ```Regex: ^[A-Za-z -]+$ ```|
| 10 | [German](https://en.wikipedia.org/wiki/German_orthography#Alphabet) | 30 | ```a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ä,ö,ü,ß``` <br> ```A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,Ä,Ö,Ü,ß``` <br><br> ```Regex: ^[A-Za-z -äöüßÄÖÜß]+$ ```|
| 11 | [Greek](https://en.wikipedia.org/wiki/Greek_alphabet) | 24 | ```α,β,γ,δ,ε,ζ,η,θ,ι,κ,λ,μ,ν,ξ,ο,π,ρ,σ/ς,τ,υ,φ,χ,ψ,ω```<br>```Α,Β,Γ,Δ,Ε,Ζ,Η,Θ,Ι,Κ,Λ,Μ,Ν,Ξ,Ο,Π,Ρ,Σ,Τ,Υ,Φ,Χ,Ψ,Ω``` <br><br> ```Regex: ^[A-Za-z -αβγδεζηθικλμνξοπρσςτυφχψωΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ]+$ ```|
| 12 | [Hungarian](https://en.wikipedia.org/wiki/Hungarian_alphabet) | 44 | ```a,á,b,c,cs,d,dz,dzs,e,é,f,g,gy,h,i,í,j,k,l,ly,m,n,ny,o,ó,ö,ő,p,q,r,s,sz,t,ty,u,ú,ü,ű,v,w,x,y,z,zs```<br>```A,Á,B,C,Cs,D,Dz,Dzs,E,É,F,G,Gy,H,I,Í,J,K,L,Ly,M,N,Ny,O,Ó,Ö,Ő,P,Q,R,S,Sz,T,Ty,U,Ú,Ü,Ű,V,W,X,Y,Z,Zs``` | ISO ```+ á|cs|dz|dzs|é|í|ly|ny|ó|ö|ő|sz|ty|ú|ü|ű|zs```<br>```Á|Cs|Dz|Dzs|É|Í|Ly|Ny|Ó|Ö|Ő|Sz|Ty|Ú|Ü|Ű|Zs``` <br><br> ```Regex: ^[A-Za-z -áéíóöőúüűÁÉÍÓÖŐÚÜŰ]+$ ```|
| 13 | [Irish](https://en.wikipedia.org/wiki/Irish_orthography#Alphabet) | 18 | ```a,b,c,d,e,f,g,h,i,l,m,n,o,p,r,s,t,u``` <br> ```A,B,C,D,E,F,G,H,I,L,M,N,O,P,R,S,T,U```<br><br> ```Regex: ^[A-Za-z -]+$ ``` |
| 14 | [Italian](https://en.wikipedia.org/wiki/Italian_orthography#Alphabet) | 21 | ```a,b,c,d,e,f,g,h,i,l,m,n,o,p,q,r,s,t,u,v,z``` <br> ```A,B,C,D,E,F,G,H,I,L,M,N,O,P,Q,R,S,T,U,V,Z```<br><br> ```Regex: ^[A-Za-z -]+$ ``` |
| 15 | [Latvian](https://en.wikipedia.org/wiki/Latvian_orthography) | 33 | ```a,ā,b,c,č,d,e,ē,f,g,ģ,h,i,ī,j,k,ķ,l,ļ,m,n,ņ,o,p,r,s,š,t,u,ū,v,z,ž```<br>```A,Ā,B,C,Č,D,E,Ē,F,G,Ģ,H,I,Ī,J,K,Ķ,L,Ļ,M,N,Ņ,O,P,R,S,Š,T,U,Ū,V,Z,Ž``` <br><br> ```Regex: ^[A-Za-z -āčēģīķļņšūžĀČĒĢĪĶĻŅŠŪŽ]+$ ```|
| 16 | [Lithuanian](https://en.wikipedia.org/wiki/Lithuanian_orthography) | 32 | ```a,ą,b,c,č,d,e,ę,ė,f,g,h,i,į,y,j,k,l,m,n,o,p,r,s,š,t,u,ų,ū,v,z,ž``` <br>```A,Ą,B,C,Č,D,E,Ę,Ė,F,G,H,I,Į,Y,J,K,L,M,N,O,P,R,S,Š,T,U,Ų,Ū,V,Z,Ž```<br><br> ```Regex: ^[A-Za-z -ąčęėįšųūžĄČĘĖĮŠŲŪŽ]+$ ``` |
| 17 | [Maltese](https://en.wikipedia.org/wiki/Maltese_alphabet) | 30 | ```a,b,ċ,d,e,f,ġ,g,għ,h,ħ,i,ie,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,ż,z``` <br>```A,B,Ċ,D,E,F,Ġ,G,GĦ,H,Ħ,I,IE,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Ż,Z```<br><br> ```Regex: ^[A-Za-z -ċġħgħżĊĠĦGĦŻ]+$ ``` |
| 18 | [Polish](https://en.wikipedia.org/wiki/Polish_alphabet) | 32 | ```a,ą,b,c,ć,d,e,ę,f,g,h,i,j,k,l,ł,m,n,ń,o,ó,p,r,s,ś,t,u,w,y,z,ź,ż```<br>```A,Ą,B,C,Ć,D,E,Ę,F,G,H,I,J,K,L,Ł,M,N,Ń,O,Ó,P,R,S,Ś,T,U,W,Y,Z,Ź,Ż``` <br><br> ```Regex: ^[A-Za-z -ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$ ```|
| 19 | [Portugese](https://en.wikipedia.org/wiki/Portuguese_orthography) | 39 | ```a,à,á,â,ã,b,c,ç,d,e,é,ê,f,g,h,i,í,j,k,l,m,n,o,ó,ô,õ,p,q,r,s,t,u,ú,ü,v,w,x,y,z```<br>```A,À,Á,Â,Ã,B,C,Ç,D,E,É,Ê,F,G,H,I,Í,J,K,L,M,N,O,Ó,Ô,Õ,P,Q,R,S,T,U,Ú,Ü,V,W,X,Y,Z```<br><br> ```Regex: ^[A-Za-z -àáâãçéêíóôõúüÀÁÂÃÇÉÊÍÓÔÕÚÜ]+$ ``` |
| 20 | [Romanian](https://en.wikipedia.org/wiki/Romanian_alphabet) | 31 | ```a,ă,â,b,c,d,e,f,g,h,i,î,j,k,l,m,n,o,p,q,r,s,ș,t,ț,u,v,w,x,y,z```<br> ```A,Ă,Â,B,C,D,E,F,G,H,I,Î,J,K,L,M,N,O,P,Q,R,S,Ș,T,Ț,U,V,W,X,Y,Z```<br><br> ```Regex: ^[A-Za-z -ăâîșțĂÂÎȘȚ]+$ ``` |
| 21 | [Slovak](https://en.wikipedia.org/wiki/Slovak_orthography#Alphabet) | 46 | ```a,á,ä,b,c,č,d,ď,dz,dž,e,é,f,g,h,ch,i,í,j,k,l,ĺ,ľ,m,n,ň,o,ó,ô,p,q,r,ŕ,s,š,t,ť,u,ú,v,w,x,y,ý,z,ž``` <br>```A,Á,Ä,B,C,Č,D,Ď,Dz,Dž,E,É,F,G,H,Ch,I,Í,J,K,L,Ĺ,Ľ,M,N,Ň,O,Ó,Ô,P,Q,R,Ŕ,S,Š,T,Ť,U,Ú,V,W,X,Y,Ý,Z,Ž```<br><br> ```Regex: ^[A-Za-z -áäčďžéíĺľňóôŕšťúýžÁÄČĎžÉÍĹĽŇÓÔŔŠŤÚÝŽ]+$```|
| 22 | [Slovene](https://en.wikipedia.org/wiki/Slovene_alphabet) | 25 | ```a,b,c,č,d,e,f,g,h,i,j,k,l,m,n,o,p,r,s,š,t,u,v,z,ž``` <br>```A,B,C,Č,D,E,F,G,H,I,J,K,L,M,N,O,P,R,S,Š,T,U,V,Z,Ž```<br><br> ```Regex: ^[A-Za-z -čšžČŠŽ]+$```|
| 23 | [Spanish](https://en.wikipedia.org/wiki/Spanish_orthography#Alphabet_in_Spanish) | 27 | ```a,b,c,d,e,f,g,h,i,j,k,l,m,n,ñ,o,p,q,r,s,t,u,v,w,x,y,z``` <br> ```A,B,C,D,E,F,G,H,I,J,K,L,M,N,Ñ,O,P,Q,R,S,T,U,V,W,X,Y,Z``` <br><br> ```Regex: ^[A-Za-z -ñÑ]+$```|
| 24 | [Swedish](https://en.wikipedia.org/wiki/Swedish_alphabet) | 29 | ```a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,å,ä,ö``` <br> ```A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,Y,Y,Z,Å,Ä,Ö``` <br><br> ```Regex: ^[A-Za-z -åäöÅÄÖ]+$```| 



### 3.3. General Regex for all 24 EU languages: 

[Disclaimer](#7-work-in-progress-disclaimer)

```
/^[A-Za-z -áÁàÀăĂâÂåÅäÄãÃąĄāĀæÆćĆčČċĊçÇďĎđĐéÉêÊěĚėĖęĘēĒġĠģĢħĦíÍ
îÎįĮīĪķĶĺĹľĽļĻłŁńŃňŇñÑņŅóÓôÔöÖőŐõÕøØŕŔřŘśŚšŠșȘßťŤțȚúÚůŮüÜűŰųŲū
ŪýÝźŹžŽżŻαβγδεζηθικλμνξοπρσςτυφχψωΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩабвг
дежзийклмнопрстуфхцчшщъьюяАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЬЮЯ]+$/

Thanks to the ignore flag the regex does not have to contain 
an upper and an lower case version of each character:

/^[A-Za-z -áàăâåäãąāæćčċçďđéêěėęēġģħíîįīķĺľļłńňñņóôöőõøŕřśšșßť
țúůüűųūýźžżαβγδεζηθικλμνξοπρσςτυφχψωабвгдежзийклмнопрстуфхцчшщъьюя]+$/i

```


### 3.4. General Regex without Greek and Bulgarian:

[Disclaimer](#7-work-in-progress-disclaimer)

``` 
/^[A-Za-z -áÁàÀăĂâÂåÅäÄãÃąĄāĀæÆćĆčČċĊçÇďĎđĐéÉêÊěĚėĖęĘēĒġĠģĢħĦíÍîÎįĮīĪ
ķĶĺĹľĽļĻłŁńŃňŇñÑņŅóÓôÔöÖőŐõÕøØŕŔřŘśŚšŠșȘßťŤțȚúÚůŮüÜűŰųŲūŪýÝźŹžŽżŻ]+$/

Shorter version with ignore flag:

/^[A-Za-z -áàăâåäãąāæćčċçďđéêěėęēġģħíîįīķĺľļłńňñņóôöőõøŕřśšșßťțúůüűųūýźžż]+$/i
```


### 3.5. Languages worldwide

[Disclaimer](#7-work-in-progress-disclaimer)


As there are about 7.000 languages worldwide I decided to deal only with those which are used on a bigger number of websites. So [this analysis by the experts from W3](https://w3techs.com/technologies/overview/content_language) lists 34 languages from which 19 are already part of the EU languages and 15 new ones.


| | Language | Percentage of use | Alphabet / Regex|
|-|-|-|-|
| 1 | English | 63.6% | [See EU table](#32-alphabets-of-the-eu-languages) |
| 2 | Russian | 6.7% | ```33 / а,б,в,г,д,е,ё,ж,з,и,й,к,л,м,н,о,п,р,с,т,у,ф,х,ц,ч,ш,щ,ъ,ы,ь,э,ю,я``` <br>```А,Б,В,Г,Д,Е,Ё,Ж,З,И,Й,К,Л,М,Н,О,П,Р,С,Т,У,Ф,Х,Ц,Ч,Ш,Щ,Ъ,Ы,Ь,Э,Ю,Я ``` |
| 3 | Turkish | 3.9% | new |
| 4 | Spanish | 3.6% | [See EU table](#32-alphabets-of-the-eu-languages) |
| 5 | Persian | 3.5% | new |
| 6 | French |2.5% | [See EU table](#32-alphabets-of-the-eu-languages) |
| 7 | German | 2.1% | [See EU table](#32-alphabets-of-the-eu-languages) |
| 8 | Japanese | 2.0% | new |
| 9 | Vietnamese | 1.9% | new |
| 10 | Chinese | 1.4% | new |
| 11 | Arabic | 1.3% | new |
| 12 | Indonesian | 0.8% | new |
| 13 | Italian | 0.8% | [See EU table](#32-alphabets-of-the-eu-languages) |
| 14 | Portuguese | 0.7% | [See EU table](#32-alphabets-of-the-eu-languages) |
| 15 | Ukrainian	| 0.6% | new |
| 16 | Dutch, Flemish | 0.6% | [See EU table](#32-alphabets-of-the-eu-languages) |
| 17 | Thai | 0.5% | new |
| 18 | Polish | 0.5% | [See EU table](#32-alphabets-of-the-eu-languages) |
| 19 | Hebrew | 0.5% | new |
| 20 | Korean | 0.5% | new |
| 21 | Romanian | 0.2% | [See EU table](#32-alphabets-of-the-eu-languages) |
| 22 | Greek | 0.2% | [See EU table](#32-alphabets-of-the-eu-languages) |
| 23 | Czech	| 0.2% | [See EU table](#32-alphabets-of-the-eu-languages) |
| 24 | Swedish |	0.2% | [See EU table](#32-alphabets-of-the-eu-languages) |
| 25 | Serbian | 0.2% | new |
| 26 | Danish | 0.1% | [See EU table](#32-alphabets-of-the-eu-languages) |
| 27 | Hungarian | 0.1% | [See EU table](#32-alphabets-of-the-eu-languages) |
| 28 | Finnish | 0.1% | [See EU table](#32-alphabets-of-the-eu-languages) |
| 29 | Bulgarian | 0.1% | [See EU table](#32-alphabets-of-the-eu-languages) |
| 30 | Croatian | 0.1% | [See EU table](#32-alphabets-of-the-eu-languages) |
| 31 | Hindi	| 0.1% | new |
| 32 | Slovak | 0.1% | [See EU table](#32-alphabets-of-the-eu-languages) |
| 33 | Norwegian Bokmål | 0.1% | new |
| 34 | Lithuanian | 0.1% | [See EU table](#32-alphabets-of-the-eu-languages) |

## 4. TLDR

[Disclaimer](#7-work-in-progress-disclaimer)

### 4.1. Languages and alphabets

The current work in progress version of the data set can be accessed [here](/app/public/data/languages.json).
### 4.2. Checklist

The short compressed form how to deal with potential challenges for failing validation:

|Challenge |Solution |
|-|-|
|Length of elements | | 
|Number of elements |Best solution: Only one field for all name elements.<br>Second best solution: Fields for first and last name but one may stay empty. |
|Order of elements | |
|Characters | |
|Similarity to reserved words |Implement systemtests to make sure that the obvious cases like "Null" or "Sample" are correctly handled during the whole business process. |
|Similarity to profanity words | |
|Symbols or unusual terms as names |Accept everything as long as it consists of letters from the regular alphabet(s). |
|Spare whitespace at beginning or end |Trim it. |


### 4.3. Test data

I started creating a set with test data to be used for manual or automated testing.

Concept:

- Adding one name for each letter which is not covered by ISO Latin Basic

- To get real life examples politicians and celebrities are used

- All letters are checked in the language they originate from. For example German politician [Thomas de Maizière](https://en.wikipedia.org/wiki/Thomas_de_Maizi%C3%A8re) has an è in his surname because his ancestors lived in France. But this letter is not included in the German test cases.

- At first my idea was to use a smaller number of names which cover as many cases as possible then I realized it is better to have one name for each letter so the result is much more clearer if a test fails.

- If possible for the letters I will use simple names. So instead for "ß" instead of "Franz-Josef Strauß" who has a double-barrel first name I will use composer Johann Strauß. Or instead of [Lina Gálvez Muñoz](https://www.europarl.europa.eu/meps/de/197702/LINA_GALVEZ+MUNOZ/home) I will use [Jordi Cañas](https://www.europarl.europa.eu/meps/de/126644/JORDI_CANAS/home)

The current work in progress version of the data set can be accessed [here](/app/public/data/test-data.json).

### 4.4. Test data real cases

I also started a collection of test cases based on the countless examples from articles and other online mentions.

The current work in progress version of the data set can be accessed [here](/app/public/data/test-data-real-cases.json).

### 4.5. Website with analyzing features

You can visit the prototype [here](https://jocialmedia.github.io/how-to-validate-names/)

## 5. Further Reading

- **Adams**, Angela: [Law Enforcement Guide to International Names](https://info.publicintelligence.net/ROCICInternationalNames.pdf), Regional Organized Crime Information Center (ROCIC), 2010

- **Adzic**, Gojko: [People that make computers go crazy](https://gojko.net/2017/12/08/people-making-computers-crazy.html), 2017-12-08 
  - [Talk at Øredev](https://vimeo.com/243152077), 38min, 2017-11-10
  - [Talk at NDC Oslo](https://www.youtube.com/watch?v=1Rna6NvIIDk), 60min, 2018-06-11

- **Adzic**, Gojko: [Humans vs Computers](https://gojko.net/books/humans-vs-computers), 2017-09-01 

- **Atwood**, Jeff: [Obscenity Filters: Bad Idea, or Incredibly Intercoursing Bad Idea?](https://blog.codinghorror.com/obscenity-filters-bad-idea-or-incredibly-intercoursing-bad-idea), 2008-10-20

- **Baraniuk**, Chris: [These unlucky people have names that break computers](https://www.bbc.com/future/article/20160325-the-names-that-break-computer-systems), bbc.<area>com, 2016-03-25

- **Davies**, Mark: [Personal Name Validation Characters](http://unicode.org/L2/L2009/09232-name-validation.html), 2009-07-07 and [Personal Name Validation Characters](https://www.macchiato.com/unicode-intl-sw/utc/personal-name-validation-characters), 2009-08-14 (revised)

- **Deldycke**, Kevin: [Awesome Falsehood - A curated list of falsehoods programmers believe in](https://github.com/kdeldycke/awesome-falsehood), ongoing collection

- **ElAdawy**, Amr: [My name causes an issue with any booking! (names end with MR and MRS)](https://travel.stackexchange.com/questions/149323/my-name-causes-an-issue-with-any-booking-names-end-with-mr-and-mrs), Thread on travel.stackexchange.com, 2019-11-05

- **Eversion**, Michael: [The Alphabets of Europe - Version 3.0](https://www.evertype.com/alphabets/), 1993-2015

- **Graham-Cumming**, John: [Your Last Name Contains Invalid Characters](https://blog.jgc.org/2010/06/your-last-name-contains-invalid.html), 2010-06-17

- **Goregaokar**, Manish: [Breaking Our Latin-1 Assumptions](https://manishearth.github.io/blog/2017/01/15/breaking-our-latin-1-assumptions/#fnref:6), 2017-01-15 

- **Ho**, Charly: [What's in a name (validation)?](https://dev.to/carlymho/whats-in-a-name-validation-4b41), 2018-10-08
Based on presentation on AlterConf Chicago [What's in a Name (Validation)?](https://www.youtube.com/watch?v=yuQ5YTNO3I0), 13min, 2017-06-10

- **Hoogerbeets**, Edwin: [Repository for locale data for phone numbers, addresses, and names](https://github.com/pan-i18n/pan-data), Github-Repository, 2019-2021

- **Ishida**, Richard (W3C): [Personal names around the world](https://www.w3.org/International/questions/qa-personal-names.en), 2011-08-17

- **McGuire**, Caroline: [Cleverest con of all time? Man claims he gets free holidays and car rentals after changing his surname to 'Null'](https://www.dailymail.co.uk/travel/travel_news/article-3513652/The-cleverest-time-Man-gets-free-holidays-car-rentals-changing-surname-Null.html), dailymail<area>.co.uk, 2016-03-29

- **McKenzie**, Patrick: [Falsehoods programmers believe about names](https://www.kalzumeus.com/2010/06/17/falsehoods-programmers-believe-about-names/), 2010-06-17

- **McMillan**, Kumar: [Unicode In Python, Completely Demystified](http://farmdev.com/talks/unicode/), Slides for [Talk at Pycon08](https://www.youtube.com/watch?v=cecJ9o5GGmw), 25min, 2008-10-26

- **Moore**, Matthew: [The Clbuttic Mistake: When obscenity filters go wrong](https://www.telegraph.co.uk/news/newstopics/howaboutthat/2667634/The-Clbuttic-Mistake-When-obscenity-filters-go-wrong.html), telegraph<area>.co.uk, 2008-09-02

- **Null**, Christopher: [Hello, I'm Mr. Null. My Name Makes Me Invisible to Computers](https://www.wired.com/2015/11/null/), 2015-11-05

- **Qiu**, J: [Scientific publishing: Identity crisis](https://doi.org/10.1038/451766a), Nature 451, 766–767 (2008)

- **Rogers**, Tony: [Falsehoods programmers believe about names – With Examples](https://shinesolutions.com/2018/01/08/falsehoods-programmers-believe-about-names-with-examples/), 2018-01-08

- **Scott**, Tom: [Why Web Filters Don't Work: Penistone and the Scunthorpe Problem](https://www.youtube.com/watch?v=CcZdwX4noCE), 4min, 2016-06-06

- **Šedivý**, Miroslav: Your Name is Invalid!, 
  - [Presentation at PyData Berlin 2019](https://www.youtube.com/watch?v=pBuS7EUPnQA), 31min, 2019-10-11
  - [Presentation at EuroPython 2020](https://www.youtube.com/watch?v=IuZBTjaphsY), 27min, 2020-07-23
  - [Presentation at #rC3](https://www.youtube.com/watch?v=ofPZ73Wz4SU), 36min, 2021-02-04
  - [Presentation at PyCascades 2021](https://www.youtube.com/watch?v=telNgfvgmHs), 29min, 2021-02-20

- **Sheherazade** & **Ardiantiono** : [Attention science: some people have only one name](https://www.nature.com/articles/d41586-020-02761-z), Career Column, nature.<area>, 2020-09-29

- **Spolsky**, Joel: [The Absolute Minimum Every Software Developer Absolutely, Positively Must Know About Unicode and Character Sets (No Excuses!)](https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/), 2003-10-08

- **Strehl**, Manuel: [@CodepointsNET](https://twitter.com/CodepointsNET), Twitter account with examples for Unicode, characters, lettering and language, 2022

- **The Associated Press**: [Why, O Why, Doesn't That Name Compute?](https://www.nytimes.com/1991/08/28/us/why-o-why-doesn-t-that-name-compute.html), 1991-08-28

- **Unknown**: [Name Validation For Developers 101](https://businesscomputingworld.co.uk/name-validation-for-developers-101), businesscomputingworld<area>.co.uk, 2019-02-05

- **Unknown**: [@yournameisvalid](https://twitter.com/yournameisvalid), Twitter account with examples for wrong name validations, 2022

- **Various authors**: [A Guide to Names and Naming Practices](https://www.fbiic.gov/public/2008/nov/Naming_practice_guide_UK_2006.pdf), International Criminal Police Organization (Interpol), 2006-03-31

- **Various authors**: [CLDR Person Name Formatting](https://www.unicode.org/review/pri434/pri434-person-name-formatting-backgnd.pdf), Unicode Common Locale Data Repository (CLDR), 2021-11-01, [Ticket](https://www.unicode.org/review/pri434/)

- **Various authors**: [Getting It Right. Reference Guides for Registering Students with Non-English Names, 2nd Edition](https://files.eric.ed.gov/fulltext/ED572938.pdf), Education Northwest, 2017-03

- **Waugh**, Andrew: [Representing Peoples Names in Dublin Core](https://www.dublincore.org/specifications/dublin-core/name-representation/), 1998-02-03

- **West**, Randolph: [My surname is NULL](https://bornsql.ca/blog/my-surname-is-null), 2017-01-18

- **Woods**, Andrew: [Name Validation Regex for People's Names](https://andrewwoods.net/blog/2018/name-validation-regex/), 2018-04-06

- **Zentgraf**, David C.: [What Every Programmer Absolutely, Positively Needs To Know About Encodings And Character Sets To Work With Text](https://kunststube.net/encoding/), 2015-04-27

  





## 6. Glossary

Alphabetical list of terms directly or indirectly associated with validation of online forms.

### Bowdlerization
Substitution of anything deemed unpleasant or offensive from an artistic work, or other type of writing or media. Named after [Thomas Bowdler](https://en.wikipedia.org/wiki/Thomas_Bowdler) (1754–1825) who in 1818 published a censored family friendly version of plays by William Shakespeare. 
See [2.6.](#26-similarity-to-profanity-words)


### Clbuttic
Edited version of the word "classic" changed where the substring "ass" is replaced by the potentially more harmless term "butt". Another related example is "assassinate" which becomes "buttbuttinate".
See [2.6.](#26-similarity-to-profanity-words)

### Scunthorpe
British town which became a synonym for trouble caused by automated wordfilters. Citizens could not apply for an AOL connection in 1996 because the name of their town contains the substring "cunt".
See [2.6.](#26-similarity-to-profanity-words)

## 7. Work in Progress Disclaimer

**This project is currently still at early alpha status.** I feel like I should point this out a little stronger because I just saw that in the last two weeks alone this repository was cloned over 170 times. There are still elemental things missing and there have to be made and will be made lots of additions and changes in structure and wording.

I choose this topic because it is important and complex. Personally I wanted to take the challenge to build something useful by using some spare time every day. (By the time I am writing these words my daily commits go back to 18.02.2022 so I already succeeded at least for the first four weeks).

**Btw:** If you have any comments, suggestions or corrections I am happy to receive them via email at "howtovalidatenames AT dethlefs DOT eu"