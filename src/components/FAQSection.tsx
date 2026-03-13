import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "What is AI automation?", a: "AI automation uses artificial intelligence to perform tasks that typically require human intelligence. This includes chatbots, voice bots, data analysis, workflow automation, and more — helping businesses save time, reduce costs, and improve efficiency." },
  { q: "How long does AI implementation take?", a: "Depending on the complexity, most AI solutions can be deployed within 2-6 weeks. Simple chatbots can be live in as little as 1 week, while complex automation workflows may take 4-8 weeks." },
  { q: "Do we need technical knowledge to use AI solutions?", a: "No! Our solutions are designed to be user-friendly. We handle all the technical setup and provide training so your team can use the AI tools with confidence." },
  { q: "Can AI integrate with existing CRM/WhatsApp?", a: "Absolutely! We specialize in integrating AI with popular platforms including WhatsApp, CRMs (Salesforce, HubSpot, Zoho), ERPs, email systems, and more." },
  { q: "Which industries benefit from AI automation?", a: "AI automation benefits virtually every industry — from education and healthcare to retail, finance, real estate, and startups. Any business with repetitive processes can benefit." },
  { q: "How much does AI automation cost?", a: "Our pricing is flexible and depends on the scope of the project. We offer affordable packages for startups and SMEs, and custom enterprise solutions. Contact us for a free consultation." },
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Frequently Asked <span className="text-gradient-cyan">Questions</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <AccordionItem value={`item-${index}`} className="bg-card rounded-xl border border-border px-6">
                  <AccordionTrigger className="text-foreground font-heading font-medium text-left">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
