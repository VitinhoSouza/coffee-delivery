
import * as S from './CountSelect.styles';

type CountSelectProps = {
    value: number;
    increase: () => void;
    decrease: () => void;
}

export function CountSelect({value, increase, decrease}:CountSelectProps){

    return(
        <S.CountSelectContainer>
            <S.CountButton higher={true} type="button">
                <span onClick={decrease}>-</span>
            </S.CountButton>
            <span>{value}</span>
            <S.CountButton type="button">
                <span onClick={increase}>+</span>
            </S.CountButton>
            
        </S.CountSelectContainer>
    )
}