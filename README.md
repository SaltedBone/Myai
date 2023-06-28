# Myai Application

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white)
![Google APIs](https://img.shields.io/badge/Google%20APIs-4285F4?style=for-the-badge&logo=google&logoColor=white)

## Executive Summary

Myai is an innovative, user-centric web application that leverages the power of OpenAI's state-of-the-art GPT-3 model and Google's robust suite of APIs. Developed using Python and Flask, this application is designed to serve as an intelligent chatbot interface, enabling users to seamlessly interact with OpenAI's AI models and Google's APIs. The application is hosted on a free tier of a leading cloud service provider, ensuring scalability and reliability.

## Core Features

### Intelligent Interaction with OpenAI

At the heart of Myai is the integration with OpenAI's GPT-3 model, a cutting-edge AI that understands and generates human-like text. This integration empowers the chatbot to perform a wide array of actions available through the APIs, with a primary focus on Google Drive API integration and user preferences for the initial version.

### Comprehensive Google Ecosystem Interaction

Myai is designed to interact with Google's ecosystem, specifically Google Calendar, Gmail, Google Drive, and potentially other APIs like Google Sheets, Google Maps, and Google Translate. The chatbot is capable of performing all available actions, including:

- Google Calendar: Event creation, detail retrieval, and reminder setting.
- Gmail: Email reading, sending, and label management.
- Google Drive: File uploading, downloading, folder creation, file searching, and content viewing.

### Customizable User Preferences

Myai places the user at the center of its design philosophy. The application allows users to customize chatbot behavior, manage user scripts, control resources accessible to both the user and the chatbot, and manage saved prompts. This includes options for users to manage their account details, notification settings, and theme settings for the app's UI.

## User Interface

The user interface, designed with Bootstrap, is intuitive and user-friendly. It includes a chat interface and a settings page, with routes to handle user commands. The chat and settings routes render HTML templates, ensuring a seamless user experience.

## Deployment and Hosting

Myai is deployed using a WSGI HTTP server for Python web applications, such as Gunicorn. A Dockerfile is created for the application, specifying the base image (Python 3.9), setting the working directory in the container (/app), copying the requirements.txt file and installing the Python dependencies, copying the rest of the application into the container, and specifying the command to run when the container starts (gunicorn app:app). This ensures a streamlined deployment process and compatibility with a range of hosting platforms.

## Repository Details

- Full name: SaltedBone/Myai
- Description: A cutting-edge web app that harnesses OpenAI APIs to interact with personal files & information in Google's ecosystem.
- URL: https://github.com/SaltedBone/My
