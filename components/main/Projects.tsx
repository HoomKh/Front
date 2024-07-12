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
        className="flex flex-col items-center justify-center "
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
            link="https://github.com/HoomKh" 
            />
          <ProjectCard
            src="/object_detection_with_YOLO.jpg"
            title="DetectMaster YOLO"
            description="Welcome to DetectMaster YOLO, a comprehensive project for object detection using the YOLO (You Only Look Once) algorithm. 
            This repository contains various scripts to detect objects in real-time using a webcam, count cars and people, and detect personal protective equipment (PPE)."
            link="https://github.com/HoomKh"
          />
          <ProjectCard
            src="/face_detection_model.jpg"
            title="Face Detection Model"
            description="The Face Detection Model, develops a robust face detection model using advanced machine learning techniques.
            It involves setting up the environment with TensorFlow, OpenCV, and matplotlib, collecting and augmenting images for a comprehensive dataset,
            and building and training the model with TensorFlow. The model is fine-tuned for accuracy and evaluated for real-world performance."
            link="https://github.com/HoomKh"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;