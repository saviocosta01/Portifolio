"use client";

import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import type { StaticImageData } from "next/image";
import Image from "next/image";

import ProjectBurguerKenzie from "../../assets/project-images/burguer.png";
import ProjecNuKenzie from "../../assets/project-images/nukenzie.png";
import ProjectKenzieHub from "../../assets/project-images/kenziehub.png";
import ProjectTechZone from "../../assets/project-images/tech.png"
import ProjectTechFullStack from "../../assets/project-images/imgproject.png"
import { Button, Section } from "@/components";

export type Project = {
  id: string;
  category: string;
  name: string;
  description: string;
  imageURL: string | StaticImageData;
  stack: string[];
  repo?: string;
  preview?: string;
};

type ProjectProps = Project;

const projectData: Project[] = [
  {
    id: "1",
    category: "Launched",
    name: "Kenzie Burguer",
    description: "Site de uma hamburgueria, Estilo fastfood com recurso de carrinho e check-out.",
    imageURL: ProjectBurguerKenzie,
    stack: ["TypeScript", "React", "MUI", "Styled-Components", "react-hook-form", "axios"],
    preview: "https://kenzie-burguer-v2-template-saviocosta01.vercel.app/",
    repo: "https://github.com/saviocosta01/KenzieBurguer",
  },

  {
    id: "2",
    category: "Launched",
    name: "Tech Zone",
    description: "Tech Zone é uma rede social especifica para devs, com muitas tecnologias e features. /////////////////// Conta para teste: kenzinho@mail.com senha: 123456",
    imageURL: ProjectTechZone,
    stack: ["TypeScript", "React", "MUI", "Styled-Components", "react-hook-form", "axios"],
    preview: "https://tech-zone-web-site-eight.vercel.app/",
    repo: "https://github.com/orgs/Tech-Zone-T15/repositories",
  },
  {
    id: "3",
    category: "Launched",
    name: "Nu Kenzie",
    description: "Nu Kenzie, é uma aplicação para gerenciamento de gastos, cadastrando entradas e saídas",
    imageURL: ProjecNuKenzie,
    stack: ["Javascript", "React Js"],
    preview: "https://react-entrega-s1-template-nu-kenzie-saviocosta01.vercel.app/",
    repo: "https://github.com/saviocosta01/NuKenzie",
  },
  {
    id: "4",
    category: "Launched",
    name: "Kenzie Hub",
    description: "kenzie hub é um projeto de features de login e cadastro utilizando React Hook Form, Yup e requisições de POST simples.",
    imageURL: ProjectKenzieHub,
    stack: ["React", "styled-components", "react-hook-form", "axios"],
    preview: "https://react-entrega-kenzie-hub-saviocosta01.vercel.app/",
    repo: "https://github.com/saviocosta01/KenzieHub",
  },
  {
    id: "5",
    category: "Launched",
    name: "Tech FullStack",
    description: "Projeto fullstack, Para simular uma agenda de contatos de um usuário.",
    imageURL: ProjectTechFullStack,
    stack: ["React", "styled-components", "react-hook-form", "axios", "TypeScript", "NodeJs", "Express", "TypeOrm"],
    preview: "https://tech-fullstack-frontend.vercel.app/",
    repo: "https://github.com/saviocosta01/tech-fullstack-frontend",

  },
];

export function Project(props: ProjectProps) {
  const { name, description, id, imageURL, category, stack, preview, repo } = props;
  return (
    <div
      id={id}
      className="group flex transform flex-col gap-5 rounded-md bg-white p-5 shadow-md dark:bg-background-400"
    >
      <Image
        src={imageURL}
        alt={name}
        width={500}
        className="h-[300px] w-full rounded-md bg-[top] object-cover duration-200 group-hover:object-contain"
      />
      <div className="flex flex-col gap-3">
        <div>
          <p className="mb-[2px] text-sm uppercase text-primary-600 dark:text-primary-500">
            {category}
          </p>
          <h2 className="text-2xl">{name}</h2>
        </div>
        <div className="flex flex-wrap gap-2 p-2">
          {stack.map((tech, index) => (
            <span
              key={index}
              className="inline-flex flex-auto items-center justify-center rounded-md bg-primary-600 py-1 px-3 text-center align-middle text-xs text-primary-50 dark:bg-primary-500 dark:text-primary-800"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-100">{description}</p>
        <div className="flex gap-3">
          {preview && (
            <a href={preview} target="_blank" rel="noreferrer">
              <Button size="sm" startIcon={<ArrowTopRightOnSquareIcon width={18} height={18} />}>
                Preview
              </Button>
            </a>
          )}
          {repo && (
            <a href={repo} target="_blank" rel="noreferrer">
              <Button size="sm" startIcon={<CodeBracketIcon width={18} height={18} />}>
                Github
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <Section refKey="projects" no="02" title="Projetos">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
        {projectData.map((project) => (
          <Project {...project} key={project.id} />
        ))}
      </div>
    </Section>
  );
}
