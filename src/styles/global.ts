import {createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f0f2f5;
        --red: #e52E4E;
        --blue: #5429CC;
        --green: #33CC95;

        --blue-ligth : #6933FF;
        --text-title: #453F5F;
        --text-body: #969CB3;

        --shape: #FFFFFF;
    }


    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;//15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%;//14px
        }
    }
`