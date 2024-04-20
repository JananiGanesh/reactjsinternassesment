import React from 'react'
import { Button1, Button2, ButtonContainer, Container, FooterContent, H1, HR, OvalDiv } from './main.styles'
import Welcome from '../welcome/Welcome'

export default function MainComponent() {
    const divStyle = {
        backgroundColor: '#E8EAEE',
    };

    return (
        <div style={divStyle}>
            <Container>
                <H1>Ah!!, I never saw someone from your company.</H1>
                <HR />
                <Welcome />
                <ButtonContainer>
                    <Button1> Browse Test Data</Button1>
                    <Button2>
                        <OvalDiv>+</OvalDiv>
                        Connect Domain
                    </Button2>
                </ButtonContainer>

                <FooterContent>
                    ** Tenenat Connections are not allowed in free tier, however you can still explore the website features.
                </FooterContent>
            </Container>
        </div>
    )
}
