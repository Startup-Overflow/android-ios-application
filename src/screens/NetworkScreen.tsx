import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Avatar, Button, Card } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faUsers,
  faSearch,
  faUserPlus,
  faUserCheck,
} from '@fortawesome/free-solid-svg-icons';

interface Connection {
  id: number;
  name: string;
  username: string;
  avatar: string;
  title: string;
  mutualConnections?: number;
  isConnected: boolean;
}

const initialConnections: Connection[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    username: '@sarahj',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    title: 'Product Designer at Google',
    mutualConnections: 12,
    isConnected: false,
  },
  {
    id: 2,
    name: 'Michael Chen',
    username: '@mchen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    title: 'Software Engineer at Meta',
    mutualConnections: 8,
    isConnected: false,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    username: '@erodriguez',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    title: 'Marketing Director at Tesla',
    mutualConnections: 15,
    isConnected: false,
  },
  {
    id: 4,
    name: 'James Wilson',
    username: '@jwilson',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    title: 'CEO at StartupHub',
    mutualConnections: 23,
    isConnected: false,
  },
  {
    id: 5,
    name: 'Lisa Anderson',
    username: '@lisaa',
    avatar: 'https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'UX Researcher at Adobe',
    mutualConnections: 6,
    isConnected: false,
  },
  {
    id: 6,
    name: 'Robert Taylor',
    username: '@rtaylor',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop',
    title: 'Data Scientist at Amazon',
    mutualConnections: 19,
    isConnected: true,
  },
  {
    id: 7,
    name: 'Maria Garcia',
    username: '@mariagarcia',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop',
    title: 'Product Manager at Innovate Labs',
    mutualConnections: 11,
    isConnected: true,
  },
  {
    id: 8,
    name: 'David Park',
    username: '@davidpark',
    avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop',
    title: 'Full Stack Developer',
    mutualConnections: 7,
    isConnected: true,
  },
];

export default function NetworkScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [connections, setConnections] = useState<Connection[]>(initialConnections);
  const [tab, setTab] = useState<'suggestions' | 'connections'>('suggestions');

  const handleConnectToggle = (id: number) => {
    setConnections(prev =>
      prev.map(conn =>
        conn.id === id ? { ...conn, isConnected: !conn.isConnected } : conn
      )
    );
  };

  const filtered = connections.filter(c =>
    tab === 'suggestions' ? !c.isConnected : c.isConnected
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Network</Text>
        <View style={styles.badge}>
          <FontAwesomeIcon icon={faUsers} size={14} color="#555" />
          <Text style={styles.badgeText}>
            {connections.filter(c => c.isConnected).length} connections
          </Text>
        </View>
        <View style={styles.searchBox}>
          <FontAwesomeIcon icon={faSearch} size={16} color="#aaa" style={styles.searchIcon} />
          <TextInput
            placeholder="Search connections..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            style={styles.searchInput}
          />
        </View>
        <View style={styles.tabs}>
          <TouchableOpacity
            style={[styles.tabButton, tab === 'suggestions' && styles.activeTab]}
            onPress={() => setTab('suggestions')}
          >
            <FontAwesomeIcon icon={faUserPlus} size={16} />
            <Text style={styles.tabText}>Suggestions</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabButton, tab === 'connections' && styles.activeTab]}
            onPress={() => setTab('connections')}
          >
            <FontAwesomeIcon icon={faUserCheck} size={16} />
            <Text style={styles.tabText}>My Network</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* List */}
      <FlatList
        data={filtered}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <View style={styles.row}>
                <Avatar.Image size={56} source={{ uri: item.avatar }} />
                <View style={styles.info}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.titleText}>{item.title}</Text>
                  {item.mutualConnections && (
                    <Text style={styles.mutual}>
                      {item.mutualConnections} mutual connections
                    </Text>
                  )}
                  <View style={styles.actions}>
                    {tab === 'suggestions' ? (
                      <>
                        <Button
                          mode="contained"
                          onPress={() => handleConnectToggle(item.id)}
                          style={styles.button}
                        >
                          Connect
                        </Button>
                        <Button mode="outlined" style={styles.button}>
                          View Profile
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button mode="outlined" style={styles.button}>
                          Message
                        </Button>
                        <Button
                          mode="outlined"
                          onPress={() => handleConnectToggle(item.id)}
                          style={styles.button}
                        >
                          Disconnect
                        </Button>
                      </>
                    )}
                  </View>
                </View>
              </View>
            </Card.Content>
          </Card>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9' },
  header: { padding: 16, backgroundColor: '#fff', elevation: 2 },
  title: { fontSize: 20, fontWeight: '600', marginBottom: 8 },
  badge: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 12 },
  badgeText: { marginLeft: 6, fontSize: 12, color: '#555' },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 20,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  searchIcon: { marginRight: 8 },
  searchInput: { flex: 1, height: 40 },
  tabs: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 4 },
  tabButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  activeTab: { backgroundColor: '#ddd' },
  tabText: { marginLeft: 6, fontSize: 14 },
  list: { padding: 16 },
  card: { marginBottom: 12 },
  row: { flexDirection: 'row', gap: 12 },
  info: { flex: 1 },
  name: { fontSize: 16, fontWeight: '500' },
  titleText: { fontSize: 13, color: '#666' },
  mutual: { fontSize: 12, color: '#999', marginTop: 4 },
  actions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
    gap: 8,
  },
  button: {
    flex: 1,
  },
});