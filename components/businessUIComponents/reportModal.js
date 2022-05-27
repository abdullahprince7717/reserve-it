import * as React from 'react';
import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';

const Report = () => {
    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    return (
        <Provider>
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                    <Text>Example Modal.  Click outside this area to dismiss.</Text>
                </Modal>
            </Portal>
            <Button style={{ marginTop: 30 }} onPress={showModal}>
                Show
            </Button>
        </Provider>
    );
};

export default Report;

const containerStyle = { 
    backgroundColor: 'white', 
    padding: 20 
};