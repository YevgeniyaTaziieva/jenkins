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
    stage('test') {
      steps {
        sh """
          npm run smoke
        """
      }
      post {
        success {
          archiveArtifacts(artifacts: 'homepage-*.png', followSymlinks: false)
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
