import React from 'react';
import ButtonAppBar from '../components/navication/navication'
import InputFeildWithHeader from '../components/navication/InputFeildWithHeader'
import IconLabelButtons from '../components/core/Buttons'
import InsightsDistrictCard from '../components/layouts/InsightsDistrictCard'
import theme from '../theme/theme'
import { ThemeProvider } from '@material-ui/styles';
import LeftSideImages from '../pages/LeftSideImages'

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}> 
          <ButtonAppBar/>
          <InputFeildWithHeader/>
          <IconLabelButtons/>
          <InsightsDistrictCard/>
          {/* </> */}
          <LeftSideImages/>
     </ThemeProvider>
    </div>
  );
}

export default App;
