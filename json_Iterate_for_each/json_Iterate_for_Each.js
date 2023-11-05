let jsonResume = {
    Name:"Mohan Raj A",
    Mail : "akmohanraj555@gmail.com",
    Mobile :8668163314,                          
    District:"Karur",
    State:"Tamil Nadu",
    Qualification:"B.E",
    Subject : "Automobile Engineering",
    College : " K.S.R College of engineering", 
    CGPA : 7.52,
    Year:"2017-2021",
    Experience	: "1 year (21/03/2017-10/04/2018)",
    Designation	: "Mechanical Design Engineer" ,
    Company:"Crisp System India Pvt. Ltd, Coimbatore.",
}

let key = Object.keys(jsonResume)
let value = Object.values(jsonResume)

let  resumeArray = []

for(i=0;i<key.length;i++){
resumeArray.push(key[i]+" : "+value[i])    
}

resumeArray.forEach((finalResume) => {
console.log(finalResume)
}
)