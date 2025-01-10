export interface IFeedback {
  data: {
    name: string;
    contactNo: string;
    email: string;
    referencedBy: string;
    transcription: string;
  };
  audioBlob: string; // This will store the base64-encoded audio
  adminData: {
    id: string;
    name: string;
    email: string;
  };
  createdAt: string;
}
