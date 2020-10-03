import React from 'react'
import styled from 'styled-components'

const WrapperForFlex = styled.div`
    .flex {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    section {
        position: relative;
    }
`;

export default function Wrapper({child}) {
return <WrapperForFlex>{child}</WrapperForFlex>
}
