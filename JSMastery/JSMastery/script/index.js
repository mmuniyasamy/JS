function User() {
    var firstName;
    var lastName;

    function login(fname, lname) {
        firstName = fname;
        lastName = lname;
    }

    function printLoginDetails() {
        console.log(firstName);
        console.log(lastName);
    };

    var loginPublicAPI = {
        doLogin: login,
        printDetails: printLoginDetails
    }

    return loginPublicAPI;
}

muthu = User();
muthu.doLogin("Muthukumar", "Muniyasamy");
muthu.printDetails();

venky = new User();
muthu.doLogin("Venky", "Pablo");
muthu.printDetails();
