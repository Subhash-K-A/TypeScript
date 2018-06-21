//Facebook About Page Classes

class WorkAndEducation{
    private workPlace:string[];
    private college:string;
    private highSchool:string;

    constructor(workPlace:string[],college:string,highSchool:string){
        this.workPlace=workPlace;
        this.college=college;
        this.highSchool=highSchool;
    }

}

class LivedPlaces{
    private places:string[];

    constructor(places:string[]){
        this.places=places;
    }
    
}

class ContactAndBasicInfo{
    private mobileNumber:number;
    private address:string;
    private email:string;
    private gender:string;
    private birthDate:Date;//01/01/1999
    private languages:string[];

    constructor(mobileNumber:number,address:string,email:string,gender:string,birthDate:string,languages:string[]){
        this.mobileNumber=mobileNumber;
        this.address=address;
        this.email=email;
        this.gender=gender;
        this.birthDate=new Date(birthDate);
        this.languages=languages;
    }

    
}

class FamilyAndRelationship{
    private relationshipStatus:string;
    private familyMembers:string[];
    private relation:string[];

    constructor(relationshipStatus:string,familyMembers:string[],relation:string[]){
        this.relationshipStatus=relationshipStatus;
        this.familyMembers=familyMembers;
        this.relation=relation;
    } 
}

class AboutMe{
    private workAndEducation:any;
    private livedPlaces:any;
    private contactAndBasicInfo:any;
    private familyAndRelationship:any;

    constructor(workAndEducation:any,livedPlaces:any,contactAndBasicInfo:any,familyAndRelationship:any){
        this.workAndEducation=workAndEducation;
        this.livedPlaces=livedPlaces;
        this.contactAndBasicInfo=contactAndBasicInfo;
        this.familyAndRelationship=familyAndRelationship;
    }

    setFamilyDetails(member:string,relation:string){
        this.familyAndRelationship.familyMembers.unshift(member);
        this.familyAndRelationship.relation.unshift(relation);
    }

    setRelationshipStatus=(relationship:string)=>{
        this.familyAndRelationship.relationshipStatus=relationship;
    }

    getFamilyDetails=()=>{
        if(this.familyAndRelationship.familyMembers.length>0){
            for(let member in this.familyAndRelationship.familyMembers){
                console.log(this.familyAndRelationship.familyMembers[member],"----",this.familyAndRelationship.relation[member])
            }
        }
        else{
            console.log("Family details not available")
        }
        
    }
    
    getRelationshipStatus=()=>{
        console.log("Relationship :",this.familyAndRelationship.relationshipStatus);
    }

    getMobileNumber=()=>{
        console.log("Mobile :",this.contactAndBasicInfo.mobileNumber);
    }

    setMobileNumber=(mobile:number)=>{
        this.contactAndBasicInfo.mobileNumber=mobile;
    }

    getAddress=()=>{
        console.log("Address :",this.contactAndBasicInfo.address);
    }

    setAddress=(address:string)=>{
        this.contactAndBasicInfo.address=address;
    }

    getEmail=()=>{
        console.log("Email :",this.contactAndBasicInfo.email);
    }

    setEmail=(email:string)=>{
        this.contactAndBasicInfo.email=email;
    }

    getGender=()=>{
        console.log("Gender :",this.contactAndBasicInfo.gender);
    }

    setGender=(gender:string)=>{
        this.contactAndBasicInfo.gender=gender;
    }

    getBirthday=()=>{
        console.log("Birthday :",this.contactAndBasicInfo.birthDate);
    }

    setBirthday=(birth:Date)=>{
        this.contactAndBasicInfo.birthDate=birth;
    }

    getAge=()=>{
        let today:Date=new Date();
        let today_year:number=today.getFullYear();
        let today_month:number=today.getMonth();
        let today_day:number=today.getDate();
        let age:number=today_year-this.contactAndBasicInfo.birthDate.getFullYear();
        if ( today_month < (this.contactAndBasicInfo.birthDate.getMonth()- 1))
    {
        age--;
    }
    if (((this.contactAndBasicInfo.birthDate.getMonth() - 1) == today_month) && (today_day < this.contactAndBasicInfo.birthDate.getDate()))
    {
        age--;
    }
        console.log("Age :",age);
    }

    getKnownLanguages=()=>{
        if(this.contactAndBasicInfo.languages.length){
            console.log("Languages Known :")
            for(let x in this.contactAndBasicInfo.languages){
                console.log(this.contactAndBasicInfo.languages[x]);
            }
        }  
    }

    setKnownLanguage=(lang:string)=>{
        this.contactAndBasicInfo.languages.unshift(lang);
    }

    getAllLivedPlaces=()=>{
        if(this.livedPlaces.places.length){
            console.log("All lived places :");
            for(let x in this.livedPlaces.places){
                console.log(this.livedPlaces.places[x]);
            }
        }
    }

    getCurrentPlace=()=>{
        if(this.livedPlaces.places.length){
            console.log("Current place :",this.livedPlaces.places[0]);
        }
    }

    setCurrentPlace=(currentPlace:string)=>{
        this.livedPlaces.places.unshift(currentPlace);
    }

    
    getWorkPlaceDetails=()=>{
        if(this.workAndEducation.workPlace.length){
            console.log("Workplace Details :");
            for(let x in this.workAndEducation.workPlace){
                console.log(this.workAndEducation.workPlace[x]);
            }
        }
    }

    addWorkPlace=(place:string)=>{
        this.workAndEducation.workPlace.unshift(place);
    }

    getCollegeDetails=()=>{
        if(this.workAndEducation.college){
            console.log("College :",this.workAndEducation.college);
        }
    }

    setCollege=(college:string)=>{
        this.workAndEducation.college=college;
    }

    getHighSchoolDetails=()=>{
        if(this.workAndEducation.highSchool){
            console.log("HighSchool :",this.workAndEducation.highSchool);
        }
    }

    setHighSchool=(school:string)=>{
        this.workAndEducation.highSchool=school;
    }
}

let workEdu=new WorkAndEducation(["abc ltd","xyz tech"],"ACE","AMHSS");
let places=new LivedPlaces(["Bangalore","Chennai"]);
let contactInfo=new ContactAndBasicInfo(123456789,"23/A xxx, Bangalore","sXXXX23@gmail.com","male","Aug 18, 1989",["English","Tamil"]);
let family=new FamilyAndRelationship("single",["aaa","bbb","ccc"],["Father","Mother","Brother"]);

let me=new AboutMe(workEdu,places,contactInfo,family);

me.addWorkPlace("zzz pvt ltd");
me.getWorkPlaceDetails();

me.getCollegeDetails();
me.getHighSchoolDetails();

me.getAllLivedPlaces();
me.setCurrentPlace("Mysore");
me.getCurrentPlace();


me.setKnownLanguage("Hindi");
me.getKnownLanguages();

me.getBirthday();
me.getAge();

me.getGender();
me.getEmail();
me.getAddress();
me.getMobileNumber();
me.getRelationshipStatus();

me.setFamilyDetails("ijk","sister");
me.getFamilyDetails();
