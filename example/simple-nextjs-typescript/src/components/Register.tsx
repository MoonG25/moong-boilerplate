import React from 'react'
import styled from 'styled-components'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { closeModal } from '../redux/common/actions'

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > div:not(:first-child) {
    width: 70%;
    padding: 15px;
  }

  // CLOSE
  .register__close {
    width: 100%;
    text-align: right;
    padding: 15px 15px 0 0;
    font-weight: 900;

    a {
      color: black;
      text-decoration: none;
      cursor: pointer;
    }
  }

  // TITLE
  .register__title {
    text-align: center;
    border-bottom: 1px solid #ccc;

    h1, h2, h3, h4, h5, h6 {
      font-weight: 800;
      margin: 7px;
    }

    button {
      margin-left: 2em;
    }
  }

  // CONTENT
  .register__content {
    & > div {
      & > label {
        display: block;
        font-weight: 700;
      }

      padding: 1em;
    }
  }

  // RECHAPTCHA
  .register__recaptcha {
    display: flex;
    font-size: 15px;

    & > div {
      margin: 5px;
    }

    & > div:last-child {
      text-align: center;
      vertical-align: middle;
      line-height: 26px;
    }

    a {
      color: blue;
      text-decoration: none;
    }
  }

  // FOOTER
  .register__footer {
    margin-bottom: 33px;
  }

  // BUTTON
  .btn {
    background-color: #123456;
    border: 1px solid #123456;
    border-radius: 5px;
    color: #fff;
    padding: 1em 2em;
    font-weight: 800;
    cursor: pointer;
    outline: none;

    &.btn-full {
      width: 100%;
    }

    &:hover {
      background-color: #234567;
    }
  }

  // INPUT
  .register__input {
    width: 100%;
    padding: 9px;
    border: 1px solid #123456;
    border-radius: 5px;
    outline: none;
    font-size: 14px;

    &:focus {
      border: 1px solid green;
    }
  }

  .register__select {
    width: 100%;
    height: 35px;
    border: 1px solid #123456;
    border-radius: 5px;
    outline: none;
  }

  .register__checkbox {
    display: none;
    
    & + label {
      display: inline-block;
      width: 20px;
      height: 20px;
      border: 2px solid #bcbcbc;
      cursor: pointer;
      vertical-align: middle;
      border: 0;
      background-color: #123456;
      margin: 3px;
    }

    &:checked + label {
      background-color: green;
    }

    &:checked + label:after {
      content: "";
      background-color: green;
    }
  }
`

interface RegisterProps {
  closeModal: Function
}

class Register extends React.Component<RegisterProps> {
  render() {
    const { closeModal } = this.props
    return (
      <RegisterContainer>
        <div className="register__close">
          <a onClick={() => closeModal()}>X</a>
        </div>
        <div className="register__title">
          <h2>REGISTER</h2>
          Have an account? <button className="btn">LOGIN</button>
        </div>

        <div className="register__content">
          <div>
            <label>Email</label>
            <input className="register__input" type="email" placeholder="Enter email" />
          </div>
          <div>
            <label>Password</label>
            <input className="register__input" type="password" placeholder="Enter password" />
          </div>
          <div>
            <label>Country of residence</label>
            <select className="register__select">
              <option value="">Select country</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
          </div>
        </div>

        <div className="register__recaptcha">
          <div>
            <input className="register__checkbox" id="register__checkbox" type="checkbox"/>
            <label htmlFor="register__checkbox"></label>
          </div>
          <div>
            I agree to the <a href="#">Privacy Policy</a> and the <a href="#">Terms of Services</a>
          </div>
        </div>

        <div className="register__footer">
          <button className="btn btn-full">REGISTER</button>
        </div>
      </RegisterContainer>
    )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  closeModal: bindActionCreators(closeModal, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Register);