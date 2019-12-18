import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #efefef;
  display: flex;
  justify-content: center;
  padding-top: 200px;
`;

export const Card = styled.div`
  width: 800px;
  height: 400px;
  background: #fff;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
  display: flex;
  border-radius: 8px;

  img {
    width: 400px;
    height: 300px;
    margin-top: 50px;
  }

  div {
    width: 100%;
    padding: 36px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #456;
    border-radius: 0 8px 8px 0;
  }
`;

export const Title = styled.h1`
  font-size: 16px;
  font-weight: 700;
  text-align: right;
  text-transform: uppercase;
  color: #ff8eaa;
`;

export const CardContent = styled.div`
  p {
    text-align: center;
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.4;
    margin-bottom: 20px;
    margin-top: 40px;
  }
  span {
    text-align: center;
    color: #fff;
    font-size: 16px;
  }
`;

export const CardFooter = styled.div`
  display: flex;

  h4 {
    text-align: center;
    color: #fff;
    text-transform: uppercase;
  }
`;
