import React, { Component } from 'react';

import { Container, Box, Logo, Form } from './styles';

export default class Sign extends Component {
    render() {
        return (
            <Container>
                <Box>
                    <Logo />
                    <Form>
                        <label>SEU E-MAIL</label>
                        <input type="email" placeholder="exemplo@email.com" />

                        <label>SUA SENHA</label>
                        <input type="password" placeholder="*********" />

                        <button type="submit">Entrar no Sistema</button>
                    </Form>
                </Box>
            </Container>
        );
    }
}
