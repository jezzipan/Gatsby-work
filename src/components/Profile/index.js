import React from "react"
import { useStaticQuery, graphql } from 'gatsby'

import Avatar from '../Avatar'
import * as S from "./styled"


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
        <S.ProfileWrapper>
            <S.ProfileLink>
                <Avatar />
                <S.ProfileAuthor>
                    {title}
                    <S.ProfilePosition>
                        {position}
                    </S.ProfilePosition>
                </S.ProfileAuthor>

            </S.ProfileLink>
            <S.ProfileDescription>
                {description}
            </S.ProfileDescription>
        </S.ProfileWrapper>
    )
}


export default Profile
