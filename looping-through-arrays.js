//利用迴圈在array裡每個都加上s

const pets = ['cat', 'dog', 'rat'] 
for (let i = 0; i < 3; i++) {
    // 總共有3個item
    pets[i] = pets[i] + 's' 
  }

console.log(pets)