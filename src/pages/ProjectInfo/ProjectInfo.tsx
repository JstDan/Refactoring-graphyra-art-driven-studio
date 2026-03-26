import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import { projects } from "../Projects/Project";
import { useParams, Link } from "react-router-dom";

const ProjectInfo = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-semibold">Проектът не е открит</h1>
          <Link
            to="/projects"
            className="text-accent underline underline-offset-4 hover:text-accent/80"
          >
            Върни се към всички проекти
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="relative pt-28 md:pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-accent/40 via-transparent to-warm-beige/30 pointer-events-none" />

        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <p className="uppercase tracking-[0.3em] text-sm text-muted-foreground">
              {project.year}
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              {project.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {project.description}
            </p>

            <div className="space-y-3">
              <p className="font-medium text-sm text-muted-foreground uppercase tracking-[0.2em]">
                Услуги
              </p>
              <div className="flex flex-wrap gap-2">
                {project.services.map((service) => (
                  <span
                    key={service}
                    className="px-3 py-1 rounded-full border border-foreground/10 bg-card/40 text-sm"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 underline underline-offset-4"
              >
                Посети сайта
              </a>
            )}
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-accent/20 via-warm-beige/10 to-transparent blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-foreground/10 shadow-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectInfo;
