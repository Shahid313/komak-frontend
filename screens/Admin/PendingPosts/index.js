import React from 'react'
import { SafeAreaView, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import styles from './styles'
import axios from 'axios'
import baseUrl from '../../../baseUrl'

export default class PendingPosts extends React.Component{
    state = {
        posts:[]
    }
    componentDidMount(){
        this.getPostsToApprove()
        this.props.navigation.addListener("focus", () => {
            this.getPostsToApprove()
        })
    }

    getPostsToApprove(){
        axios.get(baseUrl+'/apis/admin/posts_to_approve').then(response => {
            this.setState({posts:response.data.posts})
        })
    }

    PostDetails(post_id){
        this.props.navigation.navigate('PostsToApproveDetails', {'post_id':post_id});
    }
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <ScrollView>
                <View style={styles.allProducts}>

                {this.state.posts.length > 0 ?
                this.state.posts.map((post, index) => (
                    <TouchableOpacity onPress={() => this.PostDetails(post._id)} key={post._id} style={styles.ProductCard}>
                    <Image style={styles.productImage} source={{uri:baseUrl+'/uploads/'+post.post_image}}/>
                    <View style={{position:'absolute', backgroundColor:"#6667ab", left:'10%', top:'10%', padding:5}}>
                    <Text style={{color:'white', fontSize:20}}>Pending</Text>
                    </View>
                    <View style={styles.itemNameBox}>
                        <Text style={styles.itemName}>{post.post_name}</Text>
                        <Text>{post.post_description.slice(0,30)}...</Text>
                        
                        <Text style={{alignSelf:'flex-end'}}>{post.post_data.slice(0,10)}</Text>
                        
                    </View>
                    </TouchableOpacity>
                ))
                :
                <Image style={{flex:1, alignSelf:'center'}} source={require('../../../assets/empty.jpg')}/>
            }
                
                
                </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

