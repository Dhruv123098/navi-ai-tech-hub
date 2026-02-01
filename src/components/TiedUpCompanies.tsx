const companies = [
  "TECH MAHINDRA",
  "ACCENTURE", 
  "RPA ZONE",
  "SWIGGY",
  "INFOSYS",
  "ZOHO",
  "TCS",
];

const TiedUpCompanies = () => {
  return (
    <section className="py-12 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-lg text-muted-foreground mb-8">
          Our Alumni Works At
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {companies.map((company, index) => (
            <div
              key={index}
              className="px-6 py-3 rounded-lg bg-muted hover:shadow-md transition-all border border-border"
            >
              <span className="text-sm md:text-base font-semibold text-foreground">
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TiedUpCompanies;
