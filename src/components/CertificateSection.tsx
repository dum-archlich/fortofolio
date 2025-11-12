import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

// Data platform sertifikat
const certificatePlatforms = [
  {
    id: "dicoding",
    name: "Dicoding",
    description: "Platform pembelajaran teknologi terdepan di Indonesia",
    color: "bg-portfolio-teal",
    count: 4,
    path: "/certificates/dicoding",
  },
  {
    id: "hacktiv8",
    name: "Hacktiv8",
    description: "Bootcamp programming intensif untuk developer profesional",
    color: "bg-portfolio-yellow",
    count: 0,
    path: "/certificates/hacktiv8",
  },
  {
    id: "imphnen",
    name: "IMPHNEN",
    description: "Komunitas programmer yang unik dan inspiratif",
    color: "bg-portfolio-red-pink",
    count: 1,
    path: "/certificates/imphnen",
  },
];

const CertificateSection = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-background py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-portfolio-black mb-12">
          My Certificates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificatePlatforms.map((platform) => (
            <div key={platform.id} className="relative w-full min-h-[300px]">
              <div className="absolute top-2 left-2 w-full h-full bg-background rounded-none border-4 border-portfolio-black"></div>
              <Card
                className={`absolute top-0 left-0 w-full h-full border-4 border-portfolio-black rounded-none overflow-hidden ${platform.color}
                           transition-transform duration-100 ease-out transform hover:translate-x-2 hover:translate-y-2 shadow-none cursor-pointer`}
                onClick={() => navigate(platform.path)}
              >
                <CardHeader className="p-6">
                  <CardTitle className="text-2xl font-bold text-white mb-2">
                    {platform.name}
                  </CardTitle>
                  <p className="text-white/90 mb-4">
                    {platform.description}
                  </p>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-white">
                      {platform.count} Sertifikat
                    </span>
                    <span className="text-sm text-white/70">
                      Klik untuk melihat
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;