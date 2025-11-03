import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faArrowLeft,
  faSmile,
  faPaperPlane,
  faImage,
} from '@fortawesome/free-solid-svg-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

const mockMessages = [
  { id: 1, senderId: 1, text: 'Hey! How are you doing?', timestamp: '10:30 AM' },
  { id: 2, senderId: 0, text: "Hi! I'm great, how about you?", timestamp: '10:32 AM' },
  { id: 3, senderId: 1, text: 'Doing well, thanks!', timestamp: '10:34 AM' },
];

const ChatScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<any>();
  const { chat } = route.params;
  const [messages, setMessages] = useState(mockMessages);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMessage = {
      id: Date.now(),
      senderId: 0,
      text: input,
      timestamp: 'Now',
    };
    setMessages([...messages, newMessage]);
    setInput('');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesomeIcon icon={faArrowLeft} size={20} color="#000" />
        </TouchableOpacity>
        <Image source={{ uri: chat.avatar }} style={styles.headerAvatar} />
        <View style={{ flex: 1 }}>
          <Text style={styles.headerName}>{chat.name}</Text>
          <Text style={styles.headerStatus}>
            {chat.isOnline ? 'Online' : 'Offline'}
          </Text>
        </View>
      </View>

      {/* Messages */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={[
              styles.messageContainer,
              item.senderId === 0
                ? styles.myMessageContainer
                : styles.theirMessageContainer,
            ]}
          >
            {item.senderId !== 0 && (
              <Image source={{ uri: chat.avatar }} style={styles.messageAvatar} />
            )}
            <View
              style={[
                styles.messageBubble,
                item.senderId === 0
                  ? styles.myMessageBubble
                  : styles.theirMessageBubble,
              ]}
            >
              <Text
                style={[
                  styles.messageText,
                  item.senderId === 0 && { color: '#fff' },
                ]}
              >
                {item.text}
              </Text>
              <Text style={styles.messageTime}>{item.timestamp}</Text>
            </View>
          </View>
        )}
        contentContainerStyle={{ padding: 16 }}
      />

      {/* Input Bar */}
      <View style={styles.inputBar}>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faImage} size={20} color="#666" />
        </TouchableOpacity>
        <TextInput
          placeholder="Type a message..."
          value={input}
          onChangeText={setInput}
          style={styles.textInput}
        />
        <TouchableOpacity>
          <FontAwesomeIcon icon={faSmile} size={20} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity onPress={sendMessage}>
          <FontAwesomeIcon icon={faPaperPlane} size={22} color="#2563eb" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  headerAvatar: { width: 40, height: 40, borderRadius: 20, marginHorizontal: 10 },
  headerName: { fontSize: 16, fontWeight: '600' },
  headerStatus: { fontSize: 12, color: '#666' },
  messageContainer: { flexDirection: 'row', marginBottom: 12 },
  theirMessageContainer: { justifyContent: 'flex-start' },
  myMessageContainer: { justifyContent: 'flex-end' },
  messageAvatar: { width: 30, height: 30, borderRadius: 15, marginRight: 6 },
  messageBubble: {
    borderRadius: 18,
    padding: 10,
    maxWidth: '75%',
  },
  theirMessageBubble: { backgroundColor: '#f2f2f2' },
  myMessageBubble: { backgroundColor: '#2563eb' },
  messageText: { fontSize: 15 },
  messageTime: { fontSize: 10, color: '#aaa', marginTop: 4 },
  inputBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopColor: '#eee',
    borderTopWidth: 1,
    gap: 10,
  },
  textInput: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: '#f3f3f3',
    paddingHorizontal: 14,
    height: 40,
    fontSize: 15,
  },
});

export default ChatScreen;
