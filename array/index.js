// forEach = untuk melakukan pengulangan didalam array
const array = [1,2,3,4,5,6,7]

array.forEach(item => {
    console.log(item); // Output : 1 2 3 4 5 6 7
});





// filter() = untuk membuat sebuah array baru dengan memperhatikan kondisi tertentu 
//            pada setiap elemn dari array yg sudah ada

const angka = [1,2,3,4,5,6,7]

// membuat array baru dari array angka yg isinya adalah bilangan habis dibagi dua
const filteredArray = angka.filter(item => item % 2 === 0 );
console.log(filteredArray) // Output [ 2,4,6,8]




// map() = untuk membuat array baru sambil mengecek/melakukan oprasi terhadap setiap elemen erray
const angka1 = [1,2,3,4,5,6,7]

// membuat array baru dari array angka1 untuk memeriksa apakah elemen bernilai habis dibagi 2
const mapedArray = angka1.map(item => item % 2 === 0);
console.log (mapedArray); // Output [false,true,false,true,false,true,false,true,false,true,false]

// membuat array baru dari array angka1 untuk melakukan perkalian 2 pada setiap elemenya
const multipleOfTwo = angka1.map(e => e * 2);
console.log(multipleOfTwo); // Output [2,4,6,8,10,12,14]




// includes() = untuk mengecek apakah pada elemen memenuhi suatu kondisi atau tidak
const angka2 = [1,2,3,4,5,6,7]

const something = angka2.includes(2);
const any = angka2.includes(10);

console.log(something); // Output : False
console.log(any); // Output : True



// some() = untuk mengecek sekurang kurangnya salahsatu elemen array memenuhi kondisi
const angka3 = [1,2,3,4,5,6,7]

// mengecek apakah dalam array angka3 terdapat elemen yg habis dibagi 2
const some = angka3.some(item => item % 2);
console.log(some); // Output : True

// mengecek apakah dalam array angka3 terdapat nilai yg kuarang dari 0
const thing = angka3.some(item => item < 0);

console.log(thing); // Output : false




// every() = untuk mengecek apakah setiap elemen dalam array memenuhi kondisi
const angka4 = [1,2,3,4,5,6,7]

// mengecek apakah semua elemen lebih dari 5
const greaterFive = angka4.every(item => item > 4);
console.log(greaterFive); // Output : false

// mengecek apakah semua elemen kurang dari 10
const lessTen = angka4.every(item => item < 10);
console.log(lessTen);




// reduce() = untuk mereduce elemen array menjadi single value dengan menjumlah setiap elemen (dari kiri ke kanan)
const angka5 = [1,2,3,4,5,6,7]

const sum = angka5.reduce((total, value) => total + value, 0); // kita dapat mengganti angka 0 dengan angka lain untuk mendapatkan hasil penjumlahan yang berbeda
console.log(sum); // Output: 15




// sort() = untuk mengurutkan elemen pada array baik secara ascending atau descending
const angka6 = [20,10,3,30,58,42,6,9]
const huruf = ['z','a','c','g','p']

// ascending order
const descOrder = angka6.sort((a, b) => a > b ? 1 : -1);
console.log(descOrder); // Output [3,6,9,10,20,30,42,58]

const ascOrder = huruf.sort((a,b) => a > b ? -1 : 1);
console.log(ascOrder); // Output ['z', 'p', 'q', 'c', 'a']




// concat() = untuk menggabungkan 2 array menjadi 1 array
const fruits = ['appel', 'banana', 'mango']
const number = [1,2,3]

const newArray = fruits.concat(number);
console.log(newArray); // Output : ['apel', 'banana', 'mango', 1, 2, 3]




// Array.of() = untuk membuat array dari setiap argumen yg di passing
const angka7 = Array.of(1,2,3,5,6);
console.log(angka7); // Output : [1,2,3,4,5,6,7]