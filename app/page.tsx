export default function Home() {
  type WaterLevel = {
    id: number;
    level: number;
    time: string;
  };
  return (
    <main className="p-24">
      <h1>Water levels</h1>
    </main>
  );
}
