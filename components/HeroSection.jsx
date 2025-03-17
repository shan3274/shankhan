import Link from "next/link";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let lines = [];

    class Line {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.length = Math.random() * 60 + 60; // 🔹 Slightly longer lines
        this.angle = Math.random() * Math.PI * 2;
        this.speed = (Math.random() - 0.5) * 1.5;
        this.color = `hsl(${Math.random() * 360}, 100%, 70%)`;
      }

      draw() {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(
          this.x + Math.cos(this.angle) * this.length,
          this.y + Math.sin(this.angle) * this.length
        );
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;

        if (this.x < 0 || this.x > width) this.angle = Math.PI - this.angle;
        if (this.y < 0 || this.y > height) this.angle = -this.angle;

        this.draw();
      }
    }

    function init() {
      lines = [];
      for (let i = 0; i < 30; i++) {
        // 🔹 Reduced from 50 to 30 lines for a cleaner look
        lines.push(new Line());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      lines.forEach((line) => line.update());
      requestAnimationFrame(animate);
    }

    init();
    animate();

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      init();
    });
  }, []);

  return (
    <section className="relative bg-white text-gray-900 h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      {/* 🔹 Background Animation Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full"
      ></canvas>

      {/* 🔹 Hero Content */}
      <div className="relative z-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
          Hi, I'm <span className="text-blue-600">Shan Khan</span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-2xl">
          Passionate <span className="font-bold">Web & App Developer</span> with{" "}
          <span className="font-bold">3+ years</span> of experience in building{" "}
          scalable and high-performance digital solutions.
        </p>

        {/* 🔹 Tech Stack (Badges) */}
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {["React.js", "Next.js", "Java", "Spring Boot", "Tailwind CSS"].map(
            (tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-100 text-gray-900 text-sm rounded-md shadow"
              >
                {tech}
              </span>
            )
          )}
        </div>

        {/* 🔹 Centered Call-To-Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
          <Link
            href="/hire-me"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
          >
            Hire Me
          </Link>
          <Link
            href="/projects"
            className="border border-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
          >
            View Work
          </Link>
        </div>

        {/* 🔹 Small Fun Fact / Stats */}
        <p className="mt-6 text-gray-500 text-sm">
          🚀 50+ Projects Completed | ⭐ Trusted by 20+ Clients
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
