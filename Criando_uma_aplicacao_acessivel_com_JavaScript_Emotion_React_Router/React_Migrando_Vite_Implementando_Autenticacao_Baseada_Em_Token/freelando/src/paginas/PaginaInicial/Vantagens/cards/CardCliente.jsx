import styled from "@emotion/styled"
import { Col } from "react-grid-system"
import { Card } from "../../../../componentes/Card/Card"
import { Tipografia } from "../../../../componentes/Tipografia/Tipografia"

const SpanEstilizado = styled.span`
    color: ${props => props.theme.cores.primarias.a};
`

const CardCliente = ({icone, texto}) => {
    return (<Col sm={6} md={6} lg={3} style={{ marginBottom: '24px' }}>
        <Card comBorda={false}>
            {icone}
            <Tipografia componente="body" variante="body">
                <SpanEstilizado>
                    {texto}
                </SpanEstilizado>
            </Tipografia>
        </Card>
    </Col>)
}

export default CardCliente