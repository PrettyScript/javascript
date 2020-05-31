/*Exercise instructions : take the html code from the following codepen : https://codepen.io/ayunas-the-scripter/pen/WNQgpqB, and use JavaScript DOM manipulation to inject the html into the inject id element of inject.html
*/

const inject = document.getElementById('inject');

const center = document.createElement('center');
inject.appendChild(center);

let italize = document.createElement('i');
italize.innerHTML = 'HTML Practice Exercise TEKcamp.';

const pageHeading = document.createElement('h1');
pageHeading.appendChild(italize);
inject.appendChild(pageHeading);

const anchor = document.createElement('a');
anchor.innerHTML = 'TEKsystems "TEKcamp"';
anchor.href = "";

const subHeading = document.createElement('h2');
subHeading.appendChild(anchor);
inject.appendChild(subHeading);

center.appendChild(pageHeading);
center.appendChild(subHeading);

const hr = document.createElement('hr');
inject.appendChild(hr);

const floatingText = document.createElement('p');
floatingText.innerHTML = `I love ${'HTML'.italics()} for the following reasons: `
inject.appendChild(floatingText);

const orderedList = document.createElement('ol');
inject.appendChild(orderedList);

const listItem1 = document.createElement('li');
const listItem2 = document.createElement('li');
const listItem3 = document.createElement('li');
listItem1.innerHTML = 'I learned it quickly.';
listItem2.innerHTML = 'I can make web pages using code';
listItem3.innerHTML = 'It’s fun.';
orderedList.appendChild(listItem1);
orderedList.appendChild(listItem2);
orderedList.appendChild(listItem3);

const hr2 = document.createElement('hr');
inject.appendChild(hr2);

const floatingText2 = document.createElement('p');
floatingText2.innerHTML = 'My instructor’s email address is: ';

const email = document.createElement('a');
email.href='mailto:ayunas@teksystems.com';
const emailAddress = document.createTextNode('ayunas@teksystems.com');
email.appendChild(emailAddress);

const period = document.createTextNode('.');

floatingText2.appendChild(email);
floatingText2.appendChild(period);
inject.appendChild(floatingText2);

const farewell = document.createElement('h1');
farewell.innerHTML = 'Have a great day!';

inject.appendChild(farewell);

const message = document.createElement('p');
message.innerHTML = `I really look forward to learning how to code!  Have a great day.  
-[Team "Git'er Done"]`;

inject.appendChild(message);







