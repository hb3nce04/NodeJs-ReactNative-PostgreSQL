# Fullstack Web Application Template

This is a fullstack web application template featuring:
- **Node.js Express backend**
- **React Native frontend**
- **PostgreSQL database connection**

## Prerequisites
Before setting up the project, ensure you have the following installed:

### 1. Software Dependencies
- [Node.js](https://nodejs.org/) (Latest LTS version recommended)
- [PostgreSQL](https://www.postgresql.org/download/)
- [Android Studio](https://developer.android.com/studio)
  - Required SDK tools:
    - NDK
    - Android SDK Command-line Tools
    - CMAKE
    - Android Emulator
    - Android Emulator Hypervisor Driver
    - Android SDK Platform-Tools
- [Java JDK](https://adoptium.net/) (Latest version recommended)

### 2. Environment Variables
After installation, you need to configure your environment variables.

#### **Windows Environment Variables**
Add the following to your **System Environment Variables**:

- **ANDROID_HOME** = `C:\Users\[USER]\AppData\Local\Android\Sdk`
- **ANDROID_SDK_ROOT** = `C:\Users\[USER]\AppData\Local\Android\Sdk`
- **ANDROID_NDK_HOME** = `C:\Users\[USER]\AppData\Local\Android\Sdk\ndk\[VERSION]`
- **JAVA_HOME** = (Path to the installed JDK directory)

Additionally, add the following to your `Path` variable:
```
%JAVA_HOME%\bin
%ANDROID_HOME%\platform-tools
%ANDROID_HOME%\emulator
%ANDROID_HOME%\tools
%ANDROID_HOME%\tools\bin
%ANDROID_HOME%\cmdline-tools\latest\bin
%ANDROID_NDK_HOME%
```

## Project Setup
### 1. Clone the Repository
```sh
git clone https://github.com/MolnarFerenc123/NodeJs-ReactNative-PostgreSQL
cd NodeJs-ReactNative-PostgreSQL
```

### 2. Install Dependencies
Run the following commands inside both the `backend` and `frontend` folders:
```sh
npm install
```

### 3. Configure Environment Variables
#### **Frontend** (`frontend/.env`)
Create a `.env` file in the `frontend` directory and add:
```
IP_ADDRESS=YOUR_LOCAL_IP
```
Replace `YOUR_LOCAL_IP` with your machine's local network IP address.

#### **Backend** (`backend/.env`)
Create a `.env` file in the `backend` directory and add:
```
DB_USER=your_postgres_username
DB_PASSWORD=your_postgres_password
```
Replace `your_postgres_username` and `your_postgres_password` with your PostgreSQL credentials.

#### **Database Configuration** (`database/dbconfig.js`)
Make sure to specify your database name inside the `pool` object:
```js
const pool = new Pool({
  user: process.env.DB_USER,
  host: 'localhost',
  database: DATABASENAME,
  password: process.env.DB_PASSWORD,
  port: 5432,
});
```

## Running the Application
### **Start the Backend**
```sh
cd backend
npm start
```

### **Start the Frontend**
```sh
cd frontend
npm start
```

### **Start android emulator**
```sh
cd frontend
npm run android
OR
npx react-native run-android
```

## Node.js Dependencies
### **Backend Dependencies**
The backend uses the following packages:
```json
{
  "dependencies": {
    "express": "latest",
    "pg": "latest",
    "dotenv": "latest",
    "cors": "latest",
    "body-parser": "latest"
  }
}
```

### **Frontend Dependencies**
The frontend uses the following packages:
```json
{
  "dependencies": {
    "react": "latest",
    "react-native": "latest",
    "react-navigation": "latest",
    "axios": "latest",
    "dotenv": "latest"
  }
}
```

## Troubleshooting
### 1. Check Environment Variables
Make sure your environment variables are correctly set, especially for `IP_ADDRESS`, `DB_USER`, and `DB_PASSWORD`.

### 2. PostgreSQL Connection Issues
Ensure PostgreSQL is running and accessible. Try connecting manually:
```sh
psql -U your_postgres_username -d your_database_name
```

### 3. Android Emulator Issues
- Ensure all required SDK tools are installed in Android Studio.
- Run `npx react-native doctor` to check for missing dependencies.
- Try running the emulator manually before launching the app:
  ```sh
  emulator -avd <your_avd_name>
  ```

## Additional Notes
- The frontend uses **React Native**, so you need an Android Emulator or a physical device with debugging enabled.
- The backend is built with **Express.js**, and serves API requests from the React Native app.
- Ensure you have PostgreSQL running before starting the backend.

Happy coding! 🚀

