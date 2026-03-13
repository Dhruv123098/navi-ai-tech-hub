import founderImage from "@/assets/founder-ak-rao.png";
import { MessageCircle, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const FounderSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Founder & <span className="text-gradient-cyan">CEO</span>
          </h2>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-card rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center border border-border hover-glow transition-all">
            <div className="flex-shrink-0">
              <img
                src={founderImage}
                alt="A.K. Rao, Founder & CEO"
                className="w-48 h-48 md:w-64 md:h-72 rounded-2xl object-cover object-top shadow-xl mb-4"
                loading="lazy"
              />
              <div className="flex gap-3 justify-center">
                <a
                  href="https://wa.me/918317564643"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
                <a
                  href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-1">
                A.K. Rao
              </h3>
              <p className="text-primary font-medium mb-4">Founder & CEO, Navi AI Technologies</p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                A.K. Rao is the Founder and CEO of Navi AI Technologies, an AI automation company focused on helping businesses transform through intelligent technology solutions. As an Automation Expert, he specializes in designing and implementing advanced systems such as AI agents, chatbots, voice bots, and business automation workflows that improve efficiency, productivity, and customer experience.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3 text-sm">
                Driven by a strong vision for the future of Artificial Intelligence, A.K. Rao is passionate about bridging the gap between education and real-world technology. Through Navi AI Technologies, he is committed to accelerating learning opportunities for students, providing practical AI internship programs, hands-on projects, and industry-focused training that prepare them for modern careers in technology.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3 text-sm">
                His mission is not only to help businesses grow with automation but also to guide students toward the right path in the digital era, empowering them with the skills, knowledge, and real-world experience needed to succeed in the AI-driven future.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderSection;
