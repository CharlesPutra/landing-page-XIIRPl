import Footer from "@/component/footer";
import Navbar from "@/component/navbar";

export default function About() {
    return (
        <>
        <Navbar></Navbar>
       <div className="pt-24 pb-20 bg-gradient-to-br from-blue-50 via-white to-yellow-50 min-h-screen">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-700">
          Tentang XII RPL
        </h1>
        <p className="text-lg text-gray-700 mt-3 max-w-2xl mx-auto">
          Rekayasa Perangkat Lunak (RPL) adalah jurusan yang berfokus pada
          pengembangan aplikasi, teknologi, dan inovasi digital.
        </p>
      </div>

      {/* Grid section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">

        {/* Box 1 */}
        <div className="bg-white/80 backdrop-blur shadow-lg rounded-2xl p-8 border border-blue-100 hover:shadow-xl transition">
          <h2 className="text-2xl font-bold text-blue-600 mb-3">
            Apa itu RPL?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            RPL (Rekayasa Perangkat Lunak) adalah bidang yang mempelajari cara
            merancang, membuat, dan mengembangkan perangkat lunak. Mulai dari
            website, aplikasi mobile, game, sistem informasi, hingga teknologi
            berbasis AI.
          </p>
        </div>

        {/* Box 2 */}
        <div className="bg-white/80 backdrop-blur shadow-lg rounded-2xl p-8 border border-blue-100 hover:shadow-xl transition">
          <h2 className="text-2xl font-bold text-blue-600 mb-3">
            Fokus Pembelajaran
          </h2>
          <ul className="text-gray-700 space-y-2">
            <li>• Pemrograman (JavaScript, PHP, Python, dsb)</li>
            <li>• Pembuatan Website & Aplikasi</li>
            <li>• Database & API</li>
            <li>• UI/UX & Desain Interface</li>
            <li>• Game Development</li>
            <li>• Version Control (Git & GitHub)</li>
          </ul>
        </div>

        {/* Box 3 */}
        <div className="bg-white/80 backdrop-blur shadow-lg rounded-2xl p-8 border border-blue-100 hover:shadow-xl transition">
          <h2 className="text-2xl font-bold text-blue-600 mb-3">
            Kenapa Harus RPL?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Dunia digital berkembang pesat. Lulusan RPL memiliki banyak peluang
            karena hampir semua industri membutuhkan teknologi digital—mulai dari
            e-commerce, perbankan, startup, hingga industri game.
          </p>
        </div>

        {/* Box 4 */}
        <div className="bg-white/80 backdrop-blur shadow-lg rounded-2xl p-8 border border-blue-100 hover:shadow-xl transition">
          <h2 className="text-2xl font-bold text-blue-600 mb-3">
            Skill yang Kamu Dapatkan
          </h2>
          <ul className="text-gray-700 space-y-2">
            <li>• Problem Solving</li>
            <li>• Critical Thinking</li>
            <li>• Kolaborasi & Teamwork</li>
            <li>• Pengembangan Software</li>
            <li>• Pengetahuan Industri IT</li>
          </ul>
        </div>

      </div>

      {/* Quote Section */}
      <div className="max-w-4xl mx-auto mt-16 p-6">
        <div className="bg-blue-600 text-white rounded-2xl shadow-lg p-10 text-center">
          <p className="text-2xl md:text-3xl font-semibold">
            “Di RPL, kita tidak hanya belajar membuat kode, tapi juga membangun masa depan.”
          </p>
        </div>
      </div>

    </div>
      <Footer></Footer>
      </>
    )
}