import styled from "@emotion/styled"

const StyledSpan = styled.span`
    border-radius: 16px;
    box-sizing: border-box;
    display: inline-block;
    border: 1px solid;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    background: ${props => props.theme.cores.neutras.c};
    border-color: ${props => props.theme.cores.neutras.a};
    padding: ${props => props.theme.espacamentos.xs} ${props => props.theme.espacamentos.s};
    margin: ${props => props.theme.espacamentos.xs};
    &:hover {
        color: ${props => props.theme.cores.primarias.b};
        border-color: ${props => props.theme.cores.primarias.b};
        background-color: ${props => props.theme.cores.secundarias.b};
    }
`

const Chip = ({children}) => {
    return (<StyledSpan>
        {children}
    </StyledSpan>)
}

export default Chip