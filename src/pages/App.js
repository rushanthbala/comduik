import React from 'react';
import ButtonAppBar from '../components/navication/navication'
import InputFeildWithHeader from '../components/navication/InputFeildWithHeader'
import IconLabelButtons from '../components/core/Buttons'
import InsightsDistrictCard from '../components/layouts/InsightsDistrictCard'
import theme from '../theme/theme'
import { ThemeProvider } from '@material-ui/styles';
import LeftSideImage2 from '../pages/SideImageSetUp/LeftSideImages'
import RightSideImage1 from '../pages/SideImageSetUp/RightSideImage1'


function App() {
  return (
    <div>
      <ThemeProvider theme={theme}> 
          <ButtonAppBar/>
          <InputFeildWithHeader/>
          <IconLabelButtons/>
          <InsightsDistrictCard/>
          <RightSideImage1/>
          <LeftSideImage2/>
     </ThemeProvider>
    </div>
  );
}

export default App;
