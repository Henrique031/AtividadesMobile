import React from 'react';
import { Button } from 'react-native';

export default props => { 
    
    function executar() {
        console.warn('Cuidado!')
    }
    
    return(
        <Button 
            title='Aperte em mim'
            onPress={executar}

        />
    )
}