import React from 'react'
import { NavList } from './NavigationStyles'
import { GENERAL_ROUTES } from '../../../routes/general.routes'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

type setReavealVideoType = {
  show: boolean
  video: string
  key: number
}

interface NavigationListProps {
  setRevealVideo: React.Dispatch<React.SetStateAction<setReavealVideoType>>
}

export const NavigationList: React.FC<NavigationListProps> = ({
  setRevealVideo
}) => {
  const onHoverStartHandler = ({ show, video, key }: setReavealVideoType) =>
    setRevealVideo({
      show,
      video,
      key
    })

  return (
    <NavList>
      <ul>
        {GENERAL_ROUTES.map(({ id, title, path, video }) => (
          <motion.li
            key={id}
            onHoverStart={() =>
              onHoverStartHandler({ show: true, video, key: id })
            }
            onHoverEnd={() =>
              onHoverStartHandler({ show: false, video, key: id })
            }
          >
            <Link to={`/projects/${path}`}>
              <motion.div
                className="link"
                initial={{ x: -108 }}
                whileHover={{
                  x: -40,
                  transition: {
                    duration: 0.4,
                    ease: [0.6, 0.05, -0.01, 0.9]
                  }
                }}
              >
                <span className="arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 57">
                    <path
                      d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                      fill="#FFF"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </span>
                {title}
              </motion.div>
            </Link>
          </motion.li>
        ))}
      </ul>
    </NavList>
  )
}
