import React, { useEffect, useRef, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { Helmet } from "react-helmet"
import "../sass/index.scss"

export default function Home() {
  const [name, setName] = useState("")
  const newName = useRef("EDUARDOTORRES")

  const nameTyping = async () => {
    for (let i = 0; i < newName.current.length; i++) {
      await new Promise(function (resolve) {
        setTimeout(() => {
          if (name.length >= newName.current.length) {
            resolve()
            return
          }
          resolve(setName(name => name + newName.current[i]))
        }, (i % 3 === 0 ? 30 : 20) * (i + 1))
      })
    }
  }

  useEffect(() => {
    nameTyping()
  }, [])

  return (
    <>
      <Helmet>
        <html lang="pt-BR" />
        <meta charSet="utf-8" />
        <title>Eduardo Torres - Full Stack Developer</title>
      </Helmet>
      <div className="card">
        <div className="title">
          <span className="slash">{">"} </span>
          {name}
          <div className="marker"></div>
        </div>
        <span className="role">Full Stack Developer</span>
      </div>
      <ul className="links">
        <li>
          <a target="_blank" href="https://github.com/eduardotorresdev">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a href="mailto:contato@eduardotorres.dev">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
        <li>In search of the code without crimes</li>
      </ul>
    </>
  )
}
