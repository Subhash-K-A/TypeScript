//Facebook About Page Classes
var WorkAndEducation = /** @class */ (function () {
    function WorkAndEducation(workPlace, college, highSchool) {
        this.workPlace = workPlace;
        this.college = college;
        this.highSchool = highSchool;
    }
    return WorkAndEducation;
}());
var LivedPlaces = /** @class */ (function () {
    function LivedPlaces(places) {
        this.places = places;
    }
    return LivedPlaces;
}());
var ContactAndBasicInfo = /** @class */ (function () {
    function ContactAndBasicInfo(mobileNumber, address, email, gender, birthDate, languages) {
        this.mobileNumber = mobileNumber;
        this.address = address;
        this.email = email;
        this.gender = gender;
        this.birthDate = new Date(birthDate);
        this.languages = languages;
    }
    return ContactAndBasicInfo;
}());
var FamilyAndRelationship = /** @class */ (function () {
    function FamilyAndRelationship(relationshipStatus, familyMembers, relation) {
        this.relationshipStatus = relationshipStatus;
        this.familyMembers = familyMembers;
        this.relation = relation;
    }
    return FamilyAndRelationship;
}());
var AboutMe = /** @class */ (function () {
    function AboutMe(workAndEducation, livedPlaces, contactAndBasicInfo, familyAndRelationship) {
        var _this = this;
        this.setRelationshipStatus = function (relationship) {
            _this.familyAndRelationship.relationshipStatus = relationship;
        };
        this.getFamilyDetails = function () {
            if (_this.familyAndRelationship.familyMembers.length > 0) {
                for (var member in _this.familyAndRelationship.familyMembers) {
                    console.log(_this.familyAndRelationship.familyMembers[member], "----", _this.familyAndRelationship.relation[member]);
                }
            }
            else {
                console.log("Family details not available");
            }
        };
        this.getRelationshipStatus = function () {
            console.log("Relationship :", _this.familyAndRelationship.relationshipStatus);
        };
        this.getMobileNumber = function () {
            console.log("Mobile :", _this.contactAndBasicInfo.mobileNumber);
        };
        this.setMobileNumber = function (mobile) {
            _this.contactAndBasicInfo.mobileNumber = mobile;
        };
        this.getAddress = function () {
            console.log("Address :", _this.contactAndBasicInfo.address);
        };
        this.setAddress = function (address) {
            _this.contactAndBasicInfo.address = address;
        };
        this.getEmail = function () {
            console.log("Email :", _this.contactAndBasicInfo.email);
        };
        this.setEmail = function (email) {
            _this.contactAndBasicInfo.email = email;
        };
        this.getGender = function () {
            console.log("Gender :", _this.contactAndBasicInfo.gender);
        };
        this.setGender = function (gender) {
            _this.contactAndBasicInfo.gender = gender;
        };
        this.getBirthday = function () {
            console.log("Birthday :", _this.contactAndBasicInfo.birthDate);
        };
        this.setBirthday = function (birth) {
            _this.contactAndBasicInfo.birthDate = birth;
        };
        this.getAge = function () {
            var today = new Date();
            var today_year = today.getFullYear();
            var today_month = today.getMonth();
            var today_day = today.getDate();
            var age = today_year - _this.contactAndBasicInfo.birthDate.getFullYear();
            if (today_month < (_this.contactAndBasicInfo.birthDate.getMonth() - 1)) {
                age--;
            }
            if (((_this.contactAndBasicInfo.birthDate.getMonth() - 1) == today_month) && (today_day < _this.contactAndBasicInfo.birthDate.getDate())) {
                age--;
            }
            console.log("Age :", age);
        };
        this.getKnownLanguages = function () {
            if (_this.contactAndBasicInfo.languages.length) {
                console.log("Languages Known :");
                for (var x in _this.contactAndBasicInfo.languages) {
                    console.log(_this.contactAndBasicInfo.languages[x]);
                }
            }
        };
        this.setKnownLanguage = function (lang) {
            _this.contactAndBasicInfo.languages.unshift(lang);
        };
        this.getAllLivedPlaces = function () {
            if (_this.livedPlaces.places.length) {
                console.log("All lived places :");
                for (var x in _this.livedPlaces.places) {
                    console.log(_this.livedPlaces.places[x]);
                }
            }
        };
        this.getCurrentPlace = function () {
            if (_this.livedPlaces.places.length) {
                console.log("Current place :", _this.livedPlaces.places[0]);
            }
        };
        this.setCurrentPlace = function (currentPlace) {
            _this.livedPlaces.places.unshift(currentPlace);
        };
        this.getWorkPlaceDetails = function () {
            if (_this.workAndEducation.workPlace.length) {
                console.log("Workplace Details :");
                for (var x in _this.workAndEducation.workPlace) {
                    console.log(_this.workAndEducation.workPlace[x]);
                }
            }
        };
        this.addWorkPlace = function (place) {
            _this.workAndEducation.workPlace.unshift(place);
        };
        this.getCollegeDetails = function () {
            if (_this.workAndEducation.college) {
                console.log("College :", _this.workAndEducation.college);
            }
        };
        this.setCollege = function (college) {
            _this.workAndEducation.college = college;
        };
        this.getHighSchoolDetails = function () {
            if (_this.workAndEducation.highSchool) {
                console.log("HighSchool :", _this.workAndEducation.highSchool);
            }
        };
        this.setHighSchool = function (school) {
            _this.workAndEducation.highSchool = school;
        };
        this.workAndEducation = workAndEducation;
        this.livedPlaces = livedPlaces;
        this.contactAndBasicInfo = contactAndBasicInfo;
        this.familyAndRelationship = familyAndRelationship;
    }
    AboutMe.prototype.setFamilyDetails = function (member, relation) {
        this.familyAndRelationship.familyMembers.unshift(member);
        this.familyAndRelationship.relation.unshift(relation);
    };
    return AboutMe;
}());
var workEdu = new WorkAndEducation(["abc ltd", "xyz tech"], "ACE", "AMHSS");
var places = new LivedPlaces(["Bangalore", "Chennai"]);
var contactInfo = new ContactAndBasicInfo(123456789, "23/A xxx, Bangalore", "sXXXX23@gmail.com", "male", "Aug 18, 1989", ["English", "Tamil"]);
var family = new FamilyAndRelationship("single", ["aaa", "bbb", "ccc"], ["Father", "Mother", "Brother"]);
var me = new AboutMe(workEdu, places, contactInfo, family);
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
me.setFamilyDetails("ijk", "sister");
me.getFamilyDetails();
