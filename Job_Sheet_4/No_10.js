{
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Masukkan kalimat pertama: ", (kalimat1) => {
        rl.question("Masukkan kalimat kedua: ", (kalimat2) => {
            // Menggabungkan kalimat1 dan kalimat2 menggunakan method concat()
            const kalimatGabungan = kalimat1.concat(kalimat2);
            console.log(`Hasil penggabungan: ${kalimatGabungan}`);
            rl.close();
        });
    });
}

"Penggabungan kata menjadi: Makanan favorite saya adalah indomie"