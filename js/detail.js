
// =========================
// DATA DETAIL PROYEK
// =========================

const projectDetails = {
    "susunkatabot": {
        title: "SusunKataBot",
        category: "Python Programming",
        image: "assets/img/project1.png",
        description: `
            <h2>Tentang Proyek</h2>
            <p>
                SusunKataBot merupakan permainan menyusun huruf menjadi
                sebuah kata yang dikembangkan menggunakan Python dan
                Telegram Bot. Permainan ini dapat digunakan melalui
                percakapan pribadi maupun grup Telegram.
            </p>

            <h2>Fitur Utama</h2>
            <ul>
                <li>Permainan tebak dan susun kata.</li>
                <li>Kategori kata untuk membantu permainan.</li>
                <li>Sistem poin dan streak.</li>
                <li>Informasi skor dan leaderboard.</li>
            </ul>
        `
    },

    "blackcoffee": {
        title: "Website BlackCoffee",
        category: "Web Development",
        image: "assets/img/project2.png",
        description: `
            <h2>Tentang Proyek</h2>
            <p>
                BlackCoffee merupakan website pengelolaan menu kopi
                yang menampilkan informasi menu dan stok dalam
                sebuah dashboard.
            </p>

            <h2>Fitur yang Ditampilkan</h2>
            <ul>
                <li>Dashboard ringkasan data menu.</li>
                <li>Daftar menu beserta kategori, harga, dan stok.</li>
                <li>Navigasi untuk pengelolaan data menu.</li>
            </ul>
        `
    },

    "style-cowo-ganteng": {
        title: "Website Style Cowo Ganteng",
        category: "Web Development",
        image: "assets/img/project3.png",
        description: `
            <h2>Tentang Proyek</h2>
            <p>
                Style Cowo Ganteng merupakan website bertema fashion
                pria yang menampilkan informasi toko dan pilihan
                produk dengan tampilan sederhana.
            </p>

            <h2>Konten Website</h2>
            <ul>
                <li>Menu navigasi website.</li>
                <li>Bagian sambutan dan pengenalan toko.</li>
                <li>Informasi produk dan keunggulan toko.</li>
            </ul>
        `
    },

    // =========================
    // HOME SERVER NEXTCLOUD
    // =========================

    "home-server-nextcloud": {
        title: "Home Server Kami",
        category: "System Administration",
        image: "assets/img/project4.png",
        description: `
            <h2>Tentang Proyek</h2>
            <p>
                Home Server Kami merupakan proyek pengembangan
                infrastruktur server berbasis Ubuntu Server 22.04
                yang dikerjakan secara berkelompok bersama
                Ani, Devi, Tasya, dan Winda.
            </p>

            <p>
                Proyek ini mengintegrasikan beberapa layanan
                untuk membangun lingkungan home server,
                meliputi Docker, Nginx, Nextcloud, Tailscale,
                dan Samba.
            </p>

            <h2>Teknologi yang Digunakan</h2>
            <ul>
                <li>Ubuntu Server 22.04 sebagai sistem operasi server.</li>
                <li>Docker untuk lingkungan layanan berbasis container.</li>
                <li>Nginx sebagai web server.</li>
                <li>Nextcloud sebagai layanan penyimpanan dan pengelolaan file.</li>
                <li>Tailscale untuk konektivitas jaringan privat.</li>
                <li>Samba untuk berbagi file dalam jaringan.</li>
            </ul>

            <h2>Tujuan Proyek</h2>
            <p>
                Mempelajari konfigurasi dan integrasi berbagai
                layanan server serta memahami penerapan
                administrasi sistem dan jaringan dalam
                lingkungan home server.
            </p>

            <h2>Kolaborasi Tim</h2>
            <p>
                Proyek ini dikerjakan secara berkelompok
                bersama Ani, Devi, Tasya, dan Winda.
            </p>
        `
    }
};


// =========================
// MENAMPILKAN DETAIL PROYEK
// =========================

const params = new URLSearchParams(window.location.search);
const projectId = params.get("id");
const project = projectDetails[projectId];

const titleElement = document.getElementById("project-title");
const categoryElement = document.getElementById("project-category");
const imageElement = document.getElementById("project-image");
const descriptionElement = document.getElementById("project-description");

if (titleElement && categoryElement && imageElement && descriptionElement) {
    if (project) {
        document.title = `${project.title} | Ani Rahmatika`;

        titleElement.textContent = project.title;
        categoryElement.textContent = project.category;

        imageElement.src = project.image;
        imageElement.alt = `Tampilan ${project.title}`;
        imageElement.loading = "lazy";

        imageElement.addEventListener("error", function () {
            imageElement.hidden = true;
        });

        descriptionElement.innerHTML = project.description;
    } else {
        document.title = "Proyek Tidak Ditemukan | Ani Rahmatika";

        titleElement.textContent = "Proyek Tidak Ditemukan";
        categoryElement.textContent = "Informasi Proyek";

        imageElement.hidden = true;

        descriptionElement.textContent =
            "Maaf, informasi proyek yang kamu cari tidak tersedia. Silakan kembali ke halaman portfolio.";
    }
}
