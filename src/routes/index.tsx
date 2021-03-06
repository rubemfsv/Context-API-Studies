import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

import { useAuth } from '../contexts/auth';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

const Routes: React.FC = () => {
  const { loged, loading } = useAuth();
  
  if(loading) {
    return(
        <View style={styles.loading}>
            <ActivityIndicator size="large" color="#666"/>
        </View>
    );
  }
  
  return loged ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;

