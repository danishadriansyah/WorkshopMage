// pages/index.js

import Layout from "../components/layout"; // Mengimpor komponen Layout

// Halaman Utama yang menampilkan Proyek
export default function ProjectsPage() {
  // Data proyek tetap di sini
  const projects = [
    {
      title: "Proyek A",
      description: "Deskripsi singkat tentang proyek A...",
      link: "#",
    },
    {
      title: "Proyek B",
      description: "Deskripsi singkat tentang proyek B...",
      link: "#",
    },
    {
      title: "Proyek C",
      description: "Deskripsi singkat tentang proyek C...",
      link: "#",
    },
    {
      title: "Proyek D",
      description: "Deskripsi singkat tentang proyek D...",
      link: "#",
    },
  ];

  return (
    // Semua konten dibungkus dengan komponen Layout
    <Layout pageTitle="Proyek">
      {/* Konten utama halaman */}
      <main>
        {/* Bagian untuk menampilkan proyek-proyek Anda */}
        <section id="projects">
          <h2 className="text-3xl font-bold mb-8 text-center">Proyek Saya</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
              >
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="text-teal-400 hover:underline"
                >
                  Lihat Detail &rarr;
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
