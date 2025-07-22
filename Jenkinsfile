pipline{
    agent any
    stages{
        stage('Build') {
            steps {
                echo 'Building...'
                sh'npm run build'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                sh 'npm test'
                sh 'nodemon app.js'
                // Add your test commands here
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying...'
                // Add your deployment commands here
            }
        }
    }
}