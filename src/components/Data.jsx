const array = [];
let n = 12;

for (let i = 0; i < n; i++) {
  const data = {
    id: i + 1,
    year: 2000 + i,
    usergain:  50 + Math.floor(Math.random() * Math.random() * 10000),
    userlost: 30 + Math.floor(Math.random() * Math.random() * Math.random() * 10000),
  };
  array.push(data);
}

export const UserData = array;

// export const UserData = [
//     {
//         id: 1,
//         year: 2019,
//         usergain:233,
//         userlost:293
//     },
//     {
//         id: 2,
//         year: 2008,
//         usergain:1234,
//         userlost:2934
//     },
//     {
//         id: 3,
//         year: 2019,
//         usergain:793,
//         userlost:934
//     },
//     {
//         id: 4,
//         year: 2015,
//         usergain:547,
//         userlost:234
//     },
//     {
//         id: 5,
//         year: 2003,
//         usergain:2393,
//         userlost:2934
//     }

// ]