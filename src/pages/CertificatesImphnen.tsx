import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Data sertifikat IMPHNEN
const imphnenCertificates = [
  {
    id: 2,
    title: "Sertifikat Kompetensi Kemalasan",
    description:
      "Sertifikat partisipasi pada grup 'Ingin Menjadi Programmer Handal Namun Enggan Ngoding' dari IMPHNEN.",
    image: "/sertifikat_kompetensi_kemalasan.jpg",
    link: "https://raw.githubusercontent.com/MakdumIbrohim/fortofolio/main/public/sertifikat_kompetensi_kemalasan.jpg",
  },
];

const CertificatesImphnen = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <Button
            onClick={() => navigate("/")}
            className="mb-4 bg-portfolio-red-pink text-white border-2 border-portfolio-black hover:bg-portfolio-red-pink/80"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Beranda
          </Button>
          <h1 className="text-4xl font-bold text-center text-portfolio-black mb-4">
            Sertifikat IMPHNEN
          </h1>
          <p className="text-center text-gray-600">
            Daftar sertifikat dari platform IMPHNEN
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {imphnenCertificates.map((certificate) => (
            <div key={certificate.id} className="relative w-full min-h-[450px]">
              <div className="absolute top-2 left-2 w-full h-full bg-background rounded-none border-4 border-portfolio-black"></div>
              <Card
                className="absolute top-0 left-0 w-full h-full border-4 border-portfolio-black rounded-none overflow-hidden bg-portfolio-red-pink
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
                  <CardTitle className="text-xl font-bold text-white mb-2">
                    {certificate.title}
                  </CardTitle>
                  <p className="text-white mb-4">
                    {certificate.description}
                  </p>
                  {certificate.link && (
                    <a
                      href={certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:underline font-semibold"
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

export default CertificatesImphnen;