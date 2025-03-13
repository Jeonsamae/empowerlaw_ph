"use client";

import { useState } from "react";
import {
  FaInfoCircle,
  FaBook,
  FaStickyNote,
  FaDownload,
  FaPrint,
  FaEye,
} from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BiSearch } from "react-icons/bi";

export default function CaseViewer() {
  const [isOpen, setIsOpen] = useState(true);
  const [activeTab, setActiveTab] = useState<
    "Info" | "Table of Contents" | "Notes & Highlights" | null
  >(null);

  // Case content (this will be printed/downloaded)
  const caseContent = `
    LANESTOSA VS. SANTAMARIA
    Ponente: VILLA-REAL, J.
    Decision Date: September 13, 1928

    DECISION:
    This is a Mandamus proceeding instituted by Fausta Lanestosa and Bernabe Lames...
    The lower court ordered the petitioners to appear before it...
  `;

  // Function to handle printing
  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
    printWindow?.document.write(`<pre>${caseContent}</pre>`);
    printWindow?.document.close();
    printWindow?.print();
  };

  // Function to handle downloading the case content as a .txt file
  const handleDownload = () => {
    const blob = new Blob([caseContent], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "case_content.txt";
    link.click();
    URL.revokeObjectURL(link.href);
  };

  return (
    <div className="flex h-full bg-gray-100">
      {/* Sidebar */}
      <div
        className={`bg-gradient-to-br from-gray-800 to-blue-800 text-white p-4 transition-all duration-500 ease-in-out shadow-lg
    ${isOpen ? "w-80 md:w-80" : "w-20"}
    ${isOpen ? "max-[640px]:absolute max-[640px]:z-50 max-[640px]:h-full" : ""}
  `}
      >
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute top-2 -right-8 bg-indigo-500 text-white shadow-lg w-8 h-8 flex items-center justify-center rounded-full hover:bg-indigo-600 transition-all"
          >
            {isOpen ? <IoIosArrowBack /> : <IoIosArrowForward />}
          </button>
        </div>

        <nav>
          <ul className="space-y-3 mt-8">
            <li
              className={`p-3 rounded-lg transition-all duration-300 cursor-pointer hover:bg-blue-950 ${
                activeTab === "Info" ? "bg-blue-950" : ""
              }`}
              onClick={() => setActiveTab(activeTab === "Info" ? null : "Info")}
            >
              <div className="flex items-center gap-3">
                {" "}
                <FaInfoCircle /> {isOpen && "Info"}{" "}
              </div>
              {activeTab === "Info" && isOpen && (
                <div
                  className="bg-white/20 backdrop-blur-md text-xs text-white p-6 rounded-lg mt-4 shadow-lg transition-all duration-500 animate-fadeIn
  max-[640px]:text-[11px] max-[640px]:p-4"
                >
                  <h2 className="text-lg font-semibold mb-1">Title</h2>
                  <p className="text-sm mb-4">Lanestosa vs. Santamaria</p>

                  <h2 className="text-lg font-semibold mb-1">Case Number</h2>
                  <p className="text-sm mb-4">G.R. No. 30076</p>

                  <h2 className="text-lg font-semibold mb-1">Decision Date</h2>
                  <p className="text-sm mb-4">September 13, 1928</p>

                  <h2 className="text-lg font-semibold mb-1">Ponente</h2>
                  <p className="text-sm mb-4">VILLA-REAL, J.</p>

                  <h2 className="text-lg font-semibold mb-2">Case Category</h2>
                  <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow-sm">
                    Criminal
                  </span>

                  <h2 className="text-xl font-semibold mb-2 mt-4">Tags</h2>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-yellow-400 text-black text-xs px-3 py-1 rounded-full shadow-sm hover:scale-105 transition">
                      Not Cited Recently
                    </span>
                    <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow-sm hover:scale-105 transition">
                      Criminal
                    </span>
                  </div>
                </div>
              )}
            </li>
            <li
              className={`p-3 rounded-lg transition-all duration-300 cursor-pointer hover:bg-blue-950 ${
                activeTab === "Table of Contents" ? "bg-blue-950" : ""
              }`}
              onClick={() =>
                setActiveTab(
                  activeTab === "Table of Contents" ? null : "Table of Contents"
                )
              }
            >
              <div className="flex items-center gap-3">
                <FaBook /> {isOpen && "Table of Contents"}
              </div>

              {activeTab === "Table of Contents" && isOpen && (
                <div className="bg-white/20 backdrop-blur-md text-lg text-white p-4 rounded-lg mt-4 shadow-lg transition-all duration-500 animate-fadeIn">
                  {/* Internal Links */}
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#legal-basis"
                        className="text-blue-300 underline hover:text-blue-500"
                      >
                        📜 Legal Basis
                      </a>
                    </li>
                    <li>
                      <a
                        href="#ruling"
                        className="text-blue-300 underline hover:text-blue-500"
                      >
                        ⚖️ Ruling
                      </a>
                    </li>
                    <li>
                      <a
                        href="#related-cases"
                        className="text-blue-300 underline hover:text-blue-500"
                      >
                        🔗 Related Cases
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li
              className={`p-3 rounded-lg transition-all duration-300 cursor-pointer hover:bg-blue-950 ${
                activeTab === "Notes & Highlights" ? "bg-blue-950" : ""
              }`}
              onClick={() =>
                setActiveTab(
                  activeTab === "Notes & Highlights"
                    ? null
                    : "Notes & Highlights"
                )
              }
            >
              <div className="flex items-center gap-3">
                {" "}
                <FaStickyNote /> {isOpen && "Notes & Highlights"}{" "}
              </div>
              {activeTab === "Notes & Highlights" && isOpen && (
                <div className="bg-white text-black p-4 rounded-md mt-2">
                  No content available.
                </div>
              )}
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 max-[640px]:p-3 mt-5">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex flex-wrap gap-2 sm:flex-nowrap">
            <button
              onClick={handleDownload}
              className="bg-gray-300 p-2 rounded flex items-center gap-2"
            >
              <FaDownload /> Download
            </button>
            <button
              onClick={handlePrint}
              className="bg-gray-300 p-2 rounded flex items-center gap-2"
            >
              <FaPrint /> Print
            </button>
            <button className="bg-gray-300 p-2 rounded flex items-center gap-2">
              <FaEye /> View Case Summary
            </button>
            <div className="relative flex items-center w-80">
              <input
                type="text"
                placeholder="Search"
                className="border rounded-full pl-4 pr-12 py-2 w-full text-sm outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="absolute right-0 top-0 bottom-0">
                <button className="bg-gradient-to-br from-gray-800 to-blue-800 w-10 h-full rounded-r-full flex items-center justify-center text-white hover:bg-blue-600 transition-all">
                  <BiSearch size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Case Content */}
        <div className="bg-white p-6 rounded shadow">
          <h1 className="text-2xl font-bold">LANESTOSA VS. SANTAMARIA</h1>
          <p className="text-sm text-gray-500">
            G.R. No. 30076 | September 13, 1928 | Ponente: VILLA-REAL, J.
          </p>

          {/* Section 1 - Legal Basis */}
          <h2 id="legal-basis" className="text-lg font-bold mt-6">
            📜 Legal Basis
          </h2>
          <p className="mt-2 text-justify">
            The court cited the ruling in{" "}
            <a
              href="https://lawphil.net/judjuris/juri1925/sep1925/gr_23456_1925.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Alfonso v. Court of Appeals (G.R. No. 23456)
            </a>{" "}
            and relied heavily on the precedent set by{" "}
            <a
              href="https://lawphil.net/judjuris/juri1926/jul1926/gr_21456_1926.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Reyes v. Santos (G.R. No. 21456)
            </a>
            .
          </p>
          <p className="mt-2 text-justify">
            The court cited the ruling in{" "}
            <a
              href="https://lawphil.net/judjuris/juri1925/sep1925/gr_23456_1925.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Alfonso v. Court of Appeals (G.R. No. 23456)
            </a>{" "}
            and relied heavily on the precedent set by{" "}
            <a
              href="https://lawphil.net/judjuris/juri1926/jul1926/gr_21456_1926.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Reyes v. Santos (G.R. No. 21456)
            </a>
            .
          </p>

          {/* Section 2 - Ruling */}
          <h2 id="ruling" className="text-lg font-bold mt-6">
            ⚖️ Ruling
          </h2>
          <p className="mt-2 text-justify">
            The Supreme Court ruled in favor of the petitioners (Lanestosa and
            Lames) and reversed the decision of the lower court. The court
            emphasized the importance of recognizing ownership through valid
            land titles.
          </p>
          <p className="mt-2 text-justify">
            The Supreme Court ruled in favor of the petitioners (Lanestosa and
            Lames) and reversed the decision of the lower court. The court
            emphasized the importance of recognizing ownership through valid
            land titles.
          </p>
          <p className="mt-2 text-justify">
            The Supreme Court ruled in favor of the petitioners (Lanestosa and
            Lames) and reversed the decision of the lower court. The court
            emphasized the importance of recognizing ownership through valid
            land titles.
          </p>
          <p className="mt-2 text-justify">
            The Supreme Court ruled in favor of the petitioners (Lanestosa and
            Lames) and reversed the decision of the lower court. The court
            emphasized the importance of recognizing ownership through valid
            land titles.
          </p>
          <p className="mt-2 text-justify">
            The Supreme Court ruled in favor of the petitioners (Lanestosa and
            Lames) and reversed the decision of the lower court. The court
            emphasized the importance of recognizing ownership through valid
            land titles.
          </p>
          <p className="mt-2 text-justify">
            The Supreme Court ruled in favor of the petitioners (Lanestosa and
            Lames) and reversed the decision of the lower court. The court
            emphasized the importance of recognizing ownership through valid
            land titles.
          </p>
          <p className="mt-2 text-justify">
            The Supreme Court ruled in favor of the petitioners (Lanestosa and
            Lames) and reversed the decision of the lower court. The court
            emphasized the importance of recognizing ownership through valid
            land titles.
          </p>
          <p className="mt-2 text-justify">
            The Supreme Court ruled in favor of the petitioners (Lanestosa and
            Lames) and reversed the decision of the lower court. The court
            emphasized the importance of recognizing ownership through valid
            land titles.
          </p>
          <p className="mt-2 text-justify">
            The Supreme Court ruled in favor of the petitioners (Lanestosa and
            Lames) and reversed the decision of the lower court. The court
            emphasized the importance of recognizing ownership through valid
            land titles.
          </p>

          {/* Section 3 - Related Cases */}
          <h2 id="related-cases" className="text-lg font-bold mt-6">
            🔗 Related Cases
          </h2>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>
              <a
                href="https://lawphil.net/judjuris/juri1930/jan1930/gr_32056_1930.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                People v. Sia (G.R. No. 32056, January 1930)
              </a>
            </li>
            <li>
              <a
                href="https://lawphil.net/judjuris/juri1931/mar1931/gr_33123_1931.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                Ramos v. Sandiganbayan (G.R. No. 33123, March 1931)
              </a>
            </li>
            <li>
              <a
                href="https://lawphil.net/judjuris/juri1930/jan1930/gr_32056_1930.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                People v. Sia (G.R. No. 32056, January 1930)
              </a>
            </li>
            <li>
              <a
                href="https://lawphil.net/judjuris/juri1931/mar1931/gr_33123_1931.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                Ramos v. Sandiganbayan (G.R. No. 33123, March 1931)
              </a>
            </li>
            <li>
              <a
                href="https://lawphil.net/judjuris/juri1930/jan1930/gr_32056_1930.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                People v. Sia (G.R. No. 32056, January 1930)
              </a>
            </li>
            <li>
              <a
                href="https://lawphil.net/judjuris/juri1931/mar1931/gr_33123_1931.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                Ramos v. Sandiganbayan (G.R. No. 33123, March 1931)
              </a>
            </li>
            <li>
              <a
                href="https://lawphil.net/judjuris/juri1930/jan1930/gr_32056_1930.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                People v. Sia (G.R. No. 32056, January 1930)
              </a>
            </li>
            <li>
              <a
                href="https://lawphil.net/judjuris/juri1931/mar1931/gr_33123_1931.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                Ramos v. Sandiganbayan (G.R. No. 33123, March 1931)
              </a>
            </li>
            <li>
              <a
                href="https://lawphil.net/judjuris/juri1930/jan1930/gr_32056_1930.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                People v. Sia (G.R. No. 32056, January 1930)
              </a>
            </li>
            <li>
              <a
                href="https://lawphil.net/judjuris/juri1931/mar1931/gr_33123_1931.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                Ramos v. Sandiganbayan (G.R. No. 33123, March 1931)
              </a>
            </li>
            <li>
              <a
                href="https://lawphil.net/judjuris/juri1930/jan1930/gr_32056_1930.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                People v. Sia (G.R. No. 32056, January 1930)
              </a>
            </li>
            <li>
              <a
                href="https://lawphil.net/judjuris/juri1931/mar1931/gr_33123_1931.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                Ramos v. Sandiganbayan (G.R. No. 33123, March 1931)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
