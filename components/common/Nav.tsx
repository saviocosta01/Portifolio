"use client";

import { Bars3Icon } from "@heroicons/react/24/outline";
import React, { useEffect } from "react";

import { Button, IconButton, Link, NavLink } from "@/components";
import { links } from "@/data/links";
import { userData } from "@/data/links";
import { ColorModeToggler } from "@/providers/ColorMode";

import { Container } from "../Layout";

export function Nav() {
  const navRef = React.useRef<HTMLElement | null>(null);
  const listNavRef = React.useRef<HTMLDivElement | null>(null);

  const toggleNavBar = () => {
    const listNav = listNavRef.current;
    listNav?.classList.toggle("!translate-x-0");
    document.body.classList.toggle("overflow-y-hidden");
  };

  useEffect(() => {
    const handleScroll = () => {
      const nav = navRef.current;
      nav?.classList.toggle("scrolled_nav", window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="sticky top-0 left-0 z-10 bg-white py-3 duration-300 dark:bg-background-500"
    >
      <Container size="lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h6 className="text-lg font-light text-primary-600 dark:text-primary-500">
              <img
                src={`https://github.com/${userData.githubUser}.png`}
                alt="imagem de perfil"
                className="w-12 rounded-full object-cover"
              />
            </h6>
            <ColorModeToggler />
          </div>
          <div
            ref={listNavRef}
            className="fixed top-0 right-0 flex h-screen w-screen max-w-md translate-x-full transform flex-col items-start justify-center gap-5 bg-white/70 p-5 shadow-lg backdrop-blur-lg duration-300 dark:bg-background-600/70 lg:static lg:h-auto lg:w-auto lg:max-w-none lg:transform-none lg:flex-row lg:items-center lg:justify-between lg:!bg-transparent lg:!p-0 lg:shadow-none lg:backdrop-blur-none"
          >
            <NavLink to="home">Home</NavLink>
            <NavLink to="skills">Tecnologias</NavLink>
            <NavLink to="projects">Projetos</NavLink>
            <a href={`https://api.whatsapp.com/send?phone=+55${userData.whatsappNumber}&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os`} target="_blank" rel="noopener noreferrer">
              <Button className="w-full lg:w-auto" color="primary">Falar no whatsapp </Button>
            </a>
            <a href={links.github} target="_blank" rel="noopener noreferrer">
            <Button className="w-full lg:w-auto" color="secondary">Github</Button>
            </a>
          </div>
          <div className="z-10 lg:hidden">
            <IconButton
              onClick={toggleNavBar}
              aria-label="hamburger-menu"
              icon={<Bars3Icon width={20} height={20} />}
            />
          </div>
        </div>
      </Container>
    </nav>
  );
}
