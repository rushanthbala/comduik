import React, { Component } from 'react';
import LeftSideImage from '../../components/layouts/LeftSideImage';
// import RightSideImage from '../../components/layouts/RightSideImage';
import globalNetworkImage from '../../assets/images/chaptertwo.svg';
// import logo from '../assets/logos/Logo.png';
// import LoginForm from '../../../react-route-master/src/components/forms/LoginForm';
import { withStyles } from '@material-ui/styles';

const styles = (theme) => ({
  logo: {
    width: '159px',
    height: '38px',
    border: '0',
    marginBottom: '50px',
  },
  cart: {
    maxWidth: '430px',
    width: '100%',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
});

class LeftSideImage1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialValues: {
        email: '',
        password: '',
      },
    };
  }

  render() {
    const { classes } = this.props;
    const { initialValues } = this.state;

    return (
      <LeftSideImage
        image={globalNetworkImage}
        title="comdu.it is a global network of diaspora volunteers"
        text="Committed to the sustainable development of the traditional 
        Tamil homelands in Sri Lanka. We currently operate in Canada and Germany. "
        text2="Our mission is to help shift diaspora engagement from charity to 
        sustainability, from aid to economic development, and from supporting
         remittance economies to building knowledge economies."
        button="Who we are?"
        iconText="American shorthair tabby russian blue. Turkish Angora leopard yet malkin."
        iconText2="American shorthair tabby russian blue. Turkish angora leopard yet malkin."
      >
      </LeftSideImage>
    );
  }
}

export default withStyles(styles)(LeftSideImage1);

