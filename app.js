var database = [
    {
      id: 1,
      username: "Tolulope",
      password: "Supersecret"
    },
    {
      id: 2,
      username: "Wisdom",
      password: "Mesa"

    },
    {
      id: 3,
      username: "Alex",
      password:"123G"
    },
    {
      id: 4,
      username: "Micheal",
      password: "Gemini"
    },
    {
      id: 5,
      username : "Mr Grinch",
      password :"Lover"
    },
    {
      id: 6,
      username: "Johnson",
      password: "email"

    },
    {
      id: 7,
      username: "Justin",
      password: "DIV"
    },
    {
      id: 8,
      username: "Addison",
      password: "remi"

    },
    {
      id: 9,
      username: "Subway",
      password: 3455
    },
    {
      id: 10,
      username: "Molue",
      password : 234568
    },
    {
      id: 11,
      username : "Meda",
      password: "true"
    }
];

var newsfeed = [
    {
      id: 1,
      username: "Bobby",
      password: "Why am I getting errors in my console"
    },
    {
      id: 2,
      username : "Amaya",
      password: "Javascript so cool!!!, wanna practice em all day"
    },
    {
      id: 3,
      username:"Sally",
      password: "Hmmm,Should I pci up a framework or build mine ?"
    },
    {
      id: 4,
      username: "May",
      password: "DOM and BOM, two side shows"
    }
];

var usernamePrompt = prompt("Please enter your username");
var passwordPrompt = prompt("Enter password:");



function isuserValid(user, pass) {
  for (var i = 0; i < database.length; i++) {
        if (user === database[i].username && pass === database[i].password) {
          return true;
      }
  }
  return false;
}



function signIn(user,pass) {
    if (isuserValid(user, pass)) {
        console.log(newsfeed);
    } else {
      alert("Wrong username and password")
    }

  }

//   if (user === database[0].username && pass === database[0].password) {
//   console.log(newsfeed);
// } else {
//   alert("Wrong username and password")
// }



signIn(usernamePrompt,passwordPrompt);
