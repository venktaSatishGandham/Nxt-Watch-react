import styled from 'styled-components'

export const LoginContainer = styled.div`
  height: 100vh;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LoginCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.14);
  padding: 40px 20px;
  border-radius: 10px;
  @media screen and (min-width: 768px) {
    min-width: 25%;
    max-width: 30%;
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  width: 90%;
`
export const WebsiteLogo = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const Label = styled.label`
  text-align: left;
  align-self: flex-start;
  font-size: 14px;
  padding: 15px 20px 3px 0px;
  font-family: Roboto;
  font-weight: 600;
  color: #475569;
`
export const LoginInput = styled.input`
  width: 100%;
  height: 35px;
  padding-left: 10px;
  border: 1px solid #94a3b8;
  border-radius: 5px;
  margin-top: 5px;
  margin-bottom: 10px;
  outline: none;
  color: black;
`
export const ShowPasswordLabel = styled.label`
  color: black;
  font-weight: 400;
  font-family: roboto;
`

export const LoginButton = styled.button`
  background-color: #3b82f6;
  color: white;
  width: 100%;
  border: none;
  padding: 7px 0px;
  border-radius: 8px;
  margin-top: 12px;
  font-family: roboto;
  font-size: 15px;
  font-weight: 500;
`
export const ErrorMsg = styled.p`
  color: #ff0000;
  margin: 0px;
  font-size: 14px;
  padding-top: 6px;
  font-weight: 400;
`
