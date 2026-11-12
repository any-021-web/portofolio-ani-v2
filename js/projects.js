
const projects = [
    {
        id: "susunkatabot",
        title: "SusunKataBot",
        category: "Python Programming",
        image: "assets/img/project1.png",
        description: "Permainan menyusun kata berbasis Telegram Bot yang dikembangkan menggunakan Python."
    },
    {
        id: "blackcoffee",
        title: "Website BlackCoffee",
        category: "Web Development",
        image: "assets/img/project2.png",
        description: "Website BlackCoffee untuk menampilkan dan mengelola informasi menu kopi."
    },
    {
        id: "style-cowo-ganteng",
        title: "Website Style Cowo Ganteng",
        category: "Web Development",
        image: "assets/img/project3.png",
        description: "Website bertema fashion pria dengan tampilan informasi produk."
    },
    {
        id: "home-server-nextcloud",
        title: "Home Server Kami",
        category: "System Administration",
        image: "assets/img/project4.png",
    description: "Proyek pengembangan home server berbasis Ubuntu Server 22.04 secara berkelompok dengan memanfaatkan Docker, Nginx, Nextcloud, Tailscale, dan Samba."
}
];

const projectContainer = document.getElementById("project-container");

if (projectContainer) {
    projectContainer.innerHTML = projects.map(project => `
        <article class="project-card">
            <img
                src="${project.image}"
                alt="Tampilan ${project.title}"
                loading="lazy"
                onerror="this.alt='Gambar proyek tidak ditemukan';"
            >

            <div class="project-info">
                <span class="project-category">
                    ${project.category}
                </span>

                <h3>${project.title}</h3>

                <p>${project.description}</p>

                <a
                    href="project.html?id=${project.id}"
                    class="project-link"
                >
                    Lihat Detail →
                </a>
            </div>
        </article>
    `).join("");
}
