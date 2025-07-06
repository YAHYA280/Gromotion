"use client";
import { motion } from "framer-motion";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "Gromotion with chronic neck and pain from years of desk work. Their professional yet friendly team created a plan that truly worked. Not only is my pain gone, but I've also learned how to prevent it from coming back.",
      name: "Floris Donnu",
    },
    {
      quote:
        "Een behandeling krijgen bij Gromotion was echt levensveranderend. De deskundige therapeuten ontdekten snel de oorzaak van mijn rugpijn en stelden een persoonlijk plan op dat echt resultaat opleverde. Dankzij hun zorg ben ik nu pijnvrij en kan ik weer doen wat ik het liefste doe.",
      name: "Mark Smit",
    },
    {
      quote:
        "After a sports injury left me sidelined, the team at Gromotion helped me recover faster than I thought possible. Their knowledge, hands-on approach, and constant encouragement made all the difference. I'm now back on the field—stronger and more confident than ever.",
      name: "Laura de Boer",
    },
    {
      quote:
        "The care I received at Gromotion exceeded all expectations. The therapists took the time to listen, assess thoroughly, and explain each step of the process. I felt supported throughout my recovery—and the results speak for themselves.",
      name: "Sandra Gimmek",
    },
    {
      quote:
        "From day one, Gromotion made me feel seen and understood. Their holistic approach to physiotherapy not only eased my pain but improved my overall well-being. I can now enjoy everyday life again without discomfort.",
      name: "Cindy van Dijk",
    },
    {
      quote:
        "I had tried different approaches before finding Gromotion. Their focused, professional programs made real progress in ways I hadn't experienced before. I'm now walking, exercising—something I thought would never be possible again.",
      name: "Bas Scheltema",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">
            Patiënt ervaringen
          </h2>
          <p className="text-gray-600 text-lg">
            Beschikbaar van 9:00 tot 17:00 uur, maandag tot en met vrijdag.
          </p>
        </div>
      </div>

      {/* Full-width scrolling testimonials */}
      <div className="w-full overflow-hidden">
        <div className="space-y-8">
          {/* First Row - Moving Right */}
          <div className="relative overflow-hidden w-full">
            <motion.div
              animate={{ x: ["0%", "-25%"] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex gap-6 min-w-max"
            >
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-[#c8e6a0] p-8 rounded-xl w-96 flex-shrink-0"
                >
                  <div className="text-6xl text-gray-700 mb-4 font-serif leading-none">
                    &quot;
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed text-base">
                    {testimonial.quote}
                  </p>
                  <p className="font-bold text-gray-800 text-lg">
                    {testimonial.name}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Second Row - Moving Left */}
          <div className="relative overflow-hidden w-full">
            <motion.div
              animate={{ x: ["-25%", "0%"] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex gap-6 min-w-max"
            >
              {[
                ...testimonials.slice(3, 6),
                ...testimonials.slice(3, 6),
                ...testimonials.slice(3, 6),
              ].map((testimonial, index) => (
                <div
                  key={`row2-${index}`}
                  className="bg-[#c8e6a0] p-8 rounded-xl w-96 flex-shrink-0"
                >
                  <div className="text-6xl text-gray-700 mb-4 font-serif leading-none">
                    &quot;
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed text-base">
                    {testimonial.quote}
                  </p>
                  <p className="font-bold text-gray-800 text-lg">
                    {testimonial.name}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
