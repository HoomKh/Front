import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";
import Link from "next/link";
const Projects = () => {
  return (
    <div
      className="flex flex-col py-20 gap-y-5"
    >
      <div
        className="flex flex-col items-center justify-center gap-10 "
        id="projects">

        <h2 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
          My Projects
        </h2>

        <div className="h-full w-full flex justify-center flex-col md:flex-row gap-10 px-10">
          <ProjectCard
            src="/Parking_Space.jpg"
            title="Intelligent Parking Space Management"
            description="Intelligent Parking Space Management is a computer vision-based project that detects and manages parking spaces in real-time. 
            Utilizing OpenCV and machine learning, 
            it identifies vacant spots in a parking lot from video footage, making parking management efficient and automated. Ideal for modern smart city solutions"
            link="https://github.com/HoomKh/Intelligent-Parking-Space-Management"
          />
          <ProjectCard
            src="/object_detection_with_YOLO.jpg"
            title="DetectMaster YOLO"
            description="Welcome to DetectMaster YOLO, a comprehensive project for object detection using the YOLO (You Only Look Once) algorithm. 
            This repository contains various scripts to detect objects in real-time using a webcam, count cars and people, and detect personal protective equipment (PPE)."
            link="https://github.com/HoomKh/DetectMaster_YOLO"
          />
          <ProjectCard
            src="/face_detection_model.jpg"
            title="Face Detection Model"
            description="The Face Detection Model, develops a robust face detection model using advanced machine learning techniques.
            It involves setting up the environment with TensorFlow, OpenCV, and matplotlib, collecting and augmenting images for a comprehensive dataset,
            and building and training the model with TensorFlow. The model is fine-tuned for accuracy and evaluated for real-world performance."
            link="https://github.com/HoomKh/Face-Detection-Model"
          />

        </div>
        <div className="h-full w-full flex justify-center flex-col md:flex-row gap-10 px-10">
          <ProjectCard
            src="/Shape_Recognition.jpg"
            title="Shape Recognition"
            description="Shape Recognition is a machine learning project focused on classifying geometric shapes like triangles, stars, squares, and circles. 
            Using TensorFlow and Keras, the project covers the entire pipeline from data preprocessing to model evaluation and prediction,
            providing visualizations and code snippets to facilitate understanding and implementation."
            link="https://github.com/HoomKh/Shape_Recognition"
          />
          <ProjectCard
            src="/CO2_Emissions_Prediction.jpg"
            title="CO2 Emissions (Linear Regression)"
            description="This project focuses on predicting CO2 emissions of vehicles based on their engine sizes using a linear regression model."
            link="https://github.com/HoomKh/CO2-Emissions-Linear-Regression"
          />
          <ProjectCard
            src="/happy_sad_classification.jpg"
            title="Emotion Recognition (CNN)"
            description="This project focuses on classifying emotions as happy or sad using machine learning. 
            It leverages TensorFlow and OpenCV to build and train a neural network model. The model processes images of faces, identifying emotional states with high accuracy. 
            The project includes a comprehensive pipeline for data preprocessing, model training, and evaluation, showcasing performance through accuracy and loss curves.
             This innovative approach aids in understanding and interpreting human emotions computationally."
            link="https://github.com/HoomKh/Emotion-Detection-HappySad-Classification"
          />
        </div>
        <div className="h-full w-full flex justify-center flex-col md:flex-row gap-10 px-10">
          <ProjectCard
            src="/BinaryHandwrittenDigitRecognition.jpg"
            title="Binary Handwritten Digit Recognition"
            description="This project implements a neural network model using TensorFlow and Keras to recognize handwritten digits as either 0 or 1. 
            The model is trained, evaluated, and tested using the MNIST dataset,
             demonstrating effective binary classification performance."
            link="https://github.com/HoomKh/Binary-Handwritten-Digit-Recognition"
          />
          <ProjectCard
            src="/HandWrittenDigit.jpg"
            title="Handwritten Digit Recognition"
            description="This project implements a machine learning model to recognize handwritten digits from images.
             Utilizing popular libraries like TensorFlow and Keras, the project demonstrates image preprocessing,
             model training, and evaluation, providing an end-to-end solution for digit classification tasks."
            link="https://github.com/HoomKh/Handwritten-Digit-Recognition"
          />
          <ProjectCard
            src="/Softmax.jpg"
            title="Softmax Neural Network"
            description="The project demonstrates the implementation of the softmax function in a neural network using TensorFlow. 
            It includes data generation, model training, and prediction steps, 
            showcasing the process of building and evaluating a multi-class classification model on synthetic data generated with the `make_blobs` function."
            link="https://github.com/HoomKh/Softmax-neural-network"
          />
        </div>
        <div className="h-full w-full flex justify-center flex-col md:flex-row gap-10 px-10">
          <ProjectCard
            src="/Anomaly_Detection_Server.jpg"
            title="Anomaly Detection in Server Performance Metrics"
            description="This project implements an anomaly detection algorithm to identify unusual behavior in server computers using throughput and latency metrics. 
              It aims to enhance server reliability and performance monitoring."
            link="https://github.com/HoomKh/Anomaly-Detection-in-Server-Performance-Metrics"
          />
          <ProjectCard
            src="/CO2_Emission_Multiple_Linear_Regression.jpg"
            title="CO2 Emission Multiple Linear Regression"
            description="This project involves developing a multiple linear regression model to predict CO2 emissions. 
            Using a dataset of various factors influencing emissions, the model analyzes relationships and quantifies the impact of each predictor, 
            enabling accurate forecasting and informed environmental decision-making."
            link="https://github.com/HoomKh/CO2-Emission-Multiple-Linear-Regression"
          />
          <ProjectCard
            src="/Coffee_Roasting.jpg"
            title="Coffee Roasting Deeplearning"
            description="The Coffee-Roasting-Deeplearning  project innovates coffee roasting through advanced deep learning, optimizing temperature and time for superior flavor, aroma, and quality."
            link="https://github.com/HoomKh/Coffee-Roasting-Deeplearning"
          />
        </div>
        <div className="h-full w-full flex justify-center flex-col md:flex-row gap-10 px-10">

          <ProjectCard
            src="/Coffee_Roasting.jpg"
            title="CO2 Emissions Linear Regression"
            description="This project focuses on predicting CO2 emissions of vehicles based on their engine sizes using a linear regression model."
            link="https://github.com/HoomKh/CO2-Emissions-Linear-Regression"
          />
          <ProjectCard
            src="/cat_detection_deeplearning.jpg"
            title="Cat Recognition (DeepLearning)"
            description="The Cat Recognition Project utilizes deep learning techniques to build a neural network capable of recognizing cats in images. Through data preparation, 
            model building, and evaluation, this project demonstrates the application of neural networks in image classification tasks."
            link="https://github.com/HoomKh/Cat_Recognition_with_DeepLearning"
          />
          <ProjectCard
            src="/Hand_Tracking.jpg"
            title="Hand Tracking Mediapipe"
            description="This project is a real-time hand tracking application using OpenCV and MediaPipe.
             It captures video from a webcam, detects hand landmarks, and displays the results with FPS. 
             The project includes a main script for video capture and a module for hand detection functionality."
            link="https://github.com/HoomKh/Hand-Tracking-Mediapipe"
          />
        </div>
        <div className="h-full w-full flex justify-center flex-col md:flex-row gap-10 px-10">
          <ProjectCard
            src="/cat_recognition_Log.jpg"
            title="Cat Recognition (Logistic Regression)"
            description="This project implements a logistic regression model to recognize cats in images. It involves loading and preprocessing data, initializing parameters, 
            computing the weighted sum plus bias, applying the sigmoid function, and making predictions, with visualizations of cost reduction over iterations."
            link="https://github.com/HoomKh/Cat_Recognition_with_LogisticRegression"
          />
          <ProjectCard
            src="/AI_Virtual_Mouse.jpg"
            title="AI Virtual Mouse"
            description="This project leverages computer vision and AI to create a virtual mouse controlled by hand gestures. Utilizing a webcam, the system tracks hand movements,
             interprets gestures, and performs mouse operations like moving the cursor and clicking, providing a touchless interface for interacting with a computer."
            link="https://github.com/HoomKh/AI-Virtual-Mouse"
          />

        </div>

      </div>
    </div>
  );
};

export default Projects;