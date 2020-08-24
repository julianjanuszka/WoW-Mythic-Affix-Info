import React from 'react';
import video from './TestBackground.mp4'
import * as Raider from './api/raider';
import MythicAffix from './components/MythicAffix';
import AffixList from './components/AffixList';
import './App.scss';

export class App extends React.Component {
    state = { affixData: [] };

    fetchMythicAffixes = async ()  => {
        const response = await Raider.client.get(Raider.MYTHIC_ROUTE);

        console.log('Jul ', response); 
        this.setState({ affixData: response.data.affix_details })
    }
    componentDidMount() {
        this.fetchMythicAffixes();
    }
    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <video className="video-bg" autoPlay loop src={video}></video>
                </div>
                <AffixList affixData={this.state.affixData}/>
            </div>
        );
    }
}

export default App;