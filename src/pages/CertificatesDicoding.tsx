import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Data sertifikat Dicoding
const dicodingCertificates = [
  {
    id: 1,
    title: "Belajar Dasar Pemrograman JavaScript",
    description:
      "Sertifikat kelulusan dari Dicoding Indonesia untuk kelas Belajar Dasar Pemrograman JavaScript.",
    image: "/sertifikat_dicoding_js_dasar.png",
    link: "https://raw.githubusercontent.com/MakdumIbrohim/fortofolio/main/public/sertifikat_dicoding_js_dasar.png",
  },
  {
    id: 3,
    title: "Belajar Dasar Pemrograman Web",
    description:
      "Sertifikat kelulusan untuk kelas Belajar Dasar Pemrograman Web.",
    image: "/sertifikat_belajar_dasar_pemrograman_web.png",
    link: "https://raw.githubusercontent.com/MakdumIbrohim/fortofolio/main/public/sertifikat_belajar_dasar_pemrograman_web.png",
  },
  {
    id: 4,
    title: "Belajar Membuat Front-End Web untuk Pemula",
    description:
      "Sertifikat kelulusan dari Dicoding Indonesia untuk kelas Belajar Membuat Front-End Web untuk Pemula.",
    image: "/sertifikat_belajar_membuat_front-end_web_untuk_pemula.png",
    link: "https://raw.githubusercontent.com/MakdumIbrohim/fortofolio/main/public/sertifikat_belajar_membuat_front-end_web_untuk_pemula.png",
  },
  {
    id: 5,
    title: "Memulai Pemrograman Dengan Dart",
    description:
      "Sertifikat kelulusan dari Dicoding Indonesia untuk kelas Memulai Pemrograman Dengan Dart.",
    image: "/sertifikat_memulai_pemrograman_dart.png",
    link: "https://raw.githubusercontent.com/MakdumIbrohim/fortofolio/main/public/sertifikat_memulai_pemrograman_dart.png",
  },
];

const CertificatesDicoding = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <Button
            onClick={() => navigate("/")}
            className="mb-4 bg-portfolio-teal text-portfolio-black border-2 border-portfolio-black hover:bg-portfolio-teal/80"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Beranda
          </Button>
          <h1 className="text-4xl font-bold text-center text-portfolio-black mb-4">
            Sertifikat Dicoding
          </h1>
          <p className="text-center text-gray-600">
            Daftar lengkap sertifikat dari platform Dicoding Indonesia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dicodingCertificates.map((certificate) => (
            <div key={certificate.id} className="relative w-full min-h-[450px]">
              <div className="absolute top-2 left-2 w-full h-full bg-background rounded-none border-4 border-portfolio-black"></div>
              <Card
                className="absolute top-0 left-0 w-full h-full border-4 border-portfolio-black rounded-none overflow-hidden bg-portfolio-teal
                           transition-transform duration-100 ease-out transform hover:translate-x-2 hover:translate-y-2 shadow-none"
              >
                <CardHeader className="p-0">
                  <AspectRatio ratio={16 / 9}>
                    {certificate.image ? (
                      <img
                        src={certificate.image}
                        alt={certificate.title}
                        className="object-cover w-full h-full border-b-4 border-portfolio-black"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full bg-gray-200 text-gray-500 text-xl font-semibold border-b-4 border-portfolio-black">
                        Certificate Placeholder {certificate.id}
                      </div>
                    )}
                  </AspectRatio>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl font-bold text-card-text-dark-mode mb-2">
                    {certificate.title}
                  </CardTitle>
                  <p className="text-card-text-dark-mode mb-4">
                    {certificate.description}
                  </p>
                  {certificate.link && (
                    <a
                      href={certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-portfolio-purple-link hover:underline font-semibold"
                    >
                      View Certificate
                    </a>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificatesDicoding;