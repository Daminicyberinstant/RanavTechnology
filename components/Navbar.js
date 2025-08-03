"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X, Menu } from "lucide-react"
import { usePathname } from 'next/navigation';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
 const pathname = usePathname();
  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebar = document.getElementById("mobile-sidebar")
      const hamburger = document.getElementById("hamburger-button")

      if (
        isOpen &&
        sidebar &&
        !sidebar.contains(event.target) &&
        hamburger &&
        !hamburger.contains(event.target)
      ) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "hidden" // Prevent background scroll
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isOpen])

  const navigationLinks = [
    { href: "/about", label: "About", icon: "📄" },
    { href: "/services", label: "Services", icon: "🛠" },
    { href: "/portfolio", label: "Portfolio", icon: "📁" },
    { href: "/careers", label: "Career", icon: "💼" },
    { href: "/blog", label: "Blog", icon: "📰" },
  ]

  const closeMobileMenu = () => setIsOpen(false)

  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={closeMobileMenu} />}

      {/* Header Bar */}
       <nav className="w-[70vw] mx-auto mt-6 px-4 py-3 border border-gray-300 bg-white shadow-md rounded-xl flex items-center justify-between z-50 relative">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <img src="/logo.webp" alt="Ranav Technologies Logo" width={150} height={50} className="h-auto max-h-12" />
        </Link>

        {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6 font-semibold uppercase text-sm">
      {navigationLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`hover:text-[#016e7c] transition-colors duration-200 ${
                isActive ? 'text-[#016e7c]' : ''
              }`}
              style={{
                fontFamily: 'Karla, sans-serif',
                color: isActive ? '#016e7c' : 'rgba(0, 0, 0, 0.5)',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '23px',
              }}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>

        {/* Desktop Contact Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-block rounded-lg px-6 py-3 bg-[#f69331] hover:bg-gray-600 text-white font-semibold text-sm transition-colors duration-300"
          >
            CONTACT US
          </Link>
        </div>

        {/* Hamburger Icon */}
        <button
          id="hamburger-button"
          className="md:hidden text-black p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          onClick={() => setIsOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={isOpen}
        >
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Mobile Sidebar */}
      <div
        id="mobile-sidebar"
        className={`fixed top-0 left-0 h-screen w-[85%] max-w-sm bg-white z-50 shadow-lg transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-200">
          <Link href="/" onClick={closeMobileMenu}>
            <img src="/logo.webp" alt="Ranav Technologies Logo" width={130} className="h-auto max-h-10" />
          </Link>
          <button
            onClick={closeMobileMenu}
            aria-label="Close navigation menu"
            className="text-black p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Sidebar Links */}
        <nav className="mt-6 px-6">
          <h2 id="mobile-menu-title" className="sr-only">
            Navigation Menu
          </h2>
          <ul className="text-sm font-medium uppercase">
            {/* Home Link */}
            <li>
              <Link
                href="/"
                onClick={closeMobileMenu}
                className="py-3 border-b border-gray-100 hover:text-[#016e7c] flex items-center gap-3 transition-colors duration-200"
              >
                <span className="text-lg">🏠</span>
                <span>Home</span>
              </Link>
            </li>

            {/* Navigation Links */}
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="py-3 border-b border-gray-100 hover:text-[#016e7c] flex items-center gap-3 transition-colors duration-200"
                >
                  <span className="text-lg">{link.icon}</span>
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}

            {/* Contact Link */}
            <li>
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="py-3 border-b border-gray-100 hover:text-[#016e7c] flex items-center gap-3 transition-colors duration-200"
              >
                <span className="text-lg">📞</span>
                <span>Contact Us</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navbar
