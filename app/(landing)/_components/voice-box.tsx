import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useGlobalContext } from "@/context/global-provider";
import { cn } from "@/lib/utils";
import { Mic, MicOff } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";

interface IVoiceBox {
  onAudioRecorded: (audioBlob: Blob, transcription: string) => void;
  isSubmitting?: boolean;
  title?: string;
  className?: string;
  children?: React.ReactNode;
}

export const VoiceBox: React.FC<IVoiceBox> = ({
  onAudioRecorded,
  isSubmitting = false,
  title = "Voice Box",
  className,
}) => {
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(
    null,
  );
  const audioChunks = useRef<Blob[]>([]);
  const { audioBlob } = useGlobalContext();

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);

      recorder.ondataavailable = (event) => {
        audioChunks.current.push(event.data);
      };

      recorder.onstop = () => {
        const recordedBlob = new Blob(audioChunks.current, {
          type: "audio/wav",
        });
        audioChunks.current = [];
        const transcription = "Audio recording captured successfully";
        onAudioRecorded(recordedBlob, transcription);
        toast.success("Recording stopped and audio saved.");
      };

      setMediaRecorder(recorder);
      recorder.start();
      setIsRecording(true);
      toast.success("Recording started");
    } catch (error) {
      toast.error("Error accessing microphone");
      console.error("Error accessing microphone:", error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder && mediaRecorder.state !== "inactive") {
      mediaRecorder.stop();
      mediaRecorder.stream.getTracks().forEach((track) => track.stop());
      setIsRecording(false);
    }
  };

  return (
    <Card className={cn("w-full min-h-[250px]", className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center w-full">
        <Button
          type="button"
          variant={isRecording ? "destructive" : "secondary"}
          size="icon"
          className="w-20 h-20 rounded-full"
          onClick={isRecording ? stopRecording : startRecording}
          disabled={isSubmitting}
        >
          {isRecording ? (
            <MicOff className="h-10 w-10" />
          ) : (
            <Mic className="h-10 w-10" />
          )}
        </Button>
        <p className="text-sm text-muted-foreground mt-4">
          {isRecording
            ? "Recording... Click to stop"
            : "Click to start recording"}
        </p>
        {audioBlob ? (
          <audio
            controls
            src={URL.createObjectURL(audioBlob)}
            className="w-full mt-4"
          />
        ) : (
          <p className="text-sm text-muted-foreground mt-4">
            Ready to record Audio Feedback
          </p>
        )}
      </CardContent>
    </Card>
  );
};
