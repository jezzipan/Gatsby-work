import React from "react"
import { useStaticQuery, graphql } from 'gatsby'

import Avatar from '../Avatar'
const Profile = () => {
    //dados
    const {
        site: {
            siteMetadata: { title, description, position },
        }
    } = useStaticQuery(graphql`
    query MySiteMetaData {
        site {
          siteMetadata {
            title
            description
            position
          }
        }
      }
      `)
//renderizando
    return (
        <div className="Profile-wrapper">
            <Avatar />
            <h1>{title}</h1>
            <h2>
                {position}
            </h2>
            <p>
                {description}
            </p>
        </div>
    )
}


export default Profile
