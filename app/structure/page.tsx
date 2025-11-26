import Footer from "@/component/footer";
import Navbar from "@/component/navbar";
import ScheduleCard from "@/component/Schedule/ScheduleCard";
import scheduleData from "@/component/Schedule/scheduleData";
import PiketCard from "@/component/Piket/PiketCard";
import piketData from "@/component/Piket/piketData";
import CardAnggota from "@/component/CardAnggota";
import Image from "next/image";

export default function Structure() {
    return (
        <>
            <Navbar></Navbar>
            <div className="min-h-screen bg-blue-50 text-gray-800">
                {/* Hero / Visi Misi */}
                <section className="pt-28 pb-20 bg-gradient-to-b from-blue-50 via-white to-blue-50">
                    <div className="max-w-4xl mx-auto text-center px-6">
                        <h1 className="text-4xl font-extrabold text-blue-700 mb-4 drop-shadow">Visi & Misi RPL</h1>
                        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
                            Menjadi generasi digital yang unggul, kreatif, dan siap membangun masa depan melalui teknologi.
                        </p>
                        <div className="grid md:grid-cols-2 gap-8 mt-10">
                            <div className="p-6 bg-white rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition">
                                <h2 className="text-2xl font-bold text-blue-600 mb-3">✨ Visi</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    Mewujudkan siswa RPL yang berkarakter, inovatif, dan kompeten dalam dunia teknologi informasi sehingga mampu bersaing di era digital.
                                </p>
                            </div>
                            <div className="p-6 bg-white rounded-2xl shadow-lg border border-yellow-100 hover:shadow-xl transition">
                                <h2 className="text-2xl font-bold text-yellow-600 mb-3">🎯 Misi</h2>
                                <ul className="text-gray-700 space-y-3 text-left">
                                    <li>• Mengembangkan kemampuan coding dan problem-solving.</li>
                                    <li>• Mendorong kreativitas melalui project berbasis teknologi.</li>
                                    <li>• Menanamkan sikap profesional, disiplin, dan kerjasama tim.</li>
                                    <li>• Menghasilkan lulusan yang siap kerja maupun siap berwirausaha di bidang IT.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Wali Kelas Section */}
                <section className="py-20 bg-white text-gray-800">
                    <div className="max-w-6xl mx-auto text-center px-6">
                        <h2 className="text-4xl font-extrabold text-blue-600 mb-6">
                            Wali Kelas XII RPL
                        </h2>

                        <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
                            Sosok yang selalu membimbing, mendukung, dan menjadi penghubung penting antara siswa dan sekolah.
                        </p>

                        {/* Grid Card Wali Kelas */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">

                            {/* Card 1 */}
                            <div className="bg-blue-50 rounded-2xl shadow-lg p-8 border border-blue-100">
                                <div className="flex flex-col items-center">

                                    <div className="w-40 h-40 rounded-full overflow-hidden shadow-md mb-6 border-4 border-blue-200">
                                        <Image src="/img/pak idin.jpg" width={400} height={400} alt="Wali Kelas" className="w-full h-full object-cover" />
                                    </div>

                                    <h3 className="text-2xl font-bold text-blue-700">Samsul Muhyidin</h3>
                                    <p className="text-gray-600 mt-2">Wali Kelas XII RPL</p>

                                    <p className="mt-4 text-gray-700 leading-relaxed text-center">
                                        Beliau adalah pembimbing yang selalu mendukung perkembangan siswa, baik dalam akademik
                                        maupun karakter. Dengan ketegasan dan kehangatan, beliau membantu membentuk lingkungan
                                        belajar yang sehat dan produktif.
                                    </p>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-blue-50 rounded-2xl shadow-lg p-8 border border-blue-100">
                                <div className="flex flex-col items-center">

                                    <div className="w-40 h-40 rounded-full overflow-hidden shadow-md mb-6 border-4 border-blue-200">
                                        <Image src="/img/bu retno.jpg" width={400} height={400} alt="Wali Kelas" className="w-full h-full object-cover" />
                                    </div>

                                    <h3 className="text-2xl font-bold text-blue-700">Retno Handayani,SE,MM</h3>
                                    <p className="text-gray-600 mt-2">Wali Kelas XII RPL</p>

                                    <p className="mt-4 text-gray-700 leading-relaxed text-center">
                                        Beliau adalah pembimbing yang selalu mendukung perkembangan siswa, baik dalam akademik
                                        maupun karakter. Dengan ketegasan dan kehangatan, beliau membantu membentuk lingkungan
                                        belajar yang sehat dan produktif.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="py-20 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-6">

                        {/* Title */}
                        <h1 className="text-4xl font-extrabold text-blue-700 text-center mb-10">
                            Struktur Pengurus Kelas XII RPL <br />
                            <span className="text-xl text-gray-600">Tahun Pelajaran 2025/2026</span>
                        </h1>

                        {/* Pengurus Inti */}
                        <h2 className="text-3xl font-bold text-blue-600 mt-10 mb-6">Pengurus Inti</h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                            {[
                                { jab: "Ketua Kelas", nama: "Andre Dwi Saputra", foto: "/img/andre dwi.jpg" },
                                { jab: "Wakil Ketua", nama: "Mohamad Yakin Nur Rohman", foto: "/img/wakil.jpg" },
                                { jab: "Sekretaris I", nama: "Sherlyana Salsabila Putri Anwar", foto: "/img/sherky.jpg" },
                                { jab: "Sekretaris II", nama: "Arinda Chelsa Aulia", foto: "/img/arinda.jpg" },
                                { jab: "Bendahara I", nama: "Sherin Angelika Sigtiamarta", foto: "/img/bendahara1.jpg" },
                                { jab: "Bendahara II", nama: "Adelia Nur Fatmawati", foto: "/img/adel.jpg" },
                                { jab: "Koordinator Piket", nama: "Fabian Vigo Hardiansyah", foto: "/img/fabian.jpg" },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-white shadow-md border border-blue-100 rounded-xl p-6 hover:shadow-xl transition-all text-center"
                                >
                                    {/* Foto Pengurus */}
                                    <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-blue-200 shadow mb-4">
                                        <img
                                            src={item.foto}
                                            alt={item.nama}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <h3 className="text-lg font-bold text-blue-700">{item.jab}</h3>
                                    <p className="text-gray-700 mt-1">{item.nama}</p>
                                </div>
                            ))}
                        </div>


                        {/* SEKSI-SEKSI */}
                        <h2 className="text-3xl font-bold text-blue-600 mt-14 mb-6">Seksi – Seksi</h2>

                        {/* List data */}
                        <div className="space-y-10">

                            {/* 1. Keimanan */}
                            <div>
                                <h3 className="text-2xl font-bold text-blue-500 mb-4">
                                    1. Seksi Keimanan & Kekeluargaan
                                </h3>
                                <ul className="bg-white p-6 border border-blue-100 rounded-xl shadow-sm space-y-1">
                                    {[
                                        "Raihan Rousyanul Fikri",
                                        "Refanza Andra Putra Pujana",
                                        "Reganza Andre Putra Pujana",
                                        "Ayob Saputra",
                                        "Ela Dwi Purwati",
                                        "Siti Nurhazizah Sarah",
                                    ].map((n, i) => (
                                        <li key={i} className="text-gray-700">• {n}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* 2. Kedisiplinan */}
                            <div>
                                <h3 className="text-2xl font-bold text-blue-500 mb-4">
                                    2. Seksi Kedisiplinan & Kerapian
                                </h3>
                                <ul className="bg-white p-6 border border-blue-100 rounded-xl shadow-sm space-y-1">
                                    {[
                                        "Charles Agustian Putra",
                                        "Faiz Arya Nafiza",
                                        "Aldo Algifari",
                                        "Ghio Pramana Ainuri",
                                        "Fyto Surya Pratama",
                                        "Raihan Rousyanul Fikri",
                                    ].map((n, i) => (
                                        <li key={i} className="text-gray-700">• {n}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* 3. Kebersihan */}
                            <div>
                                <h3 className="text-2xl font-bold text-blue-500 mb-4">
                                    3. Seksi Kebersihan & Keindahan
                                </h3>
                                <ul className="bg-white p-6 border border-blue-100 rounded-xl shadow-sm space-y-1">
                                    {[
                                        "Sherin Angelika Sigtiamarta",
                                        "Adelia Nur Fatmawati",
                                        "Sherlyana Salsabila Putri Anwar",
                                        "Arinda Chelsa Aulia",
                                        "Faiz Arya Nafiza",
                                    ].map((n, i) => (
                                        <li key={i} className="text-gray-700">• {n}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* 4. Keamanan */}
                            <div>
                                <h3 className="text-2xl font-bold text-blue-500 mb-4">
                                    4. Seksi Keamanan & Ketertiban
                                </h3>
                                <ul className="bg-white p-6 border border-blue-100 rounded-xl shadow-sm space-y-1">
                                    {[
                                        "Faiz Arya Nafiza",
                                        "Ghio Pramana Ainuri",
                                        "Fabian Vigo Hardiansyah",
                                        "Fyto Surya Pratama",
                                        "Fito Rehanes Firmansyah",
                                    ].map((n, i) => (
                                        <li key={i} className="text-gray-700">• {n}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="py-20 bg-blue-50 min-h-screen">
                    <h1 className="text-center text-4xl font-extrabold text-blue-600 mb-12">
                        Jadwal Pelajaran XII RPL
                    </h1>

                    <div className="flex flex-wrap justify-center gap-8 px-6">
                        {scheduleData.map((item, index) => (
                            <ScheduleCard
                                key={index}
                                day={item.day}
                                subjects={item.subjects}
                            />
                        ))}
                    </div>
                </section>

                <section className="py-20 bg-blue-50 min-h-screen">
                    <h1 className="text-center text-4xl font-extrabold text-blue-600 mb-12">
                        Jadwal Piket Kelas XII RPL
                    </h1>

                    <div className="flex flex-wrap justify-center gap-8 px-6">
                        {piketData.map((item, index) => (
                            <PiketCard
                                key={index}
                                day={item.day}
                                students={item.students}
                            />
                        ))}
                    </div>
                </section>


                <section className="py-20 bg-blue-50">
                    <div className="max-w-6xl mx-auto text-center px-6">
                        <h2 className="text-4xl font-extrabold text-blue-600 mb-3">
                            Anggota Kelas XII RPL
                        </h2>
                        <p className="text-gray-600 mb-10">
                            Berikut adalah seluruh anggota kelas yang luar biasa!
                        </p>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                            <CardAnggota
                                nama="CharlesPutra"
                                posisi="Pengoding"
                                foto="/img/cahrles.jpg"
                            />

                            <CardAnggota
                                nama="Reganza"
                                foto="/img/andre.jpg"
                            />

                            <CardAnggota
                                nama="Fabian"
                                foto="/img/fabian.jpg"
                            />

                            <CardAnggota
                                nama="Faiz"
                                foto="/img/faiz.jpg"
                            />
                            <CardAnggota
                                nama="Ayub"
                                foto="/img/ayub.jpg"
                            />
                            <CardAnggota
                                nama="Sherly"
                                foto="/img/sherky.jpg"
                            />
                            <CardAnggota
                                nama="Firman"
                                foto="/img/firman.jpg"
                            />
                            <CardAnggota
                                nama="Andre Dwi"
                                foto="/img/andre dwi.jpg"
                            />
                            <CardAnggota
                                nama="Asti"
                                foto="/img/asti.jpg"
                            />
                            <CardAnggota
                                nama="Fany"
                                foto="/img/fany.jpg"
                            />
                            <CardAnggota
                                nama="Ferdi"
                                foto="/img/ferdi.jpg"
                            />
                            <CardAnggota
                                nama="Meldya"
                                foto="/img/meldya.jpg"
                            />
                            <CardAnggota
                                nama="Elsiana"
                                foto="/img/elsiana kaka.jpg"
                            />
                            <CardAnggota
                                nama="Alma"
                                foto="/img/alma.jpg"
                            />
                            <CardAnggota
                                nama="Helena"
                                foto="/img/helena.jpg"
                            />
                            <CardAnggota
                                nama="Andra"
                                foto="/img/andra.jpg"
                            />
                            <CardAnggota
                                nama="Ela"
                                foto="/img/ela.jpg"
                            />
                            <CardAnggota
                                nama="Aldo"
                                foto="/img/aldo.jpg"
                            />
                            <CardAnggota
                                nama="Farel"
                                foto="/img/farel.jpg"
                            />
                            <CardAnggota
                                nama="Fatur"
                                foto="/img/fatur.jpg"
                            />
                            <CardAnggota
                                nama="Azizah"
                                foto="/img/ajijah.jpg"
                            />
                            <CardAnggota
                                nama="Arinda"
                                foto="/img/arinda.jpg"
                            />
                            <CardAnggota
                                nama="Adel"
                                foto="/img/adel.jpg"
                            />
                            <CardAnggota
                                nama="Apliana"
                                foto="/img/apliana.jpg"
                            />
                            <CardAnggota
                                nama="Vito"
                                foto="/img/vito.jpg"
                            />


                            {/* Tambah anggota lain cukup panggil satu baris:
              <CardAnggota nama="..." foto="/img/...jpg" /> 
          */}
                        </div>
                    </div>
                </section>
            </div>
            <Footer></Footer>
        </>
    )
}