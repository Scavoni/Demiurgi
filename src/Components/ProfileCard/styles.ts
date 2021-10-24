import styled from 'styled-components';


export const Container = styled.header`
    background: var(--blue);
`;

export const Div = styled.div`

    display: inline-block;
    justify-content: space-around;
    padding: 4em 4em 2em 2em;
    :root {
        /* FONT WEIGHT */
        --bold: 900;
        --regular: 700;
        --thin: 500;
        /* NEUTRAL COLORS */
        --very-pale-blue: hsl(225, 100%, 98%);
        --desaturated-blue: hsl(224, 23%, 55%);
        --dark-blue: hsl(223, 47%, 23%);
        /* PRIMARY COLORS */
        --pale-blue: hsl(225, 100%, 94%);
        --bright-blue: hsl(245, 75%, 52%);
    }

    div {
        background: hsl(225, 100%, 98%);
    }
    h2, h3, h4, p {
        text-align: center;
        padding-top: 0.5em;
        font-weight: 600;
    }

    img{
        object-fit: cover;
        width: 360px;
        height: 260px;
        border-radius: 20px 20px 0 0;
    }

    button {
        display: block;
        width: 100%;
        color: var(--pale-blue);
        background-color: var(--bright-blue);
        text-decoration: none;
        border-radius: 10px;
        padding: 1rem;
        text-align: center;
        margin-top: 2rem;
        box-shadow: var(--bright-blue) 0px 8px 24px;
        transition: ease-in-out 300ms;
        border: none;
        background-color: hsl(224, 23%, 55%);

        &:hover {
            scale: 1.02;
            background-color: hsl(245, 75%, 52%, .7);
            box-shadow: var(--bright-blue) 0px 3px 12px;
        }
    }
`;

export const AttributesCard = styled.div`
    display: flex;
    justify-content: space-around;
    padding-top: 12px;
`;
