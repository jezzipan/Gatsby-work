import React from "react"

import * as S from "./styled"

const PostItem = () => (
    <S.PostItemLink to="/slug">
        <S.PostItemWrapper>
            <S.PostItemTag background="#47650b">
                Misc
            </S.PostItemTag>
            <S.PostItemInfo>
                <S.PostItemDate>
                    30 de Setembro de 2020 - 1 min de leitura
                </S.PostItemDate>
                <S.PostItemTitle>
                    Autonomia
                </S.PostItemTitle>
                <S.PostItemDescription>
                    Alguns motivos para você ter o seu blog e evitar o medium.
            </S.PostItemDescription>
            </S.PostItemInfo>
        </S.PostItemWrapper>
    </S.PostItemLink>
)

export default PostItem