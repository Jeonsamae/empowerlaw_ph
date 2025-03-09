"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaChevronDown,
  FaCog,
  FaSun,
  FaMoon,
  FaBars,
  FaTimes,
} from "react-icons/fa";

interface DropdownMenu {
  title: string;
  items: { name: string; href: string }[];
}

type ThemeMode = "light" | "dark";

const Header = () => {
  const [theme, setTheme] = useState<ThemeMode>("light");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [viewDropdown, setViewDropdown] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Check stored theme preference on component mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as ThemeMode;
    if (storedTheme) {
      setTheme(storedTheme);
      if (storedTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  // Toggle theme and store preference
  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      document.documentElement.classList.toggle("dark", newTheme === "dark");
      return newTheme;
    });
  };

  // Toggle dropdown when clicked
  const toggleDropdown = (menuTitle: string) => {
    setOpenDropdown(openDropdown === menuTitle ? null : menuTitle);
  };

  // Dropdown menu items
  const menus: DropdownMenu[] = [
    {
      title: "Research",
      items: [
        { name: "Decisions", href: "/decisions" },
        { name: "Laws", href: "/laws" },
        { name: "Taxations", href: "/taxations" },
        { name: "Corporate", href: "/corporate" },
        { name: "Labor", href: "/labor" },
      ],
    },
    {
      title: "Law School",
      items: [
        { name: "Syllabus Compilation", href: "/syllabus" },
        { name: "Reviewers", href: "/reviewers" },
        { name: "Free Case Digests", href: "/digests" },
        { name: "Resources", href: "/resources" },
      ],
    },
    {
      title: "2025 Lazaro-Javier Bar",
      items: [
        { name: "Cases", href: "/cases" },
        { name: "Digest Compilations", href: "/compilations" },
        { name: "Linked Syllabus", href: "/linked-syllabus" },
        { name: "Javier Doctrines", href: "/javier-doctrines" },
      ],
    },
  ];

  return (
    <nav className="bg-[var(--bg-color)] text-[var(--text-color)] py-4 shadow-md fixed w-full top-0 z-50">
      <div className="w-full flex items-center justify-between px-4 sm:px-6 lg:px-10">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
            <span className="hover:text-gray-300 cursor-pointer">
              Empower PH
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-gray-500 text-2xl sm:hidden"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center space-x-6">
          {menus.map((menu) => (
            <div key={menu.title} className="relative">
              <button
                onClick={() => toggleDropdown(menu.title)}
                className="hover:text-gray-300 cursor-pointer flex items-center"
              >
                {menu.title} <FaChevronDown className="ml-1 text-sm" />
              </button>
              {openDropdown === menu.title && (
                <ul className="absolute bg-gray-700 text-white mt-2 w-56 rounded-md shadow-lg py-2">
                  {menu.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="block px-4 py-2 hover:bg-gray-600"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* AI Page */}
          <Link href="/ai" className="hover:text-gray-300">
            AI
          </Link>

          {/* Pricing */}
          <Link href="/pricing" className="hover:text-gray-300">
            Pricing
          </Link>

          {/* View (Theme & Settings) */}
          <div className="relative">
            <button
              onClick={() => setViewDropdown(!viewDropdown)}
              className="bg-gray-700 text-white px-3 py-2 rounded-lg flex items-center hover:bg-gray-600 transition duration-200"
            >
              <span className="mr-2">View</span>
              <FaCog />
            </button>

            {viewDropdown && (
              <div className="absolute right-0 mt-2 w-60 bg-white text-gray-900 rounded-lg shadow-lg p-4">
                <button className="w-full text-left px-2 py-2 rounded-md hover:bg-gray-100 transition duration-200">
                  Switch Themes
                </button>

                <hr className="my-2" />

                {/* Dark Mode Toggle */}
                <div className="flex justify-between items-center">
                  <span>Light/Dark mode</span>
                  <button
                    onClick={toggleTheme}
                    className="relative flex items-center bg-gray-300 dark:bg-gray-600 p-1 rounded-full w-14 h-7 transition duration-300"
                  >
                    <FaSun className="text-yellow-500 absolute left-2" />
                    <div
                      className={`w-6 h-6 bg-white rounded-full shadow-md transform transition ${
                        theme === "dark" ? "translate-x-7" : "translate-x-0"
                      }`}
                    ></div>
                    <FaMoon className="text-gray-500 absolute right-2" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Log Out */}
          <Link href="/login" className="hover:text-gray-300">
            Log Out
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-gray-900 text-white w-full p-4 flex flex-col space-y-3">
          {menus.map((menu) => (
            <div key={menu.title}>
              <button
                className="flex justify-between w-full text-left px-2 py-2 rounded-md hover:bg-gray-700 transition duration-200"
                onClick={() => toggleDropdown(menu.title)}
              >
                {menu.title}
                <FaChevronDown className="ml-2" />
              </button>
              {openDropdown === menu.title && (
                <ul className="ml-4 mt-2">
                  {menu.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="block px-4 py-1 hover:bg-gray-700"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <Link href="/ai" className="hover:text-gray-300">
            AI
          </Link>
          <Link href="/pricing" className="hover:text-gray-300">
            Pricing
          </Link>
          <Link href="/login" className="hover:text-gray-300">
            Log Out
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
