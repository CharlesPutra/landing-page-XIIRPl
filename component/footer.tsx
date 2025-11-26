export default function Footer() {
  return (
    <div>

      <footer className="w-full bg-[#0A122A] text-white pt-14 pb-6">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-yellow-400 mb-3">XII RPL</h2>
            <p className="text-gray-300 leading-relaxed">
              Kelas Rekayasa Perangkat Lunak yang berfokus pada pengembangan
              teknologi, inovasi digital, dan kreativitas tanpa batas.
            </p>
          </div>

          {/* Navigasi */}
          <div>
            <h3 className="text-xl font-semibold text-yellow-400 mb-3">Navigasi</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/" className="hover:text-yellow-300">Home</a></li>
              <li><a href="/about" className="hover:text-yellow-300">About</a></li>
              <li><a href="/structure" className="hover:text-yellow-300">Structure</a></li>
              <li><a href="/contact" className="hover:text-yellow-300">Contact</a></li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="text-xl font-semibold text-yellow-400 mb-3">Hubungi Kami</h3>
            <ul className="space-y-2 text-gray-300">
              <li>SMK — Rekayasa Perangkat Lunak</li>
              <li>Email: rpl@class.com</li>
              <li>Tiktok: @rpl_Hype17</li>
            </ul>
          </div>

        </div>

        <p className="text-center text-gray-500 text-sm mt-10">
          © {new Date().getFullYear()} XII RPL — All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
