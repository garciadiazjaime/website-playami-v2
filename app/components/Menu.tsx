import Link from "next/link";

export default function Menu(props: { slug: string }) {
  const getMenuActiveItem = (value: string) => {
    if (value === props.slug) {
      return { fontWeight: "bold", borderBottom: "4px solid #000" };
    }

    return {};
  };

  return (
    <nav
      style={{
        borderBottom: "1px solid #ccc",
        background: "white",
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          fontSize: 16,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Link
          href="/"
          style={{ padding: "24px 12px", ...getMenuActiveItem("home") }}
        >
          Playami
        </Link>
        <Link
          href="/playas-tijuana/restaurantes"
          style={{ padding: "24px 12px", ...getMenuActiveItem("restaurantes") }}
        >
          Restaurantes
        </Link>
        <Link
          href="/playas-tijuana/cafes"
          style={{ padding: "24px 12px", ...getMenuActiveItem("cafes") }}
        >
          Cafés
        </Link>
        <Link
          href="/playas-tijuana/bares"
          style={{ padding: "24px 12px", ...getMenuActiveItem("bares") }}
        >
          Bares
        </Link>
      </div>
    </nav>
  );
}
