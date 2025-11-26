"use client";
import Image from "next/image";

interface CardAnggotaProps {
  nama: string;
  posisi?: string; // opsional (ketua, wakil, dll)
  foto: string;
}

export default function CardAnggota({ nama, posisi, foto }: CardAnggotaProps) {
  return (
    <div className="bg-white shadow-md rounded-xl p-5 text-center hover:shadow-lg transition-all duration-300 border border-gray-100">
      <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-4 border-4 border-blue-200">
        <Image
          src={foto}
          alt={nama}
          width={200}
          height={200}
          className="object-cover w-full h-full"
        />
      </div>

      <h3 className="text-lg font-bold text-blue-700">{nama}</h3>
      {posisi && <p className="text-sm text-gray-600 mt-1">{posisi}</p>}
    </div>
  );
}
