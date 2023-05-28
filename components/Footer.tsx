import * as React from 'react'
import Link from 'next/link'

import { FaGithub } from '@react-icons/all-files/fa/FaGithub'
import { IoMoonSharp } from '@react-icons/all-files/io5/IoMoonSharp'
import { IoSunnyOutline } from '@react-icons/all-files/io5/IoSunnyOutline'

import * as config from '@/lib/config'
import { useDarkMode } from '@/lib/use-dark-mode'

import styles from './styles.module.css'

// TODO: merge the data and icons from PageSocial with the social links in Footer

export const FooterImpl: React.FC = () => {
  const [hasMounted, setHasMounted] = React.useState(false)
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  const onToggleDarkMode = React.useCallback(
    (e) => {
      e.preventDefault()
      toggleDarkMode()
    },
    [toggleDarkMode]
  )

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <footer className='pt-16'>
      <div className=' flex flex-col items-center'>
        <div className='pb-1 flex space-x-2 text-sm text-gray-500 dark:text-gray-400 sm:text-xs'>
          <div>{config.author}</div>
          <div>{` • `}</div>
          <div>{`© 2020 - ${new Date().getFullYear()}`}</div>
          <div>{`All rights reserved by`}</div>
          <Link href='/'>{config.name}</Link>
        </div>
        <div className='pb-3 text-sm text-gray-500 dark:text-gray-400'>
          <Link href='https://github.com/ankhgerel/School'>
            MySchool v0.0.1-dev
          </Link>
        </div>

        <div className={styles.settings}>
          {hasMounted && (
            <a
              className={styles.toggleDarkMode}
              href='#'
              role='button'
              onClick={onToggleDarkMode}
              title='Toggle dark mode'
            >
              {isDarkMode ? <IoMoonSharp /> : <IoSunnyOutline />}
            </a>
          )}
        </div>

        <div className={styles.social}>
          {config.github && (
            <a
              className={styles.github}
              href={`https://github.com/${config.github}`}
              title={`GitHub @${config.github}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithub />
            </a>
          )}
        </div>
      </div>
    </footer>
  )
}

export const Footer = React.memo(FooterImpl)
