"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { VoiceBox } from "./voice-box";
import { useGlobalContext } from "@/context/global-provider";
import { useToast } from "@/hooks/use-toast";
import { cn, convertBlobToBase64 } from "@/lib/utils";

const formSchema = z.object({
  name: z
    .string()
    .min(2, "Name must have at least 2 characters")
    .max(50, "Name cannot exceed 50 characters"),
  contactNo: z.string().regex(/^\d{10}$/, "Contact number must be 10 digits"),
  email: z.string().email("Invalid email address"),
  referencedBy: z
    .string()
    .nonempty("Please select how you got to know about us"),
  transcription: z.string().nonempty("Audio transcription is required"),
});

interface IFeedbackForm {
  className?: string;
  children?: React.ReactNode;
}

export const FeedbackForm: React.FC<IFeedbackForm> = ({
  className,
  children,
}) => {
  const { audioBlob, setAudioBlob, user } = useGlobalContext();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      contactNo: "",
      email: "",
      referencedBy: "",
      transcription: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log("Submitted Data:", data);

    if (!audioBlob) {
      toast({
        title: "Please record your audio feedback first!",
        variant: "destructive",
      });
      return;
    }

    const audioBase64 = audioBlob ? await convertBlobToBase64(audioBlob) : null;

    const existingFeedbacks = JSON.parse(
      localStorage.getItem("feedbacks") || "[]",
    );
    const newFeedback = {
      data,
      audioBlob: audioBase64,
      adminData: user,
      createdAt: new Date().toISOString(),
    };
    existingFeedbacks.push(newFeedback);

    localStorage.setItem("feedbacks", JSON.stringify(existingFeedbacks));
    toast({
      title: "Feedback submitted successfully!",
    });
    reset();
  };

  const handleAudioRecorded = (blob: Blob, transcription: string) => {
    setAudioBlob(blob);
    setValue("transcription", transcription);
    toast({
      title: "Audio recorded and transcription updated!",
    });
  };

  const handleClearRecording = () => {
    setAudioBlob(null);
    setValue("transcription", "");
    toast({
      title: "Recording cleared",
    });
  };

  return (
    <Card className={cn("w-full min-h-max border-none shadow-none", className)}>
      {children ? (
        <CardHeader>
          <CardTitle>{children}</CardTitle>
        </CardHeader>
      ) : null}
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Left Side - VoiceBox */}
            <div className="col-span-2 md:col-span-1 ">
              <VoiceBox
                className="h-full w-full flex flex-col items-center justify-center m-auto"
                onAudioRecorded={handleAudioRecorded}
                isSubmitting={isSubmitting}
                title="Record Your Feedback"
              />
            </div>

            {/* Right Side - Form */}
            <div className="col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Feedback Form</CardTitle>
                  <CardDescription>
                    Please fill out the form below. Based on the audio, the
                    feedback will be populated.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Name */}
                  <div className="flex flex-col space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      {...register("name")}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Contact No */}
                  <div className="flex flex-col space-y-2">
                    <Label htmlFor="contactNo">Contact Number</Label>
                    <Input
                      id="contactNo"
                      placeholder="Enter your contact number"
                      {...register("contactNo")}
                    />
                    {errors.contactNo && (
                      <p className="text-red-500 text-sm">
                        {errors.contactNo.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      placeholder="Enter your email"
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Referenced By */}
                  <div className="flex flex-col space-y-2">
                    <Label htmlFor="referencedBy">
                      How did you get to know about us?
                    </Label>
                    <Select
                      onValueChange={(value) => setValue("referencedBy", value)}
                      defaultValue=""
                    >
                      <SelectTrigger id="referencedBy">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="social-media">
                          Social Media
                        </SelectItem>
                        <SelectItem value="word-of-mouth">
                          Word of Mouth
                        </SelectItem>
                        <SelectItem value="regular-customer">
                          Regular Customer
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.referencedBy && (
                      <p className="text-red-500 text-sm">
                        {errors.referencedBy.message}
                      </p>
                    )}
                  </div>

                  {/* Transcription */}
                  <div className="flex flex-col space-y-2">
                    <Label htmlFor="transcription">Transcription</Label>
                    <Textarea
                      rows={5}
                      id="transcription"
                      placeholder="Audio transcription will appear here..."
                      {...register("transcription")}
                      disabled
                    />
                    {errors.transcription && (
                      <p className="text-red-500 text-sm">
                        {errors.transcription.message}
                      </p>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col md:flex-row items-center justify-end gap-4">
                  {/* Clear Recording */}
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={handleClearRecording}
                    disabled={isSubmitting}
                  >
                    Clear Recording
                  </Button>

                  {/* Submit */}
                  <Button type="submit" disabled={isSubmitting}>
                    Submit Feedback
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </CardContent>
      </form>
    </Card>
  );
};
