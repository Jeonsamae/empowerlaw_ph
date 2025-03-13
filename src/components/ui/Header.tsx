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
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [profileDropdown, setProfileDropdown] = useState(false);

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
      title: "Latest Cases",
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
        <div className="text-2xl font-bold flex-shrink-0">
          <Link href="/">
            <span className="text-blue-900 hover:text-blue-600 cursor-pointer whitespace-nowrap">
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
        <div className="hidden sm:flex items-center justify-center w-full space-x-12">
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
                      <Link href={item.href} className="block px-4 py-2 hover:bg-gray-600">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* AI Page */}
          <div>
            <Link
              href="/ai"
              className="bg-gradient-to-br from-gray-700 to-blue-700 text-white px-4 py-1 rounded-lg flex items-center hover:bg-gray-600 transition duration-200"
            >
              AI
            </Link>
          </div>
        </div>


          {/* View (Theme & Settings) */}
          <div className="relative">
            <button
              onClick={toggleTheme}
              className="relative flex items-center bg-gray-300 dark:bg-gray-600 p-1 rounded-full w-14 h-7 transition duration-300 mr-5"
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

          {/* User Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setProfileDropdown(!profileDropdown)}
              className="flex items-center bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded-full space-x-2"
            >
              <div className="w-8 h-8 bg-purple-500 text-white flex items-center justify-center rounded-full">
                J
              </div>
              <span className="text-sm">
                Juan
                <br />
                <span className="text-xs text-gray-600 dark:text-gray-400">
                  Student
                </span>
              </span>
            </button>
            {profileDropdown && (
              <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg shadow-lg p-2">
                <a
                  href="/login"
                  className="block w-full text-left px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-600 transition duration-200"
                >
                  Log Out
                </a>
              </div>
            )}
          </div>
        </div>
    

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-gray-900 text-white w-full p-4 flex flex-col space-y-3">
          {menus.map((menu) => (
            <div key={menu.title} className="pl-4">
              {" "}
              {/* Adjusted left alignment */}
              <button
                className="flex justify-between w-full text-left px-2 py-2 rounded-md hover:bg-gray-700 transition duration-200"
                onClick={() => toggleDropdown(menu.title)}
              >
                {menu.title}
                <FaChevronDown className="ml-2" />
              </button>
              {openDropdown === menu.title && (
                <ul className="ml-6 mt-2">
                  {" "}
                  {/* Slight indent for dropdown */}
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

          {/* AI Page - consistent with desktop */}
          <div className="pl-4">
            <Link
              href="/ai"
              className="text-white px-4 py-1 rounded-lg flex items-center hover:bg-gray-600 transition duration-200"
            >
              AI
            </Link>
          </div>

          {/* Log Out Option */}
          <Link href="/login" className="pl-4 hover:text-gray-300">
            Log Out
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
