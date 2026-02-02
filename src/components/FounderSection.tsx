import founderImage from "@/assets/founder.png";
import { MessageCircle, Linkedin } from "lucide-react";

const FounderSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          Meet Our Brilliant Team
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Led by visionary leadership passionate about AI revolution
        </p>
        <div className="max-w-4xl mx-auto">
          <div className="bg-muted rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-shrink-0">
              <img
                src={founderImage}
                alt="Ankarao K., Founder & CEO"
                className="w-48 h-48 md:w-64 md:h-64 rounded-2xl object-cover shadow-xl mb-4"
              />
              <div className="flex gap-4 justify-center">
                <a
                  href="https://wa.me/918317564642"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
                <a
                  href="https://www.linkedin.com/in/ankarao-kolakaluri-7820823a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                Ankarao K.
              </h3>
              <p className="text-primary font-medium mb-4">Founder & CEO of Navi AI Tech</p>
              <p className="text-muted-foreground leading-relaxed">
                Ankarao K. is a visionary leader driven by a deep passion for the AI revolution and next-generation technology services. With a strong belief that artificial intelligence can reshape businesses and empower individuals, he founded Navi AI Tech to bridge the gap between innovation and practical solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Guided by a mission to transform education and technology through AI, Ankarao K. focuses on delivering intelligent tech services, AI automation, and industry-ready training programs. His commitment to excellence, continuous learning, and future-focused thinking inspires Navi AI Tech to build smarter systems, nurture young talent, and contribute to a world powered by ethical and impactful AI solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
