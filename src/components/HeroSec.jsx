export default function HeroSection() {
  return (
    <section className=" min-h-90vh flex items-center justify-center px-6">
      <div className=" max-w-4xl text-center space-y-6">
        <h1 className=" text-5xl md:text-6xl tracking-tight text-[#1f1f1f] ">
          Hi, I'm <span className="text-[#6c86ab] uppercase">Sashank AB!</span>
        </h1>
        <p className=" text-lg md:text-xl text-gray-600 leading-relaxed">
          Frontend Developer crafting clean, scalable and interactive web
          experiences. Welcome to my personal space.
        </p>
      </div>
    </section>
  );
}
