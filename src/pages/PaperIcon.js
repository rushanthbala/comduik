import React, { Component } from 'react';
import PaperIcon from '../components/paper/paperIcon'
import InsightsDistrictCard from '../components/layouts/InsightsDistrictCard'

class PaperIconsHeader extends Component {
    constructor(props) {
        super(props);
      }
    render(props) { 
        return ( 
            <div>
                huohou
                {/* <PaperIcon/> */}
                <InsightsDistrictCard
                header='iuguyfsiuguyfsiuguyfsiuguyfsiuguyfs'
                para ='kdkjdclkdjoidajdlkjmhoimn' 
                notivation='yutnotivationnotivationnotivationnotivationnotivationuyrhtr'
                />
                {props.children}
            </div>
         );
    }
}
 
export default PaperIconsHeader;
