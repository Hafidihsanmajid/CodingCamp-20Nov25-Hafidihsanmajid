welcomeMessage();
function welcomeMessage(){
    let userName = prompt('please enter your name');
    document.getElementById('Welcome-speech').innerText ='Selamat Datang Di PT. Hafara, ' +userName+'!';
    // console.log("welcome," +userName+"!"); 
    
}


//message
    document.getElementById("contactForm").addEventListener("submit", function(e) {
        e.preventDefault();

        let nama = document.getElementById("nama").value.trim();
        let email = document.getElementById("email").value.trim();
        let telp = document.getElementById("telp").value.trim();
        let pesan = document.getElementById("pesan").value.trim();

        // VALIDASI
        if (nama === "") {
            alert("Nama tidak boleh kosong!");
            return;
        }
        if (email === "") {
            alert("Email tidak boleh kosong!");
            return;
        }
        if (!email.includes("@") || !email.includes(".")) {
            alert("Format email tidak valid!");
            return;
        }  if (telp === "") {
            alert("No telp tidak boleh kosong!");
            return;
        }
        if (pesan === "") {
            alert("Pesan tidak boleh kosong!");
            return;
        }

        // TAMPILKAN NILAI DI TABEL
        document.getElementById("hasilNama").innerText = nama;
        document.getElementById("hasilEmail").innerText = email;
        document.getElementById("hasiltelp").innerText = telp;
        document.getElementById("hasilPesan").innerText = pesan;

        document.getElementById("hasilTable").style.display = "table";

        // RESET FORM
        document.getElementById("contactForm").reset();
    });

    //konfirmasi tabel kosong
    const form = document.getElementById("hasilTable");
        const tbody = document.getElementById("tbody");

        form.addEventListener("submit", function (event) {
            event.preventDefault();

            let nama = document.getElementById("nama").value.trim();
            let email = document.getElementById("email").value.trim();
            let telp = document.getElementById("telp").value.trim();
            let pesan = document.getElementById("pesan").value.trim();

            // Jika semua input kosong → tetap tabel kosong
            if (nama === "" && email === "" && telp === "" && pesan === "") {
                return;
            }

            // Hapus baris "Belum ada data" jika ada
            const emptyRow = document.querySelector(".empty");
            if (emptyRow) {
                emptyRow.remove();
            }

            // Tambah baris baru
            let row = `<tr>
                        <td>${nama}</td>
                        <td>${email}</td>
                        <td>${telp}</td>
                        <td>${pesan}</td>
                       </tr>`;
            tbody.innerHTML += row;

            // Reset form
            form.reset();
        });
