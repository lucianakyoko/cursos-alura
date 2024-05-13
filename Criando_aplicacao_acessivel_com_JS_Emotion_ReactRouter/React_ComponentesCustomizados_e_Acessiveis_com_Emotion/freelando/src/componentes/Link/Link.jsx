import styled from '@emotion/styled'

const LinkPrimario = styled.a`
    cursor: pointer;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-decoration: none;    
    color: ${props => props.theme.cores.branco};
    &:hover {
        color: ${props => props.theme.cores.dark.a};
    }
`
const LinkSecundario = styled.a`
    cursor: pointer;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: ${props => props.theme.cores.primarias.b};
    &:hover {
        font-weight: bold;
        border-bottom: 1px solid ${props => props.theme.cores.primarias.b};
    }
`
export const Link = ({ children, variante = 'primario' }) => {
    if (variante === 'primario') {
        return <LinkPrimario variante={variante}>
            {children}
        </LinkPrimario>
    }
    return <LinkSecundario variante={variante}>
        {children}
    </LinkSecundario>
}