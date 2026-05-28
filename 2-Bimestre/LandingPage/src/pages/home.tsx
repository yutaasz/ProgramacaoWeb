import { useState } from "react";
import Button from "../components/Button";
import LoteCard from "../components/LoteCard";
import TierCard from "../components/TierCard";
import TestimonialCard from "../components/TestimonialCard";

import Close from "../assets/close.svg";
import Menu from "../assets/menu.svg";

// Importação das Imagens Geradas por IA
import SilverLining from "../assets/silver_lining.png";
import GoldenMeadow from "../assets/golden_meadow.png";
import AzureSanctum from "../assets/azure_sanctum.png";

// Importação das Folhas de Estilo Modulares
import "../styles/header.css";
import "../styles/utility.css";
import "../styles/hero.css";
import "../styles/portfolio.css";
import "../styles/tiers.css";
import "../styles/voices.css";
import "../styles/inquiry.css";
import "../styles/footer.css";

export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [selectedTier, setSelectedTier] = useState("seraphim");

    // Lógica simples de submissão do formulário
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Petição enviada ao Firmamento. Aguarde o sinal de purificação.");
    };

    return (
        <>
            {/* 1. Cabeçalho (Navbar) */}
            <header className="header-nav">
                <div className="container header-container flex items-center justify-between">
                    <a href="#" className="logo-text">Hell'sGate</a>

                    <div className="desktop-only">
                        <ul className="nav-links flex gap-2">
                            <li>
                                <a href="#firmament">O Firmamento</a>
                            </li>
                            <li>
                                <a href="#plans">Planos de Ascensão</a>
                            </li>
                            <li>
                                <a href="#vision" className="active">Nossa Visão</a>
                            </li>
                            <li>
                                <a href="#inquiry">Inquérito</a>
                            </li>
                        </ul>
                    </div>

                    <div className="desktop-only">
                        <a href="#inquiry">
                            <Button text="ASCENDER AGORA" />
                        </a>
                    </div>

                    <div className="mobile-menu">
                        {showMobileMenu ? (
                            <div className="mobile-menu-content">
                                <div className="container flex mobile-nav-container">
                                    <span onClick={() => setShowMobileMenu(false)} className="btn-wrapper close-btn">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                    <ul className="flex flex-column gap-2">
                                        <li>
                                            <a href="#firmament" onClick={() => setShowMobileMenu(false)}>O Firmamento</a>
                                        </li>
                                        <li>
                                            <a href="#plans" onClick={() => setShowMobileMenu(false)}>Planos de Ascensão</a>
                                        </li>
                                        <li>
                                            <a href="#vision" onClick={() => setShowMobileMenu(false)}>Nossa Visão</a>
                                        </li>
                                        <li>
                                            <a href="#inquiry" onClick={() => setShowMobileMenu(false)}>Inquérito</a>
                                        </li>
                                        <li className="mt-lg">
                                            <a href="#inquiry" onClick={() => setShowMobileMenu(false)}>
                                                <Button text="ASCENDER AGORA" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        ) : (
                            <span onClick={() => setShowMobileMenu(true)} className="btn-wrapper">
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        )}
                    </div>
                </div>
            </header>

            {/* 2. Hero Section */}
            <section className="hero-section" id="vision">
                <div className="hero-content">
                    <span className="hero-subtitle">A Culminação Suprema</span>
                    <h1 className="hero-title">ASCENDA PARA O SEU PEDAÇO DA ETERNIDADE</h1>
                    <p className="hero-desc">
                        Deixe o terrestre para trás. Garanta o seu santuário entre as estrelas no empreendimento celestial mais exclusivo já concebido.
                    </p>
                    <div className="hero-buttons">
                        <a href="#lotes">
                            <Button text="Ver Lotes Celestiais" />
                        </a>
                        <a href="#plans">
                            <Button text="O Portfólio Celestial" secondary />
                        </a>
                    </div>
                    <a href="#lotes" className="hero-arrow" aria-label="Rolar para baixo">
                        <svg viewBox="0 0 24 24">
                            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                        </svg>
                    </a>
                </div>
            </section>

            {/* 3. Lotes Celestiais (Portfolio) */}
            <main className="container py-xl" id="firmament">
                <section id="lotes">
                    <div className="section-title-wrapper">
                        <h2 className="section-title">O Portfólio Celestial</h2>
                        <span className="section-subtitle">Nossos lotes de habitação celestial à sua escolha</span>
                    </div>

                    <div className="portfolio-grid">
                        <LoteCard 
                            image={SilverLining}
                            title="O Lado Iluminado"
                            desc="Uma estrutura minimalista nas nuvens mais altas, oferecendo silêncio e reflexão incomparáveis."
                            price="50.000 Almas"
                        />
                        <LoteCard 
                            image={GoldenMeadow}
                            title="O Prado Dourado"
                            desc="Vastas extensões de luz onde o sol nunca se põe. O ápice do anseio terrestre."
                            price="75.000 Almas"
                        />
                        <LoteCard 
                            image={AzureSanctum}
                            title="O Santuário Azure"
                            desc="Nas profundezas do azul celestial, um canto privado do universo para contemplação profunda."
                            price="250.000 Almas"
                        />
                    </div>
                </section>

                {/* 4. Limiar Celestial */}
                <section className="threshold-section">
                    <h3 className="threshold-title">Limiar Celestial</h3>
                    <div className="threshold-labels">
                        <span>O Terrestre</span>
                        <span className="threshold-center">72% PURIFICADO</span>
                        <span>O Divino</span>
                    </div>
                    <div className="threshold-bar-container">
                        <div className="threshold-bar-fill"></div>
                    </div>
                    <p className="threshold-sub">
                        Progresso de ascensão global em direção à Grande Abertura
                    </p>
                </section>
            </main>

            {/* 5. Planos de Ascensão */}
            <section className="tiers-section" id="plans">
                <div className="container">
                    <div className="section-title-wrapper">
                        <h2 className="section-title">Planos de Ascensão</h2>
                        <span className="section-subtitle">Escolha seu plano de Ascensão para personalizar seu pedaço de eternidade.</span>
                    </div>

                    <div className="tiers-grid">
                        <TierCard 
                            name="Neófito"
                            tagline="Entrada nas Nuvens"
                            price="50"
                            suffix="/ em almas"
                            features={[
                                "Acesso à superfície das nuvens",
                                "Comodidades espirituais compartilhadas",
                                "Instruções de constelação"
                            ]}
                            buttonText="Iniciar Ascensão"
                        />
                        <TierCard 
                            name="Serafim"
                            tagline="Propriedade Celestial Premium"
                            price="500"
                            suffix="/ em almas"
                            features={[
                                "Flutuação nuvem privada",
                                "Captação de luz eterna",
                                "Mordomo Serafim dedicado",
                                "Manutenção de auréola 24/7"
                            ]}
                            buttonText="Garantir Seu Lote"
                            featured
                        />
                        <TierCard 
                            name="Divindade"
                            tagline="Senhorio sobre Constelações"
                            price="P.O.A."
                            suffix="/ eternidade"
                            features={[
                                "Soberania total sobre constelações",
                                "Direito de portal de atmosfera",
                                "Subsídio de manifestação eterna"
                            ]}
                            buttonText="Contato Direto"
                        />
                    </div>
                </div>
            </section>

            {/* 6. Depoimentos (Vozes do Firmamento) */}
            <section className="voices-section">
                <div className="container">
                    <div className="section-title-wrapper">
                        <h2 className="section-title">Vozes do Firmamento</h2>
                        <span className="section-subtitle">Relatos reais das almas que já garantiram sua ascensão</span>
                    </div>

                    <div className="voices-grid">
                        <TestimonialCard 
                            text="&ldquo;A transição foi sem esforço. Minha família está agora abençoada com um lar celestial eterno, exatamente como prometido.&rdquo;"
                            author="Dr. THIAGO PAZ MILHOM"
                            role="Ascendido em 7600.D.C"
                            avatar="TM"
                        />
                        <TestimonialCard 
                            text="&ldquo;A princípio foi desafiador se acostumar à luz, mas logo percebi que esta era a paz que buscava. Maravilhoso.&rdquo;"
                            author="Lady Seraphina"
                            role="Ascendida em 8192.D.C"
                            avatar="LS"
                        />
                    </div>
                </div>
            </section>

            {/* 7. Formulário de Consulta (Inicie sua Consulta) */}
            <section className="inquiry-section" id="inquiry">
                <div className="container">
                    <div className="section-title-wrapper">
                        <h2 className="section-title">Inicie sua Consulta</h2>
                        <span className="section-subtitle">Consulte um Agente de Ascensão para personalizar seu pedaço de eternidade.</span>
                    </div>

                    <div className="inquiry-card">
                        <form className="inquiry-form" onSubmit={handleSubmit}>
                            <div className="form-row-2">
                                <div className="form-group">
                                    <label htmlFor="soul-name" className="form-label">Nome Completo da Alma</label>
                                    <input 
                                        type="text" 
                                        id="soul-name" 
                                        className="form-input" 
                                        placeholder="Ex: João da Silva" 
                                        required 
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email" className="form-label">Coordenadas Terrestres Atuais (E-mail)</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        className="form-input" 
                                        placeholder="Ex: joao@terra.com" 
                                        required 
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="tier-select" className="form-label">Nível de Ascensão Alvo</label>
                                <select 
                                    id="tier-select" 
                                    className="form-select" 
                                    value={selectedTier}
                                    onChange={(e) => setSelectedTier(e.target.value)}
                                >
                                    <option value="neophyte">Neófito (50 Almas)</option>
                                    <option value="seraphim">Serafim (500 Almas)</option>
                                    <option value="deity">Divindade (P.O.A.)</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="requests" className="form-label">Pedidos Especiais para o Santuário Eterno (Opcional)</label>
                                <textarea 
                                    id="requests" 
                                    className="form-textarea" 
                                    placeholder="Descreva particularidades como temperatura constante, espectro de luz customizado ou proximidade com constelações..."
                                ></textarea>
                            </div>

                            <div className="form-submit-container">
                                <Button text="Enviar Petição" />
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* 8. Rodapé (Footer) */}
            <footer className="footer-section">
                <div className="container footer-container">
                    <span className="footer-logo">Hell'sGate</span>
                    
                    <ul className="footer-links">
                        <li><a href="#vision">Termos Sagrados</a></li>
                        <li><a href="#firmament">Pacto do Firmamento</a></li>
                        <li><a href="#plans">Mapa Celestial</a></li>
                    </ul>

                    <p className="footer-slogan">
                        O AMANHÃ HELL'S GATE. TRANSCENDENDO O TERRESTRE.
                    </p>

                    <div className="footer-socials">
                        <a href="#" className="footer-icon-link" aria-label="Constelações">
                            <svg viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                            </svg>
                        </a>
                        <a href="#" className="footer-icon-link" aria-label="Nuvens">
                            <svg viewBox="0 0 24 24">
                                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
                            </svg>
                        </a>
                        <a href="#" className="footer-icon-link" aria-label="Portais">
                            <svg viewBox="0 0 24 24">
                                <path d="M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                            </svg>
                        </a>
                    </div>

                    <span className="footer-copyright">
                        &copy; 2026 Hell'sGate. Desenvolvido para a eternidade.
                    </span>
                </div>
            </footer>
        </>
    );
}