function addNewEduField(){

    console.log("loading")
    
    let newNode = document.createElement("input");
    newNode.classList.add("form-control");
    newNode.classList.add("eField");
    newNode.classList.add("mt-2")

    let eDuOb = document.getElementById("eDu");
    let eduBtnOb = document.getElementById("eduBtn");

    eDuOb.insertBefore(newNode, eduBtnOb );
}

function addNewExpField(){

    let newNode = document.createElement("input");
    newNode.classList.add("form-control");
    newNode.classList.add("expField");
    newNode.classList.add("mt-2")

    let exPOb = document.getElementById("exp");
    let expBtnOb = document.getElementById("expbtn");

    exPOb.insertBefore(newNode, expBtnOb );

}

function addNewSkillsField(){

    let newNode = document.createElement("input");
    newNode.classList.add("form-control");
    newNode.classList.add("SkillsField");
    newNode.classList.add("mt-2")

    let SkillsOb = document.getElementById("Skills");
    let skillsBtnOb = document.getElementById("skillsbtn");

    SkillsOb.insertBefore(newNode, skillsBtnOb );

}

function addNewProjectField(){

    let newNode1 = document.createElement("input");
    newNode1.classList.add("form-control");
    newNode1.classList.add("projectField");
    newNode1.classList.add("mt-2");

    let prjOb = document.getElementById("prj");
    let projectBtnOb = document.getElementById("projectbtn");

    prjOb.insertBefore(newNode1, projectBtnOb );

}

function addNewAchivField(){

    let newNode = document.createElement("input");
    newNode.classList.add("form-control");
    newNode.classList.add("AchiveField");
    newNode.classList.add("mt-2")

    let achivOb = document.getElementById("achiv");
    let achiveBtnOb = document.getElementById("achivebtn");

    achivOb.insertBefore(newNode, achiveBtnOb );

}

function buildResume(){

    let NameField = document.getElementById("NameField").value;

    let nameT = document.getElementById("nameT");

    nameT.innerHTML = NameField;


    // ---------------address--------------

    let AddressField = document.getElementById("AddressField").value;
    let addressT = document.getElementById("addressT");

    addressT.innerHTML = AddressField;

    //--------------------state------------

    let stateField = document.getElementById("stateField").value;
    let stateT = document.getElementById("stateT");

    stateT.innerHTML = stateField;

    //----------------city---------------------

    let cityField = document.getElementById("cityField").value;
    let cityT = document.getElementById("cityT");

    cityT.innerHTML = cityField;

    //-----------------zip code------------------

    let zipField = document.getElementById("zipField").value;
    let zipT = document.getElementById("zipT");

    zipT.innerHTML = zipField;


    //-------------------gmail-------------------

    let gmailField = document.getElementById("gmailField").value;
    let gmailT = document.getElementById("gmailT");

    gmailT.innerHTML = gmailField;

    //------------------contact---------------

    let contactField = document.getElementById("contactField").value;
    let contactT = document.getElementById("contactT");

    contactT.innerHTML = contactField;
    

    // ------------------------------links-----------------

    let githubField = document.getElementById("githubField").value;
    let gitT = document.getElementById("gitT");

    gitT.innerHTML = githubField;

    let linkedinField = document.getElementById("linkedinField").value;
    let linkedT = document.getElementById("linkedT");

    linkedT.innerHTML = linkedinField;

    let instagramField = document.getElementById("instagramField").value;
    let instaT = document.getElementById("instaT");

    instaT.innerHTML = instagramField;

    let youtubeField = document.getElementById("youtubeField").value;
    let ytT = document.getElementById("ytT");

    ytT.innerHTML = youtubeField;


    // ------------------education---------------

    let eField = document.getElementsByClassName("eField");
    

    let str = '';

    for(let e of eField){
        str = str + `<li> ${e.value}</li>`;
    }

    let eduT = document.getElementById("eduT");

    eduT.innerHTML = str;

    // ------------------------experience--------------------
    let expField = document.getElementsByClassName("expField");

    let str1 = ' ' ;
    
    for(let e of expField){

        str1 = str1 + `<li>${e.value}</li>`;
    }

    let expT = document.getElementById("expT");

    expT.innerHTML = str1;

    // ----------------------project------------

    let projectField = document.getElementsByClassName("projectField");

    let str2 = ' ';
    for(let e of projectField){
        str2 = str2 + `<li>${e.value}</li>`;
    }

    let projectT = document.getElementById("projectT");

    projectT.innerHTML = str2;

    // -------------------------------Skills--------------------

    let SkillsField = document.getElementsByClassName("SkillsField");

    let str3 =  ' ';

    for(let e of SkillsField){
        str3 = str3 + `<li>${e.value}</li>`;
    }

    let skillsT = document.getElementById("skillsT");
    
    skillsT.innerHTML = str3;

    // --------------------------------Achivements

    let AchiveField = document.getElementsByClassName("AchiveField");

    let str4 = ' '; 

    for(let e of AchiveField){
        str4 = str4 + `<li>${e.value}</li>`;
    }

    let achiveT = document.getElementById("achiveT");

    achiveT.innerHTML = str4;

    document.getElementById("resume-temp").style.display="block";
    document.getElementById("resume-form").style.display="none";



}

function download(){
    window.print();
}