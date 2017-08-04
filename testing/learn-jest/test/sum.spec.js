var sum =require('../src/js/sum');

test('adding 1+2 =3',()=>{
    expect(sum(3, 2)).toBe(3);
})