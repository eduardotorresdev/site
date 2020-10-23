import React, { useEffect, useRef, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import "../sass/index.scss"

export default function Home() {
  document.title = "Eduardo Torres - Full stack Developer"
  const [name, setName] = useState("")
  const newName = useRef("EDUARDOTORRES")

  const teste = async () => {
    for (let i = 0; i < newName.current.length; i++) {
      await new Promise(function (resolve) {
        setTimeout(() => {
          if (name.length >= newName.current.length) return
          setName(name => name + newName.current[i])
        }, (Math.random() > 0.5 ? 120 : 200) * (i + 1))
      })
    }
  }

  useEffect(() => {
    teste()
  }, [])

  return (
    <>
      <div className="card">
        <div className="title">
          <span className="slash">{">"} </span>
          {name}
          <div className="marker"></div>
        </div>
        <span className="role">Full-stack Developer</span>
      </div>
      <ul className="links">
        <li>
          <FontAwesomeIcon icon={faGithub} />
        </li>
      </ul>
    </>
  )
}
