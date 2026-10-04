import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Platform,
  StatusBar as RNStatusBar,
} from 'react-native';

import { MAGIC_ANSWERS, DEFAULT_ANSWER } from './src/data/answers';

export default function App() {
  const [answer, setAnswer] = useState<string>(DEFAULT_ANSWER);
  const [hasAsked, setHasAsked] = useState<boolean>(false);

  const handleAsk = () => {
    let nextAnswer = answer;

    // Đảm bảo câu trả lời mới khác câu trả lời hiện tại nếu có thể
    while (nextAnswer === answer && MAGIC_ANSWERS.length > 1) {
      const randomIndex = Math.floor(
        Math.random() * MAGIC_ANSWERS.length
      );

      nextAnswer = MAGIC_ANSWERS[randomIndex];
    }

    setAnswer(nextAnswer);
    setHasAsked(true);
  };

  return (
    <View style={styles.container}>
      <RNStatusBar barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Magic 8 Ball</Text>

        <Text style={styles.subtitle}>
          Ask me anything
        </Text>
      </View>

      {/* Central 8-Ball */}
      <View style={styles.ballSection}>
        <Pressable
          onPress={handleAsk}
          style={({ pressed }) => [
            styles.ballContainer,
            pressed && styles.ballPressed,
          ]}
        >
          {/* 3D Glossy Light Reflection */}
          <View style={styles.specularHighlight} />

          {/* Number 8 Badge */}
          <View style={styles.numberBadge}>
            <Text style={styles.numberText}>8</Text>
          </View>

          {/* Mystical Answer Window */}
          <View style={styles.answerWindow}>
            <View style={styles.triangleShape}>
              <Text style={styles.answerText}>
                {answer}
              </Text>
            </View>
          </View>
        </Pressable>

        {/* Hint text */}
        <Text style={styles.hintText}>
          {hasAsked
            ? 'Tap ASK again to ask another question'
            : 'Think of a question & tap the ball or ASK'}
        </Text>
      </View>

      {/* Action Button & Footer */}
      <View style={styles.bottomSection}>
        <Pressable
          onPress={handleAsk}
          style={({ pressed }) => [
            styles.askButton,
            pressed && styles.askButtonPressed,
          ]}
        >
          <Text style={styles.askButtonText}>
            ASK
          </Text>
        </Pressable>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.studentName}>
            Nguyễn Anh Tuấn - 23IT297
          </Text>

          <Text style={styles.studentClass}>
            Lớp: 23SE2 • Lab 04 - Magic 8 Ball
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1120',

    paddingTop:
      Platform.OS === 'android'
        ? (RNStatusBar.currentHeight ?? 0)
        : 0,

    justifyContent: 'space-between',
  },

  /* =========================
     HEADER
     ========================= */

  header: {
    alignItems: 'center',
    paddingTop: 32,
  },

  title: {
    fontSize: 36,
    fontWeight: '900',
    color: '#F8FAFC',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },

  subtitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#818CF8',
    marginTop: 6,
    letterSpacing: 1,
  },

  /* =========================
     BALL SECTION
     ========================= */

  ballSection: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  ballContainer: {
    width: 270,
    height: 270,

    borderRadius: 135,

    backgroundColor: '#1E293B',

    borderWidth: 4,
    borderColor: '#334155',

    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#6366F1',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.45,
    shadowRadius: 24,

    elevation: 16,

    position: 'relative',
    overflow: 'hidden',
  },

  ballPressed: {
    transform: [
      {
        scale: 0.95,
      },
    ],

    opacity: 0.92,
  },

  /* =========================
     LIGHT REFLECTION
     ========================= */

  specularHighlight: {
    position: 'absolute',

    top: 22,
    left: 40,

    width: 75,
    height: 38,

    borderRadius: 19,

    backgroundColor: 'rgba(255, 255, 255, 0.15)',

    transform: [
      {
        rotate: '-35deg',
      },
    ],
  },

  /* =========================
     NUMBER 8
     ========================= */

  numberBadge: {
    position: 'absolute',

    top: 20,

    width: 42,
    height: 42,

    borderRadius: 21,

    backgroundColor: '#FFFFFF',

    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.3,
    shadowRadius: 4,

    elevation: 4,
  },

  numberText: {
    fontSize: 24,
    fontWeight: '900',
    color: '#0F172A',
  },

  /* =========================
     ANSWER WINDOW
     ========================= */

  answerWindow: {
    width: 160,
    height: 160,

    borderRadius: 80,

    backgroundColor: '#030712',

    borderWidth: 3,
    borderColor: '#1E3A8A',

    alignItems: 'center',
    justifyContent: 'center',

    marginTop: 28,

    padding: 16,

    shadowColor: '#38BDF8',

    shadowOffset: {
      width: 0,
      height: 0,
    },

    shadowOpacity: 0.6,
    shadowRadius: 10,
  },

  triangleShape: {
    alignItems: 'center',
    justifyContent: 'center',

    width: '100%',
  },

  answerText: {
    color: '#93C5FD',

    fontSize: 18,

    fontWeight: '800',

    textAlign: 'center',

    letterSpacing: 0.8,

    textTransform: 'uppercase',
  },

  /* =========================
     HINT
     ========================= */

  hintText: {
    fontSize: 13,

    fontWeight: '500',

    color: '#64748B',

    marginTop: 22,

    textAlign: 'center',

    letterSpacing: 0.4,
  },

  /* =========================
     BOTTOM SECTION
     ========================= */

  bottomSection: {
    alignItems: 'center',

    paddingBottom: 24,
  },

  /* =========================
     ASK BUTTON
     ========================= */

  askButton: {
    backgroundColor: '#4F46E5',

    paddingVertical: 15,
    paddingHorizontal: 64,

    borderRadius: 30,

    borderWidth: 2,
    borderColor: '#A5B4FC',

    shadowColor: '#4F46E5',

    shadowOffset: {
      width: 0,
      height: 6,
    },

    shadowOpacity: 0.45,
    shadowRadius: 10,

    elevation: 8,

    marginBottom: 20,
  },

  askButtonPressed: {
    transform: [
      {
        scale: 0.96,
      },
    ],

    backgroundColor: '#4338CA',
  },

  askButtonText: {
    color: '#FFFFFF',

    fontSize: 20,

    fontWeight: '800',

    letterSpacing: 3,
  },

  /* =========================
     FOOTER
     ========================= */

  footer: {
    alignItems: 'center',
  },

  studentName: {
    fontSize: 14,

    fontWeight: '700',

    color: '#CBD5E1',

    letterSpacing: 0.5,
  },

  studentClass: {
    fontSize: 12,

    fontWeight: '500',

    color: '#64748B',

    marginTop: 2,
  },
});