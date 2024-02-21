const {default: TestRunner} = require("jest-runner");

const addfive = require(`./addfive`);

test('returns num + 5', () =>{
    expect(addfive(1)).toBe(6);
  
})

test('returns num + 5', () =>{
    expect(addfive(2)).toBe(7);
  
})

test('returns num + 5', () =>{
    expect(addfive(3)).toBe(6);
  
}

)