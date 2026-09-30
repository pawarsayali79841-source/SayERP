pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/pawarsayali79841-source/SayERP.git'
                echo 'Checked out code successfully!'
            }
        }
        stage('Build') {
            steps {
                bat 'node --version'
                bat 'npm install'
                bat 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                withEnv(['JENKINS_NODE_COOKIE=dontKillMe', 'BUILD_ID=dontKillMe']) {
                    bat 'start "" /B cmd /c "node server.js > sayerp.log 2>&1"'
                }
                echo 'SayERP deployed successfully at http://localhost:3000'
            }
        }
    }
}
