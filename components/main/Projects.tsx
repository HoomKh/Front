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
            src="/cat_detection_deeplearning.jpg"
            title="Cat Recognition (DeepLearning)"
            description="The Cat Recognition Project utilizes deep learning techniques to build a neural network capable of recognizing cats in images. Through data preparation, 
            model building, and evaluation, this project demonstrates the application of neural networks in image classification tasks."
            link="https://github.com/HoomKh/Cat_Recognition_with_DeepLearning"
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
            link="https://github.com/HoomKh/Face_Detection_Model"
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
            link="https://github.com/HoomKh/CO2_Emissions_Linear_Regression"
          />
          <ProjectCard
            src="/happy_sad_classification.jpg"
            title="Emotion Recognition (CNN)"
            description="This project focuses on classifying emotions as happy or sad using machine learning. 
            It leverages TensorFlow and OpenCV to build and train a neural network model. The model processes images of faces, identifying emotional states with high accuracy. 
            The project includes a comprehensive pipeline for data preprocessing, model training, and evaluation, showcasing performance through accuracy and loss curves.
             This innovative approach aids in understanding and interpreting human emotions computationally."
            link="https://github.com/HoomKh/Image_Classification"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;