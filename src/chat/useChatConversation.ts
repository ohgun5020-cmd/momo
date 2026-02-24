import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export type ChatContact = "모모" | "라라";
export type ChatRole = "assistant" | "user";

export type ChatMessage = {
  id: string;
  role: ChatRole;
  text: string;
  createdAt: number;
};

type ChatConversations = Record<ChatContact, ChatMessage[]>;

const STORAGE_KEY = "anima-chat-conversations-v1";
const CONTACTS: ChatContact[] = ["모모", "라라"];

const createMessage = (role: ChatRole, text: string): ChatMessage => ({
  id: `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`,
  role,
  text,
  createdAt: Date.now(),
});

const createInitialConversations = (): ChatConversations => ({
  "모모": [
    createMessage("assistant", "안녕 🙂"),
    createMessage("assistant", "오늘은 어떤 일 있었어?"),
  ],
  "라라": [
    createMessage("assistant", "안녕 😊"),
    createMessage("assistant", "오늘은 어지내는 중이야?"),
  ],
});

const isValidMessage = (value: unknown): value is ChatMessage => {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const candidate = value as Partial<ChatMessage>;
  const validRole = candidate.role === "assistant" || candidate.role === "user";

  return (
    typeof candidate.id === "string" &&
    validRole &&
    typeof candidate.text === "string" &&
    typeof candidate.createdAt === "number"
  );
};

const decodeEscapedUnicode = (value: string) =>
  value.replace(/\\u([0-9A-Fa-f]{4})/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)));

const readConversations = (): ChatConversations => {
  const initial = createInitialConversations();
  if (typeof window === "undefined") {
    return initial;
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return initial;
    }

    const parsed = JSON.parse(raw) as Record<string, unknown>;
    const decodedParsed: Record<string, unknown> = {};
    Object.entries(parsed).forEach(([key, value]) => {
      decodedParsed[decodeEscapedUnicode(key)] = value;
    });
    const normalized: ChatConversations = { ...initial };

    CONTACTS.forEach((contact) => {
      const rows = decodedParsed[contact];
      if (Array.isArray(rows)) {
        const validRows = rows.filter(isValidMessage).map((row) => ({
          ...row,
          text: decodeEscapedUnicode(row.text),
        }));
        if (validRows.length > 0) {
          normalized[contact] = validRows;
        }
      }
    });

    return normalized;
  } catch {
    return initial;
  }
};

const writeConversations = (conversations: ChatConversations) => {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(conversations));
  } catch {
    // Keep UI responsive even when storage is unavailable.
  }
};

const pickRandom = (values: string[]) => values[Math.floor(Math.random() * values.length)];

const buildReply = (contact: ChatContact, userText: string): string => {
  const trimmed = userText.trim();

  if (!trimmed) {
    return "음... 한 번만 더 천천히 말해줄래?";
  }

  if (contact === "모모") {
    if (trimmed.includes("헤어") || trimmed.includes("이별")) {
      return "지금 정리하기 힘들 수 있지. 제일 걸리는 게 뭐야?";
    }
    if (trimmed.includes("힘들") || trimmed.includes("우울") || trimmed.includes("불안")) {
      return "오늘은 버티는 날이구나. 이건 너 탓이 아니야.";
    }
    if (trimmed.includes("사랑") || trimmed.includes("좋아")) {
      return "그 마음 이미 충분히 소중해. 너 진짜 진짜 잘하고 있어.";
    }

    return pickRandom([
      "그럴 수 있어. 더 자세히 들려줄래?",
      "좋아, 그 포인트 중심으로 정리해볼게.",
      "그 상황에서 네 감정이 그렇게 되는 거 자연스러워.",
    ]);
  }

  if (trimmed.includes("헤어") || trimmed.includes("집착")) {
    return "끝낼지 버틸지 결정하려면, 네 경계선부터 정할 필요가 있어.";
  }
  if (trimmed.includes("미안") || trimmed.includes("사과")) {
    return "사과를 받은 뒤에도 반복되면, 그건 문제 해결이 아니야.";
  }

  return pickRandom([
    "나중에 후회 안 하려면, 오늘 감정과 사실을 분리해서 보자.",
    "행동 전에 확인할 건 두 가지야. 안전한지, 그리고 네 자존감을 깎지 않는지.",
    "네가 원하면 다음 대화에서 쓸 문장까지 같이 만들어줄게.",
  ]);
};

export const useChatConversation = (contact: ChatContact, replyDelayMs = 650) => {
  const [conversations, setConversations] = useState<ChatConversations>(() => readConversations());
  const [isReplying, setIsReplying] = useState(false);
  const timerRef = useRef<number | null>(null);

  const messages = useMemo(() => conversations[contact], [contact, conversations]);

  useEffect(() => {
    writeConversations(conversations);
  }, [conversations]);

  useEffect(
    () => () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
    },
    [],
  );

  const sendMessage = useCallback(
    (rawText: string) => {
      const text = rawText.trim();
      if (!text) {
        return false;
      }

      setConversations((prev) => ({
        ...prev,
        [contact]: [...prev[contact], createMessage("user", text)],
      }));

      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }

      setIsReplying(true);
      timerRef.current = window.setTimeout(() => {
        setConversations((prev) => ({
          ...prev,
          [contact]: [...prev[contact], createMessage("assistant", buildReply(contact, text))],
        }));
        setIsReplying(false);
        timerRef.current = null;
      }, replyDelayMs);

      return true;
    },
    [contact, replyDelayMs],
  );

  const clearConversation = useCallback(() => {
    const next = createInitialConversations();
    setConversations((prev) => ({
      ...prev,
      [contact]: next[contact],
    }));
    setIsReplying(false);
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, [contact]);

  return {
    messages,
    isReplying,
    sendMessage,
    clearConversation,
  };
};
