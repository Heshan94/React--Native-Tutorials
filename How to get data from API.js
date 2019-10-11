import React,{Component} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet
} from 'react-native';

class App extends Component{

  constructor(){
    super();

    this.state={
      isLoading:true,
      data:[]
    }
  }

  componentDidMount(){
   fetch("https://facebook.github.io/react-native/movies.json")
      .then(response=>response.json())
      .then(responceJson=>{
          this.setState({
              isLoading:false,
              data:responceJson.movies
          });

      })

      .catch(e=>{
        console.log(e);
      })
  }

  render(){
    
    let movies=this.state.data.map((x)=>{
      return  <View key={x.id} style={styles.item}><Text style={styles.text}>{x.title}</Text></View>
    })

     if(this.state.isLoading){
        return(
          <View style={styles.container}>
            <ActivityIndicator/>
          </View>
        )
      }
    
    else{

      return(
        <View style={styles.container}>
          {movies}
        </View>
      )
    }
}
}

export default App;

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },

  item:{
    flex:1,
    alignItems:'center',
    margin:10,
    alignSelf:'stretch',
    justifyContent:'center'
  },
  text:{
    color:'blue',
    fontSize:20
  }
});