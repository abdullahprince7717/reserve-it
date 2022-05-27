
import { StyleSheet, Text, View } from 'react-native'
import React, {useState,useEffect} from 'react'
import Card from '../../components/businessUIComponents/ServiceCard.js'
import { FAB } from 'react-native-paper';
import { db, auth } from "../../firebase/FirebaseConfig.js";
import { collection, getDocs,doc, setDoc,query,where } from "firebase/firestore";

const CheckoutService = (props) => {

    const [services, setServices] = useState([]);
    const [queryResult,setQueryResult] = useState([]);
    const servicesRef = collection(db, "services");

    useEffect(() => {
        getServices();
    },[])


    const getServices = async () => {
        const q = query(servicesRef, where("business_email", "==", auth.currentUser.email));
        setQueryResult(q);
        await getDocs(q)
            .then((res) => {

                setServices(res.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id
                })));

                // console.log(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
                
                console.log(services);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <View style = {styles.container}>
            {services.map((item,index) => (
            <Card 
                title = {item.name}
                price = {item.price}
                duration = {item.duration}
                onPress = {() => {
                    console.log('pressed')
                    {props.navigation.navigate('Checkout',{service: services[index]})}
                }}

            />))}


        </View>
    )
}

export default CheckoutService

const styles = StyleSheet.create({

    container: {
        flex: 1,
        // backgroundColor: '#fff',
        marginTop: 20
    },
    fab: {
        position: 'absolute',
        margin: 10,
        right: 15,
        bottom: 20,
        elevation: 1,
        backgroundColor: '#57B9BB',
        // borderRadius: 80,
    },
})
// import { StyleSheet, Text, View, } from 'react-native'
// import React, {useState,useEffect} from 'react'
// import Card from '../../components/businessUIComponents/ServiceCard.js'
// import { FAB } from 'react-native-paper';

// const ServicesList = ({navigation}) => {
    
//     const [reviews, setReviews] = useState([
//         { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
//         { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
//         { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
//     ]);

//     useEffect(() => {
//         console.log(reviews)
//     },[])

//     return (
//         <View style = {styles.container}>

//             <Card 
//                 onPress = {() => {
//                     console.log('pressed')
//                     {props.navigation.navigate('Checkout', {review: reviews[0]})}
//                     // navigation.jumpTo('Checkout', {review: reviews[0]});
//                 }}

//             />

//             <Card 
//                 onPress = {() => {
//                     console.log('pressed')
//                     // {props.navigation.navigate('EditService')}
//                 }}
//             />


//         </View>
//     )
// }

// export default ServicesList

// const styles = StyleSheet.create({

//     container: {
//         flex: 1,
//         // backgroundColor: '#fff',
//         marginTop: 20
//     },
//     fab: {
//         position: 'absolute',
//         margin: 10,
//         right: 15,
//         bottom: 20,
//         elevation: 1,
//         backgroundColor: '#57B9BB',
//         // borderRadius: 80,
//     },
// })