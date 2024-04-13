pipeline {
    agent { 
        any { 
            image 'mcr.microsoft.com/playwright:v1.42.1-focal'
            args '-v C:/Users/taziievay/.jenkins/workspace/pipeline-tests/:/workspace'
        } 
    }
    stages {
        stage('Update playwright') {
            steps {
                sh """
                    npm i -D @playwright/test
                    npx playwright install
                """
            }
        }
        stage('Install Dependencies') {
            steps {
                // Встановлення необхідних пакетів для Playwright
                sh 'apt-get update && apt-get install -y libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxi6 libxtst6 libnss3 libcups2 libxss1 libxrandr2 libasound2 libatk-bridge2.0-0 libatk1.0-0 libx11-xcb-dev libxcomposite-dev libxcursor-dev libxdamage-dev libxi-dev libxtst-dev libnss3-dev libcups2-dev libxss-dev libxrandr-dev libasound2-dev libatk-bridge2.0-dev libatk1.0-dev'
            }
        }
        stage('test') {
            steps {
                sh """
                    npm run smoke
                """
            }
            post {
                success {
                    archiveArtifacts(artifacts: '*/test-failed-*', followSymlinks: false)
                    sh 'rm -rf *.png'
                }
            }
        }
        stage('Check Files') {
            steps {
                // Вивести список файлів у поточному каталозі
                sh 'ls -l'
            }
        }
    }
}
