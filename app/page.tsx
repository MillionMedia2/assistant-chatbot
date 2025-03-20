'use client';

import { ChatbotConfig, Message, OpenAssistantGPTChat } from 'openassistantgpt';
import { useEffect, useState } from 'react';
import { Button } from './components/ui/button';

export default function ChatPage() {
  const [count, setMessagesCount] = useState(0);
  const [defaultMessage, setDefaultMessage] = useState('');

  const chatbot: ChatbotConfig = {
    id: '12345',
    name: 'OpenAssistantGPT',

    chatTitle: 'Chat with Plantz Agent',
    welcomeMessage:
      "Welcome to Plantz Agent! I can answer questions about medical cannabis. How may I assist you today?",
    chatMessagePlaceHolder: 'Ask us any question...',

    rightToLeftLanguage: false,

    bubbleColor: 'linear-gradient(to top left, #003366, #336699)',
    bubbleTextColor: '#FFFFFF',

    chatHeaderBackgroundColor: '#FFFFFF',
    chatHeaderTextColor: '#52525b',

    chatbotReplyBackgroundColor: '#e4e4e7',
    chatbotReplyTextColor: '#000000',

    userReplyBackgroundColor: '#e4e4e7',
    userReplyTextColor: '#000000',

    chatbotLogoURL:
      'https://gwetfkan2dovfoiz.public.blob.vercel-storage.com/search-8jZhOvOBPxuTmohrup5TPvSzrjsyog.png',
    chatInputStyle: 'default',

    chatHistoryEnabled: true,
    chatFileAttachementEnabled: true,
    //fontSize: '14px',
    displayFooterText: true,
    footerLink: 'https://www.plantz.io',
    footerTextName: 'Plantz Agent',

    fontSize: '14px',

    messageSourceText: '',
    withChatMessageIcon: true,
  };

  useEffect(() => {
    console.log('Messages count:', count);
  }, [count]);

  function handleMessagesChange(messages: Message[]) {
    setMessagesCount(messages.length);
  }

  return (
    <OpenAssistantGPTChat
      chatbot={chatbot}
      path="/api/chat/assistant"
      defaultMessage={defaultMessage}
      withExitX={true}
      onMessagesChange={handleMessagesChange}
      extensions={[
        count == 0 && (
          <Button
            key="1"
            className="w-full bg-white"
            variant="outline"
            onClick={() =>
              setDefaultMessage('How do I get a medical cannabis prescription?')
            }
          >
            How do I get a medical cannabis prescription
          </Button>
        ),
        count == 0 && (
          <Button
            key="2"
            className="w-full bg-white"
            variant="outline"
            onClick={() => setDefaultMessage('Am I eligible for medical cannabis?')}
          >
            Am I eligible for medical cannabis
          </Button>
        ),
        count == 0 && (
          <Button
            key="3"
            className="w-full bg-white"
            variant="outline"
            onClick={() =>
              setDefaultMessage('Is medical cannabis legal in the UK?')
            }
          >
            Is medical cannabis legal in the UK
          </Button>
        ),
        count == 0 && (
          <Button
            key="4"
            className="w-full bg-white"
            variant="outline"
            onClick={() => setDefaultMessage('How much does medical cannabis cost?')}
          >
            How much does medical cannabis cost
          </Button>
        ),
      ]}
    />
  );
}
