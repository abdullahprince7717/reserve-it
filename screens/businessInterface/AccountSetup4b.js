import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import ToggleSwitch from 'toggle-switch-react-native'
import { BackdropContext, TimePicker } from 'react-native-propel-kit';
import DateTimePicker from '@react-native-community/datetimepicker';
import HourComponent from '../../components/businessUIComponents/BusinessDay&Hour.js'
import moment from 'moment';
import { BusinessHoursContext } from '../../global/BusinessHoursContext.js'
import DropDownPicker from 'react-native-dropdown-picker';
// import TimePicker from 'react-native-simple-time-picker';


// import { DateTimePicker } from '@react-native-community/datetimepicker';


const EditBusinessHours = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const [startTime, setStartTime] = useState('10:00 AM');
    const [endTime, setEndTime] = useState('10:00 PM');
    const [monday, setMonday, tuesday, setTuesday, wednesday, setWednesday, thursday, setThursday, friday, setFriday, saturday, setSaturday, sunday, setSunday] = useContext(BusinessHoursContext);

    const [selectedHours, setSelectedHours] = useState(0);
    const [selectedMinutes, setSelectedMinutes] = useState(0);

    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: '8:00 AM', value: '8:00 AM' },
        { label: '9:00 AM', value: '9:00 AM' },
        { label: '10:00 AM', value: '10:00 AM' },
        { label: '11:00 AM', value: '11:00 AM' },
        { label: '12:00 PM', value: '12:00 PM' },
        { label: '1:00 PM', value: '1:00 PM' },
        { label: '2:00 PM', value: '2:00 PM' },
        { label: '3:00 PM', value: '3:00 PM' },
        { label: '4:00 PM', value: '4:00 PM' },
        { label: '5:00 PM', value: '5:00 PM' },
        { label: '6:00 PM', value: '6:00 PM' },
        { label: '7:00 PM', value: '7:00 PM' },
        { label: '8:00 PM', value: '8:00 PM' },
        { label: '9:00 PM', value: '9:00 PM' },
        { label: '10:00 PM', value: '10:00 PM' },
        { label: '11:00 PM', value: '11:00 PM' },
    ]);


    const [time, setTime] = useState();

    useEffect(() => {
        // console.log(moment(startTime).format('LT'))
        // console.log(moment(startTime).format('LT'))
        console.log(props?.route?.params?.day)
        console.log(monday)
        console.log(tuesday)
        console.log(wednesday)
        console.log(thursday)
        console.log(friday)
        console.log(saturday)
        console.log(sunday)

    }, [])

    const handlePress = (value) => {
        // const temp = monday?[...monday]:[]       
        // temp.push(value);

        if (props?.route?.params?.day === 'Monday') {
            setMonday(value)
        }
        else if (props?.route?.params?.day === 'Tuesday') {
            setTuesday(value)
        }
        else if (props?.route?.params?.day === 'Wednesday') {
            setWednesday(value)
        }
        else if (props?.route?.params?.day === 'Thursday') {
            setThursday(value)
        }
        else if (props?.route?.params?.day === 'Friday') {
            setFriday(value)
        }
        else if (props?.route?.params?.day === 'Saturday') {
            setSaturday(value)
        }
        else if (props?.route?.params?.day === 'Sunday') {
            setSunday(value)
        }

        // setThursday(value)

        props.navigation.goBack();
        // console.log(value)
    }


    return (
        <View style={styles.container}>
            <View style={{ margin: 20, marginVertical: 30, flexDirection: 'row', justifyContent: 'space-between' }}>

                <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
                    Are You Open on {props?.route?.params?.day}?
                </Text>

                <ToggleSwitch
                    isOn={isOpen}
                    onColor="green"
                    offColor="grey"
                    size="medium"
                    onToggle={() => {
                        setIsOpen(!isOpen)
                        isOpen ? console.log("On") : console.log("Off")
                    }}
                />
            </View>
            <View
                pointerEvents={isOpen ? 'auto' : 'none'}
                opacity={isOpen ? 1 : 0.5}
                style={{ justifyContent: 'center', alignItems: 'center', margin: 10, marginVertical: 60 }}
            >
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}> Set New Business Hours</Text>
                <Text style={{ fontSize: 19, }}> Click to Edit Time</Text>

                <View style={{ flexDirection: 'row', marginTop: 30 }}>
                    {/* <TimePicker title="Pick a time" value={startTime} onChange={setStartTime} style = {{fontSize:20,backgroundColor:'#fff', height:26,}} >
                        <Text style = {{fontSize:20,marginRight:10,fontWeight:'bold'}}>Start Time :</Text>
                    </TimePicker> */}

                    {/* <Button onPress={showTimepicker} title="Show time picker!" /> */}
                    {/* <DateTimePicker mode="time"  value = {time} onChange ={(time) => {setTime(time)}} /> */}
                    {/* <Text>
                        Selected Time: {selectedHours}:{selectedMinutes}
                    </Text>
                    <TimePicker
                        selectedHours={selectedHours}
                        //initial Hourse value
                        selectedMinutes={selectedMinutes}
                        //initial Minutes value
                        onChange={(hours, minutes) => {
                            setSelectedHours(hours);
                            setSelectedMinutes(minutes);
                        }}
                    /> */}

                    <View style={{ flexDirection: 'row', margin:0 }} >
                        <Text style={{ fontSize: 17,marginTop:40,marginRight:10,fontWeight: 'bold'}}>Start Time: </Text>

                        <DropDownPicker
                            open={open}
                            value={startTime}
                            items={items}
                            setOpen={setOpen}
                            setValue={setStartTime}
                            setItems={setItems}
                            style={{
                                backgroundColor: "#E7E7E7",
                                borderRadius: 5,
                                height: 55,
                                
                            }}
                            containerStyle={{
                                width: '42%',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: 30,
                                height: 50,
                                
                            }}
                            textStyle={{
                                fontSize: 15
                            }}
                            labelStyle={{
                                fontWeight: "bold"
                            }}

                        />
                    </View>

                    <View style={{ flexDirection: 'row' }} >
                        <Text style={{ fontSize: 17,marginTop:40,marginRight:15,fontWeight: 'bold'}}>End Time: </Text>

                        <DropDownPicker
                            open={open1}
                            value={endTime}
                            items={items}
                            setOpen={setOpen1}
                            setValue={setEndTime}
                            setItems={setItems}
                            style={{
                                backgroundColor: "#E7E7E7",
                                borderRadius: 5,
                                height: 55,
                                
                            }}
                            containerStyle={{
                                width: '42%',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: 30,
                                height: 50,
                                
                            }}
                            textStyle={{
                                fontSize: 15
                            }}
                            labelStyle={{
                                fontWeight: "bold"
                            }}

                        />
                    </View>


                </View>

                <View style={{ flexDirection: 'row', margin: 20, marginBottom: 50, }}>
                    {/* <TimePicker title="Pick a time" value={endTime} onChange={setEndTime} style = {{fontSize:20,backgroundColor:'#fff', height:26,}} >
                        <Text style = {{fontSize:20,marginRight:10,fontWeight:'bold'}}>End Time :</Text>
                    </TimePicker> */}
                </View>
                
                <View style= {{elevation:-99, width:'100%',marginTop:130}}>
                <HourComponent
                    day={props.route?.params?.day}
                    // startTime={moment(startTime).format('LT')}
                    startTime = {startTime}
                    // endTime={moment(endTime).format('LT')}
                    endTime={endTime}
                    status={isOpen == true ? 'open' : 'closed'}

                />
                </View>


            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    // setDays(days => [...days, {isOpen:isOpen, startTime:moment(startTime).format('LT'), endTime:moment(endTime).format('LT'), day:props.route?.params?.day}])
                    // props.navigation.navigate("BusinessHours",{data: {day:props?.route?.params?.day ,isOpen:isOpen, startTime:startTime, endTime:endTime}});
                    // props.navigation.navigate("BusinessHours")
                    // handlePress({ isOpen: isOpen, startTime: moment(startTime).format('LT'), endTime: moment(endTime).format('LT'), day: props?.route?.params?.day })
                    handlePress({ isOpen: isOpen, startTime: startTime, endTime: endTime, day: props?.route?.params?.day })
                }}
            >
                <Text style={{ color: '#fff' }}>Next</Text>
            </TouchableOpacity>

        </View>

    )
}

export default EditBusinessHours

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        flexDirection: 'column',
    },
    button: {
        backgroundColor: '#57B9BB',
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,

    },
})