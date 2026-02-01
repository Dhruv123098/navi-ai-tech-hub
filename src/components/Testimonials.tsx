import { User, Star } from "lucide-react";

const testimonials = [
  {
    name: "Gagan Deep R.",
    role: "Web Dev",
    rating: 5,
    text: "Amazing experience with Navi AI Tech! The internship program helped me land my dream job. The mentors are incredibly supportive and the curriculum is industry-relevant.",
  },
  {
    name: "Palak Ashok Sashte",
    role: "Data Scientist",
    rating: 5,
    text: "The AI training program exceeded my expectations. I gained practical skills in machine learning and data analysis that I now use daily in my career.",
  },
  {
    name: "Devesh Kumar",
    role: "AI/ML Engineer",
    rating: 5,
    text: "Highly recommend Navi AI Tech for anyone looking to break into the AI industry. The capstone projects and certifications gave me a competitive edge.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          Testimonials
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Students share their success journeys with us
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-lg border border-border card-hover"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <User className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
