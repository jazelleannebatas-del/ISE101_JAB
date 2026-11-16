
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import AnnouncementPanel from '../../components/AnnouncementPanel';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Campus Connect</Text>

      <Text>One campus. Connected students.</Text>

      <Text>Welcome to the Week 1 project foundation.</Text>

      <AnnouncementPanel />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#F4F7FB',
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 12,
  },
});
