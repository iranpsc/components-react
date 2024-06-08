import React, { useCallback, useEffect, useRef, useState } from 'react';

import Webcam from 'react-webcam';

const CaptureVideo = ({
  currentStep,
  selfiVideo,
  setSelfiVideo,
  capturing,
  setCapturing,
  submitIdentityHandler,
}) => {
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [videoURL, setVideoURL] = useState('');

  const handleStartCaptureClick = useCallback(() => {
    if (webcamRef.current?.stream) {
      setCapturing(true);
      const mediaRecorder = new MediaRecorder(webcamRef.current.stream, {
        mimeType: 'video/webm',
      });
      mediaRecorder.addEventListener('dataavailable', handleDataAvailable);
      mediaRecorder.start();
      mediaRecorderRef.current = mediaRecorder;
    }
  }, [webcamRef, setCapturing]);

  const handleDataAvailable = useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setSelfiVideo((prev) => {
          return prev ? [...prev, data] : [data];
        });
      }
    },
    [setSelfiVideo]
  );

  const handleStopCaptureClick = useCallback(() => {
    mediaRecorderRef.current?.stop();
    setCapturing(false);
  }, [setCapturing]);

  const handleDownload = useCallback(() => {
    if (selfiVideo) {
      const blob = new Blob(selfiVideo, {
        type: 'video/webm',
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      document.body.appendChild(a);
      a.style.display = 'none';
      a.href = url;
      a.download = 'react-webcam-stream-capture.webm';
      a.click();
      window.URL.revokeObjectURL(url);
      setSelfiVideo([]);
    }
  }, [selfiVideo, setSelfiVideo]);

  useEffect(() => {
    if (selfiVideo) {
      const blob = new Blob(selfiVideo, {
        type: 'video/mp4',
      });
      console.log(blob, 'blob');
      const url = URL.createObjectURL(blob);
      setVideoURL(url);
    }
  }, [selfiVideo]);

  const resetVideo = () => {
    setSelfiVideo(null);
    setVideoURL('');
  };

  return (
    <>
      {!selfiVideo && <Webcam audio={false} ref={webcamRef} />}
      {selfiVideo && (
        <div className='w-full flex flex-col justify-center items-center'>
          <video src={videoURL} controls />
          <div className='w-full flex flex-row justify-center items-center gap-4'>
            <button
              onClick={submitIdentityHandler}
              className='mx-auto w-2/3 mt-4'
            >
              ویدئو مناسب است
            </button>
            <button
              onClick={resetVideo}
              className='mx-auto w-2/3 mt-4'
            >
              تلاش دوباره
            </button>
          </div>
        </div>
      )}
      {capturing ? (
        <button
          onClick={handleStopCaptureClick}
          className='mx-auto w-2/3 mt-4'
        >
          توقف ضبط
        </button>
      ) : (
        !capturing &&
        !selfiVideo && (
          <button
            onClick={handleStartCaptureClick}
            className='mx-auto w-2/3 mt-4'
          >
            شروع ضبط
          </button>
        )
      )}
    </>
  );
};

export default CaptureVideo;