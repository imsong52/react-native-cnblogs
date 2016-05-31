import React, { Component } from 'react';
import {
	Text,
	View,
	TextInput,
	StyleSheet,
	TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { SearchBarStyles, CommonStyles, StyleConfig } from '../style';
import BackButton from './backButton';

class SearchBar extends Component {

	constructor(props) {
	    super(props);

	    this.state = {
	    	searchKey : ''
	    };
	}

	renderSearchLeftConfig(){
	    let { router } = this.props;
	    return (
	        <BackButton router = { router }/>
	    );
	}

	renderSearchRightConfig(){
		let { onSearchHandle } = this.props;
		return (
			<TouchableOpacity onPress={ onSearchHandle }>
				<View>
	    			<Icon name='magnifying-glass' 
	    				size={22} color={ StyleConfig.mainColor } />
	    		</View>
			</TouchableOpacity>
		);
	}

	renderSearchInput(){

		let { placeholder = '请输入博主名称' } = this.props;

		return (
			<TextInput style={ styles.searchInput }
	    			placeholder ={ placeholder }
	    			maxLength = { 20 }
	    			underlineColorAndroid = { '#fff' }
				    onChangeText={(searchKey) => this.setState({searchKey})}
				    value={this.state.text} />
		);
	}

	render() {
	    return (
	    	<View style={ styles.container }>
	    		{ this.renderSearchLeftConfig() }
	    		{ this.renderSearchInput() }
	    		{ this.renderSearchRightConfig() }
	    	</View>
	    )
	}
}

const styles = StyleSheet.create({
	container: {
	    flexDirection:'row',
	    paddingRight: 10,
	    alignItems:'center',
	    backgroundColor: '#fff',
	    borderBottomWidth:1,
	    borderBottomColor:'#f5f5f5'
	},
	searchInput:{
		flex: 1,
		height: 49,
		fontSize: 16,
		marginLeft: 5,
		textAlign:'center',
		color:'rgba(0,0,0,0.7)',
		borderColor:'transparent',
		borderWidth: 0
	}
});


export default SearchBar;


