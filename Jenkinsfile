pipeline {
  agent { 
    docker { 
      image 'mcr.microsoft.com/playwright:v1.42.1-focal'
    } 
  }
  stages {
    stage('Update playwright') {
      steps {
        sh '''
          npm i -D @playwright/test
          npx playwright install
        '''
      }
    }
    stage('test') {
      steps {
        sh '''
          npx playwright test --list
          npx playwright test
        '''
      }
      post {
        success {
          archiveArtifacts(artifacts: 'homepage-*.png', followSymlinks: false)
          sh 'rm -rf *.png'
        }
      }
    }
  }
}
