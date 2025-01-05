import Image from "next/image";
import { getMetadata } from "@/app/support";

export default function Cover(props: { slug: string }) {
  const metadata = getMetadata(props.slug);

  return (
    <section>
      <div style={{ position: "relative" }}>
        <Image
          src="/playas-tijuana/cover.jpg"
          width={400}
          height={400}
          style={{
            width: "100%",
            height: "auto",
            maxHeight: 600,
            objectFit: "cover",
          }}
          alt="Valle de Guadalupe"
        />
        <div
          style={{
            width: "100%",
            height: 600,
            background: "black",
            position: "absolute",
            left: 0,
            top: 0,
            opacity: 0.7,
          }}
        ></div>
        <div
          style={{
            padding: 12,
            color: "white",
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
          }}
        >
          <div
            style={{
              margin: "auto",
              maxWidth: 600,
            }}
          >
            <h1
              style={{
                fontSize: 36,
                fontFamily: "sans-serif",
                fontWeight: 500,
              }}
            >
              {metadata.title as string}
            </h1>
            <h2
              style={{
                marginTop: 20,
                fontFamily: "sans-serif",
                fontWeight: 400,
                fontSize: 30,
              }}
            >
              Playas de Tijuana
            </h2>
          </div>
        </div>
      </div>

      <div
        style={{
          fontSize: 20,
          fontFamily: "serif",
          opacity: 0.7,
          margin: "20px auto",
          maxWidth: 600,
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        <p>
          Playas de Tijuana es un destino ideal para los amantes de la gastronomía. Con una gran variedad de restaurantes, esta zona ofrece desde mariscos frescos hasta cocina internacional, todo en un ambiente vibrante y acogedor.
        </p>
        <p>
          Los restaurantes aquí se distinguen por su enfoque en ingredientes frescos y locales. Tanto si buscas una cena elegante como un lugar informal para disfrutar de tacos y cervezas, Playas de Tijuana tiene algo que ofrecer para todos los gustos.
        </p>
        <p>
          Además de los restaurantes, la zona cuenta con numerosos cafés encantadores. Son perfectos para disfrutar de un buen café en una tarde relajada, creando una experiencia única que combina lo mejor de la cultura local y la gastronomía.
        </p>
      </div>
    </section>
  );
}
