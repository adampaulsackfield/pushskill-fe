import styled from 'styled-components';

export const StyledProfile = styled.main`

section {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 30px;
    background-color: ${({ theme }) => theme.colors.darkderBg};
    border: 1px solid ${({ theme }) => theme.colors.mainAccent};
    border-radius: 20px;
    5px 10px 18px #888888;
    margin: 30px 0;
    width: 800px;
    height: 450px

}

section div img {
    width: 250px;
    border-radius: 50%;
}

section .card {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 30px;
    padding: 30px;
    margin-bottom: 3px;
}
section .card-desials {
    display: flex;
    flex-direction: column;
    padding: 10px;

}

section .card-desials p{
    font-size: 18px;
    
}

section .card-desials small{
    font-size: 18px;
    
}

section .card-desials small span{
    font-size: 18px;
    font-weight: bold;
}

section .achievements{
    display: flex;
    flex-direction: row;
    padding: 20px;
    margin-left: 10px

}

section .achievements img{
    width: 30px;
    margin: 5px;
    

}

`;