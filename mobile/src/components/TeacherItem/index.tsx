import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import heartOutineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import styles from './styles'

function TeacherItem(){
    return ( 
    
            <View style={styles.container}>

                <View style={styles.profile}>

                    <Image
                    style={styles.avatar}
                    source={{ uri: 'data:image/jpeg;base64,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'}}
                    />

                    <View style={styles.profileInfo}>
                        <Text style={styles.name}>Zé Pequeno</Text>
                        <Text style={styles.subject}>Português</Text>
                    </View>
                </View>

                <Text style={styles.bio}>
                    Comerciante membro da comunidade.
                    {'\n'}
                    Quem falou que a boca é tua? Dadinho uma caralho, meu nome é Zé Pequeno!
                </Text>

                <View style={styles.footer}>
                    
                    <Text style={styles.price}>
                        Preço/Hora {'   '}
                        <Text style={styles.priceValue}>R$ 20,00</Text>
                    </Text>

                    <View style={styles.buttonsContainer}>

                        <RectButton style={[styles.favoriteButton, styles.favorited]}>
                           {/*  <Image source={heartOutineIcon}/> */}
                            <Image source={unfavoriteIcon}/>
                        </RectButton>

                        <RectButton style={styles.contactButton}>
                            <Image source={whatsappIcon}/>
                            <Text style={styles.contactButtonText}>Entrar em contato</Text>
                        </RectButton>

                    </View>

                </View>

            </View>
        )
    }


export default TeacherItem;
