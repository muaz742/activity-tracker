
import {React, Component} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Slideshow from 'react-native-image-slider-show';

export default class TopSlider extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        position: 1,
        interval: null,
        dataSource: [
          {
            title: 'Title 1',
            caption: 'Caption 1',
            url: 'https://i.ytimg.com/vi/VuBgZNjYhWU/maxresdefault.jpg',
          }, {
            title: 'Title 2',
            caption: 'Caption 2',
            url: 'https://medyascope.tv/wp-content/uploads/2021/02/ko9JKjQiS0GRLq_PB2I__g-750x425.jpg',
          }
        ],
      };
    }
  
    UNSAFE_componentWillMount() {
        this.setState({
        interval: setInterval(() => {
          this.setState({
            position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
          });
        }, 5000)
      });
    }
  
    UNSAFE_componentWillMount() {
      clearInterval(this.state.interval);
    }
  
    render() {
      return (
          <View style={{maxHeight:100}}> 
      <Slideshow 
          dataSource={this.state.dataSource}
          position={this.state.position}
          onPositionChanged={position => this.setState({ position })} />

</View>
      );
    }
  }