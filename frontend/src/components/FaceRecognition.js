import React, { useRef, useState } from "react";
import {
  Button,
  Typography,
  Box,
  Paper,
  Stack,
  Alert,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import Navbar from "./Navbar";

const FaceRecognition = () => {
  const videoRef = useRef(null);
  const [message, setMessage] = useState("");

  const openCamera = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      })
      .catch((err) => {
        console.error("Error accessing camera: ", err);
        setMessage("Error accessing the camera. Please check permissions.");
      });
  };

  const captureAndCheck = () => {
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(videoRef.current, 0, 0);
    const imageData = canvas.toDataURL("image/png");

    // Send full data URI with "data:image/png;base64," prefix
    if (!imageData) {
      setMessage("Error: No image captured.");
      return;
    }

    fetch("http://localhost:5000/recognize", {
      method: "POST",
      body: JSON.stringify({ image: imageData }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.match) {
          window.location.href = `/profile?id=${data.profileId}`;
        } else {
          setMessage("No match found. Please register.");
          window.location.href = "/register";
        }
      })
      .catch((err) => {
        console.error("Error processing the image: ", err);
        setMessage("Error processing image.");
      });
  };

  const instructions = [
    {
      title: "Step 1: Open the Camera",
      description: "Click on the 'Open Camera' button to activate your webcam.",
    },
    {
      title: "Step 2: Position Yourself",
      description:
        "Ensure your face is fully visible in the camera frame for accurate recognition.",
    },
    {
      title: "Step 3: Capture Your Face",
      description:
        "Click on 'Capture & Check' to take a snapshot of your face for analysis.",
    },
    {
      title: "Step 4: View Results",
      description:
        "If recognized, you'll be redirected to your profile. Otherwise, register your face.",
    },
  ];

  return (

    <><Navbar /><Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#f5f5f5",
        p: 3,
      }}
    >
 
      <Paper
        elevation={3}
        sx={{
          p: 2,
          mb: 3,
          width: "80%",
          textAlign: "center",
        }}
      >
        <video
          ref={videoRef}
          style={{
            width: "100%",
            height:"500px",
            borderRadius: "8px",
            backgroundColor: "#000",
          }}
          autoPlay
          muted />
      </Paper>
      <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={openCamera}
        >
          Open Camera
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={captureAndCheck}
        >
          Capture & Check
        </Button>
      </Stack>
      {message && (
        <Alert severity="error" sx={{ mb: 3, width: "80%" }}>
          {message}
        </Alert>
      )}

      <Typography variant="h5" gutterBottom>
        How It Works
      </Typography>
      <Grid container spacing={3} sx={{ width: "80%" }}>
        {instructions.map((instruction, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card elevation={2} sx={{ height: "100%" }}>
              <CardContent>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ mb: 1, fontWeight: "bold" }}
                >
                  {instruction.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {instruction.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box></>
  );
};

export default FaceRecognition;
