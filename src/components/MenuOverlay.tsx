import React, {useState} from "react";
import { a } from '@react-spring/web';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as Instagram } from '../assets/instagram.svg';
import { ReactComponent as Twitter } from '../assets/twitter.svg';
import { ReactComponent as LinkedIn } from '../assets/linkedin.svg';
import { ReactComponent as GitHub } from '../assets/github.svg';
import './MenuOverlay.css';
import useMediaQuery from '../hooks/useMediaQuery';

export default function MenuOverlay() {
    const [instaHovered, setInstaHovered] = useState<boolean>(false);
    const [twitterHovered, setTwitterHovered] = useState<boolean>(false);
    const [linkedInHovered, setLinkedInHovered] = useState<boolean>(false);
    const [githubHovered, setGithubHovered] = useState<boolean>(false);
    const [isSmallScreen] = useMediaQuery("screen and (max-aspect-ratio: 8/7)");

    function openLinkInNewTab(url: string) {
        var win = window.open(url, '_blank');
        if(win != null)
            win?.focus();
    };

    function openLinkedIn() {
        openLinkInNewTab('https://www.linkedin.com/in/thomas-alder/');
    };

    function openGitHub() {
        openLinkInNewTab('https://github.com/Alder9');
    }

    function openTwitter() {
        openLinkInNewTab('https://twitter.com/alderithm');
    }

    function openInstagram() {
        openLinkInNewTab('https://www.instagram.com/thomas_alder/');
    }

    return (
        <div className="overlay">
            <a.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 720" >
                <text className="name" style={{ whiteSpace: 'pre' }} fontFamily="Montserrat" fontSize={100} letterSpacing="-0.01em">
                    <tspan className="thomas" x={isSmallScreen ? 60 : 100} y={200} children="THOMAS"/>
                    <tspan className="alder" x={isSmallScreen ? 60 : 100} y={isSmallScreen ? 290 : 275} letterSpacing="-0.02em" children="ALDER" />
                </text>
                <Logo 
                    height={isSmallScreen ? 130 : 110} 
                    x={isSmallScreen ? 180 : 140} 
                    y={220} 
                />
                <Instagram 
                    onClick={() => openInstagram() } 
                    onMouseEnter={ () => { setInstaHovered(true); } }
                    onMouseLeave={ () => { setInstaHovered(false); } }
                    height={isSmallScreen ? 40 : 25} 
                    x={isSmallScreen ? -220 : -180} 
                    y={isSmallScreen ? 570 : 620} 
                    cursor="pointer" 
                    pointer-events="all" 
                    fill={instaHovered ? '#E4405F' : '#000000' } 
                />
                <Twitter 
                    onClick={() => openTwitter()} 
                    onMouseEnter={ () => { setTwitterHovered(true); } }
                    onMouseLeave={ () => { setTwitterHovered(false); } }
                    height={isSmallScreen ? 40 : 25}
                    x={isSmallScreen ? -70 : -62.5} 
                    y={isSmallScreen ? 570 : 620}  
                    cursor="pointer"
                    pointer-events="all" 
                    fill={twitterHovered ? '#1DA1F2' : '#000000' } 
                />
                <LinkedIn 
                    onClick={() => openLinkedIn()} 
                    onMouseEnter={ () => { setLinkedInHovered(true); } }
                    onMouseLeave={ () => { setLinkedInHovered(false); } }
                    height={isSmallScreen ? 40 : 25}
                    x={isSmallScreen ? 70 : 62.5} 
                    y={isSmallScreen ? 570 : 620} 
                    cursor="pointer" 
                    pointer-events="all" 
                    fill={linkedInHovered ? '#0A66C2' : '#000000' } 
                />
                <GitHub 
                    onClick={() => openGitHub()} 
                    onMouseEnter={ () => { setGithubHovered(true); } }
                    onMouseLeave={ () => { setGithubHovered(false); } }
                    height={isSmallScreen ? 40 : 25}
                    x={isSmallScreen ? 220 : 180} 
                    y={isSmallScreen ? 570 : 620}  
                    cursor="pointer" 
                    pointer-events="all" 
                    fill={githubHovered ? '#C4C4C4' : '#000000' } 
                />
                <text className="menu-options" fontSize={48} fontFamily="Ovo">
                    <tspan 
                        x={isSmallScreen ? 220 : 240} 
                        y={isSmallScreen ? 400 : 420} 
                        children="about" 
                        cursor="pointer"
                    />
                    <tspan 
                        x={isSmallScreen ? 210 : 233} 
                        y={isSmallScreen ? 480 : 480} 
                        children="gallery" 
                        cursor="pointer"
                    />
                </text>
            </a.svg>
        </div>
    );
}