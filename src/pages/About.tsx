import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, Eye, Rocket, Award, FileCheck, Briefcase } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="gradient-hero pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
            About <span className="text-gradient-cyan">NAVI AI TECH</span>
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Transforming businesses and empowering individuals through AI innovation
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
              Who We Are
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>• We are an AI technology company focused on business solutions and automation.</p>
              <p>• We help businesses grow with intelligent digital systems.</p>
              <p>• We provide practical AI internship programs for students.</p>
              <p>• We connect learning with real-world innovation.</p>
              <p>• We shape the future through Artificial Intelligence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-card rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                Our Vision
              </h3>
              <div className="space-y-3 text-muted-foreground">
                <p>• Our vision is to become a global leader in Artificial Intelligence.</p>
                <p>• We aim to transform businesses worldwide through smart AI solutions and automation.</p>
                <p>• We strive to create a future where technology empowers every organization and individual.</p>
                <p>• We nurture global talent through advanced AI internship programs.</p>
                <p>• We build a smarter world with Artificial Intelligence.</p>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-card rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                Our Mission
              </h3>
              <div className="space-y-3 text-muted-foreground">
                <p>• Our mission is to deliver world-class AI business solutions and intelligent automation.</p>
                <p>• We aim to help organizations grow through innovative and reliable technology.</p>
                <p>• We provide practical AI internship programs to develop future-ready professionals.</p>
                <p>• We commit to excellence, learning, and global digital transformation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Strength */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-12 text-center">
            Our Strength
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-muted rounded-xl p-8 text-center card-hover">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Briefcase className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                Paid Internship Opportunity
              </h3>
              <p className="text-muted-foreground">
                Gain valuable work experience with paid internship opportunities at leading companies while building your career.
              </p>
            </div>
            <div className="bg-muted rounded-xl p-8 text-center card-hover">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Rocket className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                Capstone Projects
              </h3>
              <p className="text-muted-foreground">
                Work on real-world capstone projects that demonstrate your practical skills to future employers.
              </p>
            </div>
            <div className="bg-muted rounded-xl p-8 text-center card-hover">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Award className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                Certifications
              </h3>
              <p className="text-muted-foreground">
                Earn industry-recognized certifications that validate your skills and boost your career prospects.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
