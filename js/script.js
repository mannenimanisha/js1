console.log('it is working');

//student->name,rebno,list of coures
 const students=[
 {
     name:"manu",
     regNo:54,
     listofcourses:["html","css","js"]
 },
{
    name:"kanth",
    regNo:43,
    listofcourses:['bootstrap','js']


},
{
    name:"sam",
    regNo:86,
    listofcourses:['js','jq']

}
 ]

 //loop
const studentsDiv = document.getElementById('studentsdiv');

 for( var i=0;i<students.length;i++)
 {
     const maniDiv =document.createElement('div');
     maniDiv.classList.add('card','mt-4');
     //maindiv.classllist.add('mt-3)
     const nameElem = document.createElement('h2');
     const nametitle = document.createElement('h1');
     nametitle.innerText="Name:";
     //h2
     const regNo = document.createElement('h2');
     //const listofcourses = document.createElement('h3');
     nameElem.innerText = students[i].name;
     regNo.innerText= students[i].regNo;
     //listofcourses.innerText = students[i].listofcourses;
     maniDiv.appendChild(nametitle)
     maniDiv.appendChild(nameElem);
     maniDiv.appendChild(regNo);
    // maniDiv.appendChild(listofcourses);
     studentsdiv.appendChild(maniDiv);
     const listofcourses= students[i].listofcourses;
     const ulElem = document.createElement('ul');
     //looping for courses
     for( var j=0;j<listofcourses.length;j++){
         const liElem = document.createElement('li');
         liElem.textContent =listofcourses[j];
         ulElem.appendChild(liElem);
        
     }
     maniDiv.appendChild(ulElem);


 }
