class Calculator{
  add(a,b){
    return a + b;
  }
  minus(a,b){
    return a - b;
  }
  sum(a,b){
    return a * b;
  }

}

describe('calculate addition',function(){
var calculate = new Calculator();
it('Penambahan',function(){
  //console.log('Saya sudah menambahkan angka bersama');
  //console.log(calculate.add(1,3));
  expect(calculate.add(1,3)).toBe(4);
  expect(calculate.add(1,3)).not.toBe(5);
   //expect(calculate.add(1,3)).toEquel(4);
   expect(calculate.add(1,3)).toBeLessThan(5);
   expect(calculate.add(1,3)).toBeGreaterThan(3);
  expect(calculate.add(1,3)).not.toBeLessThan(3);
  // expect(calculate.add(1,3)).not.toBeGreaterThan(5);
});

it('Pengurangan',function(){
  //console.log('Saya sudah menggunakan perkalian angka bersama');
  //console.log(calculate.minus(5,4));
    expect(calculate.minus(6,4)).toBe(2);
});

it('Perkalian',function(){
  expect(calculate.sum(3,4)).toBe(12);
});

});
