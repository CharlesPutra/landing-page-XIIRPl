import Footer from "@/component/footer";
import Navbar from "@/component/navbar";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-900 text-white">
        {/* /* Hero Section */}
        <section className="flex flex-col lg:flex-row items-center justify-between px-6 pt-40 pb-24 max-w-7xl mx-auto">
          {/* Text */}
          <div className="text-left flex-1 mb-10 lg:mb-0">
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-xl leading-tight">
              Selamat Datang di <span className="text-yellow-300">XII RPL</span>
            </h1>
            <p className="text-lg max-w-xl opacity-90 mb-8">
              Generasi muda berbakat di bidang teknologi, siap membangun masa depan dengan kreativitas,
              inovasi, dan keterampilan digital tingkat lanjut.
            </p>


            <button className="bg-yellow-300 text-blue-900 font-bold px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition transform">
              Jelajahi Sekarang
            </button>
          </div>


          {/* Hero Image */}
          <div className="flex-1 flex justify-center">
            <Image
              src="/img/logo rpl.jpg"
              alt="Hero Illustration"
              width={400}        // bebas mau berapa
              height={400}
              className="w-80 lg:w-96 drop-shadow-2xl object-contain"
            />
          </div>

        </section>


        {/* About Section */}
        <section className="bg-white text-gray-900 py-20 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold mb-4">Tentang XII RPL</h2>
            <p className="text-lg opacity-80 max-w-3xl mx-auto">
              XII RPL adalah kelas yang berfokus pada pengembangan perangkat lunak, mulai dari
              pemrograman, desain UI/UX, pengembangan web, mobile, hingga manajemen proyek IT.
            </p>
          </div>
        </section>


        {/* Features */}
        <section className="py-20 px-6 bg-gray-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
              Keunggulan Kami
            </h2>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  title: "Skill Coding",
                  desc: "Menguasai HTML, CSS, JavaScript, PHP, Laravel, React, Next.js dan masih banyak lagi.",
                },
                {
                  title: "Kerja Tim Solid",
                  desc: "Kami bekerja bersama sebagai tim untuk menyelesaikan project kelas dengan profesional.",
                },
                {
                  title: "Siap Dunia Kerja",
                  desc: "Memiliki pengalaman project yang mempersiapkan untuk dunia industri IT.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-8 rounded-2xl shadow-xl text-center hover:scale-105 transition transform"
                >
                  <h3 className="text-2xl font-bold mb-2 text-blue-700">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <section className="py-24 bg-blue-700 text-center px-6">
          <h2 className="text-4xl font-extrabold mb-4">Siap Mengenal Kami Lebih Dekat?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Kunjungi project, portofolio, dan karya siswa kelas XII RPL.
          </p>
          <button className="bg-white text-blue-700 px-8 py-3 font-semibold rounded-xl shadow-lg hover:scale-105 transition">
            Lihat Portofolio
          </button>
        </section>


        {/* Footer */}
      </div>
      <Footer></Footer>
    </>
  );
}
