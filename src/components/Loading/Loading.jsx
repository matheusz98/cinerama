import styled from 'styled-components';
import LoadingIMG from '../../images/movie.svg';

const LoadingContainer = styled.section `
    width: 100vw;
    height: 100vh;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: loading 3s linear infinite;

    @keyframes loading {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }


    img {
        width: 25%;
    }
`

const Loading = () => {
    return (
        <LoadingContainer>
            <img src={LoadingIMG} alt="Loading..." />
        </LoadingContainer>
    )
}

export default Loading
