import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faBell,
  faEnvelope,
  faUser,
  faCheckDouble,
} from '@fortawesome/free-solid-svg-icons';

export default function NotificationsScreen() {
  const [activeTab, setActiveTab] = useState<'all' | 'unread' | 'mentions'>('all');
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'mention',
      icon: faUser,
      message: 'Alex mentioned you in a comment.',
      time: '2h ago',
      read: false,
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      id: 2,
      type: 'message',
      icon: faEnvelope,
      message: 'Maria sent you a new message.',
      time: '5h ago',
      read: false,
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    },
    {
      id: 3,
      type: 'follow',
      icon: faUser,
      message: 'David started following you.',
      time: '1d ago',
      read: true,
      avatar: 'https://randomuser.me/api/portraits/men/76.jpg',
    },
    {
      id: 4,
      type: 'update',
      icon: faBell,
      message: 'New features have been added to your account.',
      time: '2d ago',
      read: true,
      avatar: 'https://randomuser.me/api/portraits/women/43.jpg',
    },
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAllAsRead = () => {
    const updated = notifications.map(n => ({ ...n, read: true }));
    setNotifications(updated);
  };

  const filteredNotifications = notifications.filter(n => {
    if (activeTab === 'unread') return !n.read;
    if (activeTab === 'mentions') return n.type === 'mention';
    return true;
  });

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifications</Text>
        <TouchableOpacity onPress={markAllAsRead} style={styles.markReadButton}>
          <FontAwesomeIcon icon={faCheckDouble} size={18} color="#007bff" />
          <Text style={styles.markReadText}>Mark all as read</Text>
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        {['all', 'unread', 'mentions'].map(tab => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab as any)}
            style={[
              styles.tabButton,
              activeTab === tab && styles.activeTabButton,
            ]}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}
            >
              {tab === 'all' ? 'All' : tab === 'unread' ? `Unread (${unreadCount})` : 'Mentions'}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Notification List */}
      <ScrollView style={styles.scrollView}>
        {filteredNotifications.map(item => (
          <View
            key={item.id}
            style={[styles.notificationItem, !item.read && styles.unreadItem]}
          >
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <View style={styles.notificationContent}>
              <Text style={styles.message}>{item.message}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
            <FontAwesomeIcon
              icon={item.icon}
              size={18}
              color={item.read ? '#999' : '#007bff'}
            />
          </View>
        ))}

        {filteredNotifications.length === 0 && (
          <View style={styles.emptyState}>
            <FontAwesomeIcon icon={faBell} size={40} color="#ccc" />
            <Text style={styles.emptyText}>No notifications</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9' },
  header: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: '#e5e5e5',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#333' },
  markReadButton: { flexDirection: 'row', alignItems: 'center' },
  markReadText: { marginLeft: 6, color: '#007bff', fontSize: 14 },
  tabsContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#e5e5e5',
  },
  tabButton: { flex: 1, paddingVertical: 10, alignItems: 'center' },
  tabText: { fontSize: 15, color: '#666' },
  activeTabButton: { borderBottomWidth: 2, borderColor: '#007bff' },
  activeTabText: { color: '#007bff', fontWeight: 'bold' },
  scrollView: { flex: 1 },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderBottomWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
  },
  unreadItem: { backgroundColor: '#eaf3ff' },
  avatar: { width: 45, height: 45, borderRadius: 22.5, marginRight: 12 },
  notificationContent: { flex: 1 },
  message: { fontSize: 15, color: '#333', marginBottom: 4 },
  time: { fontSize: 13, color: '#999' },
  emptyState: {
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: { marginTop: 8, color: '#aaa', fontSize: 16 },
});
