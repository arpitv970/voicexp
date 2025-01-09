"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { getUser } from "@/actions/auth-actions";
import type { User } from "@auth/core/types";
import { Toaster } from "@/components/ui/toaster";

interface GlobalContextType {
  // User management
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  isLoadingUser: boolean;

  // Audio management
  audioBlob: Blob | null;
  transcription: string;
  setAudioBlob: (blob: Blob | null) => void;
  setTranscription: (text: string) => void;
  clearAudio: () => void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // User state
  const [user, setUser] = useState<User | null>(null);
  const [isLoadingUser, setIsLoadingUser] = useState(true);

  // Audio state
  const [audioBlob, setAudioBlobState] = useState<Blob | null>(null);
  const [transcription, setTranscriptionState] = useState<string>("");

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await getUser();
      setUser(currentUser);
      setIsLoadingUser(false);
    };

    fetchUser();
  }, []);

  // Audio-related handlers
  const setAudioBlob = (blob: Blob | null) => setAudioBlobState(blob);
  const setTranscription = (text: string) => setTranscriptionState(text);
  const clearAudio = () => {
    setAudioBlobState(null);
    setTranscriptionState("");
  };

  return (
    <GlobalContext.Provider
      value={{
        // User
        user,
        setUser,
        isLoadingUser,
        // Audio
        audioBlob,
        transcription,
        setAudioBlob,
        setTranscription,
        clearAudio,
      }}
    >
      {children}
      <Toaster />
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
