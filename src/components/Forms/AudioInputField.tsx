import React, { useState, useRef } from 'react';
import Button from './Button';

import recordIconInactive from 'assets/images/record-icon-violett.svg';
import recordIconActive from 'assets/images/record-icon-white.svg';

interface AudioInputFieldProps {
  onRecordingStart: () => void;
  onRecordingStop: (audioBlob: Blob | null) => void;
  maxDuration?: number;
}

const AudioInputField: React.FC<AudioInputFieldProps> = ({
  onRecordingStart,
  onRecordingStop,
  maxDuration = 60
}) => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingDuration, setRecordingDuration] = useState(0);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startRecording = async () => {
    try {
      chunksRef.current = [];
      setRecordingDuration(0);
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      mediaRecorderRef.current = recorder;

      recorder.ondataavailable = (e) => chunksRef.current.push(e.data);
      recorder.onstop = () => {
        const audioBlob = new Blob(chunksRef.current, {
          type: 'audio/ogg; codecs=opus'
        });
        onRecordingStop(audioBlob);
        setRecordingDuration(0);
      };

      recorder.start();
      setIsRecording(true);
      onRecordingStart();

      timerRef.current = setInterval(() => {
        setRecordingDuration((prev) => {
          if (prev >= maxDuration - 1) {
            stopRecording();
            return maxDuration;
          }
          return prev + 1;
        });
      }, 1000);
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  };

  const stopRecording = () => {
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state !== 'inactive'
    ) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      mediaRecorderRef.current.stream
        .getTracks()
        .forEach((track) => track.stop());
    }
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const handleClick = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  const timeLeft = maxDuration - recordingDuration;

  return (
    <div className="flex flex-col">
      <div className="relative flex items-center justify-center h-[180px] bg-white rounded-lg border border-gray-300 border-solid shadow-sm">
        <div className="flex flex-col items-center">
          <Button
            type="button"
            variant={isRecording ? 'primary' : 'secondary'}
            size="square"
            className={`relative ${isRecording ? 'animate-pulse' : ''}`}
            onClick={handleClick}
          >
            <img
              src={isRecording ? recordIconActive : recordIconInactive}
              alt="Record"
              className="w-6 h-6"
            />
          </Button>
        </div>
      </div>
      <p className="mt-1.5 text-sm leading-5 text-gray-600">
        {isRecording
          ? `${timeLeft} second${timeLeft !== 1 ? 's' : ''} left`
          : `${maxDuration} second${maxDuration !== 1 ? 's' : ''} available`}
      </p>
    </div>
  );
};

export default AudioInputField;
