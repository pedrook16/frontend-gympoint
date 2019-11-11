import styled from 'styled-components';
import logo from '../../assets/images/logo.png';
import { darken } from 'polished'

export const Container = styled.div`
    height: 100vh;
    background: #ee4d64;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const Box = styled.div`
    width: 360px;
    height: 448px;
    background: #fff;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
`;
export const Logo = styled.img.attrs({
    src: logo,
})`
    width: 100px;
    margin: 30px auto;
`;
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    label {
        font-size: 14px;
        color: #444444;
        text-align: left;
        font-weight: bold;
    }

    input {
        margin: 5px 0 10px 0;
        flex: 1;
        width: 300px;
        border: 1px solid #999;
        padding: 10px 15px;
        border-radius: 4px;
        font-size: 16px;
    }

    input::placeholder {
        color: #999;
    }

    button {
        padding: 15px 0;
        background: #ee4d64;
        border: 0;
        border-radius: 4px;
        color: #fff;
        font-size: 16px;
        font-weight: bold;

        &:hover {
            background: ${darken(0.03, '#ee4d64')};
        }
    }
`;
