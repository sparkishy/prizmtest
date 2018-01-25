/**
 * Test Application for the prizm media
 * https://github.com/sparkishy/prizmtest
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';
import * as Animatable from 'react-native-animatable';

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = { 
	    			text: '',
	    			emailTitle: false,
	    			validBorder: "white"
				 };
  }	
  
  postingToDb(emailVal) {
	fetch('https://developerspark.ca/php/prizmsql.php', {
	  method: 'POST',
	  headers: {
	    Accept: 'application/json',
	    'Content-Type': 'application/json',
	  },
	  body: JSON.stringify({
	    email: emailVal,
	    company: 'prizm'
	  }),
	  })
	  .then((response) => {
	    console.log("result: " + JSON.stringify(response));
	  })
	  .catch((error) => {
	    console.error(error);
	  });
  }
  
  emailValidation(email) {
	if (email == ""){
		this.setState({validBorder: "white"});
	} else {
		var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    var bool = regex.test(email.toLowerCase());
	    if (bool == false){
		    this.setState({validBorder: "red"});
	    } else {
		    this.setState({validBorder: "blue"});
	    }
	    this.postingToDb(email);	
	}
  }
  expand(){
	  this.setState({emailTitle: true});
	  this.refs.inputView.fadeIn();
	  this.refs.titleText.fadeIn();
	  this.refs.submitButton.zoomIn();
  }
  
  shrink(){
	  this.setState({emailTitle: false});
	  this.refs.inputView.fadeIn();
	  this.refs.titleText.fadeIn();
	  this.refs.submitButton.zoomIn();
  }
  
  render() {
	let titleView = (<View></View>);
	if (this.state.emailTitle == true){
		titleView = (<Animatable.Text animation="fadeIn" style={styles.emailTitle}>{"Type Email"}</Animatable.Text>);
	}
	
	let borderColor = this.state.validBorder;
    return (
      <View style={styles.container}>
      	<Animatable.Text animation="fadeIn" ref="titleText" style={styles.title}>{"Prizm Email Validation"}</Animatable.Text>
      	
      	{titleView}
      	<Animatable.View animation="bounceInLeft" ref="inputView" style={{width: "80%", height: 50, borderColor: 'gray', borderWidth: 2, borderColor: borderColor}}>
      	<TextInput 
         onChangeText={(text) => {
	         this.setState({text}); 
			 if (text == ""){
				 this.setState({validBorder: "white"});
			 }
         }}
         value={this.state.text}
         autoCorrect={false}
         placeholder="Type Email"
         onFocus={() => {this.expand();}}
         onEndEditing={() => {this.shrink();}}
         onSubmitEditing={() => {this.emailValidation(this.state.text);}}
         onBlur={() => {this.shrink();}}
         blurOnSubmit={true}
         style={styles.textInput}
		/>
		</Animatable.View>
		<Animatable.View animation="zoomIn" ref="submitButton">
        <TouchableHighlight style={styles.submitButton} onPress={() => {this.emailValidation(this.state.text);}}>
			<Text style={styles.submitButtonText}>{"VALIDATE"}</Text>
		</TouchableHighlight>
		</Animatable.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'flex-start',
    alignItems:'center',
    backgroundColor: '#a9d9d9',
  },
  title: {
	color: 'white',
	fontSize: 20,
	fontWeight: 'bold',
	marginTop: 50,
	marginBottom: 50,
	backgroundColor: '#434343',
	padding: 10 
  },
  textInput: {
	  width: "100%", 
	  height: "100%", 
	  fontSize: 15
  },
  emailTitle: {
	color: 'black',
	fontSize: 15,
	fontWeight: 'bold',
	marginBottom: 10,
	backgroundColor: '#fff',
	padding: 10
  },
  submitButtonText: {
    color: 'white', 
    textAlign: 'center', 
    fontSize: 14,
    fontWeight: 'bold'
  },
  submitButton: {
    backgroundColor:'#43429b', 
    padding: 20, 
    borderRadius: 15, 
    marginTop: 10, 
    opacity: 0.85, 
    borderColor: "black", 
    borderWidth: 2
  },
});
