import 
  {View ,
   Text , 
   StyleSheet , 
   Image} 
   from 'react-native'
import Slider from '@react-native-community/slider'

export default function App (){
  return (

    //Tela da senha:
    <View style={styles.conteiner}>

      <View>

      
      <Image 
      source={require("./src/assets/logo.png")}
      style={styles.logo}>
        

      </Image>
      </View>



    
        
        <View style={styles.area}>

          <Slider style={{width:300, height: 40}}
          minimumValue={6}
          maximumTrackImage={40}
          
          >

          </Slider>

        </View>
      <Text style={styles.tittle}>
        
        <View style={styles.areaTexto }>
        <Text style={styles.texto}> 20 Caracteres</Text>
        </View>
      </Text>
    </View>
  )

}




//estilos do meu conteiner
const styles = StyleSheet.create({
   conteiner: {
    backgroundColor: '#111827',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

   },

   logo:{
    width: 200,
    height: 200,
    marginBottom: 60,
   },

   tittle:{
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',

   },
   area:{
    marginBottom: 40,
    marginTop: 40,
    marginLeft: 20,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 20,
    backgroundColor: '#1F2937',

   },
   areaTexto:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
   }

})

