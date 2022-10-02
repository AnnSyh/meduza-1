// import bgImg from '../../images/background-lg-img.jpg';
import './App.scss';
import React from 'react';
import Container from '@material-ui/core/Container';
// import Link from '@material-ui/core/Link';
import Demo from '../Demo/Demo';

// import '../scss/App.scss';

// function Copyright() {
//   return (
//     <div>
//       {'Copyright © '}
//       <Link color='inherit' href='https://mui.com/'>
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </div>
//   );
// }


function App() {
  return (
    <div className='App'>
        <Container className='App__container' >
          <Demo />
          {/* <Copyright /> */}
        </Container>
    </div>
  );
}

export default App;