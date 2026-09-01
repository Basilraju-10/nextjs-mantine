"use client";

import Image from "next/image";

const clients = [
  { image: "/images/clients/BRF.png" },
  { image: "/images/clients/cebu-pacific.png" },
  { image: "/images/clients/client4.png" },
  { image: "/images/clients/client8.png" },
  { image: "/images/clients/e.png" },
  { image: "/images/clients/egyptair.png" },
  { image: "/images/clients/falcon.png" },
  { image: "/images/clients/flynas.jpg" },
  { image: "/images/clients/geo.png" },
  { image: "/images/clients/gmf.png" },
  { image: "/images/clients/gss.png" },
  { image: "/images/clients/gulf-air.png" },
  { image: "/images/clients/indamer.png" },
  { image: "/images/clients/jazeera.jpg" },
  { image: "/images/clients/JCAM.png" },
  { image: "/images/clients/jeju_new.png" },
  { image: "/images/clients/kuwait-airways-1.jpg" },
  { image: "/images/clients/malaysia.png" },
  { image: "/images/clients/nile-air.png" },
  { image: "/images/clients/nok-airlines.jpg" },
  { image: "/images/clients/pal-express.png" },
  { image: "/images/clients/rex.png" },
  { image: "/images/clients/royal-brunei-airlines.jpg" },
  { image: "/images/clients/salam-air.jpg" },
  { image: "/images/clients/sky_angkor.png" },
  { image: "/images/clients/srilankan-airlines.jpg" },
  { image: "/images/clients/uzbekistan_airways.png" },
];

export default function ClientsSection() {
  return (
    <section
      className="overflow-hidden py-8"
      style={{
        backgroundImage: "url('/images/globe.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Heading */}
      <div className="mb-8 text-center">
        <p className="mb-2 text-sm text-gray-700">
          OUR CLIENTS
        </p>

        <h2 className="text-4xl font-semibold">
          <span className="text-[#00b956]">
            Trusted by
          </span>{" "}
          <span className="text-gray-900">
            Companies Across the Globe
          </span>
        </h2>
      </div>

      {/* Moving Logos */}
      <div className="logo-area overflow-hidden">
        <div className="logo-track">
          {/* First set */}
          {clients.map((client, index) => (
            <div
              key={index}
              className="logo-item"
            >
              <Image
                src={client.image}
                alt="Client logo"
                width={140}
                height={60}
                className="object-contain"
              />
            </div>
          ))}

          {/* Duplicate set */}
          {clients.map((client, index) => (
            <div
              key={`repeat-${index}`}
              className="logo-item"
            >
              <Image
                src={client.image}
                alt="Client logo"
                width={140}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .logo-area {
          width: 100%;
        }

        .logo-track {
          display: flex;
          align-items: center;
          width: max-content;
          gap: 40px;
          animation: moveLogos 150s linear infinite;
        }

        .logo-area:hover .logo-track {
          animation-play-state: paused;
        }

        .logo-item {
          width: 140px;
          height: 70px;
          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          background: white;
        }

        @keyframes moveLogos {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .logo-track {
            gap: 20px;
            animation-duration: 150s;
          }

          .logo-item {
            width: 110px;
            height: 60px;
          }
        }
      `}</style>
    </section>
  );
}