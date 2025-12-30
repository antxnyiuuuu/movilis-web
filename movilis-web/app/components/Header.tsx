"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// Datos de los menús
const ofertaAcademicaSubmenu = [
  {
    name: "Logística y Transporte",
    href: "/oferta-academica/logistica-transporte",
  },
  {
    name: "Desarrollo de Software y Programación",
    href: "/oferta-academica/desarrollo-software",
  },
  {
    name: "Administración de Empresas de Transporte",
    href: "/oferta-academica/administracion-empresas",
  },
  {
    name: "Marketing y Comunicación Estratégica",
    href: "/oferta-academica/marketing-comunicacion",
  },
  {
    name: "Estética Profesional",
    href: "/oferta-academica/estetica-profesional",
  },
];

const nosotrosSubmenu = [
  { name: "Misión, Visión y Valores", href: "/nosotros/mision-vision-valores" },
  { name: "Historia", href: "/nosotros/historia" },
  { name: "Nuestro Equipo", href: "/nosotros/equipo" },
];

const campusVirtualSubmenu = [
  {
    name: "Accede a tus clases",
    hasSubmenu: true,
    submenu: [
      {
        name: "🎓 Plataforma Movilis (Moodle)",
        href: "https://virtual.movilis.edu.ec/local/customlogin/index.php"
      },
      {
        name: "🇬🇧 Plataforma de Inglés",
        href: "https://learn.elltechnologies.com/login"
      }
    ]
  },
  {
    name: "Tu información académica",
    href: "https://movilis.academicok.com/login?next=/",
  },
  {
    name: "E-mail de estudiante",
    href: "https://outlook.office365.com/mail/"
  },
  { name: "Admisiones", href: "/admisiones" },
];

const serviciosSubmenu = [
  { name: "Vinculación con la sociedad", href: "/vinculacion" },
  { name: "Educación continua", href: "/educacion-continua" },
];

const menuItems = [
  {
    name: "Oferta Académica",
    href: "/oferta-academica",
    hasDropdown: true,
    submenu: ofertaAcademicaSubmenu,
  },

  {
    name: "Nosotros",
    href: "/nosotros",
    hasDropdown: true,
    submenu: nosotrosSubmenu,
  },
  {
    name: "Campus Virtual",
    href: "/campus-virtual",
    hasDropdown: true,
    submenu: campusVirtualSubmenu,
  },
  {
    name: "Educación Continua",
    href: "/educacion-continua",
    hasDropdown: false,
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [openMobileAccordion, setOpenMobileAccordion] = useState<string | null>(
    null
  );

  // Efecto para detectar scroll y agregar sombra al header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevenir scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenMobileAccordion(null);
  };

  const toggleMobileAccordion = (itemName: string) => {
    setOpenMobileAccordion(openMobileAccordion === itemName ? null : itemName);
  };

  const handleDropdownEnter = (itemName: string) => {
    setOpenDropdown(itemName);
  };

  const handleDropdownLeave = () => {
    setOpenDropdown(null);
  };

  const openSearch = () => {
    setIsSearchOpen(true);
    setOpenDropdown(null);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery("");
  };

  // Cerrar búsqueda con Escape
  useEffect(() => {
    if (!isSearchOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsSearchOpen(false);
        setSearchQuery("");
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("keydown", handleEscape);
      return () => window.removeEventListener("keydown", handleEscape);
    }
  }, [isSearchOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full bg-white transition-all duration-300 ${isScrolled ? "shadow-lg" : "shadow-sm"
          }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? "h-16 lg:h-18" : "h-20 lg:h-24"
              }`}
          >
            {/* Logo */}
            <div className="flex items-center shrink-0">
              <Link
                href="/"
                className="flex items-center transition-opacity duration-200 hover:opacity-80 active:opacity-70"
              >
                <Image
                  src={
                    isScrolled
                      ? "/images/Logo-Movilis-sin-Texto.png"
                      : "/images/Logo-Horizontal-Movilis.png"
                  }
                  alt="Instituto Movilis"
                  width={200}
                  height={60}
                  className={`w-auto object-contain transition-all duration-300 ${isScrolled ? "h-8 sm:h-10 lg:h-12" : "h-10 sm:h-12 lg:h-14"
                    }`}
                  priority
                />
              </Link>
            </div>

            {/* Menú Desktop */}
            <nav className="hidden lg:flex lg:items-center lg:gap-6 xl:gap-8 flex-1 justify-end">
              {/* Menú items - se ocultan cuando está abierto el buscador */}
              <div
                className={`flex items-center gap-6 xl:gap-8 transition-all duration-300 ${isSearchOpen
                  ? "opacity-0 translate-x-4 pointer-events-none w-0 overflow-hidden"
                  : "opacity-100 translate-x-0 pointer-events-auto"
                  }`}
              >
                {menuItems.map((item) => {
                  const isCampusVirtual = item.name === "Campus Virtual";

                  // Si no tiene dropdown, mostrar como link simple
                  if (!item.hasDropdown || !item.submenu) {
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`group relative px-2 py-2 font-light text-gray-700 transition-all duration-300 hover:text-[#881E80] ${isScrolled ? "text-sm" : "text-base"
                          }`}
                      >
                        {item.name}
                        <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#881E80] transition-all duration-300 group-hover:w-full" />
                      </Link>
                    );
                  }

                  // Si tiene dropdown, mostrar con dropdown
                  return (
                    <div
                      key={item.name}
                      className={`relative group ${isCampusVirtual ? "px-1" : ""
                        }`}
                      onMouseEnter={() => handleDropdownEnter(item.name)}
                      onMouseLeave={handleDropdownLeave}
                      onFocus={() => handleDropdownEnter(item.name)}
                      onBlur={(e) => {
                        if (
                          !e.currentTarget.contains(e.relatedTarget as Node)
                        ) {
                          handleDropdownLeave();
                        }
                      }}
                      role="menuitem"
                      tabIndex={0}
                    >
                      <div
                        className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-all duration-300 ${isCampusVirtual
                          ? "bg-gradient-to-r from-[#F9EB1D]/20 to-[#881E80]/10 group-hover:from-[#F9EB1D]/30 group-hover:to-[#881E80]/20"
                          : ""
                          }`}
                      >
                        <Link
                          href={item.href}
                          className={`transition-all duration-300 ${isScrolled ? "text-sm" : "text-base"
                            } ${isCampusVirtual
                              ? "font-semibold text-[#881E80] group-hover:text-[#881E80]"
                              : "font-light text-gray-700 group-hover:text-[#881E80]"
                            }`}
                        >
                          {item.name}
                          {isCampusVirtual && (
                            <span className="ml-2 text-xs bg-[#881E80] text-white px-2 py-0.5 rounded-full font-medium">
                              POPULAR 🔥
                            </span>
                          )}
                        </Link>
                        <svg
                          className={`h-4 w-4 transition-all duration-300 ${isCampusVirtual
                            ? "text-[#881E80]"
                            : "text-gray-700 group-hover:text-[#881E80]"
                            } ${openDropdown === item.name ? "rotate-180" : ""}`}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                      <span
                        className={`absolute bottom-0 left-0 transition-all duration-300 ${isCampusVirtual
                          ? "h-[3px] w-full bg-[#881E80]"
                          : "h-[2px] w-0 bg-[#881E80] group-hover:w-full"
                          }`}
                      />

                      {/* Dropdown */}
                      <div
                        className={`absolute left-0 top-full w-72 rounded-lg bg-white shadow-lg transition-all duration-200 ${isCampusVirtual
                          ? "border-t-4 border-[#F9EB1D] shadow-xl"
                          : "border-t-2 border-[#881E80]"
                          } ${openDropdown === item.name
                            ? "opacity-100 translate-y-0 pointer-events-auto"
                            : "opacity-0 -translate-y-2 pointer-events-none"
                          }`}
                        onMouseEnter={() => handleDropdownEnter(item.name)}
                        onMouseLeave={handleDropdownLeave}
                      >
                        <div className="py-2">
                          {item.submenu.map((subItem: any) => {
                            // Si el subItem tiene su propio submenu (anidado)
                            if (subItem.hasSubmenu && subItem.submenu) {
                              return (
                                <div
                                  key={subItem.name}
                                  className="relative group/nested"
                                >
                                  <div className="flex items-center justify-between px-4 py-3 text-sm font-light text-gray-700 transition-all duration-200 hover:bg-[#881E80] hover:text-white cursor-pointer">
                                    <span>{subItem.name}</span>
                                    <svg
                                      className="h-4 w-4 rotate-90"
                                      fill="none"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path d="M19 9l-7 7-7-7" />
                                    </svg>
                                  </div>
                                  {/* Submenú anidado */}
                                  <div className="absolute right-full top-0 mr-1 w-64 rounded-lg bg-white shadow-lg border-t-2 border-[#881E80] opacity-0 translate-x-2 pointer-events-none group-hover/nested:opacity-100 group-hover/nested:translate-x-0 group-hover/nested:pointer-events-auto transition-all duration-200">
                                    <div className="py-2">
                                      {subItem.submenu.map((nestedItem: any) => {
                                        const isExternal = nestedItem.href?.startsWith('http');
                                        return (
                                          <Link
                                            key={nestedItem.name}
                                            href={nestedItem.href}
                                            {...(isExternal && {
                                              target: "_blank",
                                              rel: "noopener noreferrer"
                                            })}
                                            className="block px-4 py-3 text-sm font-light text-gray-700 transition-all duration-200 hover:bg-[#881E80] hover:text-white active:bg-[#881E80] active:text-white"
                                          >
                                            {nestedItem.name}
                                            {isExternal && (
                                              <svg
                                                className="inline-block ml-1 h-3 w-3"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                              >
                                                <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                              </svg>
                                            )}
                                          </Link>
                                        );
                                      })}
                                    </div>
                                  </div>
                                </div>
                              );
                            }

                            // Si es un item normal con href
                            const isExternal = subItem.href?.startsWith('http');
                            return (
                              <Link
                                key={subItem.name}
                                href={subItem.href || '#'}
                                {...(isExternal && {
                                  target: "_blank",
                                  rel: "noopener noreferrer"
                                })}
                                className="block px-4 py-3 text-sm font-light text-gray-700 transition-all duration-200 hover:bg-[#881E80] hover:text-white active:bg-[#881E80] active:text-white"
                              >
                                {subItem.name}
                                {isExternal && (
                                  <svg
                                    className="inline-block ml-1 h-3 w-3"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                  </svg>
                                )}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Cuadro de búsqueda - se muestra cuando está abierto */}
              <div
                className={`flex items-center gap-3 transition-all duration-300 ${isSearchOpen
                  ? "opacity-100 translate-x-0 w-full max-w-md"
                  : "opacity-0 translate-x-4 w-0 overflow-hidden pointer-events-none"
                  }`}
              >
                <div className="relative w-full flex items-center">
                  <div className="absolute left-4 text-gray-400">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar..."
                    className="w-full pl-12 pr-12 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#881E80] focus:border-transparent transition-all duration-200"
                    autoFocus
                  />
                  <button
                    onClick={closeSearch}
                    className="absolute right-3 flex items-center justify-center w-6 h-6 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all duration-200 active:scale-95"
                    aria-label="Cerrar búsqueda"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Icono de búsqueda - se oculta cuando está abierto */}
              {!isSearchOpen && (
                <button
                  onClick={openSearch}
                  className="ml-4 flex items-center justify-center rounded-full p-2.5 text-gray-600 transition-all duration-200 hover:bg-[#881E80]/10 hover:text-[#881E80] hover:scale-110 active:bg-[#881E80]/20"
                  aria-label="Buscar"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              )}
            </nav>

            {/* Botón Hamburguesa - Móvil */}
            <button
              className="flex flex-col items-center justify-center gap-1.5 p-2.5 min-w-[44px] min-h-[44px] lg:hidden touch-manipulation active:opacity-70"
              onClick={toggleMenu}
              aria-label="Menú"
              aria-expanded={isMenuOpen}
            >
              <span
                className={`h-0.5 w-6 bg-gray-800 transition-all duration-300 ${isMenuOpen ? "translate-y-2 rotate-45" : ""
                  }`}
              />
              <span
                className={`h-0.5 w-6 bg-gray-800 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""
                  }`}
              />
              <span
                className={`h-0.5 w-6 bg-gray-800 transition-all duration-300 ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""
                  }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay - Móvil */}
      {isMenuOpen && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/50 lg:hidden border-0 p-0 cursor-pointer"
          onClick={closeMenu}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              closeMenu();
            }
          }}
          aria-label="Cerrar menú"
        />
      )}

      {/* Drawer/Menú Lateral - Móvil */}
      <div
        className={`fixed right-0 top-0 z-50 h-full w-[85vw] min-w-[280px] max-w-[320px] transform bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-gray-200 px-4 sm:px-6">
          <span className="text-lg sm:text-xl font-bold text-[#881E80]">
            Menú
          </span>
          <button
            onClick={closeMenu}
            className="flex items-center justify-center rounded-full p-2.5 min-w-[44px] min-h-[44px] text-gray-700 transition-colors duration-200 hover:bg-gray-100 active:bg-gray-200 touch-manipulation"
            aria-label="Cerrar menú"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav
          className={`flex flex-col py-2 overflow-y-auto max-h-[calc(100vh-4rem)] overscroll-contain transition-all duration-300 ${isSearchOpen
            ? "opacity-0 translate-y-4 pointer-events-none"
            : "opacity-100 translate-y-0"
            }`}
        >
          {menuItems.map((item) => {
            if (item.hasDropdown && item.submenu) {
              const isAccordionOpen = openMobileAccordion === item.name;
              const isCampusVirtual = item.name === "Campus Virtual";

              return (
                <div
                  key={item.name}
                  className={`border-b border-gray-100 ${isCampusVirtual
                    ? "bg-gradient-to-r from-[#F9EB1D]/15 to-transparent"
                    : ""
                    }`}
                >
                  <button
                    onClick={() => toggleMobileAccordion(item.name)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        toggleMobileAccordion(item.name);
                      }
                    }}
                    className={`w-full flex items-center justify-between px-4 sm:px-6 py-4 min-h-[56px] text-base transition-all duration-200 touch-manipulation ${isCampusVirtual
                      ? "font-semibold text-[#881E80] hover:bg-[#F9EB1D]/20 active:bg-[#F9EB1D]/30"
                      : "font-light text-gray-700 hover:bg-[#881E80]/10 hover:text-[#881E80] active:bg-[#881E80]/20"
                      }`}
                    aria-expanded={isAccordionOpen}
                    aria-controls={`submenu-${item.name}`}
                  >
                    <span className="flex-1 text-left pr-2 flex items-center gap-2">
                      {item.name}
                      {isCampusVirtual && (
                        <span className="text-xs bg-[#881E80] text-white px-2 py-0.5 rounded-full font-medium">
                          POPULAR 🔥
                        </span>
                      )}
                    </span>
                    <svg
                      className={`h-5 w-5 text-gray-600 transition-transform duration-300 ${isAccordionOpen ? "rotate-180" : ""
                        }`}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Submenú Acordeón */}
                  <div
                    id={`submenu-${item.name}`}
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isAccordionOpen
                      ? "max-h-[400px] opacity-100"
                      : "max-h-0 opacity-0"
                      }`}
                  >
                    <div className="bg-gray-50/50">
                      {item.submenu.map((subItem: any) => {
                        // Si el subItem tiene su propio submenu (anidado)
                        if (subItem.hasSubmenu && subItem.submenu) {
                          return (
                            <div key={subItem.name} className="border-b border-gray-200/50 last:border-b-0">
                              <div className="px-4 sm:px-6 py-2.5 pl-10 sm:pl-12 text-sm sm:text-base font-medium text-[#881E80] bg-gray-100/50">
                                {subItem.name}
                              </div>
                              {subItem.submenu.map((nestedItem: any) => {
                                const isExternal = nestedItem.href?.startsWith('http');
                                return (
                                  <Link
                                    key={nestedItem.name}
                                    href={nestedItem.href}
                                    onClick={closeMenu}
                                    {...(isExternal && {
                                      target: "_blank",
                                      rel: "noopener noreferrer"
                                    })}
                                    className="flex items-center px-4 sm:px-6 py-3 pl-14 sm:pl-16 min-h-[48px] text-sm sm:text-base font-light text-gray-600 transition-all duration-200 hover:bg-[#881E80]/10 hover:text-[#881E80] active:bg-[#881E80]/20 touch-manipulation"
                                  >
                                    {nestedItem.name}
                                    {isExternal && (
                                      <svg
                                        className="inline-block ml-1 h-3 w-3"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                      >
                                        <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                      </svg>
                                    )}
                                  </Link>
                                );
                              })}
                            </div>
                          );
                        }

                        // Si es un item normal con href
                        const isExternal = subItem.href?.startsWith('http');
                        return (
                          <Link
                            key={subItem.name}
                            href={subItem.href || '#'}
                            onClick={closeMenu}
                            {...(isExternal && {
                              target: "_blank",
                              rel: "noopener noreferrer"
                            })}
                            className="flex items-center px-4 sm:px-6 py-3.5 pl-10 sm:pl-12 min-h-[48px] text-sm sm:text-base font-light text-gray-600 transition-all duration-200 hover:bg-[#881E80]/10 hover:text-[#881E80] active:bg-[#881E80]/20 touch-manipulation"
                          >
                            {subItem.name}
                            {isExternal && (
                              <svg
                                className="inline-block ml-1 h-3 w-3"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            )}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className="border-b border-gray-100 px-4 sm:px-6 py-4 min-h-[56px] flex items-center text-base font-light text-gray-700 transition-all duration-200 hover:bg-[#881E80]/10 hover:text-[#881E80] hover:pl-6 sm:hover:pl-8 active:bg-[#881E80]/20 touch-manipulation"
              >
                {item.name}
              </Link>
            );
          })}

          {/* Cuadro de búsqueda móvil */}
          {isSearchOpen ? (
            <div className="px-4 sm:px-6 pt-4 pb-2">
              <div className="relative flex items-center">
                <div className="absolute left-4 text-gray-400 z-10">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar..."
                  className="w-full pl-12 pr-12 py-3.5 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#881E80] focus:border-transparent transition-all duration-200"
                  autoFocus
                />
                <button
                  onClick={closeSearch}
                  className="absolute right-3 flex items-center justify-center w-8 h-8 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all duration-200 active:scale-95 touch-manipulation"
                  aria-label="Cerrar búsqueda"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          ) : (
            <div className="px-4 sm:px-6 pt-4 pb-2">
              <button
                onClick={openSearch}
                className="w-full flex items-center justify-center gap-2.5 rounded-lg border border-gray-200 bg-white px-4 py-4 min-h-[48px] text-gray-700 transition-all duration-200 hover:border-[#881E80] hover:bg-[#881E80]/10 hover:text-[#881E80] active:scale-[0.98] active:bg-[#881E80]/20 touch-manipulation"
                aria-label="Buscar"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="text-sm font-light">Buscar</span>
              </button>
            </div>
          )}
        </nav>
      </div>
    </>
  );
}
