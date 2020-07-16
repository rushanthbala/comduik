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

class RightSideImage1 extends Component {
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
    // const { classes } = this.props;
    // const { initialValues } = this.state;

    return (
      <LeftSideImage
        image={globalNetworkImage}
        title="Collect data and make it available to anyone"
        text="Tharuvu is a data visualization portal for anyone, We collect and
         organize public data and let anyone access it in a seamless way."
        text2=" American shorthair tabby russian blue. Turkish Angora leopard yet malkin.
         American shorthair tabby russian blue. Turkish Angora leopard yet malkin.American shorthair tabby russian blue."
        button="What we do?"
        iconText="American shorthair tabby russian blue. Turkish Angora leopard yet malkin."
        iconText2="American shorthair tabby russian blue. Turkish angora leopard yet malkin."
      >
      </LeftSideImage>
    );
  }
}

export default withStyles(styles)(RightSideImage1);

