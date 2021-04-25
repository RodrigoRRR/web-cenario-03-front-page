import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Navbar, Nav, Accordion, Card } from 'react-bootstrap'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Link } from 'react-router-dom'

function Faq() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Link to="/"><Navbar.Brand href="#">
                    <img
                        alt=""
                        src="spotify-logo-2.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
          Spotify
        </Navbar.Brand></Link>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#faq">FAQ</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Body />
            <Footer />
        </div>
    );
}

function Body() {
    return (
        <Accordion defaultActiveKey="0">
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                <strong>Como faço para obter música no Spotify?</strong>
    </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body><p>Para colocar sua música no Spotify, você precisa trabalhar com um distribuidor ou com uma gravadora que já tenha um distribuidor. Eles lidam com todo o licenciamento e distribuição e pagam os royalties do streaming.</p>

<p>Se você atualmente não tem um distribuidor, verifique o diretório de fornecedores para ver os distribuidores preferenciais e recomendados que atendem aos nossos padrões de fornecimento de metadados de qualidade e proteção contra violação.</p>

<p>Cada serviço é único, então certifique-se de fazer uma pequena lição de casa antes de escolher um. A maioria cobra uma taxa ou comissão.</p>

<p><strong>Ainda trabalhando em sua música?</strong> Obtenha um ótimo som com a ajuda de produtores, engenheiros, músicos e compositores profissionais no SoundBetter . O mercado de talentos de produção musical líder mundial - agora parte da família Spotify for Artists.</p>

<p><strong>Nota:</strong> Se você deseja lançar uma música para nossos editores de lista de reprodução , ela deve ser inédita e lançada com antecedência. É melhor escolher um distribuidor que permita definir uma data de lançamento com pelo menos uma semana de antecedência.</p>

<p>Assim que sua música for entregue ao Spotify, você pode reivindicar seu perfil no Spotify para Artistas. Se sua liberação ainda não foi publicada, você precisará do link de URI para reivindicar.</p></Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                <strong>Como posso dar feedback sobre o Spotify para Artistas?</strong>
    </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>Junte-se à nossa comunidade de pesquisa de artistas, gerentes e funcionários de gravadoras e compartilhe suas ideias.</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                <strong>Como obtenho um podcast no Spotify?</strong>
    </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                    <Card.Body><p>Compartilhar seu podcast no Spotify dá a você acesso a mais de 200 milhões de ouvintes em mais de 75 países em todo o mundo. </p>
                    <p>Para obter o seu podcast no Spotify, consulte Como faço para obter o meu podcast no Spotify? no site Spotify for Podcasters.</p></Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="3">
                <strong>Existe um aplicativo Spotify para Artistas?</strong>
    </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                    <Card.Body><p>Sim! No momento, o aplicativo Spotify para Artistas está disponível para iOS e Android. Encontre-nos na App Store ou baixe o aplicativo da Play Store .</p></Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="4">
                <strong>Como posso gerenciar meu perfil de artista no Spotify?</strong>
    </Accordion.Toggle>
                <Accordion.Collapse eventKey="4">
                    <Card.Body><p>Seu perfil de artista é sua página inicial no Spotify. É onde vive toda a sua música. É também onde os fãs podem descobrir mais sobre o que está acontecendo com você - ouvir seus lançamentos mais recentes, ir mais fundo com uma de suas listas de reprodução, descobrir onde você está em turnê e até comprar seus produtos mais recentes.</p>

                    <p>O Spotify for Artists permite que os artistas e sua equipe gerenciem seu perfil de artista. Depois de obter acesso, você pode atualizar suas imagens, escrever sua biografia, apresentar uma lista de reprodução de um artista e fazer uma Escolha de artista.</p>

                    <p>Se você não tem acesso ao Spotify para Artistas, acesse aqui .</p>

                    <p>Para obter mais informações sobre como gerenciar seu perfil, consulte nosso guia do artista .</p></Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}

function Footer() {
    return (
        <MDBFooter color="black" className="font-small py-3">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="2">
                        <img src="spotify-logo-22.png" id="image-footer" />
                    </MDBCol>
                    <MDBCol md="2">
                        <h5 className="title">EMPRESA</h5>
                        <ul>
                            <li className="list-unstyled">
                                <a href="#">Sobre</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#">Empregos</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#">For the Record</a>
                            </li>
                        </ul>
                    </MDBCol>
                    <MDBCol md="2">
                        <h5 className="title">COMUNIDADES</h5>
                        <ul>
                            <li className="list-unstyled">
                                <a href="#!">Para Artistas</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Desenvolvedores</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Publicidade</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Investidores</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Fornecedores</a>
                            </li>
                        </ul>
                    </MDBCol>
                    <MDBCol md="6">
                        <h5 className="title">LINKS ÚTEIS</h5>
                        <ul>
                            <li className="list-unstyled">
                                <a href="#!">Suporte</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Player da Web</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Aplicativo móvel grátis</a>
                            </li>
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-4">
                <MDBContainer fluid>
                    &copy; {new Date().toISOString().slice(0, 10)} Copyright: <a href="https://www.bacongeekstore.com" target="_blank"> BaconGeekStore.com </a>
                </MDBContainer>
            </div>
        </MDBFooter>
    )
}
export default Faq;