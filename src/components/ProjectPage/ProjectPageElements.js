import styled from "styled-components";

export const DescSection = styled.div`
    margin-bottom: 13px;

    p {
        margin-bottom: 5px;
    }
`

export const LinkContainer = styled.div`
    p {
        margin-bottom: 5px;
    }

    a {
        transition: color .2s ease-in-out;
        text-decoration: inherit;
        color: inherit;

        &:hover {
            transition: color .2s ease-in-out;
            color: #2670ad;
        }
    }
`