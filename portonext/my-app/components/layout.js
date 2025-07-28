// components/Layout.js

import Link from "next/link"; // Komponen untuk navigasi antar halaman di Next.js
import Head from "next/head";

// Komponen Layout ini akan menjadi "pembungkus" untuk setiap halaman.
// 'children' adalah properti yang akan berisi konten dari halaman (misalnya, konten dari index.js atau about.js).
export default function Layout({ children, pageTitle }) {
  return (
    <>
      <Head>
        {/* Mengatur judul halaman secara dinamis, dengan judul default jika tidak ada */}
        <title>
          {pageTitle ? `${pageTitle} | Portofolio Saya` : "Portofolio Saya"}
        </title>
        <meta
          name="description"
          content="Website portofolio pribadi yang dibuat menggunakan Next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Container utama yang membungkus seluruh konten halaman */}
      <div className="container mx-auto max-w-4xl p-8 bg-gray-900 text-white min-h-screen flex flex-col">
        {/* Bagian Navigasi */}
        <nav className="flex justify-center gap-8 mb-12">
          <Link
            href="/"
            className="text-lg text-gray-300 hover:text-teal-400 transition-colors"
          >
            Proyek
          </Link>
          <Link
            href="/about"
            className="text-lg text-gray-300 hover:text-teal-400 transition-colors"
          >
            Tentang Saya
          </Link>
        </nav>

        {/* Konten utama dari setiap halaman akan dirender di sini */}
        <div className="flex-grow">{children}</div>

        {/* Bagian Footer untuk informasi kontak (akan muncul di setiap halaman) */}
        <footer
          id="contact"
          className="text-center border-t border-gray-700 pt-8 mt-16"
        >
          <h2 className="text-2xl font-bold mb-4">Hubungi Saya</h2>
          <p className="mb-4">
            Jangan ragu untuk menghubungi saya melalui email atau media sosial.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:emailanda@example.com"
              className="text-teal-400 hover:underline"
            >
              Email
            </a>
            <a
              href="https://github.com/usernameanda"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/danishadriansyah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
