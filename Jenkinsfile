pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/YOUR-USERNAME/sayerp.git'
                echo 'Checked out code successfully!'
            }
        }
        stage('Build') {
            steps {
                sh 'node --version'
                sh 'npm install'
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                sh 'BUILD_ID=dontKillMe JENKINS_NODE_COOKIE=dontKillMe nohup node server.js > sayerp.log 2>&1 &'
                echo 'SayERP deployed successfully at http://localhost:3000'
            }
        }
    }
}
