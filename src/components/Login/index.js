import Cookies from 'js-cookie'
import {Component} from 'react'
import {
  LoginContainer,
  LoginCardContainer,
  WebsiteLogo,
  Label,
  LoginInput,
  ShowPasswordLabel,
  Form,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    passwordType: 'password',
    isError: false,
    errorMsg: '',
  }

  updateUserName = e => {
    this.setState({
      username: e.target.value,
    })
  }

  updatePassword = e => {
    this.setState({
      password: e.target.value,
    })
  }

  onCheckbox = e => {
    this.setState({
      passwordType: e.target.value ? 'text' : 'password',
    })
  }

  onSubmitForm = async e => {
    e.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()
    if (response.ok) {
      const jwtToken = data.jwt_token
      Cookies.set('satishToken', jwtToken, {expires: 30})
      const {history} = this.props
      history.replace('/')
      this.setState({
        username: '',
        password: '',
        passwordType: 'password',
        isError: false,
      })
    } else {
      this.setState({
        username: '',
        password: '',
        passwordType: 'password',
        isError: true,
        errorMsg: data.error_msg,
      })
    }

    console.log(data)
  }

  render() {
    const {username, password, passwordType, isError, errorMsg} = this.state
    const websiteLogo =
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
    return (
      <LoginContainer>
        <LoginCardContainer>
          <WebsiteLogo alt="watch logo" src={websiteLogo} />
          <Form onSubmit={this.onSubmitForm}>
            <Label htmlFor="username">USERNAME</Label>
            <LoginInput
              placeholder="Username"
              type="text"
              id="username"
              value={username}
              onChange={this.updateUserName}
            />
            <Label htmlFor="password">PASSWORD</Label>
            <LoginInput
              placeholder="Password"
              type={passwordType}
              id="password"
              value={password}
              onChange={this.updatePassword}
            />
            <div>
              <input
                type="checkbox"
                id="showPassword"
                onClick={this.onCheckbox}
              />
              <ShowPasswordLabel htmlFor="showPassword">
                Show password
              </ShowPasswordLabel>
            </div>
            <LoginButton type="submit">Login</LoginButton>
            <ErrorMsg>{isError && `* ${errorMsg}`}</ErrorMsg>
          </Form>
        </LoginCardContainer>
      </LoginContainer>
    )
  }
}

export default Login
