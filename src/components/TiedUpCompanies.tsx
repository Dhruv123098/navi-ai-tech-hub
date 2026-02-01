const companies = [
  { name: "Tech Mahindra", logo: "TM" },
  { name: "Accenture", logo: "AC" },
  { name: "RPA Zone", logo: "RZ" },
  { name: "Swiggy", logo: "SW" },
  { name: "Infosys", logo: "IN" },
  { name: "Zoho", logo: "ZH" },
  { name: "TCS", logo: "TC" },
];

const TiedUpCompanies = () => {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
          Tied Up Companies
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Our students get placement opportunities at top companies
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 p-4 bg-muted rounded-lg card-hover min-w-[100px]"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-lg">
                {company.logo}
              </div>
              <span className="text-sm font-medium text-foreground text-center">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TiedUpCompanies;
