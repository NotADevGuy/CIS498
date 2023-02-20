// This .js section is for the landing page in specific.

var Container = document.getElementById("carContainer");
var carClasses = document.getElementsByClassName("car");

var cars = [
    {
        ind: 0,
        name:"Mustang",
        text: "Named for a World War II fighter plane, the Mustang was one of the first vehicles that came to be known as a “pony car.” Ford sold more than 400,000 Mustangs within its first year of production, far exceeding sales expectations. The Mustang was conceived as a “working man's Thunderbird,” according to Ford.",
    },
    {
        ind: 1,
        name:"Civic",
        text: "Overall, the Honda Civic has an excellent reputation in the car universe. It's one of the most reliable choices out there and is affordable to maintain if you do run into trouble. The resale value is also excellent, so you have reliability on the money you can make back if you decide to sell it.",
    },
    {
        ind: 3,
        name:"Camaro",
        text: "In addition to being an incredibly popular consumer model, the Camaro also bears a name for being a racing legend. The Indianapolis 500 has chosen the Camaro a total of eight times since its release in 1966, and in 2002, the Camaro locked up the rights as pace car for the Indy 500 race",
    },
    {
        ind: 4,
        name:"Challenger",
        text: "The Dodge Challenger is a good sports car. A bevy of thrilling engine options provides great acceleration, culminating in some of the most powerful models you can currently buy. The infotainment system is user-friendly, and there's ample passenger and trunk space.",
    },
];


var showCar = function (ind) {
    let c = cars[parseInt(ind)];
    // Container.innerHTML = "<p>" + c.text + "</p>";
    document.getElementById("carContainer").innerHTML = "<h3>" + c.name + "</h3>" + "<p>" + c.text + "</p>";

};

// This .js section is for registration page in specific.

if (document.title == "Registration") {
    var firstNameInput = document.getElementById("firstName");
    firstNameInput.addEventListener("keydown", (e) => {
        if (e.key >= "0" && e.key <= "9") {
            e.preventDefault();
        }
    });

    var lastNameInput = document.getElementById("lastName");
    lastNameInput.addEventListener("keydown", (e) => {
        if (e.key >= "0" && e.key <= "9") {
            e.preventDefault();
        }
    });

    var form = document.getElementById("regForm");
    form.addEventListener("submit", (e) => {
        let valid = Validate();
        if (!valid) e.preventDefault();
    });

    var UserName = document.getElementById("userName");
    var pwd = document.getElementById("pwd");

    function Validate() {
        var bUser = validateUser();
        var bPwd = validatePwd();

        if (bUser || bPwd) {
            let text = bUser != null ? bUser : "";
            text += "\n";
            text += bPwd != null ? bPwd : "";
            alert("Invalid Username or Password\n" + text);
            return false;
        } else {
            alert("Registration Complete");
            return true;
        }
    }

    function validateUser() {
        var letters = UserName.value.split("");
        console.log(letters);
        var bVal = "";

        for (let i = 0; i < letters.length; i++) {
            if (letters[i] === " ") {
                bVal = "UserName cannot contain spaces!";
                return bVal;
            }
        }

        var uRegex = /(?:[a-z]|[A-Z])/g;
        if (!letters[0].match(uRegex)) {
            bVal = "UserName cannot begin with special character or number!";
            return bVal;
        }

        return null;
    }

    function validatePwd() {
        var pwdChar = pwd.value.split("");
        var bVal = "";
        if (!(pwdChar.length >= 10)) {
            bVal = "Password must be 10 Characters or more!";
            return bVal;
        }

        var upper = /[A-Z]/g;
        if (!pwd.value.match(upper)) {
            bVal = "Password must contain an UpperCase Letter";
            return bVal;
        }

        var lower = /[a-z]/g;
        if (!pwd.value.match(lower)) {
            bVal = "Password must contain a LowerCase Letter";
            return bVal;
        }

        var digit = /[0-9]/g;
        if (!pwd.value.match(digit)) {
            bVal = "Password must contain at least one digit";
            return bVal;
        }

        return null;
    }
}
// This last bit of .js is for the login page

if (document.title == "Login") {
    var form2 = document.getElementById("loginForm");
    form2.addEventListener("submit", (e) => {
        let valid = Validate();
        if (!valid) e.preventDefault();
    });

    var UserNameLogin = document.getElementById("userNameLogin");
    var pwdLogin = document.getElementById("pwdLogin");

    function Validate() {
        var bUser = validateUser();
        var bPwd = validatePwd();

        if (bUser || bPwd) {
            let text = bUser != null ? bUser : "";
            text += "\n";
            text += bPwd != null ? bPwd : "";
            alert("Invalid Username or Password\n" + text);
            return false;
        } else {
            alert("Login Complete");
            return true;
        }
    }

    function validateUser() {
        var letters = UserNameLogin.value.split("");
        console.log(letters);
        var bVal = "";

        for (let i = 0; i < letters.length; i++) {
            if (letters[i] === " ") {
                bVal = "UserName cannot contain spaces!";
                return bVal;
            }
        }

        var uRegex = /(?:[a-z]|[A-Z])/g;
        if (!letters[0].match(uRegex)) {
            bVal = "UserName cannot begin with special character or number!";
            return bVal;
        }

        return null;
    }

    function validatePwd() {
        var pwdChar = pwdLogin.value.split("");
        var bVal = "";
        if (!(pwdChar.length >= 10)) {
            bVal = "Password must be 10 Characters or more!";
            return bVal;
        }

        var upper = /[A-Z]/g;
        if (!pwdLogin.value.match(upper)) {
            bVal = "Password must contain an UpperCase Letter";
            return bVal;
        }

        var lower = /[a-z]/g;
        if (!pwdLogin.value.match(lower)) {
            bVal = "Password must contain a LowerCase Letter";
            return bVal;
        }

        var digit = /[0-9]/g;
        if (!pwdLogin.value.match(digit)) {
            bVal = "Password must contain at least one digit";
            return bVal;
        }

        return null;
    }
}