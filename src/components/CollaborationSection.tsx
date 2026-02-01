const companies = [
  "TECH MAHINDRA",
  "ACCENTURE", 
  "RPA ZONE",
  "SWIGGY",
  "INFOSYS",
  "ZOHO",
  "TCS",
];

const CollaborationSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
          Collaboration That Drives Career Growth
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          At Navi AI Tech, we believe in the power of collaboration. Our network of top-tier industry partners, over-achiever mentors, and super career opportunities and support through internships.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
          {companies.map((company, index) => (
            <div
              key={index}
              className="px-8 py-4 rounded-xl bg-card border border-border shadow-sm hover:shadow-lg transition-all"
            >
              <span className="text-sm md:text-base font-bold text-foreground">
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
