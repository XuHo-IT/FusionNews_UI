import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import {
  fetchQuestionsRequest,
  fetchAnswerRequest,
} from 'redux/chatbot/chatbot.slide'; // adjust path
import './ChatBot.css';

interface Message {
  type: 'user' | 'bot';
  text: string;
}

interface ChatbotQuestion {
  id: number;
  question: string;
}

const ChatBot: React.FC = () => {
  const dispatch = useDispatch();

  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedQuestionId, setSelectedQuestionId] = useState<number | null>(null);

  const questions = useSelector((state: RootState) => state.questions.questionsList);
  const answer = useSelector((state: RootState) => state.questions.answer);
  const status = useSelector((state: RootState) => state.questions.status);

  // Fetch questions when the chat opens for the first time
  const toggleChat = () => {
    setIsChatOpen(prev => !prev);
    if (status === 'idle') {
      dispatch(fetchQuestionsRequest());
    }
  };

  const closeChat = () => setIsChatOpen(false);

  const askQuestion = () => {
    if (selectedQuestionId == null) return;

    const selectedQuestion = questions.find(q => q.id === selectedQuestionId);
    if (!selectedQuestion) return;

    // Show user's question
    setMessages(prev => [...prev, { type: 'user', text: selectedQuestion.question }]);

    // Dispatch saga to get the answer
    dispatch(fetchAnswerRequest({ id: selectedQuestionId }));
  };

  // Add the answer to messages when it’s updated
  useEffect(() => {
    if (answer) {
      setMessages(prev => [...prev, { type: 'bot', text: answer }]);
    }
  }, [answer]);

  return (
    <>
      <button className="btn-open-chat" onClick={toggleChat}>
        <svg className="svg-info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path d="M70 160c0-35.3...z" />
        </svg>
      </button>

      {isChatOpen && (
        <div className="chat-container">
          <h1>ChatBot Support</h1>
          <button className="btn-close-chat" onClick={closeChat}>X</button>

          <div className="chat-box">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.type}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="controls">
            <select
              className="question-dropdown"
              value={selectedQuestionId ?? ''}
              onChange={(e) => setSelectedQuestionId(Number(e.target.value))}
            >
              <option value="" disabled>Select a question...</option>
              {questions.map((q) => (
                <option key={q.id} value={q.id}>{q.question}</option>
              ))}
            </select>
            <button onClick={askQuestion} disabled={selectedQuestionId == null}>
              Ask
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
