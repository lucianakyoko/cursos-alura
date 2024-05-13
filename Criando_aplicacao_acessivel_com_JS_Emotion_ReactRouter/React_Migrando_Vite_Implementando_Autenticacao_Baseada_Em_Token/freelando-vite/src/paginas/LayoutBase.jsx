import { Col, Container, Row } from "react-grid-system"
import { Outlet } from "react-router-dom"
import { Cabecalho } from "../componentes/Cabecalho/Cabecalho"
import { FreelandoLogo } from "../componentes/Icones/FreelandoLogo"
import { IconeInstagram } from "../componentes/Icones/IconeInstagram"
import { IconeTwitch } from "../componentes/Icones/IconeTwitch"
import { IconeTwitter } from "../componentes/Icones/IconeTwitter"
import { IconeWhatsApp } from "../componentes/Icones/IconeWhatsApp"
import { Link } from "../componentes/Link/Link"
import { ItemListaInline } from "../componentes/Lista/ItemListaInline"
import { ListaInline } from "../componentes/Lista/ListaInline"
import { Rodape } from "../componentes/Rodape/Rodape"
import { Tipografia } from "../componentes/Tipografia/Tipografia"

const LayoutBase = () => {
    return (
        <>
            <Cabecalho>
                <Container>
                    <Row align="center">
                        <Col>
                            <FreelandoLogo />
                        </Col>
                        <Col style={{ textAlign: 'right' }}>
                            <Link>Login</Link>
                        </Col>
                    </Row>
                </Container>
            </Cabecalho>
            <Container>
                <Outlet />
            </Container>
            <Rodape>
                <Container>
                    <Row align="center">
                        <Col>
                            <FreelandoLogo height={40} width={176} />
                            <Tipografia variante="legenda" componente="legenda">Desenvolvido por Alura. Projeto fictício sem fins comerciais.</Tipografia>
                        </Col>
                        <Col style={{ textAlign: 'right' }}>
                            <Tipografia variante="legenda" componente="legenda">Acesse nossas redes:</Tipografia>
                            <ListaInline>
                                <ItemListaInline>
                                    <a href="/" aria-label="Link para o WhatsApp">
                                        <IconeWhatsApp />
                                    </a>
                                </ItemListaInline>
                                <ItemListaInline>
                                    <a href="/" aria-label="Link para a Twitch">
                                        <IconeTwitch />
                                    </a>
                                </ItemListaInline>
                                <ItemListaInline>
                                    <a href="/" aria-label="Link para a Instagram">
                                        <IconeInstagram />
                                    </a>
                                </ItemListaInline>
                                <ItemListaInline>
                                    <a href="/" aria-label="Link para a Twitter">
                                        <IconeTwitter />
                                    </a>
                                </ItemListaInline>
                            </ListaInline>
                        </Col>
                    </Row>
                </Container>
            </Rodape>
        </>
    )
}

export default LayoutBase