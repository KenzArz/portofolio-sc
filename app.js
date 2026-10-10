// console.log("Ini Pesan External");

// 1. Variable
// let int = 20;
// console.log(int);

// int = 21;
// console.log(int);

// const nama = "Aldi";
// console.log(nama);

// nama = "Budi";
// console.log(nama);

// 2. Tipe Data
// const nama = "Aldi Wijaya"; // String
// const umur = 20; // Number
// const sudahLulus = false; // Boolean
// // 0,      1,    2
// const skill = ["HTML", "CSS", "JS"]; // Array
// const profil = {
// 	// Object
// 	nama: "Aldi",
// 	umur: 20,
// 	skill: ["HTML", "CSS"],
// };

// console.log(umur);
// console.log(skill[2]);
// console.log(profil.nama);

// 3. Operator
// 3.1 Aritmatika
// const gaji_suami = 3_000_000;
// const gaji_istri = 10_000_000;

// const pengeluaran_bulanan = 7_500_000;

// const total_gaji = gaji_istri + gaji_suami;

// console.log(total_gaji);
// console.log(total_gaji - pengeluaran_bulanan);
// 3.2 Perbandingan
// const angkaS = "5";
// const angkaD = 5;

// console.log(angkaS == angkaD); //true (ga ngecek tipe data)
// console.log(angkaS === angkaD); //false (ngecek tiipe data)

// console.log(angkaS != angkaD);
// console.log(angkaS !== angkaD);

// const gaji_suami = 3_000_000;
// const gaji_istri = 10_000_000;

// const gaji_suami_double = gaji_suami * 2;
// const gaji_istri_half = gaji_istri / 2;

// console.log(gaji_suami_double > gaji_istri_half);

// 3.3 Logika
// const umur = 18;
// const sudahTerdaftarUnsika = true;

// console.log(umur >= 18 && sudahTerdaftarUnsika);

// const hari = "sabtu";
// console.log(!(hari === "sabtu" || hari === "minggu"));

// 4. percabangan
// if,else, else if
// const nilai = 74;

// if (nilai >= 90) {
// 	console.log("Nilai A");
// } else if (nilai >= 75) {
// 	console.log("Nilai B");
// } else if (nilai >= 60) {
// 	console.log("Nilai C");
// } else {
// 	console.log("Nilai D");
// }

// // switch
// const hari = "Senin";

// switch (hari) {
// 	case "Senin":
// 		console.log("Awal minggu, semangat!");
// 		break;
// 	case "Jumat":
// 		console.log("Akhir pekan sebentar lagi!");
// 		break;
// 	default:
// 		console.log("Selamat beraktivitas!");
// }

// 5. Function
function hitungGaji(gajiSuami, gajiIstri) {
	console.log(gajiSuami + gajiIstri);
}

hitungGaji(15_000_000, 7_000_000); // Keluarga A
hitungGaji(1_000_000, 20_000_000); // keluarga B

function tampilkanPesan(pesan) {
	console.log(pesan);
}

tampilkanPesan("Saya adalah Hacker"); //console.log("Saya adalah Hacker")
tampilkanPesan("Saya Suka makan seblak");
