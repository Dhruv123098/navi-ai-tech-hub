import { Bot, Code, Database, BarChart3 } from "lucide-react";

const programs = [
  {
    icon: Bot,
    title: "Artificial Intelligence",
    description: "Get started on creating the journey with AI internship platform, AI tools, and AI interview concepts.",
    duration: "Duration: 2 Months",
    color: "from-blue-500 to-purple-600",
  },
  {
    icon: Code,
    title: "ML With Python",
    description: "Python is a must for machine learning and data science. Get faster hands-on python experience.",
    duration: "Duration: Live Class",
    color: "from-green-500 to-teal-600",
  },
  {
    icon: Database,
    title: "Web Development",
    description: "With you need to build a complete professional website with Advanced UI, UX and hosting clarity.",
    duration: "Duration: 2 Months",
    color: "from-orange-500 to-red-600",
  },
  {
    icon: BarChart3,
    title: "Data Science",
    description: "You may need some practical hands-on learning which helps you build data solution more clear.",
    duration: "Duration: 2+ Months",
    color: "from-cyan-500 to-blue-600",
  },
];

const TrendingPrograms = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
          Our Trending Program
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Get started with our top trending programs and boost your career to the next level
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-card rounded-xl overflow-hidden shadow-lg border border-border card-hover group"
            >
              <div className={`h-40 bg-gradient-to-br ${program.color} flex items-center justify-center`}>
                <program.icon className="w-16 h-16 text-white opacity-80 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  {program.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {program.description}
                </p>
                <span className="text-xs font-medium text-primary">{program.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingPrograms;
