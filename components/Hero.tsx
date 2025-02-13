"use client";

export default function Hero() {
  return (
    <section
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/mountain-biker.jpg')" }}
    >
      <h1 className="text-4xl font-bold text-white bg-black bg-opacity-50 p-4 rounded-lg">
        Welcome to Pedal Trekking 🚴‍♂️
      </h1>
    </section>
  );
}
