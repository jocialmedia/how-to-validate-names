# How to validate names

  - [1. About](#1-about)
  - [2. Reasons for failing validation](#2-reasons-for-failing-validation)
    - [2.1. Number of elements](#21-number-of-elements)
    - [2.2. Order of elements](#22-order-of-elements)
    - [2.3. Length of elements](#23-length-of-elements)
    - [2.4. Characters](#24-characters)
    - [2.5. Similarity to reserved words](#25-similarity-to-reserved-words)
    - [2.6. Similarity to profanity words](#26-similarity-to-profanity-words)
    - [2.7. Symbols or unusual terms as names](#27-symbols-or-unusual-terms-as-names)
    - [2.8. Redundant space at beginning or end](#28-redundant-space-at-beginning-or-end)
  - [3. Languages](#3-languages)
    - [3.1. Languages of the EU](#31-languages-of-the-eu)
    - [3.2. Alphabets of the EU languages](#32-alphabets-of-the-eu-languages)
    - [3.3. General Regex for all 24 EU languages](#33-general-regex-for-all-24-eu-languages)
    - [3.4. General Regex without Greek and Bulgarian](#34-general-regex-without-greek-and-bulgarian)
    - [3.5. Languages worldwide](#35-languages-worldwide)
  - [4. Ideas to explore further in the upcoming time](#4-ideas-to-explore-further-in-the-upcoming-time)
  - [5. Further Reading](#5-further-reading)
  - [Coming Up](#coming-up)



## 1. About


In 2022 nobody should have to be confronted with problems while filling out an online form. Still we all know a lot of cases in which valid legal names are either not accepted, not transmitted or not printed out correctly. 

I am totally convinced that in not one of those cases the reason is malicious intent but rather the challenge for software developers to implement validation rules for names from other languages and cultures than their own.

So my idea is to setup a systematic collection of international examples and even validation rules (e.g. as Regex) which are free for everyone to use. I hope this can help to promote respectful validation standards in IT products.


## 2. Reasons for failing validation


### 2.1. Number of elements

Suggested solution:
...
...

### 2.2. Order of elements

E.g. "Western Order" vs. "Eastern Order".

Suggested solution:
...

[More coming Up](#coming-up) 
### 2.3. Length of elements

This topic overlaps with [2.1. Number of elements](#21-number-of-elements) because when you talk about the accepted length of input it matters if you offer just one field for the whole name or two or more fieldss for first name, middle name and last name.

Let us first start with the allowed minium length of an entry. In many cases developers expect at least two to three characters for a name input. It is indeed uncommon for legal names in western society to be shorter so is a good example of the cultural issue I mentioned above when somebody implements restrictions based on the own limited knowledge. 

The smallest common first names in western countries are written with 3 letters like "Jim", "Joe", "Max", "Sam", "Sue" or "Tom". But as countless examples over the years document especially online users with an asian background may have first or last names with just two letters like software developer [Charly Ho](https://dev.to/carlymho/whats-in-a-name-validation-4b41) or pro golfer [Lucy Li](https://en.wikipedia.org/wiki/Lucy_Li).

The issue with allowed maximum lengths is often linked to very practical reasons like technical limits in IT systems. For example until 2013 the infrastructure used by the authorities in the US state of Hawaii could only process names with up to 35 characters. Then Hawaiian woman [Janice "Lokelani" Keihanaikukauakahihulihe'ekahaunaele](https://www.npr.org/sections/thetwo-way/2013/12/31/258673819/hawaiian-woman-gets-ids-that-fit-her-36-character-last-name?t=1645876662579) had to take legal measures to make the state change this. Under the new policy, the state's cards will have room for 40 characters in "first and last names and 35 characters for middle names.

Suggested solution:
...


[Coming Up](#coming-up) 

### 2.4. Characters

Suggested solution:
...

[Coming Up](#coming-up) 

### 2.5. Similarity to reserved words
Suggested solution:
...

[Coming Up](#coming-up) 

### 2.6. Similarity to profanity words
Suggested solution:
...

[Coming Up](#coming-up) 


### 2.7. Symbols or unusual terms as names

One of the most recent examples is for sure singer Grimes and Elon Musk naming their son [X Æ A-XII](https://en.wikipedia.org/wiki/Grimes_(musician)#Personal_life). In comparison the name [Apple](https://en.wikipedia.org/wiki/Gwyneth_Paltrow#Relationships_and_children) for the daughter of Gwyneth Paltrow and even the names [North, Saint, Chicago and Palm](https://en.wikipedia.org/wiki/Kim_Kardashian#Health_and_pregnancies) for the children of Kim Kardashian are almost boring.

Suggested solution:
...

[Coming Up](#coming-up) 


### 2.8. Redundant space at beginning or end

Yes, of course this a point which should go without saying but let us look for a moment at the redundant space at the beginning or end of an input which could also trigger a negative validation. We do this not only for the sake of completeness but also because exactly such things have a tendency to cause behaviors which are the hardest to catch for the exact reason that they are so obvious. 

Good news: Here trouble is easy to avoid by trimming or stripping possible whitespace with the respectable functions.


| Language | Doc | Example |
| -- | -- | -- | 
| Javascript | [Docs](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/String/Trim) | ```let inputTrimmed = inputOriginal.trim(); ``` |
| Java | [Docs](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html#trim()) | ```String inputTrimmed = inputOriginal.trim(); ``` |
| PHP | [Docs](https://www.php.net/manual/de/function.trim.php) | ```$input_trimmed = trim($input_original); ``` |
| Python | [Docs](https://docs.python.org/3/library/stdtypes.html?highlight=strip#str.strip) | ```input_trimmed = input_original.strip() ``` |
| Go | [Docs](https://pkg.go.dev/strings#TrimSpace) | ```var inputTrimmed = strings.TrimSpace(inputOriginal) ``` |

Wikipedia features an even bigger list of [trimming examples in programming languages](https://en.wikipedia.org/wiki/Comparison_of_programming_languages_(string_functions)#trim) as well as some basic info about the subject of  [trimming](https://en.wikipedia.org/wiki/Trimming_(computer_programming)).

Beware about the different kinds of whitespace ([25 examples for whitespace in Unicode on Wikipedia](https://en.wikipedia.org/wiki/Whitespace_character#Spaces_in_Unicode)) and that the interpretation of them can vary from method to method. Luckily our use case should be mostly about the spacebar whitespace ([U+0020](https://www.compart.com/de/unicode/U+0020)) which is part of the 128 characters of the Unicode Latin Basic block and should be covered by most of the methods as standard.

Suggested solution:
Using trim or strip functions with the input. 


## 3. Languages



### 3.1. Languages of the EU

24 current EU languages in alphabetical order.

- [EU languages on the official EU website](https://european-union.europa.eu/principles-countries-history/languages_en)
- [EU languages on Wikipedia](https://en.m.wikipedia.org/wiki/Languages_of_the_European_Union)



|  | Language | [ISO_639-2](https://en.wikipedia.org/wiki/ISO_639-2) | National level | Subnational level |Since |
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
| 9 | [French](https://en.wikipedia.org/wiki/French_orthography#Alphabet) | 26 |  ```a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z``` <br> ```A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z``` <br><br> ```Regex: ^[A-Za-z -]+$ ```|
| 10 | [German](https://en.wikipedia.org/wiki/German_orthography#Alphabet) | 30 | ```a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ä,ö,ü,ß``` <br> ```A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,Ä,Ö,Ü,ß``` <br><br> ```Regex: ^[A-Za-z -äöüßÄÖÜß]+$ ```|
| 11 | [Greek](https://en.wikipedia.org/wiki/Greek_alphabet) | 24 | ```α,β,γ,δ,ε,ζ,η,θ,ι,κ,λ,μ,ν,ξ,ο,π,ρ,σ/ς,τ,υ,φ,χ,ψ,ω```<br>```Α,Β,Γ,Δ,Ε,Ζ,Η,Θ,Ι,Κ,Λ,Μ,Ν,Ξ,Ο,Π,Ρ,Σ,Τ,Υ,Φ,Χ,Ψ,Ω``` <br><br> ```Regex: ^[A-Za-z -αβγδεζηθικλμνξοπρσςτυφχψωΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ]+$ ```|
| 12 | [Hungarian](https://en.wikipedia.org/wiki/Hungarian_alphabet) | 44 | ```a,á,b,c,cs,d,dz,dzs,e,é,f,g,gy,h,i,í,j,k,l,ly,m,n,ny,o,ó,ö,ő,p,q,r,s,sz,t,ty,u,ú,ü,ű,v,w,x,y,z,zs```<br>```A,Á,B,C,Cs,D,Dz,Dzs,E,É,F,G,Gy,H,I,Í,J,K,L,Ly,M,N,Ny,O,Ó,Ö,Ő,P,Q,R,S,Sz,T,Ty,U,Ú,Ü,Ű,V,W,X,Y,Z,Zs``` | ISO ```+ á|cs|dz|dzs|é|í|ly|ny|ó|ö|ő|sz|ty|ú|ü|ű|zs```<br>```Á|Cs|Dz|Dzs|É|Í|Ly|Ny|Ó|Ö|Ő|Sz|Ty|Ú|Ü|Ű|Zs``` <br><br> ```Regex: ^[A-Za-z -áéíóöőúüűÁÉÍÓÖŐÚÜŰ]+$ ```|
| 13 | [Irish](https://en.wikipedia.org/wiki/Irish_orthography#Alphabet) | 18 | ```a,b,c,d,e,f,g,h,i,l,m,n,o,p,r,s,t,u``` <br> ```A,B,C,D,E,F,G,H,I,L,M,N,O,P,R,S,T,U```<br><br> ```Regex: ^[A-Za-z -]+$ ``` |
| 14 | [Italian](https://en.wikipedia.org/wiki/Italian_orthography#Alphabet) | 21 | ```a,b,c,d,e,f,g,h,i,l,m,n,o,p,q,r,s,t,u,v,z``` <br> ```A,B,C,D,E,F,G,H,I,L,M,N,O,P,Q,R,S,T,U,V,Z```<br><br> ```Regex: ^[A-Za-z -]+$ ``` |
| 15 | [Latvian](https://en.wikipedia.org/wiki/Latvian_orthography) | 33 | ```a,ā,b,c,č,d,e,ē,f,g,ģ,h,i,ī,j,k,ķ,l,ļ,m,n,ņ,o,p,r,s,š,t,u,ū,v,z,ž```<br>```A,Ā,B,C,Č,D,E,Ē,F,G,Ģ,H,I,Ī,J,K,Ķ,L,Ļ,M,N,Ņ,O,P,R,S,Š,T,U,Ū,V,Z,Ž``` <br><br> ```Regex: ^[A-Za-z -āčēģīķļņšūžĀČĒĢĪĶĻŅŠŪŽ]+$ ```|
| 16 | [Lithuanian](https://en.wikipedia.org/wiki/Lithuanian_orthography) | 32 | ```a,ą,b,c,č,d,e,ę,ė,f,g,h,i,į,y,j,k,l,m,n,o,p,r,s,š,t,u,ų,ū,v,z,ž``` <br>```A,Ą,B,C,Č,D,E,Ę,Ė,F,G,H,I,Į,Y,J,K,L,M,N,O,P,R,S,Š,T,U,Ų,Ū,V,Z,Ž```<br><br> ```Regex: ^[A-Za-z -ąčęėįšųūžĄČĘĖĮŠŲŪŽ]+$ ``` |
| 17 | [Maltese](https://en.wikipedia.org/wiki/Maltese_alphabet) | 30 | ```a,b,ċ,d,e,f,ġ,g,għ,h,ħ,i,ie,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,ż,z``` <br>```A,B,Ċ,D,E,F,Ġ,G,GĦ,H,Ħ,I,IE,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Ż,Z```<br><br> ```Regex: ^[A-Za-z -ċġħħżĊĠĦĦŻ]+$ ``` |
| 18 | [Polish](https://en.wikipedia.org/wiki/Polish_alphabet) | 32 | ```a,ą,b,c,ć,d,e,ę,f,g,h,i,j,k,l,ł,m,n,ń,o,ó,p,r,s,ś,t,u,w,y,z,ź,ż```<br>```A,Ą,B,C,Ć,D,E,Ę,F,G,H,I,J,K,L,Ł,M,N,Ń,O,Ó,P,R,S,Ś,T,U,W,Y,Z,Ź,Ż``` <br><br> ```Regex: ^[A-Za-z -ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$ ```|
| 19 | [Portugese](https://en.wikipedia.org/wiki/Portuguese_orthography) | 39 | ```a,à,á,â,ã,b,c,ç,d,e,é,ê,f,g,h,i,í,j,k,l,m,n,o,ó,ô,õ,p,q,r,s,t,u,ú,ü,v,w,x,y,z```<br>```A,À,Á,Â,Ã,B,C,Ç,D,E,É,Ê,F,G,H,I,Í,J,K,L,M,N,O,Ó,Ô,Õ,P,Q,R,S,T,U,Ú,Ü,V,W,X,Y,Z```<br><br> ```Regex: ^[A-Za-z -àáâãçéêíóôõúüÀÁÂÃÇÉÊÍÓÔÕÚÜ]+$ ``` |
| 20 | [Romanian](https://en.wikipedia.org/wiki/Romanian_alphabet) | 31 | ```a,ă,â,b,c,d,e,f,g,h,i,î,j,k,l,m,n,o,p,q,r,s,ș,t,ț,u,v,w,x,y,z```<br> ```A,Ă,Â,B,C,D,E,F,G,H,I,Î,J,K,L,M,N,O,P,Q,R,S,Ș,T,Ț,U,V,W,X,Y,Z```<br><br> ```Regex: ^[A-Za-z -ăâîșțĂÂÎȘȚ]+$ ``` |
| 21 | [Slovak](https://en.wikipedia.org/wiki/Slovak_orthography#Alphabet) | 46 | ```a,á,ä,b,c,č,d,ď,dz,dž,e,é,f,g,h,ch,i,í,j,k,l,ĺ,ľ,m,n,ň,o,ó,ô,p,q,r,ŕ,s,š,t,ť,u,ú,v,w,x,y,ý,z,ž``` <br>```A,Á,Ä,B,C,Č,D,Ď,Dz,Dž,E,É,F,G,H,Ch,I,Í,J,K,L,Ĺ,Ľ,M,N,Ň,O,Ó,Ô,P,Q,R,Ŕ,S,Š,T,Ť,U,Ú,V,W,X,Y,Ý,Z,Ž```<br><br> ```Regex: ^[A-Za-z -áäčďžéíĺľňóôŕšťúýžÁÄČĎžÉÍĹĽŇÓÔŔŠŤÚÝŽ]+$```|
| 22 | [Slovene](https://en.wikipedia.org/wiki/Slovene_alphabet) | 25 | ```a,b,c,č,d,e,f,g,h,i,j,k,l,m,n,o,p,r,s,š,t,u,v,z,ž```  <br>```A,B,C,Č,D,E,F,G,H,I,J,K,L,M,N,O,P,R,S,Š,T,U,V,Z,Ž```<br><br> ```Regex: ^[A-Za-z -čšžČŠŽ]+$```|
| 23 | [Spanish](https://en.wikipedia.org/wiki/Spanish_orthography#Alphabet_in_Spanish) | 27 | ```a,b,c,d,e,f,g,h,i,j,k,l,m,n,ñ,o,p,q,r,s,t,u,v,w,x,y,z``` <br> ```A,B,C,D,E,F,G,H,I,J,K,L,M,N,Ñ,O,P,Q,R,S,T,U,V,W,X,Y,Z``` <br><br> ```Regex: ^[A-Za-z -ñÑ]+$```|
| 24 | [Swedish](https://en.wikipedia.org/wiki/Swedish_alphabet) | 29 | ```a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,å,ä,ö``` <br> ```A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,Y,Y,Z,Å,Ä,Ö``` <br><br> ```Regex: ^[A-Za-z -åäöÅÄÖ]+$```| 



### 3.3. General Regex for all 24 EU languages: 
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
``` 
/^[A-Za-z -áÁàÀăĂâÂåÅäÄãÃąĄāĀæÆćĆčČċĊçÇďĎđĐéÉêÊěĚėĖęĘēĒġĠģĢħĦíÍîÎįĮīĪ
ķĶĺĹľĽļĻłŁńŃňŇñÑņŅóÓôÔöÖőŐõÕøØŕŔřŘśŚšŠșȘßťŤțȚúÚůŮüÜűŰųŲūŪýÝźŹžŽżŻ]+$/

Shorter version with ignore flag:

/^[A-Za-z -áàăâåäãąāæćčċçďđéêěėęēġģħíîįīķĺľļłńňñņóôöőõøŕřśšșßťțúůüűųūýźžż]+$/i
```


### 3.5. Languages worldwide

As there are about 7.000 languages worldwide I decided to deal only with those which are used on a bigger number of websites. So [this analysis by the experts from W3](https://w3techs.com/technologies/overview/content_language) lists 34 languages from which 19 are already part of the EU languages and 15 new ones.


| | Language | Percentage of use | Alphabet / Regex|
|-|-|-|-|
| 1 | English | 63.6% | [See EU table](#32-alphabets-of-the-eu-languages) |
| 2 | Russian | 6.7% | ```33 / а,б,в,г,д,е,ё,ж,з,и,й,к,л,м,н,о,п,р,с,т,у,ф,х,ц,ч,ш,щ,ъ,ы,ь,э,ю,я```  <br>```А,Б,В,Г,Д,Е,Ё,Ж,З,И,Й,К,Л,М,Н,О,П,Р,С,Т,У,Ф,Х,Ц,Ч,Ш,Щ,Ъ,Ы,Ь,Э,Ю,Я ``` |
| 3 | Turkish | 3.9% | new |
| 4 | Spanish | 3.6% | [See EU table](#32-alphabets-of-the-eu-languages) |
| 5 | Persian | 3.5% | new |
| 6 | French |2.5% | [See EU table](#32-alphabets-of-the-eu-languages) |
| 7 | German | 2.1% | [See EU table](#32-alphabets-of-the-eu-languages) |
| 8 | Japanese | 2.0% | new |
| 9 | Vietnamese | 1.9% | new |
| 10 | Chinese | 1.4% | new |
| 11 | Arabic | 1.3% | new |
| 12 | Indonesian | 0.8% | new |
| 13 | Italian | 0.8% | [See EU table](#32-alphabets-of-the-eu-languages) |
| 14 | Portuguese | 0.7% | [See EU table](#32-alphabets-of-the-eu-languages) |
| 15 | Ukrainian	| 0.6% | new |
| 16 | Dutch, Flemish | 0.6% | [See EU table](#32-alphabets-of-the-eu-languages) |
| 17 | Thai | 0.5% | new |
| 18 | Polish | 0.5% | [See EU table](#32-alphabets-of-the-eu-languages) |
| 19 | Hebrew | 0.5% | new |
| 20 | Korean | 0.5% | new |
| 21 | Romanian | 0.2% | [See EU table](#32-alphabets-of-the-eu-languages) |
| 22 | Greek | 0.2% | [See EU table](#32-alphabets-of-the-eu-languages) |
| 23 | Czech	| 0.2% | [See EU table](#32-alphabets-of-the-eu-languages) |
| 24 | Swedish |	0.2% | [See EU table](#32-alphabets-of-the-eu-languages) |
| 25 | Serbian | 0.2% | new |
| 26 | Danish | 0.1% | [See EU table](#32-alphabets-of-the-eu-languages) |
| 27 | Hungarian | 0.1% | [See EU table](#32-alphabets-of-the-eu-languages) |
| 28 | Finnish | 0.1% | [See EU table](#32-alphabets-of-the-eu-languages) |
| 29 | Bulgarian | 0.1% | [See EU table](#32-alphabets-of-the-eu-languages) |
| 30 | Croatian | 0.1% | [See EU table](#32-alphabets-of-the-eu-languages) |
| 31 | Hindi	| 0.1% | new |
| 32 | Slovak | 0.1% | [See EU table](#32-alphabets-of-the-eu-languages) |
| 33 | Norwegian Bokmål | 0.1% | new |
| 34 | Lithuanian | 0.1% | [See EU table](#32-alphabets-of-the-eu-languages) |

## 4. Ideas to explore further in the upcoming time


- Research list of international language standards
- Collection of examples where validation did not work
- Example validation rules (e.g. as Regex)
- Research and list of languages (at the beginning perhaps with focus on European Union to narrow this down) 




## 5. Further Reading

- **Adzic**, Gojko: [People that make computers go crazy](https://gojko.net/2017/12/08/people-making-computers-crazy.html), 2017-12-08 
  - [Talk at Øredev](https://vimeo.com/243152077), 38min, 2017-11-10
  - [Talk at NDC Oslo](https://www.youtube.com/watch?v=1Rna6NvIIDk), 60min, 2018-06-11

- **Adzic**, Gojko: [Humans vs Computers](https://gojko.net/books/humans-vs-computers), 2017-09-01 

- **Atwood**, Jeff: [Obscenity Filters: Bad Idea, or Incredibly Intercoursing Bad Idea?](https://blog.codinghorror.com/obscenity-filters-bad-idea-or-incredibly-intercoursing-bad-idea), 2008-10-20

- **Baraniuk**, Chris: [These unlucky people have names that break computers](https://www.bbc.com/future/article/20160325-the-names-that-break-computer-systems), bbc.<area>com, 2016-03-25

- **Deldycke**, Kevin: [Awesome Falsehood - A curated list of falsehoods programmers believe in](https://github.com/kdeldycke/awesome-falsehood), ongoing collection

- **ElAdawy**, Amr: [My name causes an issue with any booking! (names end with MR and MRS)](https://travel.stackexchange.com/questions/149323/my-name-causes-an-issue-with-any-booking-names-end-with-mr-and-mrs), Thread on travel.stackexchange.com, 2019-11-05

- **Graham-Cumming**, John: [Your Last Name Contains Invalid Characters](https://blog.jgc.org/2010/06/your-last-name-contains-invalid.html), 2010-06-17

- **Ho**, Charly: [What's in a name (validation)?](https://dev.to/carlymho/whats-in-a-name-validation-4b41), 2018-10-08
Based on presentation on AlterConf Chicago [What's in a Name (Validation)?](https://www.youtube.com/watch?v=yuQ5YTNO3I0), 13min, 2017-06-10

- **Ishida**, Richard (W3C): [Personal names around the world](https://www.w3.org/International/questions/qa-personal-names.en), 2011-08-17

- **McGuire**, Caroline: [Cleverest con of all time? Man claims he gets free holidays and car rentals after changing his surname to 'Null'](https://www.dailymail.co.uk/travel/travel_news/article-3513652/The-cleverest-time-Man-gets-free-holidays-car-rentals-changing-surname-Null.html), dailymail<area>.co.uk, 2016-03-29

- **McKenzie**, Patrick: [Falsehoods programmers believe about names](https://www.kalzumeus.com/2010/06/17/falsehoods-programmers-believe-about-names/), 2010-06-17

- **Null**, Christopher: [Hello, I'm Mr. Null. My Name Makes Me Invisible to Computers](https://www.wired.com/2015/11/null/), 2015-11-05

- **Rogers**, Tony: [Falsehoods programmers believe about names – With Examples](https://shinesolutions.com/2018/01/08/falsehoods-programmers-believe-about-names-with-examples/), 2018-01-08

- **Šedivý**, Miroslav: Your Name is Invalid!, 
  - [Presentation at PyData Berlin 2019](https://www.youtube.com/watch?v=pBuS7EUPnQA), 31min, 2019-10-11
  - [Presentation at EuroPython 2020](https://www.youtube.com/watch?v=IuZBTjaphsY), 27min, 2020-07-23
  - [Presentation at #rC3](https://www.youtube.com/watch?v=ofPZ73Wz4SU), 36min, 2021-02-04
  - [Presentation at PyCascades 2021](https://www.youtube.com/watch?v=telNgfvgmHs), 29min, 2021-02-20

- **Unknown**: [Name Validation For Developers 101](https://businesscomputingworld.co.uk/name-validation-for-developers-101), businesscomputingworld<area>.co.uk, 2019-02-05

- **Unknown**: [@yournameisvalid](https://twitter.com/yournameisvalid), Twitter account with examples for wrong name validations, 2022

- **West**, Randoplh: [My surname is NULL](https://bornsql.ca/blog/my-surname-is-null), 2017-01-18

- **Woods**, Andrew: [Name Validation Regex for People's Names](https://andrewwoods.net/blog/2018/name-validation-regex/), 2018-04-06

- **Zentgraf**, David C.: [What Every Programmer Absolutely, Positively Needs To Know About Encodings And Character Sets To Work With Text](https://kunststube.net/encoding/), 2015-04-27
 

## Coming Up


This is work in progress and I try to add some valuable content to this project [every day](https://github.com/jocialmedia/how-to-validate-names/commits/main).