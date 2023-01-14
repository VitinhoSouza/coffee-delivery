import { Outlet } from 'react-router-dom';

import { Navbar } from '../../components/Navbar/Navbar';

import * as S from './DefaultLayout.styles'

export function DefaultLayout() {
    return (
        <S.LayoutContainer>
            <Navbar />
            <Outlet />
        </S.LayoutContainer>
    )
}
