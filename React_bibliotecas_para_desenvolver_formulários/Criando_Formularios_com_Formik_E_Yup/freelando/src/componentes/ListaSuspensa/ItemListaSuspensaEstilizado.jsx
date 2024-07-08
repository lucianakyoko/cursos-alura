import styled from "@emotion/styled";

export const ItemListaSuspensaEstilizado = styled.li`
    padding: ${props => props.theme.espacamentos.xs} 0;
    text-align: center;
    border-bottom: 1px solid ${props => props.theme.cores.neutras.c};
    cursor: pointer;       
    &:last-child {
        border: none;
    }
    color: ${props => props.focoAtivo ? props.theme.cores.focus : 'inherit'};
    &:hover {
        color: ${props => props.theme.cores.focus};
    }
`