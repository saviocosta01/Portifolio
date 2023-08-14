"use client";
import { Button, Container } from "@/components";
import { links, userData } from "@/data/links";
import { ScrollTo, useSectionRefContextValue } from "@/providers/SectionRef";


export function Hero() {
  const contextValue = useSectionRefContextValue();
  if (contextValue === undefined) return null;
  const { refs } = contextValue;

  return (
    <section ref={refs.home} className="py-32 sm:py-36 lg:py-48 xl:py-60">
      <Container>
        <div className="mx-auto flex w-full max-w-3xl flex-col">
          <p className="mb-2 text-sm font-semibold text-gray-600 dark:text-gray-400">
            Desenvolvedor Full stack
          </p>
          <h1 className="mb-3 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-4xl font-extrabold text-transparent dark:from-primary-500 dark:to-secondary-500 md:text-5xl">
            Sávio Costa Silva
          </h1>
          <p className="mb-5 max-w-lg font-medium md:text-lg">
          Sou estudante de programação na Kenzie Academy Brasil, participei
              de diversos projetos resolvendo problemas de alto nível e
              desenvolvendo habilidades
          </p>
          <div className="flex gap-3">
            <ScrollTo to="projects">
              <Button color="primary">Projetos</Button>
            </ScrollTo>
            <a href={`https://www.linkedin.com/in/${userData.linkedinUser}`} target="_blank" rel="noopener noreferrer">
              <Button color="secondary">Linkedin <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" className="w-6"/></Button>
            </a>
            
          </div>
        </div>
      </Container>
    </section>
  );
}
