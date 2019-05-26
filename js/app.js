/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/

var dom1 = document.getElementById('name1')
dom1.innerHTML = 'Tay-tay'


/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following: 

Project Manager*/

var dom2 = document.getElementById('position2')
dom2.innerHTML = 'Project Manager'


/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/

var dom3 = document.getElementById('alias3')
dom3.innerHTML = 'Concatenation'

/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/

var dom4 = document.getElementsByClassName('profile')
dom4[0].innerHTML = 'o9q48ywbeiq34wyb89y3qnwetliuoqnwlt8yqwleorunq498yt1tqirweahkflqi8o2538uyioetrjkagls;alksfdgj;alkdfsj;oiqj35jaog;aomifjslfsl;kja'

/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/

var dom5 = document.getElementsByClassName('profile')
dom5[1].innerHTML = '2-386-02938iutioejrjoig;ujiqporupmtiou3pmroutp34utpm30u6p523086423^@%#^#%YGRTHWEH#%#%@^@##@^%%$^%@%4938utpuweqpofsdjdfsjq3p4tjfojsd;ojfdklv ao;wijsfl;kasjf;sajd sadkfjoqjw;oiajsfd;lkjsdf;lsakdjf;lakjdf;aksjdf;alksjdf lkj;qoijtowj;oiwjgoqwijf;sdjf;jgqworgijraoiugopw8quretpq34u871p37p984utp84u3tjp89jfweoijfdo42weif w;oiejf;ljiwefuwq w fwqpiejf;weijf;ljf sdflskdfj94tj94wi;oiwjesfd;ljsf lorem #^%^@%*&%^$#$%^#&%*#%^#$TGeogjdoijeg;oiiewt;esg'


/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/

var dom6 = document.getElementsByClassName('alias')
dom6[2].innerHTML = 'I don\'t know'


/*7. David Ige

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "David Ige".

Append this div element to the nameParent div*/

var dom7 = document.createElement('div')
dom7.id = 'name7';
dom7.innerHTML = 'David Ige';
nameParent.appendChild(dom7)
 
/*8. The Dos Equis Dude

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Stay Thirsty My Friends".

Append this div element to the aliasParent div.*/

var dom8 = document.createElement('div')
dom8.id = 'alias8';
dom8.innerHTML = 'Stay Thirsty My Friends';
aliasParent.appendChild(dom8)

//Final Boss
/*9. Create your own profile.*/

