// pages/about.js

import { useState } from "react";
import Image from "next/image";
import Layout from "../components/layout"; // Mengimpor komponen Layout

// Halaman "Tentang Saya"
export default function AboutPage() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skills = [
    {
      name: "HTML",
      description: "HTML adalah tulang punggung dari setiap halaman web...",
    },
    {
      name: "CSS",
      description: "Dengan CSS, saya mendesain tampilan visual website...",
    },
    {
      name: "JavaScript",
      description:
        "JavaScript memungkinkan saya untuk membuat website interaktif...",
    },
    {
      name: "React",
      description:
        "Saya menggunakan React untuk membangun antarmuka pengguna (UI)...",
    },
    {
      name: "Next.js",
      description: "Next.js adalah framework React andalan saya...",
    },
    {
      name: "Tailwind CSS",
      description: "Tailwind CSS mempercepat proses styling saya...",
    },
    {
      name: "Node.js",
      description:
        "Untuk sisi backend, saya memiliki pengalaman menggunakan Node.js...",
    },
  ];

  const handleSkillClick = (skill) => {
    if (selectedSkill && selectedSkill.name === skill.name) {
      setSelectedSkill(null);
    } else {
      setSelectedSkill(skill);
    }
  };

  return (
    // Semua konten dibungkus dengan komponen Layout
    <Layout pageTitle="Tentang Saya">
      {/* Bagian Header / Data Diri */}
      <header className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-2">Tegar Rasyid</h1>{" "}
        {/* Ganti Nama Anda */}
        <p className="text-xl text-gray-400">
          Web Developer | UI/UX Enthusiast
        </p>
        <p className="mt-4 max-w-xl mx-auto">
          Selamat datang di portofolio saya. Saya adalah seorang pengembang web
          dengan fokus pada pembuatan aplikasi yang modern dan fungsional.
        </p>
        <div className="mt-8">
          <Image
            src="/file.svg"
            alt="Foto Profil Tegar Rasyid"
            width={160}
            height={160}
            className="rounded-full mx-auto object-cover shadow-lg border-4 border-gray-700"
          />
        </div>
      </header>

      {/* Konten utama halaman */}
      <main>
        {/* Bagian untuk menampilkan skill Anda */}
        <section id="skills">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Skill & Teknologi
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                onClick={() => handleSkillClick(skill)}
                className={`px-4 py-2 rounded-full text-lg cursor-pointer transition-colors duration-300 ${
                  selectedSkill && selectedSkill.name === skill.name
                    ? "bg-teal-500 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                {skill.name}
              </span>
            ))}
          </div>

          {selectedSkill && (
            <div className="mt-8 p-6 bg-gray-800 rounded-lg shadow-inner text-center animate-fade-in">
              <p className="text-gray-300">{selectedSkill.description}</p>
            </div>
          )}
        </section>
      </main>
    </Layout>
  );
}
