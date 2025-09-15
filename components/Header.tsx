'use client'

import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from './Logo'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import { motion } from 'framer-motion'

// Animation configurations
const navHover = { scale: 1.15 }
const navTap = { scale: 0.95 }
const transition = { duration: 0.2 }

const underlineInitial = { width: 0, opacity: 0 }
const underlineHover = { width: '100%', opacity: 1 }

const logoHover = { scale: 1.1, rotate: 5 }
const buttonHover = { scale: 1.1 }
const buttonTap = { scale: 0.95 }

const Header = () => {
  let headerClass =
    'flex items-center w-full justify-between py-6 px-4 sm:px-6 lg:px-8 relative z-50'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0'
  }

  return (
    <header className={headerClass}>
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <motion.div
          className="flex items-center justify-between"
          whileHover={logoHover}
          transition={transition}
        >
          <div className="mr-3">
            <Logo fill="#1c2837" className="h-10 w-auto" />
          </div>
        </motion.div>
      </Link>
      <div className="flex items-center space-x-4 leading-5 sm:-mr-6 sm:space-x-6">
        <div className="no-scrollbar hidden max-w-40 items-center gap-x-4 overflow-x-auto sm:flex md:max-w-72 lg:max-w-96">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <motion.div
                key={link.title}
                className="relative m-1"
                whileHover={navHover}
                whileTap={navTap}
                transition={transition}
              >
                <Link
                  href={link.href}
                  className="text-brand-text hover:text-primary-500 font-medium transition-colors duration-200"
                >
                  {link.title}
                </Link>
                <motion.div
                  className="bg-primary-500 absolute bottom-0 left-0 h-0.5"
                  initial={underlineInitial}
                  whileHover={underlineHover}
                  transition={transition}
                />
              </motion.div>
            ))}
        </div>
        <motion.div whileHover={buttonHover} whileTap={buttonTap} transition={transition}>
          <SearchButton />
        </motion.div>
        <motion.div whileHover={buttonHover} whileTap={buttonTap} transition={transition}>
          <ThemeSwitch />
        </motion.div>
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
