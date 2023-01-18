import styled from "styled-components";

type props = {
    background: string
}

export const LayoutHome = styled.div<props>`
    padding: 20px;
    border: 1px solid;
    background: ${(props) => props.background ? props.theme.colors[props.background] : props.theme.colors.primary };
`