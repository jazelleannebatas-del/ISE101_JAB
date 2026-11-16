
import { StyleSheet, Text, View } from 'react-native';
import type { Announcement } from '../../types/announcement';
import { getUnreadAnnouncements } from '../../services/announcementUtils';

const announcements: Announcement[] = [
  {
    id: '1',
    title: 'Enrollment Schedule',
    category: 'Academic',
    read: false,
  },
  {
    id: '2',
    title: 'Campus Sports Festival',
    category: 'Events',
    read: false,
  },
  {
    id: '3',
    title: 'Library Reminder',
    category: 'Notice',
    read: true,
  },
];

export default function HomeScreen() {
  const unreadAnnouncements = getUnreadAnnouncements(announcements);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Campus Connect</Text>

      <Text>One campus. Connected students.</Text>

      <Text>Welcome to the Week 1 project foundation.</Text>

      <Text style={styles.heading}>Announcements</Text>

      <Text style={styles.count}>
        Unread Announcements: {unreadAnnouncements.length}
      </Text>

      {announcements.map((item) => (
        <View key={item.id} style={styles.announcement}>
          <Text style={styles.announcementTitle}>{item.title}</Text>
          <Text>Category: {item.category}</Text>
          <Text>{item.read ? 'Read' : 'Unread'}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#F4F7FB',
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 12,
  },

  heading: {
    fontSize: 22,
    fontWeight: '700',
    marginTop: 25,
    marginBottom: 10,
  },

  count: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },

  announcement: {
    width: '100%',
    padding: 12,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
  },

  announcementTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
});
