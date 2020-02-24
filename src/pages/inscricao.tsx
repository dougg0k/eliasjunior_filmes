import * as React from "react";
import styled from "styled-components";
import BancoDoBrasilLogo from "../components/common/BancoDoBrasilLogo";
import BradescoLogo from "../components/common/BradescoLogo";
import Container from "../components/common/Container";
import SEO from "../components/utils/Seo";
import { COLOR_1, COLOR_6, COLOR_7 } from "../utils/colors";

const Title = styled.h1`
	font-weight: 600;
	font-size: 2.2em;
	text-align: center;
	padding-top: 40px;
	color: ${COLOR_1};
`;

const SubTitle = styled.h2`
	font-weight: 600;
	font-size: 1.45em;
	text-align: center;
	padding-top: 25px;
	color: ${COLOR_6};
`;

const LeftSideContainer = styled.div`
	width: 50%;
	border-right: 1px solid ${COLOR_1};
	height: 400px;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (max-width: 1200px) {
		border-right: 0;
		width: 100%;
		height: auto;
	}
`;

const RightSideContainer = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	@media (max-width: 1200px) {
		width: 100%;
		margin-top: 40px;
	}
`;

const TitlesContainer = styled.div`
	margin-top: 50px;
	margin-bottom: 50px;
`;

const SideTitle = styled.h3`
	font-size: 1.4em;
`;

const FormContainer = styled.div`
	margin-top: 30px;
`;

const SidesContainer = styled.div`
	display: flex;
	flex-direction: row;
	@media (max-width: 1200px) {
		flex-direction: column;
	}
`;

const BancosOpcoesContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const BancoOpcaoContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 150px;
`;

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 25px;
`;

const TextPrefix = styled.span`
	font-size: 1.2em;
	font-weight: 600;
	margin-right: 5px;
`;

const TextPosfix = styled.span`
	font-size: 1.1em;
	font-weight: 500;
	word-wrap: break-word;
	display: block;
`;

const TextLine = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const LogoContainer = styled.div`
	height: 100px;
	width: 150px;
`;

const AvisoContainer = styled.div`
	margin-top: 25px;
	margin-bottom: 50px;
	width: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
`;

const AvisoTitle = styled.h2`
	color: ${COLOR_7};
	text-decoration: underline;
	font-size: 2em;
`;

const AvisoText = styled.p`
	font-size: 1.2em;
	font-weight: 500;
	margin-top: 10px;
	width: 50%;
	text-align: center;
`;

function InscricaoPage() {
	return (
		<Container>
			<SEO title="Inscrição" />
			<TitlesContainer>
				<Title>Formas de pagamento</Title>
				<SubTitle>Assinatura Mensal de R$ 14,90</SubTitle>
			</TitlesContainer>
			<SidesContainer>
				<LeftSideContainer>
					<SideTitle>Cartão de Crédito c/ Paypal</SideTitle>
					<FormContainer>
						<form
							action="https://www.paypal.com/cgi-bin/webscr"
							method="post"
							target="_top"
						>
							<input type="hidden" name="cmd" value="_s-xclick" />
							<input
								type="hidden"
								name="hosted_button_id"
								value="DDLNWJZF84PCN"
							/>
							<input
								type="image"
								src="https://www.paypalobjects.com/pt_BR/BR/i/btn/btn_subscribeCC_LG.gif"
								name="submit"
								alt="PayPal - A maneira fácil e segura de enviar pagamentos online!"
							/>
							<img
								alt=""
								src="https://www.paypalobjects.com/pt_BR/i/scr/pixel.gif"
								width="1"
								height="1"
							/>
						</form>
					</FormContainer>
				</LeftSideContainer>
				<RightSideContainer>
					<SideTitle>Opções de Bancos para Transferência ou Depósito</SideTitle>
					<BancosOpcoesContainer>
						<BancoOpcaoContainer>
							<LogoContainer>
								<BancoDoBrasilLogo />
							</LogoContainer>
							<TextContainer>
								<TextLine>
									<TextPosfix>HDV Studio Cine Video LTDA</TextPosfix>
								</TextLine>
								<TextLine>
									<TextPosfix>Studio 8 Cine Video LTDA</TextPosfix>
								</TextLine>
								<TextLine>
									<TextPrefix>CNPJ:</TextPrefix>
									<TextPosfix>09.194.298/0001-92</TextPosfix>
								</TextLine>
								<TextLine>
									<TextPrefix>Agência:</TextPrefix>
									<TextPosfix>3567-0</TextPosfix>
								</TextLine>
								<TextLine>
									<TextPrefix>Conta Corrente:</TextPrefix>
									<TextPosfix>107055-0</TextPosfix>
								</TextLine>
							</TextContainer>
						</BancoOpcaoContainer>
						<BancoOpcaoContainer>
							<LogoContainer>
								<BradescoLogo />
							</LogoContainer>
							<TextContainer>
								<TextLine>
									<TextPrefix>Nome:</TextPrefix>
									<TextPosfix>Raquel Aparecida</TextPosfix>
								</TextLine>
								<TextLine>
									<TextPrefix>Agência:</TextPrefix>
									<TextPosfix>0787</TextPosfix>
								</TextLine>
								<TextLine>
									<TextPrefix>Conta Corrente:</TextPrefix>
									<TextPosfix>224-0</TextPosfix>
								</TextLine>
							</TextContainer>
						</BancoOpcaoContainer>
					</BancosOpcoesContainer>
				</RightSideContainer>
			</SidesContainer>
			<AvisoContainer>
				<AvisoTitle>Importante</AvisoTitle>
				<AvisoText>
					Apos fazer o deposito e necessario enviar a foto do comprovante por
					WhatsApp ou E-Mail para liberação do acesso.
				</AvisoText>
				<TextLine>
					<TextPrefix>WhatsApp:</TextPrefix>
					<TextPosfix>(11) 94899-7038</TextPosfix>
				</TextLine>
				<TextLine>
					<TextPrefix>E-Mail:</TextPrefix>
					<TextPosfix>
						<a href="mailto:info@eliasjuniorfilmes.com.br">
							info@eliasjuniorfilmes.com.br
						</a>
					</TextPosfix>
				</TextLine>
			</AvisoContainer>
		</Container>
	);
}

export default InscricaoPage;
