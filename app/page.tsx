import Menu from "@/app/components/Menu";
import Container from "@/app/Container";
import places from "@/app/places";



export default function Home() {
  const randomPlaceIndex = Math.floor(Math.random() * places.length);

  return (
    <div>
      <Menu slug="home" />

      <Container selectedIndex={randomPlaceIndex} />
    </div>
  );
}
