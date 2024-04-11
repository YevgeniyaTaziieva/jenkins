pipeline {
  agent { 
    docker { 
      image 'mcr.microsoft.com/playwright:v1.42.1-focal'
    } 
  }
  stages {
    stage('Update playwright') {
      steps {
        cmd /c '''
          npm i -D @playwright/test
          npx playwright install
        '''
      }
    }
    stage('test') {
      steps {
        cmd /c '''
        npm run smoke
        '''
      }
      post {
        success {
          archiveArtifacts(artifacts: 'homepage-*.png', followSymlinks: false)
          cmd /c 'rm -rf *.png'
        }
      }
    }
  }
}
