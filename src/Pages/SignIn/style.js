import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #e5e5e5;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Left = styled.div`
  height: 100vh;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  img {
    width: 600px;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;
export const Right = styled.div`
  height: 100vh;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    width: 100%;
  }
`;
export const Title = styled.h1`
  margin: 0 auto;
  font-size: 24px;
  font-weight: 700;
  color: var(--hoverText);
`;
export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 450px;
  height: 550px;
  padding: 25px;
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  @media (max-width: 900px) {
    width: calc(100% - 32px);
  }
`;

Right.Title = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  color: var(--text);
  margin-bottom: 0;
  margin-left: 15px;
`;
Right.Wrap = styled.div`
  height: 120px;
  width: 380px;
  padding: 5px 5px;
  @media (max-width: 900px) {
    width: 100%;
  }
`;
Right.Btn = styled.div`
  margin: 10px auto;
  width: 240px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0d5ef4;
  border-radius: 12px;
  cursor: pointer;
  font-size: 16px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  color: white;
  user-select: none;
  box-shadow: var(--shadow);
  :hover {
    transform: scale(0.98);
    background-color: var(--backMode);
    color: var(--hoverText);
    font-weight: 800;
  }
  img {
    height: 40px;
    width: 40px;
    margin-right: 15px;
  }
`;
Right.Input = styled.input`
  padding: 12px 15px;
  width: 100%;
  margin-top: 12px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  background: linear-gradient(-90deg, #f9fafb, #ffffff);
  outline: none;
  border: none;
  border-bottom: 1px solid var(--text);
  /* border-radius: 16px; */
  :focus {
    border-bottom: 4px solid var(--hoverText);
    transition: var(--transition);
  }
`;

Right.Link = styled.p`
  margin-left: 15px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #111827;
  line-height: 25px;
`;
Right.Message = styled.p`
  margin-left: 15px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: red;
  margin-bottom: 0;
`;
Right.Span = styled.span`
  cursor: pointer;
  color: var(--hoverText);
  font-weight: 700;
  text-decoration: underline;
`;
