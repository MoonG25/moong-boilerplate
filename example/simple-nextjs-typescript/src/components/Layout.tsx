import Header from './Header'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #123456;
  
  @media (max-width: 600px) {
    height: 100%;
  }
`

const Layout = props => (
  <Wrapper>
    <Header />
    {props.children}
  </Wrapper>
)

export default Layout