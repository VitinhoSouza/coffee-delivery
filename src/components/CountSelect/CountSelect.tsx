
import * as S from './CountSelect.styles';

export function CountSelect(){

    return(
        <S.CountSelectContainer>
            <S.CountButton higher={true}>
                <span>-</span>
            </S.CountButton>
            <span>1</span>
            <S.CountButton>
                <span>+</span>
            </S.CountButton>
            
        </S.CountSelectContainer>
    )
}