// 1 СПОСОБ  ===============================================================================

// const getUsersWithFriend = (users, friendName) => {
//   return users.flatMap(user => {
//     const arr = [];
//     for (const friend of user.friends) {
//       if (friend === friendName) {
//           arr.push(user);
//           }
//     };
//     return arr;
//   })
// };

// 2 СПОСОБ  ===============================================================================

const getUsersWithFriend = (users, friendName) => {
  return users.reduce((arr, user) => {
      if (user.friends.includes(friendName)) {
        arr.push(user);
      }
      return arr;
    }, []);
};

// 3 СПОСОБ  ===============================================================================


// const getUsersWithFriend = (users, friendName) => {
//   return users.filter(user => user.friends.includes(friendName))
// };


// 4 СПОСОБ ЭТОТ ===========================================================================

// const getUsersWithFriend = (users, friendName) => {
//   return users.flatMap(user => {
//     const arr = [];

//      user.friends.forEach(friend => {
//       if (friend === friendName) {
//         arr.push(user);
//        }
       
//      })
//     return arr;
//   })};

// 5 СПОСОБ  ===============================================================================

// const getUsersWithFriend = (users, friendName) => {
//   return users.filter(user => {
//     let hasFriend = false;

//     user.friends.forEach(fr => {
//       if (fr === friendName) {
//         hasFriend = true;
//       }
//     });
//     return hasFriend;
//   });
// };

const allUsers = [
  {
    name: "Moore Hensley",
    friends: ["Sharron Pace"]
  },
  {
    name: "Sharlene Bush",
    friends: ["Briana Decker", "Sharron Pace"]
  },
  {
    name: "Ross Vazquez",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"]
  },
  {
    name: "Elma Head",
    friends: ["Goldie Gentry", "Aisha Tran"]
  },
  {
    name: "Carey Barr",
    friends: ["Jordan Sampson", "Eddie Strong"]
  },
  {
    name: "Blackburn Dotson",
    friends: ["Jacklyn Lucas", "Linda Chapman"]
  },
  {
    name: "Sheree Anthony",
    friends: ["Goldie Gentry", "Briana Decker"]
  }
];



console.log(getUsersWithFriend(allUsers, "Briana Decker")); 
// [
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ]

console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
// [
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ]

console.log(getUsersWithFriend(allUsers, "Adrian Cross" )); // []
